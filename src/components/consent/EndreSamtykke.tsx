'use client';

import { useEffect, useState } from 'react';
import { getSite } from '@/i18n/site';
import type { Locale } from '@/lib/i18n/types';
import { glemSamtykke, lesSamtykke, SAMTYKKE_ENDRET } from '@/lib/samtykke';

type Props = { locale: Locale };

/**
 * Viser hva du har svart om besøksstatistikk, og lar deg ombestemme deg.
 *
 * Ligger nederst i personvernerklæringen, som er en side som allerede
 * finnes på begge språk. Å nullstille valget fjerner det som er lagret og
 * henter banneret tilbake — vi later ikke som «endre» er noe annet enn det.
 */
export function EndreSamtykke({ locale }: Props) {
  const t = getSite(locale).samtykke;
  const [svar, setSvar] = useState<'ja' | 'nei' | 'ukjent' | null>(null);

  useEffect(() => {
    const oppdater = () => setSvar(lesSamtykke() ?? 'ukjent');
    oppdater();
    window.addEventListener(SAMTYKKE_ENDRET, oppdater);
    return () => window.removeEventListener(SAMTYKKE_ENDRET, oppdater);
  }, []);

  // Før montering vet vi ikke svaret, og skal ikke gjette i server-HTML-en.
  if (svar === null) return null;

  const status =
    svar === 'ja' ? t.statusJa : svar === 'nei' ? t.statusNei : t.statusUkjent;

  return (
    <div className="mt-10 rounded-xl border border-secondary-dark bg-background-alt p-6">
      <p className="text-text" aria-live="polite">
        {status}
      </p>
      <button
        type="button"
        onClick={glemSamtykke}
        disabled={svar === 'ukjent'}
        className="mt-4 rounded-lg border-2 border-primary px-5 py-2.5 font-medium text-primary-dark transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {t.endre}
      </button>
    </div>
  );
}
