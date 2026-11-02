import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke, funksjonMerke } from './status';
import type { StatusVisning } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type HubCard = { title: string; description: string; status?: StatusVisning };
export type HubStep = { step: string; title: string; description: string };
export type HubRelated = { title: string; description: string; href: string; status?: StatusVisning };

export type OmsorgsboligContent = {
  heroImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroStatus: StatusVisning;
  /** Rolig informasjonsboks under hero, om hva som er klart når. */
  noticeBody: string;
  primaryCta: string;
  secondaryCta: string;
  scenarioTitle: string;
  scenarioP1: string;
  scenarioP2: string;
  hubSectionTitle: string;
  hubSectionStatus: StatusVisning;
  hubPerspectives: HubCard[];
  featuresTitle: string;
  features: HubCard[];
  stepsSectionTitle: string;
  steps: HubStep[];
  statusBadge: string;
  statusTitle: string;
  statusP1: string;
  statusP2: string;
  priceNote: string;
  priceLinkText: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: HubRelated[];
};

const no: OmsorgsboligContent = {
  heroImageAlt: 'Eldre person leser på en benk under blomstrende trær',
  heroTitle: 'Beboeren er aldri alene. Familien er alltid nær.',
  heroSubtitle:
    'JodaCare Hub skal koble beboer, familie og ansatte i én sammenhengende flyt gjennom en skjerm i leiligheten som alltid er på.',
  heroBadge: 'Omsorgsbolig og servicebolig',
  heroStatus: getStatusVisning('omsorgsbolig-hub', 'no'),
  noticeBody:
    `Grunnmodulen med Boka, beskjeder og team er tilgjengelig for omsorgsbolig. JodaCare Hub er under utvikling med pilot i 2027. Kalender: ${modulMerke('kalender', 'no').tekst}.`,
  primaryCta: 'Kontakt oss for pilotplass',
  secondaryCta: 'Se hvordan Hub fungerer',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioP1:
    'Beboerne dine har familier som vil følge med, men som ikke vet hvordan. Pårørende ringer til avdelingen fordi det er den eneste måten de kan holde kontakten på. Ansatte bruker tid på å koordinere og videreformidle informasjon i stedet for å gi omsorg.',
  scenarioP2: 'Resultatet er at beboere kan føle seg isolerte, selv om det er folk rundt dem hele dagen.',
  hubSectionTitle: 'En skjerm i leiligheten, alltid på',
  hubSectionStatus: modulMerke('hub', 'no'),
  hubPerspectives: [
    {
      title: 'For beboeren',
      description:
        `Bilder fra familien, kjente ansikter, musikk og enkle spill skal samles ett sted, slik at hverdagen får sammenheng. Kalender for dagen: ${modulMerke('kalender', 'no').tekst}.`,
    },
    {
      title: 'For familien',
      description:
        `Familien skriver i Boka og sender beskjeder. Med Hub skal innholdet vises på skjermen. Videosamtale: ${modulMerke('video', 'no').tekst}.`,
    },
    {
      title: 'For ansatte',
      description:
        `Ansatte skriver i Boka der jobben skjer. Hendelseslogg: ${modulMerke('hendelseslogg', 'no').tekst}. Sjekklister: ${modulMerke('sjekklister-og-rutiner', 'no').tekst}. Bekymringsmelding: ${modulMerke('bekymringsmelding', 'no').tekst}.`,
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Hub-skjerm per leilighet',
      description:
        'Hub skal kjøres i nettleser på nettbrett, TV eller smart-display, slik at dere kan bruke maskinvaren dere allerede har.',
      status: modulMerke('hub', 'no'),
    },
    {
      title: 'Familien sender direkte til skjermen',
      description:
        'Bilder og beskjeder fra familien skal vises automatisk på skjermen. Beboeren skal slippe både passord og å laste ned en app.',
      status: modulMerke('hub', 'no'),
    },
    {
      title: 'Videosamtale med ett trykk',
      description:
        'Beboeren skal kunne trykke på et kjent ansikt for å starte videosamtalen. Familien svarer rett i nettleseren.',
      status: modulMerke('video', 'no'),
    },
    {
      title: 'Oversikt for ansatte',
      description:
        'Ansatte skal kunne sende beskjeder til alle beboere og ha oversikt over fellesrom og arrangementer.',
      status: funksjonMerke('oversikt-ansatte', 'no'),
    },
    {
      title: 'Fellesarrangementer med påmelding',
      description:
        'Beboere og familie skal kunne melde seg på arrangementer, slik at det bygges fellesskap i boligen.',
      status: modulMerke('fellesarrangementer', 'no'),
    },
  ],
  stepsSectionTitle: 'Enkelt å innføre. Vi hjelper hele veien.',
  steps: [
    {
      step: '1',
      title: 'Pilotavdeling',
      description: 'Vi starter med én avdeling eller én etasje. Du trenger ikke rulle ut til alle på én gang.',
    },
    {
      step: '2',
      title: 'Oppsett',
      description:
        'JodaCares Implementeringsansvarlig hjelper med oppsett av kompleks, leiligheter og brukere.',
    },
    {
      step: '3',
      title: 'Onboarding av familier',
      description: 'Familien får invitasjon på e-post eller SMS. Lenken gjelder i sju dager. De logger inn med ID-porten.',
    },
    {
      step: '4',
      title: 'Drift',
      description: 'Lederen for tjenestestedet følger opp i hverdagen. Vi er tilgjengelige hvis noe butter.',
    },
  ],
  statusBadge: getStatusVisning('omsorgsbolig-hub', 'no').tekst,
  statusTitle: 'Bli med som pilotkommune',
  statusP1:
    'JodaCare Hub er under utvikling og prøves ut sammen med de første kommunene i 2027. Pilotkommuner får tett oppfølging og er med på å forme det endelige produktet.',
  statusP2: 'Ta kontakt for en uforpliktende samtale om en pilotplass.',
  priceNote:
    `${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} beboere, pluss oppstart ${formaterPris(priser.oppstart)} én gang. Hub prises separat når modulen er ferdig.`,
  priceLinkText: 'Se alle priser',
  statusCta: 'Meld din kommune som pilotkommune',
  relatedTitle: 'Andre deler av JodaCare som styrker omsorgsboligen',
  readMore: 'Les mer',
  related: [
    {
      title: 'Familierom for pårørende',
      description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
      href: '/familie',
      status: getStatusVisning('familierom', 'no'),
    },
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'JodaVisit for hjemmeboende',
      description: 'Videobesøk som skal erstatte unødvendige fysiske besøk.',
      href: '/jodavisit',
      status: getStatusVisning('jodavisit', 'no'),
    },
  ],
};

