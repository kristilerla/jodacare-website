'use client';

import { Container, Card, CardTitle, CardContent, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { BuildingOffice2Icon, HomeIcon, HeartIcon } from '@heroicons/react/24/outline';

const audiences = [
  {
    title: 'Kommuner og helsetjenester',
    description: 'Hjemmetjeneste, sykehjem og omsorgsboliger bruker jodacare for å samarbeide bedre med pårørende og dokumentere samhandling.',
    icon: BuildingOffice2Icon,
    href: '/kommune',
    cta: 'Les mer',
  },
  {
    title: 'Pårørende',
    description: 'Familie og venner holder seg oppdatert på hverdagen til den de er glad i, uansett hvor de bor.',
    icon: HomeIcon,
    href: '/familie',
    cta: 'Les mer',
  },
  {
    title: 'Den sårbare personen',
    description: 'Gjennom bilder og dialog får hovedpersonen sammenheng i hverdagen og føler seg sett og ivaretatt.',
    icon: HeartIcon,
    href: '/om',
    cta: 'Les mer',
  },
];

export function WhoUsesIt() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="who-uses-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              id="who-uses-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              Hvem bruker jodacare?
            </h2>
            <p className="mt-4 text-lg text-text-light">
              jodacare bygger bro mellom alle som bryr seg om én person.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <Card variant="elevated" padding="lg" className="h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-accent-light/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="w-8 h-8 text-accent-dark" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl mb-3">{audience.title}</CardTitle>
                <CardContent className="flex-1 mb-6">
                  {audience.description}
                </CardContent>
                <Button href={audience.href} variant="ghost" size="sm">
                  {audience.cta} →
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
