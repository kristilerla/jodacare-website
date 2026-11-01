import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { KontaktPageView } from '@/components/pages/KontaktPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/kontakt', 'en'),
  title: 'Contact',
  description:
    'Contact JodaCare. We are happy to help you get started whether you represent a municipality, an organisation or a private family.',
  openGraph: {
    title: 'Contact JodaCare',
    description: 'Get in touch for an informal conversation about how JodaCare can help you.',
    locale: 'en_GB',
  },
};

export default function EnglishKontaktPage() {
  return <KontaktPageView locale="en" />;
}
