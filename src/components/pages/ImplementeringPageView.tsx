import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { HomeModernIcon, HeartIcon, UsersIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { getImplementeringContent } from '@/i18n/messages/implementering-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const relatedIcons = [HomeModernIcon, UsersIcon, HeartIcon] as const;

type Props = { locale: Locale };

export function ImplementeringPageView({ locale }: Props) {
  const d = getImplementeringContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: withLocale('/kontakt', locale) }}
        variant="page"
        badge={d.heroBadge}
      />

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="practice-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2 id="practice-title" className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6">
                {d.practiceTitle}
              </h2>
              <div className="prose prose-lg text-text-light space-y-4">
                <p>{d.practiceP1}</p>
                <p>{d.practiceP2}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="includes-title">
        <Container size="md">
          <FadeIn>
            <h2 id="includes-title" className="font-serif text-2xl sm:text-3xl font-bold text-text mb-8">
              {d.includesTitle}
            </h2>
            <ul className="space-y-4">
              {d.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </span>
                  <span className="text-text-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-background-alt">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-semibold text-text">{d.bannerTitle}</p>
              <p className="mt-4 text-text-light">{d.bannerBody}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTA
        title={d.ctaTitle}
        subtitle={d.ctaSubtitle}
        primaryCta={{ text: d.ctaPrimary, href: withLocale('/kontakt', locale) }}
      />

      <section className="py-20 lg:py-28" aria-labelledby="related-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="related-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.relatedTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.related.map((page, i) => {
              const Icon = relatedIcons[i] ?? HomeModernIcon;
              return (
                <StaggerItem key={page.title}>
                  <Link href={withLocale(page.href, locale)} className="block h-full group">
                    <Card
                      variant="elevated"
                      padding="lg"
                      className="h-full text-center transition-shadow group-hover:shadow-xl"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg">{page.title}</CardTitle>
                      <CardContent className="mt-2 text-sm">{page.description}</CardContent>
                      <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        {d.readMore} <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
