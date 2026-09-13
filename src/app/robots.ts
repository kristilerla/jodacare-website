import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * robots.txt for jodacare.no.
 *
 * Alt er åpent, også for AI-crawlerne. Det er et bevisst valg: skal JodaCare
 * kunne nevnes når noen spør ChatGPT eller Claude om kommunikasjon mellom
 * pårørende og helsepersonell, må de få lese sidene. De er listet opp ved
 * navn slik at valget er synlig og lett å reversere.
 *
 * `/rettigheter` skal IKKE nevnes her. Siden er skjult med noindex, og en
 * Disallow-linje ville gjort adressen offentlig for alle som åpner robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
