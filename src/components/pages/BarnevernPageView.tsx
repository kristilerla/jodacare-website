import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ScaleIcon,
  HomeIcon,
  UserIcon,
  HandRaisedIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  LockClosedIcon,
  BuildingLibraryIcon,
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ArrowRightIcon,
  PencilSquareIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
  GlobeEuropeAfricaIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  RocketLaunchIcon,
  UsersIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { getBarnevernContent } from '@/i18n/messages/barnevern-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const roleIcons = [ScaleIcon, HomeIcon, UserIcon, HandRaisedIcon] as const;
const featureIcons = [
  CalendarDaysIcon,
  PencilSquareIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
] as const;
const trustIcons = [
  IdentificationIcon,
  GlobeEuropeAfricaIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
] as const;
const scenarioIcons = [UsersIcon, ClockIcon, EnvelopeIcon, MagnifyingGlassIcon] as const;
const relatedIcons = [
  ClipboardDocumentListIcon,
  HomeModernIcon,
  HandRaisedIcon,
  LockClosedIcon,
] as const;
const statusColumnIcons = [CheckCircleIcon, ClockIcon, RocketLaunchIcon] as const;
const statusColumnColors = [
  'bg-green-50 border-green-200',
  'bg-orange-50 border-orange-200',
  'bg-gray-50 border-gray-200',
] as const;
const statusHeaderColors = [
  'text-green-700',
  'text-orange-700',
  'text-gray-600',
] as const;
const statusDotColors = [
  'bg-green-500',
  'bg-orange-400',
  'bg-gray-400',
] as const;

type Props = { locale: Locale };

