import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { historier, finnHistorie } from '@/content/historier';
import { historieMetadata } from '@/lib/historier-meta';
import { HistoriePageView } from '@/components/pages/HistoriePageView';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return historier.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const h = finnHistorie(slug);
  return h ? historieMetadata(h, 'en') : {};
}

/** Samme historie med engelsk ramme. Kanonisk adresse er den norske. */
export default async function EnglishHistoriePage({ params }: Props) {
  const { slug } = await params;
  const h = finnHistorie(slug);
  if (!h) notFound();
  return <HistoriePageView historie={h} locale="en" />;
}
