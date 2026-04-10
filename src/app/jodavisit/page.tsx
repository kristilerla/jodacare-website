import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ComputerDesktopIcon,
  HomeModernIcon,
  HeartIcon,
  VideoCameraIcon,
  TvIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaVisit — videobesøk for hjemmesykepleie',
  description:
    'JodaVisit erstatter unødvendige fysiske besøk med trygge videobesøk. Eldre bor hjemme lenger, med familien nær.',
  openGraph: {
    title: 'JodaVisit — videobesøk for hjemmesykepleie',
    description:
      'JodaVisit erstatter unødvendige fysiske besøk med trygge videobesøk. Eldre bor hjemme lenger, med familien nær.',
  },
};

const userGroups = [
  {
    title: 'For helsepersonell',
    description:
      'Videobesøk planlegges i kalenderen og gjennomføres fra PC eller telefon. Dokumentasjon skrives etterpå direkte i JodaCare.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'For den hjemmeboende',
    description:
      'Hub-skjerm hjemme viser familiebilder og gjør det enkelt å ta imot videosamtaler. Ingen app å lære seg.',
    icon: HomeModernIcon,
  },
  {
    title: 'For familien',
    description:
      'Familierom gir innsyn i hverdagen. Videosamtale med ett trykk. Alltid oppdatert — uten å måtte ringe hjemmetjenesten.',
    icon: HeartIcon,
  },
];

const features = [
  {
    title: 'Videobesøk via innebygd løsning',
    description:
      'Planlagte og uplanlagte videobesøk. Ingen ekstra programvare for den hjemmeboende.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Hub-skjerm hjemme',
    description:
      'Kjøres på nettbrett eller TV. Familien er alltid nær via bilder, meldinger og video.',
    icon: TvIcon,
  },
  {
    title: 'Kalender og påminnelser',
    description:
      'Automatiske påminnelser til den hjemmeboende før planlagte besøk.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Dokumentasjon etter besøk',
    description:
      'Helsepersonell dokumenterer direkte i JodaCare etter videobesøket.',
    icon: DocumentTextIcon,
  },
];

const relatedPages = [
  {
    title: 'Omsorgsbolig og Hub',
    description: 'En skjerm i leiligheten som kobler beboer, familie og ansatte.',
    href: '/omsorgsbolig',
    icon: HomeModernIcon,
  },
  {
    title: 'Familierom for pårørende',
    description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
    href: '/familie',
    icon: HeartIcon,
  },
  {
    title: 'Vi hjelper med implementeringen',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
    href: '/implementering',
    icon: ClipboardDocumentListIcon,
  },
];

export default function JodaVisitPage() {
  return (
    <>
      {/* SEKSJON 1 — Hero */}
      <Hero
        title="Eldre bor hjemme lenger. Med familien nær."
        subtitle="JodaVisit erstatter unødvendige fysiske besøk med videobesøk som oppleves trygge og personlige. Helsepersonell bruker tid der det trengs mest — og den hjemmeboende er aldri alene."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        variant="page"
        badge="Hjemmesykepleie og videobesøk"
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
                  Hjemmetjenesten har for lite tid og for mange besøk. Mange besøk handler om å
                  sjekke at alt er greit — ikke om å gi pleie. Den hjemmeboende er ensom mellom
                  besøkene. Familien vet ikke hvordan det egentlig går.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — Én løsning for alle */}
      <section className="py-20 lg:py-28" aria-labelledby="usergroups-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="usergroups-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Én løsning for alle
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userGroups.map((item) => (
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
                Under utvikling
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto mb-10">
                JodaVisit er under utvikling som del av JodaCare 2.0. Ta kontakt for å melde
                interesse.
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
