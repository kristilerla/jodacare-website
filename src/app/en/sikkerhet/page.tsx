import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { SikkerhetPageView } from '@/components/pages/SikkerhetPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/sikkerhet', 'en'),
  title: 'Security',
  description:
    'JodaCare takes security seriously. Read about ID-porten, GDPR, data processing and how we protect sensitive health information.',
  openGraph: {
    title: 'Security in JodaCare',
    description:
      'Sign-in with ID-porten at security level substantial. Developed in line with the GDPR. Data stored in Europe. Learn how we protect your information.',
    locale: 'en_GB',
  },
};

export default function EnglishSikkerhetPage() {
  return <SikkerhetPageView locale="en" />;
}
