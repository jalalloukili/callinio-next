# Callinio — Agent Instructions

## Project context

Landing page for Callinio, an AI voice assistant for French artisans.
Stack: Next.js 16 (App Router) + React 18 + TypeScript + Tailwind v4.

## Hard rules

- **No Vercel or third-party platforms.** Deployment target is a self-hosted VPS (Nginx + PM2 + Certbot).
- **No Google Fonts.** Inter Variable is served locally from `public/fonts/`.
- **Do not split the CSS.** The entire design system lives in `src/app/globals.css`. Do not create CSS modules or additional stylesheets.
- Tailwind v4 is used for one-off utilities only. Complex components use the existing class names defined in `globals.css`.

## Component architecture

Only components that use hooks or browser APIs carry `'use client'`:
- `nav.tsx` — scroll detection + hamburger menu
- `scroll-reveal.tsx` — IntersectionObserver
- `hero.tsx` — interactive audio demo
- `how.tsx` — scroll-based step activation
- `pricing.tsx` — pricing calculator (range sliders)

Everything else is a Server Component (no directive needed).

## Design tokens

```css
--teal-deep: #004D40   /* primary dark */
--teal:      #0F766E   /* primary */
--teal-glow: #14B897   /* bright accent */
--teal-soft: #34D4B4   /* soft accent */
--amber:     #FBBF24   /* CTA / highlight */
--ink:       #07100D   /* dark background — hero, footer, closing CTA */
--paper:     #FAFAF7   /* light background — editorial sections */
```

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm start        # start production build
npm run lint     # ESLint check
```

## Assets

- `public/assets/logo_callinio.png` — color logo (header, light backgrounds)
- `public/assets/logo_callinio_blanc_mini.png` — white logo (footer, dark backgrounds)
- Always use `next/image` for images, never a raw `<img>` tag.

## Page section order

Nav → Hero → Marquee → Cost → How → Features → Testimonials → Compare → Product → Pricing → Guarantees → Faq → ClosingCta → Footer → ScrollReveal
