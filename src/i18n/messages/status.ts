import type { Locale } from '@/lib/i18n/types';
import type { SegmentStatus } from '@/lib/fakta';
import { segment } from '@/lib/fakta';

/**
 * Tekst og farge for statusmerkene.
 *
 * Fakta eier statusen (tilgjengelig, beta, kommer). Nettsiden eier teksten,
 * inkludert årstallene. Et segment kan derfor si «Kommer 2027» selv om fakta
 * bare vet at det er «kommer».
 */
export type StatusVisning = { tekst: string; farge: string };

const FARGE: Record<SegmentStatus, string> = {
  tilgjengelig: 'bg-success/10 text-success',
  beta: 'bg-primary/10 text-primary',
  kommer: 'bg-secondary-light text-text-muted',
};

/** Generell tekst per status, brukt når et segment ikke har egen. */
const GENERELL: Record<Locale, Record<SegmentStatus, string>> = {
  no: { tilgjengelig: 'Tilgjengelig nå', beta: 'Pilot', kommer: 'Kommer' },
  en: { tilgjengelig: 'Available now', beta: 'Pilot', kommer: 'Coming' },
};

/**
 * Tekst per segment. Den norske er hentet fra merke_pa_nettsiden i fakta,
 * så den holdes i sync automatisk. Den engelske står her.
 */
const ENGELSK_PER_SEGMENT: Record<string, string> = {
  familierom: 'Coming 2027',
  'omsorgsbolig-hub': 'Pilot 2027',
  bpa: 'Launching autumn 2026',
  avlastning: 'Launching autumn 2026',
  barnevern: 'Coming Q2 2027',
  jodavisit: 'Coming 2027',
};

/**
 * Merker for kort som ikke er kundesegmenter, for eksempel kortet for
 * kommuner og kortet for implementering på forsiden. All statustekst skal bo
 * i denne filen, også disse.
 */
const LOSE_MERKER: Record<Locale, Record<string, string>> = {
  no: { kommune: 'Lanseres høst 2026' },
  en: { kommune: 'Launching autumn 2026' },
};

export function loseMerke(id: string, locale: Locale): string {
  return LOSE_MERKER[locale][id] ?? '';
}

export function getStatusVisning(segmentId: string, locale: Locale): StatusVisning {
  const s = segment(segmentId);
  const tekst =
    locale === 'no'
      ? s.merke_pa_nettsiden || GENERELL.no[s.status]
      : ENGELSK_PER_SEGMENT[segmentId] || GENERELL.en[s.status];
  return { tekst, farge: FARGE[s.status] };
}
