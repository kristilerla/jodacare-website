import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning } from './status';
import { formaterPris, formaterPrisEn, pakkeprisMnd, priser } from '@/lib/fakta';

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
    'JodaCare samler hele omsorgsteamet rundt brukeren, med Boka for assistentene og full oversikt for koordinator og familie.',
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
        'Jodabook er en enkel app med store knapper og bilder, tilpasset den som trenger ekstra støtte. Brukeren slipper å huske passord, og logger inn med QR-kode og PIN. Jodabook kommer Q1 2027.',
    },
    {
      title: 'For assistentene',
      description:
        'Assistentene bruker Boka til kommunikasjon i teamet. Informasjonen er alltid oppdatert og alltid tilgjengelig.',
    },
    {
      title: 'For koordinator og familie',
      description: 'Koordinator og familie har full oversikt uten å måtte ringe rundt, og kan se hva som skjer, hvem som var der og hvordan det gikk.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Jodabook for brukeren (kommer Q1 2027)',
      description:
        'Jodabook er en enkel app med store knapper, bilder og lyd, og støtter kognitiv tilpasning for utviklingshemming, autisme og demens.',
    },
    {
      title: 'Rutiner og sjekklister (kommer Q4 2026)',
      description:
        'Du oppretter gjentakende eller engangs sjekklister, og assistentene avhuker steg for steg mens alt loggføres automatisk.',
    },
    {
      title: 'Omsorgsteam-modell',
      description: 'Kun de som hører til i teamet ser brukeren, og personvern og rollebasert tilgang er bygget inn fra grunnen av.',
    },
    {
      title: 'Hendelseslogg (kommer Q4 2026)',
      description:
        'Hendelsesloggen registrerer avvik, atferd, medisin og mer.',
    },
    {
      title: 'KAI-assistent',
      description: 'KAI hjelper deg å finne frem i JodaCare og forklarer hvordan appen brukes.',
    },
  ],
  referenceTitle: 'I bruk siden 2016',
  referenceBody:
    'Horten kommune er betalende BPA-kunde og har brukt JodaCare siden oppstarten.',
  statusBadge: getStatusVisning('bpa', 'no').tekst,
  statusTitle: 'Bli med fra starten',
  statusBody:
    'Nye JodaCare lanseres høsten 2026 med Boka, kalender, beskjeder og team rundt hver bruker. Nye moduler kommer kvartal for kvartal, og kommunen velger selv hvilke den vil ha.',
  priceNote:
    `Lisens fra ${formaterPris(pakkeprisMnd())} per måned for inntil 10 tjenestemottakere, pluss oppstart.`,
  priceLinkText: 'Se alle priser',
  statusCta: 'Kontakt oss for pilotplass',
  relatedTitle: 'Andre deler av JodaCare som styrker BPA-arbeidet',
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
  heroTitle: 'The user keeps control, and assistants know what is expected.',
  heroSubtitle:
    'JodaCare brings the whole care team around the user, with Boka for assistants and full overview for coordinator and family.',
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
        'Jodabook is a simple app with large buttons and images for people who need extra support. No passwords to remember, just sign in with QR code and PIN. Jodabook arrives in Q1 2027.',
    },
    {
      title: 'For assistants',
      description:
        'Assistants use Boka for team communication. The information is always up to date and always available.',
    },
    {
      title: 'For coordinator and family',
      description: 'Full overview without calling around. See what happened, who was there and how it went.',
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Jodabook for the user (coming Q1 2027)',
      description:
        'A simple app with large buttons, images and sound. Supports cognitive adaptations for intellectual disability, autism and dementia.',
    },
    {
      title: 'Routines and checklists (coming Q4 2026)',
      description:
        'Create recurring or one-off checklists. Assistants tick off step by step. Everything is logged.',
    },
    {
      title: 'Care team model',
      description: 'Only people in the team see the user. Privacy and role-based access built in.',
    },
    {
      title: 'Event log (coming Q4 2026)',
      description: 'Record incidents, behaviour, medication and more.',
    },
    {
      title: 'KAI assistant',
      description: 'KAI helps you find your way around JodaCare and explains how the app works.',
    },
  ],
  referenceTitle: 'In use since 2016',
  referenceBody:
    'Horten municipality is a paying BPA customer and has used JodaCare from the start.',
  statusBadge: getStatusVisning('bpa', 'en').tekst,
  statusTitle: 'Join from the start',
  statusBody:
    'The new JodaCare launches in autumn 2026 with Boka, calendar, messages and a team around each user. New modules arrive quarter by quarter, and the municipality chooses which ones it wants.',
  priceNote:
    `Licence from ${formaterPrisEn(pakkeprisMnd())} per month for up to 10 service recipients, plus onboarding.`,
  priceLinkText: 'See all prices',
  statusCta: 'Contact us for a pilot place',
  relatedTitle: 'Other parts of JodaCare that strengthen personal assistance',
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
