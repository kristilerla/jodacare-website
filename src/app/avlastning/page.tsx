import type { Metadata } from 'next';
import { AvlastningPageView } from '@/components/pages/AvlastningPageView';

export const metadata: Metadata = {
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
