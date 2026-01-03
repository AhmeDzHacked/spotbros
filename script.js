// LIGHTBOX (home + gallery completa)
document.querySelectorAll(".grid img, .gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const big = document.createElement("img");
        big.src = img.src;
        big.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 14px;
        `;

        overlay.appendChild(big);
        document.body.appendChild(overlay);
// FRECCIA SINISTRA
const prevBtn = document.createElement("div");
prevBtn.innerHTML = "&#10094;";
prevBtn.style.cssText = `
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
`;
overlay.appendChild(prevBtn);

// FRECCIA DESTRA
const nextBtn = document.createElement("div");
nextBtn.innerHTML = "&#10095;";
nextBtn.style.cssText = `
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
`;
overlay.appendChild(nextBtn);

// CLICK FRECCE
prevBtn.onclick = e => {
    e.stopPropagation();
    currentImgIndex3D =
        (currentImgIndex3D - 1 + images3D.length) % images3D.length;
    big.src = images3D[currentImgIndex3D].src;
};

nextBtn.onclick = e => {
    e.stopPropagation();
    currentImgIndex3D =
        (currentImgIndex3D + 1) % images3D.length;
    big.src = images3D[currentImgIndex3D].src;
};
/* --- CONTATORE IMMAGINI --- */
const counter = document.createElement("div");
counter.style.cssText = `
    position: absolute;
    top: 25px;
    right: 35px;
    color: white;
    font-size: 16px;
    opacity: 0.7;
    font-family: Arial, sans-serif;
`;
overlay.appendChild(counter);
/* --- PULSANTE CHIUSURA (X) SPOSTATO A SINISTRA --- */
const closeBtn = document.createElement("div");
closeBtn.innerHTML = "&times;";
closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    left: 25px;        /* spostata a sinistra */
    font-size: 32px;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    user-select: none;
`;
overlay.appendChild(closeBtn);

closeBtn.onclick = e => {
    e.stopPropagation(); // evita chiusura doppia
    overlay.remove();
};


function updateCounter() {
    counter.textContent = `${currentImgIndex3D + 1} / ${images3D.length}`;
}
updateCounter();

/* aggiorna contatore quando cambia foto */
const originalSrcSetter = Object.getOwnPropertyDescriptor(
    HTMLImageElement.prototype,
    "src"
).set;

Object.defineProperty(big, "src", {
    set(value) {
        originalSrcSetter.call(this, value);
        updateCounter();
    }
});

/* --- SWIPE MOBILE --- */
let touchStartX = 0;
let touchEndX = 0;

overlay.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
});

overlay.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {
        // swipe sinistra → avanti
        currentImgIndex3D = (currentImgIndex3D + 1) % images3D.length;
        big.src = images3D[currentImgIndex3D].src;
    }

    if (touchEndX > touchStartX + 50) {
        // swipe destra → indietro
        currentImgIndex3D =
            (currentImgIndex3D - 1 + images3D.length) % images3D.length;
        big.src = images3D[currentImgIndex3D].src;
    }
});

        overlay.onclick = () => overlay.remove();
    });
});

// ANIMAZIONI ON SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".animate-fadeUp").forEach(el => observer.observe(el));

/* ================================
   🔥 NUOVO LIGHTBOX 3D INTERATTIVO
   ================================ */

let currentImgIndex3D = 0;
let images3D = Array.from(document.querySelectorAll(".grid img, .gallery-grid img"));

function openLightbox3D(index) {
    currentImgIndex3D = index;

    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        perspective: 1000px;
    `;

    const big = document.createElement("img");
    big.src = images3D[currentImgIndex3D].src;
    big.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 14px;
        transition: transform 0.2s ease;
        transform-style: preserve-3d;
    `;

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());

    document.addEventListener("keydown", function keyHandler(e) {
        if (!document.getElementById("lightbox-overlay")) return;

        if (e.key === "ArrowRight") {
            currentImgIndex3D = (currentImgIndex3D + 1) % images3D.length;
            big.src = images3D[currentImgIndex3D].src;
        }
        if (e.key === "ArrowLeft") {
            currentImgIndex3D = (currentImgIndex3D - 1 + images3D.length) % images3D.length;
            big.src = images3D[currentImgIndex3D].src;
        }
        if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", keyHandler);
        }
    });

    overlay.addEventListener("mousemove", e => {
        const rect = big.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * 15;
        const rotateY = -(x / rect.width) * 15;

        big.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    overlay.addEventListener("mouseleave", () => {
        big.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });

    window.addEventListener("deviceorientation", e => {
        if (!document.getElementById("lightbox-overlay")) return;
        const rotateX = e.beta / 10;
        const rotateY = e.gamma / 10;
        big.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}

images3D.forEach((img, i) => {
    img.addEventListener("click", () => openLightbox3D(i));
});
