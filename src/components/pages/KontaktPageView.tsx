import { Hero, ContactForm } from '@/components/sections';
import type { Locale } from '@/lib/i18n/types';

const copy = {
  no: {
    heroTitle: 'Vi vil gjerne høre fra deg',
    heroSubtitle:
      'Enten du har spørsmål, ønsker en demo, eller vil komme i gang — vi er her for å hjelpe.',
    formTitle: 'Send oss en melding',
    formSubtitle: 'Fyll ut skjemaet så tar vi kontakt med deg så snart som mulig.',
  },
  en: {
    heroTitle: 'We would love to hear from you',
    heroSubtitle:
      'Whether you have questions, want a demo, or are ready to get started — we are here to help.',
    formTitle: 'Send us a message',
    formSubtitle: 'Fill in the form and we will get back to you as soon as we can.',
  },
};

type Props = { locale: Locale };

export function KontaktPageView({ locale }: Props) {
  const c = copy[locale];
  return (
    <>
      <Hero title={c.heroTitle} subtitle={c.heroSubtitle} variant="page" />
      <ContactForm
        showContactInfo={true}
        title={c.formTitle}
        subtitle={c.formSubtitle}
        locale={locale}
      />
    </>
  );
}
