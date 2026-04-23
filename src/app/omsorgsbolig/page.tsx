import type { Metadata } from 'next';
import { OmsorgsboligPageView } from '@/components/pages/OmsorgsboligPageView';

export const metadata: Metadata = {
  title: 'JodaCare Hub — omsorgsbolig og servicebolig',
  description:
    'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten. For omsorgsboliger og servicebolig i norske kommuner.',
  openGraph: {
    title: 'JodaCare Hub — omsorgsbolig og servicebolig',
    description:
      'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten. For omsorgsboliger og servicebolig i norske kommuner.',
  },
};

export default function OmsorgsboligPage() {
  return <OmsorgsboligPageView locale="no" />;
}
