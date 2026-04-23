import type { Metadata } from 'next';
import { AvlastningPageView } from '@/components/pages/AvlastningPageView';

export const metadata: Metadata = {
  title: 'JodaCare for respite — children with intellectual disabilities',
  description:
    'JodaCare creates continuity for the child — the same routines and the same sense of safety at home and in respite care.',
  openGraph: {
    title: 'JodaCare for respite care',
    description: 'Shared routines, secure communication and a calmer everyday life for child, parents and staff.',
    locale: 'en_GB',
  },
};

export default function EnglishAvlastningPage() {
  return <AvlastningPageView locale="en" />;
}
