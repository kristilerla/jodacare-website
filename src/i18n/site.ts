import type { Locale } from '@/lib/i18n/types';

export type SiteCopy = {
  skipToContent: string;
  nav: {
    mainNav: string;
    kommune: string;
    familier: string;
    om: string;
    sikkerhet: string;
    bruksvilkar: string;
    kontakt: string;
    login: string;
    getStarted: string;
    openMenu: string;
    closeMenu: string;
    mobileMenu: string;
    kommuneSection: string;
    readMore: string;
  };
  kommuneLinks: { name: string; href: string }[];
  footer: {
    heading: string;
    tagline: string;
    product: string;
    company: string;
    resources: string;
    rights: string;
    items: {
      produkt: { name: string; href: string }[];
      selskap: { name: string; href: string }[];
      ressurser: { name: string; href: string }[];
    };
  };
  banner: {
    title: string;
    body: string;
    cta: string;
    close: string;
    imageAlt: string;
  };
  lang: {
    switchToNorwegian: string;
    switchToEnglish: string;
    norwegian: string;
    english: string;
  };
};

export const site: Record<Locale, SiteCopy> = {
  no: {
    skipToContent: 'Hopp til hovedinnhold',
    nav: {
      mainNav: 'Hovednavigasjon',
      kommune: 'For kommuner',
      familier: 'For familier',
      om: 'Om oss',
      sikkerhet: 'Sikkerhet',
      bruksvilkar: 'Bruksvilkår',
      kontakt: 'Kontakt',
      login: 'Logg inn',
      getStarted: 'Kom i gang',
      openMenu: 'Åpne hovedmeny',
      closeMenu: 'Lukk meny',
      mobileMenu: 'Mobilmeny',
      kommuneSection: 'For kommuner',
      readMore: 'Les mer',
    },
    kommuneLinks: [
      { name: 'Omsorgsbolig / Hub', href: '/omsorgsbolig' },
      { name: 'BPA', href: '/bpa' },
      { name: 'Avlastning', href: '/avlastning' },
      { name: 'Barnevern', href: '/barnevern' },
      { name: 'JodaVisit', href: '/jodavisit' },
      { name: 'Implementering', href: '/implementering' },
    ],
    footer: {
      heading: 'Bunntekst',
      tagline:
        'En sikker plattform for kommunikasjon rundt sårbare personer. Trygghet og verdighet i hverdagen.',
      product: 'Produkt',
      company: 'Selskap',
      resources: 'Ressurser',
      rights:
        'Alle rettigheter reservert. JodaCare er et registrert varemerke.',
      items: {
        produkt: [
          { name: 'For familier', href: '/familie' },
          { name: 'Omsorgsbolig / Hub', href: '/omsorgsbolig' },
          { name: 'BPA', href: '/bpa' },
          { name: 'Avlastning', href: '/avlastning' },
          { name: 'Barnevern', href: '/barnevern' },
          { name: 'JodaVisit', href: '/jodavisit' },
          { name: 'Implementering', href: '/implementering' },
          { name: 'Sikkerhet', href: '/sikkerhet' },
          { name: 'Teknologi', href: '/teknologi' },
        ],
        selskap: [
          { name: 'Om oss', href: '/om' },
          { name: 'Personvernerklæring', href: '/JodaCare/personvernerklaering' },
          { name: 'Bruksvilkår', href: '/JodaCare/bruksvilkar' },
          { name: 'Kontakt', href: '/kontakt' },
          { name: 'JodaCare AS', href: 'https://jodacare.no' },
          { name: 'Company brief', href: '/brief' },
        ],
        ressurser: [
          {
            name: 'Hjelpesenter',
            href: 'https://JodaCare.atlassian.net/servicedesk/customer/portals',
          },
          { name: 'Logg inn', href: 'https://app.jodacare.no' },
        ],
      },
    },
    banner: {
      title: 'JodaCare fra 2016 fungerer fortsatt!',
      body:
        'Den eksisterende appen som ble utviklet i 2016 og oppgradert i 2018 er fortsatt i drift og fungerer som normalt mens vi bygger nye JodaCare 2.0.',
      cta: 'Gå til eksisterende app →',
      close: 'Lukk melding',
      imageAlt: 'JodaCare app',
    },
    lang: {
      switchToNorwegian: 'Bytt til norsk',
      switchToEnglish: 'Switch to English',
      norwegian: 'Norsk',
      english: 'English',
    },
  },
  en: {
    skipToContent: 'Skip to main content',
    nav: {
      mainNav: 'Main navigation',
      kommune: 'For municipalities',
      familier: 'For families',
      om: 'About',
      sikkerhet: 'Security',
      bruksvilkar: 'Terms',
      kontakt: 'Contact',
      login: 'Log in',
      getStarted: 'Get started',
      openMenu: 'Open main menu',
      closeMenu: 'Close menu',
      mobileMenu: 'Mobile menu',
      kommuneSection: 'For municipalities',
      readMore: 'Read more',
    },
    kommuneLinks: [
      { name: 'Care home / Hub', href: '/omsorgsbolig' },
      { name: 'PA (BPA)', href: '/bpa' },
      { name: 'Respite care', href: '/avlastning' },
      { name: 'Child welfare', href: '/barnevern' },
      { name: 'JodaVisit', href: '/jodavisit' },
      { name: 'Implementation', href: '/implementering' },
    ],
    footer: {
      heading: 'Footer',
      tagline:
        'A secure platform for communication around vulnerable people. Dignity and peace of mind in everyday life.',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      rights: 'All rights reserved. JodaCare is a registered trademark.',
      items: {
        produkt: [
          { name: 'For families', href: '/familie' },
          { name: 'Care home / Hub', href: '/omsorgsbolig' },
          { name: 'PA (BPA)', href: '/bpa' },
          { name: 'Respite care', href: '/avlastning' },
          { name: 'Child welfare', href: '/barnevern' },
          { name: 'JodaVisit', href: '/jodavisit' },
          { name: 'Implementation', href: '/implementering' },
          { name: 'Security', href: '/sikkerhet' },
          { name: 'Technology', href: '/teknologi' },
        ],
        selskap: [
          { name: 'About', href: '/om' },
          { name: 'Privacy policy', href: '/JodaCare/personvernerklaering' },
          { name: 'Terms', href: '/JodaCare/bruksvilkar' },
          { name: 'Contact', href: '/kontakt' },
          { name: 'JodaCare AS', href: 'https://jodacare.no' },
          { name: 'Company brief', href: '/brief' },
        ],
        ressurser: [
          {
            name: 'Help centre',
            href: 'https://JodaCare.atlassian.net/servicedesk/customer/portals',
          },
          { name: 'Log in', href: 'https://app.jodacare.no' },
        ],
      },
    },
    banner: {
      title: 'The JodaCare app from 2016 is still running!',
      body:
        'The original app, first released in 2016 and upgraded in 2018, remains in full operation while we build the new JodaCare 2.0.',
      cta: 'Open the existing app →',
      close: 'Dismiss message',
      imageAlt: 'JodaCare app',
    },
    lang: {
      switchToNorwegian: 'Bytt til norsk',
      switchToEnglish: 'Switch to English',
      norwegian: 'Norsk',
      english: 'English',
    },
  },
};

export function getSite(locale: Locale): SiteCopy {
  return site[locale];
}
