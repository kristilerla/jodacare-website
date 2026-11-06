import Image from 'next/image';
import { Hero, Story, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { getOmPageContent } from '@/i18n/messages/om-page';
import { withLocale } from '@/lib/i18n/paths';
import { selskap } from '@/lib/fakta';
import type { Locale } from '@/lib/i18n/types';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

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

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="team-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="team-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.teamTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.teamIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {d.team.map((person) => (
              <StaggerItem key={person.name} className="h-full">
                <article className="h-full flex flex-col bg-white rounded-2xl shadow-md p-8">
                  <div className="flex items-center gap-5 mb-6">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.imageAlt ?? person.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover object-top shrink-0"
                      />
                    ) : (
                      <div
                        className="w-24 h-24 rounded-full bg-accent-light text-primary-dark flex items-center justify-center font-serif text-2xl font-bold shrink-0"
                        aria-hidden="true"
                      >
                        {person.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-text">{person.name}</h3>
                      <p className="text-sm text-accent font-medium mt-1">{person.role}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-text-light flex-1">
                    {person.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {person.linkedin ? (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${d.linkedinLabel} ${person.name}`}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                      LinkedIn
                    </a>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                <StaggerItem key={`${item.year}-${index}`}>
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
                <p>
                  {d.orgNrLabel} {selskap.orgNr}
                </p>
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
