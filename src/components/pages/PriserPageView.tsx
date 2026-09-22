import { Hero, CTA, BudsjettSitat } from '@/components/sections';
import { Container, Card, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CheckIcon } from '@heroicons/react/24/outline';
import { getPriserContent } from '@/i18n/messages/priser-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function PriserPageView({ locale }: Props) {
  const d = getPriserContent(locale);
  const kontaktHref = withLocale('/kontakt', locale);

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="kommune-pricing-title">
        <Container>
          <h2 id="kommune-pricing-title" className="sr-only">
            {d.heroTitle}
          </h2>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 md:items-start">
            {d.cards.map((card) => (
              <StaggerItem key={card.name}>
                <Card variant="bordered" padding="lg" className="h-full bg-white">
                  <h3 className="font-serif text-xl font-semibold text-text">{card.name}</h3>

                  <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-primary">
                      {card.price}
                    </span>
                    <span className="text-lg text-text-light">{card.period}</span>
                  </p>
                  <p className="mt-2 text-text-light">{card.unit}</p>

                  {card.body && <p className="mt-6 text-text-light">{card.body}</p>}

                  <p className="mt-8 font-medium text-text">{card.includesLabel}</p>
                  <ul className="mt-4 space-y-3">
                    {card.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-text-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="example-title">
        <Container size="md">
          <FadeIn>
            <h2
              id="example-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text mb-10"
            >
              {d.exampleTitle}
            </h2>

            {/* Tabellen er bredere enn en telefonskjerm, så den ruller for seg selv. */}
            <div className="overflow-x-auto rounded-2xl border border-secondary">
              <table className="w-full min-w-[30rem] border-collapse text-left">
                <thead>
                  <tr className="bg-accent-light/50">
                    <th scope="col" className="px-5 py-4 font-medium text-text" />
                    <th scope="col" className="px-5 py-4 font-medium text-text">
                      {d.exampleColumns.year1}
                    </th>
                    <th scope="col" className="px-5 py-4 font-medium text-text">
                      {d.exampleColumns.year2}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d.exampleRows.map((row) => (
                    <tr key={row.label} className="border-t border-secondary">
                      <th scope="row" className="px-5 py-4 font-normal text-text-light">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-text-light">{row.year1}</td>
                      <td className="px-5 py-4 text-text-light">{row.year2}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-primary bg-accent-light/30">
                    <th scope="row" className="px-5 py-4 font-semibold text-text">
                      {d.exampleSumLabel}
                    </th>
                    <td className="px-5 py-4 font-semibold text-text">{d.exampleSumYear1}</td>
                    <td className="px-5 py-4 font-semibold text-text">{d.exampleSumYear2}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-text-light">{d.exampleNote}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="budget-title">
        <Container size="md">
          <FadeIn>
            <h2 id="budget-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
              {d.budgetTitle}
            </h2>
            <p className="mt-4 text-lg text-text-light">{d.budgetIntro}</p>
            <div className="mt-8">
              <BudsjettSitat
                quote={d.budgetQuote}
                copyLabel={d.budgetCopy}
                copiedLabel={d.budgetCopied}
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="modules-title">
        <Container size="md">
          <FadeIn>
            <h2 id="modules-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
              {d.modulesTitle}
            </h2>
            <p className="mt-4 text-text-light">{d.modulesBody}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {d.modules.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent-light/60 px-4 py-2 text-sm font-medium text-primary-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="terms-title">
        <Container size="md">
          <FadeIn>
            <h2 id="terms-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
              {d.termsTitle}
            </h2>
            <p className="mt-4 text-text-light">{d.termsBody}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="familie-price-title">
        <Container size="md">
          <FadeIn>
            <Card variant="bordered" padding="lg" className="bg-white">
              <h2
                id="familie-price-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                {d.familieTitle}
              </h2>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-primary">
                  {d.familiePrice}
                </span>
                <span className="text-lg text-text-light">{d.familiePeriod}</span>
              </p>
              <p className="mt-4 text-text-light">{d.familieBody}</p>
              <div className="mt-8">
                <Button href={kontaktHref} size="lg">
                  {d.familieCta}
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="price-faq-title">
        <Container size="md">
          <FadeIn>
            <h2
              id="price-faq-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text mb-10"
            >
              {d.faqTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {d.faq.map((item) => (
              <StaggerItem key={item.question}>
                <Card variant="bordered" padding="md" className="bg-white">
                  <h3 className="font-serif text-lg font-semibold text-text">{item.question}</h3>
                  <p className="mt-2 text-text-light">{item.answer}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <CTA
        title={d.ctaTitle}
        subtitle={d.ctaBody}
        primaryCta={{ text: d.ctaButton, href: kontaktHref }}
        variant="accent"
      />
    </>
  );
}
