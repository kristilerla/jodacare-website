import type { Locale } from '@/lib/i18n/types';

export type SikkerhetFeature = { title: string; description: string; badge?: string };
export type SikkerhetSmall = { title: string; description: string };
export type SikkerhetCompliance = { title: string; body: string };

export type SikkerhetContent = {
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
      'JodaCare støtter innlogging med ID-porten på sikkerhetsnivå 4, i tillegg til Vipps og e-post med engangskode for roller som ikke krever høyeste sikkerhetsnivå.',
    badge: 'Sikkerhetsnivå 4',
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
      'Databasen ligger i Stockholm (Supabase), hosting kjøres i Stockholm (Vercel), AI-tjenestene er europeiske gjennom Mistral i Paris, og e-post går gjennom europeisk leverandør (Brevo).',
    badge: 'EU-lagring',
  },
  {
    title: 'Full sporbarhet',
    description:
      'Tilgang til pasientdata logges automatisk med tidsstempel og bruker-ID, og kommunen har full oversikt over hvem som har sett og delt informasjon.',
  },
  {
    title: 'Samtykkebasert deling',
    description:
      'Informasjon deles kun basert på samtykke fra tjenestemottaker eller verge. Systemet sørger for at deling skjer i henhold til pasientens rettigheter.',
  },
  {
    title: 'Personvern i AI-behandling',
    description:
      'JodaCare fjerner automatisk navn, adresser, fødselsdatoer, diagnoser og stedsnavn fra all tekst før den sendes til AI-tjenester.',
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
      'JodaCare supports sign-in with ID-porten at security level 4, along with Vipps and email with one-time code for roles that do not require the highest security level.',
    badge: 'Security level 4',
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
      'The database is located in Stockholm (Supabase), hosting runs in Stockholm (Vercel), AI services are European through Mistral in Paris, and email goes through a European provider (Brevo).',
    badge: 'EU storage',
  },
  {
    title: 'Full traceability',
    description:
      'Access to patient data is logged automatically with timestamp and user ID, and the municipality has full oversight of who viewed and shared information.',
  },
  {
    title: 'Consent-based sharing',
    description:
      'Information is shared only with consent from the service user or guardian, and the system supports sharing in line with the person\'s rights.',
  },
  {
    title: 'Privacy in AI processing',
    description:
      'JodaCare automatically removes names, addresses, dates of birth, diagnoses and place names from all text before it is sent to AI services.',
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
        'JodaCare er bygget for å støtte opp om lovpålagt samhandling mellom helsepersonell, pårørende og andre samarbeidspartnere. Systemet sørger for at deling av informasjon skjer i henhold til helsepersonellovens bestemmelser om taushetsplikt og informasjonsplikt.',
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
    { value: '2016', label: 'I drift siden' },
    { value: 'Horten, Lier, Oslo', label: 'Kommuner m.fl.' },
    { value: 'Nivå 4', label: 'Sikkerhetsnivå' },
    { value: 'EU', label: 'Datalokasjon' },
  ],
  ctaTitle: 'Har du spørsmål om sikkerhet?',
  ctaSubtitle:
    'Vi stiller gjerne opp for å forklare nærmere hvordan JodaCare fungerer og beskytter dine data.',
  ctaButton: 'Kontakt oss',
};

const en: SikkerhetContent = {
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
        'JodaCare supports legally required collaboration between health professionals, relatives and partners. Sharing follows the duty of confidentiality and duty to inform under the Act.',
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
    { value: '2016', label: 'In operation since' },
    { value: 'Horten, Lier, Oslo', label: 'Municipalities etc.' },
    { value: 'Level 4', label: 'Security level' },
    { value: 'EU', label: 'Data location' },
  ],
  ctaTitle: 'Questions about security?',
  ctaSubtitle: 'We are happy to explain in more detail how JodaCare works and how your data is protected.',
  ctaButton: 'Contact us',
};

export function getSikkerhetContent(locale: Locale): SikkerhetContent {
  return locale === 'en' ? en : no;
}
