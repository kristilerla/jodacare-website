import type { Metadata } from 'next';
import { FamiliePageView } from '@/components/pages/FamiliePageView';

export const metadata: Metadata = {
  title: 'For familier',
  description:
    'jodacare for private familier. Hold hele familien oppdatert på hverdagen til den dere er glad i, uansett hvor dere bor.',
  openGraph: {
    title: 'jodacare for familier',
    description: 'Én felles plass for all informasjon om den du er glad i. Trygg og privat.',
  },
};

export default function FamiliePage() {
  return <FamiliePageView locale="no" />;
}
