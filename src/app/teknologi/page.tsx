import type { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  DeviceTabletIcon,
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
  KeyIcon,
  IdentificationIcon,
  BuildingOfficeIcon,
  ArrowsRightLeftIcon,
  EnvelopeIcon,
  SparklesIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  ChartBarIcon,
  LinkIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Teknologi',
  description: 'jodacare 2.0 er bygget med moderne teknologi — sikker, skalerbar og brukervennlig. Les om plattformen, arkitekturen og sikkerhetsmekanismene.',
  openGraph: {
    title: 'Teknologi i jodacare 2.0',
    description: 'Moderne teknologi bygget for omsorg. Nettbasert plattform med sanntidssamarbeid, rollebasert tilgang og fremtidig KI-støtte.',
  },
};

const platformFeatures = [
  {
    title: 'Nettbasert plattform',
    description: 'Ingen installasjon nødvendig — jodacare kjører direkte i nettleseren. Alltid oppdatert, alltid tilgjengelig fra hvilken som helst enhet med internett.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Fungerer som en app (PWA)',
    description: 'jodacare kan installeres som en app på mobil og nettbrett uten å gå via app-butikker. Rask oppstart, push-varsler og hjemmeskjerm-ikon.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Sanntidssamarbeid',
    description: 'Endringer synkroniseres umiddelbart mellom alle brukere. Når en kollega oppdaterer en plan, ser du det med en gang — uten å laste siden på nytt.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Mobiltilpasset design',
    description: 'Grensesnittet tilpasser seg automatisk til skjermstørrelsen. Like god opplevelse på mobil, nettbrett og PC — designet for travle hverdager.',
    icon: DeviceTabletIcon,
  },
];

const architecturePoints = [
  {
    title: 'Skybasert infrastruktur',
    description: 'Hostet på enterprise-grade skytjenester med automatisk skalering og geografisk redundans i EU.',
    icon: CloudIcon,
  },
  {
    title: 'Serverless arkitektur',
    description: 'Moderne serverless-modell som skalerer automatisk etter behov — fra én til tusenvis av samtidige brukere.',
    icon: ServerIcon,
  },
  {
    title: 'Relasjonsdatabase',
    description: 'PostgreSQL med row-level security sørger for at data er konsistent, pålitelig og alltid beskyttet.',
    icon: CircleStackIcon,
  },
  {
    title: 'Automatisk utrulling',
    description: 'Nye versjoner rulles ut automatisk uten nedetid. Dere får alltid den nyeste versjonen uten å løfte en finger.',
    icon: RocketLaunchIcon,
  },
];

const techBadges = [
  'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase',
  'Tailwind CSS', 'Vercel', 'Node.js',
];

const securityFeatures = [
  {
    title: 'Databasenivå sikkerhet (RLS)',
    description: 'Tilgangskontroll er bygget inn i selve databaselaget. Selv om applikasjonskoden skulle ha en feil, forblir data beskyttet.',
    icon: CircleStackIcon,
  },
  {
    title: 'Rollebasert tilgang (RBAC)',
    description: '6 definerte rollenivåer sørger for at hver bruker kun ser og gjør det de har rett til — fra lesetilgang til full administrasjon.',
    icon: UserGroupIcon,
  },
  {
    title: 'Flerfaktor-autentisering (MFA)',
    description: 'Støtte for TOTP-basert flerfaktor-autentisering gir et ekstra sikkerhetslag utover passord.',
    icon: FingerPrintIcon,
  },
  {
    title: 'GDPR og Normen',
    description: 'Plattformen er utviklet i tråd med GDPR, personopplysningsloven og Normen for informasjonssikkerhet i helsesektoren.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Hastighetsbegrensning',
    description: 'Rate limiting beskytter mot automatiserte angrep og misbruk ved å begrense antall forespørsler per bruker og tidsperiode.',
    icon: ClockIcon,
  },
  {
    title: 'Fullstendig sporbarhet',
    description: 'Alle handlinger logges i et uforanderlig revisjonslogg (audit log). Full oversikt over hvem som gjorde hva, og når.',
    icon: ClipboardDocumentCheckIcon,
  },
];

