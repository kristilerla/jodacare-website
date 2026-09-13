import { PersonvernerklaeringPageView } from '@/components/pages/PersonvernerklaeringPageView';
import { sprakvarianter } from '@/lib/seo';
import { personvernerklaeringMetadata } from '@/i18n/messages/personvernerklaering-page';

export const metadata = {
  ...personvernerklaeringMetadata('no'),
  alternates: sprakvarianter('/jodacare/personvernerklaering', 'no'),
};

export default function PersonvernerklaeringPage() {
  return <PersonvernerklaeringPageView locale="no" />;
}
