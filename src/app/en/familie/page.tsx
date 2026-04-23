import type { Metadata } from 'next';
import { FamiliePageView } from '@/components/pages/FamiliePageView';

export const metadata: Metadata = {
  title: 'For families',
  description:
    'jodacare for families. Keep everyone updated on the everyday life of someone you love, wherever you live.',
  openGraph: {
    title: 'jodacare for families',
    description: 'One shared place for information about the person you care for. Private and secure.',
    locale: 'en_GB',
  },
};

export default function EnglishFamiliePage() {
  return <FamiliePageView locale="en" />;
}
