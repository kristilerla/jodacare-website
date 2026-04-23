import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  HomeModernIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  TvIcon,
  PhotoIcon,
  VideoCameraIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { getOmsorgsboligContent } from '@/i18n/messages/omsorgsbolig-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const hubIcons = [HomeModernIcon, HeartIcon, ClipboardDocumentListIcon] as const;
const featureIcons = [TvIcon, PhotoIcon, VideoCameraIcon, ChartBarIcon, CalendarDaysIcon, CpuChipIcon] as const;
const relatedIcons = [HeartIcon, ClipboardDocumentListIcon, VideoCameraIcon] as const;

type Props = { locale: Locale };

export function OmsorgsboligPageView({ locale }: Props) {
  const d = getOmsorgsboligContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: withLocale('/kontakt', locale) }}
        secondaryCta={{ text: d.secondaryCta, href: '#funksjoner' }}
        variant="page"
        badge={d.heroBadge}
      />

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="scenario-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2 id="scenario-title" className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6">
                {d.scenarioTitle}
              </h2>
              <div className="prose prose-lg text-text-light">
                <p>{d.scenarioP1}</p>
                <p>{d.scenarioP2}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="hub-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="hub-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.hubSectionTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.hubPerspectives.map((item, i) => {
              const Icon = hubIcons[i] ?? HomeModernIcon;
              return (
                <StaggerItem key={item.title}>
                  <Card variant="elevated" padding="lg" className="h-full text-center">
                    <div className="w-16 h-16 bg-accent-light/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent-dark" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                    <CardContent>{item.description}</CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section id="funksjoner" className="py-20 lg:py-28 bg-background-alt" aria-labelledby="features-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="features-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.featuresTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? TvIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="bordered" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-dark" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardContent className="mt-2">{feature.description}</CardContent>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="steps-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 id="steps-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.stepsSectionTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {d.steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-text-light">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="status-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium rounded-full mb-6">
                {d.statusBadge}
              </span>
              <h2 id="status-title" className="font-serif text-3xl sm:text-4xl font-bold text-text mb-6">
                {d.statusTitle}
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto mb-8">{d.statusP1}</p>
              <p className="text-text-light max-w-xl mx-auto mb-10">{d.statusP2}</p>
              <Button href={withLocale('/kontakt', locale)} size="lg">
                {d.statusCta}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

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
              const Icon = relatedIcons[i] ?? HeartIcon;
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
