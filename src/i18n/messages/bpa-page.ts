import type { Locale } from '@/lib/i18n/types';

export type BpaTextCard = { title: string; description: string };
export type BpaRelated = { title: string; description: string; href: string };

export type BpaContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  secondaryCta: string;
  scenarioTitle: string;
  scenarioBody: string;
  userGroups: BpaTextCard[];
  featuresTitle: string;
  features: BpaTextCard[];
  referenceTitle: string;
  referenceBody: string;
  statusBadge: string;
  statusTitle: string;
  statusBody: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: BpaRelated[];
};

const no: BpaContent = {
  heroTitle: 'Brukeren beholder kontrollen. Assistentene vet hva som forventes.',
  heroSubtitle:
    'JodaCare samler hele omsorgsteamet rundt brukeren — med et enkelt verktøy for brukeren selv, sjekklister for assistentene, og full oversikt for koordinator og familie.',
  heroBadge: 'Brukerstyrt personlig assistanse',
  primaryCta: 'Kontakt oss',
  secondaryCta: 'Se funksjoner',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'En BPA-bruker har gjerne et team på fem til ti assistenter. Rutiner og behov skal videreformidles presist til alle. I dag skjer det via SMS, muntlig overlapping og papirnotater. Noe går alltid tapt.',
  userGroups: [
    {
      title: 'For brukeren',
      description:
        'Jodabook: en enkel app med store knapper og bilder, tilpasset for den som trenger ekstra støtte. Ingen passord å huske — innlogging via QR-kode og PIN.',
    },
    {
      title: 'For assistentene',
      description:
        'Rutiner og sjekklister som alle jobber etter. Dagbok (Boka) for kommunikasjon i teamet. Alltid oppdatert, alltid tilgjengelig.',
    },
    {
      title: 'For koordinator og familie',
      description: 'Full oversikt uten å måtte ringe. Se hva som skjer, hvem som var der og hvordan det gikk.',
    },
  ],
  featuresTitle: 'Alt som trengs. Ingenting som ikke trengs.',
  features: [
    {
      title: 'Jodabook for brukeren',
      description:
        'Enkel app med store knapper, bilder og lyd. Støtter kognitiv tilpasning for utviklingshemming, autisme og demens.',
    },
    {
      title: 'Rutiner og sjekklister',
      description:
        'Opprett gjentakende eller engangsjekklister. Assistentene avhuker steg for steg. Alt er loggført.',
    },
    {
      title: 'Omsorgsteam-modell',
      description: 'Kun de som hører til i teamet ser brukeren. Personvern og rollebasert tilgang innebygd.',
    },
    {
      title: 'Hendelseslogg',
      description:
        'Registrer avvik, atferd, medisin og mer. Koordinator og relevant helsepersonell varsles.',
    },
    {
      title: 'KAI-assistent',
      description: 'AI-hjelper for helsepersonell som forklarer rutiner, svarer på spørsmål og veileder i plattformen.',
    },
  ],
  referenceTitle: 'I bruk siden 2016',
  referenceBody:
    'Horten kommune er betalende BPA-kunde og har brukt JodaCare siden oppstarten. Silje Figved-nettverket er en aktiv pilot for migrering til JodaCare 2.0.',
  statusBadge: 'Beta 2026',
  statusTitle: 'Bli med som pilotkommune',
  statusBody:
    'JodaCare for BPA er i aktiv bruk og tas inn i JodaCare 2.0 i løpet av 2026. Pilotkommuner får tett oppfølging og er med på å forme det endelige produktet. Pris settes basert på antall brukere og tjenestenivå.',
  statusCta: 'Kontakt oss for pilotplass',
  relatedTitle: 'Henger godt sammen med',
  readMore: 'Les mer',
  related: [
    {
      title: 'Omsorgsbolig og Hub',
      description: 'Skjerm i leiligheten som kobler beboer, familie og ansatte.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'Avlastning for barn',
      description: 'Trygg kommunikasjon mellom foreldre og avlastningsbolig.',
      href: '/avlastning',
    },
  ],
};

const en: BpaContent = {
  heroTitle: 'The user keeps control. Assistants know what is expected.',
  heroSubtitle:
    'JodaCare brings the whole care team around the user — with a simple tool for the user, checklists for assistants, and full overview for coordinator and family.',
  heroBadge: 'User-controlled personal assistance',
  primaryCta: 'Contact us',
  secondaryCta: 'See features',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'A personal-assistance user often has five to ten assistants. Routines and needs must be communicated precisely to everyone. Today that happens through SMS, verbal handovers and paper notes — something always gets lost.',
  userGroups: [
    {
      title: 'For the user',
      description:
        'Jodabook: a simple app with large buttons and images for people who need extra support. No passwords to remember — sign in with QR code and PIN.',
    },
    {
      title: 'For assistants',
      description:
        'Routines and checklists everyone follows. The diary (“Boka”) for team communication. Always up to date, always available.',
    },
    {
      title: 'For coordinator and family',
      description: 'Full overview without calling around. See what happened, who was there and how it went.',
    },
  ],
  featuresTitle: 'Everything you need. Nothing you do not.',
  features: [
    {
      title: 'Jodabook for the user',
      description:
        'A simple app with large buttons, images and sound. Supports cognitive adaptations for intellectual disability, autism and dementia.',
    },
    {
      title: 'Routines and checklists',
      description:
        'Create recurring or one-off checklists. Assistants tick off step by step. Everything is logged.',
    },
    {
      title: 'Care team model',
      description: 'Only people in the team see the user. Privacy and role-based access built in.',
    },
    {
      title: 'Event log',
      description: 'Record incidents, behaviour, medication and more. Coordinator and relevant staff are notified.',
    },
    {
      title: 'KAI assistant',
      description: 'An AI helper for staff that explains routines, answers questions and guides you in the platform.',
    },
  ],
  referenceTitle: 'In use since 2016',
  referenceBody:
    'Horten municipality is a paying BPA customer and has used JodaCare from the start. The Silje Figved network is an active pilot for migration to JodaCare 2.0.',
  statusBadge: 'Beta 2026',
  statusTitle: 'Join as a pilot municipality',
  statusBody:
    'JodaCare for BPA is in active use and is being brought into JodaCare 2.0 during 2026. Pilot municipalities receive close follow-up and help shape the final product. Pricing depends on number of users and service level.',
  statusCta: 'Contact us for a pilot place',
  relatedTitle: 'Goes well together with',
  readMore: 'Read more',
  related: [
    {
      title: 'Care home and Hub',
      description: 'A screen in the flat connecting resident, family and staff.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'Respite care for children',
      description: 'Secure communication between parents and the respite home.',
      href: '/avlastning',
    },
  ],
};

export function getBpaContent(locale: Locale): BpaContent {
  return locale === 'en' ? en : no;
}
