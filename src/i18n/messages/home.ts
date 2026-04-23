import type { Locale } from '@/lib/i18n/types';

export type HomePathCard = {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  cta: string;
  href: string;
  highlighted: boolean;
};

export type HomeService = {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  href: string;
};

export type HomeMessages = {
  heroAlt: string;
  heroHeadline: string;
  heroP1: string;
  heroP2: string;
  storyAria: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;
  quoteAria: string;
  quoteCaption: string;
  quoteBody: string;
  quoteAttribution: string;
  quoteClosing: string;
  pathTitle: string;
  pathCards: HomePathCard[];
  trustItems: string[];
  servicesTitle: string;
  servicesSubtitle: string;
  services: HomeService[];
};

const no: HomeMessages = {
  heroAlt: 'Barnehånd holder en eldre persons hånd — nærhet mellom generasjoner',
  heroHeadline: 'Mellom 20 og 25 ulike pleiere var innom mamma i løpet av to uker.',
  heroP1: 'Alle ukjente for henne. Hun, ukjent for dem.',
  heroP2: 'Det var da jeg forstod at vi alle trengte å vite mer om hverandre.',
  storyAria: 'Om erfaringen med omsorgsbolig',
  storyP1:
    'Da hun flyttet i omsorgsbolig ble hverdagen tryggere. Åtte beboere, fjorten ansatte. Men for meg var hun på mange måter lenger unna enn noen gang — hun var dårligere, og vanskeligere å nå.',
  storyP2:
    'Det var da JodaCare ble viktig. De som jobbet med henne visste hvem hun var da hun flyttet inn. Og jeg fikk en virkelig kontakt med menneskene rundt henne.',
  storyP3: 'Det er det JodaCare er laget for.',
  quoteAria: 'Eksempel fra hverdagen',
  quoteCaption: 'Slik ser det ut når det fungerer:',
  quoteBody:
    'Min glemsomme mamma ringer og sier at hun ikke har fått besøk i dag. «JODA!» sier jeg, og forteller det jeg har lest i JodaCare om dagen hennes. «Du har hatt besøk av Petter fra hjemmetjenesten. Han har laget kjøttkaker til middag for deg.» «Å ja», sier mamma, og husker at han var der.',
  quoteAttribution: '— Kristil Erla Haland, grunnlegger og daglig leder, JodaCare',
  quoteClosing: 'Tre mennesker som aldri var i samme rom — likevel til stede for hverandre.',
  pathTitle: 'Hva er JodaCare for deg?',
  pathCards: [
    {
      title: 'JodaCare for familien',
      description:
        'Hold deg oppdatert på hverdagen til den du er glad i — uansett avstand. Kom i gang med Vipps på fem minutter.',
      badge: 'Tilgjengelig nå',
      badgeColor: 'bg-success/10 text-success',
      cta: 'Opprett Familierom',
      href: '/familie',
      highlighted: true,
    },
    {
      title: 'JodaCare for kommuner',
      description:
        'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform.',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      cta: 'Se alle tjenester',
      href: '/kommune',
      highlighted: false,
    },
    {
      title: 'Vi hjelper med implementeringen',
      description:
        'Vår Implementeringsansvarlig veileder din kommune steg for steg — fra første oppsett til systemet sitter.',
      badge: 'Inkludert for kommuner',
      badgeColor: 'bg-primary/10 text-primary',
      cta: 'Les mer',
      href: '/implementering',
      highlighted: false,
    },
  ],
  trustItems: [
    'Norske kommuner siden 2016',
    'ID-porten og Vipps',
    'GDPR · data i Europa',
    'Europol Innovation Award 2024',
  ],
  servicesTitle: 'Én plattform. Mange tjenester.',
  servicesSubtitle: 'Klikk for å lese mer om hver tjeneste.',
  services: [
    {
      title: 'Familierom',
      subtitle: 'For pårørende og nær familie',
      badge: 'Tilgjengelig nå',
      badgeColor: 'bg-success/10 text-success',
      href: '/familie',
    },
    {
      title: 'Omsorgsbolig / Hub',
      subtitle: 'Skjerm i leiligheten — for beboer, familie og ansatte',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      href: '/omsorgsbolig',
    },
    {
      title: 'BPA',
      subtitle: 'Brukerstyrt personlig assistanse',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      href: '/bpa',
    },
    {
      title: 'Avlastning',
      subtitle: 'For barn med utviklingshemming',
      badge: 'Kommer',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/avlastning',
    },
    {
      title: 'Barnevern',
      subtitle: 'Samvær og dokumentasjon',
      badge: 'Kommer',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/barnevern',
    },
    {
      title: 'JodaVisit',
      subtitle: 'Videobesøk for hjemmeboende',
      badge: 'Kommer',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/jodavisit',
    },
  ],
};

