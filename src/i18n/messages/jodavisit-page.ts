import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning, modulMerke } from './status';
import type { StatusVisning } from './status';

export type JvCard = { title: string; description: string; status?: StatusVisning };
export type JvRelated = { title: string; description: string; href: string; status?: StatusVisning };

export type JodavisitContent = {
  heroImageAlt: string;
  homeUserImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroStatus: StatusVisning;
  primaryCta: string;
  scenarioTitle: string;
  scenarioBody: string;
  userGroupsTitle: string;
  userGroups: JvCard[];
  featuresTitle: string;
  features: JvCard[];
  statusBadge: string;
  statusTitle: string;
  statusBody: string;
  statusCta: string;
  relatedTitle: string;
  readMore: string;
  related: JvRelated[];
};

const no: JodavisitContent = {
  heroImageAlt: 'Eldre kvinne sitter i stolen sin og ser på et bilde i JodaCare på nettbrettet',
  homeUserImageAlt: 'Eldre mann arbeider ved benken i verkstedet sitt',
  heroTitle: 'Eldre bor hjemme lenger. Med familien nær.',
  heroSubtitle:
    'JodaVisit skal erstatte unødvendige fysiske besøk med videobesøk som oppleves trygge og personlige. Helsepersonell skal kunne bruke tiden der den trengs mest. Den hjemmeboende skal slippe å være alene mellom besøkene.',
  heroBadge: 'Hjemmesykepleie og videobesøk',
  heroStatus: getStatusVisning('jodavisit', 'no'),
  primaryCta: 'Kontakt oss',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'Hjemmetjenesten har for lite tid og for mange besøk, og mange av dem handler om å sjekke at alt er greit i stedet for å gi reell pleie. Den hjemmeboende blir ensom mellom besøkene, og familien vet ikke alltid hvordan det egentlig går.',
  userGroupsTitle: 'Slik skal JodaVisit fungere for hver part',
  userGroups: [
    {
      title: 'For helsepersonell',
      description:
        `Videobesøk skal planlegges i kalenderen og gjennomføres fra PC eller telefon. Dokumentasjonen skal skrives etterpå direkte i JodaCare. Kalender: ${modulMerke('kalender', 'no').tekst}.`,
    },
    {
      title: 'For den hjemmeboende',
      description:
        'Hub-skjermen hjemme skal vise familiebilder og gjøre det enkelt å ta imot videosamtaler, uten en app som må læres.',
      status: modulMerke('hub', 'no'),
    },
    {
      title: 'For familien',
      description:
        `Familien ser hverdagen i Boka og holder seg oppdatert uten å ringe hjemmetjenesten. Videosamtale: ${modulMerke('video', 'no').tekst}.`,
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Videobesøk innebygd i JodaCare',
      description: 'Både planlagte og uplanlagte videobesøk skal gjennomføres fra JodaCare. Den hjemmeboende skal ikke trenge ekstra programvare.',
      status: getStatusVisning('jodavisit', 'no'),
    },
    {
      title: 'Hub-skjerm hjemme',
      description: 'Hub-skjermen skal kjøres på nettbrett eller TV, og familien skal være nær gjennom bilder, beskjeder og videosamtaler.',
      status: modulMerke('hub', 'no'),
    },
    {
      title: 'Kalender og påminnelser',
      description: 'Den hjemmeboende skal få automatiske påminnelser i god tid før planlagte besøk.',
      status: modulMerke('kalender', 'no'),
    },
    {
      title: 'Dokumentasjon etter besøk',
      description: 'Helsepersonell skal skrive dokumentasjonen direkte i JodaCare rett etter videobesøket.',
      status: getStatusVisning('jodavisit', 'no'),
    },
  ],
  statusBadge: getStatusVisning('jodavisit', 'no').tekst,
  statusTitle: 'Under utvikling',
  statusBody: 'JodaVisit er under utvikling. Ta kontakt for å melde din kommune som pilot.',
  statusCta: 'Meld interesse',
  relatedTitle: 'Andre deler av JodaCare som styrker hjemmesykepleien',
  readMore: 'Les mer',
  related: [
    {
      title: 'Hub i bolig',
      description: 'En skjerm i leiligheten som skal koble beboer, familie og ansatte.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'no'),
    },
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
  ],
};

const en: JodavisitContent = {
  heroImageAlt: 'Older woman in her armchair looking at a photo in JodaCare on a tablet',
  homeUserImageAlt: 'Older man working at the bench in his workshop',
  heroTitle: 'People stay at home longer. With family close.',
  heroSubtitle:
    'JodaVisit will replace unnecessary physical visits with video visits that feel safe and personal. Health staff will be able to spend time where it matters most. The person at home will no longer be alone between visits.',
  heroBadge: 'Home nursing and video visits',
  heroStatus: getStatusVisning('jodavisit', 'en'),
  primaryCta: 'Contact us',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'Home care has too little time and too many visits, and many of them are about checking that everything is fine instead of providing hands-on care. The person at home is lonely between visits, and the family does not always know how things are really going.',
  userGroupsTitle: 'How JodaVisit will work for each party',
  userGroups: [
    {
      title: 'For health staff',
      description:
        `Video visits will be scheduled in the calendar and carried out from PC or phone. Documentation will be written afterwards directly in JodaCare. Calendar: ${modulMerke('kalender', 'en').tekst}.`,
    },
    {
      title: 'For the person at home',
      description:
        'The Hub screen at home will show family photos and make it easy to receive video calls, without an app to learn.',
      status: modulMerke('hub', 'en'),
    },
    {
      title: 'For the family',
      description:
        `The family sees everyday life in Boka and stays updated without calling home care. Video call: ${modulMerke('video', 'en').tekst}.`,
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Video visits built into JodaCare',
      description: 'Both planned and unplanned video visits will be carried out from JodaCare. The person at home will not need extra software.',
      status: getStatusVisning('jodavisit', 'en'),
    },
    {
      title: 'Hub screen at home',
      description: 'The Hub screen will run on tablet or TV, and the family will stay close through photos, notices and video calls.',
      status: modulMerke('hub', 'en'),
    },
    {
      title: 'Calendar and reminders',
      description: 'The person at home will get automatic reminders in good time before scheduled visits.',
      status: modulMerke('kalender', 'en'),
    },
    {
      title: 'Documentation after the visit',
      description: 'Health staff will write the documentation directly in JodaCare right after the video visit.',
      status: getStatusVisning('jodavisit', 'en'),
    },
  ],
  statusBadge: getStatusVisning('jodavisit', 'en').tekst,
  statusTitle: 'In development',
  statusBody: 'JodaVisit is under development. Contact us to register your municipality as a pilot.',
  statusCta: 'Register interest',
  relatedTitle: 'Other parts of JodaCare that strengthen home nursing',
  readMore: 'Read more',
  related: [
    {
      title: 'Hub in the home',
      description: 'A screen in the flat that will connect resident, family and staff.',
      href: '/omsorgsbolig',
      status: getStatusVisning('omsorgsbolig-hub', 'en'),
    },
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
  ],
};

export function getJodavisitContent(locale: Locale): JodavisitContent {
  return locale === 'en' ? en : no;
}
