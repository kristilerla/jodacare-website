import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getKommuneContent } from '@/i18n/messages/kommune-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function KommunePageView({ locale }: Props) {
  const d = getKommuneContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: withLocale('/kontakt', locale) }}
        variant="page"
      />

      <section className="border-y border-secondary">
        <Container>
          <div className="py-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {d.trustItems.map((item, i) => (
              <span key={item} className="flex items-center gap-x-4 text-xs sm:text-sm text-text-light">
                {i > 0 && (
                  <span className="hidden sm:inline text-secondary-dark" aria-hidden="true">
                    ·
                  </span>
                )}
                <span>✓ {item}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="services-title">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 id="services-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.servicesTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.servicesSubtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={withLocale(service.href, locale)} className="block h-full group">
                  <div className="h-full rounded-2xl border border-secondary bg-white p-8 flex flex-col transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif text-xl font-semibold text-text">{service.title}</h3>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${service.badgeColor}`}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-text-light text-sm leading-relaxed flex-1">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      {d.readMore} <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mb-4">{d.bottomTitle}</h2>
              <p className="text-lg text-text-light mb-8">{d.bottomBody}</p>
              <Button href={withLocale('/kontakt', locale)} size="lg">
                {d.bottomCta}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
