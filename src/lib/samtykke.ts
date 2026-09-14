/**
 * Samtykke til besøksstatistikk.
 *
 * Viktig om hva dette faktisk er: JodaCare bruker Vercel Web Analytics, som
 * er uten informasjonskapsler. Ingenting legges på brukerens enhet av
 * statistikken selv. Det eneste som lagres er svaret under — og det er
 * tillatt uten samtykke, fordi det er nødvendig for å huske valget.
 *
 * Teksten i banneret skal derfor IKKE si «vi bruker informasjonskapsler».
 * Den skal si hva som faktisk skjer: at vi vil måle hvilke sider som leses,
 * at statistikken er anonym, og at den ikke lastes før man sier ja.
 */

export type Samtykke = 'ja' | 'nei';

const NOKKEL = 'jodacare-statistikk';

/** Sendes når valget endres, slik at banneret og statistikken følger med. */
export const SAMTYKKE_ENDRET = 'jodacare:samtykke';

export function lesSamtykke(): Samtykke | null {
  if (typeof window === 'undefined') return null;
  try {
    const verdi = window.localStorage.getItem(NOKKEL);
    return verdi === 'ja' || verdi === 'nei' ? verdi : null;
  } catch {
    // Privat modus eller blokkert lagring: da spør vi hver gang.
    return null;
  }
}

export function settSamtykke(verdi: Samtykke): void {
  try {
    window.localStorage.setItem(NOKKEL, verdi);
  } catch {
    // Kan vi ikke lagre, gjelder valget for denne økten.
  }
  window.dispatchEvent(new CustomEvent(SAMTYKKE_ENDRET));
}

/** Nullstiller valget, slik at banneret kommer tilbake. */
export function glemSamtykke(): void {
  try {
    window.localStorage.removeItem(NOKKEL);
  } catch {
    // ignorer
  }
  window.dispatchEvent(new CustomEvent(SAMTYKKE_ENDRET));
}
