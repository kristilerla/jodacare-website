import type { Metadata } from 'next';
import { HomePageView } from '@/components/pages/HomePageView';
import { jsonLd, plattformen, sprakvarianter } from '@/lib/seo';

// Tittel og beskrivelse arves fra root-layouten — den er skrevet for forsiden.
// Her settes bare kanonisk adresse og språkvarianter.
export const metadata: Metadata = {
  alternates: sprakvarianter('/', 'no'),
};

export default function Home() {
  return (
    <>
      {/* Selve plattformen, beskrevet strukturert. Ligger bare på forsiden. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(plattformen) }}
      />
      <HomePageView locale="no" />
    </>
  );
}
