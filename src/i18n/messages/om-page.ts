import type { Locale } from '@/lib/i18n/types';

export type OmPartner = { name: string; description: string };
export type OmTimeline = { year: string; event: string };
export type OmTeamMember = {
  name: string;
  role: string;
  /** Bilde i /public. Uten bilde vises initialene. */
  image?: string;
  imageAlt?: string;
  initials: string;
  paragraphs: string[];
  /** Full LinkedIn-URL. Står den tom, vises ikke LinkedIn-knappen. */
  linkedin?: string;
};

export type OmPageContent = {
  partners: OmPartner[];
  timeline: OmTimeline[];
  heroTitle: string;
  heroSubtitle: string;
  founderImageAlt: string;
  founderName: string;
  founderRole: string;
  founderP1: string;
  founderP2: string;
  founderP3: string;
  teamTitle: string;
  teamIntro: string;
  team: OmTeamMember[];
  linkedinLabel: string;
  storyQuote: string;
  storyAuthor: string;
  timelineTitle: string;
  partnersTitle: string;
  partnersIntro: string;
  companyCardTitle: string;
  companyCardBody: string;
  orgNrLabel: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

const no: OmPageContent = {
  partners: [
    { name: 'SINTEF', description: 'Forskningspartner for utvikling av demensvennlig grensesnitt' },
    { name: 'Universitetet i Agder', description: 'Akademisk partner for forskning på digital omsorg' },
    { name: 'Innovasjon Norge', description: 'Virkemiddelpartner for JodaCare' },
    { name: 'Norway Healthtech', description: 'Norges ledende helseklynge' },
  ],
  timeline: [
    { year: '2016', event: 'JodaCare lanseres for første gang i norske kommuner' },
    { year: '2018', event: 'Jodabook ble utviklet i samarbeid med SINTEF som en demensvennlig versjon av JodaCare' },
    { year: '2020', event: 'Videosamtaler lanseres under pandemien' },
    { year: '2022', event: 'Jodacare AS bytter navn til Jodatech AS' },
    { year: '2025', event: 'Jodatech AS går konkurs, og JodaCare AS overtar eierskapet av plattformen' },
    { year: '2026', event: 'Bård Lind blir med som medgründer og bygger nye JodaCare fra bunnen av' },
    { year: '2026', event: 'Nye JodaCare lanseres med ny arkitektur' },
  ],
  heroTitle: 'Historien bak JodaCare',
  heroSubtitle:
    'JodaCare ble til fordi én datter ønsket å gi sin mor med demens verdighet og sammenheng i hverdagen.',
  founderImageAlt: 'Kristil Erla Håland med sin mor',
  founderName: 'Hvorfor JodaCare finnes',
  founderRole: 'Kristil Erla Håland, gründer og daglig leder',
  founderP1:
    'Da mamma fikk demens, opplevde jeg hvor vanskelig det var å koordinere hverdagen hennes. Hjemmetjenesten visste ikke hva familien hadde planlagt. Søsknene mine visste ikke hva helsepersonell hadde gjort. Og mamma mistet sammenhengen i sin egen hverdag.',
  founderP2:
    'JodaCare ble til fordi jeg ønsket å gi mamma verdighet. Gjennom bilder og dialog kunne hun huske hvem som hadde vært på besøk, hva hun hadde gjort, og føle seg sett og ivaretatt.',
  founderP3:
    'JodaCare har vært brukt av Horten, Lier og Oslo kommune blant flere. Fyresdal er den første kommunen på nye JodaCare. Kjernen er den samme: å skape trygghet, verdighet og sammenheng for sårbare mennesker og de som bryr seg om dem.',
  teamTitle: 'Teamet bak JodaCare',
  teamIntro:
    'Vi er to som bygger JodaCare. Den ene kjenner hverdagen til familiene og kommunene, den andre bygger systemene som skal holde på det de deler.',
  team: [
    {
      name: 'Kristil Erla Håland',
      role: 'Gründer og daglig leder',
      image: '/team/kristil-erla-haland.jpg',
      imageAlt: 'Portrett av Kristil Erla Håland',
      initials: 'KEH',
      linkedin: 'https://www.linkedin.com/in/kristilerla/',
      paragraphs: [
        'Kristil startet JodaCare i 2016 etter å ha koordinert hverdagen til mamma, som fikk demens. Hun har fulgt plattformen gjennom alle årene i norske kommuner, fra de første brukerne til i dag.',
        'Hun er produkteier for nye JodaCare og snakker selv med familiene og kommunene som bruker den. Det de forteller henne, blir til det som bygges.',
      ],
    },
    {
      name: 'Bård Lind',
      role: 'Medgründer og backend-arkitekt',
      image: '/team/bard-lind.jpg',
      imageAlt: 'Portrett av Bård Lind',
      initials: 'BL',
      linkedin: 'https://www.linkedin.com/in/baardl/',
      paragraphs: [
        'Bård har bygget sikre systemer i over tjue år. Han ble med i JodaCare i august 2026 som medgründer, og bygger nye JodaCare fra bunnen av.',
        'Han har ansvar for datamodellen, tilgangsstyringen og sikkerheten, og for å flytte eksisterende kunder trygt over til den nye løsningen. Han har også skrevet tilgangsscenarioene som må være testet før noen flyttes over.',
      ],
    },
  ],
  linkedinLabel: 'LinkedIn-profilen til',
  storyQuote:
    'Vår visjon er å styrke menneskeverd til personer med demens, utviklingshemminger og deres relasjon til helsepersonell og egen familie. Ved å gi denne sårbare gruppen mennesker en sammenheng i tilværelsen ser vi at det skaper ro for alle.',
  storyAuthor: 'Kristil Erla Håland',
  timelineTitle: 'Vår reise',
  partnersTitle: 'Våre partnere',
  partnersIntro:
    'Vi samarbeider med ledende forsknings- og teknologimiljøer for å utvikle JodaCare videre.',
  companyCardTitle: 'JodaCare AS',
  companyCardBody:
    'JodaCare eies og utvikles av JodaCare AS, et norsk selskap med hovedkontor i Asker.',
  orgNrLabel: 'Org.nr.',
  ctaTitle: 'Vil du vite mer?',
  ctaSubtitle: 'Ta kontakt for en uforpliktende prat om hvordan JodaCare kan hjelpe deg.',
  ctaButton: 'Kontakt oss',
};

const en: OmPageContent = {
  partners: [
    { name: 'SINTEF', description: 'Research partner for dementia-friendly interface design' },
    { name: 'University of Agder', description: 'Academic partner for research on digital care' },
    { name: 'Innovation Norway', description: 'Funding and growth partner for JodaCare' },
    { name: 'Norway Healthtech', description: "Norway's leading health technology cluster" },
  ],
  timeline: [
    { year: '2016', event: 'JodaCare launches for the first time in Norwegian municipalities' },
    { year: '2018', event: 'Jodabook is developed with SINTEF as a dementia-friendly edition of JodaCare' },
    { year: '2020', event: 'Video calls launch during the pandemic' },
    { year: '2022', event: 'Jodacare AS changes its name to Jodatech AS' },
    { year: '2025', event: 'Jodatech AS enters bankruptcy, and JodaCare AS acquires the platform' },
    { year: '2026', event: 'Bård Lind joins as co-founder and rebuilds JodaCare from the ground up' },
    { year: '2026', event: 'The new JodaCare launches with a new architecture' },
  ],
  heroTitle: 'The story behind JodaCare',
  heroSubtitle:
    'JodaCare exists because one daughter wanted to give her mother, who lives with dementia, dignity and continuity in everyday life.',
  founderImageAlt: 'Kristil Erla Håland with her mother',
  founderName: 'Why JodaCare exists',
  founderRole: 'Kristil Erla Håland, founder and CEO',
  founderP1:
    "When my mother developed dementia, I saw how hard it was to coordinate her everyday life. Home care did not know what the family had planned. My siblings did not know what staff had done. And Mum lost the thread of her own day.",
  founderP2:
    'JodaCare was created because I wanted to give my mother dignity. Through photos and dialogue she could remember who had visited, what she had done, and feel seen and cared for.',
  founderP3:
    'JodaCare has been used by the municipalities of Horten, Lier and Oslo and others. Fyresdal is the first municipality on the new JodaCare. The core is the same: to create safety, dignity and continuity for vulnerable people and those who care for them.',
  teamTitle: 'The team behind JodaCare',
  teamIntro:
    'There are two of us building JodaCare. One knows the everyday life of families and municipalities, the other builds the systems that keep what they share safe.',
  team: [
    {
      name: 'Kristil Erla Håland',
      role: 'Founder and CEO',
      image: '/team/kristil-erla-haland.jpg',
      imageAlt: 'Portrait of Kristil Erla Håland',
      initials: 'KEH',
      linkedin: 'https://www.linkedin.com/in/kristilerla/',
      paragraphs: [
        "Kristil founded JodaCare in 2016 after coordinating everyday life for her mother, who developed dementia. She has followed the platform through all its years in Norwegian municipalities, from the first users until today.",
        'She is product owner for the new JodaCare and talks directly with the families and municipalities who use it. What they tell her becomes what gets built.',
      ],
    },
    {
      name: 'Bård Lind',
      role: 'Co-founder and backend architect',
      image: '/team/bard-lind.jpg',
      imageAlt: 'Portrait of Bård Lind',
      initials: 'BL',
      linkedin: 'https://www.linkedin.com/in/baardl/',
      paragraphs: [
        'Bård has built secure systems for more than twenty years. He joined JodaCare as co-founder in August 2026 and is rebuilding JodaCare from the ground up.',
        'He is responsible for the data model, access control and security, and for moving existing customers safely to the new platform. He also wrote the access scenarios that must pass before anyone is moved.',
      ],
    },
  ],
  linkedinLabel: 'LinkedIn profile of',
  storyQuote:
    'Our vision is to strengthen human dignity for people with dementia and intellectual disabilities, and their relationships with health professionals and their own families. By giving this vulnerable group coherence in life, we see that it brings calm for everyone involved.',
  storyAuthor: 'Kristil Erla Håland',
  timelineTitle: 'Our journey',
  partnersTitle: 'Our partners',
  partnersIntro:
    'We work with leading research and technology environments to keep developing JodaCare.',
  companyCardTitle: 'JodaCare AS',
  companyCardBody: 'JodaCare is owned and developed by JodaCare AS, a Norwegian company headquartered in Asker.',
  orgNrLabel: 'Org. no.',
  ctaTitle: 'Want to know more?',
  ctaSubtitle: 'Get in touch for an informal conversation about how JodaCare can help you.',
  ctaButton: 'Contact us',
};

export function getOmPageContent(locale: Locale): OmPageContent {
  return locale === 'en' ? en : no;
}
