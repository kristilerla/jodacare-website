import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { modulMerke } from '@/i18n/messages/status';
import { BpaPageView } from '@/components/pages/BpaPageView';

const tittel = 'JodaCare for BPA: brukerstyrt personlig assistanse';
const beskrivelse = `JodaCare samler omsorgsteamet rundt brukeren i Boka, med beskjeder og team for assistenter og familie. BPA i nye JodaCare: ${modulMerke('bpa', 'no').tekst}.`;

export const metadata: Metadata = {
  alternates: sprakvarianter('/bpa', 'no'),
  title: tittel,
  description: beskrivelse,
  openGraph: {
    title: tittel,
    description: beskrivelse,
  },
};

export default function BpaPage() {
  return <BpaPageView locale="no" />;
}
