import type { Metadata } from 'next';
import { CompanyBrief } from '@/components/brief';

export const metadata: Metadata = {
  // /en/brief serverer det samme dokumentet på samme språk — det er en
  // dublett, ikke en oversettelse. Begge peker derfor hit.
  alternates: { canonical: '/brief' },
  title: 'Company Brief',
  description:
    'JodaCare samler helsepersonell, pårørende og den det gjelder i én felles samtale. Brukt i kommuner siden 2016. Nye JodaCare lanseres høsten 2026.',
  openGraph: {
    title: 'JodaCare — Company Brief',
    description:
      'JodaCare samler helsepersonell, pårørende og den det gjelder i én felles samtale. Brukt i kommuner siden 2016.',
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function BriefPage() {
  return <CompanyBrief />;
}
