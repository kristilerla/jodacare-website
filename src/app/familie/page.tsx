import type { Metadata } from 'next';
import { Hero, Pricing, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  PhotoIcon,
  CalendarDaysIcon,
  LockClosedIcon,
  UsersIcon,
  HeartIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'For familier',
  description: 'jodacare for private familier. Hold hele familien oppdatert på hverdagen til den dere er glad i, uansett hvor dere bor.',
  openGraph: {
    title: 'jodacare for familier',
    description: 'Én felles plass for all informasjon om den du er glad i. Trygg og privat.',
  },
};

const familyFeatures = [
  {
    title: 'Del dagbok, bilder og meldinger',
    description: 'Del dagbok, bilder og meldinger med hele familien.',
    icon: PhotoIcon,
  },
  {
    title: 'Felles kalender',
    description: 'Felles kalender for avtaler, besøk og aktiviteter.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'AI-generert livshistorie',
    description: 'AI-generert livshistorie som bevarer minner.',
    icon: SparklesIcon,
  },
  {
    title: 'Inviter opptil 10 familiemedlemmer',
    description: 'Inviter opptil 10 familiemedlemmer.',
    icon: UsersIcon,
  },
  {
    title: 'Koble til kommunens helseteam',
    description: 'Koble til kommunens helseteam når behovet oppstår.',
    icon: HeartIcon,
  },
];

const scenarios = [
  {
    title: 'Eldre foreldre',
    description: 'Foreldre som trenger mer hjelp i hverdagen, men fortsatt bor hjemme.',
    icon: HeartIcon,
  },
  {
    title: 'Demensdiagnose',
    description: 'Når noen i familien har fått en demensdiagnose og trenger mer oppfølging.',
    icon: SparklesIcon,
  },
  {
    title: 'Spredt familie',
    description: 'Når søsken bor spredt i landet, men alle vil bidra og holde seg oppdatert.',
    icon: MapPinIcon,
  },
  {
    title: 'Kognitive utfordringer',
    description: 'Familier med barn eller voksne som trenger ekstra koordinering i hverdagen.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const familyPricing = [
  {
    name: 'Familie',
    price: 'kr 299',
    period: '/mnd',
    description: 'For familier som vil holde kontakten og koordinere hverdagen.',
    features: [
      '14 dager gratis prøveperiode',
      'Inviter opptil 10 familiemedlemmer',
      'Delt tidslinje med bilder og tekst',
      'Felles kalender',
      'AI-generert livshistorie',
      'Sikker meldingskanal',
      'Koble til kommunens helseteam',
    ],
    cta: { text: 'Opprett Familierom — gratis', href: 'https://app.jodaskills.com/register?flow=family' },
    highlighted: true,
    badge: 'Gratis i 14 dager',
  },
];

const familyPricingFootnote = 'Ingen kredittkort. 14 dager gratis. 299 kr/mnd etterpå, ingen binding.';

export default function FamiliePage() {
  return (
    <>
      <Hero
        title="Start et Familierom"
        subtitle="Samle familien rundt den som trenger omsorg. Del hverdagen, koordiner besøk, og hold alle oppdatert — uansett hvor dere bor."
        primaryCta={{ text: 'Opprett Familierom — gratis', href: 'https://app.jodaskills.com/register?flow=family' }}
        secondaryCta={{ text: 'Se hvordan det fungerer', href: '#hvordan' }}
        variant="page"
        badge="Gratis i 14 dager"
      />

      {/* Scenario section */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="scenario-title">
        <Container size="md">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2 id="scenario-title" className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6">
                Kjenner du deg igjen?
              </h2>
              <div className="prose prose-lg text-text-light">
                <p>
                  Du merker at mamma glemmer mer og mer. Søsknene dine bor spredt i landet. 
                  Dere vil alle bidra, men ingen har oversikt.
                </p>
                <p>
                  <em>Hvem var hos mamma i dag? Har hun tatt medisinene? Hvordan var dagen hennes?</em>
                </p>
                <p>
                  Med jodacare får hele familien én felles plass for informasjon om den dere er glad i. 
                  Alle kan bidra. Alle holder seg oppdatert. Og mamma får sammenheng i hverdagen 
                  gjennom bilder og dialog.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features for families */}
      <section id="hvordan" className="py-20 lg:py-28" aria-labelledby="family-features-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="family-features-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Alt familien trenger
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Enkle verktøy for å holde kontakten og koordinere hverdagen.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {familyFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="bordered" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-light/50 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-dark" aria-hidden="true" />
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

      {/* Who is this for */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="who-for-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="who-for-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Hvem er dette for?
              </h2>
              <p className="mt-4 text-lg text-text-light">
                jodacare passer for alle familier som koordinerer omsorg på tvers av avstand.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario) => (
              <StaggerItem key={scenario.title}>
                <Card variant="elevated" padding="md" className="h-full text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <scenario.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  <CardContent className="mt-2 text-sm">{scenario.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* How to get started */}
      <section className="py-20 lg:py-28" aria-labelledby="get-started-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 id="get-started-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Kom i gang på minutter
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              { step: '1', title: 'Opprett familierom', description: 'Registrer deg og fortell oss hvem som skal få omsorg.' },
              { step: '2', title: 'Inviter familien', description: 'Legg til søsken, barn og andre som vil følge med.' },
              { step: '3', title: 'Del hverdagen', description: 'Skriv i dagboken, del bilder og bruk kalenderen.' },
              { step: '4', title: 'Koble til kommunen', description: 'Når behovet oppstår — inviter helsepersonell inn i teamet.' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-text-light">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <Pricing
        title="Enkel prising for familier"
        subtitle="Start gratis og oppgrader når du er klar."
        tiers={familyPricing}
        footnote={familyPricingFootnote}
      />

      <CTA
        title="Gi familien din trygghet"
        subtitle="Start gratis i dag og se hvor enkelt det er å holde alle oppdatert."
        primaryCta={{ text: 'Opprett Familierom — gratis', href: 'https://app.jodaskills.com/register?flow=family' }}
        variant="accent"
      />
    </>
  );
}
