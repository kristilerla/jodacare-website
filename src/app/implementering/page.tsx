import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  UserIcon,
  PhoneIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  HomeModernIcon,
  HeartIcon,
  UsersIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'JodaCare — Vi hjelper med implementeringen',
  description:
    'JodaCare tildeler en egen Implementeringsansvarlig som veileder din kommune fra første oppsett til plattformen sitter i ryggmargen.',
  openGraph: {
    title: 'JodaCare — Vi hjelper med implementeringen',
    description:
      'JodaCare tildeler en egen Implementeringsansvarlig som veileder din kommune fra første oppsett til plattformen sitter i ryggmargen.',
  },
};

const implementeringCards = [
  {
    title: 'Rollen i kommunen',
    description:
      'En navngitt person i din organisasjon eier implementeringen og har oversikt over alle steg.',
    icon: UserIcon,
  },
  {
    title: 'JodaCares veileder',
    description:
      'Vår Implementeringsansvarlig er tilgjengelig på telefon, e-post og i systemet gjennom hele prosessen.',
    icon: PhoneIcon,
  },
  {
    title: 'Implementeringsdashboard',
    description:
      'Sjekkliste, kursadministrasjon, samtykkehåndtering, enhetsverifisering og brukeroversikt på ett sted.',
    icon: ChartBarIcon,
  },
  {
    title: 'Tydelig overlevering',
    description:
      'Når implementeringen er ferdig, eier kommunen systemet fullt ut. Ingen avhengighet til oss for daglig drift.',
    icon: CheckBadgeIcon,
  },
];

const steps = [
  {
    step: '1',
    title: 'Oppsett',
    description:
      'Organisasjon, avdelinger og brukere opprettes. Vi gjør dette sammen.',
  },
  {
    step: '2',
    title: 'Opplæring',
    description:
      'Kurs tildeles og gjennomføres. Samtykker innhentes digitalt.',
  },
  {
    step: '3',
    title: 'Pilot',
    description:
      'Første avdeling i drift. Tilbakemelding innhentes og justeres.',
  },
  {
    step: '4',
    title: 'Utrulling',
    description:
      'Alle avdelinger live. Implementeringsansvarlig koordinerer.',
  },
  {
    step: '5',
    title: 'Overlevering',
    description:
      'Kommunen eier systemet. Vi er fortsatt tilgjengelige, men ikke nødvendige.',
  },
];

const relatedPages = [
  {
    title: 'Omsorgsbolig og Hub',
    description: 'JodaCare Hub kobler beboer, familie og ansatte gjennom en skjerm i leiligheten.',
    href: '/omsorgsbolig',
    icon: HomeModernIcon,
  },
  {
    title: 'BPA — brukerstyrt personlig assistanse',
    description: 'Verktøy for brukerstyrt personlig assistanse i kommunen.',
    href: '/bpa',
    icon: UsersIcon,
  },
  {
    title: 'Familierom for pårørende',
    description: 'Gi familien en felles plass for hverdagen til den de er glad i.',
    href: '/familie',
    icon: HeartIcon,
  },
];

export default function ImplementeringPage() {
  return (
    <>
      {/* SEKSJON 1 — Hero */}
      <Hero
        title="Du slipper å starte alene"
        subtitle="Kommuner er vant til at nye IT-systemer rulles ut og ikke brukes. Vi vet det. Derfor tilbyr JodaCare aktiv implementeringsstøtte til alle kommunale kunder — med en dedikert Implementeringsansvarlig som følger prosessen fra første dag."
        primaryCta={{ text: 'Kontakt oss om implementering', href: '/kontakt' }}
        variant="page"
        badge="Implementeringsstøtte"
      />

      {/* SEKSJON 2 — Endringsmotstand er reell */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="problem-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2
                id="problem-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
              >
                Endringsmotstand er reell
              </h2>
              <div className="prose prose-lg text-text-light">
                <p>
                  Nye systemer feiler ikke fordi teknologien er dårlig. De feiler fordi ingen eier
                  prosessen. Ansatte får ikke god nok opplæring. Ledere har ikke tid til å følge
                  opp. Og plutselig bruker ingen systemet likevel.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — To Implementeringsansvarlige */}
      <section className="py-20 lg:py-28" aria-labelledby="roles-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                id="roles-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                To Implementeringsansvarlige — én fra oss, én fra dere
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Vi introduserer rollen Implementeringsansvarlig. En dedikert person i din kommune
                får denne rollen i JodaCare — med tilgang til et eget dashboard som gir full
                oversikt over fremdrift. Vår egen Implementeringsansvarlig møter dem med veiledning,
                maler og svar hele veien.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implementeringCards.map((item) => (
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

      {/* SEKSJON 4 — En tydelig prosess fra dag én */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="steps-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                id="steps-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-text"
              >
                En tydelig prosess fra dag én
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

      {/* SEKSJON 5 — CTA */}
      <CTA
        title="Klar til å starte?"
        subtitle="Ta kontakt for en uforpliktende samtale om implementering i din kommune."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
      />

      {/* SEKSJON 6 — Relatert */}
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
