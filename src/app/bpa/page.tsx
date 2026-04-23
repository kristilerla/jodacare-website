import type { Metadata } from 'next';
import { BpaPageView } from '@/components/pages/BpaPageView';

export const metadata: Metadata = {
  title: 'JodaCare for BPA — brukerstyrt personlig assistanse',
  description:
    'JodaCare samler omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
  openGraph: {
    title: 'JodaCare for BPA — brukerstyrt personlig assistanse',
    description:
      'JodaCare samler omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
  },
};

export default function BpaPage() {
  return <BpaPageView locale="no" />;
}
