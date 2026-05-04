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
      'All tilgang til JodaCare skjer via sikker innlogging med ID-porten, det vil si BankID, Buypass eller Commfides. Dette gir sikkerhetsnivå 4, det høyeste nivået for digital identifikasjon i Norge.',
    badge: 'Sikkerhetsnivå 4',
  },
  {
    title: 'GDPR-compliant',
    description:
      'JodaCare følger alle krav i GDPR (personvernforordningen), helsepersonelloven og personopplysningsloven. Vi har rutiner for databehandling, innsyn og sletting.',
    badge: 'EU-godkjent',
  },
  {
    title: 'Databehandleravtale',
    description:
      'Alle kommuner og organisasjoner som bruker JodaCare inngår databehandleravtale. Dette sikrer at personopplysninger behandles i tråd med lovverket.',
  },
  {
    title: 'Data lagret i Europa',
    description:
      'Alle data lagres hos godkjente leverandører i Europa. Vi bruker moderne sikkerhetsteknologi og kryptering for å hindre uautorisert tilgang.',
    badge: 'EU-lagring',
  },
  {
    title: 'Full sporbarhet',
    description:
      'Alle aktiviteter i JodaCare logges automatisk. Kommunen har full oversikt over hvem som har sett og delt informasjon, og når dette har skjedd.',
  },
  {
    title: 'Samtykkebasert deling',
    description:
      'Informasjon deles kun basert på samtykke fra tjenestemottaker eller verge. Systemet sørger for at deling skjer i henhold til pasientens rettigheter.',
  },
];

const securityEn: SikkerhetFeature[] = [
  {
    title: 'ID-porten sign-in',
    description:
      'Access to JodaCare uses secure login with ID-porten, meaning BankID, Buypass or Commfides. This provides security level 4, the highest level for digital identity in Norway.',
    badge: 'Security level 4',
  },
  {
    title: 'GDPR compliant',
    description:
      'JodaCare follows the GDPR, the Norwegian Health Personnel Act and the Personal Data Act. We have procedures for processing, access and deletion of data.',
    badge: 'EU aligned',
  },
  {
    title: 'Data processing agreement',
    description:
      'Every municipality and organisation using JodaCare enters a data processing agreement so personal data is handled in line with the law.',
  },
  {
    title: 'Data stored in Europe',
    description:
      'All data is stored with approved providers in Europe. We use modern security technology and encryption to prevent unauthorised access.',
    badge: 'EU storage',
  },
  {
    title: 'Full traceability',
    description:
      'Activity in JodaCare is logged automatically. The municipality can see who viewed and shared information, and when.',
  },
  {
    title: 'Consent-based sharing',
    description:
      'Information is shared only with consent from the service user or guardian. The system supports sharing in line with the person’s rights.',
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
    description: 'Vi gjennomfører jevnlig penetrasjonstesting og sikkerhetsrevisjoner.',
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
    description: 'We run penetration tests and security reviews on a regular basis.',
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
    { value: 'EU', label: 'Datalagring' },
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
      title: 'Patients’ and users’ rights',
      body:
        'JodaCare respects the right to information and participation. The design strengthens the ability of patients and relatives to take part in decisions about health and care.',
    },
  ],
  trustSr: 'Trust indicators',
  trustStats: [
    { value: '2016', label: 'In operation since' },
    { value: 'Horten, Lier, Oslo', label: 'Municipalities etc.' },
    { value: 'Level 4', label: 'Security level' },
    { value: 'EU', label: 'Data storage' },
  ],
  ctaTitle: 'Questions about security?',
  ctaSubtitle: 'We are happy to explain in more detail how JodaCare works and how your data is protected.',
  ctaButton: 'Contact us',
};

export function getSikkerhetContent(locale: Locale): SikkerhetContent {
  return locale === 'en' ? en : no;
}
