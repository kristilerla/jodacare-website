import type { Metadata } from 'next';
import { TeknologiPageView } from '@/components/pages/TeknologiPageView';

export const metadata: Metadata = {
  title: 'Teknologi',
  description:
    'jodacare 2.0 er bygget med moderne teknologi — sikker, skalerbar og brukervennlig. Les om plattformen, arkitekturen og sikkerhetsmekanismene.',
  openGraph: {
    title: 'Teknologi i jodacare 2.0',
    description:
      'Moderne teknologi bygget for omsorg. Nettbasert plattform med sanntidssamarbeid, rollebasert tilgang og fremtidig KI-støtte.',
  },
};

export default function TeknologiPage() {
  return <TeknologiPageView locale="no" />;
}
