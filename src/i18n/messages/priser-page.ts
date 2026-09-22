import type { Locale } from '@/lib/i18n/types';
import {
  formaterPris,
  formaterPrisEn,
  perTjenestemottakerAar,
  aar1,
  aar2,
  priser,
  selskap,
} from '@/lib/fakta';

export type PriserCard = {
  name: string;
  price: string;
  /** Står etter beløpet: «per år», «én gang». */
  period: string;
  /** Linjen under beløpet. */
  unit: string;
  body?: string;
  includesLabel: string;
  includes: string[];
};

export type PriserTableRow = { label: string; year1: string; year2: string };

export type PriserFaqItem = { question: string; answer: string };

export type PriserContent = {
  heroTitle: string;
  heroSubtitle: string;

  cards: PriserCard[];

  exampleTitle: string;
  exampleColumns: { year1: string; year2: string };
  exampleRows: PriserTableRow[];
  exampleSumLabel: string;
  exampleSumYear1: string;
  exampleSumYear2: string;
  exampleNote: string;

  budgetTitle: string;
  budgetIntro: string;
  budgetQuote: string;
  budgetCopy: string;
  budgetCopied: string;

  modulesTitle: string;
  modulesBody: string;
  modules: string[];

  termsTitle: string;
  termsBody: string;

  familieTitle: string;
  familiePrice: string;
  familiePeriod: string;
  familieBody: string;
  familieCta: string;

  faqTitle: string;
  faq: PriserFaqItem[];

  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const no: PriserContent = {
  heroTitle: 'Pris for kommuner',
  heroSubtitle:
    'Én pris per år, uansett hvor mange ansatte og pårørende som er med. Kommunen kan inngå avtalen uten anbudskonkurranse.',

  cards: [
    {
      name: 'Lisens',
      price: formaterPris(aar2()),
      period: 'per år',
      unit: `for en pakke med inntil ${priser.pakkeStorrelse} tjenestemottakere. Tilsvarer ${formaterPris(perTjenestemottakerAar())} per tjenestemottaker per år.`,
      body: `Ubegrenset antall ansatte og pårørende rundt hver tjenestemottaker. Trenger kommunen plass til flere enn ${priser.pakkeStorrelse}, legges det til en pakke til.`,
      includesLabel: 'Lisensen dekker grunnmodulen',
      includes: [
        'Boka, den delte boken rundt hver tjenestemottaker',
        'Kalender',
        'Meldinger',
        'Rollebasert tilgang',
      ],
    },
    {
      name: 'Oppstart',
      price: formaterPris(priser.oppstart),
      period: 'én gang',
      unit: 'per kommune',
      includesLabel: 'Oppstart inkluderer',
      includes: [
        'Teknisk oppsett av kommune, tjenestested og første team',
        'Igangsettelseskurs 1 på Teams for ansatte',
        'Igangsettelseskurs 2 på Teams for ansatte og pårørende sammen',
        'Databehandleravtale, DPIA og sikkerhetsdokumentasjon',
        'Fast kontaktperson de første 90 dagene med oppfølgingsmøte',
      ],
    },
  ],

  exampleTitle: 'Hva koster det for én avlastningsbolig?',
  exampleColumns: { year1: 'År 1', year2: 'År 2 og videre' },
  exampleRows: [
    { label: 'Lisens, 1 pakke', year1: formaterPris(aar2()), year2: formaterPris(aar2()) },
    { label: 'Oppstart', year1: formaterPris(priser.oppstart), year2: '' },
  ],
  exampleSumLabel: 'Sum',
  exampleSumYear1: formaterPris(aar1()),
  exampleSumYear2: formaterPris(aar2()),
  exampleNote:
    'Alle priser eks. mva. Beløpet ligger godt under terskelverdien for direkte anskaffelse på kr 500 000, så kommunen kan inngå avtalen uten anbudskonkurranse. Kommunen kan starte når som helst i året og betaler lisens for resten av året.',

  budgetTitle: 'Til deg som skal legge JodaCare inn i budsjettet',
  budgetIntro: 'Kopier gjerne dette avsnittet rett inn i budsjettforslaget ditt.',
  budgetQuote: `JodaCare er en sikker kommunikasjonsløsning mellom ansatte og pårørende rundt hver tjenestemottaker, i bruk i norske kommuner siden ${selskap.etablert}. Kostnad første år: ${formaterPris(aar1())} eks. mva (lisens ${formaterPris(aar2())} og oppstart ${formaterPris(priser.oppstart)}). Kostnad påfølgende år: ${formaterPris(aar2())} eks. mva. Beløpet er under terskelverdien for direkte anskaffelse. Avtalen løper i ${priser.avtaleManeder} måneder med ${priser.oppsigelseManeder} måneders oppsigelse.`,
  budgetCopy: 'Kopier teksten',
  budgetCopied: 'Kopiert',

  modulesTitle: 'Moduler som kommer',
  modulesBody:
    'Nye JodaCare bygges modul for modul. Hver ny modul får sin egen pris når den er ferdig utviklet, og kommunen velger selv om den vil legge modulen til. Prisen på grunnmodulen endres ikke av at nye moduler kommer.',
  modules: [
    'Sjekklister og rutiner',
    'Hendelseslogg',
    'Hub for omsorgsbolig',
    'Jodabook',
    'Barnevern og samvær',
    'JodaVisit',
  ],

  termsTitle: 'Avtalevilkår',
  termsBody: `${priser.avtaleManeder} måneders avtale med automatisk fornyelse og ${priser.oppsigelseManeder} måneders skriftlig oppsigelse. Oppstart faktureres ved avtaleinngåelse. Lisensen faktureres kvartalsvis på forskudd med 14 dagers betalingsfrist. Databehandleravtale inngås før oppstart. JodaCare stiller med forslag, kommunen kan bruke egen mal.`,

  familieTitle: 'Pris for familier',
  familiePrice: formaterPris(priser.familieromMnd),
  familiePeriod: 'per måned',
  familieBody: `${priser.proveperiodeDager} dager gratis. Ingen binding. Betaling med Vipps.`,
  familieCta: 'Meld interesse',

  faqTitle: 'Spørsmål og svar',
  faq: [
    {
      question: 'Hvorfor oppgir dere pris per år?',
      answer: 'Fordi kommunen budsjetterer per år. Da er det tallet du trenger.',
    },
    {
      question: 'Vi har brukt opp årets budsjett. Kan vi starte likevel?',
      answer:
        'Ja. Dere betaler lisens for månedene som er igjen av året, og full årspris fra neste budsjettår. Oppstart betales ved avtaleinngåelse.',
    },
    {
      question: `Vi har bare fire barn i boligen. Må vi betale for ${priser.pakkeStorrelse}?`,
      answer:
        'Ja, en pakke er den minste enheten. Pakken følger boligen, så nye barn kan legges til uten ny avtale.',
    },
    {
      question: 'Hva skjer når nye JodaCare er klar?',
      answer:
        'Kunder som starter på dagens løsning flyttes over uten ekstra kostnad. Prisen er den samme.',
    },
    {
      question: 'Må vi ut på anbud?',
      answer:
        'Nei. Beløpet ligger under terskelverdien for direkte anskaffelse, så kommunen kan inngå avtalen direkte.',
    },
    {
      question: 'Hva er inkludert i oppstart?',
      answer:
        'Teknisk oppsett, to kurs på Teams, databehandleravtale, DPIA, sikkerhetsdokumentasjon og fast kontaktperson i 90 dager.',
    },
  ],

  ctaTitle: 'Vil du ha et avtaleforslag?',
  ctaBody:
    'Send en e-post, så får du et ferdig utfylt avtaleforslag og forslag til databehandleravtale innen to virkedager.',
  ctaButton: 'Ta kontakt',
};

const en: PriserContent = {
  heroTitle: 'Pricing for municipalities',
  heroSubtitle:
    'One price per year, however many staff and relatives take part. The municipality can enter the agreement without a tender process.',

  cards: [
    {
      name: 'Licence',
      price: formaterPrisEn(aar2()),
      period: 'per year',
      unit: `for a package of up to ${priser.pakkeStorrelse} service recipients. That is ${formaterPrisEn(perTjenestemottakerAar())} per service recipient per year.`,
      body: `An unlimited number of staff and relatives around each service recipient. If the municipality needs room for more than ${priser.pakkeStorrelse}, another package is added.`,
      includesLabel: 'The licence covers the core module',
      includes: [
        'Boka, the shared book around each service recipient',
        'Calendar',
        'Messages',
        'Role-based access',
      ],
    },
    {
      name: 'Onboarding',
      price: formaterPrisEn(priser.oppstart),
      period: 'one off',
      unit: 'per municipality',
      includesLabel: 'Onboarding includes',
      includes: [
        'Technical setup of municipality, service location and first team',
        'Launch course 1 on Teams for staff',
        'Launch course 2 on Teams for staff and relatives together',
        'Data processing agreement, DPIA and security documentation',
        'A named contact for the first 90 days with a follow-up meeting',
      ],
    },
  ],

  exampleTitle: 'What does one respite home cost?',
  exampleColumns: { year1: 'Year 1', year2: 'Year 2 onwards' },
  exampleRows: [
    { label: 'Licence, 1 package', year1: formaterPrisEn(aar2()), year2: formaterPrisEn(aar2()) },
    { label: 'Onboarding', year1: formaterPrisEn(priser.oppstart), year2: '' },
  ],
  exampleSumLabel: 'Total',
  exampleSumYear1: formaterPrisEn(aar1()),
  exampleSumYear2: formaterPrisEn(aar2()),
  exampleNote:
    'All prices excluding VAT. The amount is well below the NOK 500,000 threshold for direct procurement, so the municipality can enter the agreement without a tender process. The municipality can start at any point in the year and pays the licence for the remainder of that year.',

  budgetTitle: 'For you who will put JodaCare into the budget',
  budgetIntro: 'Feel free to copy this paragraph straight into your budget proposal.',
  budgetQuote: `JodaCare is a secure communication solution between staff and relatives around each service recipient, in use in Norwegian municipalities since ${selskap.etablert}. Cost in the first year: ${formaterPrisEn(aar1())} excluding VAT (licence ${formaterPrisEn(aar2())} and onboarding ${formaterPrisEn(priser.oppstart)}). Cost in following years: ${formaterPrisEn(aar2())} excluding VAT. The amount is below the threshold for direct procurement. The agreement runs for ${priser.avtaleManeder} months with ${priser.oppsigelseManeder} months notice.`,
  budgetCopy: 'Copy the text',
  budgetCopied: 'Copied',

  modulesTitle: 'Modules on the way',
  modulesBody:
    'The new JodaCare is built module by module. Each new module gets its own price once it is finished, and the municipality decides whether to add it. The price of the core module does not change as new modules arrive.',
  modules: [
    'Checklists and routines',
    'Incident log',
    'Hub for sheltered housing',
    'Jodabook',
    'Child welfare and contact sessions',
    'JodaVisit',
  ],

  termsTitle: 'Agreement terms',
  termsBody: `A ${priser.avtaleManeder} month agreement with automatic renewal and ${priser.oppsigelseManeder} months written notice. Onboarding is invoiced when the agreement is signed. The licence is invoiced quarterly in advance with 14 days payment terms. A data processing agreement is signed before onboarding. JodaCare provides a proposal, and the municipality may use its own template.`,

  familieTitle: 'Pricing for families',
  familiePrice: formaterPrisEn(priser.familieromMnd),
  familiePeriod: 'per month',
  familieBody: `${priser.proveperiodeDager} days free. No commitment. Payment by Vipps.`,
  familieCta: 'Register your interest',

  faqTitle: 'Questions and answers',
  faq: [
    {
      question: 'Why do you state the price per year?',
      answer: 'Because the municipality budgets per year. That is the figure you need.',
    },
    {
      question: 'We have used up this year’s budget. Can we still start?',
      answer:
        'Yes. You pay the licence for the months left in the year, and the full annual price from the next budget year. Onboarding is paid when the agreement is signed.',
    },
    {
      question: `We only have four children in the home. Do we have to pay for ${priser.pakkeStorrelse}?`,
      answer:
        'Yes, a package is the smallest unit. The package follows the home, so new children can be added without a new agreement.',
    },
    {
      question: 'What happens when the new JodaCare is ready?',
      answer:
        'Customers who start on the current solution are moved over at no extra cost. The price stays the same.',
    },
    {
      question: 'Do we have to run a tender?',
      answer:
        'No. The amount is below the threshold for direct procurement, so the municipality can enter the agreement directly.',
    },
    {
      question: 'What is included in onboarding?',
      answer:
        'Technical setup, two courses on Teams, a data processing agreement, DPIA, security documentation and a named contact for 90 days.',
    },
  ],

  ctaTitle: 'Would you like a draft agreement?',
  ctaBody:
    'Send an email and you will get a completed draft agreement and a proposed data processing agreement within two working days.',
  ctaButton: 'Get in touch',
};

export function getPriserContent(locale: Locale): PriserContent {
  return locale === 'en' ? en : no;
}
