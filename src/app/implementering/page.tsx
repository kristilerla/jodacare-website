import type { Metadata } from 'next';
import { ImplementeringPageView } from '@/components/pages/ImplementeringPageView';

export const metadata: Metadata = {
  title: 'JodaCare — Vi hjelper med implementeringen',
  description:
    'JodaCare tildeler en egen Implementeringsansvarlig som veileder din kommune fra første oppsett til plattformen sitter i ryggmargen.',
  openGraph: {
    title: 'JodaCare — Vi hjelper med implementeringen',
    description:
      'JodaCare tildeler en egen Implementeringsansvarlig som veileder din kommune fra første oppsett til plattformen sitter i ryggmargen.',
  },
};

export default function ImplementeringPage() {
  return <ImplementeringPageView locale="no" />;
}
