import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { modulMerke } from '@/i18n/messages/status';
import { BpaPageView } from '@/components/pages/BpaPageView';

const beskrivelse = `JodaCare brings the care team together around the user in Boka, with notices and a team for assistants and family. BPA in the new JodaCare: ${modulMerke('bpa', 'en').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/bpa', 'en'),
  title: 'JodaCare for user-controlled personal assistance (BPA)',
  description: beskrivelse,
  openGraph: {
    title: 'JodaCare for BPA',
    description: beskrivelse,
    locale: 'en_GB',
  },
};

export default function EnglishBpaPage() {
  return <BpaPageView locale="en" />;
}
