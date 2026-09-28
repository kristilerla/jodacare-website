import Image from 'next/image';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { Container } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { alleHistorier } from '@/content/historier';
import { getHistorierPageContent } from '@/i18n/messages/historier-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function formaterDato(dato: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dato}T12:00:00`));
}

export function HistorierPageView({ locale }: Props) {
  const d = getHistorierPageContent(locale);
  const liste = alleHistorier();

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="pb-20 lg:pb-28" aria-labelledby="historier-title">
        <Container size="md">
          <h2 id="historier-title" className="sr-only">
            {d.listTitle}
          </h2>

          {d.languageNote && liste.length > 0 && (
            <p className="mb-8 text-sm text-text-light">{d.languageNote}</p>
          )}

          {liste.length === 0 ? (
            <FadeIn>
              <div className="rounded-2xl bg-background-alt p-10 text-center">
                <p className="font-serif text-2xl font-bold text-text">{d.emptyTitle}</p>
                <p className="mt-3 text-text-light">{d.emptyBody}</p>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer className="grid gap-8 sm:grid-cols-2">
              {liste.map((h) => (
                <StaggerItem key={h.slug}>
                  <article
                    lang={locale === 'en' ? 'nb' : undefined}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-shadow hover:shadow-lg"
                  >
                    {h.bilde && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={h.bilde.src}
                          alt={h.bilde.alt}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="img-tone object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm text-text-muted">
                        <time dateTime={h.dato} lang={locale === 'en' ? 'en' : undefined}>
                          {formaterDato(h.dato, locale)}
                        </time>
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-bold text-text">
                        <Link
                          href={withLocale(`/historier/${h.slug}`, locale)}
                          className="after:absolute after:inset-0 focus-visible:outline-none group-focus-within:underline"
                        >
                          {h.tittel}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-text-light">{h.ingress}</p>
                      <p
                        className="mt-4 text-sm font-medium text-primary"
                        aria-hidden="true"
                        lang={locale === 'en' ? 'en' : undefined}
                      >
                        {d.readStory} →
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </section>

      <CTA
        title={d.followTitle}
        subtitle={d.followBody}
        primaryCta={{
          text: d.followButton,
          href: withLocale('/kontakt', locale),
        }}
      />
    </>
  );
}
