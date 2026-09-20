import type { Locale } from '@/lib/i18n/types';
import { formaterPris, formaterPrisEn, pakkeprisMnd, aar1, aar2, priser } from '@/lib/fakta';

export type PriserCard = {
  name: string;
  /** Statuslinje øverst i kortet, for eksempel når modulen lanseres. */
  status?: string;
  price: string;
  period: string;
  unit: string;
  body: string;
  includesLabel: string;
  includes: string[];
  footnote?: string;
};

export type PriserTableRow = { label: string; year1: string; year2: string };

export type PriserFaqItem = { question: string; answer: string };

export type PriserContent = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;

  kommuneTitle: string;
  cards: PriserCard[];

  exampleTitle: string;
  exampleColumns: { year1: string; year2: string };
  exampleRows: PriserTableRow[];
  exampleSumLabel: string;
  exampleSumYear1: string;
  exampleSumYear2: string;
  exampleNote: string;

  modulesTitle: string;
  modulesP1: string;
  modulesP2: string;
  modules: string[];
  modulesP3: string;

  faqTitle: string;
  faq: PriserFaqItem[];
  faqCta: string;
};

const no: PriserContent = {
  heroBadge: 'For kommuner',
  heroTitle: 'Priser',
  heroSubtitle: 'Én pris for lisens. Én pris for oppstart. Ingen skjulte tillegg.',

  kommuneTitle: 'For kommuner',
  cards: [
    {
      name: 'Lisens',
      status: 'Lanseres høst 2026.',
      price: formaterPris(pakkeprisMnd()),
      period: 'per måned',
      unit: `per pakke à ${priser.pakkeStorrelse} tjenestemottakere`,
      body: `Én pakke dekker inntil ${priser.pakkeStorrelse} tjenestemottakere. Rundt hver av dem kan kommunen legge til så mange ansatte og pårørende som trengs, uten ekstra kostnad. Trenger dere plass til flere enn ${priser.pakkeStorrelse}, legger dere til en pakke til.`,
      includesLabel: 'Lisensen inkluderer:',
      includes: [
        'Boka: felles feed for hver tjenestemottaker',
        'Kalender med opphold, avtaler og aktiviteter',
        'Meldinger mellom ansatte og pårørende',
        'Rollebasert tilgang: bare teamet rundt en tjenestemottaker ser innholdet',
        'Web og app for iOS og Android',
        'Support på e-post og telefon på hverdager',
      ],
      footnote: `Alle priser er oppgitt eks. mva. Avtalen løper i ${priser.avtaleManeder} måneder om gangen.`,
    },
    {
      name: 'Oppstart',
      price: formaterPris(priser.oppstart),
      period: '',
      unit: 'engangsbeløp per kommune',
      body: 'Oppstart er der de fleste digitale verktøy stopper opp. Derfor er det en egen tjeneste med en egen pris, og den inkluderer:',
      includesLabel: 'Oppstart inkluderer:',
      includes: [
        'Teknisk oppsett av kommunen, tjenestestedet og første team',
        'Igangsettelseskurs 1 på Teams for ansatte',
        'Igangsettelseskurs 2 på Teams for ansatte og pårørende sammen',
        'Databehandleravtale, DPIA og sikkerhetsdokumentasjon',
        'Fast kontaktperson de første 90 dagene, med oppfølgingsmøte til slutt',
      ],
    },
  ],

  exampleTitle: 'Hva koster det for én avlastningsbolig?',
  exampleColumns: { year1: 'År 1', year2: 'År 2 og videre' },
  exampleRows: [
    { label: `Lisens, 1 pakke à ${priser.pakkeStorrelse}`, year1: formaterPris(aar2()), year2: formaterPris(aar2()) },
    { label: 'Oppstart', year1: formaterPris(priser.oppstart), year2: formaterPris(0) },
  ],
  exampleSumLabel: 'Sum',
  exampleSumYear1: formaterPris(aar1()),
  exampleSumYear2: formaterPris(aar2()),
  exampleNote:
    'Beløpet ligger godt under terskelverdien for direkte anskaffelse. Kommunen kan inngå avtalen uten anbudskonkurranse.',

  modulesTitle: 'Nye JodaCare bygges modul for modul',
  modulesP1:
    'JodaCare bygges nå på nytt fra grunnen, med sikkerhet og tilgangsstyring som første prioritet. Lisensen over dekker grunnmodulen: Boka, kalender, meldinger og rollebasert tilgang. Grunnmodulen lanseres høsten 2026, og det er den nye kunder starter med.',
  modulesP2:
    'Flere moduler er under utvikling. Hver av dem får sin egen pris når den er ferdig, og kommunen velger selv om den vil legge modulen til:',
  modules: [
    'Sjekklister og rutiner (Q4 2026)',
    'Hendelseslogg med delingskontroll (Q4 2026)',
    'Hub for omsorgsbolig og servicebolig (pilot 2027)',
    'Jodabook for tjenestemottakere med kognitive utfordringer (Q1 2027)',
    'Barnevern og samvær (Q2 2027)',
    'JodaVisit for hjemmesykepleie (2027)',
  ],
  modulesP3:
    'Kunder med løpende avtale får beskjed i god tid før en modul lanseres. Prisen på grunnmodulen endres ikke av at nye moduler kommer til. Endres tidsplanen, oppdaterer vi den her.',


  faqTitle: 'Vanlige spørsmål om pris',
  faq: [
    {
      question: `Hva om vi har færre enn ${priser.pakkeStorrelse} tjenestemottakere?`,
      answer:
        'Pakken er den samme. De fleste avlastningsboliger og bofellesskap vokser inn i den i løpet av det første året.',
    },
    {
      question: 'Betaler vi for ansatte og pårørende?',
      answer: 'Nei. Lisensen følger tjenestemottakeren. Alle rundt hen er inkludert.',
    },
    {
      question: 'Hvordan faktureres det?',
      answer:
        'Oppstart faktureres ved avtaleinngåelse. Lisensen faktureres kvartalsvis på forskudd.',
    },
    {
      question: 'Trenger vi en databehandleravtale?',
      answer:
        'Ja. Den inngås før oppstart, og vi stiller med forslag. Kommunen kan også bruke sin egen mal.',
    },
    {
      question: 'Kan vi si opp?',
      answer:
        `Avtalen løper i ${priser.avtaleManeder} måneder og fornyes automatisk. Oppsigelse skjer skriftlig med tre måneders varsel før avtaleperioden løper ut.`,
    },
  ],
  faqCta: 'Ta kontakt for avtaleforslag',
};

