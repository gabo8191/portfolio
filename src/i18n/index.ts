// Minimal i18n helpers. English is the default locale and lives at the site root;
// Spanish lives under /es/. Astro's `i18n` config in astro.config.mjs mirrors this.
import { ui } from './ui';

export const LOCALES = ['en', 'es'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'en';

/** BCP 47 tags for `hreflang`, `inLanguage` and the sitemap. */
export const HTML_LANG: Record<Lang, string> = { en: 'en-US', es: 'es-CO' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_CO' };

export function isLang(value: string | undefined): value is Lang {
  return LOCALES.includes(value as Lang);
}

/** UI dictionary for a locale. */
export function getUi(lang: Lang) {
  return ui[lang];
}

/** Site base path without a trailing slash ("" at the domain root). */
export function basePath(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

/** Absolute-path URL for a page in a locale, e.g. localePath('es', '/work') → /portfolio/es/work/. */
export function localePath(lang: Lang, path = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const clean = path === '' || path === '/' ? '' : path.replace(/\/$/, '');
  return `${basePath()}${prefix}${clean}/`;
}

/** Strips the base path and the locale prefix: /portfolio/es/work/ → /work. */
export function stripLocale(pathname: string): string {
  let rest = pathname.startsWith(basePath()) ? pathname.slice(basePath().length) : pathname;
  rest = rest.replace(/^\/es(?=\/|$)/, '');
  rest = rest.replace(/\/$/, '');
  return rest;
}

/** `getStaticPaths` shared by every page under src/pages/[...lang]/: root (en) and /es/. */
export function localeStaticPaths() {
  return LOCALES.map((code) => ({
    params: { lang: code === DEFAULT_LANG ? undefined : code },
  }));
}
