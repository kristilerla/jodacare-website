/**
 * Brevmalene i Rettighetsveilederen.
 *
 * Ren funksjon uten nettleser-avhengigheter: samme tre maler som i prototypen
 * (rettighetsklage, purring, anmodning om tilsyn). Teksten som er juridisk
 * ligger i src/content/rettigheter.json — her er bare skjelettet.
 */
import content from '@/content/rettigheter.json';

export type WhoId = 'selv' | 'paa' | 'egen';
export type RouteId = 'klage' | 'purring' | 'tilsyn';

export type Source = { label: string; url: string; note: string };

export type Situation = {
  id: string;
  label: string;
  sub: string;
  tag?: string;
  appliesTo: WhoId[];
  route: RouteId;
  defaultService: string;
  answer: string[];
  claim?: string;
  argument?: string;
  request?: string;
  sources: Source[];
};

export type RouteCopy = {
  boxLead: string;
  boxBody: string;
  letterTitle: string;
  letterIntro: string;
  commonSources: string[];
  sendSteps: { lead: string; text: string }[];
};

export type Content = Omit<
  typeof content,
  | 'who'
  | 'situations'
  | 'routes'
  | 'answerTitles'
  | 'commonSources'
  | 'statsforvalterenKan'
> & {
  who: { id: WhoId; label: string; sub: string }[];
  situations: Situation[];
  routes: Record<RouteId, RouteCopy>;
  answerTitles: Record<WhoId, string>;
  commonSources: (Source & { id: string })[];
  // Purring har ikke noe avsnitt her — Statsforvalteren er ikke inne i saken ennå.
  statsforvalterenKan: { heading: string } & Record<
    Exclude<RouteId, 'purring'>,
    string[]
  >;
};

export const data = content as unknown as Content;

export type FieldKey =
  | 'navn'
  | 'kommune'
  | 'fylke'
  | 'enhet'
  | 'pasient'
  | 'relasjon'
  | 'tjeneste'
  | 'dato'
  | 'saksnr'
  | 'idag'
  | 'sok'
  | 'hvorfor';
export type Fields = Record<FieldKey, string>;

export function fmt(d: string): string {
  if (!d) return '[dato]';
  const [y, m, dd] = d.split('-');
  return `${parseInt(dd, 10)}.${parseInt(m, 10)}.${y}`;
}

/**
 * Fullmakt fra den det gjelder, til den som klager på vegne av vedkommende.
 * Brukes bare i klagesporet når «En jeg er pårørende til» er valgt — er du
 * oppnevnt verge, er det vergefullmakten som legges ved i stedet.
 *
 * Bruker de samme feltene som klagebrevet, slik at teksten følger skjemaet.
 */
export function buildFullmakt(sit: Situation, fields: Fields): string {
  const t = (key: FieldKey) => fields[key].trim();
  const pasient = t('pasient') || '[navn på den det gjelder]';
  const navn = t('navn') || '[ditt navn]';
  const rel = t('relasjon') || '[relasjon]';
  const tj = t('tjeneste') || sit.defaultService;
  const kommune = t('kommune') || '[kommune]';
  const saks = t('saksnr') || '[saksnummer]';

  return `FULLMAKT

Jeg, ${pasient}, gir herved ${navn} (${rel}) fullmakt til å klage på vedtak om ${tj} fra ${kommune}, saksnummer ${saks}, og til å motta all informasjon i saken, jf. pasient- og brukerrettighetsloven § 7-3.

Fullmakten gjelder til klagen er endelig avgjort.

Sted og dato: ______________________

Underskrift: ______________________
${pasient}`;
}

