import type { Metadata } from 'next';
import { KommunePageView } from '@/components/pages/KommunePageView';

export const metadata: Metadata = {
  title: 'JodaCare for municipalities — all services',
  description:
    'Residential care, personal assistance, child welfare, respite and home nursing — coordinated care in one platform. See all JodaCare services.',
  openGraph: {
    title: 'JodaCare for municipalities',
    description: 'Coordinated care in one platform. Explore JodaCare services for Norwegian municipalities.',
    locale: 'en_GB',
  },
};

export default function EnglishKommunePage() {
  return <KommunePageView locale="en" />;
}
