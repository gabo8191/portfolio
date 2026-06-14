// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabo8191.github.io',
  base: '/portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

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