export function buildLetter(sit: Situation, who: WhoId, fields: Fields): string {
  const t = (key: FieldKey) => fields[key].trim();
  const navn = t('navn') || '[ditt navn]';
  const kommune = t('kommune') || '[kommune]';
  const fylke = t('fylke');
  const enhet = t('enhet') || '[enhet]';
  const pasient = t('pasient') || '[navn]';
  const rel = t('relasjon') || '[relasjon]';
  const tj = t('tjeneste') || sit.defaultService;
  const dato = fmt(t('dato'));
  const saks = t('saksnr') || '[saksnummer]';
  const idag = fmt(t('idag'));
  const sok = t('sok');
  const hvorfor = t('hvorfor');
  const paaVegne = who === 'paa';

  if (sit.route === 'klage') {
    const claim = paaVegne
      ? (sit.claim ?? '').replace(/^min rett/, 'retten')
      : (sit.claim ?? '');
    const request = (sit.request ?? '').replace('{tjeneste}', tj);
    return `Til ${kommune} ved ${enhet}
Klageinstans: Statsforvalteren i ${fylke}

KLAGE PÅ VEDTAK OM ${tj.toUpperCase()}
Vedtak datert ${dato}, saksnummer ${saks}

Jeg klager med dette på vedtaket. Klagen gjelder ${claim}. Klagen sendes innen fristen på fire uker i pasient- og brukerrettighetsloven § 7-5.
${
  paaVegne
    ? `
Jeg klager på vegne av ${pasient}, som jeg er ${rel} til. Fullmakt følger vedlagt. [Er du oppnevnt verge, skriv det her i stedet.]
`
    : ''
}
HVA DET ER SØKT OM, OG HVA VEDTAKET SIER
${sok || '[Beskriv kort hva du søkte om og hva vedtaket sier.]'}

HVORFOR RETTIGHETEN IKKE ER OPPFYLT
${sit.argument ?? ''}

${hvorfor || '[Beskriv behovet konkret: hva som skjer i hverdagen, hvor ofte, og hva som skjer uten hjelpen.]'}

HVA JEG BER OM
Jeg ber om at ${request}.

Dersom kommunen opprettholder vedtaket, ber jeg om at klagen oversendes Statsforvalteren i ${fylke} for behandling etter pasient- og brukerrettighetsloven § 7-2, og at jeg får kopi av oversendelsesbrevet.

Jeg ber også om innsyn i sakens dokumenter, jf. forvaltningsloven § 18, og om at et eventuelt nytt vedtak begrunnes med de faktiske forholdene og vurderingene det bygger på, jf. forvaltningsloven §§ 24 og 25.

Med vennlig hilsen

${navn}
${idag}

Vedlegg: kopi av vedtaket${paaVegne ? ', fullmakt' : ''}${
      hvorfor.toLowerCase().includes('lege') ? ', uttalelse fra fastlege' : ''
    }`;
  }

  if (sit.route === 'purring') {
    return `Til ${kommune} ved ${enhet}

PURRING PÅ SØKNAD OM ${tj.toUpperCase()}
Søknad sendt ${dato}${saks !== '[saksnummer]' ? `, saksnummer ${saks}` : ''}

${
  paaVegne ? `Jeg skriver på vegne av ${pasient}, som jeg er ${rel} til. ` : ''
}Jeg har ikke mottatt vedtak i saken, og heller ikke et foreløpig svar. Etter forvaltningsloven § 11 a skal saken avgjøres uten ugrunnet opphold, og det skal gis foreløpig svar dersom behandlingen tar mer enn én måned. Forvaltningsloven gjelder for søknaden, jf. pasient- og brukerrettighetsloven § 2-7.

${sok || '[Beskriv kort hva det er søkt om.]'}

${hvorfor || '[Beskriv hvorfor saken haster.]'}

Jeg ber om skriftlig vedtak innen 14 dager. Får jeg ikke svar innen fristen, vil jeg ta saksbehandlingstiden opp med Statsforvalteren i ${fylke}.

Med vennlig hilsen

${navn}
${idag}`;
  }

  return `Til Statsforvalteren i ${fylke}

ANMODNING OM VURDERING AV MULIG PLIKTBRUDD
Pasient- og brukerrettighetsloven § 7-4
Gjelder: ${kommune}, ${enhet}

${
    paaVegne ? `Jeg skriver på vegne av ${pasient}, som jeg er ${rel} til. ` : ''
  }Jeg ber Statsforvalteren vurdere om tjenesten har oppfylt kravet til forsvarlighet i helse- og omsorgstjenesteloven § 4-1 og helsepersonelloven § 4.

HVA SOM SKJEDDE
${sok || '[Beskriv hva som skjedde, når og hvor. Navngi gjerne avdeling, ikke enkeltpersoner.]'}

HVORFOR JEG MENER DETTE ER ET PLIKTBRUDD
${hvorfor || '[Beskriv konsekvensene og hvorfor du mener hjelpen ikke var forsvarlig.]'}

Jeg ber om å bli orientert om utfallet av vurderingen, jf. pasient- og brukerrettighetsloven § 7-4a.

[Mangler du også en tjeneste du har krav på, send i tillegg en rettighetsklage til kommunen. Se veilederen for mal.]

Med vennlig hilsen

${navn}
${idag}`;
}
