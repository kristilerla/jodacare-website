'use client';

import { Container, Card, CardTitle, CardContent } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ClockIcon,
  CalendarIcon,
  UserCircleIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Delt tidslinje',
    description: 'Bilder, tekst og oppdateringer fra hverdagen delt mellom alle i nettverket.',
    icon: ClockIcon,
  },
  {
    title: 'Felles kalender',
    description: 'Oversikt over besøk, avtaler og rutiner som alle kan se og oppdatere.',
    icon: CalendarIcon,
  },
  {
    title: 'Personlige profiler',
    description: 'Alle i nettverket har profil med bilde og info, så alle vet hvem alle er.',
    icon: UserCircleIcon,
  },
  {
    title: 'Livshistorie',
    description: 'En profil for hovedpersonen med det som er viktig nå og tidligere i livet.',
    icon: BookOpenIcon,
  },
  {
    title: 'Video',
    description: 'Nærkontakt når fysisk besøk er vanskelig, spesielt under sykdom.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Sikker meldingskanal',
    description: 'Sensitiv informasjon om dagsform deles kun med autoriserte personer.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Full sporbarhet',
    description: 'Alle aktiviteter logges automatisk for trygghet og dokumentasjon.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'AI-assistert innsikt',
    description: 'Intelligent oppsummering av daglige oppdateringer og mønstre i dagsform.',
    icon: SparklesIcon,
  },
];

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
}

export function Features({ 
  title = 'Alt du trenger for trygg kommunikasjon',
  subtitle = 'JodaCare gir deg verktøyene for å holde alle rundt en sårbar person oppdatert og involvert.',
  showAll = true 
}: FeaturesProps) {
  const displayedFeatures = showAll ? features : features.slice(0, 4);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="features-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              id="features-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-text-light">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card variant="bordered" className="h-full hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-accent-light/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent-dark" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardContent className="mt-2 text-sm">
                  {feature.description}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
