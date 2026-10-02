// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio y ruta base configurables por entorno. Con un dominio propio bastará con
// definir SITE_URL=https://tu-dominio.dev y BASE_PATH=/ (ver docs/DOMINIO-PROPIO.md):
// canonical, hreflang, sitemap, Open Graph, robots.txt y llms.txt quedan correctos y
// robots.txt/llms.txt pasan a servirse en la raíz, que es donde los leen los crawlers.
const site = process.env.SITE_URL ?? 'https://gabo8191.github.io';
const base = process.env.BASE_PATH ?? '/portfolio';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  // English lives at the root, Spanish under /es/. Keep in sync with src/i18n/index.ts.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    // Los PDF se indexan como documentos propios y el sitemap solo recoge
    // rutas de páginas, así que los CV se añaden a mano.
    sitemap({
      // Emits xhtml:link hreflang alternates between each English page and its /es/ twin.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-CO' },
      },
      customPages: [
        new URL(`${base.replace(/\/$/, '')}/cv-en.pdf`, site).href,
        new URL(`${base.replace(/\/$/, '')}/cv-es.pdf`, site).href,
      ],
    }),
  ],

  experimental: {
    // "Hard Copy" system (design.md): display, body and mono faces
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Archivo Black',
        cssVariable: '--font-archivo-black',
        weights: [400],
        fallbacks: ['Impact', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Space Grotesk',
        cssVariable: '--font-space-grotesk',
        weights: [400, 500, 700],
        fallbacks: ['system-ui', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'JetBrains Mono',
        cssVariable: '--font-jetbrains-mono',
        weights: [500],
        fallbacks: ['ui-monospace', 'monospace'],
      },
    ],
  },
});
