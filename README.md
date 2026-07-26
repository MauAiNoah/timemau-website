# TimeMau / MauAI public website

The bilingual pre-launch website for **MauAI by Time Mau** and **Noah Library**.

> The library is the product. AI is the librarian.

The site is a static Astro build for GitHub Pages. It uses approved Romanian and English copy, approved brand and interface assets, no analytics, no external fonts, no runtime backend, and no public product downloads.

## Current protected review state

- Product state: pre-launch and active development.
- Production build origin: `https://www.timemau.com`.
- Production base path: `/`.
- English is the root and `x-default` language.
- Romanian lives under `/ro/`.
- Early-access transport: `disabled`.
- Official contact: `contact@timemau.com`.
- Downloads: unavailable until signed and validated artifacts exist.
- Review access gate: enabled.
- Indexing while gated: disabled through page metadata, `robots.txt`, and sitemap exclusion.
- Repository custom-domain activation and DNS: manual steps, not performed by this release.

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

Local development and the custom-domain production build run at `/`.

For temporary project-site diagnostics only:

```sh
PUBLIC_SITE_ORIGIN=https://mauainoah.github.io \
PUBLIC_BASE_PATH=/timemau-website \
npm run build
```

The deployed `main` workflow always targets `https://www.timemau.com/`.

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
- root-safe links, assets, icons, scripts, and web manifest;
- page titles, descriptions, Open Graph, sitemap exclusion, and robots behavior;
- password rejection, SHA-256 unlock, and same-tab reload behavior;
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

Until Mau completes the repository custom-domain and DNS steps, the previous
project URL may remain available:

`https://mauainoah.github.io/timemau-website/`

The protected release artifact itself now targets:

`https://www.timemau.com/`

No `CNAME` file is committed. GitHub ignores it for a custom GitHub Actions
Pages workflow; the domain belongs in **Repository → Settings → Pages → Custom
domain**. Follow `docs/CUSTOM_DOMAIN_GODADDY.md`. No DNS or GoDaddy change was
made by this repository release.

## Release states

### Current protected custom-domain review

- custom-domain build at `/`;
- password gate active;
- `noindex, nofollow`;
- `robots.txt` blocks all crawling;
- protected routes omitted from sitemap;
- early access and downloads disabled.

### Future public launch

Only after separate approval:

- remove the password gate;
- remove `noindex`;
- allow crawling;
- restore the sitemap;
- validate indexing, canonicals, hreflang, redirects, and HTTPS.

## Documentation

- `docs/WEBSITE_HANDOFF.md`
- `docs/ASSET_MANIFEST.md`
- `docs/CLAIMS_REGISTER.md`
- `docs/CUSTOM_DOMAIN_GODADDY.md`
- `artifacts/website/VISUAL_REVIEW.md`
