import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { OmPageView } from '@/components/pages/OmPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/om', 'no'),
  title: 'Om oss',
  description:
    'JodaCare ble grunnlagt av Kristil Erla Håland basert på egne erfaringer med å koordinere omsorg for sin mor med demens. Les historien bak.',
  openGraph: {
    title: 'Om JodaCare',
    description: 'Historien bak JodaCare, fra personlig erfaring til en plattform for familier og kommuner.',
  },
};

export default function OmPage() {
  return <OmPageView locale="no" />;
}
