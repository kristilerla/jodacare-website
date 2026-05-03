import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  DeviceTabletIcon,
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
  KeyIcon,
  IdentificationIcon,
  BuildingOfficeIcon,
  ArrowsRightLeftIcon,
  EnvelopeIcon,
  SparklesIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  ChartBarIcon,
  LinkIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { getTeknologiPageCopy, techBadges } from '@/i18n/messages/teknologi-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const platformIcons = [GlobeAltIcon, DevicePhoneMobileIcon, ArrowPathIcon, DeviceTabletIcon] as const;
const archIcons = [CloudIcon, ServerIcon, CircleStackIcon, RocketLaunchIcon] as const;
const securityIcons = [
  CircleStackIcon,
  UserGroupIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
] as const;
const authIcons = [KeyIcon, IdentificationIcon, BuildingOfficeIcon] as const;
const integrationIcons = [ArrowsRightLeftIcon, LinkIcon, CpuChipIcon, EnvelopeIcon] as const;
const aiIcons = [SparklesIcon, DocumentTextIcon] as const;

type Props = { locale: Locale };

export function TeknologiPageView({ locale }: Props) {
  const d = getTeknologiPageCopy(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        variant="page"
        primaryCta={{ text: d.contactCta, href: withLocale('/kontakt', locale) }}
        secondaryCta={{ text: d.securityLinkCta, href: withLocale('/sikkerhet', locale) }}
      />

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="platform-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="accent" className="mb-4">
                {d.platformBadge}
              </Badge>
              <h2 id="platform-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.platformTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.platformIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.platformFeatures.map((feature, i) => {
              const Icon = platformIcons[i] ?? GlobeAltIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="elevated" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
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

      <section className="py-20 lg:py-28" aria-labelledby="architecture-title">
        <Container size="md">
          <FadeIn>
            <Card variant="bordered" padding="lg">
              <h2
                id="architecture-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text mb-8 text-center"
              >
                {d.archTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  {d.archPoints.map((point, i) => {
                    const Icon = archIcons[i] ?? CloudIcon;
                    return (
                      <div key={point.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-text">{point.title}</h3>
                          <p className="mt-1 text-sm text-text-light">{point.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-4">{d.techTitle}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techBadges.map((tech) => (
                      <Badge key={tech} variant="default" size="md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-text-light">{d.techIntro}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="security-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="success" className="mb-4">
                {d.securityBadge}
              </Badge>
              <h2 id="security-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.securityTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.securityIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.securityFeatures.map((feature, i) => {
              const Icon = securityIcons[i] ?? ShieldCheckIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="bordered" padding="md" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-success" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{feature.title}</CardTitle>
                        <CardContent className="mt-1 text-sm">{feature.description}</CardContent>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="auth-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="auth-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.authTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.authIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {d.authMethods.map((method, i) => {
              const Icon = authIcons[i] ?? KeyIcon;
              return (
                <StaggerItem key={method.title}>
                  <Card variant="elevated" padding="lg" className="h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <Badge variant={method.badgeVariant} size="sm" className="mb-3">
                      {method.badge}
                    </Badge>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardContent className="mt-2 text-sm">{method.description}</CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="onboarding-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="onboarding-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.onboardingTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.onboardingIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {d.onboardingSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-light">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="integrations-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="accent" className="mb-4">
                {d.integrationsBadge}
              </Badge>
              <h2 id="integrations-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.integrationsTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.integrationsIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.integrations.map((item, i) => {
              const Icon = integrationIcons[i] ?? LinkIcon;
              return (
                <StaggerItem key={item.title}>
                  <Card variant="bordered" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <Badge variant={item.badgeVariant} size="sm">
                            {item.badge}
                          </Badge>
                        </div>
                        <CardContent className="mt-2">{item.description}</CardContent>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="ai-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="warning" className="mb-4">
                {d.aiBadge}
              </Badge>
              <h2 id="ai-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.aiTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.aiIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.aiFeatures.map((feature, i) => {
              const Icon = aiIcons[i] ?? SparklesIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="elevated" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-warning" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardContent className="mt-2">{feature.description}</CardContent>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {d.aiUpcoming.length > 0 && (
            <FadeIn>
              <div className="mt-12 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="warning">{d.aiUpcomingTitle}</Badge>
                </div>
                {d.aiUpcoming.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-warning/30 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                        <ChartBarIcon className="w-6 h-6 text-warning" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-text">{item.title}</h3>
                        <p className="mt-2 text-text-light">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.3}>
            <p className="mt-10 text-center text-sm text-text-muted max-w-2xl mx-auto">{d.aiFootnote}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 border-y border-secondary" aria-labelledby="facts-title">
        <Container>
          <FadeIn>
            <h2 id="facts-title" className="sr-only">
              {d.factsSr}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {d.facts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{fact.value}</div>
                  <div className="text-sm text-text-muted">{fact.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTA
        title={d.ctaTitle}
        subtitle={d.ctaSubtitle}
        primaryCta={{ text: d.ctaPrimary, href: withLocale('/kontakt', locale) }}
        secondaryCta={{ text: d.ctaSecondary, href: withLocale('/sikkerhet', locale) }}
      />
    </>
  );
}
