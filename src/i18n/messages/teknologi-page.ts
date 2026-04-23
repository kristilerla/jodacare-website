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
    'jodacare 2.0 er utviklet fra bunnen av med sikkerhet, brukervennlighet og skalerbarhet i kjernen.',
  contactCta: 'Kontakt oss',
  securityLinkCta: 'Les om sikkerhet',
  platformBadge: 'Plattformen',
  platformTitle: 'Én plattform — tilgjengelig overalt',
  platformIntro:
    'jodacare er en moderne nettbasert plattform som fungerer like godt på mobil, nettbrett og PC — uten installasjon.',
  platformFeatures: [
    {
      title: 'Nettbasert plattform',
      description:
        'Ingen installasjon nødvendig — jodacare kjører direkte i nettleseren. Alltid oppdatert, alltid tilgjengelig fra hvilken som helst enhet med internett.',
    },
    {
      title: 'Fungerer som en app (PWA)',
      description:
        'jodacare kan installeres som en app på mobil og nettbrett, og kommer også i App Store og Google Play. Rask oppstart, push-varsler og hjemmeskjerm-ikon.',
    },
    {
      title: 'Sanntidssamarbeid',
      description:
        'Endringer synkroniseres umiddelbart mellom alle brukere. Når en kollega oppdaterer en plan, ser du det med en gang — uten å laste siden på nytt.',
    },
    {
      title: 'Mobiltilpasset design',
      description:
        'Grensesnittet tilpasser seg automatisk til skjermstørrelsen. Like god opplevelse på mobil, nettbrett og PC — designet for travle hverdager.',
    },
  ],
  archTitle: 'Bygget på moderne arkitektur',
  archPoints: [
    {
      title: 'Skybasert infrastruktur',
      description:
        'Hostet på enterprise-grade skytjenester med automatisk skalering og geografisk redundans i EU.',
    },
    {
      title: 'Serverless arkitektur',
      description:
        'Moderne serverless-modell som skalerer automatisk etter behov — fra én til tusenvis av samtidige brukere.',
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
  techTitle: 'Teknologier vi bruker',
  techIntro:
    'Vi har valgt teknologier som er velprøvde, godt vedlikeholdte og brukt av noen av verdens største tjenester. Det betyr stabilitet, sikkerhet og et stort økosystem av utviklere.',
  securityBadge: 'Sikkerhet',
  securityTitle: 'Sikkerhet og tilgangskontroll',
  securityIntro:
    'Sikkerheten er bygget inn i alle lag av plattformen — fra database til brukergrensesnitt.',
  securityFeatures: [
    {
      title: 'Databasenivå sikkerhet (RLS)',
      description:
        'Tilgangskontroll er bygget inn i selve databaselaget. Selv om applikasjonskoden skulle ha en feil, forblir data beskyttet.',
    },
    {
      title: 'Rollebasert tilgang (RBAC)',
      description:
        '6 definerte rollenivåer sørger for at hver bruker kun ser og gjør det de har rett til — fra lesetilgang til full administrasjon.',
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
      title: 'jodacare Auth',
      description: 'Innebygd autentisering med e-post og passord, magic link og flerfaktor-autentisering (MFA).',
      badge: 'Tilgjengelig',
      badgeVariant: 'success',
    },
    {
      title: 'ID-porten',
      description: 'Innlogging med BankID, Buypass eller Commfides via ID-porten for sikkerhetsnivå 4.',
      badge: 'Kommer snart',
      badgeVariant: 'warning',
    },
    {
      title: 'Azure AD',
      description: 'Single sign-on (SSO) via organisasjonens Azure Active Directory for sømløs innlogging.',
      badge: 'Kommer snart',
      badgeVariant: 'warning',
    },
  ],
  onboardingTitle: 'Kom i gang på minutter',
  onboardingIntro: 'Oppstarten er enkel — ingen komplisert installasjon eller oppsett.',
  onboardingSteps: [
    { step: 1, title: 'Registrer organisasjonen', description: 'Opprett en konto for organisasjonen din på noen få minutter.' },
    { step: 2, title: 'Inviter ansatte', description: 'Send invitasjoner via magic link — ingen passord å huske ved første innlogging.' },
    { step: 3, title: 'Sett opp tilganger', description: 'Tildel roller og tilgangsnivåer tilpasset hver ansatts behov.' },
    { step: 4, title: 'Klar til bruk', description: 'Plattformen er klar — begynn å samarbeide trygt og effektivt.' },
  ],
  integrationsBadge: 'Integrasjoner',
  integrationsTitle: 'Koble sammen systemene dine',
  integrationsIntro: 'jodacare er designet for å spille sammen med resten av IT-landskapet i kommunen.',
  integrations: [
    {
      title: 'Azure AD-synkronisering',
      description: 'Automatisk synkronisering av brukere og grupper fra organisasjonens Azure Active Directory.',
      badge: 'Kommer snart',
      badgeVariant: 'warning',
    },
    {
      title: 'API for tredjeparter',
      description: 'Åpent API som gjør det mulig å koble jodacare sammen med andre systemer i organisasjonen.',
      badge: 'Kommer snart',
      badgeVariant: 'warning',
    },
    {
      title: 'EPJ-integrasjon',
      description: 'Integrasjon mot elektroniske pasientjournaler som DIPS og Profil for sømløs informasjonsflyt.',
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
  aiBadge: 'Kommer i fremtiden',
  aiTitle: 'Fremtidens KI-muligheter',
  aiIntro:
    'Vi utforsker hvordan kunstig intelligens kan gjøre hverdagen enklere for helsepersonell — uten å gå på bekostning av personvern.',
  aiFeatures: [
    {
      title: 'KI-støttet dokumentasjon',
      description: 'Intelligente forslag til dokumentasjon basert på kontekst og tidligere journalføringer.',
    },
    {
      title: 'Norsk talegjenkjenning',
      description: 'Diktér notater og rapporter på norsk — systemet transkriberer og strukturerer teksten automatisk.',
    },
    {
      title: 'Intelligente sammendrag',
      description: 'Automatisk oppsummering av lange journaler og møtenotater for raskere oversikt.',
    },
    {
      title: 'Mønstergjenkjenning i dagsform',
      description: 'Analyse av dagsform-registreringer over tid for å identifisere trender og endringer.',
    },
  ],
  aiFootnote:
    'KI-funksjonene er under utvikling og vil bli rullet ut gradvis. All bruk av KI i jodacare vil være transparent, personvernvennlig og i tråd med gjeldende regelverk.',
  factsSr: 'Nøkkeltall',
  facts: [
    { value: '99.9%', label: 'Oppetid' },
    { value: 'TLS 1.3', label: 'Kryptering' },
    { value: 'EU', label: 'Datalagring' },
    { value: '6', label: 'Rollenivå' },
  ],
  ctaTitle: 'Vil du vite mer om teknologien?',
  ctaSubtitle: 'Vi tar gjerne en gjennomgang av plattformen tilpasset din organisasjons IT-krav.',
  ctaPrimary: 'Kontakt oss',
  ctaSecondary: 'Les om sikkerhet',
};

const en: TeknologiPageCopy = {
  heroTitle: 'Modern technology built for care',
  heroSubtitle:
    'jodacare 2.0 is built from the ground up with security, usability and scalability at the core.',
  contactCta: 'Contact us',
  securityLinkCta: 'Read about security',
  platformBadge: 'Platform',
  platformTitle: 'One platform — everywhere you work',
  platformIntro:
    'jodacare is a modern web platform that works equally well on phone, tablet and desktop — with nothing to install.',
  platformFeatures: [
    {
      title: 'Web-based platform',
      description:
        'No installation required — jodacare runs in the browser. Always up to date, always available from any device online.',
    },
    {
      title: 'Works like an app (PWA)',
      description:
        'jodacare can be installed as an app on phones and tablets and is also coming to the App Store and Google Play. Fast launch, push notifications and a home-screen icon.',
    },
    {
      title: 'Real-time collaboration',
      description:
        'Changes sync instantly for everyone. When a colleague updates a plan, you see it immediately — without refreshing the page.',
    },
    {
      title: 'Responsive design',
      description:
        'The interface adapts to screen size. A consistent experience on mobile, tablet and desktop — designed for busy days.',
    },
  ],
  archTitle: 'Built on modern architecture',
  archPoints: [
    {
      title: 'Cloud infrastructure',
      description: 'Hosted on enterprise-grade cloud with automatic scaling and geographic redundancy in the EU.',
    },
    {
      title: 'Serverless architecture',
      description: 'A modern serverless model that scales automatically — from one to thousands of concurrent users.',
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
  techTitle: 'Technologies we use',
  techIntro:
    'We chose mature, well-maintained technologies used by some of the world’s largest services — for stability, security and a rich developer ecosystem.',
  securityBadge: 'Security',
  securityTitle: 'Security and access control',
  securityIntro: 'Security is built into every layer — from the database to the user interface.',
  securityFeatures: [
    {
      title: 'Database-level security (RLS)',
      description:
        'Access control lives in the database layer. Even if application code has a defect, data stays protected.',
    },
    {
      title: 'Role-based access (RBAC)',
      description:
        'Six defined role levels ensure each user only sees and does what they are allowed to — from read-only to full administration.',
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
        'Actions are written to an immutable audit log — a clear record of who did what, and when.',
    },
  ],
  authTitle: 'Flexible sign-in methods',
  authIntro: 'Choose the sign-in method that best fits your organisation.',
  authMethods: [
    {
      title: 'jodacare Auth',
      description: 'Built-in authentication with email and password, magic link and MFA.',
      badge: 'Available',
      badgeVariant: 'success',
    },
    {
      title: 'ID-porten',
      description: 'Sign in with BankID, Buypass or Commfides via ID-porten for security level 4.',
      badge: 'Coming soon',
      badgeVariant: 'warning',
    },
    {
      title: 'Azure AD',
      description: 'Single sign-on (SSO) through your organisation’s Microsoft Entra ID (Azure AD).',
      badge: 'Coming soon',
      badgeVariant: 'warning',
    },
  ],
  onboardingTitle: 'Get started in minutes',
  onboardingIntro: 'Onboarding is straightforward — no complex installation or setup.',
  onboardingSteps: [
    { step: 1, title: 'Register your organisation', description: 'Create an account for your organisation in minutes.' },
    { step: 2, title: 'Invite staff', description: 'Send invitations by magic link — no passwords to remember on first login.' },
    { step: 3, title: 'Configure access', description: 'Assign roles and access levels tailored to each colleague.' },
    { step: 4, title: 'Ready to use', description: 'The platform is ready — start collaborating safely and efficiently.' },
  ],
  integrationsBadge: 'Integrations',
  integrationsTitle: 'Connect your systems',
  integrationsIntro: 'jodacare is designed to work alongside the rest of the municipality’s IT landscape.',
  integrations: [
    {
      title: 'Azure AD sync',
      description: 'Automatic synchronisation of users and groups from Microsoft Entra ID.',
      badge: 'Coming soon',
      badgeVariant: 'warning',
    },
    {
      title: 'Third-party API',
      description: 'An open API so jodacare can connect to other systems in your organisation.',
      badge: 'Coming soon',
      badgeVariant: 'warning',
    },
    {
      title: 'EHR integration',
      description: 'Integration with electronic patient records such as DIPS and Profil for smoother information flow.',
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
  aiBadge: 'Future direction',
  aiTitle: 'Future AI capabilities',
  aiIntro:
    'We are exploring how artificial intelligence can simplify everyday work for care staff — without compromising privacy.',
  aiFeatures: [
    {
      title: 'AI-assisted documentation',
      description: 'Smart documentation suggestions based on context and earlier notes.',
    },
    {
      title: 'Norwegian speech recognition',
      description: 'Dictate notes and reports in Norwegian — the system transcribes and structures the text.',
    },
    {
      title: 'Intelligent summaries',
      description: 'Automatic summaries of long records and meeting notes for faster overview.',
    },
    {
      title: 'Patterns in daily reports',
      description: 'Analysis of daily wellbeing entries over time to spot trends and changes.',
    },
  ],
  aiFootnote:
    'AI features are under development and will roll out gradually. Any use of AI in jodacare will be transparent, privacy-conscious and aligned with applicable regulation.',
  factsSr: 'Key figures',
  facts: [
    { value: '99.9%', label: 'Uptime' },
    { value: 'TLS 1.3', label: 'Encryption' },
    { value: 'EU', label: 'Data storage' },
    { value: '6', label: 'Role levels' },
  ],
  ctaTitle: 'Want to know more about the technology?',
  ctaSubtitle: 'We are happy to walk through the platform tailored to your organisation’s IT requirements.',
  ctaPrimary: 'Contact us',
  ctaSecondary: 'Read about security',
};

export function getTeknologiPageCopy(locale: Locale): TeknologiPageCopy {
  return locale === 'en' ? en : no;
}

export { techBadges };
