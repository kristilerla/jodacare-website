import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { modulMerke } from '@/i18n/messages/status';
import { BarnevernPageView } from '@/components/pages/BarnevernPageView';

const title = 'JodaCare for barnevern: JodaCare følger barnet';
const description = `JodaCare for barnevern samler hverdagen rundt barnet i Boka. Samvær og informasjonsbarrierer: ${modulMerke('barnevern-og-samvaer', 'no').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/barnevern', 'no'),
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function BarnevernPage() {
  return <BarnevernPageView locale="no" />;
}
