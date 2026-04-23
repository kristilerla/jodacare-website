import type { Locale } from '@/lib/i18n/types';

export type AvCard = { title: string; description: string };
export type AvRelated = { title: string; description: string; href: string };

export type AvlastningContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  scenarioTitle: string;
  scenarioBody: string;
  perspectivesTitle: string;
  perspectives: AvCard[];
  featuresTitle: string;
  features: AvCard[];
  statusBadge: string;
  statusTitle: string;
  statusBody: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: AvRelated[];
};

const no: AvlastningContent = {
  heroTitle: 'De samme rutinene. Den samme tryggheten. Uansett hvor barnet er.',
  heroSubtitle:
    'JodaCare skaper kontinuitet mellom hjem og avlastning — slik at barnet møter de samme forventningene, de samme bildene og den samme forståelsen uansett hvem som er på jobb.',
  heroBadge: 'Avlastning og barn med utviklingshemming',
  primaryCta: 'Kontakt oss',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'Barnet er vant til bestemte rutiner hjemme. I avlastningen er det andre ansatte, andre regler og et annet miljø. Foreldrene er bekymret og ringer for å sjekke. Ansatte i avlastningen kjenner ikke barnet godt nok og må gjette seg frem. Resultatet er uro — for barnet, for familien og for de ansatte.',
  perspectivesTitle: 'Én plattform for alle rundt barnet',
  perspectives: [
    {
      title: 'For barnet',
      description:
        'Jodabook med store knapper og kjente bilder. Det trygge grensesnittet barnet kjenner fra hjemmet, tilgjengelig i avlastningen også.',
    },
    {
      title: 'For foreldrene',
      description:
        'Følg med uten å måtte ringe. Se hva som skjer, send bilder og meldinger, og send bekymringsmelding hvis noe ikke stemmer.',
    },
    {
      title: 'For ansatte',
      description:
        'Delte rutiner mellom hjem og avlastning. Alle vet hva som forventes. Hendelseslogg loggfører det som skjer.',
    },
    {
      title: 'For koordinator',
      description:
        'Full oversikt over alle barn, team og tjenestesteder. Delingskontroll bestemmer hva foreldrene ser.',
    },
  ],
  featuresTitle: 'Alt som trengs. Ingenting som ikke trengs.',
  features: [
    {
      title: 'Delte rutiner mellom hjem og avlastning',
      description: 'Opprett rutiner én gang. Begge steder jobber etter dem.',
    },
    {
      title: 'Jodabook for barnet',
      description: 'Enkelt grensesnitt tilpasset kognitive utfordringer. QR-innlogging, PIN og biometri.',
    },
    {
      title: 'Delingskontroll for hendelseslogg',
      description: 'Admin velger hvilke hendelsestyper foreldrene ser. Sensitive notater forblir interne.',
    },
    {
      title: 'Bekymringsmelding',
      description:
        'Foreldre kan sende bekymringsmelding direkte i appen. Status-flyt: Opprettet → Under behandling → Besvart → Lukket.',
    },
  ],
  statusBadge: 'Kommer',
  statusTitle: 'Under utvikling — ta kontakt for mer informasjon',
  statusBody:
    'JodaCare for avlastning er under utvikling som del av JodaCare 2.0. Ta kontakt for å høre mer eller melde interesse.',
  statusCta: 'Meld interesse',
  relatedTitle: 'Henger godt sammen med',
  readMore: 'Les mer',
  related: [
    {
      title: 'BPA — brukerstyrt personlig assistanse',
      description: 'JodaCare for BPA-ordninger med foresatte som arbeidsledere.',
      href: '/bpa',
    },
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'Omsorgsbolig og Hub',
      description: 'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten.',
      href: '/omsorgsbolig',
    },
  ],
};

const en: AvlastningContent = {
  heroTitle: 'The same routines. The same sense of safety. Wherever the child is.',
  heroSubtitle:
    'JodaCare creates continuity between home and respite — so the child meets the same expectations, the same images and the same understanding no matter who is on shift.',
  heroBadge: 'Respite care and children with intellectual disabilities',
  primaryCta: 'Contact us',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'The child is used to certain routines at home. In respite there are other staff, other rules and another environment. Parents worry and call to check. Respite staff do not know the child well enough and have to guess. The result is unease — for the child, the family and staff.',
  perspectivesTitle: 'One platform for everyone around the child',
  perspectives: [
    {
      title: 'For the child',
      description:
        'Jodabook with large buttons and familiar images. The same reassuring interface as at home, available in respite too.',
    },
    {
      title: 'For parents',
      description:
        'Stay informed without calling constantly. See what happens, share photos and messages, and send a concern notification if something is wrong.',
    },
    {
      title: 'For staff',
      description:
        'Shared routines between home and respite. Everyone knows what is expected. The event log records what happens.',
    },
    {
      title: 'For the coordinator',
      description:
        'Full overview of children, teams and locations. Sharing controls decide what parents can see.',
    },
  ],
  featuresTitle: 'Everything you need. Nothing you do not.',
  features: [
    {
      title: 'Shared routines between home and respite',
      description: 'Create routines once. Both sides work from the same plan.',
    },
    {
      title: 'Jodabook for the child',
      description: 'A simple interface adapted to cognitive challenges. QR sign-in, PIN and biometrics.',
    },
    {
      title: 'Sharing control for the event log',
      description: 'Admins choose which event types parents see. Sensitive notes stay internal.',
    },
    {
      title: 'Concern notification',
      description:
        'Parents can send a concern directly in the app. Status flow: Created → In progress → Answered → Closed.',
    },
  ],
  statusBadge: 'Coming',
  statusTitle: 'In development — contact us for more information',
  statusBody:
    'JodaCare for respite is being developed as part of JodaCare 2.0. Get in touch to learn more or register interest.',
  statusCta: 'Register interest',
  relatedTitle: 'Goes well together with',
  readMore: 'Read more',
  related: [
    {
      title: 'User-controlled personal assistance (BPA)',
      description: 'JodaCare for BPA schemes with guardians as employers.',
      href: '/bpa',
    },
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'Care home and Hub',
      description: 'JodaCare Hub connects resident, family and staff through a screen in the flat.',
      href: '/omsorgsbolig',
    },
  ],
};

export function getAvlastningContent(locale: Locale): AvlastningContent {
  return locale === 'en' ? en : no;
}
