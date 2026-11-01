import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { familieromAar } from '@/i18n/messages/familie-page';
import { FamiliePageView } from '@/components/pages/FamiliePageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/familie', 'no'),
  title: 'For familier',
  description: `JodaCare for familier. Familierom kommer i ${familieromAar}.`,
  openGraph: {
    title: 'JodaCare for familier',
    description: 'Én felles plass for all informasjon om den du er glad i. Trygg og privat.',
  },
};

export default function FamiliePage() {
  return <FamiliePageView locale="no" />;
}
