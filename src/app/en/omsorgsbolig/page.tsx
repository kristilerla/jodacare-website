import type { Metadata } from 'next';
import { OmsorgsboligPageView } from '@/components/pages/OmsorgsboligPageView';

export const metadata: Metadata = {
  title: 'JodaCare Hub — sheltered and supported housing',
  description:
    'JodaCare Hub connects resident, family and staff through a screen in the flat. For sheltered housing schemes in Norwegian municipalities.',
  openGraph: {
    title: 'JodaCare Hub — sheltered and supported housing',
    description:
      'A screen in the flat that keeps residents, family and staff in one continuous flow.',
    locale: 'en_GB',
  },
};

export default function EnglishOmsorgsboligPage() {
  return <OmsorgsboligPageView locale="en" />;
}
