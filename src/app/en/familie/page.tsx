import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { familieromAar } from '@/i18n/messages/familie-page';
import { FamiliePageView } from '@/components/pages/FamiliePageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/familie', 'en'),
  title: 'For families',
  description: `JodaCare for families. Family Room is coming in ${familieromAar}.`,
  openGraph: {
    title: 'JodaCare for families',
    description: 'One shared place for information about the person you care for. Private and secure.',
    locale: 'en_GB',
  },
};

export default function EnglishFamiliePage() {
  return <FamiliePageView locale="en" />;
}
