# TimeMau / MauAI public website

The bilingual pre-launch website for **MauAI by Time Mau** and **Noah Library**.

> The library is the product. AI is the librarian.

The site is a static Astro build for GitHub Pages. It uses approved Romanian and English copy, approved brand and interface assets, no analytics, no external fonts, no runtime backend, and no public product downloads.

## Current public state

- Product state: pre-launch and active development.
- English is the root and `x-default` language.
- Romanian lives under `/ro/`.
- Early-access transport: `disabled`.
- Downloads: unavailable until signed and validated artifacts exist.
- Review access gate: enabled.
- Indexing while gated: disabled through page metadata and `robots.txt`.

The review gate is client-side because GitHub Pages serves public static files. It keeps casual visitors out of the rendered site and stores an unlock marker only in tab-scoped session storage, but it is **not server-side authentication**. Source files remain retrievable by someone who knows how to inspect a static deployment. Use hosting-level access control for genuinely private material.

## Commands

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm run validate
npm run qa
```

Local development runs at `/`. The normal production build uses `/timemau-website/`.

## Architecture

```text
src/
├── components/     reusable UI and localized page compositions
├── config/         typed release, access, download, and form configuration
├── content/        exact approved RO/EN homepage copy plus inner-page copy
├── i18n/           route equivalence contract
├── layouts/        metadata, hreflang, structured data, CSP, header, footer
├── pages/          static Astro routes
├── styles/         the warm, light MauAI design system
└── utils/          SEO and early-access safety adapters
```

The browser receives only two small scripts:

- password-review gate and session unlock;
- keyboard behavior for native disclosure elements.

Everything else is static HTML and CSS.

## Routes

| English | Romanian |
|---|---|
| `/` | `/ro/` |
| `/library/` | `/ro/biblioteca/` |
| `/privacy/` | `/ro/confidentialitate/` |
| `/about/` | `/ro/despre/` |
| `/early-access/` | `/ro/acces-timpuriu/` |
| `/download/` | `/ro/descarcare/` |
| `/faq/` | `/ro/intrebari/` |
| `/legal/privacy/` | `/ro/legal/confidentialitate/` |
| `/legal/terms/` | `/ro/legal/termeni/` |

A branded bilingual 404 is also included.

## Authoritative content and visuals

Homepage copy comes unchanged from the launch kit's `content/en.json` and `content/ro.json`, supported by `03_COPY_RO.md` and `04_COPY_EN.md`.

The visual implementation follows, in order:

1. approved interface references;
2. approved bilingual copy;
3. original logo and social assets;
4. the launch-kit architecture and design system.

The desktop concept is used as a clearly labelled product concept. The companion concept appears only in a planned-feature section. The Captain Mau expression board is reference-only; no standalone mascot was extracted or redrawn.

## Configuration

Safe public settings live in `src/config/site.ts`. Environment overrides are listed in `.env.example`.

- `PUBLIC_SITE_ORIGIN`
- `PUBLIC_BASE_PATH`
- `PUBLIC_RELEASE_STATUS`
- `PUBLIC_EARLY_ACCESS_MODE`
- `PUBLIC_EARLY_ACCESS_EMAIL`
- `PUBLIC_EARLY_ACCESS_ENDPOINT`
- `PUBLIC_NOINDEX`
- `PUBLIC_ACCESS_GATE_ENABLED`
- `PUBLIC_ACCESS_GATE_DIGEST`

Endpoint mode rejects non-HTTPS URLs. Mailto mode rejects addresses outside the approved `@timemau.com` domain. The default build has neither.

## Quality and privacy

The project validates:

- all 18 localized routes and the 404;
- canonical and bidirectional hreflang metadata;
- base-path-safe links and assets;
- page titles, descriptions, Open Graph, sitemap, and robots behavior;
- one H1, explicit image dimensions, alt text, duplicate IDs, and labelled fields;
- disabled early-access and download states;
- absence of trackers, external fonts, placeholder contact details, and prohibited claims;
- safe form transport modes.

There are no first-party analytics, advertising pixels, marketing cookies, fingerprinting, external fonts, social widgets, chat widgets, CAPTCHA, or telemetry in the website.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml` with Node.js 24 LTS, pinned dependencies, typecheck, lint, tests, build validation, and the official Pages artifact/deploy actions.

If Pages has not been enabled:

1. open repository **Settings**;
2. choose **Pages**;
3. set **Source** to **GitHub Actions**;
4. rerun the deploy workflow.

The temporary project URL is:

`https://mauainoah.github.io/timemau-website/`

For the later `www.timemau.com` transition, follow `docs/CUSTOM_DOMAIN_GODADDY.md`. No DNS or GoDaddy change belongs in this repository task.

## Documentation

- `docs/WEBSITE_HANDOFF.md`
- `docs/ASSET_MANIFEST.md`
- `docs/CLAIMS_REGISTER.md`
- `docs/CUSTOM_DOMAIN_GODADDY.md`
- `artifacts/website/VISUAL_REVIEW.md`
