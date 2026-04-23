'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ArrowRightIcon,
  HeartIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import { getHomeMessages } from '@/i18n/messages/home';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const pathIcons = [HeartIcon, BuildingOffice2Icon, HandRaisedIcon] as const;

type Props = {
  locale: Locale;
};

export function HomePageView({ locale }: Props) {
  const m = getHomeMessages(locale);

  return (
    <>
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/hero/hero-1.jpg"
            alt={m.heroAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <Container size="md" className="relative z-10">
          <div className="py-20 lg:py-28 text-center max-w-2xl mx-auto">
            <FadeIn>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-white font-serif font-bold drop-shadow-lg">
                {m.heroHeadline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-5 text-xl sm:text-2xl leading-relaxed text-white font-serif drop-shadow-lg">
                {m.heroP1}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-8 text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-md">
                {m.heroP2}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label={m.storyAria}>
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 text-center text-text">
          <FadeIn>
            <p className="text-base sm:text-lg leading-relaxed">{m.storyP1}</p>
            <p className="mt-6 text-base sm:text-lg leading-relaxed">{m.storyP2}</p>
            <p className="mt-6 text-base sm:text-lg leading-relaxed italic">{m.storyP3}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary-dark py-16 lg:py-20" aria-label={m.quoteAria}>
        <Container size="md">
          <div className="text-center max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-sm text-white/70">{m.quoteCaption}</p>
              <blockquote className="mt-6">
                <p className="text-2xl sm:text-3xl leading-relaxed text-white font-serif drop-shadow-lg">
                  {m.quoteBody}
                </p>
              </blockquote>
              <p className="mt-6 text-sm text-white/80">{m.quoteAttribution}</p>
              <p className="mt-8 text-base sm:text-lg text-white/90 italic leading-relaxed">
                {m.quoteClosing}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="path-title">
        <Container>
          <FadeIn>
            <h2
              id="path-title"
              className="text-center font-serif text-2xl sm:text-3xl font-bold text-text mb-16"
            >
              {m.pathTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {m.pathCards.map((card, index) => {
              const Icon = pathIcons[index] ?? HeartIcon;
              return (
                <StaggerItem key={card.title}>
                  <Link href={withLocale(card.href, locale)} className="block h-full group">
                    <div
                      className={`h-full rounded-2xl bg-white p-8 flex flex-col transition-all duration-200 ${
                        card.highlighted
                          ? 'border-2 border-primary shadow-lg'
                          : 'border border-secondary hover:border-primary/40 hover:shadow-md'
                      }`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-serif text-xl font-semibold text-text">{card.title}</h3>
                      <p className="mt-3 text-text-light text-sm leading-relaxed flex-1">
                        {card.description}
                      </p>
                      <span
                        className={`mt-4 inline-block self-start px-3 py-1 text-xs font-medium rounded-full ${card.badgeColor}`}
                      >
                        {card.badge}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        {card.cta} <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="border-y border-secondary">
        <Container>
          <div className="py-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {m.trustItems.map((item, i) => (
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
            <div className="text-center mb-12">
              <h2 id="services-title" className="font-serif text-2xl sm:text-3xl font-bold text-text">
                {m.servicesTitle}
              </h2>
              <p className="mt-3 text-sm text-text-light">{m.servicesSubtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {m.services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={withLocale(service.href, locale)} className="block group">
                  <div className="flex items-center justify-between rounded-xl border border-secondary bg-white px-6 py-5 transition-all hover:border-primary/40 hover:shadow-sm">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif font-semibold text-text">{service.title}</h3>
                        <span
                          className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${service.badgeColor}`}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-text-light truncate">{service.subtitle}</p>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-text-muted flex-shrink-0 ml-4 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
