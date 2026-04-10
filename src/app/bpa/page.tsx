import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  UserIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  SparklesIcon,
  ArrowRightIcon,
  HomeModernIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare for BPA — brukerstyrt personlig assistanse',
  description:
    'JodaCare samler omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
  openGraph: {
    title: 'JodaCare for BPA — brukerstyrt personlig assistanse',
    description:
      'JodaCare samler omsorgsteamet rundt brukeren med Jodabook, sjekklister og full oversikt for koordinator og familie.',
  },
};

const userGroups = [
  {
    title: 'For brukeren',
    description:
      'Jodabook: en enkel app med store knapper og bilder, tilpasset for den som trenger ekstra støtte. Ingen passord å huske — innlogging via QR-kode og PIN.',
    icon: UserIcon,
  },
  {
    title: 'For assistentene',
    description:
      'Rutiner og sjekklister som alle jobber etter. Dagbok (Boka) for kommunikasjon i teamet. Alltid oppdatert, alltid tilgjengelig.',
    icon: UsersIcon,
  },
  {
    title: 'For koordinator og familie',
    description:
      'Full oversikt uten å måtte ringe. Se hva som skjer, hvem som var der og hvordan det gikk.',
    icon: ClipboardDocumentListIcon,
  },
];

const features = [
  {
    title: 'Jodabook for brukeren',
    description:
      'Enkel app med store knapper, bilder og lyd. Støtter kognitiv tilpasning for utviklingshemming, autisme og demens.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Rutiner og sjekklister',
    description:
      'Opprett gjentakende eller engangsjekklister. Assistentene avhuker steg for steg. Alt er loggført.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Omsorgsteam-modell',
    description:
      'Kun de som hører til i teamet ser brukeren. Personvern og rollebasert tilgang innebygd.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Hendelseslogg',
    description:
      'Registrer avvik, atferd, medisin og mer. Koordinator og relevant helsepersonell varsles.',
    icon: DocumentTextIcon,
  },
  {
    title: 'KAI-assistent',
    description:
      'AI-hjelper for helsepersonell som forklarer rutiner, svarer på spørsmål og veileder i plattformen.',
    icon: SparklesIcon,
  },
];

const relatedPages = [
  {
    title: 'Omsorgsbolig og Hub',
    description: 'Skjerm i leiligheten som kobler beboer, familie og ansatte.',
    href: '/omsorgsbolig',
    icon: HomeModernIcon,
  },
  {
    title: 'Vi hjelper med implementeringen',
    description:
      'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
    href: '/implementering',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Avlastning for barn',
    description: 'Trygg kommunikasjon mellom foreldre og avlastningsbolig.',
    href: '/avlastning',
    icon: HeartIcon,
  },
];

export default function BpaPage() {
  return (
    <>
      {/* SEKSJON 1 — Hero */}
      <Hero
        title="Brukeren beholder kontrollen. Assistentene vet hva som forventes."
        subtitle="JodaCare samler hele omsorgsteamet rundt brukeren — med et enkelt verktøy for brukeren selv, sjekklister for assistentene, og full oversikt for koordinator og familie."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Se funksjoner', href: '#funksjoner' }}
        variant="page"
        badge="Brukerstyrt personlig assistanse"
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
                  En BPA-bruker har gjerne et team på fem til ti assistenter. Rutiner og behov
                  skal videreformidles presist til alle. I dag skjer det via SMS, muntlig
                  overlapping og papirnotater. Noe går alltid tapt.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — Hvem er JodaCare for? */}
      <section className="py-20 lg:py-28" aria-label="Hvem er JodaCare for?">
        <Container>
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

      {/* SEKSJON 5 — Referanse */}
      <section className="py-20 lg:py-28" aria-labelledby="reference-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h2
                id="reference-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text mb-6"
              >
                I bruk siden 2016
              </h2>
              <p className="text-lg text-text-light max-w-xl mx-auto">
                Horten kommune er betalende BPA-kunde og har brukt JodaCare siden oppstarten.
                Silje Figved-nettverket er en aktiv pilot for migrering til JodaCare 2.0.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 6 — Status og pris */}
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
              <p className="text-lg text-text-light max-w-xl mx-auto mb-10">
                JodaCare for BPA er i aktiv bruk og tas inn i JodaCare 2.0 i løpet av 2026.
                Pilotkommuner får tett oppfølging og er med på å forme det endelige produktet.
                Pris settes basert på antall brukere og tjenestenivå.
              </p>
              <Button href="/kontakt" size="lg">
                Kontakt oss for pilotplass
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 7 — Relatert */}
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
