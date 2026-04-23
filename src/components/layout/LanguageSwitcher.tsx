'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { alternatePathForLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';
import { getSite } from '@/i18n/site';

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname() || '/';
  const toNo = alternatePathForLocale(pathname, 'no');
  const toEn = alternatePathForLocale(pathname, 'en');
  const copy = getSite(locale).lang;

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-secondary-dark bg-white p-0.5"
      role="navigation"
      aria-label={locale === 'no' ? copy.switchToEnglish : copy.switchToNorwegian}
    >
      <Link
        href={toNo}
        className={clsx(
          'rounded-md px-2 py-1 text-xs font-medium transition-colors',
          locale === 'no'
            ? 'bg-primary text-white'
            : 'text-text-light hover:bg-secondary-light hover:text-text'
        )}
        hrefLang="nb"
        title={copy.norwegian}
      >
        <span aria-hidden="true">🇳🇴</span>
        <span className="sr-only">{copy.norwegian}</span>
      </Link>
      <Link
        href={toEn}
        className={clsx(
          'rounded-md px-2 py-1 text-xs font-medium transition-colors',
          locale === 'en'
            ? 'bg-primary text-white'
            : 'text-text-light hover:bg-secondary-light hover:text-text'
        )}
        hrefLang="en"
        title={copy.english}
      >
        <span aria-hidden="true">🇬🇧</span>
        <span className="sr-only">{copy.english}</span>
      </Link>
    </div>
  );
}
