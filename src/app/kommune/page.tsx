import type { Metadata } from 'next';
import { Hero, Security, Pricing, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ChartBarIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ClockIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'For kommuner og organisasjoner',
  description: 'JodaCare hjelper kommuner med å øke kapasiteten i helsetjenesten, redusere pårørendehenvendelser og oppfylle lovkrav om pårørendesamarbeid.',
  openGraph: {
    title: 'JodaCare for kommuner og organisasjoner',
    description: 'Øk kapasiteten i helsetjenesten uten å øke bemanningen. Sikker samhandling med pårørende.',
  },
};

const valuePropositions = [
  {
    title: 'Øk kapasiteten',
    description: 'Effektiviser samhandling med pårørende uten å øke bemanningen. Spar tid på telefonhenvendelser.',
    icon: ChartBarIcon,
  },
  {
    title: 'Reduser misnøye',
    description: 'Pårørende føler seg inkludert og informert. Færre klager og bekymringshenvendelser.',
    icon: UserGroupIcon,
  },
  {
    title: 'Oppfyll lovkrav',
    description: 'Dokumentert samhandling med pårørende i tråd med helsepersonelloven.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Full sporbarhet',
    description: 'Alle aktiviteter logges automatisk. Komplett dokumentasjon av all kommunikasjon.',
    icon: ClockIcon,
  },
];

const useCases = [
  {
    title: 'Hjemmetjeneste',
    description: 'Gi pårørende innsyn i hverdagen og reduser bekymring for de som bor hjemme.',
    icon: HomeModernIcon,
  },
  {
    title: 'Sykehjem og omsorgsboliger',
    description: 'Hold familier oppdatert på hverdagen til beboere, selv når de ikke kan besøke.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Barn og unge',
    description: 'Koordiner rundt barn og unge med funksjonsnedsettelser på tvers av tjenester.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Palliativ omsorg',
    description: 'Støtt familier i en vanskelig tid med tett kommunikasjon og nærkontakt via video.',
    icon: HeartIcon,
  },
  {
    title: 'Overgang til arbeidsliv',
    description: 'Følg opp personer med lærevansker i overgangen fra skole til arbeidsliv.',
    icon: SparklesIcon,
  },
];

const kommunePricing = [
  {
    name: 'Kommune',
    price: 'kr 2 990',
    period: '/mnd',
    description: 'For kommuner og helseorganisasjoner som vil styrke pårørendesamarbeidet.',
    features: [
      '10 tjenestemottakere inkludert',
      'Ubegrenset ansatte',
      'Ubegrenset pårørende',
      'ID-porten innlogging',
      'Full sporbarhet og logging',
      'Databehandleravtale',
      'Prioritert support',
    ],
    cta: { text: 'Ta kontakt', href: '/kontakt' },
    highlighted: true,
    badge: 'Mest populær',
  },
];

export default function KommunePage() {
  return (
    <>
      <Hero
        title="Styrk samarbeidet med pårørende"
        subtitle="JodaCare gir helsetjenesten et verktøy for sikker og effektiv kommunikasjon med pårørende — uten å øke arbeidsmengden."
        primaryCta={{ text: 'Ta kontakt for demo', href: '/kontakt' }}
        secondaryCta={{ text: 'Se priser', href: '#priser' }}
        variant="page"
      />

      {/* Value propositions */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="value-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="value-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Hvorfor velge JodaCare?
              </h2>
              <p className="mt-4 text-lg text-text-light">
                JodaCare er utviklet i tett samarbeid med norske kommuner siden 2016.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((item) => (
              <StaggerItem key={item.title}>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardContent className="mt-2">{item.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28" aria-labelledby="use-cases-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="use-cases-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Bruksområder
              </h2>
              <p className="mt-4 text-lg text-text-light">
                JodaCare brukes på tvers av helsetjenesten for å styrke samarbeidet rundt sårbare personer.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <Card variant="bordered" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-accent-dark" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                      <CardContent className="mt-1">{useCase.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <Security variant="full" />

      <div id="priser">
        <Pricing
          title="Enkel og forutsigbar prising"
          subtitle="Alt inkludert i én månedspris. Ingen skjulte kostnader."
          tiers={kommunePricing}
          footnote="Oppstartsgebyr kr 28 000 per kommune (inkluderer introduksjon og databehandleravtaler). Superbrukerkurs: kr 7 500."
        />
      </div>

      <CTA
        title="Klar til å styrke pårørendesamarbeidet?"
        subtitle="Book en uforpliktende demo og se hvordan JodaCare kan hjelpe din kommune."
        primaryCta={{ text: 'Ta kontakt for demo', href: '/kontakt' }}
        secondaryCta={{ text: 'Les mer om sikkerhet', href: '/sikkerhet' }}
      />
    </>
  );
}
