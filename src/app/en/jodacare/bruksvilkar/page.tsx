import { BruksvilkarPageView } from '@/components/pages/BruksvilkarPageView';
import { sprakvarianter } from '@/lib/seo';
import { bruksvilkarMetadata } from '@/i18n/messages/bruksvilkar-page';

export const metadata = {
  ...bruksvilkarMetadata('en'),
  alternates: sprakvarianter('/jodacare/bruksvilkar', 'en'),
};

export default function EnglishBruksvilkarPage() {
  return <BruksvilkarPageView locale="en" />;
}
