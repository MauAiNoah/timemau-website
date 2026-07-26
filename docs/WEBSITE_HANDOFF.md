# TimeMau / MauAI website handoff

Review date: 26 July 2026

## Verdict

Implementation and local acceptance gates: **ready**.

Protected custom-domain release state: **prepared for `main` deployment**.

- Production origin: `https://www.timemau.com`
- Production base path: `/`
- Password gate: enabled.
- Indexing: blocked.
- Official contact: `contact@timemau.com`.
- Pages source: GitHub Actions.
- Repository custom domain: pending Mau's manual Pages setting.
- GoDaddy and DNS: unchanged.

## Sources used

Authoritative launch-kit material:

- website architecture;
- ethical copy strategy and psychology;
- final Romanian copy;
- final English copy;
- route contract;
- design system;
- asset manifest;
- SEO and structured-data rules;
- privacy, legal, and claims guardrails;
- early-access form specification;
- deployment guidance;
- QA acceptance checklist;
- machine-readable `content/en.json` and `content/ro.json`.

Approved visual sources:

- brand system board;
- Captain Mau expression board;
- desktop application concept;
- companion/download concept;
- supplied logo vectors, favicons, and bilingual Open Graph cards.

The source application, Noah, evaluation harnesses, models, private documents, caches, credentials, and local paths were not copied into this repository.

## Visual reference findings

- Brand and mascot boards: 1448 × 1086.
- Desktop and companion concepts: 1586 × 992.
- The launch-kit approved originals are pixel-identical to the corresponding approved interface references.
- The dominant surface is warm white/paper, with midnight structure, teal action, light borders, soft shadows, and restrained coral/amber.
- The desktop application is primarily light; its navy sidebar is product chrome, not the website's page background.

## Architecture

- Astro static output.
- Strict TypeScript.
- Local JSON copy.
- Semantic HTML.
- One global stylesheet using design tokens.
- No frontend framework.
- Two small browser scripts.
- No production server, database, CMS, external font, analytics, tracker, or runtime API.
- Typed configuration for origin, base path, release state, early access, downloads, noindex, and review access.

## Pages and languages

Nine English/Romanian route pairs:

1. Home.
2. Library.
3. Privacy principles.
4. About.
5. Early access.
6. Download state.
7. FAQ.
8. Website privacy policy.
9. Terms / pre-release notice.

Plus one calm bilingual 404.

Every localized pair has:

- correct document language;
- localized title and description;
- canonical URL;
- English alternate;
- Romanian alternate;
- `x-default`;
- localized Open Graph text and image;
- equivalent language-switch destination.
- root-relative assets, scripts, icons, and manifest.

## Components

- global pre-launch announcement;
- sticky desktop/mobile header;
- language switch;
- hero with responsive approved concept;
- positioning and signature metaphor;
- four-step library flow;
- three-state evidence contract;
- My Library / Noah Library model;
- cross-domain connection section;
- local-first section;
- planned companion section;
- textual Captain Mau section using the book-vessel mark;
- garden origin story;
- early-access state adapter;
- native FAQ disclosures;
- localized footer;
- review gate;
- branded 404.

## Copy fidelity

The approved machine-readable homepage copy is used unchanged. No major approved headline was paraphrased.

New inner-page and legal sentences were written only where the launch kit required a complete public explanation but did not provide a full page-length deck. They reuse approved claims, qualifications, product status, and tone. The user supplied `contact@timemau.com` as the official website address. No legal entity, jurisdiction, postal address, pricing, release date, availability, testimonial, user metric, or system requirement was invented.

## Asset result

- Three approved SVG brand assets.
- Four supplied favicon/app-icon PNGs.
- Two supplied social-card PNGs.
- Desktop concept: 640/960/1280 AVIF and WebP.
- Companion concept: 640/960/1280 AVIF and WebP.
- Explicit dimensions, responsive `srcset`, localized alt text, eager hero loading, and lazy below-fold loading.
- No original reference boards shipped in production.
- No standalone Captain Mau shipped because no clean production asset exists.

See `docs/ASSET_MANIFEST.md`.

## Review access

The requested password-review experience is enabled. Only a SHA-256 digest is committed; the clear password is not stored in source files.

Behavior verified:

- incorrect value shows a localized error;
- correct value unlocks the site;
- unlock state uses tab-scoped session storage;
- a reload in the same tab remains unlocked;
- the gate is localized;
- the gated build is `noindex` and robots-disallowed.
- protected routes are excluded from the sitemap.

Limitation: GitHub Pages cannot enforce private server-side authentication. The gate prevents normal rendered access but does not make public static files confidential.

