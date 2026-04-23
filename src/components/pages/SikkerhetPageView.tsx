import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  FingerPrintIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  KeyIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { getSikkerhetContent } from '@/i18n/messages/sikkerhet-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

const mainIcons = [
  FingerPrintIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
] as const;

const extraIcons = [KeyIcon, EyeSlashIcon, ShieldCheckIcon] as const;

type Props = { locale: Locale };

export function SikkerhetPageView({ locale }: Props) {
  const d = getSikkerhetContent(locale);

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="py-20 lg:py-28" aria-labelledby="security-main-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="success" className="mb-4">
                {d.mainBadge}
              </Badge>
              <h2 id="security-main-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.mainTitle}
              </h2>
              <p className="mt-4 text-lg text-text-light">{d.mainIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.securityFeatures.map((feature, i) => {
              const Icon = mainIcons[i] ?? ShieldCheckIcon;
              return (
                <StaggerItem key={feature.title}>
                  <Card variant="bordered" padding="lg" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-success" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          {feature.badge && (
                            <Badge variant="success" size="sm">
                              {feature.badge}
                            </Badge>
                          )}
                        </div>
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

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="additional-security-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="additional-security-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                {d.additionalTitle}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.additional.map((item, i) => {
              const Icon = extraIcons[i] ?? ShieldCheckIcon;
              return (
                <StaggerItem key={item.title}>
                  <Card variant="elevated" padding="md" className="h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardContent className="mt-2 text-sm">{item.description}</CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="compliance-title">
        <Container size="md">
          <FadeIn>
            <Card variant="bordered" padding="lg">
              <h2 id="compliance-title" className="font-serif text-2xl font-bold text-text mb-6">
                {d.complianceTitle}
              </h2>
              <div className="space-y-6 text-text-light">
                {d.compliance.map((block) => (
                  <div key={block.title}>
                    <h3 className="font-semibold text-text mb-2">{block.title}</h3>
                    <p>{block.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 border-y border-secondary" aria-labelledby="trust-title">
        <Container>
          <FadeIn>
            <h2 id="trust-title" className="sr-only">
              {d.trustSr}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {d.trustStats.map((t) => (
                <div key={t.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{t.value}</div>
                  <div className="text-sm text-text-muted">{t.label}</div>
                </div>
              ))}
            </div>
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
