import type { Locale } from '@/lib/i18n/types';

export type ContactFormCopy = {
  contactInfoTitle: string;
  contactInfoBody: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  cardName: string;
  cardRole: string;
  thanksTitle: string;
  thanksBody: string;
  nameLabel: string;
  namePlaceholder: string;
  emailFieldLabel: string;
  emailPlaceholder: string;
  phoneFieldLabel: string;
  phonePlaceholder: string;
  typeLabel: string;
  types: { value: string; label: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  privacyNote: string;
  errorGeneric: string;
  errorSendFailed: string;
};

const no: ContactFormCopy = {
  contactInfoTitle: 'Kontaktinformasjon',
  contactInfoBody:
    'Ta gjerne kontakt om du har spørsmål om jodacare, ønsker en demo, eller vil komme i gang.',
  emailLabel: 'E-post',
  phoneLabel: 'Telefon',
  addressLabel: 'Adresse',
  cardName: 'Kristil Erla Håland',
  cardRole: 'Gründer og daglig leder',
  thanksTitle: 'Takk for din henvendelse!',
  thanksBody: 'Vi tar kontakt med deg så snart som mulig.',
  nameLabel: 'Navn',
  namePlaceholder: 'Ditt navn',
  emailFieldLabel: 'E-post',
  emailPlaceholder: 'din@epost.no',
  phoneFieldLabel: 'Telefon',
  phonePlaceholder: '+47 XXX XX XXX',
  typeLabel: 'Type henvendelse',
  types: [
    { value: 'general', label: 'Generell henvendelse' },
    { value: 'kommune', label: 'Kommune / organisasjon' },
    { value: 'familie', label: 'Privat familie' },
    { value: 'demo', label: 'Ønsker demo' },
    { value: 'support', label: 'Support' },
  ],
  messageLabel: 'Melding',
  messagePlaceholder: 'Fortell oss hva vi kan hjelpe deg med...',
  submit: 'Send melding',
  submitting: 'Sender...',
  privacyNote:
    'Ved å sende inn skjemaet godtar du at vi behandler dine personopplysninger i henhold til vår personvernerklæring.',
  errorGeneric: 'Noe gikk galt.',
  errorSendFailed: 'Kunne ikke sende melding. Vennligst prøv igjen senere.',
};

const en: ContactFormCopy = {
  contactInfoTitle: 'Contact details',
  contactInfoBody:
    'Reach out if you have questions about jodacare, want a demo, or are ready to get started.',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  addressLabel: 'Address',
  cardName: 'Kristil Erla Håland',
  cardRole: 'Founder and CEO',
  thanksTitle: 'Thank you for your message!',
  thanksBody: 'We will get back to you as soon as we can.',
  nameLabel: 'Name',
  namePlaceholder: 'Your name',
  emailFieldLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  phoneFieldLabel: 'Phone',
  phonePlaceholder: '+47 XXX XX XXX',
  typeLabel: 'Type of enquiry',
  types: [
    { value: 'general', label: 'General enquiry' },
    { value: 'kommune', label: 'Municipality / organisation' },
    { value: 'familie', label: 'Private family' },
    { value: 'demo', label: 'Request a demo' },
    { value: 'support', label: 'Support' },
  ],
  messageLabel: 'Message',
  messagePlaceholder: 'Tell us how we can help...',
  submit: 'Send message',
  submitting: 'Sending...',
  privacyNote:
    'By submitting this form you agree that we process your personal data in line with our privacy notice.',
  errorGeneric: 'Something went wrong.',
  errorSendFailed: 'Could not send the message. Please try again later.',
};

export function getContactFormCopy(locale: Locale): ContactFormCopy {
  return locale === 'en' ? en : no;
}
