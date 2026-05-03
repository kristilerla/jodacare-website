import type { Locale } from '@/lib/i18n/types';

export type BvCard = { title: string; description: string };
export type BvRelated = { title: string; description: string; href: string };

export type BarnevernContent = {
  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;

  // Seksjon 2 — Mai Life + JodaCare
  partnerSectionTitle: string;
  partnerIntro: string;
  partnerCards: BvCard[];

  // Seksjon 3 — Kjenner du deg igjen?
  scenarioTitle: string;
  scenarios: BvCard[];

  // Seksjon 4 — Slik henger det sammen
  rolesTitle: string;
  rolesSubtitle: string;
  roles: BvCard[];
  rolesFootnote: string;

  // Seksjon 5 — Funksjoner
  featuresTitle: string;
  features: BvCard[];

  // Seksjon 6 — Erfaringer
  experienceTitle: string;
  experienceSubtitle: string;
  experiences: BvCard[];

  // Seksjon 7 — Hva dere får igjen
  efficiencyTitle: string;
  efficiencySubtitle: string;
  efficiencyItems: BvCard[];
  efficiencyDisclaimer: string;

  // Seksjon 7.5 — For barnet — også som voksen
  memoryBadge: string;
  memoryTitle: string;
  memorySubtitle: string;
  memoryQuote: string;
  memoryQuoteSource: string;
  memoryParagraphs: { title: string; body: string }[];
  memoryFootnote: string;

  // Seksjon 8 — Trygghet og lovgrunnlag
  trustTitle: string;
  trustItems: BvCard[];
  trustLink: string;

  // Seksjon 9 — Status
  statusTitle: string;
  statusSubtitle: string;
  statusColumns: { title: string; items: string[] }[];

  // Seksjon 10 — CTA-footer
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;

  // Seksjon 11 — Relaterte sider
  relatedTitle: string;
  relatedSubtitle: string;
  readMore: string;
  related: BvRelated[];
};

