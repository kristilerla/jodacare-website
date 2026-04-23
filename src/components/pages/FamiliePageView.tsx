import { Hero, Pricing, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  PhotoIcon,
  CalendarDaysIcon,
  UsersIcon,
  HeartIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { getFamilieContent } from '@/i18n/messages/familie-page';
import type { Locale } from '@/lib/i18n/types';

const featureIcons = [
  PhotoIcon,
  CalendarDaysIcon,
  SparklesIcon,
  UsersIcon,
  HeartIcon,
] as const;

const scenarioIcons = [HeartIcon, SparklesIcon, MapPinIcon, ChatBubbleLeftRightIcon] as const;

type Props = { locale: Locale };

export function FamiliePageView({ locale }: Props) {
  const d = getFamilieContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: 'https://app.jodaskills.com/register?flow=family' }}
        secondaryCta={{ text: d.secondaryCta, href: d.secondaryCtaHref }}
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
                <p>
                  <em>{d.scenarioP2}</em>
                </p>
                <p>{d.scenarioP3}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section id="hvordan" className="py-20 lg:py-28" aria-labelledby="family-features-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="family-features-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.featuresTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.featuresSubtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? PhotoIcon;
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

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="who-for-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="who-for-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.whoTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.whoSubtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.scenarios.map((scenario, i) => {
              const Icon = scenarioIcons[i] ?? HeartIcon;
              return (
                <StaggerItem key={scenario.title}>
                  <Card variant="elevated" padding="md" className="h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    <CardContent className="mt-2 text-sm">{scenario.description}</CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="get-started-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 id="get-started-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.stepsTitle}
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

      <Pricing
        title={d.pricingTitle}
        subtitle={d.pricingSubtitle}
        tiers={d.pricingTiers}
        footnote={d.pricingFootnote}
      />

      <CTA
        title={d.ctaTitle}
        subtitle={d.ctaSubtitle}
        primaryCta={{ text: d.ctaPrimary, href: 'https://app.jodaskills.com/register?flow=family' }}
        variant="accent"
      />
    </>
  );
}
