# Public asset manifest

All brand and concept sources were supplied in the approved MauAI website launch kit. The original reference boards remain outside the public build. No stock media, unrelated generated imagery, or standalone mascot extraction was added.

## Brand vectors

| Public asset | Source | Dimensions | Purpose | Optimization | Ownership note |
|---|---|---:|---|---|---|
| `assets/brand/mauai-noah-horizontal.svg` | Approved horizontal logo | 820 × 220 viewBox | Header lockup | Original vector, proportions preserved | Supplied for MauAI |
| `assets/brand/mauai-noah-mark.svg` | Approved book-vessel mark | 256 × 256 viewBox | Footer, Captain section, 404, gate | Original vector, proportions preserved | Supplied for MauAI |
| `assets/brand/mauai-app-icon.svg` | Approved app icon | 512 × 512 viewBox | Future app/manifest use | Original vector | Supplied for MauAI |

## Interface derivatives

The approved desktop and companion PNG boards were resized non-destructively with metadata omitted. AVIF quality 52 and WebP quality 82 are used in responsive `picture` sets.

| Public asset | Source surface | Dimensions | Format | Purpose |
|---|---|---:|---|---|
| `assets/interface/desktop-640.avif` | Desktop app concept | 640 × 400 | AVIF | Small responsive hero |
| `assets/interface/desktop-640.webp` | Desktop app concept | 640 × 400 | WebP | Small responsive fallback |
| `assets/interface/desktop-960.avif` | Desktop app concept | 960 × 600 | AVIF | Medium responsive hero |
| `assets/interface/desktop-960.webp` | Desktop app concept | 960 × 600 | WebP | Medium responsive fallback |
| `assets/interface/desktop-1280.avif` | Desktop app concept | 1280 × 801 | AVIF | Large responsive hero |
| `assets/interface/desktop-1280.webp` | Desktop app concept | 1280 × 801 | WebP | Large responsive fallback |
| `assets/interface/companion-640.avif` | Companion/download concept | 640 × 400 | AVIF | Small planned-feature image |
| `assets/interface/companion-640.webp` | Companion/download concept | 640 × 400 | WebP | Small planned-feature fallback |
| `assets/interface/companion-960.avif` | Companion/download concept | 960 × 600 | AVIF | Medium planned-feature image |
| `assets/interface/companion-960.webp` | Companion/download concept | 960 × 600 | WebP | Medium planned-feature fallback |
| `assets/interface/companion-1280.avif` | Companion/download concept | 1280 × 801 | AVIF | Large planned-feature image |
| `assets/interface/companion-1280.webp` | Companion/download concept | 1280 × 801 | WebP | Large planned-feature fallback |

Both concept families have explicit intrinsic dimensions, responsive `srcset`, meaningful localized alt text, eager hero loading, and lazy below-fold companion loading.

## Social and icon assets

| Public asset | Source | Dimensions | Purpose | Optimization / note |
|---|---|---:|---|---|
| `assets/social/og-mauai-en.png` | Approved English social card | 1200 × 630 | English Open Graph/Twitter | Original approved PNG |
| `assets/social/og-mauai-ro.png` | Approved Romanian social card | 1200 × 630 | Romanian Open Graph/Twitter | Original approved PNG |
| `assets/icons/favicon-32.png` | Approved favicon | 32 × 32 | Browser favicon | Original approved PNG |
| `assets/icons/apple-touch-icon.png` | Approved icon | 180 × 180 | Apple touch icon | Original approved PNG |
| `assets/icons/icon-192.png` | Approved icon | 192 × 192 | Future web-app icon | Original approved PNG |
| `assets/icons/icon-512.png` | Approved icon | 512 × 512 | Future web-app icon | Original approved PNG |

## Non-image public files

| Public file | Purpose |
|---|---|
| `scripts/access-gate.js` | Tab-scoped client-side review gate using Web Crypto and a configured digest |
| `scripts/details-keyboard.js` | Explicit Enter/Space/Escape behavior for disclosures and the mobile menu |
| `_headers` | Portable security-header example; GitHub Pages does not apply this file |

## Captain Mau decision

The approved Captain Mau file is an expression/reference board, not a clean standalone production asset. It was not copied into the public build, cropped, traced, simplified, redrawn, or replaced. The approved book-vessel mark supports the textual Captain Mau section instead.
