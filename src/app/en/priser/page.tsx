import type { Metadata } from 'next';
import { formaterPrisEn, aar2, priser } from '@/lib/fakta';
import { sprakvarianter } from '@/lib/seo';
import { PriserPageView } from '@/components/pages/PriserPageView';

const description =
  `One price per year for municipalities. ${formaterPrisEn(aar2())} per year for up to ${priser.pakkeStorrelse} service recipients, onboarding ${formaterPrisEn(priser.oppstart)}. Family Room ${formaterPrisEn(priser.familieromMnd)} per month.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/priser', 'en'),
  title: 'Pricing for municipalities and families',
  description,
  openGraph: {
    title: 'Pricing for municipalities and families | JodaCare',
    description,
    locale: 'en_GB',
  },
};

export default function EnglishPriserPage() {
  return <PriserPageView locale="en" />;
}
