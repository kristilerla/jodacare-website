import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { getStatusVisning } from '@/i18n/messages/status';
import { OmsorgsboligPageView } from '@/components/pages/OmsorgsboligPageView';

const title = 'JodaCare Hub: sheltered and supported housing';
const description = `JodaCare Hub will connect resident, family and staff through a screen in the flat. For sheltered housing schemes in Norwegian municipalities. ${getStatusVisning('omsorgsbolig-hub', 'en').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/omsorgsbolig', 'en'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_GB',
  },
};

export default function EnglishOmsorgsboligPage() {
  return <OmsorgsboligPageView locale="en" />;
}
