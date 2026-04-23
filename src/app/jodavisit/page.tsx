import type { Metadata } from 'next';
import { JodavisitPageView } from '@/components/pages/JodavisitPageView';

export const metadata: Metadata = {
  title: 'JodaVisit — videobesøk for hjemmesykepleie',
  description:
    'JodaVisit erstatter unødvendige fysiske besøk med trygge videobesøk. Eldre bor hjemme lenger, med familien nær.',
  openGraph: {
    title: 'JodaVisit — videobesøk for hjemmesykepleie',
    description:
      'JodaVisit erstatter unødvendige fysiske besøk med trygge videobesøk. Eldre bor hjemme lenger, med familien nær.',
  },
};

export default function JodaVisitPage() {
  return <JodavisitPageView locale="no" />;
}
