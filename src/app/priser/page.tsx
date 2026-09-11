import type { Metadata } from 'next';
import { PriserPageView } from '@/components/pages/PriserPageView';

export const metadata: Metadata = {
  title: 'Priser',
  description:
    'Lisens kr 2 990 per måned for inntil 10 tjenestemottakere. Oppstart kr 28 000 per kommune.',
  openGraph: {
    title: 'Priser | JodaCare',
    description:
      'Lisens kr 2 990 per måned for inntil 10 tjenestemottakere. Oppstart kr 28 000 per kommune.',
  },
};

export default function PriserPage() {
  return <PriserPageView locale="no" />;
}
