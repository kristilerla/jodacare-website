import type { Locale } from './types';

/** Interne stier uten locale-prefix (norsk rot). */
export function withLocale(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'no') {
    if (normalized === '/en' || normalized.startsWith('/en/')) {
      return normalized === '/en/home' || normalized === '/en/home/'
        ? '/'
        : normalized.replace(/^\/en/, '') || '/';
    }
    return normalized;
  }
  if (normalized === '/' || normalized === '') return '/en/home';
  if (normalized.startsWith('/en')) return normalized;
  return `/en${normalized}`;
}

/** Finn motsvarende path på annet språk ut fra pathname (fra usePathname()). */
export function alternatePathForLocale(pathname: string, target: Locale): string {
  const clean = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const isEn = clean === '/en' || clean.startsWith('/en/');
  if (target === 'en') {
    if (clean === '/' || clean === '') return '/en/home';
    if (isEn) return clean === '/en' ? '/en/home' : clean;
    return `/en${clean}`;
  }
  if (clean === '/en/home' || clean === '/en') return '/';
  if (isEn) {
    const stripped = clean.replace(/^\/en/, '') || '/';
    return stripped;
  }
  return clean || '/';
}
