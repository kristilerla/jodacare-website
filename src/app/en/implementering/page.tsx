import type { Metadata } from 'next';
import { ImplementeringPageView } from '@/components/pages/ImplementeringPageView';

export const metadata: Metadata = {
  title: 'JodaCare — Implementation support',
  description:
    'JodaCare assigns a dedicated implementation lead who guides your municipality from first setup until the platform is second nature.',
  openGraph: {
    title: 'JodaCare — Implementation support',
    description:
      'Hands-on implementation support for municipal customers, with a named implementation lead from day one.',
    locale: 'en_GB',
  },
};

export default function EnglishImplementeringPage() {
  return <ImplementeringPageView locale="en" />;
}
