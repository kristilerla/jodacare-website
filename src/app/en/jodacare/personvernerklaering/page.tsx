import { PersonvernerklaeringPageView } from '@/components/pages/PersonvernerklaeringPageView';
import { sprakvarianter } from '@/lib/seo';
import { personvernerklaeringMetadata } from '@/i18n/messages/personvernerklaering-page';

export const metadata = {
  ...personvernerklaeringMetadata('en'),
  alternates: sprakvarianter('/jodacare/personvernerklaering', 'en'),
};

export default function EnglishPersonvernerklaeringPage() {
  return <PersonvernerklaeringPageView locale="en" />;
}
