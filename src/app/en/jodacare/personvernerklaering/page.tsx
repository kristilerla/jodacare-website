import { PersonvernerklaeringPageView } from '@/components/pages/PersonvernerklaeringPageView';
import { personvernerklaeringMetadata } from '@/i18n/messages/personvernerklaering-page';

export const metadata = personvernerklaeringMetadata('en');

export default function EnglishPersonvernerklaeringPage() {
  return <PersonvernerklaeringPageView locale="en" />;
}
