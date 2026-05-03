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
  statusColumns: { title: string; items: string[] }[];

  // Seksjon 10 — CTA-footer
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;

  // Seksjon 11 — Relaterte sider
  relatedTitle: string;
  readMore: string;
  related: BvRelated[];
};

const no: BarnevernContent = {
  // Hero
  heroBadge: 'Barnevern',
  heroTitle: 'JodaCare følger barnet.',
  heroSubtitle:
    'Fra biologisk hjem, til fosterhjem, til samvær. Ett sted som vet hvem barnet er — og som beskytter det som ikke skal deles.',
  primaryCta: 'Snakk med oss om pilot →',
  secondaryCta: 'Se hvordan det henger sammen',

  // Seksjon 2 — Mai Life + JodaCare
  partnerSectionTitle: 'Sammen om det viktigste',
  partnerIntro:
    'JodaCare og Mai Life jobber under samme paraply (Aiantic AB). Sammen dekker vi to sider av barnevernet:',
  partnerCards: [
    {
      title: 'Mai Life tar saken',
      description:
        'Sikker AI som gir saksbehandlere rask oversikt over historikk og faglige vurderinger — innenfor kommunens egne systemer.',
    },
    {
      title: 'JodaCare tar barnet',
      description:
        'Daglig samhandling og dokumentasjon mellom alle som er rundt barnet — saksbehandler, fosterforeldre, biologiske foreldre og støttepersoner.',
    },
  ],

  // Seksjon 3 — Kjenner du deg igjen?
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarios: [
    {
      title: 'Mange voksne, fragmentert bilde',
      description:
        'Saksbehandler, fosterforeldre, biologiske foreldre, lærer, BUP. Alle ser sin del av barnet. Ingen ser helheten.',
    },
    {
      title: 'Dokumentasjon stjeler tid fra barnet',
      description:
        'Mye av hverdagen til en saksbehandler går til å skrive ned, lese og videreformidle. Tid som kunne vært brukt sammen med barnet.',
    },
    {
      title: 'E-post og SMS er ikke trygt nok',
      description:
        'Sensitive opplysninger om barn ender i private innbokser og chat-tråder. Det går ikke i barnevernet.',
    },
    {
      title: 'Audit trail er ufullstendig',
      description:
        'Når noe skal gjennomgås — eller havner i retten — må sporbarheten være på plass fra dag én.',
    },
  ],

  // Seksjon 4 — Slik henger det sammen
  rolesTitle: 'Slik henger det sammen',
  rolesSubtitle: 'Fire roller. Tydelige grenser. Ett barn i sentrum.',
  roles: [
    {
      title: 'Saksbehandler',
      description:
        'Full oversikt over saken. Oppretter samværsplaner, følger opp, har tilgang til komplett audit trail.',
    },
    {
      title: 'Fosterforelder',
      description:
        'Dokumenterer hverdagen. Bekrefter og gjennomfører samvær. Ser aldri biologisk forelders notater.',
    },
    {
      title: 'Biologisk forelder',
      description:
        'Ser samværsplan og status for egne samvær. Beskyttet mot innsyn i fosterhjemmets dokumentasjon.',
    },
    {
      title: 'Støtteperson',
      description:
        'Deltar i samvær når det trengs. Ser kun det som er nødvendig for sin rolle.',
    },
  ],
  rolesFootnote:
    'Informasjonsbarrierene er teknisk håndhevet — ikke bare rutinebasert.',

  // Seksjon 5 — Funksjoner
  featuresTitle: 'Alt som trengs. Ingenting som ikke trengs.',
  features: [
    {
      title: 'Samværsplaner med status-flyt',
      description:
        'Planlagt → Bekreftet → Gjennomført / Avlyst / Ikke oppmøtt. Med begrunnelse, søkbart og dokumentert.',
    },
    {
      title: 'Daglig logg fra fosterforeldre',
      description:
        'Bilder, notater og hendelser fra hverdagen. AI-oppsummering så saksbehandler kan lese to ukers historikk på ett minutt.',
    },
    {
      title: 'Hendelseslogg',
      description:
        'Strukturert registrering av søvn, humør, anfall, adferd og rutiner. Kalendervisning gir mønsteret over tid.',
    },
    {
      title: 'Jodabook for barn med særskilte behov',
      description:
        'Egen app i App Store og Google Play for barn med kognitive utfordringer. Forenklet grensesnitt, store knapper, rutiner og stemningssjekk.',
    },
    {
      title: 'Informasjonsbarrierer',
      description:
        'Biologisk forelder ser aldri fosterforelders notater. Teknisk håndhevet i databasen, ikke bare i rutinene.',
    },
    {
      title: 'Full audit trail',
      description:
        'Alle handlinger loggføres med tidsstempel og bruker-ID. Tilgjengelig for saksbehandler og forberedt for tilsyn og rettssak.',
    },
  ],

  // Seksjon 6 — Erfaringer
  experienceTitle:
    'Vi er ikke nybegynnere på «mange voksne rundt ett barn»',
  experienceSubtitle:
    'JodaCare har stått i drift hos norske kommuner siden 2016. Mye av strukturen i barnevern finnes også i nabosegmentene vi allerede leverer til.',
  experiences: [
    {
      title: 'Horten kommune siden 2016',
      description:
        'JodaCare brukes daglig for barn og unge med utviklingshemming i BPA-tjenesten. Mange voksne, mange overganger, krav til presisjon — den samme strukturen som barnevern.',
    },
    {
      title: 'Avlastning og kognitive utfordringer',
      description:
        'Vi har bygget hverdagsverktøy for barn der mange voksne deler ansvaret — fosterforeldre, avlastning, foreldre, kommune. Jodabook er allerede i App Store og Google Play.',
    },
    {
      title: 'Bygget med faggruppene som bruker det',
      description:
        'Hendelseslogg-malene, samværsmodulen og rolle-arkitekturen er utviklet i samskaping med kommuner. Vi tror ikke vi vet alt om barnevern — men vi har metodikken for å bygge resten sammen med dere.',
    },
  ],

  // Seksjon 7 — Hva dere får igjen
  efficiencyTitle: 'Hva dere får igjen',
  efficiencySubtitle:
    'Effektivisering er ikke et mål i seg selv — det er tid frigjort til barnet.',
  efficiencyItems: [
    {
      title: 'Mindre tid på dokumentasjon.',
      description:
        'AI-oppsummering kutter to ukers loggjennomgang ned til ett minutt. Saksbehandler kan bruke tiden på samtale i stedet for å lete.',
    },
    {
      title: 'Færre koordineringsmøter.',
      description:
        'Når informasjonen ligger samlet, slipper saksbehandler å ringe rundt for å bygge oversikt før hvert møte.',
    },
    {
      title: 'Raskere onboarding av nye fosterforeldre.',
      description:
        'Plattformen er der allerede. Nye fosterforeldre inviteres inn — de slipper egen opplæring i kommunens systemer.',
    },
    {
      title: 'Mindre dobbeltrapportering.',
      description:
        'Det som skrives én gang, leses av alle som skal lese det. Ingen videresending, ingen Excel-skjemaer.',
    },
  ],
  efficiencyDisclaimer:
    'Vi har ikke målt disse effektene spesifikt for barnevern ennå. Tallene over er erfaring fra Horten kommune i BPA siden 2016, der strukturen er svært lik. Det er en av grunnene til at vi nå søker pilotkommuner i barnevern.',

  // Seksjon 7.5 — For barnet — også som voksen
  memoryBadge: 'For barnet — også som voksen',
  memoryTitle: 'En barndom som kan huskes.',
  memorySubtitle:
    'Mange voksne som har vokst opp med tiltak fra barnevernet, forteller at minnene fra barndommen er uklare. Hvor var jeg når? Hvem var de voksne rundt meg? Hadde vi ferier det året? JodaCare følger barnet — og samler samtidig en historie barnet kan eie selv.',
  memoryQuote:
    'Skriftlighet er sentralt for å sikre den enkeltes rettssikkerhet, men også viktig for å sikre barnets mulighet til å bli kjent med egen historie.',
  memoryQuoteSource: 'Helsetilsynet, veileder for landsomfattende tilsyn 2022–2023',
  memoryParagraphs: [
    {
      title: 'Hverdagen, samlet ett sted',
      body: 'Bilder fra fosterhjemmet. Notater fra avlastning. Samvær som ble gjennomført. Hverdagen til barnet samles ett sted og følger barnet videre — gjennom hver overgang, hvert nytt fosterhjem, hver ny saksbehandler.',
    },
    {
      title: 'En livshistorie barnet kan eie',
      body: 'KAI, JodaCares norske AI-veiviser, kan skrive sammen hverdagens innhold til en sammenhengende livshistorie. Når barnet er klart — som ungdom eller som voksen — finnes det noe å lese, noe å huske gjennom.',
    },
    {
      title: 'Innsyn når barnet trenger det',
      body: 'Barn over 15 år har egen rett til innsyn i sin sak. JodaCare gir barnet en strukturert vei inn i sin egen historie. Også som voksen, når spørsmålene kommer.',
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
        'Norsk autentisering for norske brukere. Godkjent av Digdir.',
    },
    {
      title: 'All data i Europa',
      description:
        'Hosting i Europa. AI-motor på Mistral i Paris. Null avhengighet av amerikansk Big Tech.',
    },
    {
      title: 'DPIA gjennomført',
      description:
        'Personvernkonsekvensvurdering på plass. GDPR-compliant fra dag én.',
    },
    {
      title: 'Lovforankret',
      description:
        'Barnevernsloven, forvaltningsloven og normen er hensyntatt i arkitekturen — ikke lagt på som filter.',
    },
  ],
  trustLink: 'Les mer om sikkerhet →',

  // Seksjon 9 — Status
  statusTitle: 'Hvor langt er vi',
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
    'JodaCare og Mai Life er klare. Det vi mangler er en kommune som vil tenke sammen med oss om hvordan dette kan se ut hos dere. Pilot betyr ikke at dere skal jobbe — det betyr at vi gjør jobben, og dere gir oss tilbakemelding.',
  ctaPrimary: 'Be om en samtale →',
  ctaSecondary: 'Se også: Slik henger Mai Life og JodaCare sammen',

  // Seksjon 11 — Relaterte sider
  relatedTitle: 'Henger godt sammen med',
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
    'From birth home, to foster home, to contact visits. One place that knows who the child is — and protects what should not be shared.',
  primaryCta: 'Talk to us about a pilot →',
  secondaryCta: 'See how it fits together',

  partnerSectionTitle: 'Together on what matters most',
  partnerIntro:
    'JodaCare and Mai Life work under the same umbrella (Aiantic AB). Together we cover two sides of child welfare:',
  partnerCards: [
    {
      title: 'Mai Life takes the case',
      description:
        'Secure AI that gives case workers quick oversight of history and professional assessments — within the municipality\'s own systems.',
    },
    {
      title: 'JodaCare takes the child',
      description:
        'Daily collaboration and documentation between everyone around the child — case worker, foster carers, birth parents and support persons.',
    },
  ],

  scenarioTitle: 'Does this sound familiar?',
  scenarios: [
    {
      title: 'Many adults, fragmented picture',
      description:
        'Case worker, foster carers, birth parents, teacher, child psychiatry. Everyone sees their part of the child. Nobody sees the whole.',
    },
    {
      title: 'Documentation steals time from the child',
      description:
        'Much of a case worker\'s day goes to writing, reading and relaying. Time that could have been spent with the child.',
    },
    {
      title: 'Email and SMS are not secure enough',
      description:
        'Sensitive information about children ends up in private inboxes and chat threads. That is not acceptable in child welfare.',
    },
    {
      title: 'Audit trail is incomplete',
      description:
        'When something needs review — or ends up in court — traceability must be in place from day one.',
    },
  ],

  rolesTitle: 'How it fits together',
  rolesSubtitle: 'Four roles. Clear boundaries. One child at the centre.',
  roles: [
    {
      title: 'Case worker',
      description:
        'Full overview of the case. Creates contact plans, follows up, has access to complete audit trail.',
    },
    {
      title: 'Foster carer',
      description:
        'Documents daily life. Confirms and carries out contact. Never sees birth parent\'s notes.',
    },
    {
      title: 'Birth parent',
      description:
        'Sees contact plan and status for own visits. Protected from insight into the foster home\'s documentation.',
    },
    {
      title: 'Support person',
      description:
        'Participates in contact when needed. Sees only what is necessary for their role.',
    },
  ],
  rolesFootnote:
    'Information barriers are technically enforced — not just routine-based.',

  featuresTitle: 'Everything you need. Nothing you do not.',
  features: [
    {
      title: 'Contact plans with status flow',
      description:
        'Planned → Confirmed → Completed / Cancelled / No-show. With reason, searchable and documented.',
    },
    {
      title: 'Daily log from foster carers',
      description:
        'Photos, notes and events from daily life. AI summary so the case worker can read two weeks of history in one minute.',
    },
    {
      title: 'Event log',
      description:
        'Structured recording of sleep, mood, seizures, behaviour and routines. Calendar view reveals patterns over time.',
    },
    {
      title: 'Jodabook for children with special needs',
      description:
        'Dedicated app in App Store and Google Play for children with cognitive challenges. Simplified interface, large buttons, routines and mood checks.',
    },
    {
      title: 'Information barriers',
      description:
        'Birth parent never sees foster carer\'s notes. Technically enforced in the database, not just in routines.',
    },
    {
      title: 'Full audit trail',
      description:
        'Every action is logged with timestamp and user ID. Available to case worker and prepared for oversight and court.',
    },
  ],

  experienceTitle:
    'We are not beginners at "many adults around one child"',
  experienceSubtitle:
    'JodaCare has been in production at Norwegian municipalities since 2016. Much of the structure in child welfare also exists in the adjacent segments we already deliver to.',
  experiences: [
    {
      title: 'Horten municipality since 2016',
      description:
        'JodaCare is used daily for children and young people with developmental disabilities in the personal assistance service. Many adults, many transitions, precision required — the same structure as child welfare.',
    },
    {
      title: 'Respite care and cognitive challenges',
      description:
        'We have built everyday tools for children where many adults share responsibility — foster carers, respite carers, parents, municipality. Jodabook is already in App Store and Google Play.',
    },
    {
      title: 'Built with the professional groups that use it',
      description:
        'Event log templates, the contact module and role architecture are developed in co-creation with municipalities. We do not claim to know everything about child welfare — but we have the methodology to build the rest together with you.',
    },
  ],

  efficiencyTitle: 'What you get in return',
  efficiencySubtitle:
    'Efficiency is not a goal in itself — it is time freed up for the child.',
  efficiencyItems: [
    {
      title: 'Less time on documentation.',
      description:
        'AI summary cuts two weeks of log review down to one minute. Case worker can spend time on conversation instead of searching.',
    },
    {
      title: 'Fewer coordination meetings.',
      description:
        'When information is collected in one place, case workers avoid phoning around to build an overview before each meeting.',
    },
    {
      title: 'Faster onboarding of new foster carers.',
      description:
        'The platform is already there. New foster carers are invited in — they skip separate training in the municipality\'s systems.',
    },
    {
      title: 'Less double reporting.',
      description:
        'What is written once is read by everyone who should read it. No forwarding, no Excel sheets.',
    },
  ],
  efficiencyDisclaimer:
    'We have not measured these effects specifically for child welfare yet. The figures above are experience from Horten municipality in personal assistance since 2016, where the structure is very similar. That is one of the reasons we are now seeking pilot municipalities in child welfare.',

  memoryBadge: 'For the child — also as an adult',
  memoryTitle: 'A childhood that can be remembered.',
  memorySubtitle:
    'Many adults who grew up with child welfare interventions say their childhood memories are unclear. Where was I when? Who were the adults around me? Did we have holidays that year? JodaCare follows the child — and at the same time gathers a story the child can own.',
  memoryQuote:
    'Written documentation is central to safeguarding the individual\'s legal rights, but also important for ensuring the child\'s opportunity to become familiar with their own history.',
  memoryQuoteSource: 'The Norwegian Board of Health Supervision, national audit guide 2022–2023',
  memoryParagraphs: [
    {
      title: 'Daily life, gathered in one place',
      body: 'Photos from the foster home. Notes from respite care. Contact visits that were carried out. The child\'s daily life is gathered in one place and follows the child onward — through each transition, each new foster home, each new case worker.',
    },
    {
      title: 'A life story the child can own',
      body: 'KAI, JodaCare\'s Norwegian AI guide, can weave daily content into a coherent life story. When the child is ready — as a teenager or as an adult — there is something to read, something to remember through.',
    },
    {
      title: 'Access when the child needs it',
      body: 'Children over 15 have their own right to access their case. JodaCare gives the child a structured way into their own history. Also as an adult, when the questions come.',
    },
  ],
  memoryFootnote:
    'Grounded in the Child Welfare Act § 12-4 (record-keeping obligation), the Participation Regulation §§ 4–6 and NOU 2023: 7 "Safe childhood, secure future", chapter 21 on children\'s need for continuity.',

  trustTitle: 'Built for Norwegian public administration',
  trustItems: [
    {
      title: 'ID-porten and Maskinporten',
      description:
        'Norwegian authentication for Norwegian users. Approved by Digdir.',
    },
    {
      title: 'All data in Europe',
      description:
        'Hosting in Europe. AI engine on Mistral in Paris. Zero dependency on American Big Tech.',
    },
    {
      title: 'DPIA completed',
      description:
        'Data Protection Impact Assessment in place. GDPR-compliant from day one.',
    },
    {
      title: 'Legally grounded',
      description:
        'The Child Welfare Act, the Public Administration Act and the Norm are reflected in the architecture — not added as a filter.',
    },
  ],
  trustLink: 'Read more about security →',

  statusTitle: 'How far along are we',
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
    'JodaCare and Mai Life are ready. What we lack is a municipality willing to think with us about how this could look at your place. Pilot does not mean you do the work — it means we do the work, and you give us feedback.',
  ctaPrimary: 'Request a conversation →',
  ctaSecondary: 'See also: How Mai Life and JodaCare fit together',

  relatedTitle: 'Goes well together with',
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
