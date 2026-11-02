import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type KommuneService = {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  href: string;
};

/** En bit av en setning. Biter med href blir lenker. */
export type KommuneTekstbit = { text: string; href?: string };

export type KommuneContent = {
  heroImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  servicesIntro: KommuneTekstbit[];
  primaryCta: string;
  trustItems: string[];
  servicesTitle: string;
  servicesSubtitle: string;
  readMore: string;
  bottomTitle: string;
  bottomBody: string;
  priceNote: string;
  priceLinkText: string;
  bottomCta: string;
  services: KommuneService[];
};

const servicesNo: KommuneService[] = [
  {
    title: 'Hub',
    description:
      'En skjerm i leiligheten skal koble beboer, familie og ansatte i én sammenhengende flyt, slik at familien alltid er nær.',
    badge: getStatusVisning('omsorgsbolig-hub', 'no').tekst,
    badgeColor: getStatusVisning('omsorgsbolig-hub', 'no').farge,
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA, brukerstyrt personlig assistanse',
    description:
      `Samle omsorgsteamet rundt brukeren i Boka, med beskjeder og team. Sjekklister: ${modulMerke('sjekklister-og-rutiner', 'no').tekst}. Jodabook: ${modulMerke('jodabook', 'no').tekst}.`,
    badge: modulMerke('bpa', 'no').tekst,
    badgeColor: modulMerke('bpa', 'no').farge,
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    description:
      'Kontinuitet for barnet, med de samme rutinene og den samme tryggheten enten det er hjemme eller i avlastningen.',
    badge: getStatusVisning('avlastning', 'no').tekst,
    badgeColor: getStatusVisning('avlastning', 'no').farge,
    href: '/avlastning',
  },
  {
    title: 'Barnevern og samvær',
    description:
      'JodaCare følger barnet gjennom hver overgang, med informasjonsbarrierer som beskytter hver enkelt rolle og full sporbarhet for kommunen.',
    badge: getStatusVisning('barnevern', 'no').tekst,
    badgeColor: getStatusVisning('barnevern', 'no').farge,
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, videobesøk',
    description:
      'Trygge videobesøk erstatter unødvendige fysiske besøk, slik at eldre kan bo hjemme lenger med familien nær.',
    badge: getStatusVisning('jodavisit', 'no').tekst,
    badgeColor: getStatusVisning('jodavisit', 'no').farge,
    href: '/jodavisit',
  },
  {
    title: 'Implementeringsstøtte',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg, fra første oppsett til systemet sitter i ryggmargen.',
    badge: `Oppstart ${formaterPris(priser.oppstart)}`,
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const servicesEn: KommuneService[] = [
  {
    title: 'Hub',
    description:
      'A screen in the flat will connect resident, family and staff in one coherent flow, so the family is always close.',
    badge: getStatusVisning('omsorgsbolig-hub', 'en').tekst,
    badgeColor: getStatusVisning('omsorgsbolig-hub', 'en').farge,
    href: '/omsorgsbolig',
  },
  {
    title: 'User-controlled personal assistance (BPA)',
    description:
      `Bring the care team together around the user in Boka, with notices and a team. Checklists: ${modulMerke('sjekklister-og-rutiner', 'en').tekst}. Jodabook: ${modulMerke('jodabook', 'en').tekst}.`,
    badge: modulMerke('bpa', 'en').tekst,
    badgeColor: modulMerke('bpa', 'en').farge,
    href: '/bpa',
  },
  {
    title: 'Respite care',
    description:
      'Continuity for the child, with the same routines and the same sense of safety whether at home or in respite.',
    badge: getStatusVisning('avlastning', 'en').tekst,
    badgeColor: getStatusVisning('avlastning', 'en').farge,
    href: '/avlastning',
  },
  {
    title: 'Child welfare and contact visits',
    description:
      'Contact visits documented safely with information barriers that protect everyone and full traceability.',
    badge: getStatusVisning('barnevern', 'en').tekst,
    badgeColor: getStatusVisning('barnevern', 'en').farge,
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, video visits',
    description:
      'Replace unnecessary physical visits with secure video visits. People stay at home longer with family near.',
    badge: getStatusVisning('jodavisit', 'en').tekst,
    badgeColor: getStatusVisning('jodavisit', 'en').farge,
    href: '/jodavisit',
  },
  {
    title: 'Implementation support',
    description:
      'A dedicated implementation lead guides your municipality step by step, from first setup until the system is second nature.',
    badge: `Onboarding ${formaterPrisEn(priser.oppstart)}`,
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const no: KommuneContent = {
  heroImageAlt: 'Ung mann står i en åker under blå himmel',
  heroTitle: 'JodaCare for kommuner',
  heroSubtitle:
    'JodaCare samler tjenestene rundt tjenestemottakeren i én plattform. Velg tjenesten som passer for din kommune.',
  servicesIntro: [
    { text: 'Omsorgsboliger', href: '/omsorgsbolig' },
    { text: ', ' },
    { text: 'BPA', href: '/bpa' },
    { text: ', ' },
    { text: 'barnevern', href: '/barnevern' },
    { text: ', ' },
    { text: 'avlastning', href: '/avlastning' },
    { text: ' og ' },
    { text: 'hjemmesykepleie', href: '/jodavisit' },
    { text: ' møtes i én plattform med koordinert omsorg.' },
  ],
  primaryCta: 'Kontakt oss',
  trustItems: [
    'Norske kommuner siden 2016',
    'Innlogging med ID-porten eller jobbkonto',
    'GDPR · data i Europa',
  ],
  servicesTitle: 'Alle tjenester',
  servicesSubtitle: 'Klikk på en tjeneste for å lese mer.',
  readMore: 'Les mer',
  bottomTitle: 'Klar til å komme i gang?',
  priceNote:
    `${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} tjenestemottakere, pluss oppstart ${formaterPris(priser.oppstart)} én gang.`,
  priceLinkText: 'Se alle priser',
  bottomBody:
    'Ta kontakt for en uforpliktende samtale om hvordan JodaCare kan passe i din kommune.',
  bottomCta: 'Kontakt oss',
  services: servicesNo,
};

const en: KommuneContent = {
  heroImageAlt: 'Young man standing in a field under a blue sky',
  heroTitle: 'JodaCare for municipalities',
  heroSubtitle:
    'JodaCare brings the services around the service recipient together in one platform. Choose the service that fits your municipality.',
  servicesIntro: [
    { text: 'Residential care', href: '/omsorgsbolig' },
    { text: ', ' },
    { text: 'personal assistance', href: '/bpa' },
    { text: ', ' },
    { text: 'child welfare', href: '/barnevern' },
    { text: ', ' },
    { text: 'respite', href: '/avlastning' },
    { text: ' and ' },
    { text: 'home nursing', href: '/jodavisit' },
    { text: ' come together in one platform with coordinated care.' },
  ],
  primaryCta: 'Contact us',
  trustItems: [
    'Norwegian municipalities since 2016',
    'Sign-in with ID-porten or work account',
    'GDPR · data in Europe',
  ],
  servicesTitle: 'All services',
  servicesSubtitle: 'Click a service to read more.',
  readMore: 'Read more',
  bottomTitle: 'Ready to get started?',
  priceNote:
    `${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} service recipients, plus onboarding ${formaterPrisEn(priser.oppstart)} one off.`,
  priceLinkText: 'See all prices',
  bottomBody: 'Get in touch for an informal conversation about how JodaCare can fit your municipality.',
  bottomCta: 'Contact us',
  services: servicesEn,
};

export function getKommuneContent(locale: Locale): KommuneContent {
  return locale === 'en' ? en : no;
}
