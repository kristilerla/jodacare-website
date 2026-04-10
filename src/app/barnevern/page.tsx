import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ScaleIcon,
  HomeIcon,
  UserIcon,
  HandRaisedIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  LockClosedIcon,
  BuildingLibraryIcon,
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare for barnevern — samvær og dokumentasjon',
  description:
    'JodaCare håndterer samvær med informasjonsbarrierer som beskytter alle parter og full sporbarhet som tilfredsstiller lovkravene.',
  openGraph: {
    title: 'JodaCare for barnevern — samvær og dokumentasjon',
    description:
      'JodaCare håndterer samvær med informasjonsbarrierer som beskytter alle parter og full sporbarhet som tilfredsstiller lovkravene.',
  },
};

const roles = [
  {
    title: 'Saksbehandler',
    description:
      'Full oversikt over alle samværsplaner og status. Oppretter planer, følger opp og har tilgang til komplett audit trail.',
    icon: ScaleIcon,
  },
  {
    title: 'Fosterforelder',
    description:
      'Bekrefter og gjennomfører samvær. Ser kun det de skal se — aldri biologisk forelders notater.',
    icon: HomeIcon,
  },
  {
    title: 'Biologisk forelder',
    description:
      'Ser samværsplan og status for egne samvær. Strikt informasjonsbarriere mot fosterhjemmet.',
    icon: UserIcon,
  },
  {
    title: 'Støtteperson',
    description:
      'Kan delta i samvær og se relevant informasjon innenfor sin rolle.',
    icon: HandRaisedIcon,
  },
];

const features = [
  {
    title: 'Samværsplaner med status-flyt',
    description:
      'Planlagt → Bekreftet → Gjennomført / Avlyst / Ikke oppmøtt. Tydelig og dokumentert.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Informasjonsbarrierer',
    description:
      'Biologisk forelder ser aldri fosterforelders notater. Teknisk håndhevet, ikke bare rutinebasert.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Full audit trail',
    description:
      'Alle handlinger loggføres med tidsstempel og bruker-ID. Tilgjengelig for saksbehandler.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Rollebasert tilgang',
    description:
      'Fire distinkte roller med ulike rettigheter. Ingen kan se mer enn de skal.',
    icon: LockClosedIcon,
  },
  {
    title: 'Regulatorisk forankring',
    description:
      'Barnevernsloven, forvaltningsloven og GDPR er hensyntatt i arkitekturen.',
    icon: BuildingLibraryIcon,
  },
];

const relatedPages = [
  {
    title: 'Vi hjelper med implementeringen',
    description: 'Vår Implementeringsansvarlig veileder din kommune steg for steg.',
    href: '/implementering',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Omsorgsbolig og Hub',
    description: 'Koble beboer, familie og ansatte gjennom en skjerm i leiligheten.',
    href: '/omsorgsbolig',
    icon: HomeModernIcon,
  },
  {
    title: 'Avlastning for barn',
    description: 'Trygg samhandling mellom avlastningsfamilie, foreldre og kommune.',
    href: '/avlastning',
    icon: HandRaisedIcon,
  },
];

export default function BarnevernPage() {
  return (
    <>
      {/* SEKSJON 1 — Hero */}
      <Hero
        title="Samvær dokumentert trygt. Alle parter vet hva som gjelder."
        subtitle="JodaCare gir saksbehandlere, fosterforeldre og biologiske foreldre et trygt digitalt verktøy for samværsoppfølging — med informasjonsbarrierer som beskytter barnet og full sporbarhet som tilfredsstiller lovkravene."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        variant="page"
        badge="Barnevern og samvær"
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
                  Samvær skal dokumenteres presist. Papir og e-post holder ikke mål.
                  Informasjon som ikke skal deles, kan lekke mellom parter. Audit trail er
                  ufullstendig. Saksbehandler har ikke god nok oversikt.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — Fire roller */}
      <section className="py-20 lg:py-28" aria-labelledby="roles-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="roles-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                Fire roller — tydelige grenser
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((item) => (
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
              <p className="text-lg text-text-light max-w-xl mx-auto mb-8">
                JodaCare for barnevern er under utvikling. Ta kontakt for å melde interesse
                eller høre mer om tidsplan.
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
