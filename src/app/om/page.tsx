import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { OmPageView } from '@/components/pages/OmPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/om', 'no'),
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
