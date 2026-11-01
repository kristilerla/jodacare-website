import type { Locale } from '@/lib/i18n/types';
import type { SegmentStatus } from '@/lib/fakta';
import { segment, modul, innloggingNy } from '@/lib/fakta';

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
  bpa: 'Pilot 2027',
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

/**
 * Fargen på de løse merkene. Kommunekortet har ingen egen status i fakta.
 * Det følger segmentene det samler, som står som kommer til de lanseres.
 */
export function loseMerkeFarge(): string {
  return FARGE.kommer;
}

export function getStatusVisning(segmentId: string, locale: Locale): StatusVisning {
  const s = segment(segmentId);
  const tekst =
    locale === 'no'
      ? s.merke_pa_nettsiden || GENERELL.no[s.status]
      : ENGELSK_PER_SEGMENT[segmentId] || GENERELL.en[s.status];
  return { tekst, farge: FARGE[s.status] };
}

// ── Merker for moduler og funksjoner i nye JodaCare ─────────────────────

const TILGJENGELIG: Record<Locale, string> = { no: 'Tilgjengelig nå', en: 'Available now' };
const KOMMER: Record<Locale, string> = { no: 'Kommer', en: 'Coming' };
const PLANLAGT: Record<Locale, string> = { no: 'Planlagt', en: 'Planned' };

/**
 * «Kommer», «Kommer Q4 2026» eller «Pilot 2027». Et tidspunkt som begynner
 * med «Pilot» vises uten «Kommer».
 */
function kommerTekst(tidspunkt: string | undefined, locale: Locale): string {
  if (!tidspunkt) return KOMMER[locale];
  if (tidspunkt.startsWith('Pilot')) return tidspunkt;
  return `${KOMMER[locale]} ${tidspunkt}`;
}

/**
 * Merket for en modul i nye JodaCare. Status og kvartal kommer fra
 * fakta/moduler.yaml. Teksten bor her.
 */
export function modulMerke(modulId: string, locale: Locale): StatusVisning {
  const m = modul(modulId);
  if (m.status.ny === 'tilgjengelig') return { tekst: TILGJENGELIG[locale], farge: FARGE.tilgjengelig };
  return { tekst: kommerTekst(m.kvartal, locale), farge: FARGE.kommer };
}

/**
 * Merker for det som ikke er en modul i fakta. Innlogging leses fra
 * fakta/innlogging.yaml. Resten er besluttet av produkteier 1. november 2026.
 */
export function funksjonMerke(
  id:
    | 'id-porten'
    | 'jobbkonto'
    | 'helseid'
    | 'egen-app'
    | 'revisjonslogg'
    | 'innsynslogg'
    | 'epj'
    | 'entra-synk'
    | 'ki'
    | 'oversikt-ansatte'
    | 'iot'
    | 'aidn'
    | 'enhets-api',
  locale: Locale,
): StatusVisning {
  const innlogging = { 'id-porten': 'id_porten', jobbkonto: 'entra_id', helseid: 'helseid' } as const;
  if (id in innlogging) {
    const metode = innloggingNy(innlogging[id as keyof typeof innlogging]);
    if (metode.status === 'tilgjengelig') return { tekst: TILGJENGELIG[locale], farge: FARGE.tilgjengelig };
    return { tekst: kommerTekst(metode.kommer_nar, locale), farge: FARGE.kommer };
  }
  if (id === 'aidn') return { tekst: PLANLAGT[locale], farge: FARGE.kommer };
  // Enhets-API hører til Hub og følger Hub-merket.
  if (id === 'enhets-api') return modulMerke('hub', locale);
  return { tekst: KOMMER[locale], farge: FARGE.kommer };
}
