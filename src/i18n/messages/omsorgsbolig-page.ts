import type { Locale } from '@/lib/i18n/types';

export type HubCard = { title: string; description: string };
export type HubStep = { step: string; title: string; description: string };
export type HubRelated = { title: string; description: string; href: string };

export type OmsorgsboligContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  secondaryCta: string;
  scenarioTitle: string;
  scenarioP1: string;
  scenarioP2: string;
  hubSectionTitle: string;
  hubPerspectives: HubCard[];
  featuresTitle: string;
  features: HubCard[];
  stepsSectionTitle: string;
  steps: HubStep[];
  statusBadge: string;
  statusTitle: string;
  statusP1: string;
  statusP2: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: HubRelated[];
};

const no: OmsorgsboligContent = {
  heroTitle: 'Beboeren er aldri alene. Familien er alltid nær.',
  heroSubtitle:
    'JodaCare Hub kobler beboer, familie og ansatte i én sammenhengende flyt gjennom en skjerm i leiligheten som alltid er på.',
  heroBadge: 'Omsorgsbolig og servicebolig',
  primaryCta: 'Kontakt oss for pilotplass',
  secondaryCta: 'Se hvordan Hub fungerer',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioP1:
    'Beboerne dine har familier som vil følge med, men som ikke vet hvordan. Pårørende ringer til avdelingen fordi det er den eneste måten de kan holde kontakten på. Ansatte bruker tid på å koordinere og videreformidle informasjon i stedet for å gi omsorg.',
  scenarioP2: 'Resultatet er at beboere kan føle seg isolerte, selv om det er folk rundt dem hele dagen.',
  hubSectionTitle: 'En skjerm i leiligheten, alltid på',
  hubPerspectives: [
    {
      title: 'For beboeren',
      description:
        'Bilder fra familien, kjente ansikter, kalender for dagen, musikk og enkle spill samles ett sted, slik at hverdagen får sammenheng.',
    },
    {
      title: 'For familien',
      description:
        'Familien sender bilder og meldinger direkte til skjermen, ser hva som skjer i hverdagen, og kan starte videosamtale uten at noen trenger å hjelpe beboeren med teknologien.',
    },
    {
      title: 'For ansatte',
      description:
        'Ansatte registrerer hendelseslogg, sjekklister og bekymringsmeldinger der jobben skjer, og slipper å huske og dokumentere etterpå ved en PC.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Hub-skjerm per leilighet',
      description:
        'Hub kjøres i nettleser på nettbrett, TV eller smart-display, slik at dere kan ta den i bruk på maskinvaren dere allerede har.',
    },
    {
      title: 'Familien sender direkte til skjermen',
      description:
        'Bilder og meldinger fra familien vises automatisk på skjermen, og beboeren slipper både passord og å laste ned en app.',
    },
    {
      title: 'Videosamtale med ett trykk',
      description:
        'Beboeren trykker på et kjent ansikt, og videosamtalen starter automatisk. Familien på den andre siden svarer rett i nettleseren.',
    },
    {
      title: 'Velferdskoordinator-dashboard',
      description:
        'Velferdskoordinator styrer aktiviteter, sender meldinger til alle beboere samtidig, og administrerer fellesrom og arrangementer fra ett sted.',
    },
    {
      title: 'Fellesarrangementer med påmelding',
      description:
        'Beboere og familie kan melde seg på arrangementer og ta oppgaver, slik at det bygges fellesskap i boligen.',
    },
    {
      title: 'IoT-sensorer valgfritt',
      description: 'Sensorer for dør, bevegelse og røyk kan kobles til via gateway, og varslene går alltid til ansatte slik at familien skånes for unødig uro.',
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
      description: 'Familier inviteres enkelt via lenke. De trenger ingen opplæring.',
    },
    {
      step: '4',
      title: 'Drift',
      description: 'Velferdskoordinator styrer hverdagen fra sitt dashboard, og vi er tilgjengelige hvis noe butter.',
    },
  ],
  statusBadge: 'Beta 2026',
  statusTitle: 'Bli med som pilotkommune',
  statusP1:
    'JodaCare Hub er i aktiv utvikling og tas i bruk av de første kommunene i løpet av 2026. Pilotkommuner får tett oppfølging og er med på å forme det endelige produktet.',
  statusP2: 'Pris settes basert på antall leiligheter og tjenestenivå. Ta kontakt for en uforpliktende samtale.',
  statusCta: 'Meld din kommune som pilotkommune',
  relatedTitle: 'Andre deler av JodaCare som styrker omsorgsboligen',
  readMore: 'Les mer',
  related: [
    {
      title: 'Familierom for pårørende',
      description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
      href: '/familie',
    },
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'JodaVisit for hjemmeboende',
      description: 'Videobesøk som erstatter unødvendige fysiske besøk. Kommer snart.',
      href: '/jodavisit',
    },
  ],
};

