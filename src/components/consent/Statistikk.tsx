'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { lesSamtykke, SAMTYKKE_ENDRET } from '@/lib/samtykke';

/**
 * Besøksstatistikk, lastet først når noen har sagt ja.
 *
 * Vercel Web Analytics teller sidevisninger uten informasjonskapsler og uten
 * å identifisere den enkelte. Skriptet lastes likevel ikke før samtykke er
 * gitt — det er hele poenget med banneret ved siden av.
 *
 * NB: statistikken må også slås på i Vercel (prosjektet → Analytics). Er den
 * ikke det, gjør <Analytics /> ingenting, uansett hva folk svarer.
 */
export function Statistikk() {
  const [samtykket, setSamtykket] = useState(false);

  useEffect(() => {
    const oppdater = () => setSamtykket(lesSamtykke() === 'ja');
    oppdater();
    window.addEventListener(SAMTYKKE_ENDRET, oppdater);
    return () => window.removeEventListener(SAMTYKKE_ENDRET, oppdater);
  }, []);

  if (!samtykket) return null;
  return <Analytics />;
}
