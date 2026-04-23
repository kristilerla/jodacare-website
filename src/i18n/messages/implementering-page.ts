import type { Locale } from '@/lib/i18n/types';

export type ImplementeringRelated = { title: string; description: string; href: string };

export type ImplementeringContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  practiceTitle: string;
  practiceP1: string;
  practiceP2: string;
  includesTitle: string;
  includes: string[];
  bannerTitle: string;
  bannerBody: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  relatedTitle: string;
  readMore: string;
  related: ImplementeringRelated[];
};

const no: ImplementeringContent = {
  heroTitle: 'Du slipper å starte alene',
  heroSubtitle:
    'Kommuner er vant til at nye IT-systemer rulles ut og ikke brukes. Vi vet det. Derfor tilbyr JodaCare aktiv implementeringsstøtte til alle kommunale kunder — med en dedikert Implementeringsansvarlig som følger prosessen fra første dag.',
  heroBadge: 'Implementeringsstøtte',
  primaryCta: 'Kontakt oss om implementering',
  practiceTitle: 'Slik ser det ut i praksis',
  practiceP1:
    'Når en kommune starter med JodaCare, får de en navngitt kontaktperson fra oss. Ikke en helpdesk-kø. En person som kjenner kommunen, kjenner plattformen og vet hva som skal til for at ansatte og pårørende faktisk tar det i bruk.',
  practiceP2:
    'De første tre månedene følger vi prosessen tett: teknisk oppsett, opplæring av ansatte, onboarding av pårørende og en felles gjennomgang etter 90 dager der vi ser på hva som fungerer og hva som kan justeres.',
  includesTitle: 'Dette dekker implementeringsstøtten:',
  includes: [
    'Teknisk oppsett og konfigurasjon',
    'Opplæring av ansatte og superbrukere',
    'Støtte til onboarding av pårørende',
    'Databehandleravtale, DPIA og sikkerhetsdokumentasjon',
    '90-dagers oppfølgingsmøte',
  ],
  bannerTitle:
    'Alle kommunale kunder får dedikert implementeringsstøtte de første tre månedene.',
  bannerBody:
    'Pris avhenger av omfang og antall avdelinger. Ta kontakt for et tilbud tilpasset din kommune.',
  ctaTitle: 'Klar til å starte?',
  ctaSubtitle: 'Ta kontakt for en uforpliktende samtale om implementering i din kommune.',
  ctaPrimary: 'Kontakt oss om implementering',
  relatedTitle: 'Henger godt sammen med',
  readMore: 'Les mer',
  related: [
    {
      title: 'Omsorgsbolig og Hub',
      description: 'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten.',
      href: '/omsorgsbolig',
    },
    {
      title: 'BPA — brukerstyrt personlig assistanse',
      description: 'Verktøy for brukerstyrt personlig assistanse i kommunen.',
      href: '/bpa',
    },
    {
      title: 'Familierom for pårørende',
      description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
      href: '/familie',
    },
  ],
};

const en: ImplementeringContent = {
  heroTitle: 'You do not have to start alone',
  heroSubtitle:
    'Municipalities are used to new IT systems being rolled out — and then not used. We know that. That is why JodaCare offers hands-on implementation support for every municipal customer, with a dedicated implementation lead from day one.',
  heroBadge: 'Implementation support',
  primaryCta: 'Contact us about implementation',
  practiceTitle: 'What it looks like in practice',
  practiceP1:
    'When a municipality starts with JodaCare, they get a named contact from our team — not a faceless helpdesk queue. Someone who knows the municipality, knows the platform and knows what it takes for staff and relatives to actually adopt it.',
  practiceP2:
    'For the first three months we stay close: technical setup, staff training, onboarding relatives and a joint review after 90 days to see what works and what should be adjusted.',
  includesTitle: 'Implementation support includes:',
  includes: [
    'Technical setup and configuration',
    'Training for staff and super users',
    'Support for onboarding relatives',
    'Data processing agreement, DPIA and security documentation',
    'A 90-day follow-up meeting',
  ],
  bannerTitle: 'Every municipal customer receives dedicated implementation support for the first three months.',
  bannerBody: 'Pricing depends on scope and number of units. Contact us for a tailored quote.',
  ctaTitle: 'Ready to start?',
  ctaSubtitle: 'Get in touch for an informal conversation about implementation in your municipality.',
  ctaPrimary: 'Contact us about implementation',
  relatedTitle: 'Goes well together with',
  readMore: 'Read more',
  related: [
    {
      title: 'Care home and Hub',
      description: 'JodaCare Hub connects resident, family and staff through a screen in the flat.',
      href: '/omsorgsbolig',
    },
    {
      title: 'User-controlled personal assistance (BPA)',
      description: 'Tools for user-controlled personal assistance in the municipality.',
      href: '/bpa',
    },
    {
      title: 'Family room for relatives',
      description: 'Give the family one shared place for the everyday life of the person they love.',
      href: '/familie',
    },
  ],
};

export function getImplementeringContent(locale: Locale): ImplementeringContent {
  return locale === 'en' ? en : no;
}