export function BarnevernPageView({ locale }: Props) {
  const d = getBarnevernContent(locale);

  return (
    <>
      {/* Seksjon 1 — Hero */}
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: withLocale('/kontakt', locale) }}
        secondaryCta={{ text: d.secondaryCta, href: '#slik-henger-det-sammen' }}
        variant="page"
        badge={d.heroBadge}
      />

      {/* Seksjon 2 — Mai Life + JodaCare */}
      <section
        id="mai-life-jodacare"
        className="py-20 lg:py-28"
        style={{ backgroundColor: '#E1F5EE' }}
        aria-labelledby="partner-title"
      >
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  id="partner-title"
                  className="font-serif text-3xl sm:text-4xl font-bold text-text mb-4"
                >
                  {d.partnerSectionTitle}
                </h2>
                <p className="text-lg text-text-light leading-relaxed">
                  {d.partnerIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {d.partnerCards.map((card) => (
                  <Card
                    key={card.title}
                    variant="elevated"
                    padding="lg"
                    className="h-full"
                  >
                    <CardTitle className="text-lg mb-3">{card.title}</CardTitle>
                    <CardContent>{card.description}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Seksjon 3 — Kjenner du deg igjen? */}
      <section className="py-20 lg:py-28" aria-labelledby="scenario-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="scenario-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.scenarioTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.scenarios.map((scenario, i) => {
              const Icon = scenarioIcons[i] ?? UsersIcon;
              return (
                <StaggerItem key={scenario.title}>
                  <div
                    className="bg-white rounded-xl p-6 h-full"
                    style={{ borderLeft: '4px solid #D85A30' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEF2ED' }}>
                        <Icon className="w-5 h-5" style={{ color: '#D85A30' }} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-text mb-2">
                          {scenario.title}
                        </h3>
                        <p className="text-text-light">{scenario.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Seksjon 4 — Slik henger det sammen */}
      <section
        id="slik-henger-det-sammen"
        className="py-20 lg:py-28 bg-background-alt"
        aria-labelledby="roles-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="roles-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.rolesTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.rolesSubtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.roles.map((role, i) => {
              const Icon = roleIcons[i] ?? ScaleIcon;
              return (
                <StaggerItem key={role.title}>
                  <Card variant="elevated" padding="lg" className="h-full text-center">
                    <div className="w-16 h-16 bg-accent-light/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent-dark" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl mb-3">{role.title}</CardTitle>
                    <CardContent>{role.description}</CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn>
            <p className="text-center text-sm text-text-muted mt-10">
              {d.rolesFootnote}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Seksjon 5 — Funksjoner */}
      <section
        id="funksjoner"
        className="py-20 lg:py-28"
        aria-labelledby="features-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="features-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.featuresTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? CalendarDaysIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="bordered" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                        <Icon
                          className="w-6 h-6 text-accent-dark"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardContent className="mt-2">
                          {feature.description}
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Seksjon 6 — Erfaringer fra liknende arbeid */}
      <section
        className="py-20 lg:py-28 bg-background-alt"
        aria-labelledby="experience-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="experience-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.experienceTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">
                {d.experienceSubtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.experiences.map((exp) => (
              <StaggerItem key={exp.title}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <CardTitle className="text-lg mb-3">{exp.title}</CardTitle>
                  <CardContent>{exp.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Seksjon 7 — Hva dere får igjen */}
      <section className="py-20 lg:py-28" aria-labelledby="efficiency-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="efficiency-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.efficiencyTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">
                {d.efficiencySubtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {d.efficiencyItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-3" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="text-text-light mt-1">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <p className="mt-12 text-sm text-text-muted italic leading-relaxed">
              {d.efficiencyDisclaimer}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Seksjon 8 — Trygghet og lovgrunnlag */}
      <section
        className="py-20 lg:py-28 bg-background-alt"
        aria-labelledby="trust-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="trust-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.trustTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.trustItems.map((item, i) => {
              const Icon = trustIcons[i] ?? ShieldCheckIcon;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-accent-dark"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-text">
                        {item.title}
                      </h3>
                      <p className="text-text-light mt-1">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href={withLocale('/sikkerhet', locale)}
                className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
              >
                {d.trustLink}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Seksjon 9 — Status */}
      <section className="py-20 lg:py-28" aria-labelledby="status-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="status-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.statusTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.statusColumns.map((col, i) => {
              const Icon = statusColumnIcons[i] ?? CheckCircleIcon;
              return (
                <StaggerItem key={col.title}>
                  <div
                    className={`rounded-xl border p-6 h-full ${statusColumnColors[i]}`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Icon
                        className={`w-6 h-6 ${statusHeaderColors[i]}`}
                        aria-hidden="true"
                      />
                      <h3
                        className={`font-serif text-lg font-semibold ${statusHeaderColors[i]}`}
                      >
                        {col.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${statusDotColors[i]}`}
                          />
                          <span className="text-text-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Seksjon 10 — CTA-footer */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: '#0F6E56' }}
        aria-labelledby="cta-title"
      >
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h2
                id="cta-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-white"
              >
                {d.ctaTitle}
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {d.ctaBody}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`${withLocale('/kontakt', locale)}?tema=Pilot+for+barnevern`}
                  className="inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg transition-all duration-200 ease-in-out text-white"
                  style={{ backgroundColor: '#D85A30' }}
                >
                  {d.ctaPrimary}
                </Link>
                <Link
                  href="#mai-life-jodacare"
                  className="inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg transition-all duration-200 ease-in-out border-2 border-white text-white hover:bg-white/10"
                >
                  {d.ctaSecondary}
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Seksjon 11 — Henger godt sammen med */}
      <section
        className="py-20 lg:py-28 bg-background-alt"
        aria-labelledby="related-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="related-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.relatedTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.related.map((page, i) => {
              const Icon = relatedIcons[i] ?? ClipboardDocumentListIcon;
              return (
                <StaggerItem key={page.title}>
                  <Link
                    href={withLocale(page.href, locale)}
                    className="block h-full group"
                  >
                    <Card
                      variant="elevated"
                      padding="lg"
                      className="h-full text-center transition-shadow group-hover:shadow-xl"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon
                          className="w-6 h-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-lg">{page.title}</CardTitle>
                      <CardContent className="mt-2 text-sm">
                        {page.description}
                      </CardContent>
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
