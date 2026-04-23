import type { Metadata } from 'next';
import { OmPageView } from '@/components/pages/OmPageView';

export const metadata: Metadata = {
  title: 'About',
  description:
    'jodacare was founded by Kristil Erla Håland from her own experience coordinating care for her mother who lived with dementia. Read the story behind the platform.',
  openGraph: {
    title: 'About jodacare',
    description: 'The story of jodacare — from personal experience to a platform used by families across Norway.',
    locale: 'en_GB',
  },
};

export default function EnglishOmPage() {
  return <OmPageView locale="en" />;
}
