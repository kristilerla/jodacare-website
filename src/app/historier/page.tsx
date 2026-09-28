import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { HistorierPageView } from '@/components/pages/HistorierPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/historier', 'no'),
  title: 'Historier',
  description:
    'Historier fra hverdagen rundt de vi er glade i — fra pårørende, ansatte og menneskene i midten.',
  openGraph: {
    title: 'Historier fra JodaCare',
    description: 'Historier fra hverdagen rundt de vi er glade i.',
  },
};

export default function HistorierPage() {
  return <HistorierPageView locale="no" />;
}
