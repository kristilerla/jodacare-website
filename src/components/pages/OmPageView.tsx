import Image from 'next/image';
import { Hero, Story, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { getOmPageContent } from '@/i18n/messages/om-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function OmPageView({ locale }: Props) {
  const d = getOmPageContent(locale);

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="py-20 lg:py-28" aria-labelledby="founder-title">
        <Container size="md">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/kristilomamma.jpg"
                  alt={d.founderImageAlt}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 id="founder-title" className="font-serif text-3xl font-bold text-text mb-6">
                  {d.founderName}
                </h2>
                <p className="text-sm text-accent font-medium mb-4">{d.founderRole}</p>
                <div className="space-y-4 text-text-light">
                  <p>{d.founderP1}</p>
                  <p>{d.founderP2}</p>
                  <p>{d.founderP3}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Story quote={d.storyQuote} author={d.storyAuthor} variant="featured" />

      <section className="py-20 lg:py-28" aria-labelledby="timeline-title">
        <Container size="md">
          <FadeIn>
            <h2
              id="timeline-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text text-center mb-16"
            >
              {d.timelineTitle}
            </h2>
          </FadeIn>

          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-dark"
              aria-hidden="true"
            />

            <StaggerContainer className="space-y-12">
              {d.timeline.map((item, index) => (
                <StaggerItem key={item.year}>
                  <div
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <p className="text-text-light mt-1">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2" aria-hidden="true" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="partners-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="partners-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.partnersTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.partnersIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <Card variant="bordered" padding="md" className="h-full">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardContent className="mt-2 text-sm">{partner.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="company-title">
        <Container size="sm">
          <FadeIn>
            <Card variant="elevated" padding="lg" className="text-center">
              <h2 id="company-title" className="font-serif text-2xl font-bold text-text mb-4">
                {d.companyCardTitle}
              </h2>
              <p className="text-text-light mb-6">{d.companyCardBody}</p>
              <div className="text-sm text-text-muted space-y-1">
                <p>Org.nr: 927 828 947</p>
                <p>Jørgens vei 9, 1386 Asker</p>
                <p>
                  <a
                    href="https://jodacare.no"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jodacare.no
                  </a>
                </p>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <CTA
        title={d.ctaTitle}
        subtitle={d.ctaSubtitle}
        primaryCta={{ text: d.ctaButton, href: withLocale('/kontakt', locale) }}
      />
    </>
  );
}
