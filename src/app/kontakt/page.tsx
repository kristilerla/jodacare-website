import type { Metadata } from 'next';
import { Hero, ContactForm } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Kontakt oss',
  description: 'Ta kontakt med jodacare. Vi hjelper deg gjerne i gang, enten du er en kommune, organisasjon eller privat familie.',
  openGraph: {
    title: 'Kontakt jodacare',
    description: 'Ta kontakt for en uforpliktende prat om hvordan jodacare kan hjelpe deg.',
  },
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Vi vil gjerne høre fra deg"
        subtitle="Enten du har spørsmål, ønsker en demo, eller vil komme i gang — vi er her for å hjelpe."
        variant="page"
      />

      <ContactForm 
        showContactInfo={true}
        title="Send oss en melding"
        subtitle="Fyll ut skjemaet så tar vi kontakt med deg så snart som mulig."
      />
    </>
  );
}
