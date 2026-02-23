'use client';

import { Container } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { 
  UserGroupIcon, 
  UserPlusIcon, 
  ShareIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    title: 'Opprett nettverk',
    description: 'Start med å opprette et nettverk rundt den du er glad i. Det tar bare noen minutter.',
    icon: UserGroupIcon,
  },
  {
    number: '02',
    title: 'Inviter personer',
    description: 'Inviter familie, venner og helsepersonell som skal være en del av nettverket.',
    icon: UserPlusIcon,
  },
  {
    number: '03',
    title: 'Del hverdagen',
    description: 'Del bilder, oppdateringer og beskjeder. Alle holder seg oppdatert på hverdagen.',
    icon: ShareIcon,
  },
  {
    number: '04',
    title: 'Skap trygghet',
    description: 'Gi sammenheng og trygghet til den sårbare personen gjennom felles kommunikasjon.',
    icon: HeartIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="how-it-works-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              id="how-it-works-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              Slik fungerer jodacare
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Fire enkle steg til bedre kommunikasjon og trygghet i hverdagen.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-6 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>
                <div className="mt-4">
                  <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