const en: OmsorgsboligContent = {
  heroImageAlt: 'Older person reading on a bench under blossoming trees',
  heroTitle: 'Residents are never alone. Family is always close.',
  heroSubtitle:
    'JodaCare Hub will connect resident, family and staff in one continuous flow through a screen in the flat that stays on.',
  heroBadge: 'Sheltered housing and supported living',
  heroStatus: getStatusVisning('omsorgsbolig-hub', 'en'),
  noticeBody:
    `The core module with Boka, notices and team is available for sheltered housing. JodaCare Hub is under development with a pilot in 2027. Calendar: ${modulMerke('kalender', 'en').tekst}.`,
  primaryCta: 'Contact us for a pilot place',
  secondaryCta: 'See how Hub works',
  scenarioTitle: 'Does this sound familiar?',
  scenarioP1:
    'Your residents have families who want to stay involved, but who do not know how. Relatives call the ward because it is the only way they can stay in touch. Staff spend time coordinating and relaying information instead of providing care.',
  scenarioP2: 'The result can be that residents feel isolated even when people are around all day.',
  hubSectionTitle: 'One screen in the flat, always on',
  hubSectionStatus: modulMerke('hub', 'en'),
  hubPerspectives: [
    {
      title: 'For the resident',
      description:
        `Photos from family, familiar faces, music and simple games will be gathered in one place, so everyday life gains continuity. Calendar for the day: ${modulMerke('kalender', 'en').tekst}.`,
    },
    {
      title: 'For the family',
      description:
        `The family writes in Boka and sends notices. With Hub, the content will appear on the screen. Video call: ${modulMerke('video', 'en').tekst}.`,
    },
    {
      title: 'For staff',
      description:
        `Staff write in Boka where the work happens. Event log: ${modulMerke('hendelseslogg', 'en').tekst}. Checklists: ${modulMerke('sjekklister-og-rutiner', 'en').tekst}. Concern report: ${modulMerke('bekymringsmelding', 'en').tekst}.`,
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Hub screen per flat',
      description:
        'Hub will run in the browser on tablet, TV or smart display, so you can use the hardware you already have.',
      status: modulMerke('hub', 'en'),
    },
    {
      title: 'Family sends straight to the screen',
      description:
        'Photos and notices from family will appear automatically on the screen. The resident will need no password or app download.',
      status: modulMerke('hub', 'en'),
    },
    {
      title: 'Video call in one tap',
      description:
        'The resident will be able to tap a familiar face to start the video call. Family answers in the browser.',
      status: modulMerke('video', 'en'),
    },
    {
      title: 'Overview for staff',
      description:
        'Staff will be able to send notices to all residents and keep an overview of common areas and events.',
      status: funksjonMerke('oversikt-ansatte', 'en'),
    },
    {
      title: 'Shared events with sign-up',
      description:
        'Residents and family will be able to sign up for events, helping to build community in the building.',
      status: modulMerke('fellesarrangementer', 'en'),
    },
  ],
  stepsSectionTitle: 'Straightforward to roll out. We support you all the way.',
  steps: [
    {
      step: '1',
      title: 'Pilot ward',
      description: 'We start with one ward or one floor. You do not need to roll out to everyone at once.',
    },
    {
      step: '2',
      title: 'Setup',
      description:
        'JodaCare’s implementation lead helps set up the complex, flats and users.',
    },
    {
      step: '3',
      title: 'Onboarding families',
      description: 'The family gets an invitation by email or SMS. The link is valid for seven days. They sign in with ID-porten.',
    },
    {
      step: '4',
      title: 'Operations',
      description: 'The manager of the service location follows up in everyday life. We are available if anything sticks.',
    },
  ],
  statusBadge: getStatusVisning('omsorgsbolig-hub', 'en').tekst,
  statusTitle: 'Join as a pilot municipality',
  statusP1:
    'JodaCare Hub is under development and is being trialled with the first municipalities in 2027. Pilot sites receive close follow-up and help shape the final product.',
  statusP2: 'Contact us for an informal conversation about a pilot place.',
  priceNote:
    `${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} residents, plus onboarding ${formaterPrisEn(priser.oppstart)} one off. Hub is priced separately once the module is finished.`,
  priceLinkText: 'See all prices',
  statusCta: 'Register your municipality as a pilot',
  relatedTitle: 'Other parts of JodaCare that strengthen the care home',
  readMore: 'Read more',
  related: [
    {
      title: 'Family room for relatives',
      description: 'Give the family one shared place for the everyday life of the person they love.',
      href: '/familie',
      status: getStatusVisning('familierom', 'en'),
    },
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'JodaVisit for people at home',
      description: 'Video visits that will replace unnecessary physical visits.',
      href: '/jodavisit',
      status: getStatusVisning('jodavisit', 'en'),
    },
  ],
};

export function getOmsorgsboligContent(locale: Locale): OmsorgsboligContent {
  return locale === 'en' ? en : no;
}
