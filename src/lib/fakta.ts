/**
 * Typet tilgang til fakta fra jodacare-kunnskap.
 *
 * Verdiene ligger i src/content/fakta.json, som er generert. Oppdater den med
 * «npm run sync-fakta». Ikke importer JSON-filen andre steder enn her.
 *
 * Avledede priser regnes ut her. De ligger ikke i fakta.
 */
import data from '@/content/fakta.json';

export type SegmentStatus = 'tilgjengelig' | 'beta' | 'kommer';
export type Versjon = 'v1' | '2.0' | 'ny';

export type Segment = {
  id: string;
  navn: string;
  status: SegmentStatus;
  merke_pa_nettsiden: string;
  side: string;
  primar_cta: string;
  krever_moduler: string[];
  merknad?: string;
};

export type Modul = {
  id: string;
  navn: string;
  beskrivelse: string;
  inngar_i: 'grunnmodul' | 'tilleggsmodul';
  status: Record<Versjon, string>;
};

const fakta = data.fakta as {
  priser: Record<string, number | string>;
  segmenter: { segmenter: Segment[] };
  moduler: { moduler: Modul[] };
  selskap: Record<string, string | number | null>;
  kontakt: Record<string, string | null>;
  innlogging: Record<string, unknown>;
};

/** Metadata om uttrekket, brukt av porten. */
export const faktaMeta = {
  kildeCommit: data.kilde_commit as string,
  bygget: data.bygget as string,
  sha256: data.sha256 as string,
};

// ── Priser ────────────────────────────────────────────────────────────

const tall = (n: string): number => Number(fakta.priser[n]);

/** Grunnverdier fra fakta. */
export const priser = {
  perTjenestemottakerMnd: tall('kommune_pris_per_tjenestemottaker_mnd'),
  pakkeStorrelse: tall('kommune_pakke_tjenestemottakere'),
  oppstart: tall('kommune_oppstart_engang'),
  familieromMnd: tall('familierom_mnd'),
  proveperiodeDager: tall('familierom_proveperiode_dager'),
  avtaleManeder: tall('avtale_maneder'),
  oppsigelseManeder: tall('oppsigelse_maneder'),
};

/** Pakkepris per måned. Avledet: enhetspris x pakkestørrelse. */
export const pakkeprisMnd = (): number => priser.perTjenestemottakerMnd * priser.pakkeStorrelse;

/** Første år: tolv måneder lisens pluss oppstart. */
export const aar1 = (): number => 12 * pakkeprisMnd() + priser.oppstart;

/** Andre år og videre: tolv måneder lisens. */
export const aar2 = (): number => 12 * pakkeprisMnd();

/**
 * Formaterer et beløp slik nettsiden gjør det, med mellomrom som tusenskille
 * og «kr» foran.
 * Mellomrom som tusenskille, «kr» foran.
 */
export function formaterPris(belop: number): string {
  const medSkille = String(Math.round(belop)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `kr ${medSkille}`;
}

/**
 * Engelsk form: komma som tusenskille, «NOK» foran.
 */
export function formaterPrisEn(belop: number): string {
  return `NOK ${Math.round(belop).toLocaleString('en-US')}`;
}

/** Velger norsk eller engelsk form. */
export function pris(belop: number, locale: 'no' | 'en'): string {
  return locale === 'en' ? formaterPrisEn(belop) : formaterPris(belop);
}

/** Bare tallet med tusenskille, uten «kr». */
export function formaterTall(belop: number): string {
  return String(Math.round(belop)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ── Segmenter ─────────────────────────────────────────────────────────

export const segmenter: Segment[] = fakta.segmenter.segmenter;

export function segment(id: string): Segment {
  const s = segmenter.find((x) => x.id === id);
  if (!s) throw new Error(`Ukjent segment: ${id}. Se fakta/segmenter.yaml.`);
  return s;
}

export function segmentStatus(id: string): SegmentStatus {
  return segment(id).status;
}

// ── Moduler ───────────────────────────────────────────────────────────

export const moduler: Modul[] = fakta.moduler.moduler;

export function modul(id: string): Modul {
  const m = moduler.find((x) => x.id === id);
  if (!m) throw new Error(`Ukjent modul: ${id}. Se fakta/moduler.yaml.`);
  return m;
}

// ── Selskap og kontakt ────────────────────────────────────────────────

export const selskap = {
  navn: String(fakta.selskap.navn),
  orgNr: String(fakta.selskap.org_nr),
  etablert: Number(fakta.selskap.konseptet_etablert),
  oppgradert: Number(fakta.selskap.konseptet_oppgradert),
  appUrl: String(fakta.selskap.app_url),
};

export const kontakt = {
  epost: String(fakta.kontakt.support_epost),
  telefon: String(fakta.kontakt.support_telefon),
  /** Telefon uten mellomrom, til tel:-lenker. */
  telefonRaa: String(fakta.kontakt.support_telefon).replace(/\s/g, ''),
  apningstid: String(fakta.kontakt.support_apningstid),
};
