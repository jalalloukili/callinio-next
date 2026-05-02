# Callinio — Instructions pour Claude Code

## Contexte projet

Landing page de Callinio, assistant vocal IA pour les artisans français.
Stack : Next.js 16 (App Router) + React 18 + TypeScript + Tailwind v4.

## Règles importantes

- Ne jamais déployer sur Vercel ou plateformes tierces — le déploiement cible est un VPS auto-hébergé (Nginx + PM2 + Certbot).
- La police Inter Variable est locale (`public/fonts/`) — ne pas ajouter de requête vers Google Fonts.
- Le CSS du design system est dans `src/app/globals.css` — ne pas fragmenter en modules CSS séparés.
- Tailwind v4 est utilisé pour les utilitaires ponctuels uniquement. Les composants complexes utilisent les classes CSS existantes dans `globals.css`.

## Architecture composants

Seuls les composants avec hooks/browser APIs ont `'use client'` :
- `nav.tsx` — scroll + hamburger
- `scroll-reveal.tsx` — IntersectionObserver
- `hero.tsx` — démo audio
- `how.tsx` — activation d'étapes au scroll
- `pricing.tsx` — calculateur de forfait

Tout le reste est Server Component (pas de directive).

## Design tokens

```css
--teal-deep: #004D40   /* primaire sombre */
--teal:      #0F766E   /* primaire */
--teal-glow: #14B897   /* accent lumineux */
--teal-soft: #34D4B4   /* accent doux */
--amber:     #FBBF24   /* CTA / highlight */
--ink:       #07100D   /* fond sombre — hero, footer, CTA final */
--paper:     #FAFAF7   /* fond clair — sections éditoriales */
```

## Commandes

```bash
npm run dev      # dev sur http://localhost:3000
npm run build    # build production
npm start        # démarrer le build
npm run lint     # vérification ESLint
```

## Assets

- `public/assets/logo_callinio.png` — logo couleur (header)
- `public/assets/logo_callinio_blanc_mini.png` — logo blanc (footer, fond sombre)
- Utiliser `next/image` pour tous les `<img>` afin d'optimiser les images.

## Sections de la page (ordre)

Nav → Hero → Marquee → Cost → How → Features → Testimonials → Compare → Product → Pricing → Guarantees → Faq → ClosingCta → Footer → ScrollReveal
