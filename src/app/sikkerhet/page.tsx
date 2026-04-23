import type { Metadata } from 'next';
import { SikkerhetPageView } from '@/components/pages/SikkerhetPageView';

export const metadata: Metadata = {
  title: 'Sikkerhet',
  description:
    'jodacare tar sikkerhet på største alvor. Les om ID-porten, GDPR, databehandling og hvordan vi beskytter sensitive helseopplysninger.',
  openGraph: {
    title: 'Sikkerhet i jodacare',
    description:
      'Sikkerhetsnivå 4 med ID-porten, GDPR-compliant, data lagret i Europa. Les mer om hvordan vi beskytter dine data.',
  },
};

export default function SikkerhetPage() {
  return <SikkerhetPageView locale="no" />;
}
