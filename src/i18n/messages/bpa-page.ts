import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke } from './status';
import type { StatusVisning } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type BpaTextCard = { title: string; description: string; status?: StatusVisning };
export type BpaRelated = { title: string; description: string; href: string; status?: StatusVisning };
export type BpaStatusItem = { label: string; status: StatusVisning };

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
  statusItems: BpaStatusItem[];
  priceNote: string;
  priceLinkText: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: BpaRelated[];
};

const no: BpaContent = {
  heroTitle: 'Brukeren beholder kontrollen, og assistentene vet hva som forventes.',
  heroSubtitle:
    'JodaCare samler hele omsorgsteamet rundt brukeren. Assistentene og familien skriver og leser i Boka.',
  heroBadge: 'Brukerstyrt personlig assistanse',
  primaryCta: 'Kontakt oss',
  secondaryCta: 'Se funksjoner',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'En BPA-bruker har gjerne et team på fem til ti assistenter, og rutiner og behov skal videreformidles presist til alle. I dag skjer det via SMS, muntlig overlapping og papirnotater, og noe går alltid tapt på veien.',
  userGroups: [
    {
      title: 'For brukeren',
      description:
        'Jodabook er en enkel app med store knapper og bilder, tilpasset den som trenger ekstra støtte. Brukeren slipper å huske passord, og logger inn med QR-kode og PIN.',
      status: modulMerke('jodabook', 'no'),
    },
    {
      title: 'For assistentene',
      description:
        'Assistentene bruker Boka til kommunikasjon i teamet. Informasjonen er alltid oppdatert og alltid tilgjengelig.',
    },
    {
      title: 'For familien',
      description: 'Familien følger med i Boka uten å måtte ringe rundt.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Jodabook for brukeren',
      description:
        'Jodabook er en enkel app med store knapper, bilder og lyd, og støtter kognitiv tilpasning for utviklingshemming, autisme og demens.',
      status: modulMerke('jodabook', 'no'),
    },
    {
      title: 'Rutiner og sjekklister',
      description:
        'Du oppretter gjentakende eller engangs sjekklister, og assistentene avhuker steg for steg mens alt loggføres automatisk.',
      status: modulMerke('sjekklister-og-rutiner', 'no'),
    },
    {
      title: 'Omsorgsteam-modell',
      description: 'Kun de som hører til i teamet ser brukeren, og personvern og rollebasert tilgang er bygget inn fra grunnen av.',
    },
    {
      title: 'Hendelseslogg',
      description:
        'Hendelsesloggen registrerer avvik, atferd, medisin og mer.',
      status: modulMerke('hendelseslogg', 'no'),
    },
    {
      title: 'KAI-assistent',
      description: 'KAI skal hjelpe deg å finne frem i JodaCare.',
      status: modulMerke('kai', 'no'),
    },
  ],
  referenceTitle: 'I bruk siden 2016',
  referenceBody:
    'Horten kommune er betalende BPA-kunde og har brukt dagens JodaCare siden oppstarten.',
  statusBadge: modulMerke('bpa', 'no').tekst,
  statusTitle: 'Bli med fra starten',
  statusBody:
    'BPA i nye JodaCare starter som pilot. Kommuner som vil være med i piloten, kan ta kontakt nå. Nye moduler kommer kvartal for kvartal, og kommunen velger selv hvilke den vil ha. Dette kommer senere:',
  statusItems: [
    { label: 'Kalender', status: modulMerke('kalender', 'no') },
    { label: 'Rutiner og sjekklister', status: modulMerke('sjekklister-og-rutiner', 'no') },
    { label: 'Hendelseslogg', status: modulMerke('hendelseslogg', 'no') },
    { label: 'Jodabook', status: modulMerke('jodabook', 'no') },
  ],
  priceNote:
    `${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} tjenestemottakere, pluss oppstart ${formaterPris(priser.oppstart)} én gang.`,
  priceLinkText: 'Se alle priser',
  statusCta: 'Kontakt oss for pilotplass',
  relatedTitle: 'Andre deler av JodaCare som styrker BPA-arbeidet',
  readMore: 'Les mer',
  related: [
    {
      title: 'Omsorgsbolig og Hub',
      description: 'En skjerm i leiligheten skal koble beboer, familie og ansatte.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'no'),
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
      status: getStatusVisning('avlastning', 'no'),
    },
  ],
};

const en: BpaContent = {
  heroTitle: 'The user keeps control, and assistants know what is expected.',
  heroSubtitle:
    'JodaCare brings the whole care team together around the user. Assistants and family write and read in Boka.',
  heroBadge: 'User-controlled personal assistance',
  primaryCta: 'Contact us',
  secondaryCta: 'See features',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'A personal-assistance user often has five to ten assistants, and routines and needs must be communicated precisely to everyone. Today that happens through SMS, verbal handovers and paper notes, and something always gets lost along the way.',
  userGroups: [
    {
      title: 'For the user',
      description:
        'Jodabook is a simple app with large buttons and images for people who need extra support. The user does not have to remember a password, and signs in with a QR code and PIN.',
      status: modulMerke('jodabook', 'en'),
    },
    {
      title: 'For assistants',
      description:
        'Assistants use Boka for team communication. The information is always up to date and always available.',
    },
    {
      title: 'For the family',
      description: 'The family follows along in Boka without calling around.',
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Jodabook for the user',
      description:
        'A simple app with large buttons, images and sound. Supports cognitive adaptations for intellectual disability, autism and dementia.',
      status: modulMerke('jodabook', 'en'),
    },
    {
      title: 'Routines and checklists',
      description:
        'Create recurring or one-off checklists. Assistants tick off step by step. Everything is logged.',
      status: modulMerke('sjekklister-og-rutiner', 'en'),
    },
    {
      title: 'Care team model',
      description: 'Only people in the team see the user. Privacy and role-based access built in.',
    },
    {
      title: 'Incident log',
      description: 'The incident log records incidents, behaviour, medication and more.',
      status: modulMerke('hendelseslogg', 'en'),
    },
    {
      title: 'KAI assistant',
      description: 'KAI will help you find your way around JodaCare.',
      status: modulMerke('kai', 'en'),
    },
  ],
  referenceTitle: 'In use since 2016',
  referenceBody:
    'Horten municipality is a paying BPA customer and has used the current JodaCare from the start.',
  statusBadge: modulMerke('bpa', 'en').tekst,
  statusTitle: 'Join from the start',
  statusBody:
    'BPA in the new JodaCare starts as a pilot. Municipalities that want to join the pilot can contact us now. New modules arrive quarter by quarter, and the municipality chooses which ones it wants. This comes later:',
  statusItems: [
    { label: 'Calendar', status: modulMerke('kalender', 'en') },
    { label: 'Routines and checklists', status: modulMerke('sjekklister-og-rutiner', 'en') },
    { label: 'Incident log', status: modulMerke('hendelseslogg', 'en') },
    { label: 'Jodabook', status: modulMerke('jodabook', 'en') },
  ],
  priceNote:
    `${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} service recipients, plus onboarding ${formaterPrisEn(priser.oppstart)} one off.`,
  priceLinkText: 'See all prices',
  statusCta: 'Contact us for a pilot place',
  relatedTitle: 'Other parts of JodaCare that strengthen personal assistance',
  readMore: 'Read more',
  related: [
    {
      title: 'Care home and Hub',
      description: 'A screen in the flat will connect resident, family and staff.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'en'),
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
      status: getStatusVisning('avlastning', 'en'),
    },
  ],
};

export function getBpaContent(locale: Locale): BpaContent {
  return locale === 'en' ? en : no;
}
