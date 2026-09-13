import { BruksvilkarPageView } from '@/components/pages/BruksvilkarPageView';
import { sprakvarianter } from '@/lib/seo';
import { bruksvilkarMetadata } from '@/i18n/messages/bruksvilkar-page';

export const metadata = {
  ...bruksvilkarMetadata('no'),
  alternates: sprakvarianter('/jodacare/bruksvilkar', 'no'),
};

export default function BruksvilkarPage() {
  return <BruksvilkarPageView locale="no" />;
}
