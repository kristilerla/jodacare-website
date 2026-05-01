import { Hero } from '@/components/sections';
import { Container } from '@/components/ui';
import { getBruksvilkarContent } from '@/i18n/messages/bruksvilkar-page';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function BruksvilkarPageView({ locale }: Props) {
  const d = getBruksvilkarContent(locale);

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="py-20 lg:py-28" aria-labelledby="bruksvilkar-title">
        <Container size="md">
          <h2 id="bruksvilkar-title" className="sr-only">
            {d.srHeading}
          </h2>

          <div className="space-y-10">
            {d.sections.map((section) => (
              <article key={section.title}>
                <h3 className="font-serif text-2xl font-bold text-text mb-4">{section.title}</h3>
                <div className="space-y-4 text-text-light leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="mt-12 border-t border-secondary pt-10">
            <h3 className="font-serif text-2xl font-bold text-text mb-4">{d.contactHeading}</h3>
            <div className="space-y-2 text-text-light">
              <p>{d.contactCompany}</p>
              <p>
                {d.contactEmailLabel}{' '}
                <a href="mailto:support@jodacare.no" className="text-primary hover:underline">
                  support@jodacare.no
                </a>
              </p>
              <p>
                {d.contactWebsiteLabel}{' '}
                <a href="https://www.jodacare.no" className="text-primary hover:underline">
                  www.jodacare.no
                </a>
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
