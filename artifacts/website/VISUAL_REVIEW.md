# Visual review

Review date: 26 July 2026

Verdict: the implementation is recognizably MauAI, predominantly warm and light, library-first, editorial, and restrained. It does not reproduce the rejected blue dashboard direction as the website shell. Navy is structure, teal is action, and the dark palette is limited to the announcement, metaphor section, connections section, early-access section, and footer.

## Source concepts mapped

| Approved concept | Website mapping |
|---|---|
| Brand system | Book-vessel logo, logo proportions, warm cream/paper, midnight/ocean text, teal action, coral focus, amber planned states, generous whitespace |
| Desktop app concept | Hero product proof, navy rail echoed only inside the approved mockup, source/citation idea reflected in trust cards |
| Companion/download concept | Planned v1.x companion section only, visibly labelled planned |
| Captain Mau expression system | Personality and tone reference only; no production mascot extraction |

## Screenshot review

| Screenshot | Route / state | Viewport | Matching elements | Intentional deviations / limits |
|---|---|---:|---|---|
| `screenshots/access-gate-en-1440x900.png` | Password review gate | 1440 × 900 | Warm paper card, mark, teal action, premium restraint | Static client-side gate, not hosting-level authentication |
| `screenshots/home-en-1440x900.png` | `/` | 1440 × 900 | Two-column hero, approved desktop concept, warm canvas, restrained teal | Website is editorial rather than application chrome |
| `screenshots/home-ro-1440x900.png` | `/ro/` | 1440 × 900 | Same hierarchy and concept image; natural diacritic wrapping | Romanian CTA wraps to two lines by design |
| `screenshots/home-en-1280x800.png` | `/` | 1280 × 800 | Approved hero proportions retained | Trust chips fall below the captured fold |
| `screenshots/home-en-1024x768.png` | `/` | 1024 × 768 | Single-column breakpoint, menu control, warm hierarchy | Product image starts below the first viewport |
| `screenshots/home-en-768x1024.png` | `/` | 768 × 1024 | Tablet reflow, readable line length, full concept width | Desktop navigation becomes the mobile disclosure |
| `screenshots/home-en-430x932.png` | `/` | 430 × 932 | Large editorial headline, full-width CTA, visible chips | Product image begins below the fold |
| `screenshots/home-en-390x844.png` | `/` | 390 × 844 | No clipped navigation or copy; practical touch targets | Product proof continues immediately after captured fold |
| `screenshots/home-ro-390x844.png` | `/ro/` | 390 × 844 | Natural Romanian wrapping with diacritics | Long CTA uses a full-width single control |
| `screenshots/home-en-360x800.png` | `/` | 360 × 800 | 320+ reflow direction, no overflow, readable typography | Two-row trust chips are intentional |
| `screenshots/mobile-nav-open-en-390x844.png` | Open mobile menu | 390 × 844 | Paper menu, focus ring, full localized navigation | Overlay uses native disclosure semantics |
| `screenshots/library-en-1440x900.png` | `/library/` | 1440 × 900 | Editorial inner-page hero, evidence-led message | Public explanation only; no fake library UI |
| `screenshots/library-en-390x844.png` | `/library/` | 390 × 844 | Clean reflow and legible status note | Decorative circle remains subtle |
| `screenshots/privacy-en-1440x900.png` | `/privacy/` | 1440 × 900 | Calm trust hierarchy and qualified local-first wording | No absolute privacy badge |
| `screenshots/about-en-1440x900.png` | `/about/` | 1440 × 900 | Authentic garden origin story | No founder portrait or inflated mythology |
| `screenshots/early-access-en-1440x900.png` | `/early-access/` | 1440 × 900 | Transparent tester state and hardware qualification | Form remains visibly disabled |
| `screenshots/early-access-en-390x844.png` | `/early-access/` | 390 × 844 | Long headline wraps safely | Disabled form appears below tester context |
| `screenshots/faq-en-1440x900.png` | `/faq/` | 1440 × 900 | Editorial question hierarchy | Disclosures begin below the captured first fold |
| `screenshots/404-en-390x844.png` | Missing route | 390 × 844 | Book-vessel mark, calm bilingual recovery copy | One shared 404 includes Romanian secondary copy |

## Responsive result

Browser measurements confirmed `scrollWidth === clientWidth` at:

- 1440 × 900;
- 1280 × 800;
- 1024 × 768;
- 768 × 1024;
- 430 × 932;
- 390 × 844;
- 360 × 800.

The mobile menu remains within the viewport at 390 px, opens with click and Enter, closes with Escape, and returns focus to its summary. English-to-Romanian switching preserves the equivalent Library route.

## Known visual limitation

The approved desktop and companion concepts contain interface copy and people/details created inside the concept boards. They are shown only as labelled product concepts. No claim is made that every depicted surface is implemented or available.