const en: OmsorgsboligContent = {
  heroTitle: 'Residents are never alone. Family is always close.',
  heroSubtitle:
    'JodaCare Hub connects resident, family and staff in one continuous flow through a screen in the flat that stays on.',
  heroBadge: 'Sheltered housing and supported living',
  primaryCta: 'Contact us for a pilot place',
  secondaryCta: 'See how Hub works',
  scenarioTitle: 'Does this sound familiar?',
  scenarioP1:
    'Your residents have families who want to stay involved, but who do not know how. Relatives call the ward because it is the only way they can stay in touch. Staff spend time coordinating and relaying information instead of providing care.',
  scenarioP2: 'The result can be that residents feel isolated even when people are around all day.',
  hubSectionTitle: 'One screen in the flat, always on',
  hubPerspectives: [
    {
      title: 'For the resident',
      description:
        'Photos from family, familiar faces, the day’s calendar, music and simple games. Everyday life gains continuity.',
    },
    {
      title: 'For the family',
      description:
        'Send photos and messages straight to the screen. See what is happening. Video calls without someone having to assist.',
    },
    {
      title: 'For staff',
      description:
        'Staff log events, checklists and concern notifications where the work happens, without having to remember and document afterwards at a PC.',
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Hub screen per flat',
      description:
        'Hub runs in the browser on tablet, TV or smart display, so you can use the hardware you already have.',
    },
    {
      title: 'Family sends straight to the screen',
      description:
        'Photos and messages from family appear automatically on the screen, and the resident needs no password or app download.',
    },
    {
      title: 'Video call in one tap',
      description:
        'The resident taps a familiar face, and the video call starts automatically. Family answers in the browser on the other side.',
    },
    {
      title: 'Welfare coordinator dashboard',
      description:
        'The welfare coordinator manages activities, messages all residents at once, and administers common areas and events from one place.',
    },
    {
      title: 'Shared events with sign-up',
      description:
        'Residents and family can sign up for events and take on tasks, helping to build community in the building.',
    },
    {
      title: 'Optional IoT sensors',
      description:
        'Sensors for door, motion and smoke can connect via a gateway, and alerts always go to staff so the family is spared unnecessary worry.',
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
        'JodaCare’s implementation lead helps configure Hub, flats and users.',
    },
    {
      step: '3',
      title: 'Onboarding families',
      description: 'Families are invited with a simple link. No training required.',
    },
    {
      step: '4',
      title: 'Operations',
      description: 'The welfare coordinator runs everyday life from the dashboard. We are available if anything sticks.',
    },
  ],
  statusBadge: 'Beta 2026',
  statusTitle: 'Join as a pilot municipality',
  statusP1:
    'JodaCare Hub is in active development and will be adopted by the first municipalities during 2026. Pilot sites receive close follow-up and help shape the final product.',
  statusP2: 'Pricing depends on number of flats and service level. Contact us for an informal conversation.',
  statusCta: 'Register your municipality as a pilot',
  relatedTitle: 'Other parts of JodaCare that strengthen the care home',
  readMore: 'Read more',
  related: [
    {
      title: 'Family room for relatives',
      description: 'Give the family one shared place for the everyday life of the person they love.',
      href: '/familie',
    },
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'JodaVisit for people at home',
      description: 'Video visits replacing unnecessary physical visits. Coming soon.',
      href: '/jodavisit',
    },
  ],
};

export function getOmsorgsboligContent(locale: Locale): OmsorgsboligContent {
  return locale === 'en' ? en : no;
}
