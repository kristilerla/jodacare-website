import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke } from './status';
import type { StatusVisning } from './status';
import { formaterPris, formaterPrisEn, aar2, priser } from '@/lib/fakta';

export type AvCard = { title: string; description: string; status?: StatusVisning };
export type AvRelated = { title: string; description: string; href: string; status?: StatusVisning };
export type AvStatusItem = { label: string; status: StatusVisning };

export type AvlastningContent = {
  heroImageAlt: string;
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
  statusItems: AvStatusItem[];
  priceNote: string;
  priceLinkText: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: AvRelated[];
};

const no: AvlastningContent = {
  heroImageAlt: 'Barn titter frem bak en rød stolpe',
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
      status: modulMerke('jodabook', 'no'),
    },
    {
      title: 'For foreldrene',
      description:
        `Foreldrene følger med uten å måtte ringe. De skriver i Boka og sender beskjeder til teamet. Bekymringsmelding: ${modulMerke('bekymringsmelding', 'no').tekst}.`,
    },
    {
      title: 'For ansatte',
      description:
        `Ansatte skriver i Boka der jobben skjer, og foreldrene ser det samme dagen. Hendelseslogg: ${modulMerke('hendelseslogg', 'no').tekst}.`,
    },
    {
      title: 'For skolen og dagtilbudet',
      description:
        'Barnet er hjemme, på avlastning og på skole eller i dagtilbud. Lærere og ansatte i dagtilbudet kan være med i teamet rundt barnet, sammen med familien og avlastningen. De skriver og leser i Boka sammen med resten av teamet.',
    },
    {
      title: 'For lederen for tjenestestedet',
      description: 'Lederen for tjenestestedet setter opp team og ser hvem som har tilgang til hva.',
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
      title: 'Delte rutiner mellom hjem og avlastning',
      description: 'Du oppretter rutiner én gang, og begge steder jobber etter dem.',
      status: modulMerke('sjekklister-og-rutiner', 'no'),
    },
    {
      title: 'Jodabook for barnet',
      description: 'Jodabook har et enkelt grensesnitt tilpasset kognitive utfordringer, med innlogging via QR-kode, PIN eller biometri.',
      status: modulMerke('jodabook', 'no'),
    },
    {
      title: 'Hendelseslogg',
      description: 'Ansatte registrerer hendelser rundt barnet.',
      status: modulMerke('hendelseslogg', 'no'),
    },
    {
      title: 'Bekymringsmelding',
      description: 'Foreldre kan opprette en bekymringsmelding i JodaCare. Den har status fra opprettet til lukket.',
      status: modulMerke('bekymringsmelding', 'no'),
    },
  ],
  statusBadge: getStatusVisning('avlastning', 'no').tekst,
  statusTitle: 'Slik bygges JodaCare for avlastning',
  statusBody:
    'Nye JodaCare er i bruk med Boka, beskjeder og team rundt hvert barn. Dette kommer senere:',
  statusItems: [
    { label: 'Kalender', status: modulMerke('kalender', 'no') },
    { label: 'Rutiner', status: modulMerke('sjekklister-og-rutiner', 'no') },
    { label: 'Hendelseslogg', status: modulMerke('hendelseslogg', 'no') },
    { label: 'Jodabook', status: modulMerke('jodabook', 'no') },
    { label: 'Bekymringsmelding', status: modulMerke('bekymringsmelding', 'no') },
  ],
  priceNote:
    `${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} tjenestemottakere, pluss oppstart ${formaterPris(priser.oppstart)} én gang.`,
  priceLinkText: 'Se alle priser',
  statusCta: 'Meld interesse',
  relatedTitle: 'Andre deler av JodaCare som styrker avlastningen',
  readMore: 'Les mer',
  related: [
    {
      title: 'BPA, brukerstyrt personlig assistanse',
      description: 'JodaCare for BPA-ordninger med foresatte som arbeidsledere.',
      href: '/bpa',
      status: modulMerke('bpa', 'no'),
    },
    {
      title: 'Vi hjelper med implementeringen',
      description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
      href: '/implementering',
    },
    {
      title: 'Omsorgsbolig og Hub',
      description: 'JodaCare Hub skal koble beboer, familie og ansatte gjennom en skjerm i leiligheten.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'no'),
    },
  ],
};

const en: AvlastningContent = {
  heroImageAlt: 'Child peeking out from behind a red post',
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
        'Jodabook has large buttons and familiar images, and the child gets the same reassuring interface in respite as at home.',
      status: modulMerke('jodabook', 'en'),
    },
    {
      title: 'For parents',
      description:
        `Parents stay informed without having to call. They write in Boka and send notices to the team. Concern notification: ${modulMerke('bekymringsmelding', 'en').tekst}.`,
    },
    {
      title: 'For staff',
      description:
        `Staff write in Boka where the work happens, and parents see it the same day. Incident log: ${modulMerke('hendelseslogg', 'en').tekst}.`,
    },
    {
      title: 'For school and day services',
      description:
        'The child is at home, in respite and at school or a day service. Teachers and day-service staff can be part of the team around the child, together with the family and respite staff. They write and read in Boka with the rest of the team.',
    },
    {
      title: 'For the service location manager',
      description: 'The service location manager sets up teams and sees who has access to what.',
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
      title: 'Shared routines between home and respite',
      description: 'You create routines once, and both places work from them.',
      status: modulMerke('sjekklister-og-rutiner', 'en'),
    },
    {
      title: 'Jodabook for the child',
      description: 'Jodabook has a simple interface adapted to cognitive challenges, with sign-in by QR code, PIN or biometrics.',
      status: modulMerke('jodabook', 'en'),
    },
    {
      title: 'Incident log',
      description: 'Staff record events around the child.',
      status: modulMerke('hendelseslogg', 'en'),
    },
    {
      title: 'Concern notification',
      description: 'Parents can create a concern notification in JodaCare. It has a status from created to closed.',
      status: modulMerke('bekymringsmelding', 'en'),
    },
  ],
  statusBadge: getStatusVisning('avlastning', 'en').tekst,
  statusTitle: 'How JodaCare for respite is being built',
  statusBody:
    'The new JodaCare is in use with Boka, notices and a team around each child. This comes later:',
  statusItems: [
    { label: 'Calendar', status: modulMerke('kalender', 'en') },
    { label: 'Routines', status: modulMerke('sjekklister-og-rutiner', 'en') },
    { label: 'Incident log', status: modulMerke('hendelseslogg', 'en') },
    { label: 'Jodabook', status: modulMerke('jodabook', 'en') },
    { label: 'Concern notification', status: modulMerke('bekymringsmelding', 'en') },
  ],
  priceNote:
    `${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} service recipients, plus onboarding ${formaterPrisEn(priser.oppstart)} one off.`,
  priceLinkText: 'See all prices',
  statusCta: 'Register interest',
  relatedTitle: 'Other parts of JodaCare that strengthen respite care',
  readMore: 'Read more',
  related: [
    {
      title: 'User-controlled personal assistance (BPA)',
      description: 'JodaCare for BPA schemes with guardians as employers.',
      href: '/bpa',
      status: modulMerke('bpa', 'en'),
    },
    {
      title: 'Implementation support',
      description: 'Our implementation lead guides your municipality step by step.',
      href: '/implementering',
    },
    {
      title: 'Care home and Hub',
      description: 'JodaCare Hub will connect resident, family and staff through a screen in the flat.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'en'),
    },
  ],
};

export function getAvlastningContent(locale: Locale): AvlastningContent {
  return locale === 'en' ? en : no;
}
