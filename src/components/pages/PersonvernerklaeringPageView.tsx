import { Hero } from '@/components/sections';
import { Container } from '@/components/ui';
import { getPersonvernerklaeringContent } from '@/i18n/messages/personvernerklaering-page';
import type { Locale } from '@/lib/i18n/types';

type Props = { locale: Locale };

export function PersonvernerklaeringPageView({ locale }: Props) {
  const d = getPersonvernerklaeringContent(locale);

  return (
    <>
      <Hero title={d.heroTitle} subtitle={d.heroSubtitle} variant="page" />

      <section className="py-20 lg:py-28" aria-labelledby="personvern-title">
        <Container size="md">
          <h2 id="personvern-title" className="sr-only">
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
        </Container>
      </section>
    </>
  );
}
