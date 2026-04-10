import Link from 'next/link';
import { Container } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const pathCards = [
  {
    emoji: '💚',
    title: 'JodaCare for familien',
    description:
      'Hold deg oppdatert på hverdagen til den du er glad i — uansett avstand. Kom i gang med Vipps på fem minutter.',
    badge: 'Tilgjengelig nå',
    badgeColor: 'bg-primary text-white',
    cta: 'Opprett Familierom',
    href: '/familie',
    highlighted: true,
  },
  {
    emoji: '🏛️',
    title: 'JodaCare for kommuner',
    description:
      'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform.',
    badge: 'Beta 2026',
    badgeColor: 'bg-text-light/20 text-text-light',
    cta: 'Se alle tjenester',
    href: '/omsorgsbolig',
    highlighted: false,
  },
  {
    emoji: '🤲',
    title: 'Vi hjelper med implementeringen',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg — fra første oppsett til systemet sitter.',
    badge: 'Inkludert for kommuner',
    badgeColor: 'bg-blue-100 text-blue-800',
    cta: 'Les mer',
    href: '/implementering',
    highlighted: false,
  },
];

const trustItems = [
  'Norske kommuner siden 2016',
  'ID-porten og Vipps',
  'GDPR · data i Europa',
  'Europol Innovation Award 2024',
];

const services = [
  {
    title: 'Familierom',
    subtitle: 'For pårørende og nær familie',
    badge: 'Tilgjengelig nå',
    badgeColor: 'bg-primary/10 text-primary',
    href: '/familie',
  },
  {
    title: 'Omsorgsbolig / Hub',
    subtitle: 'Skjerm i leiligheten — for beboer, familie og ansatte',
    badge: 'Beta 2026',
    badgeColor: 'bg-orange-100 text-orange-700',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA',
    subtitle: 'Brukerstyrt personlig assistanse',
    badge: 'Beta 2026',
    badgeColor: 'bg-orange-100 text-orange-700',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    subtitle: 'For barn med utviklingshemming',
    badge: 'Kommer',
    badgeColor: 'bg-gray-100 text-gray-500',
    href: '/avlastning',
  },
  {
    title: 'Barnevern',
    subtitle: 'Samvær og dokumentasjon',
    badge: 'Kommer',
    badgeColor: 'bg-gray-100 text-gray-500',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit',
    subtitle: 'Videobesøk for hjemmeboende',
    badge: 'Kommer',
    badgeColor: 'bg-gray-100 text-gray-500',
    href: '/jodavisit',
  },
];

export default function Home() {
  return (
    <>
      {/* SEKSJON 1 — Personlig hero */}
      <section className="py-20 lg:py-28">
        <Container size="md">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <blockquote>
                <p className="text-2xl sm:text-3xl leading-relaxed text-primary font-serif">
                  «Mamma, JODA! Du har hatt besøk av Petter fra hjemmetjenesten.
                  <br />
                  Han laget kjøttkaker til middag for deg.»
                </p>
                <p className="mt-6 text-2xl sm:text-3xl leading-relaxed text-primary font-serif">
                  «Å ja», sa hun — og husker at han var der.
                </p>
              </blockquote>
              <p className="mt-6 text-sm text-text-light">
                — Kristil Erla Haland, grunnlegger
              </p>
              <p className="mt-10 text-base sm:text-lg text-text-light leading-relaxed max-w-[560px] mx-auto">
                Det var den samtalen som ble til JodaCare. En enkel måte å holde familien oppdatert
                og gi den du er glad i sammenheng i hverdagen. Siden 2016 har vi bygget det videre —
                for familier, for kommuner og for alle som trenger å vite at det går bra.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 2 — Velg din vei */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="path-title">
        <Container>
          <FadeIn>
            <h2
              id="path-title"
              className="text-center font-serif text-2xl sm:text-3xl font-bold text-text mb-16"
            >
              Hvem er JodaCare for deg?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathCards.map((card) => (
              <StaggerItem key={card.title}>
                <Link href={card.href} className="block h-full group">
                  <div
                    className={`h-full rounded-2xl bg-white p-8 flex flex-col transition-all duration-200 ${
                      card.highlighted
                        ? 'border-2 border-primary shadow-lg'
                        : 'border border-[#9FE1CB] hover:border-primary/60 hover:shadow-md'
                    }`}
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {card.emoji}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-text">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-text-light text-sm leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <span
                      className={`mt-4 inline-block self-start px-3 py-1 text-xs font-medium rounded-full ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      {card.cta} <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* SEKSJON 3 — Trust-bar */}
      <section className="border-y border-secondary">
        <Container>
          <div className="py-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item, i) => (
              <span key={item} className="flex items-center gap-x-4 text-xs sm:text-sm text-text-light">
                {i > 0 && (
                  <span className="hidden sm:inline text-secondary-dark" aria-hidden="true">
                    ·
                  </span>
                )}
                <span>✓ {item}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* SEKSJON 4 — Tjenesteoversikt */}
      <section className="py-20 lg:py-28" aria-labelledby="services-title">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                id="services-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text"
              >
                Én plattform. Mange tjenester.
              </h2>
              <p className="mt-3 text-sm text-text-light">
                Klikk for å lese mer om hver tjeneste.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="block group">
                  <div className="flex items-center justify-between rounded-xl border border-secondary bg-white px-6 py-5 transition-all hover:border-primary/40 hover:shadow-sm">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif font-semibold text-text">
                          {service.title}
                        </h3>
                        <span
                          className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${service.badgeColor}`}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-text-light truncate">
                        {service.subtitle}
                      </p>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-text-light flex-shrink-0 ml-4 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
