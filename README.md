# Blujet AI — Landing Site

Production-ready marketing site for Blujet AI (AI Voice Agent for E-commerce).

Tech stack: Next.js 14 (App Router) + TypeScript, Tailwind CSS, shadcn/ui (Button/Accordion), Framer Motion, @tsparticles/react, lucide-react, next-seo, Recharts, Vercel Analytics.

## Getting Started

1. Install deps: `npm install`
2. Run dev: `npm run dev`
3. Build: `npm run build` then `npm start`

## Notes

- Hero uses dynamic Particles with reduced motion support.
- ROI calculator is instant and renders a small Recharts bar chart.
- All CTAs link to `/demo`.
- SEO via `next-seo` with DefaultSeo + JSON-LD.

## Structure

- `app/` — App Router pages and layout
- `components/` — UI sections and shadcn primitives
- `content/site.ts` — central copy/config
- `lib/utils.ts` — `cn` helper
- `public/` — logos and `og.svg`

## License

All rights reserved.© Blujet AI

