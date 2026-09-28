import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { HistorierPageView } from '@/components/pages/HistorierPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/historier', 'en'),
  title: 'Stories',
  description:
    'Stories from everyday life around the people we love — from relatives, care workers and the people in the middle.',
  openGraph: {
    title: 'Stories from JodaCare',
    description: 'Stories from everyday life around the people we love.',
    locale: 'en_GB',
  },
};

export default function EnglishHistorierPage() {
  return <HistorierPageView locale="en" />;
}
