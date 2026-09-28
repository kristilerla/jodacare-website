import type { Metadata } from 'next';
import type { Historie } from '@/content/historier';
import { SITE_URL } from '@/lib/seo';

/**
 * Metadata for én historie. Open Graph-feltene er det LinkedIn og Facebook
 * leser når noen limer inn lenken: tittel, ingress og bilde blir
 * forhåndsvisningen i innlegget.
 *
 * Historiene finnes bare på norsk, så den engelske adressen peker kanonisk
 * på den norske.
 */
export function historieMetadata(h: Historie, sprak: 'no' | 'en'): Metadata {
  // Uten eget bilde brukes nettstedets delingsbilde, ellers blir
  // forhåndsvisningen på LinkedIn og Facebook tom.
  const bilde = h.bilde
    ? [{ url: h.bilde.src, alt: h.bilde.alt }]
    : [{ url: '/og-image.png', width: 1200, height: 630, alt: 'JodaCare' }];
  return {
    title: h.tittel,
    description: h.ingress,
    alternates: { canonical: `/historier/${h.slug}` },
    openGraph: {
      type: 'article',
      title: h.tittel,
      description: h.ingress,
      url: `/historier/${h.slug}`,
      publishedTime: h.dato,
      authors: [h.forfatter],
      locale: sprak === 'en' ? 'en_GB' : 'nb_NO',
      images: bilde,
    },
    twitter: {
      card: 'summary_large_image',
      title: h.tittel,
      description: h.ingress,
      images: [bilde[0].url],
    },
  };
}

/** Strukturerte data for én historie. Bare felter som står synlig på siden. */
export function historieJsonLd(h: Historie) {
  return {
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/historier/${h.slug}#historie`,
    headline: h.tittel,
    description: h.ingress,
    datePublished: h.dato,
    inLanguage: 'nb-NO',
    url: `${SITE_URL}/historier/${h.slug}`,
    author: {
      '@type': 'Person',
      name: h.forfatter,
      ...(h.forfatterRolle && { jobTitle: h.forfatterRolle }),
    },
    publisher: { '@id': `${SITE_URL}/#organisasjon` },
    ...(h.bilde && { image: `${SITE_URL}${h.bilde.src}` }),
  };
}
