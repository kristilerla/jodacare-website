import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { OmPageView } from '@/components/pages/OmPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/om', 'en'),
  title: 'About',
  description:
    'JodaCare was founded by Kristil Erla Håland from her own experience coordinating care for her mother who lived with dementia. Read the story behind the platform.',
  openGraph: {
    title: 'About JodaCare',
    description: 'The story behind JodaCare, from personal experience to a platform for families and municipalities.',
    locale: 'en_GB',
  },
};

export default function EnglishOmPage() {
  return <OmPageView locale="en" />;
}
