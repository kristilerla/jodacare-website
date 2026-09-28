import type { Locale } from '@/lib/i18n/types';

export type HistorierPageContent = {
  heroTitle: string;
  heroSubtitle: string;
  listTitle: string;
  emptyTitle: string;
  emptyBody: string;
  readStory: string;
  byline: string;
  /** Vises bare på engelsk: historiene er skrevet på norsk. */
  languageNote?: string;
  backToList: string;
  shareTitle: string;
  shareLinkedin: string;
  shareFacebook: string;
  alsoOnTitle: string;
  newWindow: string;
  followTitle: string;
  followBody: string;
  followButton: string;
};

const no: HistorierPageContent = {
  heroTitle: 'Historier',
  heroSubtitle:
    'Fra hverdagen rundt de vi er glade i. Om pårørende, ansatte og menneskene i midten.',
  listTitle: 'Alle historier',
  emptyTitle: 'De første historiene kommer snart',
  emptyBody: 'Vi samler fortellinger fra familier og ansatte som bruker JodaCare.',
  readStory: 'Les historien',
  byline: 'Skrevet av',
  backToList: 'Alle historier',
  shareTitle: 'Del historien',
  shareLinkedin: 'Del på LinkedIn',
  shareFacebook: 'Del på Facebook',
  alsoOnTitle: 'Historien er også delt på',
  newWindow: 'åpnes i nytt vindu',
  followTitle: 'Har du en historie?',
  followBody: 'Vi vil gjerne høre hvordan hverdagen ser ut der du er.',
  followButton: 'Kontakt oss',
};

const en: HistorierPageContent = {
  heroTitle: 'Stories',
  heroSubtitle:
    'From everyday life around the people we love. About relatives, care workers and the people in the middle.',
  listTitle: 'All stories',
  emptyTitle: 'The first stories are on their way',
  emptyBody: 'We are collecting stories from families and care workers who use JodaCare.',
  readStory: 'Read the story',
  byline: 'Written by',
  languageNote: 'Our stories are written in Norwegian.',
  backToList: 'All stories',
  shareTitle: 'Share the story',
  shareLinkedin: 'Share on LinkedIn',
  shareFacebook: 'Share on Facebook',
  alsoOnTitle: 'This story is also on',
  newWindow: 'opens in a new window',
  followTitle: 'Do you have a story?',
  followBody: 'We would love to hear what everyday life looks like where you are.',
  followButton: 'Contact us',
};

export function getHistorierPageContent(locale: Locale): HistorierPageContent {
  return locale === 'en' ? en : no;
}
