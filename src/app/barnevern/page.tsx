import type { Metadata } from 'next';
import { BarnevernPageView } from '@/components/pages/BarnevernPageView';

export const metadata: Metadata = {
  title: 'JodaCare for barnevern — JodaCare følger barnet',
  description:
    'Trygg digital plattform for samvær, fosterhjem og daglig kommunikasjon i barnevernet. Informasjonsbarrierer, audit trail og ID-porten-innlogging. Bygget for norsk forvaltning.',
  openGraph: {
    title: 'JodaCare for barnevern — JodaCare følger barnet',
    description:
      'Trygg digital plattform for samvær, fosterhjem og daglig kommunikasjon i barnevernet. Informasjonsbarrierer, audit trail og ID-porten-innlogging. Bygget for norsk forvaltning.',
  },
};

export default function BarnevernPage() {
  return <BarnevernPageView locale="no" />;
}
