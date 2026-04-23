import type { Metadata } from 'next';
import { BarnevernPageView } from '@/components/pages/BarnevernPageView';

export const metadata: Metadata = {
  title: 'JodaCare for child welfare — contact visits and documentation',
  description:
    'jodacare supports supervised contact with information barriers that protect everyone involved and full traceability that meets legal requirements.',
  openGraph: {
    title: 'JodaCare for child welfare',
    description: 'Secure digital tools for case workers, foster carers and birth parents.',
    locale: 'en_GB',
  },
};

export default function EnglishBarnevernPage() {
  return <BarnevernPageView locale="en" />;
}
