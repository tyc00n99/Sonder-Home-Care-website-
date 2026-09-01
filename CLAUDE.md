# Sonder Homecare — website

Marketing site for **Sonder Homecare** (legal name: Faithful Group Home LLC, dba Sonder Homecare), a Minnesota 245D-licensed home and community based services provider. UMPI A853450800. HQ: 7825 Washington Ave South, Suite 300A, Bloomington, MN 55439. Phone 651-417-6115 · Fax +1 651-386-0383 · Admin@sonderhomecaremn.com.

## Business facts (do not contradict these)

- **In-home provider, NOT a facility.** Staff travel to clients' own homes, family homes, and the community. Never present as a group home despite the LLC's name — "Faithful Group Home LLC" appears ONLY in the header topbar.
- Services: most basic and intensive 245D services. Mainly referred for: **IHS (without training / with training / with family training), respite (in-home & out-of-home), night supervision, homemaker**. Does NOT provide: community residential services, crisis respite, integrated community supports (ICS), ICF/DD.
- Waivers served: CADI, BI, DD, Elderly Waiver. Service area: ~100-mile radius of Bloomington.
- Differentiators: no waitlist; 1-business-day referral replies; caregivers hired with 2+ yrs experience; languages: English, Spanish, Korean, ASL, Hmong; RN on call for medication management; 24/7 on-call DSP.
- Intake (families): gather records w/ permission → family names case manager + county, signs one authorization form → meet the person, build schedule → written plan (support plan, IAPP when applicable, med/financial mgmt) → updates daily/weekly/biweekly + consistent case-manager updates.

## Copy rules (owner's standing preferences)

- **No question-phrased copy anywhere except the FAQ page.**
- **No statistics-led copy** — families don't respond to numbers; paint pictures instead.
- Short, digestible blocks; outcome lists max ~2 bullets. No em dashes. No AI-sounding filler.
- Hooks matter: every page leads with a sharp plain-words line.

## Design system

- Palette (Pennant-inspired): bone `#F0EEE6` ground, `#EAE8E0` bands, stone `#E1DED4`, warm charcoal ink `#292420`, gray `#6E6760`, **forest `#364F36`** (CSS var `--sage`; structure/trust: eyebrows, dark panels, map), **copper `#DA7842`** (`--copper`; action: CTAs, headline pops, rates), peach `#F5BD8E` (accents on forest).
- Type: **Newsreader** (display serif, 400, letter-spacing ~-0.015em), **Outfit** (body/UI), **Inconsolata** (mono eyebrows/labels) — loaded via next/font in `app/layout.jsx`.
- Video shown SHARP as framed content (`.vidcard`), never blurred decoration — except the homepage hero, which is a blurred full-bleed loop under a bone veil.
- Reference sites the owner loves: withpanacea.com, hubble.ai, getpennant.ai, rasyn.ai.
- Owner likes to pick from 2–4 visual mockup options before big design changes.

## Tech

- **Next.js App Router, JavaScript (no TS), static export** (`output: 'export'`, trailingSlash). Routes: `/` `/families` `/professionals` `/services` `/faq` `/careers`.
- Components: Header, Footer, MnMap (real MN geometry via dangerouslySetInnerHTML), IntakeStepper (auto-advancing rail), ServicesAccordion, ContactForm, ReferralForm, CareersForm, PageFx (scroll reveals, count-ups, reduced-motion video pause).
- **Forms backend: FormSubmit.co** → `lib/submitForm.js` posts to `formsubmit.co/ajax/admin@sonderhomecaremn.com`. Requires one-time "Activate Form" click in that inbox. On failure, forms show phone/email fallback.
- Same-page anchors: use plain `<a href="#id">`, NOT Next `<Link>` (breaks with trailingSlash).
- In-page media lives in `public/` (hero-loop.mp4, services-loop.mp4, posters, family-kitchen.jpg). Compress video with ffmpeg (~960px, CRF 32-33, muted, faststart; keep clips short).

## Deploy & domain

- Push to `main` → auto-deploys BOTH: **Vercel** (primary, sonder-home-care-website.vercel.app) and GitHub Pages (backup, needs `NEXT_PUBLIC_BASE_PATH`, set in `.github/workflows/deploy.yml`).
- **Live domain: https://www.sonderhomecaremn.com** (apex 308s to www). Registered at **Squarespace Domains** (owner says "Square"); Squarespace nameservers; DNS records: A @ → 216.150.1.1, CNAME www → e7f8fe6f4239ea12.vercel-dns-016.com.
- **Email is Google Workspace on this domain** — NEVER touch the MX (`smtp.google.com`), SPF, or `google._domainkey` records in Squarespace DNS.
- Workflow: edit → `npm run build` to verify → commit → push. Live in ~1 minute.

## Repo notes

- `legacy/` holds the original single-file site versions (reference only).
- `sonder-care-records.html` (EHR prototype) is gitignored on purpose — repo is public; keep it out.
- Known loose ends: Vercel account showed an "Overdue payment" badge (check billing); FormSubmit activation click pending unless already done.
