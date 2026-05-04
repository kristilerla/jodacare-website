import type { Locale } from '@/lib/i18n/types';

export type JvCard = { title: string; description: string };
export type JvRelated = { title: string; description: string; href: string };

export type JodavisitContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
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
  heroTitle: 'Eldre bor hjemme lenger. Med familien nær.',
  heroSubtitle:
    'JodaVisit erstatter unødvendige fysiske besøk med videobesøk som oppleves trygge og personlige. Helsepersonell bruker tiden der den trengs mest, og den hjemmeboende slipper å være alene mellom besøkene.',
  heroBadge: 'Hjemmesykepleie og videobesøk',
  primaryCta: 'Kontakt oss',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioBody:
    'Hjemmetjenesten har for lite tid og for mange besøk, og mange av dem handler om å sjekke at alt er greit i stedet for å gi reell pleie. Den hjemmeboende blir ensom mellom besøkene, og familien vet ikke alltid hvordan det egentlig går.',
  userGroupsTitle: 'Slik fungerer JodaVisit for hver part',
  userGroups: [
    {
      title: 'For helsepersonell',
      description:
        'Videobesøk planlegges i kalenderen og gjennomføres fra PC eller telefon, og dokumentasjonen skrives etterpå direkte i JodaCare.',
    },
    {
      title: 'For den hjemmeboende',
      description:
        'Hub-skjermen hjemme viser familiebilder og gjør det enkelt å ta imot videosamtaler, helt uten en app som må læres.',
    },
    {
      title: 'For familien',
      description:
        'Familierommet gir innsyn i hverdagen, lar dere starte videosamtale med ett trykk, og holder alle oppdatert uten at noen trenger å ringe hjemmetjenesten.',
    },
  ],
  featuresTitle: 'Funksjoner som dekker hverdagen',
  features: [
    {
      title: 'Videobesøk innebygd i JodaCare',
      description: 'Både planlagte og uplanlagte videobesøk gjennomføres fra JodaCare, og den hjemmeboende trenger ikke ekstra programvare.',
    },
    {
      title: 'Hub-skjerm hjemme',
      description: 'Hub-skjermen kjøres på nettbrett eller TV, og familien er alltid nær via bilder, meldinger og videosamtaler.',
    },
    {
      title: 'Kalender og påminnelser',
      description: 'Den hjemmeboende får automatiske påminnelser i god tid før planlagte besøk.',
    },
    {
      title: 'Dokumentasjon etter besøk',
      description: 'Helsepersonell skriver dokumentasjonen direkte i JodaCare rett etter videobesøket.',
    },
  ],
  statusBadge: 'Kommer',
  statusTitle: 'Under utvikling',
  statusBody: 'JodaVisit er under utvikling som del av JodaCare 2.0. Ta kontakt for å melde din kommune som pilot.',
  statusCta: 'Meld interesse',
  relatedTitle: 'Andre deler av JodaCare som styrker hjemmesykepleien',
  readMore: 'Les mer',
  related: [
    {
      title: 'Omsorgsbolig og Hub',
      description: 'En skjerm i leiligheten som kobler beboer, familie og ansatte.',
      href: '/omsorgsbolig',
    },
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
  ],
};

const en: JodavisitContent = {
  heroTitle: 'People stay at home longer. With family close.',
  heroSubtitle:
    'JodaVisit replaces unnecessary physical visits with video visits that feel safe and personal. Staff spend time where it matters most, and the person at home is no longer alone between visits.',
  heroBadge: 'Home nursing and video visits',
  primaryCta: 'Contact us',
  scenarioTitle: 'Does this sound familiar?',
  scenarioBody:
    'Home care has too little time and too many visits, and many of them are about checking that everything is fine instead of providing hands-on care. The person at home is lonely between visits, and the family does not always know how things are really going.',
  userGroupsTitle: 'How JodaVisit works for each party',
  userGroups: [
    {
      title: 'For health staff',
      description:
        'Video visits are scheduled in the calendar and carried out from PC or phone. Documentation is written afterwards directly in JodaCare.',
    },
    {
      title: 'For the person at home',
      description:
        'The Hub screen at home shows family photos and makes it easy to receive video calls. No new app to learn.',
    },
    {
      title: 'For the family',
      description:
        'The family room gives insight into everyday life, lets you start a video call in one tap, and keeps everyone updated without calling home care for every question.',
    },
  ],
  featuresTitle: 'Features for everyday life',
  features: [
    {
      title: 'Video visits in the platform',
      description: 'Planned and ad-hoc video visits. No extra software for the person at home.',
    },
    {
      title: 'Hub screen at home',
      description: 'Runs on tablet or TV. Family stays close through photos, messages and video.',
    },
    {
      title: 'Calendar and reminders',
      description: 'Automatic reminders to the person at home before scheduled visits.',
    },
    {
      title: 'Documentation after the visit',
      description: 'Staff document directly in JodaCare after the video visit.',
    },
  ],
  statusBadge: 'Coming',
  statusTitle: 'In development',
  statusBody: 'JodaVisit is being developed as part of JodaCare 2.0. Contact us to register interest.',
  statusCta: 'Register interest',
  relatedTitle: 'Other parts of JodaCare that strengthen home nursing',
  readMore: 'Read more',
  related: [
    {
      title: 'Care home and Hub',
      description: 'A screen in the flat connecting resident, family and staff.',
      href: '/omsorgsbolig',
    },
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
  ],
};

export function getJodavisitContent(locale: Locale): JodavisitContent {
  return locale === 'en' ? en : no;
}
