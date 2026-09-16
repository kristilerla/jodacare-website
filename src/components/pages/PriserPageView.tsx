import { Hero } from '@/components/sections';
import { Container, Card, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CheckIcon } from '@heroicons/react/24/outline';
import { getPriserContent } from '@/i18n/messages/priser-page';
import { withLocale } from '@/lib/i18n/paths';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function PriserPageView({ locale }: Props) {
  const d = getPriserContent(locale);

  return (
    <>
      <Hero
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        variant="page"
        badge={d.heroBadge}
      />

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="kommune-pricing-title">
        <Container>
          <FadeIn>
            <h2
              id="kommune-pricing-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text text-center mb-16"
            >
              {d.kommuneTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {d.cards.map((card) => (
              <StaggerItem key={card.name}>
                <Card variant="elevated" padding="lg" className="h-full flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-text">{card.name}</h3>
                  {card.status && (
                    <p className="mt-2 text-sm font-medium text-success">{card.status}</p>
                  )}

                  <div className="mt-4 rounded-xl bg-accent-light px-5 py-4">
                    <p>
                      <span className="text-3xl sm:text-4xl font-bold text-primary-dark">
                        {card.price}
                      </span>
                      {card.period && (
                        <span className="text-primary-dark ml-2">{card.period}</span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-text-light">{card.unit}</p>
                  </div>

                  <p className="mt-6 text-text-light">{card.body}</p>

                  <p className="mt-6 font-medium text-text">{card.includesLabel}</p>
                  <ul className="mt-3 space-y-3 flex-1" role="list">
                    {card.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon
                          className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-text-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {card.footnote && (
                    <p className="mt-6 text-sm text-text-muted">{card.footnote}</p>
                  )}
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
              className="font-serif text-2xl sm:text-3xl font-bold text-text text-center mb-10"
            >
              {d.exampleTitle}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-secondary-dark bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-secondary-dark">
                    <td className="px-5 py-4" />
                    <th scope="col" className="px-5 py-4 text-sm font-medium text-text-light">
                      {d.exampleColumns.year1}
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-medium text-text-light">
                      {d.exampleColumns.year2}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d.exampleRows.map((row) => (
                    <tr key={row.label} className="border-b border-secondary">
                      <th scope="row" className="px-5 py-4 font-normal text-text-light">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-text">{row.year1}</td>
                      <td className="px-5 py-4 text-text">{row.year2}</td>
                    </tr>
                  ))}
                  <tr className="bg-accent-light">
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

      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="modules-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2
                id="modules-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
              >
                {d.modulesTitle}
              </h2>
              <p className="text-text-light">{d.modulesP1}</p>
              <p className="mt-4 text-text-light">{d.modulesP2}</p>
              <ul className="mt-6 space-y-3" role="list">
                {d.modules.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"
                      aria-hidden="true"
                    />
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-text-light">{d.modulesP3}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="price-faq-title">
        <Container size="md">
          <FadeIn>
            <h2
              id="price-faq-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text text-center mb-12"
            >
              {d.faqTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {d.faq.map((item) => (
              <StaggerItem key={item.question}>
                <h3 className="font-serif text-lg font-semibold text-text">{item.question}</h3>
                <p className="mt-2 text-text-light">{item.answer}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <Button href={withLocale('/kontakt', locale)} size="lg">
                {d.faqCta}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