const en: HomeMessages = {
  heroAlt: "A child's hand holding an older person's hand — closeness across generations",
  heroHeadline: 'Between 20 and 25 different carers visited my mum in two weeks.',
  heroP1: 'All of them strangers to her. She, a stranger to them.',
  heroP2: 'That was when I realised we all needed to know more about each other.',
  storyAria: 'Experience from residential care',
  storyP1:
    'When she moved into sheltered housing, everyday life felt safer. Eight residents, fourteen staff. Yet in many ways she felt farther away than ever — more frail, and harder to reach.',
  storyP2:
    'That was when JodaCare mattered. The people caring for her knew who she was when she moved in. And I gained a real connection with the people around her.',
  storyP3: 'That is what JodaCare is built for.',
  quoteAria: 'An example from everyday life',
  quoteCaption: 'What it can look like when it works:',
  quoteBody:
    'My forgetful mum calls and says no one has visited today. “Actually, yes,” I say, and tell her what I have read in JodaCare about her day. “Petter from home care visited. He made meatballs for your dinner.” “Oh yes,” says mum — and remembers he was there.',
  quoteAttribution: '— Kristil Erla Haland, founder and CEO, JodaCare',
  quoteClosing: 'Three people who were never in the same room — still present for one another.',
  pathTitle: 'What is JodaCare for you?',
  pathCards: [
    {
      title: 'JodaCare for families',
      description:
        'Stay close to the everyday life of someone you love — wherever you live. Get started with Vipps in minutes.',
      badge: 'Available now',
      badgeColor: 'bg-success/10 text-success',
      cta: 'Create a family room',
      href: '/familie',
      highlighted: true,
    },
    {
      title: 'JodaCare for municipalities',
      description:
        'Residential care, personal assistance, child welfare, respite and home nursing — coordinated care in one platform.',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      cta: 'See all services',
      href: '/kommune',
      highlighted: false,
    },
    {
      title: 'Implementation support',
      description:
        'A dedicated implementation lead guides your municipality step by step — from first setup until the system is second nature.',
      badge: 'Included for municipalities',
      badgeColor: 'bg-primary/10 text-primary',
      cta: 'Read more',
      href: '/implementering',
      highlighted: false,
    },
  ],
  trustItems: [
    'Norwegian municipalities since 2016',
    'ID-porten and Vipps',
    'GDPR · data in Europe',
    'Europol Innovation Award 2024',
  ],
  servicesTitle: 'One platform. Many services.',
  servicesSubtitle: 'Click to read more about each service.',
  services: [
    {
      title: 'Family room',
      subtitle: 'For relatives and close family',
      badge: 'Available now',
      badgeColor: 'bg-success/10 text-success',
      href: '/familie',
    },
    {
      title: 'Care home / Hub',
      subtitle: 'A screen in the flat — for resident, family and staff',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      href: '/omsorgsbolig',
    },
    {
      title: 'User-controlled personal assistance',
      subtitle: 'BPA-style coordinated care',
      badge: 'Beta 2026',
      badgeColor: 'bg-warning/10 text-warning',
      href: '/bpa',
    },
    {
      title: 'Respite care',
      subtitle: 'For children with intellectual disabilities',
      badge: 'Coming',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/avlastning',
    },
    {
      title: 'Child welfare',
      subtitle: 'Contact visits and documentation',
      badge: 'Coming',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/barnevern',
    },
    {
      title: 'JodaVisit',
      subtitle: 'Video visits for people living at home',
      badge: 'Coming',
      badgeColor: 'bg-secondary-light text-text-muted',
      href: '/jodavisit',
    },
  ],
};

export function getHomeMessages(locale: Locale): HomeMessages {
  return locale === 'en' ? en : no;
}
