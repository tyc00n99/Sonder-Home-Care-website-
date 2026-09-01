# Sonder Homecare — website

Marketing site for Sonder Homecare (Faithful Group Home LLC, dba Sonder Homecare), a licensed 245D home and community based services provider in Minnesota. UMPI A853450800.

Built with **Next.js** (App Router, static export).

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output lands in `out/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (set the repo's Pages source to "GitHub Actions" once). The workflow sets `NEXT_PUBLIC_BASE_PATH=/Sonder-Home-Care-website-` so assets resolve under the project path. On a custom domain or Vercel, leave that variable unset.

## Layout

- `app/` — routes: `/` (home), `/faq`, `/careers`
- `components/` — header, footer, Minnesota map, services accordion, contact form, scroll effects
- `public/` — hero video loop and poster
- `legacy/` — the original single-file versions of the site, kept for reference
