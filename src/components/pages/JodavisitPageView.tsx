import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ComputerDesktopIcon,
  HomeModernIcon,
  HeartIcon,
  VideoCameraIcon,
  TvIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { getJodavisitContent } from '@/i18n/messages/jodavisit-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const userIcons = [ComputerDesktopIcon, HomeModernIcon, HeartIcon] as const;
const featureIcons = [VideoCameraIcon, TvIcon, CalendarDaysIcon, DocumentTextIcon] as const;
const relatedIcons = [HomeModernIcon, HeartIcon, ClipboardDocumentListIcon] as const;

type Props = { locale: Locale };

export function JodavisitPageView({ locale }: Props) {
  const d = getJodavisitContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        primaryCta={{ text: d.primaryCta, href: withLocale('/kontakt', locale) }}
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
                <p>{d.scenarioBody}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="usergroups-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="usergroups-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.userGroupsTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.userGroups.map((item, i) => {
              const Icon = userIcons[i] ?? ComputerDesktopIcon;
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
              const Icon = featureIcons[i] ?? VideoCameraIcon;
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

      <section className="py-20 lg:py-28" aria-labelledby="status-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium rounded-full mb-6">
                {d.statusBadge}
              </span>
              <h2 id="status-title" className="font-serif text-3xl sm:text-4xl font-bold text-text mb-6">
                {d.statusTitle}
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto mb-10">{d.statusBody}</p>
              <Button href={withLocale('/kontakt', locale)} size="lg">
                {d.statusCta}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="related-title">
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
