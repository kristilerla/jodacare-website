import type { Metadata } from 'next';
import { BpaPageView } from '@/components/pages/BpaPageView';

export const metadata: Metadata = {
  title: 'JodaCare for user-controlled personal assistance (BPA)',
  description:
    'JodaCare brings the care team around the user with Jodabook, checklists and full overview for coordinator and family.',
  openGraph: {
    title: 'JodaCare for BPA',
    description:
      'Tools for user-controlled personal assistance — simple for the user, structured for assistants, transparent for coordinators.',
    locale: 'en_GB',
  },
};

export default function EnglishBpaPage() {
  return <BpaPageView locale="en" />;
}
