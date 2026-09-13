import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { PriserPageView } from '@/components/pages/PriserPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/priser', 'en'),
  title: 'Pricing',
  description:
    'Licence NOK 2,990 per month for up to 10 service recipients. Onboarding NOK 28,000 per municipality.',
  openGraph: {
    title: 'Pricing | JodaCare',
    description:
      'Licence NOK 2,990 per month for up to 10 service recipients. Onboarding NOK 28,000 per municipality.',
    locale: 'en_GB',
  },
};

export default function EnglishPriserPage() {
  return <PriserPageView locale="en" />;
}
