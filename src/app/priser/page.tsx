import type { Metadata } from 'next';
import { formaterPris, aar2, priser } from '@/lib/fakta';
import { sprakvarianter } from '@/lib/seo';
import { PriserPageView } from '@/components/pages/PriserPageView';

const beskrivelse =
  `Én pris per år for kommuner. ${formaterPris(aar2())} per år for inntil ${priser.pakkeStorrelse} tjenestemottakere, oppstart ${formaterPris(priser.oppstart)}. Familierom ${formaterPris(priser.familieromMnd)} per måned.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/priser', 'no'),
  // Rot-layouten legger på « | jodacare», så tittelen står uten suffiks her.
  title: 'Priser for kommuner og familier',
  description: beskrivelse,
  openGraph: {
    title: 'Priser for kommuner og familier | JodaCare',
    description: beskrivelse,
  },
};

export default function PriserPage() {
  return <PriserPageView locale="no" />;
}
