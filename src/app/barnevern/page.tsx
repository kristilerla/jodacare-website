import type { Metadata } from 'next';
import { BarnevernPageView } from '@/components/pages/BarnevernPageView';

export const metadata: Metadata = {
  title: 'JodaCare for barnevern — samvær og dokumentasjon',
  description:
    'JodaCare håndterer samvær med informasjonsbarrierer som beskytter alle parter og full sporbarhet som tilfredsstiller lovkravene.',
  openGraph: {
    title: 'JodaCare for barnevern — samvær og dokumentasjon',
    description:
      'JodaCare håndterer samvær med informasjonsbarrierer som beskytter alle parter og full sporbarhet som tilfredsstiller lovkravene.',
  },
};

export default function BarnevernPage() {
  return <BarnevernPageView locale="no" />;
}
