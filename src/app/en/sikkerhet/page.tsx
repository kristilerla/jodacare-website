import type { Metadata } from 'next';
import { SikkerhetPageView } from '@/components/pages/SikkerhetPageView';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'jodacare takes security seriously. Read about ID-porten, GDPR, data processing and how we protect sensitive health information.',
  openGraph: {
    title: 'Security in jodacare',
    description:
      'Security level 4 with ID-porten, GDPR-aligned processing and data stored in Europe. Learn how we protect your information.',
    locale: 'en_GB',
  },
};

export default function EnglishSikkerhetPage() {
  return <SikkerhetPageView locale="en" />;
}
