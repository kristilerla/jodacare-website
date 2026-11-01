import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { getStatusVisning } from '@/i18n/messages/status';
import { OmsorgsboligPageView } from '@/components/pages/OmsorgsboligPageView';

const title = 'JodaCare Hub: omsorgsbolig og servicebolig';
const description = `JodaCare Hub skal koble beboer, familie og ansatte gjennom en skjerm i leiligheten. For omsorgsboliger og servicebolig i norske kommuner. ${getStatusVisning('omsorgsbolig-hub', 'no').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/omsorgsbolig', 'no'),
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function OmsorgsboligPage() {
  return <OmsorgsboligPageView locale="no" />;
}
