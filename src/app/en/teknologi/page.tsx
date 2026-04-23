import type { Metadata } from 'next';
import { TeknologiPageView } from '@/components/pages/TeknologiPageView';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'jodacare 2.0 is built with modern technology — secure, scalable and user-friendly. Read about the platform, architecture and safeguards.',
  openGraph: {
    title: 'Technology in jodacare 2.0',
    description:
      'Modern technology built for care. A web platform with real-time collaboration, role-based access and future AI support.',
    locale: 'en_GB',
  },
};

export default function EnglishTeknologiPage() {
  return <TeknologiPageView locale="en" />;
}