const no: BarnevernContent = {
  // Hero
  heroBadge: 'Barnevern',
  heroTitle: 'JodaCare følger barnet.',
  heroSubtitle:
    'JodaCare samler hverdagen til barnet gjennom alle overganger, fra biologisk hjem til fosterhjem og samvær. Den informasjonen som skal beskyttes, holdes trygg i hver enkelt rolle.',
  primaryCta: 'Snakk med oss om pilot →',
  secondaryCta: 'Se hvordan det henger sammen',

  // Seksjon 2 — Mai Life + JodaCare
  partnerSectionTitle: 'Sammen om det viktigste',
  partnerIntro:
    'JodaCare og Mai Life jobber under samme paraply (Aiantic AB). Sammen dekker vi to sider av barnevernet:',
  partnerCards: [
    {
      title: 'Mai Life tar vare på saken',
      description:
        'Sikker AI gir saksbehandlere rask oversikt over historikk og faglige vurderinger innenfor kommunens egne systemer.',
    },
    {
      title: 'JodaCare tar vare på barnet',
      description:
        'JodaCare samler det daglige samarbeidet rundt barnet, slik at saksbehandler, fosterforeldre, biologiske foreldre og støttepersoner møtes ett sted.',
    },
  ],

  // Seksjon 3 — Kjenner du deg igjen?
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarios: [
    {
      title: 'Mange voksne, fragmentert bilde',
      description:
        'Rundt hvert barn finnes det saksbehandler, fosterforeldre, biologiske foreldre, lærer og BUP, og hver av dem ser sin del av hverdagen uten å vite hva de andre ser.',
    },
    {
      title: 'Dokumentasjon stjeler tid fra barnet',
      description:
        'Mye av hverdagen til en saksbehandler går med på å skrive ned, lese og videreformidle informasjon som kunne vært brukt på tid sammen med barnet i stedet.',
    },
    {
      title: 'E-post og SMS er ikke trygt nok',
      description:
        'Sensitive opplysninger om barn havner i private innbokser og chat-tråder, og det er en arbeidsmåte som ikke hører hjemme i barnevernet.',
    },
    {
      title: 'Audit trail er ufullstendig',
      description:
        'Når en sak skal gjennomgås, eller når den havner i retten, må sporbarheten være på plass fra første dag.',
    },
  ],

  // Seksjon 4 — Slik henger det sammen
  rolesTitle: 'Slik henger det sammen',
  rolesSubtitle: 'Barnet står i sentrum, og rundt det finnes fire roller med klart definerte grenser.',
  roles: [
    {
      title: 'Saksbehandler',
      description:
        'Har full oversikt over saken, oppretter og følger opp samværsplaner, og har tilgang til komplett audit trail.',
    },
    {
      title: 'Fosterforelder',
      description:
        'Dokumenterer hverdagen, bekrefter og gjennomfører samvær, og ser aldri biologisk forelders notater.',
    },
    {
      title: 'Biologisk forelder',
      description:
        'Ser samværsplan og status for egne samvær, og er beskyttet mot innsyn i fosterhjemmets dokumentasjon.',
    },
    {
      title: 'Støtteperson',
      description:
        'Deltar i samvær når det trengs, og ser bare det som er nødvendig for å fylle sin rolle.',
    },
  ],
  rolesFootnote:
    'Informasjonsbarrierene er teknisk håndhevet i selve databasen, slik at de ikke avhenger av rutiner alene.',

  // Seksjon 5 — Funksjoner
  featuresTitle: 'Funksjoner for det daglige arbeidet',
  features: [
    {
      title: 'Samværsplaner med status-flyt',
      description:
        'Samværsstatus følger en tydelig flyt fra planlagt til bekreftet og gjennomført, eller avlyst og ikke oppmøtt. Hver status får en begrunnelse, og alt er søkbart og dokumentert.',
    },
    {
      title: 'Daglig logg fra fosterforeldre',
      description:
        'Fosterforeldre dokumenterer hverdagen med bilder, notater og hendelser, og en AI-oppsummering lar saksbehandler lese to ukers historikk på ett minutt.',
    },
    {
      title: 'Hendelseslogg',
      description:
        'Strukturert registrering av søvn, humør, anfall, adferd og rutiner gir et mønster over tid gjennom en oversiktlig kalendervisning.',
    },
    {
      title: 'Jodabook for barn med særskilte behov',
      description:
        'En egen app for barn med kognitive utfordringer, tilgjengelig i App Store og Google Play, med forenklet grensesnitt, store knapper, rutiner og stemningssjekk.',
    },
    {
      title: 'Informasjonsbarrierer',
      description:
        'Biologisk forelder ser aldri fosterforelders notater, og barrierene er teknisk håndhevet i databasen slik at de ikke avhenger av rutiner alene.',
    },
    {
      title: 'Full audit trail',
      description:
        'Alle handlinger loggføres med tidsstempel og bruker-ID, og er tilgjengelig for saksbehandler og forberedt både for tilsyn og eventuell rettssak.',
    },
  ],

  // Seksjon 6 — Erfaringer
  experienceTitle:
    'Vi har lang erfaring med «mange voksne rundt ett barn»',
  experienceSubtitle:
    'JodaCare har stått i drift hos norske kommuner siden 2016. Mye av strukturen i barnevernet finner vi igjen i nabosegmentene vi allerede leverer til.',
  experiences: [
    {
      title: 'Horten kommune siden 2016',
      description:
        'JodaCare brukes daglig for barn og unge med utviklingshemming i BPA-tjenesten. Det er mange voksne rundt hvert barn, mange overganger og høye krav til presisjon, som er den samme strukturen vi finner igjen i barnevernet.',
    },
    {
      title: 'Avlastning og kognitive utfordringer',
      description:
        'Vi har bygget hverdagsverktøy for barn der mange voksne deler ansvaret, fra fosterforeldre og avlastning til foreldre og kommune. Jodabook er allerede tilgjengelig i App Store og Google Play.',
    },
    {
      title: 'Bygget med faggruppene som bruker det',
      description:
        'Hendelseslogg-malene, samværsmodulen og rolle-arkitekturen er utviklet i samskaping med kommuner. Vi har metodikken for å bygge resten sammen med dere som kjenner barnevernet best.',
    },
  ],

  // Seksjon 7 — Hva dere får igjen
  efficiencyTitle: 'Hva dere får igjen',
  efficiencySubtitle:
    'Effektivisering blir meningsfullt når tiden som spares brukes på barnet.',
  efficiencyItems: [
    {
      title: 'Mindre tid på dokumentasjon.',
      description:
        'En AI-oppsummering kutter to ukers loggjennomgang ned til ett minutt, og saksbehandler kan bruke tiden på samtale med barnet i stedet for å lete etter informasjon.',
    },
    {
      title: 'Færre koordineringsmøter.',
      description:
        'Når informasjonen ligger samlet ett sted, slipper saksbehandler å ringe rundt for å bygge oversikt før hvert eneste møte.',
    },
    {
      title: 'Raskere onboarding av nye fosterforeldre.',
      description:
        'Plattformen står allerede klar, og nye fosterforeldre inviteres rett inn uten å måtte lære seg kommunens egne systemer fra bunnen av.',
    },
    {
      title: 'Mindre dobbeltrapportering.',
      description:
        'Det som skrives én gang leses av alle som skal lese det, uten videresending eller manuelle Excel-skjemaer.',
    },
  ],
  efficiencyDisclaimer:
    'Vi har ikke målt disse effektene spesifikt for barnevern ennå. Tallene over er erfaring fra Horten kommune i BPA siden 2016, der strukturen er svært lik. Det er en av grunnene til at vi nå søker pilotkommuner i barnevern.',

  // Seksjon 7.5 — For barnet — også som voksen
  memoryBadge: 'For barnet, også når det blir voksent',
  memoryTitle: 'En barndom som kan huskes.',
  memorySubtitle:
    'Mange voksne som har vokst opp med tiltak fra barnevernet, forteller at minnene fra barndommen er uklare. De husker ikke alltid hvor de var når, hvem de voksne rundt dem var, eller om de hadde ferier det året. JodaCare følger barnet, og samler samtidig en historie barnet kan eie selv.',
  memoryQuote:
    'Skriftlighet er sentralt for å sikre den enkeltes rettssikkerhet, men også viktig for å sikre barnets mulighet til å bli kjent med egen historie.',
  memoryQuoteSource: 'Helsetilsynet, veileder for landsomfattende tilsyn 2022–2023',
  memoryParagraphs: [
    {
      title: 'Hverdagen, samlet ett sted',
      body: 'Bilder fra fosterhjemmet, notater fra avlastning og samvær som er gjennomført, samles ett sted og følger barnet videre gjennom hver overgang, hvert nytt fosterhjem og hver nye saksbehandler.',
    },
    {
      title: 'En livshistorie barnet kan eie',
      body: 'KAI, JodaCares norske AI-veiviser, kan skrive sammen hverdagens innhold til en sammenhengende livshistorie. Når barnet er klart, enten som ungdom eller som voksen, finnes det noe å lese seg gjennom og lene seg på.',
    },
    {
      title: 'Innsyn når barnet trenger det',
      body: 'Barn over 15 år har egen rett til innsyn i sin sak, og JodaCare gir barnet en strukturert vei inn i sin egen historie. Den retten gjelder også som voksen, når spørsmålene om barndommen kommer.',
    },
  ],
  memoryFootnote:
    'Forankret i barnevernsloven § 12-4 (journalplikt), medvirkningsforskriften §§ 4–6 og NOU 2023: 7 «Trygg barndom, sikker fremtid», kapittel 21 om barns behov for kontinuitet.',

  // Seksjon 8 — Trygghet og lovgrunnlag
  trustTitle: 'Bygget for norsk forvaltning',
  trustItems: [
    {
      title: 'ID-porten og Maskinporten',
      description:
        'Norsk autentisering for norske brukere, godkjent av Digdir.',
    },
    {
      title: 'All data i Europa',
      description:
        'All hosting skjer i Europa, og AI-motoren kjører på Mistral i Paris uten avhengighet av amerikansk Big Tech.',
    },
    {
      title: 'DPIA gjennomført',
      description:
        'Personvernkonsekvensvurdering er på plass, og plattformen er GDPR-compliant fra første dag.',
    },
    {
      title: 'Lovforankret',
      description:
        'Barnevernsloven, forvaltningsloven og normen er bygget inn i selve arkitekturen fra grunnen av.',
    },
  ],
  trustLink: 'Les mer om sikkerhet →',

  // Seksjon 9 — Status
  statusTitle: 'Slik bygges JodaCare for barnevern',
  statusSubtitle: 'Plattformen står på en moden kjerne i drift siden 2016, og barnevernsmodulen tas i bruk i etapper sammen med pilotkommunene.',
  statusColumns: [
    {
      title: 'Klart i dag',
      items: [
        'Samværsmodul med fire roller',
        'Informasjonsbarrierer i databasen',
        'Hendelseslogg og daglig kommunikasjon',
        'Jodabook i App Store og Google Play',
        'ID-porten-innlogging',
      ],
    },
    {
      title: 'Klar for pilot Q2 2026',
      items: [
        'Tilpasning til kommunens fagsystem',
        'Integrasjoner mot Mai Life',
        'Implementeringsstøtte med dedikert ansvarlig',
      ],
    },
    {
      title: 'Etter første pilot',
      items: [
        'Bredere utrulling i flere kommuner',
        'Tilpasning basert på pilot-erfaring',
        'Skalering nasjonalt sammen med Mai Life og Aiantic',
      ],
    },
  ],

  // Seksjon 10 — CTA-footer
  ctaTitle: 'Vi søker pilotkommuner i barnevern',
  ctaBody:
    'JodaCare og Mai Life er klare. Vi søker en kommune som vil tenke sammen med oss om hvordan dette kan se ut i praksis hos dere. I en pilot er det vi som gjør jobben, og dere gir tilbakemeldingen som former plattformen videre.',
  ctaPrimary: 'Be om en samtale →',
  ctaSecondary: 'Se også: Slik henger Mai Life og JodaCare sammen',

  // Seksjon 11 — Relaterte sider
  relatedTitle: 'Andre deler av JodaCare som styrker barnevernsarbeidet',
  relatedSubtitle: 'Plattformen er bygget slik at modulene styrker hverandre. Disse er særlig relevante når dere jobber med barn og unge.',
  readMore: 'Les mer',
  related: [
    {
      title: 'Vi hjelper med implementeringen',
      description:
        'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'Omsorgsbolig og Hub',
      description:
        'Koble beboer, familie og ansatte gjennom en skjerm i leiligheten.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Avlastning for barn',
      description:
        'Trygg samhandling mellom avlastningsfamilie, foreldre og kommune.',
      href: '/avlastning',
    },
    {
      title: 'Sikkerhet og lovgrunnlag',
      description:
        'Detaljert dokumentasjon av hvordan JodaCare oppfyller GDPR, normen og barnevernsloven.',
      href: '/sikkerhet',
    },
  ],
};

