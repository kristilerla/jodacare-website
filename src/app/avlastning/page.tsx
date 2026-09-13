import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { AvlastningPageView } from '@/components/pages/AvlastningPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/avlastning', 'no'),
  title: 'JodaCare for avlastning — barn med utviklingshemming',
  description:
    'JodaCare skaper kontinuitet for barnet — de samme rutinene og den samme tryggheten uansett om det er hjemme eller i avlastning.',
  openGraph: {
    title: 'JodaCare for avlastning — barn med utviklingshemming',
    description:
      'JodaCare skaper kontinuitet for barnet — de samme rutinene og den samme tryggheten uansett om det er hjemme eller i avlastning.',
  },
};

export default function AvlastningPage() {
  return <AvlastningPageView locale="no" />;
}
