# Portfolio design system: "Hard Copy"

Complete rebrand (September 2026). Nothing from the previous charcoal-and-violet
system is reused. The factual project and career data stay in `src/data/` and
match the general CV (`cv-latex/general`).

## Direction

Neo-brutalism for a backend engineer: raw structure, hard edges and oversized
type, with conventional reading comfort in long text. The references are the
neubrutalism.com rules (single stroke width, zero-blur offset shadows, flat
fills, at most three accents), the NN/g guidance (readable body copy, clear
states, contrast) and 2026 portfolio patterns (typography as the interface,
draggable stickers with a keyboard alternative, stack marquees).

Hook in the first five seconds: the name fills the width on a yellow block,
and eight stickers with real work items (MT103 → pacs.008, Siigo · Alegra ·
SATCOM, L2/L3 incidents…) drop onto the hero and can be dragged around.

## Tokens (source of truth: `src/styles/global.css`)

| Purpose | Token | Value | Notes |
| --- | --- | --- | --- |
| Page | `--paper` | `#FFFDF5` | Off-white, never pure white |
| Ink | `--ink` | `#0D0D0D` | Text, borders, shadows |
| Muted text | `--muted` | `#45443F` | 9:1 on paper |
| Accent 1 | `--yellow` | `#FFD93D` | Hero and highlights; ink text only |
| Accent 2 | `--blue` | `#2F5BFF` | Links on paper (5.1:1); paper text on blue |
| Accent 3 | `--pink` | `#FF6FB5` | Stickers and tags; ink text only (7.6:1) |

- Stroke: `3px solid var(--ink)` everywhere; `2px` only inside dense rows.
- Radius: `0`.
- Shadows (zero blur): `--shadow-sm 3px 3px`, `--shadow-md 5px 5px`,
  `--shadow-lg 8px 8px`.

## Type

| Role | Font | Use |
| --- | --- | --- |
| Display | Archivo Black | Name, page titles, section titles, uppercase |
| Body | Space Grotesk 400/500/700 | Paragraphs and UI |
| Mono | JetBrains Mono 500 | Labels, dates, tags, marquee |

Extreme sizes only for headlines; body stays at 1.05–1.15rem with 1.6 line
height and a 65ch measure.

## Components

- **Block**: bordered box with `--shadow-md`. Cards, panels and CTAs.
- **Button**: bordered, `--shadow-md`. Hover lifts (−2px, −2px) with
  `--shadow-lg`; press moves into the shadow (3px, 3px) with no shadow.
- **Tag**: mono, 2px border, small shadow, flat accent fill.
- **Section bar**: black band with a mono index (`01 / WORK`) and a display
  title.
- **Marquee**: black strip with mono items; pauses on hover and for reduced
  motion.
- **Sticker**: rotated tag with an accent fill; draggable with pointer, and
  movable with arrow keys when focused.

## Motion (one owner per animation)

- CSS: letters of the name rise on first paint (server-split, never
  `opacity: 0` on the LCP); marquees.
- anime.js: stickers drop in with a spring and are draggable
  (`createDraggable`), loaded on idle.
- GSAP ScrollTrigger: blocks "stamp" in (slight rotation and overshoot) and
  section titles reveal by characters. Loaded lazily.
- `prefers-reduced-motion`: everything renders in its final state; stickers
  stay in place and remain keyboard-movable.

## Page contract

- Every route shares header, footer, tokens and button voice.
- Home: hero with stickers → capabilities → selected work → built in the open
  → closing call to action.
- Work and About foreground evidence and chronology, taken from the CV.
- Projects keeps the interactive timeline explorer, restyled.
- Contact presents direct channels and both CV downloads.
- No invented metrics, availability claims or client source disclosures.