const en: BarnevernContent = {
  heroBadge: 'Child welfare',
  heroTitle: 'JodaCare follows the child.',
  heroSubtitle:
    'JodaCare brings together the child\'s everyday life across every transition, from birth home to foster home and contact visits. The information that needs protecting stays safe within each role.',
  primaryCta: 'Talk to us about a pilot →',
  secondaryCta: 'See how it fits together',

  partnerSectionTitle: 'Together on what matters most',
  partnerIntro:
    'JodaCare and Mai Life work under the same umbrella (Aiantic AB). Together we cover two sides of child welfare:',
  partnerCards: [
    {
      title: 'Mai Life takes care of the case',
      description:
        'Secure AI gives case workers quick oversight of history and professional assessments within the municipality\'s own systems.',
    },
    {
      title: 'JodaCare takes care of the child',
      description:
        'JodaCare brings together daily collaboration around the child, so that case workers, foster carers, birth parents and support persons all meet in one place.',
    },
  ],

  scenarioTitle: 'Does this sound familiar?',
  scenarios: [
    {
      title: 'Many adults, fragmented picture',
      description:
        'Around every child there is a case worker, foster carers, birth parents, teacher and child psychiatry, and each of them sees their part of daily life without knowing what the others see.',
    },
    {
      title: 'Documentation steals time from the child',
      description:
        'Much of a case worker\'s day goes to writing, reading and relaying information that could have been spent on time with the child instead.',
    },
    {
      title: 'Email and SMS are not secure enough',
      description:
        'Sensitive information about children ends up in private inboxes and chat threads, and that is a way of working that has no place in child welfare.',
    },
    {
      title: 'Audit trail is incomplete',
      description:
        'When a case needs review, or when it ends up in court, traceability must be in place from the very first day.',
    },
  ],

  rolesTitle: 'How it fits together',
  rolesSubtitle: 'The child is at the centre, and around it are four roles with clearly defined boundaries.',
  roles: [
    {
      title: 'Case worker',
      description:
        'Has full overview of the case, creates and follows up contact plans, and has access to the complete audit trail.',
    },
    {
      title: 'Foster carer',
      description:
        'Documents daily life, confirms and carries out contact, and never sees birth parent\'s notes.',
    },
    {
      title: 'Birth parent',
      description:
        'Sees contact plan and status for own visits, and is protected from insight into the foster home\'s documentation.',
    },
    {
      title: 'Support person',
      description:
        'Participates in contact when needed, and sees only what is necessary to fulfil their role.',
    },
  ],
  rolesFootnote:
    'Information barriers are technically enforced in the database itself, so they do not depend on routines alone.',

  featuresTitle: 'Features for the daily work',
  features: [
    {
      title: 'Contact plans with status flow',
      description:
        'Contact status follows a clear flow from planned to confirmed and completed, or cancelled and no-show. Each status includes a reason, and everything is searchable and documented.',
    },
    {
      title: 'Daily log from foster carers',
      description:
        'Foster carers document daily life with photos, notes and events, and an AI summary lets the case worker read two weeks of history in one minute.',
    },
    {
      title: 'Event log',
      description:
        'Structured recording of sleep, mood, seizures, behaviour and routines reveals patterns over time through a clear calendar view.',
    },
    {
      title: 'Jodabook for children with special needs',
      description:
        'A dedicated app for children with cognitive challenges, available in App Store and Google Play, with a simplified interface, large buttons, routines and mood checks.',
    },
    {
      title: 'Information barriers',
      description:
        'Birth parent never sees foster carer\'s notes, and the barriers are technically enforced in the database so they do not depend on routines alone.',
    },
    {
      title: 'Full audit trail',
      description:
        'Every action is logged with timestamp and user ID, and is available to the case worker and prepared for both oversight and any court proceedings.',
    },
  ],

  experienceTitle:
    'We have deep experience with "many adults around one child"',
  experienceSubtitle:
    'JodaCare has been in production at Norwegian municipalities since 2016. Much of the structure in child welfare can be found in the adjacent segments we already deliver to.',
  experiences: [
    {
      title: 'Horten municipality since 2016',
      description:
        'JodaCare is used daily for children and young people with developmental disabilities in the personal assistance service. There are many adults around each child, many transitions and high demands for precision, which is the same structure we find in child welfare.',
    },
    {
      title: 'Respite care and cognitive challenges',
      description:
        'We have built everyday tools for children where many adults share responsibility, from foster carers and respite carers to parents and the municipality. Jodabook is already available in App Store and Google Play.',
    },
    {
      title: 'Built with the professional groups that use it',
      description:
        'Event log templates, the contact module and role architecture are developed in co-creation with municipalities. We have the methodology to build the rest together with those who know child welfare best.',
    },
  ],

  efficiencyTitle: 'What you get in return',
  efficiencySubtitle:
    'Efficiency becomes meaningful when the time saved is spent on the child.',
  efficiencyItems: [
    {
      title: 'Less time on documentation.',
      description:
        'An AI summary cuts two weeks of log review down to one minute, and case workers can spend their time talking to the child instead of searching for information.',
    },
    {
      title: 'Fewer coordination meetings.',
      description:
        'When information is collected in one place, case workers no longer need to phone around to build an overview before every single meeting.',
    },
    {
      title: 'Faster onboarding of new foster carers.',
      description:
        'The platform is already in place, and new foster carers are invited straight in without having to learn the municipality\'s own systems from scratch.',
    },
    {
      title: 'Less double reporting.',
      description:
        'What is written once is read by everyone who should read it, without forwarding or manual Excel sheets.',
    },
  ],
  efficiencyDisclaimer:
    'We have not measured these effects specifically for child welfare yet. The figures above are experience from Horten municipality in personal assistance since 2016, where the structure is very similar. That is one of the reasons we are now seeking pilot municipalities in child welfare.',

  memoryBadge: 'For the child, also when they grow up',
  memoryTitle: 'A childhood that can be remembered.',
  memorySubtitle:
    'Many adults who grew up with child welfare interventions say their childhood memories are unclear. They do not always remember where they were when, who the adults around them were, or whether they had holidays that year. JodaCare follows the child, and at the same time gathers a story the child can own.',
  memoryQuote:
    'Written documentation is central to safeguarding the individual\'s legal rights, but also important for ensuring the child\'s opportunity to become familiar with their own history.',
  memoryQuoteSource: 'The Norwegian Board of Health Supervision, national audit guide 2022–2023',
  memoryParagraphs: [
    {
      title: 'Daily life, gathered in one place',
      body: 'Photos from the foster home, notes from respite care and contact visits that were carried out are gathered in one place and follow the child onward through each transition, each new foster home and each new case worker.',
    },
    {
      title: 'A life story the child can own',
      body: 'KAI, JodaCare\'s Norwegian AI guide, can weave daily content into a coherent life story. When the child is ready, whether as a teenager or as an adult, there is something to read and lean on.',
    },
    {
      title: 'Access when the child needs it',
      body: 'Children over 15 have their own right to access their case, and JodaCare gives the child a structured way into their own history. That right also applies as an adult, when the questions about childhood come.',
    },
  ],
  memoryFootnote:
    'Grounded in the Child Welfare Act § 12-4 (record-keeping obligation), the Participation Regulation §§ 4–6 and NOU 2023: 7 "Safe childhood, secure future", chapter 21 on children\'s need for continuity.',

  trustTitle: 'Built for Norwegian public administration',
  trustItems: [
    {
      title: 'ID-porten and Maskinporten',
      description:
        'Norwegian authentication for Norwegian users, approved by Digdir.',
    },
    {
      title: 'All data in Europe',
      description:
        'All hosting takes place in Europe, and the AI engine runs on Mistral in Paris with no dependency on American Big Tech.',
    },
    {
      title: 'DPIA completed',
      description:
        'Data Protection Impact Assessment is in place, and the platform is GDPR-compliant from the first day.',
    },
    {
      title: 'Legally grounded',
      description:
        'The Child Welfare Act, the Public Administration Act and the Norm are built into the architecture from the ground up.',
    },
  ],
  trustLink: 'Read more about security →',

  statusTitle: 'How far along are we',
  statusSubtitle: 'The platform builds on a mature core in production since 2016, and the child welfare module is being adopted in stages together with pilot municipalities.',
  statusColumns: [
    {
      title: 'Ready today',
      items: [
        'Contact module with four roles',
        'Information barriers in the database',
        'Event log and daily communication',
        'Jodabook in App Store and Google Play',
        'ID-porten login',
      ],
    },
    {
      title: 'Ready for pilot Q2 2026',
      items: [
        'Adaptation to the municipality\'s case system',
        'Integrations with Mai Life',
        'Implementation support with dedicated lead',
      ],
    },
    {
      title: 'After first pilot',
      items: [
        'Broader rollout in more municipalities',
        'Adaptation based on pilot experience',
        'National scaling together with Mai Life and Aiantic',
      ],
    },
  ],

  ctaTitle: 'We are looking for pilot municipalities in child welfare',
  ctaBody:
    'JodaCare and Mai Life are ready. We are looking for a municipality willing to think with us about how this could work in practice. In a pilot, we do the work, and you provide the feedback that shapes the platform going forward.',
  ctaPrimary: 'Request a conversation →',
  ctaSecondary: 'See also: How Mai Life and JodaCare fit together',

  relatedTitle: 'Goes well together with',
  relatedSubtitle: 'The platform is built so that the modules strengthen each other. These are particularly relevant when you work with children and young people.',
  readMore: 'Read more',
  related: [
    {
      title: 'Implementation support',
      description:
        'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'Care home and Hub',
      description:
        'Connect resident, family and staff through a screen in the flat.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Respite care for children',
      description:
        'Secure collaboration between respite home, parents and municipality.',
      href: '/avlastning',
    },
    {
      title: 'Security and legal basis',
      description:
        'Detailed documentation of how JodaCare meets GDPR, the Norm and the Child Welfare Act.',
      href: '/sikkerhet',
    },
  ],
};

export function getBarnevernContent(locale: Locale): BarnevernContent {
  return locale === 'en' ? en : no;
}
