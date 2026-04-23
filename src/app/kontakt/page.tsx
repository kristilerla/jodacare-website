import type { Metadata } from 'next';
import { KontaktPageView } from '@/components/pages/KontaktPageView';

export const metadata: Metadata = {
  title: 'Kontakt oss',
  description:
    'Ta kontakt med jodacare. Vi hjelper deg gjerne i gang, enten du er en kommune, organisasjon eller privat familie.',
  openGraph: {
    title: 'Kontakt jodacare',
    description: 'Ta kontakt for en uforpliktende prat om hvordan jodacare kan hjelpe deg.',
  },
};

export default function KontaktPage() {
  return <KontaktPageView locale="no" />;
}
