import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { TeknologiPageView } from '@/components/pages/TeknologiPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/teknologi', 'no'),
  title: 'Teknologi',
  description:
    'Nye JodaCare er bygget med moderne teknologi. Plattformen er sikker, skalerbar og brukervennlig. Les om plattformen, arkitekturen og sikkerhetsmekanismene.',
  openGraph: {
    title: 'Teknologi i nye JodaCare',
    description:
      'Moderne teknologi bygget for omsorg. JodaCare brukes i nettleseren og kan legges på hjemskjermen. Bare teamet rundt tjenestemottakeren ser innholdet.',
  },
};

export default function TeknologiPage() {
  return <TeknologiPageView locale="no" />;
}
