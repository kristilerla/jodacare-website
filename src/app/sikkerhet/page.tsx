import type { Metadata } from 'next';
import { Hero, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  FingerPrintIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  EyeSlashIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sikkerhet',
  description: 'JodaCare tar sikkerhet på største alvor. Les om ID-porten, GDPR, databehandling og hvordan vi beskytter sensitive helseopplysninger.',
  openGraph: {
    title: 'Sikkerhet i JodaCare',
    description: 'Sikkerhetsnivå 4 med ID-porten, GDPR-compliant, data lagret i Europa. Les mer om hvordan vi beskytter dine data.',
  },
};

const securityFeatures = [
  {
    title: 'ID-porten innlogging',
    description: 'All tilgang til JodaCare skjer via sikker innlogging med ID-porten — BankID, Buypass eller Commfides. Dette gir sikkerhetsnivå 4, det høyeste nivået for digital identifikasjon i Norge.',
    icon: FingerPrintIcon,
    badge: 'Sikkerhetsnivå 4',
  },
  {
    title: 'GDPR-compliant',
    description: 'JodaCare følger alle krav i GDPR (personvernforordningen), helsepersonelloven og personopplysningsloven. Vi har rutiner for databehandling, innsyn og sletting.',
    icon: ShieldCheckIcon,
    badge: 'EU-godkjent',
  },
  {
    title: 'Databehandleravtale',
    description: 'Alle kommuner og organisasjoner som bruker JodaCare inngår databehandleravtale. Dette sikrer at personopplysninger behandles i tråd med lovverket.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Data lagret i Europa',
    description: 'Alle data lagres hos godkjente leverandører i Europa. Vi bruker moderne sikkerhetsteknologi og kryptering for å hindre uautorisert tilgang.',
    icon: ServerStackIcon,
    badge: 'EU-lagring',
  },
  {
    title: 'Full sporbarhet',
    description: 'Alle aktiviteter i JodaCare logges automatisk. Kommunen har full oversikt over hvem som har sett og delt informasjon, og når dette har skjedd.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Samtykkebasert deling',
    description: 'Informasjon deles kun basert på samtykke fra tjenestemottaker eller verge. Systemet sørger for at deling skjer i henhold til pasientens rettigheter.',
    icon: LockClosedIcon,
  },
];

const additionalSecurity = [
  {
    title: 'Kryptert kommunikasjon',
    description: 'All kommunikasjon mellom din enhet og JodaCare er kryptert med TLS 1.3.',
    icon: KeyIcon,
  },
  {
    title: 'Tilgangskontroll',
    description: 'Granulert tilgangsstyring sikrer at brukere kun ser informasjon de har rett til.',
    icon: EyeSlashIcon,
  },
  {
    title: 'Regelmessig sikkerhetstesting',
    description: 'Vi gjennomfører jevnlig penetrasjonstesting og sikkerhetsrevisjoner.',
    icon: ShieldCheckIcon,
  },
];

export default function SikkerhetPage() {
  return (
    <>
      <Hero
        title="Sikkerhet du kan stole på"
        subtitle="JodaCare er bygget med sikkerhet i kjernen. Vi tar personvern og datasikkerhet på største alvor."
        variant="page"
      />

      {/* Main security features */}
      <section className="py-20 lg:py-28" aria-labelledby="security-main-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="success" className="mb-4">Sikkerhet</Badge>
              <h2 id="security-main-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Hvordan vi beskytter dine data
              </h2>
              <p className="mt-4 text-lg text-text-light">
                JodaCare er utviklet spesielt for å ivareta sikkerheten og personvernet 
                til pasienter, pårørende og ansatte.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="bordered" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-success" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        {feature.badge && (
                          <Badge variant="success" size="sm">{feature.badge}</Badge>
                        )}
                      </div>
                      <CardContent className="mt-2">{feature.description}</CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Additional security */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="additional-security-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="additional-security-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Ytterligere sikkerhetstiltak
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalSecurity.map((item) => (
              <StaggerItem key={item.title}>
                <Card variant="elevated" padding="md" className="h-full text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardContent className="mt-2 text-sm">{item.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Compliance section */}
      <section className="py-20 lg:py-28" aria-labelledby="compliance-title">
        <Container size="md">
          <FadeIn>
            <Card variant="bordered" padding="lg">
              <h2 id="compliance-title" className="font-serif text-2xl font-bold text-text mb-6">
                Lovverk og compliance
              </h2>
              <div className="space-y-6 text-text-light">
                <div>
                  <h3 className="font-semibold text-text mb-2">Helsepersonelloven</h3>
                  <p>
                    JodaCare er bygget for å støtte opp om lovpålagt samhandling mellom 
                    helsepersonell, pårørende og andre samarbeidspartnere. Systemet sørger 
                    for at deling av informasjon skjer i henhold til helsepersonellovens 
                    bestemmelser om taushetsplikt og informasjonsplikt.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Personopplysningsloven og GDPR</h3>
                  <p>
                    Vi behandler personopplysninger i samsvar med personopplysningsloven 
                    og EUs personvernforordning (GDPR). Dette inkluderer rutiner for 
                    innhenting av samtykke, innsyn, retting og sletting av data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Pasient- og brukerrettighetsloven</h3>
                  <p>
                    JodaCare respekterer pasientens rett til informasjon og medvirkning. 
                    Systemet er designet for å styrke pasientens og pårørendes mulighet 
                    til å delta i beslutninger om egen helse og omsorg.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      {/* Trust badges */}
      <section className="py-16 border-y border-secondary" aria-labelledby="trust-title">
        <Container>
          <FadeIn>
            <h2 id="trust-title" className="sr-only">Tillitsindikatorer</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2016</div>
                <div className="text-sm text-text-muted">I drift siden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-text-muted">Kommuner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Nivå 4</div>
                <div className="text-sm text-text-muted">Sikkerhetsnivå</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">EU</div>
                <div className="text-sm text-text-muted">Datalagring</div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTA
        title="Har du spørsmål om sikkerhet?"
        subtitle="Vi stiller gjerne opp for å forklare nærmere hvordan JodaCare fungerer og beskytter dine data."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
      />
    </>
  );
}
