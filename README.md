# Spotbros - Automotive Photography Portfolio

Un sito web moderno e professionale per fotografia automotive, street e lifestyle.

## 🎨 Caratteristiche

- **Design Cinematografico**: Palette scura con accenti rosso/arancio dinamici
- **Responsive**: Perfettamente ottimizzato per desktop, tablet e mobile
- **Lightbox Avanzato**: Visualizzazione a schermo intero con navigazione tramite tastiera, mouse e touch
- **Animazioni Fluide**: Transizioni ed effetti coinvolgenti
- **Filtri Portfolio**: Sistema di filtraggio dinamico per categorie
- **Performance Ottimizzate**: Lazy loading immagini e animazioni ottimizzate
- **SEO-Ready**: Meta tag e struttura semantica ottimizzati

## 📁 Struttura File

```
.
├── index.html          # Homepage principale
├── portfolio.html      # Galleria completa
├── main.css           # Stili principali
├── animations.js      # Funzionalità JavaScript
├── README.md          # Documentazione
└── images/            # Cartella per le tue foto
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🚀 Configurazione per GitHub Pages

### 1. Prepara le tue immagini

1. Crea una cartella chiamata `images` nella root del progetto
2. Aggiungi le tue foto nominate come: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, ecc.
3. Consiglio: Ottimizza le immagini (max 1920px larghezza) per tempi di caricamento veloci

### 2. Personalizza i contenuti

**In `index.html`:**
- Modifica i link Instagram (cerca `https://www.instagram.com/Spotbrosz/`)
- Aggiorna l'email di contatto (cerca `assistenza@spotbros.it`)
- Personalizza i testi nelle sezioni About e Hero

**In `portfolio.html`:**
- Aggiungi/rimuovi card della gallery duplicando il blocco `.gallery-card`
- Assegna le categorie corrette: `data-category="automotive|street|lifestyle"`

### 3. Deploy su GitHub Pages

1. **Crea un repository su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TUO-USERNAME/TUO-REPO.git
   git push -u origin main
   ```

2. **Attiva GitHub Pages**
   - Vai su Settings → Pages
   - Source: seleziona "main" branch
   - Clicca Save
   - Il tuo sito sarà disponibile su: `https://TUO-USERNAME.github.io/TUO-REPO/`

### 4. Dominio Personalizzato (Opzionale)

Se hai un dominio personalizzato:
1. Crea un file `CNAME` nella root con il tuo dominio: `www.tuodominio.com`
2. Configura i DNS del dominio con i record A di GitHub:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## 🎯 Funzionalità JavaScript

### Lightbox
- Click su qualsiasi immagine per aprire la visualizzazione a schermo intero
- Navigazione: frecce tastiera (← →), click sulle frecce, swipe su mobile
- Chiudi: tasto ESC, click su X, click fuori dall'immagine
- Contatore immagini in tempo reale

### Filtri Portfolio
- Click sui pulsanti per filtrare per categoria
- Animazioni fluide durante il filtraggio
- Responsive e touch-friendly

### Scroll Animations
- Elementi animati all'ingresso nella viewport
- Effetto parallax sull'hero section
- Navbar con effetto scroll

### Back to Top
- Appare dopo 500px di scroll
- Click per tornare in cima alla pagina

## 🎨 Personalizzazione Colori

I colori principali sono definiti in `:root` nel file `main.css`:

```css
:root {
    --color-bg: #0a0a0a;              /* Sfondo principale */
    --color-surface: #141414;          /* Sfondo sezioni */
    --color-accent: #ff4d00;           /* Colore accent principale */
    --color-accent-hover: #ff6b2c;     /* Accent hover */
    --color-text: #ffffff;             /* Testo principale */
    --color-text-muted: #a0a0a0;       /* Testo secondario */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance Tips

1. **Ottimizza le immagini**:
   - Usa formati moderni: WebP con fallback JPG
   - Comprimi con strumenti come TinyPNG o Squoosh
   - Dimensioni consigliate: 1920x1080px max

2. **Minimizza i file**:
   - Usa strumenti come UglifyJS per JavaScript
   - Usa CSSNano per CSS

3. **CDN per font**:
   - I font Google sono già ottimizzati
   - Considera di self-hostare i font per controllo completo

## 🔧 Troubleshooting

### Le immagini non si caricano
- Verifica che la cartella `images` sia nella root
- Controlla i nomi dei file (case-sensitive su Linux)
- Assicurati che le immagini siano in formato JPG/PNG

### Le animazioni sono troppo lente/veloci
- Modifica i valori `transition` in `main.css`
- Esempio: `--transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);`

### Il lightbox non funziona
- Verifica che `animations.js` sia collegato correttamente
- Controlla la console browser per errori JavaScript
- Assicurati che le immagini abbiano il markup corretto

## 📄 Browser Support

- Chrome/Edge: ✅ Ultime 2 versioni
- Firefox: ✅ Ultime 2 versioni
- Safari: ✅ Ultime 2 versioni
- Mobile Safari: ✅ iOS 12+
- Chrome Mobile: ✅ Ultime 2 versioni

## 📝 License

Questo template è libero da usare per progetti personali e commerciali.

## 🤝 Contributi

Sentiti libero di personalizzare e migliorare il codice secondo le tue esigenze!

## 📧 Contatti

Per domande o supporto sul template:
- Instagram: [@Spotbrosz](https://www.instagram.com/Spotbrosz/)
- Email: assistenza@spotbros.it

---

**Buona fortuna con il tuo portfolio fotografico! 📸**
