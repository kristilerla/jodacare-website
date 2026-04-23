import type { Metadata } from 'next';
import { KommunePageView } from '@/components/pages/KommunePageView';

export const metadata: Metadata = {
  title: 'JodaCare for kommuner — alle tjenester',
  description:
    'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform. Se alle tjenester fra JodaCare.',
  openGraph: {
    title: 'JodaCare for kommuner',
    description: 'Koordinert omsorg i én plattform. Se alle tjenester fra JodaCare for norske kommuner.',
  },
};

export default function KommunePage() {
  return <KommunePageView locale="no" />;
}
