import type { Locale } from '@/lib/i18n/types';
import type { StatusVisning } from '@/i18n/messages/status';
import { modulMerke, funksjonMerke } from '@/i18n/messages/status';

export type TeknologiTextItem = { title: string; description: string; status?: StatusVisning };
export type TeknologiAuthItem = TeknologiTextItem & { status: StatusVisning };
export type TeknologiIntegrationItem = TeknologiAuthItem;
export type TeknologiStep = { step: number; title: string; description: string };
export type TeknologiFact = { value: string; label: string };

export type TeknologiPageCopy = {
  aiImageAlt: string;
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
  aiStatus: StatusVisning;
  aiTitle: string;
  aiIntro: string;
  aiFeatures: TeknologiTextItem[];
  aiUpcomingStatus: StatusVisning;
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
  'Tailwind CSS',
  'Node.js',
];


const no: TeknologiPageCopy = {
  aiImageAlt: 'Barn flyr drage mot hvit himmel',
  heroTitle: 'Moderne teknologi bygget for omsorg',
  heroSubtitle:
    'Nye JodaCare er utviklet fra bunnen av med sikkerhet, brukervennlighet og skalerbarhet i kjernen.',
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
      title: 'Brukes i nettleseren, også på mobil',
      description:
        'JodaCare brukes i nettleseren på mobil, nettbrett og PC. Du kan legge JodaCare på hjemskjermen.',
    },
    {
      title: 'Egen app i App Store og Google Play',
      description: 'JodaCare får en egen app for mobil og nettbrett.',
      status: funksjonMerke('egen-app', 'no'),
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
        'Kjører på europeiske servere i Stockholm. All data lagret i EU.',
    },
    {
      title: 'Relasjonsdatabase',
      description: 'Dataene ligger i PostgreSQL. Databasen holder dataene konsistente og pålitelige.',
    },
    {
      title: 'Automatisk utrulling',
      description:
        'Nye versjoner rulles ut fortløpende. Dere bruker alltid den nyeste versjonen.',
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
      title: 'Tilgang avgjøres i backend',
      description:
        'Backend avgjør tilgangen for hver forespørsel. Det er aldri klienten som bestemmer hvem som ser hva.',
    },
    {
      title: 'Rollebasert tilgang (RBAC)',
      description:
        'Bare teamet rundt en tjenestemottaker ser innholdet. Rollen bestemmer hva hver person kan gjøre.',
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
      title: 'Revisjonslogg',
      description: 'En logg over hvem som har sett og endret hva.',
      status: funksjonMerke('revisjonslogg', 'no'),
    },
  ],
  authTitle: 'Fleksible innloggingsmetoder',
  authIntro: 'Velg innloggingsmetoden som passer best for din organisasjon.',
  authMethods: [
    {
      title: 'ID-porten',
      description:
        'Innlogging med MinID, BankID, Buypass eller Commfides gjennom ID-porten. JodaCare krever sikkerhetsnivå betydelig.',
      status: funksjonMerke('id-porten', 'no'),
    },
    {
      title: 'Jobbkonto (Microsoft Entra ID)',
      description: 'Ansatte logger inn med jobbkontoen fra organisasjonen.',
      status: funksjonMerke('jobbkonto', 'no'),
    },
    {
      title: 'HelseID',
      description: 'Innlogging med HelseID for helsepersonell.',
      status: funksjonMerke('helseid', 'no'),
    },
  ],
  onboardingTitle: 'Slik kommer dere i gang',
  onboardingIntro: 'Dere trenger ikke installere noe. JodaCare gjør det tekniske oppsettet.',
  onboardingSteps: [
    {
      step: 1,
      title: 'Oppsett',
      description: 'JodaCare setter opp organisasjonen, tjenestestedet og det første teamet.',
    },
    {
      step: 2,
      title: 'Inviter teamet',
      description:
        'Den som forvalter teamet, sender invitasjon på e-post eller SMS. Lenken gjelder i sju dager. Den inviterte logger inn med ID-porten eller jobbkonto.',
    },
    {
      step: 3,
      title: 'Sett opp tilganger',
      description: 'Hver person får en rolle i teamet. Rollen bestemmer hva personen kan gjøre.',
    },
    { step: 4, title: 'Klar til bruk', description: 'Teamet kan begynne å skrive i Boka.' },
  ],
  integrationsBadge: 'Integrasjoner',
  integrationsTitle: 'Koble sammen systemene dine',
  integrationsIntro: 'JodaCare er designet for å spille sammen med resten av IT-landskapet i kommunen.',
  integrations: [
    {
      title: 'EPJ-integrasjon',
      description: 'Integrasjon mot elektroniske pasientjournaler for informasjonsflyt uten manuell overføring.',
      status: funksjonMerke('epj', 'no'),
    },
    {
      title: 'Azure AD / Entra ID-synkronisering',
      description: 'Automatisk synkronisering av brukere og grupper fra organisasjonens Microsoft Entra ID.',
      status: funksjonMerke('entra-synk', 'no'),
    },
    {
      title: 'E-postvarsler',
      description: 'Varsler på e-post.',
      status: modulMerke('varsler', 'no'),
    },
  ],
  aiBadge: 'KI i JodaCare',
  aiStatus: funksjonMerke('ki', 'no'),
  aiTitle: 'Kunstig intelligens, europeisk og personvernvennlig',
  aiIntro: 'KI i JodaCare skal bruke Mistral AI i Paris. Data skal ikke forlate Europa.',
  aiFeatures: [
    {
      title: 'KAI, KI-assistent for helsepersonell',
      description: 'KAI skal hjelpe deg å finne frem i JodaCare.',
      status: modulMerke('kai', 'no'),
    },
    {
      title: 'Intelligente sammendrag',
      description: 'Automatisk oppsummering.',
      status: funksjonMerke('ki', 'no'),
    },
  ],
  aiUpcomingStatus: modulMerke('hendelseslogg', 'no'),
  aiUpcoming: [
    {
      title: 'Hendelseslogg',
      description: 'Hendelsesloggen registrerer søvn, humør og adferd hver dag.',
    },
  ],
  aiFootnote:
    'KI i JodaCare skal være åpen om hva den gjør, ta vare på personvernet og følge gjeldende regelverk. KI-motoren skal være Mistral AI i Paris, Frankrike.',
  factsSr: 'Nøkkeltall',
  facts: [
    { value: 'Stockholm', label: 'Datalokasjon' },
    { value: 'TLS 1.3', label: 'Kryptering' },
    { value: 'EU', label: 'Datalagring' },
  ],
  ctaTitle: 'Vil du vite mer om teknologien?',
  ctaSubtitle: 'Ta kontakt for en gjennomgang tilpasset din organisasjons IT-krav.',
  ctaPrimary: 'Kontakt oss',
  ctaSecondary: 'Les om sikkerhet',
};

