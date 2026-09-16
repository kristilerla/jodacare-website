/**
 * Brevmalene i Rettighetsveilederen.
 *
 * Ren funksjon uten nettleser-avhengigheter: samme tre maler som i prototypen
 * (rettighetsklage, purring, anmodning om tilsyn). Teksten som er juridisk
 * ligger i src/content/rettigheter.json — her er bare skjelettet.
 */
import content from '@/content/rettigheter.json';

export type WhoId = 'selv' | 'paa' | 'egen';
export type RouteId =
  | 'klage'
  | 'purring'
  | 'tilsyn'
  | 'innsyn'
  | 'sivilombud';

/** Brevmal. Følger ruten, men spor med flere brev velger selv. */
export type LetterTemplate =
  | RouteId
  | 'represalier-klage'
  | 'represalier-tilsyn';

export type Source = { label: string; url: string; note: string };

export type RouteOption = {
  id: RouteId;
  label: string;
  letterTitle: string;
  letterIntro: string;
  letterTemplate: LetterTemplate;
  /** Punkter som bare gjelder denne ruten, lagt til sist i sendelista. */
  sendStepsExtra?: SendStep[];
};

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
  /** Overskrift i svarkortet. Overstyrer den rollestyrte tittelen. */
  answerTitle?: string;
  /** Spor som har mer enn ett brev. Knappevalget i steg 3 bytter rute. */
  routeOptions?: RouteOption[];
  /** Overstyrer tekst fra ruten der sporet trenger sin egen. */
  routeCopy?: Partial<RouteCopy>;
  /** Felt som bare finnes i dette sporet. */
  extraFields?: FieldKey[];
  /** Feltetiketter som gjelder bare her. */
  fieldLabels?: Partial<Record<FieldKey, string>>;
  /** Eksempelverdier som gjelder bare her. */
  examples?: Partial<Record<FieldKey, string>>;
  /**
   * Eksempler som avhenger av hvem saken gjelder. Et spor som kan gjelde
   * både deg selv og en du representerer, trenger ulik ordlyd: «saken min»
   * mot «saken for Ola». Overstyrer `examples`.
   */
  examplesByWho?: Partial<Record<WhoId, Partial<Record<FieldKey, string>>>>;
};

/**
 * Et punkt i «Slik sender du det». `link` peker til et annet spor i
 * veilederen og rendres som lenke mellom `text` og `textEnd`.
 */
export type SendStep = {
  lead: string;
  text: string;
  link?: string;
  linkLabel?: string;
  textEnd?: string;
};

