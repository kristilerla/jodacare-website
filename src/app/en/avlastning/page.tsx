import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { AvlastningPageView } from '@/components/pages/AvlastningPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/avlastning', 'en'),
  title: 'JodaCare for respite: children with intellectual disabilities',
  description:
    'JodaCare creates continuity for the child. The child gets the same sense of safety at home and in respite care.',
  openGraph: {
    title: 'JodaCare for respite care',
    description: 'Boka, notices and a team around the child, shared by parents and staff.',
    locale: 'en_GB',
  },
};

export default function EnglishAvlastningPage() {
  return <AvlastningPageView locale="en" />;
}