const en: PriserContent = {
  heroBadge: 'For municipalities',
  heroTitle: 'Pricing',
  heroSubtitle: 'One price for the licence. One price for onboarding. No hidden extras.',

  kommuneTitle: 'For municipalities',
  cards: [
    {
      name: 'Licence',
      status: 'Launching autumn 2026.',
      price: formaterPrisEn(pakkeprisMnd()),
      period: 'per month',
      unit: `per package of ${priser.pakkeStorrelse} service recipients`,
      body: `One package covers up to ${priser.pakkeStorrelse} service recipients. Around each of them the municipality can add as many staff and relatives as needed, at no extra cost. If you need room for more than ${priser.pakkeStorrelse}, you add another package.`,
      includesLabel: 'The licence includes:',
      includes: [
        'Boka: a shared feed for each service recipient',
        'Calendar with stays, appointments and activities',
        'Messages between staff and relatives',
        'Role-based access: only the team around a service recipient sees the content',
        'Web and apps for iOS and Android',
        'Support by email and phone on weekdays',
      ],
      footnote: `All prices are excluding VAT. The agreement runs for ${priser.avtaleManeder} months at a time.`,
    },
    {
      name: 'Onboarding',
      price: formaterPrisEn(priser.oppstart),
      period: '',
      unit: 'one-off fee per municipality',
      body: 'Onboarding is where most digital tools stall. That is why it is a service of its own, with a price of its own, and it includes:',
      includesLabel: 'Onboarding includes:',
      includes: [
        'Technical setup of the municipality, the service location and the first team',
        'Launch course 1 on Teams for staff',
        'Launch course 2 on Teams for staff and relatives together',
        'Data processing agreement, DPIA and security documentation',
        'A named contact for the first 90 days, with a follow-up meeting at the end',
      ],
    },
  ],

  exampleTitle: 'What does one respite home cost?',
  exampleColumns: { year1: 'Year 1', year2: 'Year 2 onwards' },
  exampleRows: [
    { label: `Licence, 1 package of ${priser.pakkeStorrelse}`, year1: formaterPrisEn(aar2()), year2: formaterPrisEn(aar2()) },
    { label: 'Onboarding', year1: formaterPrisEn(priser.oppstart), year2: formaterPrisEn(0) },
  ],
  exampleSumLabel: 'Total',
  exampleSumYear1: formaterPrisEn(aar1()),
  exampleSumYear2: formaterPrisEn(aar2()),
  exampleNote:
    'The amount is well below the Norwegian threshold for direct procurement. The municipality can enter into the agreement without a tender process.',

  modulesTitle: 'The new JodaCare is built module by module',
  modulesP1:
    'JodaCare is being rebuilt from the ground up, with security and access control as the first priority. The licence above covers the core module: Boka, calendar, messages and role-based access. The core module launches in autumn 2026, and that is what new customers start with.',
  modulesP2:
    'More modules are under development. Each gets its own price once it is finished, and the municipality decides whether to add it:',
  modules: [
    'Checklists and routines (Q4 2026)',
    'Event log with sharing control (Q4 2026)',
    'Hub for care homes and service housing (pilot 2027)',
    'Jodabook for service recipients with cognitive challenges (Q1 2027)',
    'Child welfare and contact visits (Q2 2027)',
    'JodaVisit for home nursing (2027)',
  ],
  modulesP3:
    'Customers with a running agreement are notified well before a module is launched. The price of the core module does not change because new modules arrive. If the schedule changes, we update it here.',


  faqTitle: 'Common questions about pricing',
  faq: [
    {
      question: `What if we have fewer than ${priser.pakkeStorrelse} service recipients?`,
      answer:
        'The package is the same. Most respite homes and shared housing grow into it during the first year.',
    },
    {
      question: 'Do we pay for staff and relatives?',
      answer: 'No. The licence follows the service recipient. Everyone around them is included.',
    },
    {
      question: 'How is it invoiced?',
      answer:
        'Onboarding is invoiced when the agreement is signed. The licence is invoiced quarterly in advance.',
    },
    {
      question: 'Do we need a data processing agreement?',
      answer:
        'Yes. It is signed before onboarding, and we provide a draft. The municipality can also use its own template.',
    },
    {
      question: 'Can we cancel?',
      answer:
        `The agreement runs for ${priser.avtaleManeder} months and renews automatically. Cancellation is made in writing with three months notice before the agreement period ends.`,
    },
  ],
  faqCta: 'Get in touch for a draft agreement',
};

export function getPriserContent(locale: Locale): PriserContent {
  return locale === 'en' ? en : no;
}
