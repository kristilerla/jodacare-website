import type { Metadata } from 'next';
import { Rettighetsveileder } from '@/components/rettigheter/Rettighetsveileder';

export const metadata: Metadata = {
  // absolute: root-layouten har malen «%s | jodacare», og tittelen skal stå som spesifisert
  title: { absolute: 'Rettighetsveilederen | JodaCare' },
  description:
    'Finn ut hva du har rett til, og få et ferdig klagebrev med lovhenvisning.',
  robots: { index: false, follow: false, nocache: true },
};

export default function RettigheterPage() {
  return <Rettighetsveileder />;
}
