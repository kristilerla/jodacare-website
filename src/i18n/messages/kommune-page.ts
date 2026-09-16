import type { Locale } from '@/lib/i18n/types';

export type KommuneService = {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  href: string;
};

export type KommuneContent = {
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
    badge: 'Pilot 2027',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA, brukerstyrt personlig assistanse',
    description:
      'Samle omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
    badge: 'Lanseres høst 2026',
    badgeColor: 'bg-success/10 text-success',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    description:
      'Kontinuitet for barnet, med de samme rutinene og den samme tryggheten enten det er hjemme eller i avlastningen.',
    badge: 'Lanseres høst 2026',
    badgeColor: 'bg-success/10 text-success',
    href: '/avlastning',
  },
  {
    title: 'Barnevern og samvær',
    description:
      'JodaCare følger barnet gjennom hver overgang, med informasjonsbarrierer som beskytter hver enkelt rolle og full sporbarhet for kommunen.',
    badge: 'Kommer Q2 2027',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, videobesøk',
    description:
      'Trygge videobesøk erstatter unødvendige fysiske besøk, slik at eldre kan bo hjemme lenger med familien nær.',
    badge: 'Kommer 2027',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
  {
    title: 'Implementeringsstøtte',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg, fra første oppsett til systemet sitter i ryggmargen.',
    badge: 'Oppstart kr 28 000',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const servicesEn: KommuneService[] = [
  {
    title: 'Care home / Hub',
    description:
      'A screen in the flat that connects resident, family and staff in one coherent flow. Family stays close.',
    badge: 'Pilot 2027',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/omsorgsbolig',
  },
  {
    title: 'User-controlled personal assistance (BPA)',
    description:
      'Bring the care team around the user with Jodabook, checklists and full overview for coordinator and family.',
    badge: 'Launching autumn 2026',
    badgeColor: 'bg-success/10 text-success',
    href: '/bpa',
  },
  {
    title: 'Respite care',
    description:
      'Continuity for the child, with the same routines and the same sense of safety whether at home or in respite.',
    badge: 'Launching autumn 2026',
    badgeColor: 'bg-success/10 text-success',
    href: '/avlastning',
  },
  {
    title: 'Child welfare and contact visits',
    description:
      'Contact visits documented safely with information barriers that protect everyone and full traceability.',
    badge: 'Coming Q2 2027',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, video visits',
    description:
      'Replace unnecessary physical visits with secure video visits. People stay at home longer with family near.',
    badge: 'Coming 2027',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
  {
    title: 'Implementation support',
    description:
      'A dedicated implementation lead guides your municipality step by step, from first setup until the system is second nature.',
    badge: 'Onboarding NOK 28,000',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const no: KommuneContent = {
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
    'Lisens kr 2 990 per måned for inntil 10 tjenestemottakere, pluss oppstart kr 28 000 per kommune.',
  priceLinkText: 'Se alle priser',
  bottomBody:
    'Ta kontakt for en uforpliktende samtale om hvordan JodaCare kan passe i din kommune.',
  bottomCta: 'Kontakt oss',
  services: servicesNo,
};

const en: KommuneContent = {
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
    'Licence NOK 2,990 per month for up to 10 service recipients, plus onboarding NOK 28,000 per municipality.',
  priceLinkText: 'See all prices',
  bottomBody: 'Get in touch for an informal conversation about how JodaCare can fit your municipality.',
  bottomCta: 'Contact us',
  services: servicesEn,
};

export function getKommuneContent(locale: Locale): KommuneContent {
  return locale === 'en' ? en : no;
}
