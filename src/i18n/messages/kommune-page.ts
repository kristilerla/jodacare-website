import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type KommuneService = {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  href: string;
};

export type KommuneContent = {
  heroImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
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
    title: 'Omsorgsbolig / Hub',
    description:
      'En skjerm i leiligheten kobler beboer, familie og ansatte i én sammenhengende flyt, slik at familien alltid er nær.',
    badge: getStatusVisning('omsorgsbolig-hub', 'no').tekst,
    badgeColor: 'bg-primary/10 text-primary',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA, brukerstyrt personlig assistanse',
    description:
      'Samle omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
    badge: getStatusVisning('bpa', 'no').tekst,
    badgeColor: 'bg-success/10 text-success',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    description:
      'Kontinuitet for barnet, med de samme rutinene og den samme tryggheten enten det er hjemme eller i avlastningen.',
    badge: getStatusVisning('bpa', 'no').tekst,
    badgeColor: 'bg-success/10 text-success',
    href: '/avlastning',
  },
  {
    title: 'Barnevern og samvær',
    description:
      'JodaCare følger barnet gjennom hver overgang, med informasjonsbarrierer som beskytter hver enkelt rolle og full sporbarhet for kommunen.',
    badge: getStatusVisning('barnevern', 'no').tekst,
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, videobesøk',
    description:
      'Trygge videobesøk erstatter unødvendige fysiske besøk, slik at eldre kan bo hjemme lenger med familien nær.',
    badge: getStatusVisning('familierom', 'no').tekst,
    badgeColor: 'bg-secondary-light text-text-muted',
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
    title: 'Care home / Hub',
    description:
      'A screen in the flat that connects resident, family and staff in one coherent flow. Family stays close.',
    badge: getStatusVisning('omsorgsbolig-hub', 'no').tekst,
    badgeColor: 'bg-primary/10 text-primary',
    href: '/omsorgsbolig',
  },
  {
    title: 'User-controlled personal assistance (BPA)',
    description:
      'Bring the care team around the user with Jodabook, checklists and full overview for coordinator and family.',
    badge: getStatusVisning('bpa', 'en').tekst,
    badgeColor: 'bg-success/10 text-success',
    href: '/bpa',
  },
  {
    title: 'Respite care',
    description:
      'Continuity for the child, with the same routines and the same sense of safety whether at home or in respite.',
    badge: getStatusVisning('bpa', 'en').tekst,
    badgeColor: 'bg-success/10 text-success',
    href: '/avlastning',
  },
  {
    title: 'Child welfare and contact visits',
    description:
      'Contact visits documented safely with information barriers that protect everyone and full traceability.',
    badge: getStatusVisning('barnevern', 'en').tekst,
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, video visits',
    description:
      'Replace unnecessary physical visits with secure video visits. People stay at home longer with family near.',
    badge: getStatusVisning('familierom', 'en').tekst,
    badgeColor: 'bg-secondary-light text-text-muted',
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
    'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie møtes i én plattform med koordinert omsorg. Velg tjenesten som passer for din kommune.',
  primaryCta: 'Kontakt oss',
  trustItems: [
    'Norske kommuner siden 2016',
    'Innlogging med ID-porten',
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
    'Residential care, personal assistance, child welfare, respite and home nursing in one platform with coordinated care. Choose the service that fits your municipality.',
  primaryCta: 'Contact us',
  trustItems: [
    'Norwegian municipalities since 2016',
    'Sign-in with ID-porten',
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
