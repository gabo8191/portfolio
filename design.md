# Portfolio design system

This document governs the visual treatment of every public route. The factual
project and career data remain in `src/data/` and the page files.

## Direction

- Genre: modern minimal, with an engineering portfolio voice.
- Marketing page: full viewport animated typographic portrait followed by
  selected work. The name is the visual anchor; role and actions frame it.
- Content pages: wide long document with clear section breaks and compact rows.
- Dark charcoal surfaces and restrained violet accent. The home hero carries
  one large animated shader; interior pages stay still.
- Navigation: compact wordmark and route links. Footer: one quiet closing line.

## Tokens

The source of truth for values is `src/styles/global.css`.

| Purpose | Token |
| --- | --- |
| Main surface | `--color-canvas` |
| Raised surface | `--color-surface` |
| Primary text | `--color-ink` |
| Secondary text | `--color-muted` |
| Divider | `--color-rule` |
| Brand accent | `--color-accent` |
| Focus | `--color-focus` |
| Display and body | `--font-geist` |

## Layout and type

- Content width: 1180 px maximum, with responsive page gutters.
- Display: Geist 600, normal style and tight tracking.
- Body: Geist 400, comfortable line height.
- Long descriptions use a readable measure; headings can use the full grid.
- Cards are reserved for featured content. Career history uses open rows and rules.

## Motion and interaction

- Content appears immediately. The home shader is decorative, can be paused,
  and stops for `prefers-reduced-motion` or when offscreen.
- Hover is a subtle colour change. Focus remains clearly visible.
- Short transitions are disabled under `prefers-reduced-motion`.
- Links and controls stay on one line; navigation wraps as a group on narrow screens.

## Page contract

- All routes share the header, footer, tokens, and button voice.
- Home highlights professional capabilities and leads to work and CV.
- Work and About foreground evidence and chronology.
- Projects keeps its existing interactive explorer and adds a clearer reading frame.
- Contact presents direct channels and CV downloads.
- No invented metrics, availability claims, or client source disclosures.
