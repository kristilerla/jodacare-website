import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
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

      {/* SEKSJON 2 — Slik ser det ut i praksis */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="practice-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2
                id="practice-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
              >
                Slik ser det ut i praksis
              </h2>
              <div className="prose prose-lg text-text-light space-y-4">
                <p>
                  Når en kommune starter med JodaCare, får de en navngitt kontaktperson fra oss.
                  Ikke en helpdesk-kø. En person som kjenner kommunen, kjenner plattformen og vet
                  hva som skal til for at ansatte og pårørende faktisk tar det i bruk.
                </p>
                <p>
                  De første tre månedene følger vi prosessen tett: teknisk oppsett, opplæring av
                  ansatte, onboarding av pårørende og en felles gjennomgang etter 90 dager der vi
                  ser på hva som fungerer og hva som kan justeres.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 3 — Hva som inngår */}
      <section className="py-20 lg:py-28" aria-labelledby="includes-title">
        <Container size="md">
          <FadeIn>
            <h2
              id="includes-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-text mb-8"
            >
              Det inngår alltid:
            </h2>
            <ul className="space-y-4">
              {[
                'Teknisk oppsett og konfigurasjon',
                'Opplæring av ansatte og superbrukere',
                'Støtte til onboarding av pårørende',
                'Databehandleravtale, DPIA og sikkerhetsdokumentasjon',
                '90-dagers oppfølgingsmøte',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </span>
                  <span className="text-text-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 4 — Inkludert-budskap */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-semibold text-text">
                Implementeringsstøtten er inkludert for alle kommunale kunder de første tre månedene — uten ekstra kostnad.
              </p>
              <p className="mt-4 text-text-light">
                Etter innkjøringsperioden tilbyr vi løpende rådgivning etter behov.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SEKSJON 5 — CTA */}
      <CTA
        title="Klar til å starte?"
        subtitle="Ta kontakt for en uforpliktende samtale om implementering i din kommune."
        primaryCta={{ text: 'Kontakt oss om implementering', href: '/kontakt' }}
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
