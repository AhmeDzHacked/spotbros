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
