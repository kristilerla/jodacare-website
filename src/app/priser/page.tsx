import type { Metadata } from 'next';
import { formaterPris, pakkeprisMnd, priser } from '@/lib/fakta';
import { sprakvarianter } from '@/lib/seo';
import { PriserPageView } from '@/components/pages/PriserPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/priser', 'no'),
  title: 'Priser',
  description:
    `Lisens ${formaterPris(pakkeprisMnd())} per måned for inntil ${priser.pakkeStorrelse} tjenestemottakere. Oppstart ${formaterPris(priser.oppstart)} per kommune.`,
  openGraph: {
    title: 'Priser | JodaCare',
    description:
      `Lisens ${formaterPris(pakkeprisMnd())} per måned for inntil ${priser.pakkeStorrelse} tjenestemottakere. Oppstart ${formaterPris(priser.oppstart)} per kommune.`,
  },
};

export default function PriserPage() {
  return <PriserPageView locale="no" />;
}
