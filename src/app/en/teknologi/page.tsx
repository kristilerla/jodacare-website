import type { Metadata } from 'next';
import { sprakvarianter } from '@/lib/seo';
import { TeknologiPageView } from '@/components/pages/TeknologiPageView';

export const metadata: Metadata = {
  alternates: sprakvarianter('/teknologi', 'en'),
  title: 'Technology',
  description:
    'The new JodaCare is built with modern technology. The platform is secure, scalable and user-friendly. Read about the platform, architecture and safeguards.',
  openGraph: {
    title: 'Technology in the new JodaCare',
    description:
      'Modern technology built for care. JodaCare runs in the browser and can be added to your home screen. Only the team around the service recipient can see the content.',
    locale: 'en_GB',
  },
};

export default function EnglishTeknologiPage() {
  return <TeknologiPageView locale="en" />;
}
