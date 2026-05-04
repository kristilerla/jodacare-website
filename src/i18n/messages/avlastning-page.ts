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
  heroTitle: 'De samme rutinene og den samme tryggheten, uansett hvor barnet er.',
  heroSubtitle:
    'JodaCare skaper kontinuitet mellom hjem og avlastning, slik at barnet møter de samme forventningene, de samme bildene og den samme forståelsen uansett hvem som er på jobb.',
  heroBadge: 'Avlastning og barn med utviklingshemming',
  primaryCta: 'Kontakt oss',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'Barnet er vant til bestemte rutiner hjemme, men i avlastningen møter det andre ansatte, andre regler og et annet miljø. Foreldrene blir bekymret og ringer for å sjekke, og ansatte i avlastningen kjenner ikke barnet godt nok til å unngå å måtte gjette seg frem. Resultatet er uro for barnet, for familien og for de ansatte.',
  perspectivesTitle: 'Én plattform for alle rundt barnet',
  perspectives: [
    {
      title: 'For barnet',
      description:
        'Jodabook har store knapper og kjente bilder, og barnet får det samme trygge grensesnittet i avlastningen som det kjenner fra hjemmet.',
    },
    {
      title: 'For foreldrene',
      description:
        'Foreldrene følger med uten å måtte ringe, ser hva som skjer i hverdagen, sender bilder og meldinger, og kan opprette bekymringsmelding hvis noe ikke stemmer.',
    },
    {
      title: 'For ansatte',
      description:
        'Ansatte jobber etter delte rutiner mellom hjem og avlastning, vet hva som forventes, og hendelsesloggen dokumenterer det som skjer underveis.',
    },
    {
      title: 'For koordinator',
      description:
        'Koordinator har full oversikt over alle barn, team og tjenestesteder, og delingskontroll bestemmer hva foreldrene får se.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Delte rutiner mellom hjem og avlastning',
      description: 'Du oppretter rutiner én gang, og begge steder jobber etter dem.',
    },
    {
      title: 'Jodabook for barnet',
      description: 'Jodabook har et enkelt grensesnitt tilpasset kognitive utfordringer, med innlogging via QR-kode, PIN eller biometri.',
    },
    {
      title: 'Delingskontroll for hendelseslogg',
      description: 'Admin velger hvilke hendelsestyper foreldrene får se, og sensitive interne notater forblir innenfor avlastningens egne rammer.',
    },
    {
      title: 'Bekymringsmelding',
      description:
        'Foreldre kan opprette bekymringsmelding direkte i appen, og meldingen følger en tydelig status-flyt fra opprettet til under behandling, besvart og lukket.',
    },
  ],
  statusBadge: 'Kommer',
  statusTitle: 'Slik bygges JodaCare for avlastning',
  statusBody:
    'JodaCare for avlastning er under aktiv utvikling som del av JodaCare 2.0. Ta kontakt for å høre mer eller melde din kommune som pilot.',
  statusCta: 'Meld interesse',
  relatedTitle: 'Andre deler av JodaCare som styrker avlastningen',
  readMore: 'Les mer',
  related: [
    {
      title: 'BPA, brukerstyrt personlig assistanse',
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
  heroTitle: 'The same routines and the same sense of safety, wherever the child is.',
  heroSubtitle:
    'JodaCare creates continuity between home and respite, so the child meets the same expectations, the same images and the same understanding no matter who is on shift.',
  heroBadge: 'Respite care and children with intellectual disabilities',
  primaryCta: 'Contact us',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'The child is used to certain routines at home, but in respite they meet other staff, other rules and another environment. Parents worry and call to check, and respite staff do not know the child well enough to avoid guessing. The result is unease for the child, the family and staff.',
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
  featuresTitle: 'Features for everyday life',
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
  statusTitle: 'How JodaCare for respite is being built',
  statusBody:
    'JodaCare for respite is being developed as part of JodaCare 2.0. Get in touch to learn more or register interest.',
  statusCta: 'Register interest',
  relatedTitle: 'Other parts of JodaCare that strengthen respite care',
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
