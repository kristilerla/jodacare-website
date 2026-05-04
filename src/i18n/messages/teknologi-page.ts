import type { Locale } from '@/lib/i18n/types';

export type TeknologiTextItem = { title: string; description: string };
export type TeknologiAuthItem = TeknologiTextItem & {
  badge: string;
  badgeVariant: 'success' | 'warning' | 'accent' | 'default';
};
export type TeknologiIntegrationItem = TeknologiAuthItem;
export type TeknologiStep = { step: number; title: string; description: string };
export type TeknologiFact = { value: string; label: string };

export type TeknologiPageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  contactCta: string;
  securityLinkCta: string;
  platformBadge: string;
  platformTitle: string;
  platformIntro: string;
  platformFeatures: TeknologiTextItem[];
  archTitle: string;
  archPoints: TeknologiTextItem[];
  techTitle: string;
  techIntro: string;
  securityBadge: string;
  securityTitle: string;
  securityIntro: string;
  securityFeatures: TeknologiTextItem[];
  authTitle: string;
  authIntro: string;
  authMethods: TeknologiAuthItem[];
  onboardingTitle: string;
  onboardingIntro: string;
  onboardingSteps: TeknologiStep[];
  integrationsBadge: string;
  integrationsTitle: string;
  integrationsIntro: string;
  integrations: TeknologiIntegrationItem[];
  aiBadge: string;
  aiTitle: string;
  aiIntro: string;
  aiFeatures: TeknologiTextItem[];
  aiUpcomingTitle: string;
  aiUpcoming: TeknologiTextItem[];
  aiFootnote: string;
  factsSr: string;
  facts: TeknologiFact[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const techBadges = [
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
  'Vercel',
  'Node.js',
];

const no: TeknologiPageCopy = {
  heroTitle: 'Moderne teknologi bygget for omsorg',
  heroSubtitle:
    'JodaCare 2.0 er utviklet fra bunnen av med sikkerhet, brukervennlighet og skalerbarhet i kjernen.',
  contactCta: 'Kontakt oss',
  securityLinkCta: 'Les om sikkerhet',
  platformBadge: 'Plattformen',
  platformTitle: 'Én plattform, tilgjengelig overalt',
  platformIntro:
    'JodaCare er en moderne nettbasert plattform som fungerer like godt på mobil, nettbrett og PC uten installasjon.',
  platformFeatures: [
    {
      title: 'Nettbasert plattform',
      description:
        'Ingen installasjon er nødvendig, og JodaCare kjører direkte i nettleseren. Plattformen er alltid oppdatert og tilgjengelig fra hvilken som helst enhet med internett.',
    },
    {
      title: 'Fungerer som en app (PWA)',
      description:
        'JodaCare kan installeres som en app på mobil og nettbrett, og kommer også i App Store og Google Play. Rask oppstart, push-varsler og hjemmeskjerm-ikon.',
    },
    {
      title: 'Sanntidssamarbeid',
      description:
        'Endringer synkroniseres umiddelbart mellom alle brukere. Når en kollega oppdaterer en plan, ser du det med en gang uten å laste siden på nytt.',
    },
    {
      title: 'Mobiltilpasset design',
      description:
        'Grensesnittet tilpasser seg automatisk til skjermstørrelsen og gir like god opplevelse på mobil, nettbrett og PC, designet for travle hverdager.',
    },
  ],
  archTitle: 'Bygget på moderne arkitektur',
  archPoints: [
    {
      title: 'Skybasert infrastruktur',
      description:
        'Hostet på Supabase og Vercel med automatisk skalering. All data lagret i EU.',
    },
    {
      title: 'Serverless arkitektur',
      description:
        'Moderne serverless-modell som skalerer automatisk etter behov, fra én til tusenvis av samtidige brukere.',
    },
    {
      title: 'Relasjonsdatabase',
      description: 'PostgreSQL med row-level security sørger for at data er konsistent, pålitelig og alltid beskyttet.',
    },
    {
      title: 'Automatisk utrulling',
      description:
        'Nye versjoner rulles ut automatisk uten nedetid. Dere får alltid den nyeste versjonen uten å løfte en finger.',
    },
  ],
  techTitle: 'Teknologier JodaCare bruker',
  techIntro:
    'Velprøvde, godt vedlikeholdte teknologier med store utviklerøkosystemer. Det betyr stabilitet, sikkerhet og enklere vedlikehold over tid.',
  securityBadge: 'Sikkerhet',
  securityTitle: 'Sikkerhet og tilgangskontroll',
  securityIntro:
    'Sikkerheten er bygget inn i alle lag av plattformen, fra database til brukergrensesnitt.',
  securityFeatures: [
    {
      title: 'Databasenivå sikkerhet (RLS)',
      description:
        'Tilgangskontroll er bygget inn i selve databaselaget. Selv om applikasjonskoden skulle ha en feil, forblir data beskyttet.',
    },
    {
      title: 'Rollebasert tilgang (RBAC)',
      description:
        '10 definerte rollenivåer sørger for at hver bruker kun ser og gjør det de har rett til, fra pårørende til superadmin.',
    },
    {
      title: 'Flerfaktor-autentisering (MFA)',
      description: 'Støtte for TOTP-basert flerfaktor-autentisering gir et ekstra sikkerhetslag utover passord.',
    },
    {
      title: 'GDPR og Normen',
      description:
        'Plattformen er utviklet i tråd med GDPR, personopplysningsloven og Normen for informasjonssikkerhet i helsesektoren.',
    },
    {
      title: 'Hastighetsbegrensning',
      description:
        'Rate limiting beskytter mot automatiserte angrep og misbruk ved å begrense antall forespørsler per bruker og tidsperiode.',
    },
    {
      title: 'Fullstendig sporbarhet',
      description:
        'Alle handlinger logges i et uforanderlig revisjonslogg (audit log). Full oversikt over hvem som gjorde hva, og når.',
    },
  ],
  authTitle: 'Fleksible innloggingsmetoder',
  authIntro: 'Velg innloggingsmetoden som passer best for din organisasjon.',
  authMethods: [
    {
      title: 'ID-porten',
      description: 'Innlogging med BankID, Buypass eller Commfides via ID-porten. Sikkerhetsnivå 4, godkjent av Digdir.',
      badge: 'Tilgjengelig',
      badgeVariant: 'success',
    },
    {
      title: 'JodaCare Auth',
      description: 'Innebygd autentisering med flerfaktor-autentisering (MFA) via TOTP.',
      badge: 'Tilgjengelig',
      badgeVariant: 'success',
    },
    {
      title: 'Azure AD / Entra ID',
      description: 'Single sign-on (SSO) via organisasjonens Microsoft Entra ID.',
      badge: 'På veikartet',
      badgeVariant: 'accent',
    },
  ],
  onboardingTitle: 'Kom i gang på minutter',
  onboardingIntro: 'Oppstarten er enkel og krever ingen komplisert installasjon eller oppsett.',
  onboardingSteps: [
    { step: 1, title: 'Registrer organisasjonen', description: 'Opprett en konto for organisasjonen din på noen få minutter.' },
    { step: 2, title: 'Inviter ansatte', description: 'Send invitasjoner via magic link, og ansatte slipper å huske passord ved første innlogging.' },
    { step: 3, title: 'Sett opp tilganger', description: 'Tildel roller og tilgangsnivåer tilpasset hver ansatts behov.' },
    { step: 4, title: 'Klar til bruk', description: 'Plattformen er klar, og dere kan begynne å samarbeide trygt og effektivt.' },
  ],
  integrationsBadge: 'Integrasjoner',
  integrationsTitle: 'Koble sammen systemene dine',
  integrationsIntro: 'JodaCare er designet for å spille sammen med resten av IT-landskapet i kommunen.',
  integrations: [
    {
      title: 'API for tredjeparter',
      description: 'REST API som gjør det mulig å koble JodaCare sammen med andre systemer i organisasjonen.',
      badge: 'Tilgjengelig',
      badgeVariant: 'success',
    },
    {
      title: 'EPJ-integrasjon',
      description: 'Integrasjon mot elektroniske pasientjournaler for informasjonsflyt uten manuell overføring.',
      badge: 'På veikartet',
      badgeVariant: 'accent',
    },
    {
      title: 'Azure AD / Entra ID-synkronisering',
      description: 'Automatisk synkronisering av brukere og grupper fra organisasjonens Microsoft Entra ID.',
      badge: 'På veikartet',
      badgeVariant: 'accent',
    },
    {
      title: 'E-postvarsler',
      description:
        'Automatiske e-postvarsler ved viktige hendelser som nye meldinger, endringer i planer og påminnelser.',
      badge: 'Tilgjengelig',
      badgeVariant: 'success',
    },
  ],
  aiBadge: 'KI i JodaCare',
  aiTitle: 'Kunstig intelligens, norsk og personvernvennlig',
  aiIntro:
    'JodaCare bruker Mistral AI (Paris) for KI-funksjonalitet. Ingen data forlater Europa. KI-funksjonene er valgfrie og transparente.',
  aiFeatures: [
    {
      title: 'KAI, KI-assistent for helsepersonell',
      description: 'KAI forklarer rutiner, svarer på spørsmål og veileder ansatte i JodaCare. Tilpasser seg rollen din automatisk.',
    },
    {
      title: 'Intelligente sammendrag',
      description: 'Automatisk oppsummering av dagbokinnlegg fra den siste uken. Saksbehandler kan lese to ukers historikk på ett minutt.',
    },
  ],
  aiUpcomingTitle: 'Kommer snart',
  aiUpcoming: [
    {
      title: 'Mønstergjenkjenning i dagsform',
      description: 'Hendelsesloggen registrerer allerede søvn, humør og adferd daglig. Neste steg er at KI finner mønstrene, slik at saksbehandler ser at nettene ble verre etter samvær, eller at humøret stiger når én bestemt assistent er på jobb.',
    },
  ],
  aiFootnote:
    'All bruk av KI i JodaCare er transparent, personvernvennlig og i tråd med gjeldende regelverk. AI-motor: Mistral AI (Paris, Frankrike).',
  factsSr: 'Nøkkeltall',
  facts: [
    { value: '99.9%', label: 'Oppetid' },
    { value: 'TLS 1.3', label: 'Kryptering' },
    { value: 'EU', label: 'Datalagring' },
    { value: '10', label: 'Rollenivå' },
  ],
  ctaTitle: 'Vil du vite mer om teknologien?',
  ctaSubtitle: 'Ta kontakt for en gjennomgang tilpasset din organisasjons IT-krav.',
  ctaPrimary: 'Kontakt oss',
  ctaSecondary: 'Les om sikkerhet',
};

const en: TeknologiPageCopy = {
  heroTitle: 'Modern technology built for care',
  heroSubtitle:
    'JodaCare 2.0 is built from the ground up with security, usability and scalability at the core.',
  contactCta: 'Contact us',
  securityLinkCta: 'Read about security',
  platformBadge: 'Platform',
  platformTitle: 'One platform, everywhere you work',
  platformIntro:
    'JodaCare is a modern web platform that works equally well on phone, tablet and desktop with nothing to install.',
  platformFeatures: [
    {
      title: 'Web-based platform',
      description:
        'No installation is required, and JodaCare runs directly in the browser. The platform is always up to date and available from any device online.',
    },
    {
      title: 'Works like an app (PWA)',
      description:
        'JodaCare can be installed as an app on phones and tablets and is also coming to the App Store and Google Play. Fast launch, push notifications and a home-screen icon.',
    },
    {
      title: 'Real-time collaboration',
      description:
        'Changes sync instantly for everyone. When a colleague updates a plan, you see it immediately without refreshing the page.',
    },
    {
      title: 'Responsive design',
      description:
        'The interface adapts to screen size and provides a consistent experience on mobile, tablet and desktop, designed for busy days.',
    },
  ],
  archTitle: 'Built on modern architecture',
  archPoints: [
    {
      title: 'Cloud infrastructure',
      description: 'Hosted on Supabase and Vercel with automatic scaling. All data stored in the EU.',
    },
    {
      title: 'Serverless architecture',
      description: 'A modern serverless model that scales automatically, from one to thousands of concurrent users.',
    },
    {
      title: 'Relational database',
      description: 'PostgreSQL with row-level security keeps data consistent, reliable and protected.',
    },
    {
      title: 'Continuous deployment',
      description: 'New versions roll out automatically without downtime. You always run the latest release.',
    },
  ],
  techTitle: 'Technologies JodaCare uses',
  techIntro:
    'Mature, well-maintained technologies with large developer ecosystems. That means stability, security and easier maintenance over time.',
  securityBadge: 'Security',
  securityTitle: 'Security and access control',
  securityIntro: 'Security is built into every layer, from the database to the user interface.',
  securityFeatures: [
    {
      title: 'Database-level security (RLS)',
      description:
        'Access control lives in the database layer. Even if application code has a defect, data stays protected.',
    },
    {
      title: 'Role-based access (RBAC)',
      description:
        'Ten defined role levels ensure each user only sees and does what they are allowed to, from relative to superadmin.',
    },
    {
      title: 'Multi-factor authentication (MFA)',
      description: 'TOTP-based MFA adds a strong extra layer beyond passwords.',
    },
    {
      title: 'GDPR and “Normen”',
      description:
        'The platform is developed in line with the GDPR, the Norwegian Personal Data Act and Normen for information security in health and care.',
    },
    {
      title: 'Rate limiting',
      description:
        'Rate limiting reduces automated abuse by throttling requests per user and time window.',
    },
    {
      title: 'Full traceability',
      description:
        'Actions are written to an immutable audit log, providing a clear record of who did what and when.',
    },
  ],
  authTitle: 'Flexible sign-in methods',
  authIntro: 'Choose the sign-in method that best fits your organisation.',
  authMethods: [
    {
      title: 'ID-porten',
      description: 'Sign in with BankID, Buypass or Commfides via ID-porten. Security level 4, approved by Digdir.',
      badge: 'Available',
      badgeVariant: 'success',
    },
    {
      title: 'JodaCare Auth',
      description: 'Built-in authentication with multi-factor authentication (MFA) via TOTP.',
      badge: 'Available',
      badgeVariant: 'success',
    },
    {
      title: 'Azure AD / Entra ID',
      description: 'Single sign-on (SSO) through your organisation\'s Microsoft Entra ID.',
      badge: 'On the roadmap',
      badgeVariant: 'accent',
    },
  ],
  onboardingTitle: 'Get started in minutes',
  onboardingIntro: 'Onboarding is straightforward and requires no complex installation or setup.',
  onboardingSteps: [
    { step: 1, title: 'Register your organisation', description: 'Create an account for your organisation in minutes.' },
    { step: 2, title: 'Invite staff', description: 'Send invitations by magic link, and staff need no password to remember on first login.' },
    { step: 3, title: 'Configure access', description: 'Assign roles and access levels tailored to each colleague.' },
    { step: 4, title: 'Ready to use', description: 'The platform is ready, and you can start collaborating safely and efficiently.' },
  ],
  integrationsBadge: 'Integrations',
  integrationsTitle: 'Connect your systems',
  integrationsIntro: 'JodaCare is designed to work alongside the rest of the municipality\'s IT landscape.',
  integrations: [
    {
      title: 'Third-party API',
      description: 'REST API so JodaCare can connect to other systems in your organisation.',
      badge: 'Available',
      badgeVariant: 'success',
    },
    {
      title: 'EHR integration',
      description: 'Integration with electronic patient records for information flow without manual transfer.',
      badge: 'On the roadmap',
      badgeVariant: 'accent',
    },
    {
      title: 'Azure AD / Entra ID sync',
      description: 'Automatic synchronisation of users and groups from Microsoft Entra ID.',
      badge: 'On the roadmap',
      badgeVariant: 'accent',
    },
    {
      title: 'Email notifications',
      description: 'Automated emails for important events such as new messages, plan changes and reminders.',
      badge: 'Available',
      badgeVariant: 'success',
    },
  ],
  aiBadge: 'AI in JodaCare',
  aiTitle: 'Artificial intelligence, European and privacy-conscious',
  aiIntro:
    'JodaCare uses Mistral AI (Paris) for AI functionality. No data leaves Europe. AI features are optional and transparent.',
  aiFeatures: [
    {
      title: 'KAI, AI assistant for health staff',
      description: 'KAI explains routines, answers questions and guides staff in JodaCare. Adapts to your role automatically.',
    },
    {
      title: 'Intelligent summaries',
      description: 'Automatic summaries of diary entries from the past week. A case worker can read two weeks of history in one minute.',
    },
  ],
  aiUpcomingTitle: 'Coming soon',
  aiUpcoming: [
    {
      title: 'Pattern detection in daily reports',
      description: 'The event log already records sleep, mood and behaviour daily. The next step is for AI to find the patterns, so a case worker can see that nights got worse after contact visits, or that mood improves when one particular assistant is on shift.',
    },
  ],
  aiFootnote:
    'All use of AI in JodaCare is transparent, privacy-conscious and aligned with applicable regulation. AI engine: Mistral AI (Paris, France).',
  factsSr: 'Key figures',
  facts: [
    { value: '99.9%', label: 'Uptime' },
    { value: 'TLS 1.3', label: 'Encryption' },
    { value: 'EU', label: 'Data storage' },
    { value: '10', label: 'Role levels' },
  ],
  ctaTitle: 'Want to know more about the technology?',
  ctaSubtitle: 'Get in touch for a walkthrough tailored to your organisation\'s IT requirements.',
  ctaPrimary: 'Contact us',
  ctaSecondary: 'Read about security',
};

export function getTeknologiPageCopy(locale: Locale): TeknologiPageCopy {
  return locale === 'en' ? en : no;
}

export { techBadges };
