import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare for kommuner — alle tjenester',
  description:
    'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform. Se alle tjenester fra JodaCare.',
  openGraph: {
    title: 'JodaCare for kommuner',
    description:
      'Koordinert omsorg i én plattform. Se alle tjenester fra JodaCare for norske kommuner.',
  },
};

const services = [
  {
    title: 'Omsorgsbolig / Hub',
    description:
      'En skjerm i leiligheten som kobler beboer, familie og ansatte i én sammenhengende flyt. Familien er alltid nær.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA — brukerstyrt personlig assistanse',
    description:
      'Samle omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    description:
      'Kontinuitet for barnet — de samme rutinene og den samme tryggheten uansett om det er hjemme eller i avlastning.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/avlastning',
  },
  {
    title: 'Barnevern og samvær',
    description:
      'Samvær dokumentert trygt med informasjonsbarrierer som beskytter alle parter og full sporbarhet.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit — videobesøk',
    description:
      'Erstatt unødvendige fysiske besøk med trygge videobesøk. Eldre bor hjemme lenger, med familien nær.',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
  {
    title: 'Implementeringsstøtte',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg — fra første oppsett til systemet sitter i ryggmargen.',
    badge: 'Inkludert',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/implementering',
  },
];

const trustItems = [
  'Norske kommuner siden 2016',
  'ID-porten og Vipps',
  'GDPR · data i Europa',
  'Europol Innovation Award 2024',
];

export default function KommunePage() {
  return (
    <>
      <Hero
        title="JodaCare for kommuner"
        subtitle="Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform. Velg tjenesten som passer for deg."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        variant="page"
      />

      {/* Trust-bar */}
      <section className="border-y border-secondary">
        <Container>
          <div className="py-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-x-4 text-xs sm:text-sm text-text-light"
              >
                {i > 0 && (
                  <span
                    className="hidden sm:inline text-secondary-dark"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <span>✓ {item}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Tjenesteoversikt */}
      <section
        className="py-20 lg:py-28"
        aria-labelledby="services-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2
                id="services-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Alle tjenester
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Klikk på en tjeneste for å lese mer.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="block h-full group">
                  <div className="h-full rounded-2xl border border-secondary bg-white p-8 flex flex-col transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif text-xl font-semibold text-text">
                        {service.title}
                      </h3>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${service.badgeColor}`}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-text-light text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Les mer <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background-alt">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mb-4">
                Klar til å komme i gang?
              </h2>
              <p className="text-lg text-text-light mb-8">
                Ta kontakt for en uforpliktende samtale om hvordan JodaCare kan passe i din kommune.
              </p>
              <Button href="/kontakt" size="lg">
                Kontakt oss
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
