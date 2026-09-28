import type { MetadataRoute } from 'next';
import { RUTEPAR, SITE_URL } from '@/lib/seo';
import { historier } from '@/content/historier';

/**
 * Sitemap for jodacare.no.
 *
 * Bygget fra RUTEPAR i src/lib/seo.ts, så en ny side bare trenger å
 * registreres ett sted. `/rettigheter` står ikke i listen og skal ikke inn:
 * siden er bevisst skjult.
 *
 * Hver oppføring oppgir språkvariantene sine, slik at Google ser at den
 * norske og engelske siden er samme innhold på to språk.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const oppdatert = new Date();

  const prioritet = (sti: string) => {
    if (sti === '/') return 1;
    if (['/familie', '/kommune', '/priser'].includes(sti)) return 0.9;
    if (sti.startsWith('/jodacare/')) return 0.3;
    return 0.7;
  };

  const sider = Object.entries(RUTEPAR).flatMap(([noSti, enSti]) => {
    const sprak = { 'nb-NO': `${SITE_URL}${noSti}`, en: `${SITE_URL}${enSti}` };
    return [
      {
        url: `${SITE_URL}${noSti}`,
        lastModified: oppdatert,
        changeFrequency: 'monthly' as const,
        priority: prioritet(noSti),
        alternates: { languages: sprak },
      },
      {
        url: `${SITE_URL}${enSti}`,
        lastModified: oppdatert,
        changeFrequency: 'monthly' as const,
        priority: prioritet(noSti) - 0.2,
        alternates: { languages: sprak },
      },
    ];
  });

  // Historiene er skrevet på norsk. Den engelske adressen peker kanonisk
  // hit, så bare den norske står i sitemap.
  const historieSider = historier.map((h) => ({
    url: `${SITE_URL}/historier/${h.slug}`,
    lastModified: new Date(`${h.dato}T12:00:00`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...sider, ...historieSider];
}
