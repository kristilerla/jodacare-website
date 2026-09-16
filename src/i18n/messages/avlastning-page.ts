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
  priceNote: string;
  priceLinkText: string;
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
        'Jodabook har store knapper og kjente bilder, og barnet får det samme trygge grensesnittet i avlastningen som det kjenner fra hjemmet. Jodabook kommer Q1 2027.',
    },
    {
      title: 'For foreldrene',
      description:
        'Foreldrene følger med uten å måtte ringe, ser hva som skjer i hverdagen, sender bilder og meldinger, og kan opprette bekymringsmelding hvis noe ikke stemmer.',
    },
    {
      title: 'For ansatte',
      description:
        'Ansatte skriver i Boka der jobben skjer, og foreldrene ser det samme dagen. Hendelseslogg kommer Q4 2026.',
    },
    {
      title: 'For koordinator',
      description:
        'Koordinator setter opp team, plasserer ansatte og ser hvem som har tilgang til hva.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Boka: hverdagen delt mellom hjem og avlastning',
      description:
        'Ansatte skriver, foreldrene leser og svarer. Bilder og korte videoer følger med. Bare teamet rundt barnet ser innholdet.',
    },
    {
      title: 'Delte rutiner mellom hjem og avlastning (kommer Q4 2026)',
      description: 'Du oppretter rutiner én gang, og begge steder jobber etter dem.',
    },
    {
      title: 'Jodabook for barnet (kommer Q1 2027)',
      description: 'Jodabook har et enkelt grensesnitt tilpasset kognitive utfordringer, med innlogging via QR-kode, PIN eller biometri.',
    },
    {
      title: 'Hendelseslogg med delingskontroll (kommer Q4 2026)',
      description: 'Admin velger hvilke hendelsestyper foreldrene får se, og sensitive interne notater forblir innenfor avlastningens egne rammer.',
    },
    {
      title: 'Bekymringsmelding (kommer Q1 2027)',
      description:
        'Foreldre kan opprette bekymringsmelding direkte i appen, og meldingen følger en tydelig status-flyt fra opprettet til under behandling, besvart og lukket.',
    },
  ],
  statusBadge: 'Lanseres høst 2026',
  statusTitle: 'Slik bygges JodaCare for avlastning',
  statusBody:
    'Nye JodaCare lanseres høsten 2026 med Boka, kalender, beskjeder og team rundt hvert barn. Rutiner og hendelseslogg kommer Q4 2026, Jodabook og bekymringsmelding Q1 2027.',
  priceNote:
    'Lisens fra kr 2 990 per måned for inntil 10 tjenestemottakere, pluss oppstart.',
  priceLinkText: 'Se alle priser',
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
        'Jodabook with large buttons and familiar images. The same reassuring interface as at home, available in respite too. Jodabook arrives in Q1 2027.',
    },
    {
      title: 'For parents',
      description:
        'Stay informed without calling constantly. See what happens, share photos and messages, and send a concern notification if something is wrong.',
    },
    {
      title: 'For staff',
      description:
        'Staff write in Boka where the work happens, and parents see it the same day. The event log arrives in Q4 2026.',
    },
    {
      title: 'For the coordinator',
      description:
        'The coordinator sets up teams, places staff and sees who has access to what.',
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Boka: everyday life shared between home and respite',
      description:
        'Staff write, parents read and reply. Photos and short videos come along. Only the team around the child sees the content.',
    },
    {
      title: 'Shared routines between home and respite (coming Q4 2026)',
      description: 'Create routines once. Both sides work from the same plan.',
    },
    {
      title: 'Jodabook for the child (coming Q1 2027)',
      description: 'A simple interface adapted to cognitive challenges. QR sign-in, PIN and biometrics.',
    },
    {
      title: 'Event log with sharing control (coming Q4 2026)',
      description: 'Admins choose which event types parents see. Sensitive notes stay internal.',
    },
    {
      title: 'Concern notification (coming Q1 2027)',
      description:
        'Parents can send a concern directly in the app. Status flow: Created → In progress → Answered → Closed.',
    },
  ],
  statusBadge: 'Launching autumn 2026',
  statusTitle: 'How JodaCare for respite is being built',
  statusBody:
    'The new JodaCare launches in autumn 2026 with Boka, calendar, messages and a team around each child. Routines and the event log arrive in Q4 2026, Jodabook and concern notifications in Q1 2027.',
  priceNote:
    'Licence from NOK 2,990 per month for up to 10 service recipients, plus onboarding.',
  priceLinkText: 'See all prices',
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
