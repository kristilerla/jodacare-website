import type { Metadata } from 'next';
import { OmPageView } from '@/components/pages/OmPageView';

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'jodacare ble grunnlagt av Kristil Erla Håland basert på egne erfaringer med å koordinere omsorg for sin mor med demens. Les historien bak.',
  openGraph: {
    title: 'Om jodacare',
    description: 'Historien bak jodacare — fra personlig erfaring til løsning for tusenvis av familier.',
  },
};

export default function OmPage() {
  return <OmPageView locale="no" />;
}
