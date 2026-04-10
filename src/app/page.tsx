'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ArrowRightIcon,
  HeartIcon,
  BuildingOffice2Icon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

const pathCards = [
  {
    icon: HeartIcon,
    title: 'JodaCare for familien',
    description:
      'Hold deg oppdatert på hverdagen til den du er glad i — uansett avstand. Kom i gang med Vipps på fem minutter.',
    badge: 'Tilgjengelig nå',
    badgeColor: 'bg-success/10 text-success',
    cta: 'Opprett Familierom',
    href: '/familie',
    highlighted: true,
  },
  {
    icon: BuildingOffice2Icon,
    title: 'JodaCare for kommuner',
    description:
      'Omsorgsboliger, BPA, barnevern, avlastning og hjemmesykepleie — koordinert omsorg i én plattform.',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    cta: 'Se alle tjenester',
    href: '/kommune',
    highlighted: false,
  },
  {
    icon: HandRaisedIcon,
    title: 'Vi hjelper med implementeringen',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg — fra første oppsett til systemet sitter.',
    badge: 'Inkludert for kommuner',
    badgeColor: 'bg-primary/10 text-primary',
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
    badgeColor: 'bg-success/10 text-success',
    href: '/familie',
  },
  {
    title: 'Omsorgsbolig / Hub',
    subtitle: 'Skjerm i leiligheten — for beboer, familie og ansatte',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/omsorgsbolig',
  },
  {
    title: 'BPA',
    subtitle: 'Brukerstyrt personlig assistanse',
    badge: 'Beta 2026',
    badgeColor: 'bg-warning/10 text-warning',
    href: '/bpa',
  },
  {
    title: 'Avlastning',
    subtitle: 'For barn med utviklingshemming',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/avlastning',
  },
  {
    title: 'Barnevern',
    subtitle: 'Samvær og dokumentasjon',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/barnevern',
  },
  {
    title: 'JodaVisit',
    subtitle: 'Videobesøk for hjemmeboende',
    badge: 'Kommer',
    badgeColor: 'bg-secondary-light text-text-muted',
    href: '/jodavisit',
  },
];

export default function Home() {
  return (
    <>
      {/* SEKSJON 1 — Personlig hero med bakgrunnsbilde */}
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/hero/hero-1.jpg"
            alt="Barnehånd holder en eldre persons hånd — nærhet mellom generasjoner"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <Container size="md" className="relative z-10">
          <div className="py-20 lg:py-28 text-center max-w-2xl mx-auto">
            <FadeIn>
              <blockquote>
                <p className="text-2xl sm:text-3xl leading-relaxed text-white font-serif drop-shadow-lg">
                  «Mamma, JODA! Du har hatt besøk av Petter fra hjemmetjenesten.
                  <br />
                  Han laget kjøttkaker til middag for deg.»
                </p>
                <p className="mt-6 text-2xl sm:text-3xl leading-relaxed text-white font-serif drop-shadow-lg">
                  «Å ja», sa hun — og husker at han var der.
                </p>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-sm text-white/80">
                — Kristil Erla Haland, grunnlegger
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-10 text-base sm:text-lg text-white/90 leading-relaxed max-w-[560px] mx-auto drop-shadow-md">
                Det var den samtalen som ble til JodaCare. En enkel måte å holde familien oppdatert
                og gi den du er glad i sammenheng i hverdagen. Siden 2016 har vi bygget det videre —
                for familier, for kommuner og for alle som trenger å vite at det går bra.
              </p>
            </FadeIn>
          </div>
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
              Hva er JodaCare for deg?
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
                        : 'border border-secondary hover:border-primary/40 hover:shadow-md'
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
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
                    <ArrowRightIcon className="w-5 h-5 text-text-muted flex-shrink-0 ml-4 group-hover:text-primary transition-colors" />
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
