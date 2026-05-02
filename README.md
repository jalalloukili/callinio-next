# Callinio — Landing Page

Landing page de [Callinio](https://callinio.fr), l'assistante vocale IA pour les artisans français. Répond aux appels entrants, qualifie les demandes et notifie l'artisan en temps réel — même quand il a les mains prises.

## Stack technique

| Outil | Version | Rôle |
|-------|---------|------|
| Next.js | 16 (App Router) | Framework React SSR/SSG |
| React | 18 | UI |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | v4 | Utilitaires CSS |
| Inter Variable | — | Police locale (woff2) |

## Structure du projet

```
callinio-next/
├── public/
│   ├── assets/          # Logos (logo_callinio.png, logo_callinio_blanc_mini.png)
│   └── fonts/           # Inter Variable woff2 (local, pas de requête Google)
└── src/
    ├── app/
    │   ├── globals.css  # Système de design complet (tokens + composants)
    │   ├── layout.tsx   # Metadata FR, lang="fr", SEO
    │   └── page.tsx     # Assemblage des sections
    └── components/
        ├── icons.tsx
        ├── nav.tsx               # 'use client' — menu hamburger, scroll
        ├── scroll-reveal.tsx     # 'use client' — IntersectionObserver
        ├── footer.tsx
        └── sections/
            ├── hero.tsx          # 'use client' — démo audio interactive
            ├── cost.tsx          # Coût d'un appel manqué
            ├── how.tsx           # 'use client' — étapes au scroll
            ├── features.tsx      # Bento grid fonctionnalités
            ├── testimonials.tsx  # Témoignages clients
            ├── compare.tsx       # Tableau comparatif
            ├── product.tsx       # App mobile
            ├── pricing.tsx       # 'use client' — calculateur de forfait
            ├── guarantees.tsx    # Garanties
            ├── faq.tsx           # FAQ accordéon
            └── closing-cta.tsx   # CTA final
```

## Design system — tokens CSS

Définis dans `src/app/globals.css` via des custom properties :

```css
--teal-deep: #004D40   /* primaire sombre */
--teal:      #0F766E   /* primaire */
--teal-glow: #14B897   /* accent lumineux */
--teal-soft: #34D4B4   /* accent doux */
--amber:     #FBBF24   /* CTA / highlight */
--ink:       #07100D   /* fond sombre (hero, footer) */
--paper:     #FAFAF7   /* fond clair (sections éditoriales) */
```

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Déploiement sur VPS (Nginx + Node)

### 1. Build

```bash
npm run build
```

### 2. Démarrer avec PM2

```bash
npm install -g pm2
pm2 start npm --name callinio -- start
pm2 save && pm2 startup
```

### 3. Nginx — config minimale

```nginx
server {
    listen 80;
    server_name callinio.fr www.callinio.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. HTTPS avec Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d callinio.fr -d www.callinio.fr
```

## Contact

- Email : bonjour@callinio.fr
- Tel : 04 28 29 09 09
- Adresse : 14 rue de la République, 69002 Lyon
