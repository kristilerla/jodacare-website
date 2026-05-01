import { BruksvilkarPageView } from '@/components/pages/BruksvilkarPageView';
import { bruksvilkarMetadata } from '@/i18n/messages/bruksvilkar-page';

export const metadata = bruksvilkarMetadata('en');

export default function EnglishBruksvilkarPage() {
  return <BruksvilkarPageView locale="en" />;
}
