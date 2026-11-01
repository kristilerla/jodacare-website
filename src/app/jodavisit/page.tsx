import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { getStatusVisning } from '@/i18n/messages/status';
import { JodavisitPageView } from '@/components/pages/JodavisitPageView';

const title = 'JodaVisit: videobesøk for hjemmesykepleie';
const description = `JodaVisit skal erstatte unødvendige fysiske besøk med trygge videobesøk. Eldre skal kunne bo hjemme lenger, med familien nær. ${getStatusVisning('jodavisit', 'no').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/jodavisit', 'no'),
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function JodaVisitPage() {
  return <JodavisitPageView locale="no" />;
}
