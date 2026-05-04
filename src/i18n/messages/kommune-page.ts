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
  bottomCta: string;
  services: KommuneService[];
};

const servicesNo: KommuneService[] = [
  {
    title: 'Omsorgsbolig / Hub',
    description:
      'En skjerm i leiligheten kobler beboer, familie og ansatte i én sammenhengende flyt, slik at familien alltid er nær.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA, brukerstyrt personlig assistanse',
    description:
      'Samle omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    description:
      'Kontinuitet for barnet, med de samme rutinene og den samme tryggheten enten det er hjemme eller i avlastningen.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/avlastning',
  },
  {
    title: 'Barnevern og samvær',
    description:
      'JodaCare følger barnet gjennom hver overgang, med informasjonsbarrierer som beskytter hver enkelt rolle og full sporbarhet for kommunen.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, videobesøk',
    description:
      'Trygge videobesøk erstatter unødvendige fysiske besøk, slik at eldre kan bo hjemme lenger med familien nær.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
  {
    title: 'Implementeringsstøtte',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg, fra første oppsett til systemet sitter i ryggmargen.',
    badge: 'Inkludert',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const servicesEn: KommuneService[] = [
  {
    title: 'Care home / Hub',
    description:
      'A screen in the flat that connects resident, family and staff in one coherent flow. Family stays close.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/omsorgsbolig',
  },
  {
    title: 'User-controlled personal assistance (BPA)',
    description:
      'Bring the care team around the user with Jodabook, checklists and full overview for coordinator and family.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/bpa',
  },
  {
    title: 'Respite care',
    description:
      'Continuity for the child, with the same routines and the same sense of safety whether at home or in respite.',
    badge: 'Coming',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/avlastning',
  },
  {
    title: 'Child welfare and contact visits',
    description:
      'Contact visits documented safely with information barriers that protect everyone and full traceability.',
    badge: 'Coming',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit, video visits',
    description:
      'Replace unnecessary physical visits with secure video visits. People stay at home longer with family near.',
    badge: 'Coming',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
  {
    title: 'Implementation support',
    description:
      'A dedicated implementation lead guides your municipality step by step, from first setup until the system is second nature.',
    badge: 'Included',
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
    'ID-porten og Vipps',
    'GDPR · data i Europa',
    'Europol Innovation Award 2024',
  ],
  servicesTitle: 'Alle tjenester',
  servicesSubtitle: 'Klikk på en tjeneste for å lese mer.',
  readMore: 'Les mer',
  bottomTitle: 'Klar til å komme i gang?',
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
    'ID-porten and Vipps',
    'GDPR · data in Europe',
    'Europol Innovation Award 2024',
  ],
  servicesTitle: 'All services',
  servicesSubtitle: 'Click a service to read more.',
  readMore: 'Read more',
  bottomTitle: 'Ready to get started?',
  bottomBody: 'Get in touch for an informal conversation about how JodaCare can fit your municipality.',
  bottomCta: 'Contact us',
  services: servicesEn,
};

export function getKommuneContent(locale: Locale): KommuneContent {
  return locale === 'en' ? en : no;
}