export type RouteCopy = {
  boxLead: string;
  boxBody: string;
  letterTitle: string;
  letterIntro: string;
  commonSources: string[];
  sendSteps: SendStep[];
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
  // Bare ruter der Statsforvalteren faktisk prøver saken har avsnitt her.
  statsforvalterenKan: { heading: string } & Partial<Record<RouteId, string[]>>;
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
  | 'hvorfor'
  | 'endring'
  | 'saksnrKommune';
export type Fields = Record<FieldKey, string>;

export function fmt(d: string): string {
  if (!d) return '[dato]';
  const [y, m, dd] = d.split('-');
  return `${parseInt(dd, 10)}.${parseInt(m, 10)}.${y}`;
}

/**
 * Fullmakt fra den det gjelder, til den som representerer vedkommende.
 * Vises på alle ruter når «En jeg er pårørende til» er valgt — er du oppnevnt
 * verge, er det vergefullmakten som legges ved i stedet.
 *
 * Teksten gjelder saken, ikke én handling. En fullmakt låst til «klage på
 * vedtak» blir feil på purringssporet, der det ennå ikke finnes noe vedtak.
 * Hjemmelen for å la seg representere er forvaltningsloven § 12; § 7-3 dekker
 * klagen særskilt.
 *
 * Bruker de samme feltene som brevet, slik at teksten følger skjemaet.
 */
export function buildFullmakt(sit: Situation, fields: Fields): string {
  const t = (key: FieldKey) => fields[key].trim();
  const pasient = t('pasient') || '[navn på den det gjelder]';
  const navn = t('navn') || '[ditt navn]';
  const rel = t('relasjon') || '[relasjon]';
  const tj = t('tjeneste') || sit.defaultService;
  const kommune = t('kommune') || '[kommune]';
  // Sporet mot Sivilombudet har to saksnumre. Fullmakten gjelder saken hos
  // kommunen, så kommunens nummer vinner der det finnes.
  const saks = t('saksnrKommune') || t('saksnr') || '[saksnummer]';

  return `FULLMAKT

Jeg, ${pasient}, gir ${navn} (${rel}) fullmakt til å representere meg i saken om ${tj} hos ${kommune}, saksnummer ${saks}.

${navn} kan sende brev og klager i saken, følge dem opp, og få all informasjon i saken.

Fullmakten gjelder til saken er ferdig, eller til jeg sier fra at den ikke gjelder lenger.

Hjemmel: forvaltningsloven § 12 og pasient- og brukerrettighetsloven § 7-3.

Sted og dato: ______________________

Underskrift: ______________________
${pasient}`;
}

export function buildLetter(
  sit: Situation,
  who: WhoId,
  fields: Fields,
  template: LetterTemplate = sit.route,
): string {
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
  const endring = t('endring');
  const saksKommune = t('saksnrKommune') || '[kommunens saksnummer]';
  const paaVegne = who === 'paa';
  // Hvem saken gjelder. På egne vegne er det avsenderen selv.
  const gjelder = paaVegne ? pasient : navn;

  if (template === 'innsyn') {
    return `Til ${kommune} ved ${enhet}
Klageinstans: Statsforvalteren i ${fylke}

KLAGE PÅ AVSLAG PÅ INNSYN I SAKENS DOKUMENTER
Sak om ${tj} for ${gjelder}, saksnummer ${saks}
Avslag datert ${dato}

Jeg klager med dette på avslaget på innsyn. Som part i saken har jeg rett til å gjøre meg kjent med sakens dokumenter etter forvaltningsloven § 18. Klagen sendes innen fristen på tre uker i forvaltningsloven § 29.
${
      paaVegne
        ? `
Jeg representerer ${pasient}, som jeg er ${rel} til. Fullmakt følger vedlagt.
`
        : ''
    }
HVA JEG BA OM, OG HVA KOMMUNEN SVARTE
${sok || '[Beskriv hvilke dokumenter du ba om, når du ba om dem, og hva kommunen svarte.]'}

HVORFOR AVSLAGET IKKE HOLDER
Avslaget oppgir ikke hvilket ledd og hvilken bokstav i loven det bygger på, slik forvaltningsloven § 21 krever. Unntaket for interne dokumenter i § 18 a gjelder ikke opplysninger om faktiske forhold som vedtaket bygger på. Selv om deler av dokumentet kan unntas, skal kommunen etter § 18 andre ledd vurdere delvis innsyn.

${hvorfor || '[Valgfritt: skriv kort hvorfor du trenger dokumentene.]'}

HVA JEG BER OM
Jeg ber om fullt innsyn i dokumentene, eventuelt delvis innsyn med tydelig angivelse av hva som er holdt tilbake og med hvilken hjemmel.

Dersom kommunen opprettholder avslaget, ber jeg om at klagen oversendes Statsforvalteren i ${fylke} etter forvaltningsloven § 21 andre ledd, og at jeg får kopi av oversendelsesbrevet.

Klagefristen i hovedsaken om ${tj} løper parallelt. Jeg ber om at fristen for å klage på vedtaket om ${tj} regnes fra den dagen jeg får innsyn, jf. forvaltningsloven § 29 og prinsippet om at parten skal kunne ivareta sine interesser.

Med vennlig hilsen

${navn}
${idag}

Vedlegg: kopi av avslaget${paaVegne ? ', fullmakt' : ''}`;
  }

  if (template === 'represalier-klage') {
    return `Til ${kommune} ved ${enhet}
Klageinstans: Statsforvalteren i ${fylke}

KLAGE PÅ VEDTAK OM REDUSERT ${tj.toUpperCase()}
Saksnummer ${saks}
Viser til min klage av ${dato}

Jeg klager med dette på reduksjonen av ${tj} for ${gjelder}. Endringen gjelder en tjeneste som varer lenger enn to uker og er et enkeltvedtak etter pasient- og brukerrettighetsloven § 2-7. Klagen sendes innen fristen på fire uker i § 7-5.

HVA SOM SKJEDDE
${sok || '[Beskriv hva du klaget på først.]'} ${endring || '[Beskriv hva som ble endret, og når.]'}

HVORFOR VEDTAKET IKKE HOLDER
Reduksjonen er gjort uten forhåndsvarsel etter forvaltningsloven § 16 og uten begrunnelse som viser hvilke faktiske forhold den bygger på, jf. §§ 24 og 25. Behovet er ikke vurdert på nytt. Det eneste som har endret seg siden forrige vedtak, er at jeg har klaget. En klage er ikke et grunnlag for å redusere en tjeneste.

${hvorfor || '[Beskriv hva endringen har betydd i hverdagen.]'}

HVA JEG BER OM
Jeg ber om at reduksjonen oppheves og at ${tj} videreføres i minst samme omfang som før, til saken er avgjort. Jeg ber om at min deltakelse i ansvarsgruppen gjenopprettes, jf. pasient- og brukerrettighetsloven §§ 3-1 og 3-3.

Dersom kommunen opprettholder vedtaket, ber jeg om at klagen oversendes Statsforvalteren i ${fylke} etter pasient- og brukerrettighetsloven § 7-2, og at jeg får kopi av oversendelsesbrevet.

Jeg ber om innsyn i sakens dokumenter, jf. forvaltningsloven § 18, inkludert eventuelle notater om grunnlaget for reduksjonen.

Med vennlig hilsen

${navn}
${idag}

Vedlegg: kopi av brevet om endringen, kopi av klagen av ${dato}${paaVegne ? ', fullmakt' : ''}`;
  }

  if (template === 'represalier-tilsyn') {
    return `Til Statsforvalteren i ${fylke}

ANMODNING OM VURDERING AV MULIG PLIKTBRUDD
Pasient- og brukerrettighetsloven § 7-4
Gjelder: ${kommune}, ${enhet}

${
      paaVegne ? `Jeg skriver på vegne av ${pasient}, som jeg er ${rel} til. ` : ''
    }Jeg ber Statsforvalteren vurdere om tjenesten har opptrådt forsvarlig etter helse- og omsorgstjenesteloven § 4-1, og om retten til medvirkning og informasjon etter pasient- og brukerrettighetsloven §§ 3-1 og 3-3 er ivaretatt, etter at jeg klaget på tjenesten.

HVA SOM SKJEDDE
${sok || '[Beskriv hva du klaget på først.]'} ${endring || '[Beskriv hva som ble endret, og når.]'}

HVORFOR JEG MENER DETTE ER ET PLIKTBRUDD
Endringene kom rett etter klagen og uten at behovet ble vurdert på nytt. Jeg ble stengt ute fra samarbeidet uten begrunnelse.${
      paaVegne
        ? ` ${pasient} kan ikke ivareta sine interesser selv, og er avhengig av at jeg får informasjon og kan medvirke.`
        : ''
    }

${hvorfor || '[Beskriv hva endringen har betydd i hverdagen.]'}

Jeg ber Statsforvalteren vurdere om tjenesten har brukt klagen som grunnlag for å redusere hjelpen og for å holde meg utenfor, og om dette er forenlig med kravet til forsvarlighet.

Jeg ber om å bli orientert om utfallet av vurderingen, jf. pasient- og brukerrettighetsloven § 7-4 a.

[Er tjenesten redusert, send i tillegg rettighetsklage til kommunen. Bytt knappen over brevet for å få den malen.]

Med vennlig hilsen

${navn}
${idag}

Vedlegg: kopi av klagen av ${dato}, kopi av brevet om endringen${paaVegne ? ', fullmakt' : ''}`;
  }

  if (template === 'sivilombud') {
    return `Til Sivilombudet

KLAGE OVER STATSFORVALTERENS AVGJØRELSE
Statsforvalteren i ${fylke}, saksnummer ${saks}
Avgjørelse datert ${dato}
Opprinnelig vedtak: ${kommune}, ${enhet}, saksnummer ${saksKommune}

Jeg klager med dette til Sivilombudet etter sivilombudsloven § 7. Alle klagemuligheter i forvaltningen er brukt, jf. § 8. Klagen sendes innen fristen på ett år i § 9.
${
      paaVegne
        ? `
Jeg klager på vegne av ${pasient}, som jeg er ${rel} til. Fullmakt følger vedlagt.
`
        : ''
    }
HVA SAKEN GJELDER
${sok || '[Beskriv hva du klaget på, og hva Statsforvalteren kom til.]'}

HVA JEG MENER ER FEIL
${hvorfor || '[Beskriv hva du mener Statsforvalteren har oversett eller vurdert feil.]'}

HVA JEG BER OM
Jeg ber Sivilombudet undersøke om Statsforvalterens avgjørelse bygger på riktig lovforståelse og en forsvarlig vurdering av sakens opplysninger, og om saken bør behandles på nytt.

Jeg samtykker til at Sivilombudet innhenter sakens dokumenter fra Statsforvalteren og kommunen.

Med vennlig hilsen

${navn}
${idag}

Vedlegg: Statsforvalterens avgjørelse av ${dato}, kommunens vedtak, min klage til kommunen${paaVegne ? ', fullmakt' : ''}`;
  }

  if (template === 'klage') {
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

  if (template === 'purring') {
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
