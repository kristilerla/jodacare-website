import type { Metadata } from 'next';
import { JodavisitPageView } from '@/components/pages/JodavisitPageView';

export const metadata: Metadata = {
  title: 'JodaVisit — video visits for home nursing',
  description:
    'JodaVisit replaces unnecessary physical visits with secure video visits. People stay at home longer with family close.',
  openGraph: {
    title: 'JodaVisit — video visits',
    description: 'Plan and run video visits from familiar devices, with documentation in JodaCare.',
    locale: 'en_GB',
  },
};

export default function EnglishJodavisitPage() {
  return <JodavisitPageView locale="en" />;
}
