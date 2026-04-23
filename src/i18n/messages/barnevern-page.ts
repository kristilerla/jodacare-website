import type { Locale } from '@/lib/i18n/types';

export type BvCard = { title: string; description: string };
export type BvRelated = { title: string; description: string; href: string };

export type BarnevernContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  scenarioTitle: string;
  scenarioBody: string;
  rolesTitle: string;
  roles: BvCard[];
  featuresTitle: string;
  features: BvCard[];
  statusBadge: string;
  statusTitle: string;
  statusBody: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: BvRelated[];
};

const no: BarnevernContent = {
  heroTitle: 'Samvær dokumentert trygt. Alle parter vet hva som gjelder.',
  heroSubtitle:
    'JodaCare gir saksbehandlere, fosterforeldre og biologiske foreldre et trygt digitalt verktøy for samværsoppfølging — med informasjonsbarrierer som beskytter barnet og full sporbarhet som tilfredsstiller lovkravene.',
  heroBadge: 'Barnevern og samvær',
  primaryCta: 'Kontakt oss',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'Samvær skal dokumenteres presist. Papir og e-post holder ikke mål. Informasjon som ikke skal deles, kan lekke mellom parter. Audit trail er ufullstendig. Saksbehandler har ikke god nok oversikt.',
  rolesTitle: 'Fire roller — tydelige grenser',
  roles: [
    {
      title: 'Saksbehandler',
      description:
        'Full oversikt over alle samværsplaner og status. Oppretter planer, følger opp og har tilgang til komplett audit trail.',
    },
    {
      title: 'Fosterforelder',
      description:
        'Bekrefter og gjennomfører samvær. Ser kun det de skal se — aldri biologisk forelders notater.',
    },
    {
      title: 'Biologisk forelder',
      description: 'Ser samværsplan og status for egne samvær. Strikt informasjonsbarriere mot fosterhjemmet.',
    },
    {
      title: 'Støtteperson',
      description: 'Kan delta i samvær og se relevant informasjon innenfor sin rolle.',
    },
  ],
  featuresTitle: 'Alt som trengs. Ingenting som ikke trengs.',
  features: [
    {
      title: 'Samværsplaner med status-flyt',
      description: 'Planlagt → Bekreftet → Gjennomført / Avlyst / Ikke oppmøtt. Tydelig og dokumentert.',
    },
    {
      title: 'Informasjonsbarrierer',
      description:
        'Biologisk forelder ser aldri fosterforelders notater. Teknisk håndhevet, ikke bare rutinebasert.',
    },
    {
      title: 'Full audit trail',
      description: 'Alle handlinger loggføres med tidsstempel og bruker-ID. Tilgjengelig for saksbehandler.',
    },
    {
      title: 'Rollebasert tilgang',
      description: 'Fire distinkte roller med ulike rettigheter. Ingen kan se mer enn de skal.',
    },
    {
      title: 'Regulatorisk forankring',
      description: 'Barnevernsloven, forvaltningsloven og GDPR er hensyntatt i arkitekturen.',
    },
  ],
  statusBadge: 'Kommer',
  statusTitle: 'Under utvikling',
  statusBody:
    'JodaCare for barnevern er under utvikling. Ta kontakt for å melde interesse eller høre mer om tidsplan.',
  statusCta: 'Meld interesse',
  relatedTitle: 'Henger godt sammen med',
  readMore: 'Les mer',
  related: [
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'Omsorgsbolig og Hub',
      description: 'Koble beboer, familie og ansatte gjennom en skjerm i leiligheten.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Avlastning for barn',
      description: 'Trygg samhandling mellom avlastningsfamilie, foreldre og kommune.',
      href: '/avlastning',
    },
  ],
};

const en: BarnevernContent = {
  heroTitle: 'Contact visits documented safely. Everyone knows the rules.',
  heroSubtitle:
    'JodaCare gives case workers, foster carers and birth parents a secure digital tool for supervised contact — with information barriers that protect the child and full traceability that meets legal requirements.',
  heroBadge: 'Child welfare and contact visits',
  primaryCta: 'Contact us',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'Contact visits must be documented precisely. Paper and email fall short. Information that must not be shared can leak between parties. The audit trail is incomplete. Case workers lack a clear overview.',
  rolesTitle: 'Four roles — clear boundaries',
  roles: [
    {
      title: 'Case worker',
      description:
        'Full overview of all contact plans and status. Creates plans, follows up and has access to a complete audit trail.',
    },
    {
      title: 'Foster carer',
      description: 'Confirms and carries out contact. Sees only what they should — never the birth parent’s notes.',
    },
    {
      title: 'Birth parent',
      description: 'Sees contact plan and status for their own visits. Strict information barrier towards the foster home.',
    },
    {
      title: 'Support person',
      description: 'Can take part in contact and see relevant information within their role.',
    },
  ],
  featuresTitle: 'Everything you need. Nothing you do not.',
  features: [
    {
      title: 'Contact plans with status flow',
      description: 'Planned → Confirmed → Completed / Cancelled / No-show. Clear and documented.',
    },
    {
      title: 'Information barriers',
      description:
        'The birth parent never sees the foster carers’ notes. Enforced in the product, not only by procedure.',
    },
    {
      title: 'Full audit trail',
      description: 'Every action is logged with timestamp and user ID. Available to the case worker.',
    },
    {
      title: 'Role-based access',
      description: 'Four distinct roles with different permissions. Nobody sees more than they should.',
    },
    {
      title: 'Regulatory alignment',
      description: 'The Child Welfare Act, the Public Administration Act and the GDPR are reflected in the architecture.',
    },
  ],
  statusBadge: 'Coming',
  statusTitle: 'In development',
  statusBody:
    'JodaCare for child welfare is in development. Contact us to register interest or hear more about the timeline.',
  statusCta: 'Register interest',
  relatedTitle: 'Goes well together with',
  readMore: 'Read more',
  related: [
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'Care home and Hub',
      description: 'Connect resident, family and staff through a screen in the flat.',
      href: '/omsorgsbolig',
    },
    {
      title: 'Respite care for children',
      description: 'Secure collaboration between respite home, parents and municipality.',
      href: '/avlastning',
    },
  ],
};

export function getBarnevernContent(locale: Locale): BarnevernContent {
  return locale === 'en' ? en : no;
}
