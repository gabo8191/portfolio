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
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    // Los PDF se indexan como documentos propios y el sitemap solo recoge
    // rutas de páginas, así que los CV se añaden a mano.
    sitemap({
      customPages: [
        new URL(`${base.replace(/\/$/, '')}/cv-en.pdf`, site).href,
        new URL(`${base.replace(/\/$/, '')}/cv-es.pdf`, site).href,
      ],
    }),
  ],

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Geist',
        cssVariable: '--font-geist',
        fallbacks: ['Inter', 'sans-serif'],
      },
    ],
  },
});