## Early access and downloads

- Early-access mode: `disabled`.
- No endpoint, mail address, fake submission, or silent data loss.
- Mailto adapter requires an approved `@timemau.com` address.
- Endpoint adapter requires HTTPS.
- No active download button.
- No binary, version, date, checksum, or finalized requirement.

## Accessibility result

Target: WCAG 2.2 AA practices; no certification claim.

Verified:

- skip link and landmarks;
- one H1 per page;
- no heading-level skips in sampled pages;
- keyboard-operable password gate, mobile menu, and FAQ;
- mobile menu Escape behavior and focus return;
- visible focus;
- labelled input;
- useful or intentionally empty alt text;
- no duplicate IDs;
- no unlabelled visible controls;
- practical visible control targets;
- reduced-motion handling;
- no color-only states;
- correct language attributes;
- zero horizontal overflow across required viewports.

Lighthouse accessibility: 100 desktop, 100 mobile.

## SEO result

- unique localized titles and descriptions;
- canonical and bidirectional hreflang;
- `x-default`;
- localized Open Graph and Twitter cards;
- review-mode sitemap exclusion;
- robots;
- WebSite/Brand data;
- BreadcrumbList on inner pages;
- FAQPage only on the visible FAQ;
- no product offers, prices, ratings, versions, or downloads.

The review-gated build scores 66 in Lighthouse SEO solely because it is intentionally blocked from indexing. A temporary gate-disabled build scored 100 SEO with crawlability, canonical, and hreflang audits passing. The final repository output was rebuilt with the gate and noindex restored.

## Performance result

Lighthouse against the final review gate:

| Mode | Performance | Accessibility | Best practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Desktop | 100 | 100 | 100 | 66 gated | 0.2 s | 0.3 s | 0 | 0 ms |
| Mobile | 100 | 100 | 100 | 66 gated | 0.8 s | 1.4 s | 0 | 0 ms |

The site has no third-party render blockers, autoplay, external fonts, analytics, or oversized original PNG in the hero.

## Exact local validation

- `npm run typecheck` — 43 Astro/TypeScript files, zero errors/warnings/hints.
- `npm run lint` — 49 public source and workflow files passed claims/integration/path lint.
- `npm test` — 7/7 Vitest tests, including password rejection, digest unlock, same-tab reload, and separate-tab lock.
- `npm run build` — 19 HTML pages plus root `robots.txt` and `site.webmanifest`; no review sitemap generated.
- `npm run validate` — 18 localized routes, 404, custom-domain metadata, root links/assets/manifest, password gate, noindex, robots, sitemap exclusion, and disabled product states.
- Browser checks — incorrect password rejected; correct password unlocked; same-tab reload remained unlocked; canonical resolved to `https://www.timemau.com/`; contact, manifest, root paths, focus, and console state passed.
- Lighthouse — desktop/mobile plus a temporary public-ready SEO configuration.
- `npm audit` — zero known vulnerabilities after dependency installation.
- Clear-password scan — the supplied review password is absent from source and build output; only its 64-character SHA-256 digest is present.
- Secret and local-path scans — no recognized credentials, private keys, local hostnames, or `/Users/mau` paths.
- `git diff --check` — passed.

Final release-gate results are recorded after the bounded custom-domain commit,
push, and GitHub Actions run.

## Screenshots

See:

- `artifacts/website/screenshots/`
- `artifacts/website/VISUAL_REVIEW.md`
- `artifacts/website/lighthouse/`

## Deployment

Protected release target:

`https://www.timemau.com/`

Repository Pages source: **GitHub Actions**.

No `CNAME` file is used because GitHub ignores it for custom Actions Pages
publishing. Mau must set `www.timemau.com` in the repository Pages settings and
then configure DNS manually. See `docs/CUSTOM_DOMAIN_GODADDY.md`.

## Limitations

- Client-side gate is not server-side confidentiality.
- Captain Mau has no clean approved standalone production asset.
- Early-access collection is disabled.
- Downloads are unavailable.
- macOS, Windows, 16 GB, Noah Core, and companion access remain qualified targets/plans.
- GitHub Pages does not apply the portable `_headers` file; the document-level CSP remains active, and stronger response headers require a host that supports them.
- The custom-domain hostname cannot serve the build until the repository Pages
  setting and DNS are completed manually.

## Change boundaries

- Zero GoDaddy changes.
- Zero DNS changes.
- Custom-domain build configuration only; zero repository-domain setting changes.
- Zero MauAI application changes.
- Zero Noah changes.
- Zero harness/evaluator changes.
- Zero model/runtime changes.
