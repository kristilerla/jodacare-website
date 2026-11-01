import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { modulMerke } from '@/i18n/messages/status';
import { BarnevernPageView } from '@/components/pages/BarnevernPageView';

const title = 'JodaCare for child welfare: JodaCare follows the child';
const description = `JodaCare for child welfare brings together the child's everyday life in Boka. Contact visits and information barriers: ${modulMerke('barnevern-og-samvaer', 'en').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/barnevern', 'en'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_GB',
  },
};

export default function EnglishBarnevernPage() {
  return <BarnevernPageView locale="en" />;
}
