import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { historier, finnHistorie } from '@/content/historier';
import { historieJsonLd, historieMetadata } from '@/lib/historier-meta';
import { jsonLd } from '@/lib/seo';
import { HistoriePageView } from '@/components/pages/HistoriePageView';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return historier.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const h = finnHistorie(slug);
  return h ? historieMetadata(h, 'no') : {};
}

export default async function HistoriePage({ params }: Props) {
  const { slug } = await params;
  const h = finnHistorie(slug);
  if (!h) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(historieJsonLd(h)) }}
      />
      <HistoriePageView historie={h} locale="no" />
    </>
  );
}
