import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { AvlastningPageView } from '@/components/pages/AvlastningPageView';

const tittel = 'JodaCare for avlastning: barn med utviklingshemming';
const beskrivelse =
  'JodaCare skaper kontinuitet for barnet. Barnet får den samme tryggheten hjemme og i avlastning.';

export const metadata: Metadata = {
  alternates: sprakvarianter('/avlastning', 'no'),
  title: tittel,
  description: beskrivelse,
  openGraph: {
    title: tittel,
    description: beskrivelse,
  },
};

export default function AvlastningPage() {
  return <AvlastningPageView locale="no" />;
}
