import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke, funksjonMerke } from './status';
import type { StatusVisning } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type BvCard = { title: string; description: string; status?: StatusVisning };
export type BvRelated = { title: string; description: string; href: string; status?: StatusVisning };
export type BvStatusItem = { text: string; status?: StatusVisning };

export type BarnevernContent = {
  heroImageAlt: string;
  // Hero
  heroBadge: string;
  heroStatus: StatusVisning;
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
  rolesStatus: StatusVisning;
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
  memoryQuoteSourceLabel: string;
  memoryQuoteSource: string;
  memoryParagraphs: { title: string; body: string; status?: StatusVisning }[];
  memoryFootnote: string;

  // Seksjon 8 — Trygghet og lovgrunnlag
  trustTitle: string;
  trustItems: BvCard[];
  trustLink: string;

  // Seksjon 9 — Status
  statusTitle: string;
  statusSubtitle: string;
  statusColumns: { title: string; items: BvStatusItem[] }[];
  priceNote: string;
  priceLinkText: string;

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

const samvaerNo = modulMerke('barnevern-og-samvaer', 'no');
const samvaerEn = modulMerke('barnevern-og-samvaer', 'en');

const no: BarnevernContent = {
  heroImageAlt: 'Mor holder et spedbarn i skogen, svart-hvitt',
  // Hero
  heroBadge: 'Barnevern',
  heroStatus: getStatusVisning('barnevern', 'no'),
  heroTitle: 'JodaCare følger barnet.',
  heroSubtitle:
    'JodaCare samler hverdagen til barnet gjennom alle overganger, fra biologisk hjem til fosterhjem og samvær.',
  primaryCta: 'Snakk med oss om pilot →',
  secondaryCta: 'Se hvordan det henger sammen',

  // Seksjon 2 — Mai Life + JodaCare
  partnerSectionTitle: 'Sammen om det viktigste',
  partnerIntro:
    'JodaCare og Mai Life utfyller hverandre. Sammen dekker vi to sider av barnevernet:',
  partnerCards: [
    {
      title: 'Mai Life tar vare på saken',
      description:
        'Sikker AI gir saksbehandlere rask oversikt over historikk og faglige vurderinger innenfor kommunens egne systemer.',
    },
    {
      title: 'JodaCare tar vare på barnet',
      description:
        `JodaCare samler samarbeidet rundt barnet i Boka og i teamet rundt barnet. Egne roller for biologiske foreldre og støttepersoner: ${samvaerNo.tekst}.`,
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
  rolesStatus: samvaerNo,
  roles: [
    {
      title: 'Saksbehandler',
      description:
        `Har full oversikt over saken, og oppretter og følger opp samværsplaner. Revisjonslogg: ${funksjonMerke('revisjonslogg', 'no').tekst}.`,
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
    'De fire rollene og informasjonsbarrierene mellom dem kommer med modulen for barnevern og samvær.',

  // Seksjon 5 — Funksjoner
  featuresTitle: 'Funksjoner for det daglige arbeidet',
  features: [
    {
      title: 'Samværsplaner med statusflyt',
      description:
        'Samværsstatus skal følge en tydelig flyt fra planlagt til bekreftet og gjennomført, eller avlyst og ikke oppmøtt. Hver status skal få en begrunnelse. Alt skal være søkbart og dokumentert.',
      status: samvaerNo,
    },
    {
      title: 'Boka fra fosterhjemmet',
      description: 'Fosterforeldre skriver innlegg i Boka med tekst, bilder og video.',
      status: modulMerke('boka', 'no'),
    },
    {
      title: 'Hendelseslogg',
      description:
        'Fosterforeldre skal kunne registrere søvn, humør, anfall, adferd og rutiner på en strukturert måte.',
      status: modulMerke('hendelseslogg', 'no'),
    },
    {
      title: 'Jodabook for barn med særskilte behov',
      description: 'En enkel visning for barn med kognitive utfordringer.',
      status: modulMerke('jodabook', 'no'),
    },
    {
      title: 'Informasjonsbarrierer',
      description: 'Biologisk forelder skal aldri se fosterforelders notater.',
      status: samvaerNo,
    },
    {
      title: 'Revisjonslogg',
      description:
        'Alle handlinger skal loggføres med tidsstempel og bruker. Loggen skal være tilgjengelig for saksbehandler ved tilsyn og eventuell rettssak.',
      status: funksjonMerke('revisjonslogg', 'no'),
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
        'Dagens JodaCare har vært i bruk for barn og unge med utviklingshemming i BPA-tjenesten. Det er mange voksne rundt hvert barn, mange overganger og høye krav til presisjon. Den samme strukturen finner vi igjen i barnevernet.',
    },
    {
      title: 'Avlastning og kognitive utfordringer',
      description:
        'Dagens JodaCare har vært i bruk for barn der mange voksne deler ansvaret, fra fosterforeldre og avlastning til foreldre og kommune.',
    },
    {
      title: 'Bygget med faggruppene som bruker det',
      description:
        'Hendelseslogg-malene, samværsmodulen og rolle-arkitekturen utvikles i samskaping med kommuner. Vi har metodikken for å bygge resten sammen med dere som kjenner barnevernet best.',
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
        'Når hverdagen dokumenteres ett sted, kan saksbehandler bruke tiden på samtale med barnet i stedet for å lete etter informasjon.',
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
  memoryQuoteSourceLabel: 'Kilde',
  memoryQuoteSource: 'Helsetilsynet, veileder for landsomfattende tilsyn 2022–2023',
  memoryParagraphs: [
    {
      title: 'Hverdagen, samlet ett sted',
      body: 'Bilder fra fosterhjemmet, notater fra avlastning og samvær som er gjennomført, samles ett sted og følger barnet videre gjennom hver overgang, hvert nytt fosterhjem og hver nye saksbehandler.',
    },
    {
      title: 'En livshistorie barnet kan eie',
      body: `Livshistorien skal samle hverdagens innhold til en sammenhengende fortelling. KAI, JodaCares norske KI-veiviser, skal kunne hjelpe med å skrive den. KAI: ${modulMerke('kai', 'no').tekst}. Når barnet er klart, enten som ungdom eller som voksen, skal det finnes noe å lese seg gjennom og lene seg på.`,
      status: modulMerke('livshistorie', 'no'),
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
      title: 'ID-porten',
      description:
        'Innlogging gjennom ID-porten på sikkerhetsnivå betydelig, med MinID, BankID, Buypass eller Commfides.',
    },
    {
      title: 'All data i Europa',
      description:
        'Databasen og tjenestene kjører i Stockholm. KI-funksjonene som kommer, skal bruke Mistral i Paris.',
    },
    {
      title: 'GDPR-compliant',
      description:
        'Plattformen er bygget med GDPR-prinsippene innebygd fra første dag, og en formell personvernkonsekvensvurdering ferdigstilles før første kommersielle barnevern-pilot.',
    },
    {
      title: 'Lovforankret',
      description:
        'Barnevern og samvær utvikles med utgangspunkt i barnevernsloven, forvaltningsloven og normen.',
    },
  ],
  trustLink: 'Les mer om sikkerhet →',

  // Seksjon 9 — Status
  statusTitle: 'Slik bygges JodaCare for barnevern',
  statusSubtitle: 'Barnevernsmodulen bygges på grunnmodulen i nye JodaCare og tas i bruk i etapper sammen med pilotkommunene.',
  priceNote:
    `${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} tjenestemottakere, pluss oppstart ${formaterPris(priser.oppstart)} én gang. Barnevernsmodulen prises separat når den er ferdig.`,
  priceLinkText: 'Se alle priser',
  statusColumns: [
    {
      title: modulMerke('boka', 'no').tekst,
      items: [
        { text: 'Boka og beskjeder' },
        { text: 'Team rundt hvert barn med rollebasert tilgang' },
        { text: 'Innlogging med ID-porten eller jobbkonto' },
      ],
    },
    {
      title: 'Det som kommer',
      items: [
        { text: 'Hendelseslogg', status: modulMerke('hendelseslogg', 'no') },
        { text: 'Jodabook', status: modulMerke('jodabook', 'no') },
        { text: 'Bekymringsmelding', status: modulMerke('bekymringsmelding', 'no') },
        { text: 'Samværsmodul med fire roller og informasjonsbarrierer', status: samvaerNo },
        { text: 'Livshistorie', status: modulMerke('livshistorie', 'no') },
        { text: 'Uten tidspunkt: kalender, revisjonslogg, KAI' },
      ],
    },
    {
      title: 'Etter første pilot',
      items: [
        { text: 'Tilpasning til kommunens fagsystem' },
        { text: 'Integrasjoner mot Mai Life' },
        { text: 'Bredere utrulling i flere kommuner' },
      ],
    },
  ],

  // Seksjon 10 — CTA-footer
  ctaTitle: 'Vi søker pilotkommuner i barnevern',
  ctaBody:
    `Barnevern og samvær: ${samvaerNo.tekst}. Vi søker en kommune som vil tenke sammen med oss om hvordan dette kan se ut i praksis hos dere. I en pilot er det vi som gjør jobben, og dere gir tilbakemeldingen som former plattformen videre.`,
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
      title: 'Hub i bolig',
      description:
        'En skjerm i leiligheten som skal koble beboer, familie og ansatte.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'no'),
    },
    {
      title: 'Avlastning for barn',
      description:
        'Trygg samhandling mellom avlastningsfamilie, foreldre og kommune.',
      href: '/avlastning',
    },
  ],
};

const en: BarnevernContent = {
  heroImageAlt: 'Mother holding an infant in the woods, black and white',
  heroBadge: 'Child welfare',
  heroStatus: getStatusVisning('barnevern', 'en'),
  heroTitle: 'JodaCare follows the child.',
  heroSubtitle:
    'JodaCare brings together the child\'s everyday life across every transition, from birth home to foster home and contact visits.',
  primaryCta: 'Talk to us about a pilot →',
  secondaryCta: 'See how it fits together',

  partnerSectionTitle: 'Together on what matters most',
  partnerIntro:
    'JodaCare and Mai Life complement each other. Together we cover two sides of child welfare:',
  partnerCards: [
    {
      title: 'Mai Life takes care of the case',
      description:
        'Secure AI gives case workers quick oversight of history and professional assessments within the municipality\'s own systems.',
    },
    {
      title: 'JodaCare takes care of the child',
      description:
        `JodaCare brings together the collaboration around the child in Boka and in the team around the child. Separate roles for birth parents and support persons: ${samvaerEn.tekst}.`,
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
  rolesStatus: samvaerEn,
  roles: [
    {
      title: 'Case worker',
      description:
        `Has full overview of the case, and creates and follows up contact plans. Audit log: ${funksjonMerke('revisjonslogg', 'en').tekst}.`,
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
    'The four roles and the information barriers between them arrive with the child welfare and contact module.',

  featuresTitle: 'Features for the daily work',
  features: [
    {
      title: 'Contact plans with status flow',
      description:
        'Contact status will follow a clear flow from planned to confirmed and completed, or cancelled and no-show. Each status will include a reason. Everything will be searchable and documented.',
      status: samvaerEn,
    },
    {
      title: 'Boka from the foster home',
      description: 'Foster carers write posts in Boka with text, photos and video.',
      status: modulMerke('boka', 'en'),
    },
    {
      title: 'Event log',
      description:
        'Foster carers will be able to record sleep, mood, seizures, behaviour and routines in a structured way.',
      status: modulMerke('hendelseslogg', 'en'),
    },
    {
      title: 'Jodabook for children with special needs',
      description: 'A simple view for children with cognitive challenges.',
      status: modulMerke('jodabook', 'en'),
    },
    {
      title: 'Information barriers',
      description: 'Birth parents will never see the foster carer\'s notes.',
      status: samvaerEn,
    },
    {
      title: 'Audit log',
      description:
        'Every action will be logged with timestamp and user. The log will be available to the case worker for oversight and any court proceedings.',
      status: funksjonMerke('revisjonslogg', 'en'),
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
        'The current JodaCare has been in use for children and young people with developmental disabilities in the personal assistance service. There are many adults around each child, many transitions and high demands for precision. We find the same structure in child welfare.',
    },
    {
      title: 'Respite care and cognitive challenges',
      description:
        'The current JodaCare has been in use for children where many adults share responsibility, from foster carers and respite carers to parents and the municipality.',
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
        'When everyday life is documented in one place, case workers can spend their time talking to the child instead of searching for information.',
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
  memoryQuoteSourceLabel: 'Source',
  memoryQuoteSource: 'The Norwegian Board of Health Supervision, national audit guide 2022–2023',
  memoryParagraphs: [
    {
      title: 'Daily life, gathered in one place',
      body: 'Photos from the foster home, notes from respite care and contact visits that were carried out are gathered in one place and follow the child onward through each transition, each new foster home and each new case worker.',
    },
    {
      title: 'A life story the child can own',
      body: `The life story will gather daily content into one coherent story. KAI, JodaCare's Norwegian AI guide, will be able to help write it. KAI: ${modulMerke('kai', 'en').tekst}. When the child is ready, whether as a teenager or as an adult, there will be something to read and lean on.`,
      status: modulMerke('livshistorie', 'en'),
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
      title: 'ID-porten',
      description:
        'Sign-in through ID-porten at security level substantial, with MinID, BankID, Buypass or Commfides.',
    },
    {
      title: 'All data in Europe',
      description:
        'The database and services run in Stockholm. The AI features that are coming will use Mistral in Paris.',
    },
    {
      title: 'GDPR compliant',
      description:
        'The platform is built with GDPR principles embedded from the first day, and a formal data protection impact assessment will be completed before the first commercial child welfare pilot.',
    },
    {
      title: 'Legally grounded',
      description:
        'Child welfare and contact is developed on the basis of the Child Welfare Act, the Public Administration Act and the Norm.',
    },
  ],
  trustLink: 'Read more about security →',

  statusTitle: 'How JodaCare for child welfare is being built',
  statusSubtitle: 'The child welfare module is built on the core module in the new JodaCare and is adopted in stages together with pilot municipalities.',
  priceNote:
    `${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} service recipients, plus onboarding ${formaterPrisEn(priser.oppstart)} one off. The child welfare module is priced separately once it is finished.`,
  priceLinkText: 'See all prices',
  statusColumns: [
    {
      title: modulMerke('boka', 'en').tekst,
      items: [
        { text: 'Boka and notices' },
        { text: 'A team around each child with role-based access' },
        { text: 'Sign-in with ID-porten or work account' },
      ],
    },
    {
      title: 'What is coming',
      items: [
        { text: 'Event log', status: modulMerke('hendelseslogg', 'en') },
        { text: 'Jodabook', status: modulMerke('jodabook', 'en') },
        { text: 'Concern report', status: modulMerke('bekymringsmelding', 'en') },
        { text: 'Contact module with four roles and information barriers', status: samvaerEn },
        { text: 'Life story', status: modulMerke('livshistorie', 'en') },
        { text: 'No date yet: calendar, audit log, KAI' },
      ],
    },
    {
      title: 'After first pilot',
      items: [
        { text: 'Adaptation to the municipality\'s case system' },
        { text: 'Integrations with Mai Life' },
        { text: 'Broader rollout in more municipalities' },
      ],
    },
  ],

  ctaTitle: 'We are looking for pilot municipalities in child welfare',
  ctaBody:
    `Child welfare and contact: ${samvaerEn.tekst}. We are looking for a municipality willing to think with us about how this could work in practice. In a pilot, we do the work, and you provide the feedback that shapes the platform going forward.`,
  ctaPrimary: 'Request a conversation →',
  ctaSecondary: 'See also: How Mai Life and JodaCare fit together',

  relatedTitle: 'Other parts of JodaCare that strengthen child welfare work',
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
      title: 'Hub in the home',
      description:
        'A screen in the flat that will connect resident, family and staff.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'en'),
    },
    {
      title: 'Respite care for children',
      description:
        'Secure collaboration between respite home, parents and municipality.',
      href: '/avlastning',
    },
  ],
};

export function getBarnevernContent(locale: Locale): BarnevernContent {
  return locale === 'en' ? en : no;
}
