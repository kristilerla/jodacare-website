'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getSite } from '@/i18n/site';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';
import { lesSamtykke, settSamtykke, SAMTYKKE_ENDRET } from '@/lib/samtykke';

/**
 * Spør om lov til å måle sidevisninger.
 *
 * Dette er ikke en informasjonskapsel-boks, og teksten skal ikke late som
 * den er det. Vercel Web Analytics setter ingen informasjonskapsler — det
 * eneste som lagres på enheten er svaret ditt, slik at vi slipper å spørre
 * på nytt. Se src/lib/samtykke.ts.
 *
 * Tre valg som er tatt med vilje:
 *
 * - Ikke modal. Banneret stjeler ikke fokus, låser ikke siden og har ikke
 *   aria-modal. Du kan lese hele nettstedet uten å svare.
 * - «Nei takk» er like lett å trykke på som «Ja». Like stor flate, samme
 *   plass i rekkefølgen. Skjeve valg er nettopp det Datatilsynet slår ned på.
 * - Banneret vises først etter montering. Leses lagringen under render,
 *   spriker server og klient.
 */
export function SamtykkeBanner() {
  const pathname = usePathname() || '/';
  const locale: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'no';
  const t = getSite(locale).samtykke;

  // null = vet ikke ennå (ikke montert). Da vises ingenting.
  const [svar, setSvar] = useState<'ja' | 'nei' | 'ukjent' | null>(null);

  useEffect(() => {
    const oppdater = () => setSvar(lesSamtykke() ?? 'ukjent');
    oppdater();
    window.addEventListener(SAMTYKKE_ENDRET, oppdater);
    return () => window.removeEventListener(SAMTYKKE_ENDRET, oppdater);
  }, []);

  if (svar !== 'ukjent') return null;

  return (
    <div
      role="region"
      aria-label={t.label}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-secondary-dark bg-white p-4 shadow-lg sm:p-6"
    >
      <div className="container flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-serif text-lg font-semibold text-text">{t.title}</p>
          <p className="mt-1 text-sm text-text-light">
            {t.body}{' '}
            <Link
              href={withLocale('/jodacare/personvernerklaering', locale)}
              className="text-primary-dark underline underline-offset-2 hover:text-primary"
            >
              {t.lesMer}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => settSamtykke('nei')}
            className="rounded-lg border-2 border-primary px-5 py-2.5 font-medium text-primary-dark transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.avsla}
          </button>
          <button
            type="button"
            onClick={() => settSamtykke('ja')}
            className="rounded-lg border-2 border-primary bg-primary px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-dark hover:border-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.godta}
          </button>
        </div>
      </div>
    </div>
  );
}
