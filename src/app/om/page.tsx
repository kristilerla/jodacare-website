import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero, Story, CTA } from '@/components/sections';
import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'jodacare ble grunnlagt av Kristil Erla Håland basert på egne erfaringer med å koordinere omsorg for sin mor med demens. Les historien bak.',
  openGraph: {
    title: 'Om jodacare',
    description: 'Historien bak jodacare — fra personlig erfaring til løsning for tusenvis av familier.',
  },
};

const partners = [
  { name: 'SINTEF', description: 'Forskningspartner for utvikling av demensvennlig grensesnitt' },
  { name: 'Universitetet i Agder', description: 'Akademisk partner for forskning på digital omsorg' },
  { name: 'Innovasjon Norge', description: 'Virkemiddelpartner for jodacare' },
  { name: 'Norway Healthtech', description: 'Norges ledende helseklynge' },
  { name: 'Dynamisk Helse', description: 'SkillAid, AI-partner for jodacare' },
];

const timeline = [
  { year: '2016', event: 'jodacare lanseres for første gang i norske kommuner' },
  { year: '2018', event: 'Jodabook utvikles i samarbeid med SINTEF — en demensvennlig versjon' },
  { year: '2020', event: 'Videosamtaler lanseres under pandemien' },
  { year: '2022', event: 'Jodacare AS bytter navn til Jodatech AS' },
  { year: '2025', event: 'Jodatech AS går konkurs og Jodacare AS overtar eierskapet av jodacare' },
  { year: '2026', event: 'jodacare 2.0 lanseres med ny arkitektur og AI-støtte' },
];

export default function OmPage() {
  return (
    <>
      <Hero
        title="Historien bak jodacare"
        subtitle="jodacare ble til fordi én datter ønsket å gi sin mor med demens verdighet og sammenheng i hverdagen."
        variant="page"
      />

      {/* Founder story */}
      <section className="py-20 lg:py-28" aria-labelledby="founder-title">
        <Container size="md">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/kristilomamma.jpg"
                  alt="Kristil Erla Håland med sin mor"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 id="founder-title" className="font-serif text-3xl font-bold text-text mb-6">
                  Kristil Erla Håland
                </h2>
                <p className="text-sm text-accent font-medium mb-4">Gründer og daglig leder</p>
                <div className="space-y-4 text-text-light">
                  <p>
                    Da mamma fikk demens, opplevde jeg hvor vanskelig det var å koordinere 
                    hverdagen hennes. Hjemmetjenesten visste ikke hva familien hadde planlagt. 
                    Søsknene mine visste ikke hva helsepersonell hadde gjort. Og mamma mistet 
                    sammenhengen i sin egen hverdag.
                  </p>
                  <p>
                    jodacare ble til fordi jeg ønsket å gi mamma verdighet. Gjennom bilder og 
                    dialog kunne hun huske hvem som hadde vært på besøk, hva hun hadde gjort, 
                    og føle seg sett og ivaretatt.
                  </p>
                  <p>
                    I dag brukes jodacare av familier og kommuner over hele Norge. 
                    Men kjernen er den samme: å skape trygghet, verdighet og sammenheng for 
                    sårbare mennesker og de som bryr seg om dem.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Story
        quote="Vår visjon er å styrke menneskeverd til personer med demens, utviklingshemminger og deres relasjon til helsepersonell og egen familie. Ved å gi denne sårbare gruppen mennesker en sammenheng i tilværelsen ser vi at det skaper ro for alle."
        author="Kristil Erla Håland"
        variant="featured"
      />

      {/* Timeline */}
      <section className="py-20 lg:py-28" aria-labelledby="timeline-title">
        <Container size="md">
          <FadeIn>
            <h2 id="timeline-title" className="font-serif text-3xl sm:text-4xl font-bold text-text text-center mb-16">
              Vår reise
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-dark" aria-hidden="true" />
            
            <StaggerContainer className="space-y-12">
              {timeline.map((item, index) => (
                <StaggerItem key={item.year}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                      <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <p className="text-text-light mt-1">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2" aria-hidden="true" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="partners-title">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="partners-title" className="font-serif text-3xl sm:text-4xl font-bold text-text">
                Våre partnere
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Vi samarbeider med ledende forsknings- og teknologimiljøer for å utvikle 
                jodacare videre.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <Card variant="bordered" padding="md" className="h-full">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardContent className="mt-2 text-sm">{partner.description}</CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Company info */}
      <section className="py-20 lg:py-28" aria-labelledby="company-title">
        <Container size="sm">
          <FadeIn>
            <Card variant="elevated" padding="lg" className="text-center">
              <h2 id="company-title" className="font-serif text-2xl font-bold text-text mb-4">
                Jodapro AS
              </h2>
              <p className="text-text-light mb-6">
                jodacare eies og utvikles av Jodacare AS, et norsk selskap med hovedkontor 
                i Asker.
              </p>
              <div className="text-sm text-text-muted space-y-1">
                <p>Org.nr: 927 828 947</p>
                <p>Jørgens vei 9, 1386 Asker</p>
                <p>
                  <a href="https://jodacare.no" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    jodacare.no
                  </a>
                </p>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <CTA
        title="Vil du vite mer?"
        subtitle="Ta kontakt for en uforpliktende prat om hvordan jodacare kan hjelpe deg."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
      />
    </>
  );
}
