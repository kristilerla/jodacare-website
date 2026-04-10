import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  HomeModernIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  TvIcon,
  PhotoIcon,
  VideoCameraIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare Hub \u2014 omsorgsbolig og servicebolig',
  description:
    'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten. For omsorgsboliger og servicebolig i norske kommuner.',
  openGraph: {
    title: 'JodaCare Hub \u2014 omsorgsbolig og servicebolig',
    description:
      'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten. For omsorgsboliger og servicebolig i norske kommuner.',
  },
};

const hubPerspectives = [
  {
    title: 'For beboeren',
    description:
      'Bilder fra familien, kjente ansikter, kalender for dagen, musikk og enkle spill. Hverdagen f\u00e5r sammenheng.',
    icon: HomeModernIcon,
  },
  {
    title: 'For familien',
    description:
      'Send bilder og meldinger direkte til skjermen. Se hva som skjer. Videosamtale uten at noen trenger \u00e5 hjelpe til.',
    icon: HeartIcon,
  },
  {
    title: 'For ansatte',
    description:
      'Hendelseslogg, sjekklister og bekymringsmeldinger der jobben skjer \u2014 ikke etterp\u00e5 ved en PC.',
    icon: ClipboardDocumentListIcon,
  },
];

const features = [
  {
    title: 'Hub-skjerm per leilighet',
    description:
      'Kj\u00f8res i nettleser p\u00e5 nettbrett, TV eller smart-display. Ingen ny hardware \u00e5 kj\u00f8pe \u2014 fungerer p\u00e5 det dere allerede har.',
    icon: TvIcon,
  },
  {
    title: 'Familien sender direkte til skjermen',
    description:
      'Bilder og meldinger fra familien vises automatisk. Ingen passord. Ingen app \u00e5 laste ned for beboeren.',
    icon: PhotoIcon,
  },
  {
    title: 'Videosamtale med ett trykk',
    description:
      'Beboeren trykker p\u00e5 et kjent ansikt \u2014 videosamtalen starter. Familie p\u00e5 den andre siden svarer i nettleseren.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Velferdskoordinator-dashboard',
    description:
      'Koordiner aktiviteter, send meldinger til alle beboere samtidig, administrer fellesrom og arrangementer.',
    icon: ChartBarIcon,
  },
  {
    title: 'Fellesarrangementer med p\u00e5melding',
    description:
      'Beboere og familie kan melde seg p\u00e5 arrangementer og ta oppgaver. Bygger fellesskap i boligen.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'IoT-sensorer valgfritt',
    description:
      'D\u00f8r, bevegelse og r\u00f8yk kan kobles til via gateway. Varsler g\u00e5r til ansatte \u2014 ikke til familien.',
    icon: CpuChipIcon,
  },
];

const steps = [
  {
    step: '1',
    title: 'Pilotavdeling',
    description:
      'Vi starter med \u00e9n avdeling eller \u00e9n etasje. Du trenger ikke rulle ut til alle p\u00e5 \u00e9n gang.',
  },
  {
    step: '2',
    title: 'Oppsett',
    description:
      'JodaCares Implementeringsansvarlig hjelper med oppsett av kompleks, leiligheter og brukere.',
  },
  {
    step: '3',
    title: 'Onboarding av familier',
    description:
      'Familier inviteres enkelt via lenke. De trenger ingen oppl\u00e6ring.',
  },
  {
    step: '4',
    title: 'Drift',
    description:
      'Velferdskoordinator styrer hverdagen fra sitt dashboard. Vi er tilgjengelige hvis noe butter.',
  },
];

const relatedPages = [
  {
    title: 'Familierom for p\u00e5r\u00f8rende',
    description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
    href: '/familie',
    icon: HeartIcon,
  },
  {
    title: 'Vi hjelper med implementeringen',
    description:
      'V\u00e5r Implementeringsansvarlig veileder din kommune steg for steg.',
    href: '/implementering',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'JodaVisit for hjemmeboende',
    description: 'Videobes\u00f8k som erstatter un\u00f8dvendige fysiske bes\u00f8k. Kommer snart.',
    href: '/jodavisit',
    icon: VideoCameraIcon,
  },
];

export default function OmsorgsboligPage() {
  return (
    <>
      {/* SEKSJON 1 \u2014 Hero */}
      <Hero
        title="Beboeren er aldri alene. Familien er alltid n\u00e6r."
        subtitle="JodaCare Hub kobler beboer, familie og ansatte i \u00e9n sammenhengende flyt \u2014 gjennom en skjerm i leiligheten som alltid er p\u00e5."
        primaryCta={{ text: 'Kontakt oss for pilotplass', href: '/kontakt' }}
        secondaryCta={{ text: 'Se hvordan Hub fungerer', href: '#funksjoner' }}
        variant="page"
        badge="Omsorgsbolig og servicebolig"
      />

      {/* SEKSJON 2 \u2014 Kjenner du deg igjen? */}
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
                  Beboerne dine har familier som vil f\u00f8lge med \u2014 men ikke vet hvordan.
                  P\u00e5r\u00f8rende ringer til avdelingen fordi de ikke har andre m\u00e5ter \u00e5 holde
                  kontakten p\u00e5. Ansatte bruker tid p\u00e5 \u00e5 koordinere og videreformidle heller
                  enn \u00e5 gi omsorg.
                </p>
                <p>
                  Resultatet er at beboere kan f\u00f8le seg isolerte, selv om det er folk rundt
                  dem hele dagen.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 \u2014 Hva er JodaCare Hub? */}
      <section className="py-20 lg:py-28" aria-labelledby="hub-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="hub-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                En skjerm i leiligheten \u2014 alltid p\u00e5
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubPerspectives.map((item) => (
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

      {/* SEKSJON 4 \u2014 Funksjoner */}
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

      {/* SEKSJON 5 \u2014 Slik innf\u00f8res Hub */}
      <section className="py-20 lg:py-28" aria-labelledby="steps-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                id="steps-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Enkelt \u00e5 innf\u00f8re. Vi hjelper hele veien.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-text-light">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* SEKSJON 6 \u2014 Pris/status */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="status-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium rounded-full mb-6">
                Beta 2026
              </span>
              <h2
                id="status-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text mb-6"
              >
                Bli med som pilotkommune
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto mb-8">
                JodaCare Hub er i aktiv utvikling og tas i bruk av de f\u00f8rste kommunene i
                l\u00f8pet av 2026. Pilotkommuner f\u00e5r tett oppf\u00f8lging og er med p\u00e5 \u00e5 forme det
                endelige produktet.
              </p>
              <p className="text-text-light max-w-xl mx-auto mb-10">
                Pris settes basert p\u00e5 antall leiligheter og tjenesteniv\u00e5. Ta kontakt for en
                uforpliktende samtale.
              </p>
              <Button href="/kontakt" size="lg">
                Meld din kommune som pilotkommune
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 7 \u2014 Relatert */}
      <section className="py-20 lg:py-28" aria-labelledby="related-title">
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
