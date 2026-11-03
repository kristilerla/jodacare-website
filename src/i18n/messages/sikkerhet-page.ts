import type { Locale } from '@/lib/i18n/types';
import type { StatusVisning } from '@/i18n/messages/status';
import { funksjonMerke } from '@/i18n/messages/status';
import { selskap } from '@/lib/fakta';

/**
 * badge er en egenskap ved kortet, for eksempel «EU-lagring». status er et
 * merke fra status.ts og viser om funksjonen finnes i nye JodaCare.
 */
export type SikkerhetFeature = {
  title: string;
  description: string;
  badge?: string;
  status?: StatusVisning;
};
export type SikkerhetSmall = { title: string; description: string };
export type SikkerhetCompliance = { title: string; body: string };

export type SikkerhetContent = {
  protectionImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  mainBadge: string;
  mainTitle: string;
  mainIntro: string;
  securityFeatures: SikkerhetFeature[];
  additionalTitle: string;
  additional: SikkerhetSmall[];
  complianceTitle: string;
  compliance: SikkerhetCompliance[];
  trustSr: string;
  trustStats: { value: string; label: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

const securityNo: SikkerhetFeature[] = [
  {
    title: 'ID-porten innlogging',
    description:
      'Du logger inn med ID-porten. Ansatte kan også logge inn med jobbkonto. Innlogging med MinID, BankID, Buypass eller Commfides gjennom ID-porten. JodaCare krever sikkerhetsnivå betydelig.',
    badge: 'Sikkerhetsnivå betydelig',
  },
  {
    title: 'GDPR-compliant',
    description:
      'JodaCare er utviklet i tråd med GDPR og personopplysningsloven, med rutiner for databehandling, innsyn og sletting.',
    badge: 'GDPR-compliant',
  },
  {
    title: 'Databehandleravtale',
    description:
      'Databehandleravtaler er på plass eller under signering med alle tredjeparter som behandler personopplysninger, og alle kommunale kunder tilbys DPA ved oppstart.',
  },
  {
    title: 'Data lagret i Europa',
    description:
      'Databasen og tjenestene kjører i Stockholm. KI-funksjonene som kommer, skal bruke Mistral i Paris.',
    badge: 'EU-lagring',
  },
  {
    title: 'Innsynslogg',
    description: 'En logg over hvem som har sett innholdet.',
    status: funksjonMerke('innsynslogg', 'no'),
  },
  {
    title: 'Deling bare i teamet',
    description:
      'Den som forvalter teamet, bestemmer hvem som er med i det.',
  },
  {
    title: 'Personvern i AI-behandling',
    description:
      'Før tekst sendes til KI, skal JodaCare fjerne navn, adresser, fødselsdatoer, diagnoser og stedsnavn.',
    // Ingen egen id i status.ts. KI-funksjonene følger KAI-merket.
    status: funksjonMerke('ki', 'no'),
  },
  {
    title: 'Sikker fillagring',
    description:
      'Bilder og filer lagres i privat lagring og kan kun nås gjennom signerte URL-er som utløper etter 24 timer.',
  },
];

const securityEn: SikkerhetFeature[] = [
  {
    title: 'ID-porten sign-in',
    description:
      'You sign in with ID-porten. Staff can also sign in with a work account. Sign in with MinID, BankID, Buypass or Commfides through ID-porten. JodaCare requires security level substantial.',
    badge: 'Security level substantial',
  },
  {
    title: 'GDPR compliant',
    description:
      'JodaCare is developed in line with the GDPR and the Norwegian Personal Data Act, with procedures for data processing, access and deletion.',
    badge: 'GDPR compliant',
  },
  {
    title: 'Data processing agreement',
    description:
      'Data processing agreements are in place or being signed with all third parties that process personal data, and every municipal customer is offered a DPA at onboarding.',
  },
  {
    title: 'Data stored in Europe',
    description:
      'The database and services run in Stockholm. The AI features that are coming will use Mistral in Paris.',
    badge: 'EU storage',
  },
  {
    title: 'Access log',
    description: 'A log of who has viewed the content.',
    status: funksjonMerke('innsynslogg', 'en'),
  },
  {
    title: 'Shared only within the team',
    description:
      'The person who manages the team decides who is in it.',
  },
  {
    title: 'Privacy in AI processing',
    description:
      'Before text is sent to AI, JodaCare will remove names, addresses, dates of birth, diagnoses and place names.',
    status: funksjonMerke('ki', 'en'),
  },
  {
    title: 'Secure file storage',
    description:
      'Images and files are stored in private storage and can only be accessed through signed URLs that expire after 24 hours.',
  },
];

const additionalNo: SikkerhetSmall[] = [
  {
    title: 'Kryptert kommunikasjon',
    description: 'All kommunikasjon mellom din enhet og JodaCare er kryptert med TLS 1.3.',
  },
  {
    title: 'Tilgangskontroll',
    description: 'Granulert tilgangsstyring sikrer at brukere kun ser informasjon de har rett til.',
  },
  {
    title: 'Regelmessig sikkerhetstesting',
    description: 'Vi gjennomfører jevnlige interne sikkerhetsrevisjoner og kodegjennomganger av plattformen.',
  },
];

const additionalEn: SikkerhetSmall[] = [
  {
    title: 'Encrypted communication',
    description: 'All communication between your device and JodaCare is encrypted with TLS 1.3.',
  },
  {
    title: 'Access control',
    description: 'Fine-grained access control ensures users only see information they are entitled to.',
  },
  {
    title: 'Regular security testing',
    description: 'We carry out regular internal security reviews and code audits of the platform.',
  },
];

const no: SikkerhetContent = {
  protectionImageAlt: 'Mann sitter ved et vindu i kveldslys',
  heroTitle: 'Sikkerhet du kan stole på',
  heroSubtitle:
    'JodaCare er bygget med sikkerhet i kjernen. Vi tar personvern og datasikkerhet på største alvor.',
  mainBadge: 'Sikkerhet',
  mainTitle: 'Hvordan vi beskytter dine data',
  mainIntro:
    'JodaCare er utviklet spesielt for å ivareta sikkerheten og personvernet til pasienter, pårørende og ansatte.',
  securityFeatures: securityNo,
  additionalTitle: 'Ytterligere sikkerhetstiltak',
  additional: additionalNo,
  complianceTitle: 'Lovverk og compliance',
  compliance: [
    {
      title: 'Helsepersonelloven',
      body:
        'JodaCare er bygget for å støtte samhandlingen mellom helsepersonell, pårørende og andre samarbeidspartnere. Den som forvalter teamet, bestemmer hvem som er med i det.',
    },
    {
      title: 'Personopplysningsloven og GDPR',
      body:
        'Vi behandler personopplysninger i samsvar med personopplysningsloven og EUs personvernforordning (GDPR). Dette inkluderer rutiner for innhenting av samtykke, innsyn, retting og sletting av data.',
    },
    {
      title: 'Pasient- og brukerrettighetsloven',
      body:
        'JodaCare respekterer pasientens rett til informasjon og medvirkning. Systemet er designet for å styrke pasientens og pårørendes mulighet til å delta i beslutninger om egen helse og omsorg.',
    },
  ],
  trustSr: 'Tillitsindikatorer',
  trustStats: [
    { value: `Siden ${selskap.etablert}`, label: 'JodaCare i norske kommuner' },
    { value: 'Norske kommuner', label: 'Kunder' },
    { value: 'Betydelig', label: 'Sikkerhetsnivå' },
    { value: 'EU', label: 'Datalokasjon' },
  ],
  ctaTitle: 'Har du spørsmål om sikkerhet?',
  ctaSubtitle:
    'Vi stiller gjerne opp for å forklare nærmere hvordan JodaCare fungerer og beskytter dine data.',
  ctaButton: 'Kontakt oss',
};

const en: SikkerhetContent = {
  protectionImageAlt: 'Man sitting by a window in evening light',
  heroTitle: 'Security you can trust',
  heroSubtitle:
    'JodaCare is built with security at the core. We take privacy and data protection seriously.',
  mainBadge: 'Security',
  mainTitle: 'How we protect your data',
  mainIntro:
    'JodaCare is designed to safeguard security and privacy for patients, relatives and staff.',
  securityFeatures: securityEn,
  additionalTitle: 'Additional safeguards',
  additional: additionalEn,
  complianceTitle: 'Law and compliance',
  compliance: [
    {
      title: 'Norwegian Health Personnel Act',
      body:
        'JodaCare is built to support collaboration between health professionals, relatives and partners. The person who manages the team decides who is in it.',
    },
    {
      title: 'Personal Data Act and GDPR',
      body:
        'We process personal data in line with the Personal Data Act and the EU GDPR, including consent, access, rectification and deletion procedures.',
    },
    {
      title: "Patients' and users' rights",
      body:
        'JodaCare respects the right to information and participation. The design strengthens the ability of patients and relatives to take part in decisions about health and care.',
    },
  ],
  trustSr: 'Trust indicators',
  trustStats: [
    { value: `Since ${selskap.etablert}`, label: 'JodaCare in Norwegian municipalities' },
    { value: 'Norwegian municipalities', label: 'Customers' },
    { value: 'Substantial', label: 'Security level' },
    { value: 'EU', label: 'Data location' },
  ],
  ctaTitle: 'Questions about security?',
  ctaSubtitle: 'We are happy to explain in more detail how JodaCare works and how your data is protected.',
  ctaButton: 'Contact us',
};

export function getSikkerhetContent(locale: Locale): SikkerhetContent {
  return locale === 'en' ? en : no;
}
