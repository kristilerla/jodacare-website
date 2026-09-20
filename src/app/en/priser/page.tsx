import type { Metadata } from 'next';
import { formaterPrisEn, pakkeprisMnd, priser } from '@/lib/fakta';
import { sprakvarianter } from '@/lib/seo';
import { PriserPageView } from '@/components/pages/PriserPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/priser', 'en'),
  title: 'Pricing',
  description:
    `Licence ${formaterPrisEn(pakkeprisMnd())} per month for up to ${priser.pakkeStorrelse} service recipients. Onboarding ${formaterPrisEn(priser.oppstart)} per municipality.`,
  openGraph: {
    title: 'Pricing | JodaCare',
    description:
      `Licence ${formaterPrisEn(pakkeprisMnd())} per month for up to ${priser.pakkeStorrelse} service recipients. Onboarding ${formaterPrisEn(priser.oppstart)} per municipality.`,
    locale: 'en_GB',
  },
};

export default function EnglishPriserPage() {
  return <PriserPageView locale="en" />;
}