const authMethods = [
  {
    title: 'jodacare Auth',
    description: 'Innebygd autentisering med e-post og passord, magic link og flerfaktor-autentisering (MFA).',
    icon: KeyIcon,
    badge: 'Tilgjengelig',
    badgeVariant: 'success' as const,
  },
  {
    title: 'ID-porten',
    description: 'Innlogging med BankID, Buypass eller Commfides via ID-porten for sikkerhetsnivå 4.',
    icon: IdentificationIcon,
    badge: 'Kommer snart',
    badgeVariant: 'warning' as const,
  },
  {
    title: 'Azure AD',
    description: 'Single sign-on (SSO) via organisasjonens Azure Active Directory for sømløs innlogging.',
    icon: BuildingOfficeIcon,
    badge: 'Kommer snart',
    badgeVariant: 'warning' as const,
  },
];

const onboardingSteps = [
  {
    step: 1,
    title: 'Registrer organisasjonen',
    description: 'Opprett en konto for organisasjonen din på noen få minutter.',
  },
  {
    step: 2,
    title: 'Inviter ansatte',
    description: 'Send invitasjoner via magic link — ingen passord å huske ved første innlogging.',
  },
  {
    step: 3,
    title: 'Sett opp tilganger',
    description: 'Tildel roller og tilgangsnivåer tilpasset hver ansatts behov.',
  },
  {
    step: 4,
    title: 'Klar til bruk',
    description: 'Plattformen er klar — begynn å samarbeide trygt og effektivt.',
  },
];

const integrations = [
  {
    title: 'Azure AD-synkronisering',
    description: 'Automatisk synkronisering av brukere og grupper fra organisasjonens Azure Active Directory.',
    icon: ArrowsRightLeftIcon,
    badge: 'Kommer snart',
    badgeVariant: 'warning' as const,
  },
  {
    title: 'API for tredjeparter',
    description: 'Åpent API som gjør det mulig å koble jodacare sammen med andre systemer i organisasjonen.',
    icon: LinkIcon,
    badge: 'Kommer snart',
    badgeVariant: 'warning' as const,
  },
  {
    title: 'EPJ-integrasjon',
    description: 'Integrasjon mot elektroniske pasientjournaler som DIPS og Profil for sømløs informasjonsflyt.',
    icon: CpuChipIcon,
    badge: 'På veikartet',
    badgeVariant: 'accent' as const,
  },
  {
    title: 'E-postvarsler',
    description: 'Automatiske e-postvarsler ved viktige hendelser som nye meldinger, endringer i planer og påminnelser.',
    icon: EnvelopeIcon,
    badge: 'Tilgjengelig',
    badgeVariant: 'success' as const,
  },
];

const aiFeatures = [
  {
    title: 'KI-støttet dokumentasjon',
    description: 'Intelligente forslag til dokumentasjon basert på kontekst og tidligere journalføringer.',
    icon: SparklesIcon,
  },
  {
    title: 'Norsk talegjenkjenning',
    description: 'Diktér notater og rapporter på norsk — systemet transkriberer og strukturerer teksten automatisk.',
    icon: MicrophoneIcon,
  },
  {
    title: 'Intelligente sammendrag',
    description: 'Automatisk oppsummering av lange journaler og møtenotater for raskere oversikt.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Mønstergjenkjenning i dagsform',
    description: 'Analyse av dagsform-registreringer over tid for å identifisere trender og endringer.',
    icon: ChartBarIcon,
  },
];

const factStrip = [
  { value: '99.9%', label: 'Oppetid' },
  { value: 'TLS 1.3', label: 'Kryptering' },
  { value: 'EU', label: 'Datalagring' },
  { value: '6', label: 'Rollenivå' },
];

