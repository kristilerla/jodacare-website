import type { Locale } from '@/lib/i18n/types';

export type OmPartner = { name: string; description: string };
export type OmTimeline = { year: string; event: string };

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
  storyQuote: string;
  storyAuthor: string;
  timelineTitle: string;
  partnersTitle: string;
  partnersIntro: string;
  companyCardTitle: string;
  companyCardBody: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

const no: OmPageContent = {
  partners: [
    { name: 'SINTEF', description: 'Forskningspartner for utvikling av demensvennlig grensesnitt' },
    { name: 'Universitetet i Agder', description: 'Akademisk partner for forskning på digital omsorg' },
    { name: 'Innovasjon Norge', description: 'Virkemiddelpartner for jodacare' },
    { name: 'Norway Healthtech', description: 'Norges ledende helseklynge' },
    { name: 'Dynamisk Helse', description: 'SkillAid, AI-partner for jodacare' },
  ],
  timeline: [
    { year: '2016', event: 'jodacare lanseres for første gang i norske kommuner' },
    { year: '2018', event: 'Jodabook utvikles i samarbeid med SINTEF — en demensvennlig versjon' },
    { year: '2020', event: 'Videosamtaler lanseres under pandemien' },
    { year: '2022', event: 'Jodacare AS bytter navn til Jodatech AS' },
    { year: '2025', event: 'Jodatech AS går konkurs og Jodacare AS overtar eierskapet av jodacare' },
    { year: '2026', event: 'jodacare 2.0 lanseres med ny arkitektur og AI-støtte' },
  ],
  heroTitle: 'Historien bak jodacare',
  heroSubtitle:
    'jodacare ble til fordi én datter ønsket å gi sin mor med demens verdighet og sammenheng i hverdagen.',
  founderImageAlt: 'Kristil Erla Håland med sin mor',
  founderName: 'Kristil Erla Håland',
  founderRole: 'Gründer og daglig leder',
  founderP1:
    'Da mamma fikk demens, opplevde jeg hvor vanskelig det var å koordinere hverdagen hennes. Hjemmetjenesten visste ikke hva familien hadde planlagt. Søsknene mine visste ikke hva helsepersonell hadde gjort. Og mamma mistet sammenhengen i sin egen hverdag.',
  founderP2:
    'jodacare ble til fordi jeg ønsket å gi mamma verdighet. Gjennom bilder og dialog kunne hun huske hvem som hadde vært på besøk, hva hun hadde gjort, og føle seg sett og ivaretatt.',
  founderP3:
    'I dag brukes jodacare av familier og kommuner over hele Norge. Men kjernen er den samme: å skape trygghet, verdighet og sammenheng for sårbare mennesker og de som bryr seg om dem.',
  storyQuote:
    'Vår visjon er å styrke menneskeverd til personer med demens, utviklingshemminger og deres relasjon til helsepersonell og egen familie. Ved å gi denne sårbare gruppen mennesker en sammenheng i tilværelsen ser vi at det skaper ro for alle.',
  storyAuthor: 'Kristil Erla Håland',
  timelineTitle: 'Vår reise',
  partnersTitle: 'Våre partnere',
  partnersIntro:
    'Vi samarbeider med ledende forsknings- og teknologimiljøer for å utvikle jodacare videre.',
  companyCardTitle: 'JodaCare AS',
  companyCardBody:
    'jodacare eies og utvikles av Jodacare AS, et norsk selskap med hovedkontor i Asker.',
  ctaTitle: 'Vil du vite mer?',
  ctaSubtitle: 'Ta kontakt for en uforpliktende prat om hvordan jodacare kan hjelpe deg.',
  ctaButton: 'Kontakt oss',
};

const en: OmPageContent = {
  partners: [
    { name: 'SINTEF', description: 'Research partner for dementia-friendly interface design' },
    { name: 'University of Agder', description: 'Academic partner for research on digital care' },
    { name: 'Innovation Norway', description: 'Funding and growth partner for jodacare' },
    { name: 'Norway Healthtech', description: "Norway's leading health technology cluster" },
    { name: 'Dynamisk Helse', description: 'SkillAid, AI partner for jodacare' },
  ],
  timeline: [
    { year: '2016', event: 'jodacare launches for the first time in Norwegian municipalities' },
    { year: '2018', event: 'Jodabook is developed with SINTEF — a dementia-friendly edition' },
    { year: '2020', event: 'Video calls launch during the pandemic' },
    { year: '2022', event: 'Jodacare AS changes its name to Jodatech AS' },
    { year: '2025', event: 'Jodatech AS enters bankruptcy and Jodacare AS acquires jodacare' },
    { year: '2026', event: 'jodacare 2.0 launches with a new architecture and AI support' },
  ],
  heroTitle: 'The story behind jodacare',
  heroSubtitle:
    'jodacare exists because one daughter wanted to give her mother, who lives with dementia, dignity and continuity in everyday life.',
  founderImageAlt: 'Kristil Erla Håland with her mother',
  founderName: 'Kristil Erla Håland',
  founderRole: 'Founder and CEO',
  founderP1:
    "When my mother developed dementia, I saw how hard it was to coordinate her everyday life. Home care did not know what the family had planned. My siblings did not know what staff had done. And Mum lost the thread of her own day.",
  founderP2:
    'jodacare was created because I wanted to give my mother dignity. Through photos and dialogue she could remember who had visited, what she had done, and feel seen and cared for.',
  founderP3:
    'Today jodacare is used by families and municipalities across Norway. The core is the same: to create safety, dignity and continuity for vulnerable people and those who care for them.',
  storyQuote:
    'Our vision is to strengthen human dignity for people with dementia and intellectual disabilities, and their relationships with health professionals and their own families. By giving this vulnerable group coherence in life, we see that it brings calm for everyone involved.',
  storyAuthor: 'Kristil Erla Håland',
  timelineTitle: 'Our journey',
  partnersTitle: 'Our partners',
  partnersIntro:
    'We work with leading research and technology environments to keep developing jodacare.',
  companyCardTitle: 'Jodacare AS',
  companyCardBody: 'jodacare is owned and developed by Jodacare AS, a Norwegian company headquartered in Asker.',
  ctaTitle: 'Want to know more?',
  ctaSubtitle: 'Get in touch for an informal conversation about how jodacare can help you.',
  ctaButton: 'Contact us',
};

export function getOmPageContent(locale: Locale): OmPageContent {
  return locale === 'en' ? en : no;
}
