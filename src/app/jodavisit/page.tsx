import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { JodavisitPageView } from '@/components/pages/JodavisitPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/jodavisit', 'no'),
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
