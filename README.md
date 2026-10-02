# Gabriel Castillo | Portfolio

Personal site for my backend, integration, production support and internal tools work. The site is in English; the general CV is available in English and Spanish.

## Content

- **Home:** the problems I work on and links to the CV and other pages.
- **About:** employment history, technical focus and education.
- **Client work:** public descriptions of professional projects. Private source code is not published.
- **Projects:** personal and open source work, kept separate from employment.
- **Contact:** email, public profiles and CV downloads.

The professional details are based on the career inventory in the local vault and `~/carrera/perfil/perfil-maestro.md`. Keyrus began in July 2026. TotalDev was freelance from February 2025 through March 2026 and overlapped with PARQ. The team uses estimates from the Keyrus PBIX tool; formal application deployment is pending. Kubernetes, Terraform and observability belong to personal work.

## Stack

Astro, React (projects explorer), Tailwind CSS, GSAP (scroll reveals) and anime.js (the draggable sticker desk). Both animation libraries load on demand. The visual system, "Hard Copy", is documented in `design.md`. Static pages are built for GitHub Pages under `/portfolio/`; the site URL and base path can be configured in `astro.config.mjs` as documented in `docs/DOMINIO-PROPIO.md`.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Languages

English is the default and lives at the site root; Spanish lives under `/es/`. Every page declares its twin with `hreflang`, the sitemap lists both, and `/es/` uses its own Open Graph image. A missing Spanish translation fails the build.

## Where to edit

| Content | File |
|---|---|
| Employment and professional projects | `src/data/professional.ts` |
| Personal projects | `src/data/projects.ts` |
| UI copy in English and Spanish (all pages) | `src/i18n/ui.ts` |
| Spanish text of projects, employers and areas | `src/i18n/content-es.ts` (keyed by the English title or slug) |
| Page layouts (served at `/` in English and `/es/` in Spanish) | `src/pages/[...lang]/*.astro` |
| Metadata and structured data | `src/layouts/RootLayout.astro` |
| Visual system (tokens, components) | `src/styles/global.css`, `design.md` |
| Hero stickers | `src/components/sticker-desk.astro` |
| Open Graph images (English and Spanish) | `assets/og/og-image.template.svg` → `npm run og:generate` |
| Machine-readable profile | `public/llms.txt` |
| Downloadable general CV | `public/cv-en.pdf`, `public/cv-es.pdf` |

Published downloads come from `public/`. The copies at the project root are kept in sync. Their source is `~/Documentos/Projects/cv-latex/general/`; refresh both locations when updating the CV.

## License

MIT. See [LICENSE](LICENSE). The project began from the [Nikola Tesla Portfolio](https://github.com/iann-mathaiya/nikola-tesla) template; the current neo-brutalist design is original (September 2026).