export default function TeknologiPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        title="Moderne teknologi bygget for omsorg"
        subtitle="jodacare 2.0 er utviklet fra bunnen av med sikkerhet, brukervennlighet og skalerbarhet i kjernen."
        variant="page"
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Les om sikkerhet', href: '/sikkerhet' }}
      />

      {/* 2. Plattformen */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="platform-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="accent" className="mb-4">Plattformen</Badge>
              <h2 id="platform-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Én plattform — tilgjengelig overalt
              </h2>
              <p className="mt-4 text-lg text-text-light">
                jodacare er en moderne nettbasert plattform som fungerer like godt på mobil,
                nettbrett og PC — uten installasjon.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardContent className="mt-2">{feature.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 3. Arkitektur */}
      <section className="py-20 lg:py-28" aria-labelledby="architecture-title">
        <Container size="md">
          <FadeIn>
            <Card variant="bordered" padding="lg">
              <h2 id="architecture-title" className="font-serif text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
                Bygget på moderne arkitektur
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  {architecturePoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">{point.title}</h3>
                        <p className="mt-1 text-sm text-text-light">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-4">Teknologier vi bruker</h3>
                  <div className="flex flex-wrap gap-2">
                    {techBadges.map((tech) => (
                      <Badge key={tech} variant="default" size="md">{tech}</Badge>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-text-light">
                    Vi har valgt teknologier som er velprøvde, godt vedlikeholdte og brukt av
                    noen av verdens største tjenester. Det betyr stabilitet, sikkerhet og
                    et stort økosystem av utviklere.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      {/* 4. Sikkerhet og tilgang */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="security-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="success" className="mb-4">Sikkerhet</Badge>
              <h2 id="security-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Sikkerhet og tilgangskontroll
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Sikkerheten er bygget inn i alle lag av plattformen — fra database til brukergrensesnitt.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="bordered" padding="md" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-success" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                      <CardContent className="mt-1 text-sm">{feature.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 5. Innloggingsmetoder */}
      <section className="py-20 lg:py-28" aria-labelledby="auth-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="auth-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Fleksible innloggingsmetoder
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Velg innloggingsmetoden som passer best for din organisasjon.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {authMethods.map((method) => (
              <StaggerItem key={method.title}>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <Badge variant={method.badgeVariant} size="sm" className="mb-3">{method.badge}</Badge>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardContent className="mt-2 text-sm">{method.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 6. Enkel oppstart */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="onboarding-title">
        <Container size="md">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="onboarding-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Kom i gang på minutter
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Oppstarten er enkel — ingen komplisert installasjon eller oppsett.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {onboardingSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-light">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 7. Integrasjoner */}
      <section className="py-20 lg:py-28" aria-labelledby="integrations-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="accent" className="mb-4">Integrasjoner</Badge>
              <h2 id="integrations-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Koble sammen systemene dine
              </h2>
              <p className="mt-4 text-lg text-text-light">
                jodacare er designet for å spille sammen med resten av IT-landskapet i kommunen.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((item) => (
              <StaggerItem key={item.title}>
                <Card variant="bordered" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge variant={item.badgeVariant} size="sm">{item.badge}</Badge>
                      </div>
                      <CardContent className="mt-2">{item.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 8. Fremtidens KI-muligheter */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="ai-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="warning" className="mb-4">Kommer i fremtiden</Badge>
              <h2 id="ai-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Fremtidens KI-muligheter
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Vi utforsker hvordan kunstig intelligens kan gjøre hverdagen enklere for
                helsepersonell — uten å gå på bekostning av personvern.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-warning" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardContent className="mt-2">{feature.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="mt-10 text-center text-sm text-text-muted max-w-2xl mx-auto">
              KI-funksjonene er under utvikling og vil bli rullet ut gradvis. All bruk av KI
              i jodacare vil være transparent, personvernvennlig og i tråd med gjeldende regelverk.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 9. Fakta-stripe */}
      <section className="py-16 border-y border-secondary" aria-labelledby="facts-title">
        <Container>
          <FadeIn>
            <h2 id="facts-title" className="sr-only">Nøkkeltall</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {factStrip.map((fact) => (
                <div key={fact.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{fact.value}</div>
                  <div className="text-sm text-text-muted">{fact.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 10. CTA */}
      <CTA
        title="Vil du vite mer om teknologien?"
        subtitle="Vi tar gjerne en gjennomgang av plattformen tilpasset din organisasjons IT-krav."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Les om sikkerhet', href: '/sikkerhet' }}
      />
    </>
  );
}
