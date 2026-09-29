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

## Where to edit

| Content | File |
|---|---|
| Employment and professional projects | `src/data/professional.ts` |
| Personal projects | `src/data/projects.ts` |
| About and skills | `src/pages/about.astro` |
| Home and contact copy | `src/pages/index.astro`, `src/pages/contact.astro` |
| Metadata and structured data | `src/layouts/RootLayout.astro` |
| Visual system (tokens, components) | `src/styles/global.css`, `design.md` |
| Hero stickers | `src/components/sticker-desk.astro` |
| Open Graph image | `assets/og/og-image.template.svg` → `npm run og:generate` |
| Machine-readable profile | `public/llms.txt` |
| Downloadable general CV | `public/cv-en.pdf`, `public/cv-es.pdf` |

Published downloads come from `public/`. The copies at the project root are kept in sync. Their source is `~/Documentos/Projects/cv-latex/general/`; refresh both locations when updating the CV.

## License

MIT. See [LICENSE](LICENSE). The project began from the [Nikola Tesla Portfolio](https://github.com/iann-mathaiya/nikola-tesla) template; the current neo-brutalist design is original (September 2026).