const en: TeknologiPageCopy = {
  aiImageAlt: 'Child flying a kite against a white sky',
  heroTitle: 'Modern technology built for care',
  heroSubtitle:
    'The new JodaCare is built from the ground up with security, usability and scalability at the core.',
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
      title: 'Use it in the browser, also on mobile',
      description:
        'JodaCare runs in the browser on phone, tablet and computer. You can add JodaCare to your home screen.',
    },
    {
      title: 'Dedicated app in the App Store and Google Play',
      description: 'JodaCare will get a dedicated app for phones and tablets.',
      status: funksjonMerke('egen-app', 'en'),
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
      description: 'Runs on European servers in Stockholm. All data stored in the EU.',
    },
    {
      title: 'Relational database',
      description: 'The data is stored in PostgreSQL. The database keeps the data consistent and reliable.',
    },
    {
      title: 'Continuous deployment',
      description: 'New versions are rolled out continuously. You always use the latest version.',
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
      title: 'Access is decided in the backend',
      description:
        'The backend decides access for every request. The client never decides who sees what.',
    },
    {
      title: 'Role-based access (RBAC)',
      description:
        'Only the team around a service recipient can see the content. The role decides what each person can do.',
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
      title: 'Audit log',
      description: 'A log of who viewed and changed what.',
      status: funksjonMerke('revisjonslogg', 'en'),
    },
  ],
  authTitle: 'Flexible sign-in methods',
  authIntro: 'Choose the sign-in method that best fits your organisation.',
  authMethods: [
    {
      title: 'ID-porten',
      description:
        'Sign in with MinID, BankID, Buypass or Commfides through ID-porten. JodaCare requires security level substantial.',
      status: funksjonMerke('id-porten', 'en'),
    },
    {
      title: 'Work account (Microsoft Entra ID)',
      description: "Staff sign in with their organisation's work account.",
      status: funksjonMerke('jobbkonto', 'en'),
    },
    {
      title: 'HelseID',
      description: 'Sign-in with HelseID for health personnel.',
      status: funksjonMerke('helseid', 'en'),
    },
  ],
  onboardingTitle: 'How to get started',
  onboardingIntro: 'There is nothing to install. JodaCare does the technical setup.',
  onboardingSteps: [
    {
      step: 1,
      title: 'Setup',
      description: 'JodaCare sets up the organisation, the service location and the first team.',
    },
    {
      step: 2,
      title: 'Invite the team',
      description:
        'The person who manages the team sends an invitation by email or text message. The link is valid for seven days. The invited person signs in with ID-porten or a work account.',
    },
    {
      step: 3,
      title: 'Configure access',
      description: 'Each person gets a role in the team. The role decides what the person can do.',
    },
    { step: 4, title: 'Ready to use', description: 'The team can start writing in Boka.' },
  ],
  integrationsBadge: 'Integrations',
  integrationsTitle: 'Connect your systems',
  integrationsIntro: 'JodaCare is designed to work alongside the rest of the municipality\'s IT landscape.',
  integrations: [
    {
      title: 'EHR integration',
      description: 'Integration with electronic patient records for information flow without manual transfer.',
      status: funksjonMerke('epj', 'en'),
    },
    {
      title: 'Azure AD / Entra ID sync',
      description: 'Automatic synchronisation of users and groups from Microsoft Entra ID.',
      status: funksjonMerke('entra-synk', 'en'),
    },
    {
      title: 'Email notifications',
      description: 'Email notifications.',
      status: modulMerke('varsler', 'en'),
    },
  ],
  aiBadge: 'AI in JodaCare',
  aiStatus: funksjonMerke('ki', 'en'),
  aiTitle: 'Artificial intelligence, European and privacy-conscious',
  aiIntro: 'AI in JodaCare will use Mistral AI in Paris. Data will not leave Europe.',
  aiFeatures: [
    {
      title: 'KAI, AI assistant for health staff',
      description: 'KAI will help you find your way around JodaCare.',
      status: modulMerke('kai', 'en'),
    },
    {
      title: 'Intelligent summaries',
      description: 'Automatic summaries.',
      status: funksjonMerke('ki', 'en'),
    },
  ],
  aiUpcomingStatus: modulMerke('hendelseslogg', 'en'),
  aiUpcoming: [
    {
      title: 'Incident log',
      description: 'The incident log records sleep, mood and behaviour every day.',
    },
  ],
  aiFootnote:
    'AI in JodaCare will be open about what it does, protect privacy and follow applicable regulation. The AI engine will be Mistral AI in Paris, France.',
  factsSr: 'Key figures',
  facts: [
    { value: 'Stockholm', label: 'Data location' },
    { value: 'TLS 1.3', label: 'Encryption' },
    { value: 'EU', label: 'Data storage' },
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
