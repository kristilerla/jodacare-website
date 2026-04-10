import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  HeartIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare for avlastning — barn med utviklingshemming',
  description:
    'JodaCare skaper kontinuitet for barnet — de samme rutinene og den samme tryggheten uansett om det er hjemme eller i avlastning.',
  openGraph: {
    title: 'JodaCare for avlastning — barn med utviklingshemming',
    description:
      'JodaCare skaper kontinuitet for barnet — de samme rutinene og den samme tryggheten uansett om det er hjemme eller i avlastning.',
  },
};

const perspectives = [
  {
    title: 'For barnet',
    description:
      'Jodabook med store knapper og kjente bilder. Det trygge grensesnittet barnet kjenner fra hjemmet, tilgjengelig i avlastningen også.',
    icon: HeartIcon,
  },
  {
    title: 'For foreldrene',
    description:
      'Følg med uten å måtte ringe. Se hva som skjer, send bilder og meldinger, og send bekymringsmelding hvis noe ikke stemmer.',
    icon: HomeIcon,
  },
  {
    title: 'For ansatte',
    description:
      'Delte rutiner mellom hjem og avlastning. Alle vet hva som forventes. Hendelseslogg loggfører det som skjer.',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'For koordinator',
    description:
      'Full oversikt over alle barn, team og tjenestesteder. Delingskontroll bestemmer hva foreldrene ser.',
    icon: ChartBarIcon,
  },
];

const features = [
  {
    title: 'Delte rutiner mellom hjem og avlastning',
    description:
      'Opprett rutiner én gang. Begge steder jobber etter dem.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Jodabook for barnet',
    description:
      'Enkelt grensesnitt tilpasset kognitive utfordringer. QR-innlogging, PIN og biometri.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Delingskontroll for hendelseslogg',
    description:
      'Admin velger hvilke hendelsestyper foreldrene ser. Sensitive notater forblir interne.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Bekymringsmelding',
    description:
      'Foreldre kan sende bekymringsmelding direkte i appen. Status-flyt: Opprettet → Under behandling → Besvart → Lukket.',
    icon: ExclamationTriangleIcon,
  },
];

const relatedPages = [
  {
    title: 'BPA — brukerstyrt personlig assistanse',
    description: 'JodaCare for BPA-ordninger med foresatte som arbeidsledere.',
    href: '/bpa',
    icon: HeartIcon,
  },
  {
    title: 'Vi hjelper med implementeringen',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
    href: '/implementering',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Omsorgsbolig og Hub',
    description: 'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten.',
    href: '/omsorgsbolig',
    icon: HomeIcon,
  },
];

export default function AvlastningPage() {
  return (
    <>
      {/* SEKSJON 1 — Hero */}
      <Hero
        title="De samme rutinene. Den samme tryggheten. Uansett hvor barnet er."
        subtitle="JodaCare skaper kontinuitet mellom hjem og avlastning — slik at barnet møter de samme forventningene, de samme bildene og den samme forståelsen uansett hvem som er på jobb."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        variant="page"
        badge="Avlastning og barn med utviklingshemming"
      />

      {/* SEKSJON 2 — Kjenner du deg igjen? */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="scenario-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2
                id="scenario-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
              >
                Kjenner du deg igjen?
              </h2>
              <div className="prose prose-lg text-text-light">
                <p>
                  Barnet er vant til bestemte rutiner hjemme. I avlastningen er det andre ansatte,
                  andre regler og et annet miljø. Foreldrene er bekymret og ringer for å sjekke.
                  Ansatte i avlastningen kjenner ikke barnet godt nok og må gjette seg frem.
                  Resultatet er uro — for barnet, for familien og for de ansatte.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — Fire perspektiver */}
      <section className="py-20 lg:py-28" aria-labelledby="perspectives-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="perspectives-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Én plattform for alle rundt barnet
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perspectives.map((item) => (
              <StaggerItem key={item.title}>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-16 h-16 bg-accent-light/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-accent-dark" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                  <CardContent>{item.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* SEKSJON 4 — Funksjoner */}
      <section
        id="funksjoner"
        className="py-20 lg:py-28 bg-background-alt"
        aria-labelledby="features-title"
      >
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="features-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Alt som trengs. Ingenting som ikke trengs.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="bordered" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                      <feature.icon
                        className="w-6 h-6 text-accent-dark"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardContent className="mt-2">{feature.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* SEKSJON 5 — Status og pris */}
      <section className="py-20 lg:py-28" aria-labelledby="status-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium rounded-full mb-6">
                Kommer
              </span>
              <h2
                id="status-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text mb-6"
              >
                Under utvikling — ta kontakt for mer informasjon
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto mb-10">
                JodaCare for avlastning er under utvikling som del av JodaCare 2.0. Ta kontakt for
                å høre mer eller melde interesse.
              </p>
              <Button href="/kontakt" size="lg">
                Meld interesse
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 6 — Relatert */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="related-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="related-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Henger godt sammen med
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPages.map((page) => (
              <StaggerItem key={page.title}>
                <Link href={page.href} className="block h-full group">
                  <Card
                    variant="elevated"
                    padding="lg"
                    className="h-full text-center transition-shadow group-hover:shadow-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <page.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{page.title}</CardTitle>
                    <CardContent className="mt-2 text-sm">{page.description}</CardContent>
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Les mer <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
