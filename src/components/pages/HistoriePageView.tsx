import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { tilBlokker, type Historie } from '@/content/historier';
import { getHistorierPageContent } from '@/i18n/messages/historier-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';
import { SITE_URL } from '@/lib/seo';
import { formaterDato } from './HistorierPageView';

type Props = { historie: Historie; locale: Locale };

/**
 * Deling skjer med vanlige lenker, ikke med skript fra Facebook eller
 * LinkedIn. Nettstedet lover at ingenting lastes før brukeren har sagt ja,
 * og en innebygd delingsknapp ville satt informasjonskapsler.
 */
function delingslenker(url: string) {
  const u = encodeURIComponent(url);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
  };
}

const KANALNAVN = { linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram' } as const;

export function HistoriePageView({ historie: h, locale }: Props) {
  const d = getHistorierPageContent(locale);
  const blokker = tilBlokker(h.tekst);
  const del = delingslenker(`${SITE_URL}/historier/${h.slug}`);
  const kanaler = (Object.keys(KANALNAVN) as (keyof typeof KANALNAVN)[]).filter(
    (k) => h.lenker?.[k],
  );
  const tekstSprak = locale === 'en' ? 'nb' : undefined;

  return (
    <article className="py-16 lg:py-24" aria-labelledby="historie-tittel">
      <Container size="sm">
        <FadeIn>
          <Link
            href={withLocale('/historier', locale)}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← {d.backToList}
          </Link>

          {d.languageNote && <p className="mt-6 text-sm text-text-light">{d.languageNote}</p>}

          <header className="mt-6" lang={tekstSprak}>
            <h1
              id="historie-tittel"
              className="font-serif text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl"
            >
              {h.tittel}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-light sm:text-xl">{h.ingress}</p>
          </header>

          <p className="mt-6 text-sm text-text-muted">
            {d.byline} {h.forfatter}
            {h.forfatterRolle && <span lang={tekstSprak}>, {h.forfatterRolle}</span>} ·{' '}
            <time dateTime={h.dato}>{formaterDato(h.dato, locale)}</time>
          </p>
        </FadeIn>

        {h.bilde && (
          <FadeIn>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={h.bilde.src}
                alt={h.bilde.alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="img-tone object-cover"
                style={h.bilde.fokus ? { objectPosition: h.bilde.fokus } : undefined}
                priority
              />
            </div>
          </FadeIn>
        )}

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-text" lang={tekstSprak}>
          {blokker.map((b, i) => {
            if (b.type === 'mellomtittel') {
              return (
                <h2 key={i} className="pt-4 font-serif text-2xl font-bold text-text">
                  {b.tekst}
                </h2>
              );
            }
            if (b.type === 'sitat') {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-primary pl-6 font-serif text-xl italic text-text"
                >
                  {b.tekst}
                </blockquote>
              );
            }
            return <p key={i}>{b.tekst}</p>;
          })}
        </div>

        <footer className="mt-14 space-y-8 border-t border-secondary pt-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-light">
              {d.shareTitle}
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={del.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-secondary-dark px-4 py-2 text-sm font-medium text-text hover:border-primary hover:text-primary"
              >
                {d.shareLinkedin}
                <span className="sr-only"> ({d.newWindow})</span>
              </a>
              <a
                href={del.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-secondary-dark px-4 py-2 text-sm font-medium text-text hover:border-primary hover:text-primary"
              >
                {d.shareFacebook}
                <span className="sr-only"> ({d.newWindow})</span>
              </a>
            </div>
          </div>

          {kanaler.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-light">
                {d.alsoOnTitle}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-4">
                {kanaler.map((k) => (
                  <li key={k}>
                    <a
                      href={h.lenker![k]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {KANALNAVN[k]} →<span className="sr-only"> ({d.newWindow})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={withLocale('/historier', locale)}
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            ← {d.backToList}
          </Link>
        </footer>
      </Container>
    </article>
  );
}
