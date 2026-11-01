import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { getStatusVisning } from '@/i18n/messages/status';
import { JodavisitPageView } from '@/components/pages/JodavisitPageView';

const title = 'JodaVisit: video visits for home nursing';
const description = `JodaVisit will replace unnecessary physical visits with secure video visits. People will be able to stay at home longer, with family close. ${getStatusVisning('jodavisit', 'en').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/jodavisit', 'en'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_GB',
  },
};

export default function EnglishJodavisitPage() {
  return <JodavisitPageView locale="en" />;
}
