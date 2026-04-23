import type { Metadata } from 'next';
import { HomePageView } from '@/components/pages/HomePageView';

export const metadata: Metadata = {
  title: 'jodacare — Secure communication around vulnerable people',
  description:
    'jodacare is a secure digital platform that supports dignity and peace of mind through communication between relatives, health professionals and the person receiving care.',
  openGraph: {
    locale: 'en_GB',
    title: 'jodacare — Secure communication around vulnerable people',
    description:
      'A secure digital platform for communication between relatives, health professionals and the person receiving care.',
  },
};

export default function EnglishHomePage() {
  return <HomePageView locale="en" />;
}
