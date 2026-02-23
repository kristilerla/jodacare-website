'use client';

import { Container, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  ShieldCheckIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const securityFeatures = [
  {
    title: 'ID-porten innlogging',
    description: 'Sikker innlogging med BankID, Buypass eller Commfides. Sikkerhetsnivå 4.',
    icon: FingerPrintIcon,
  },
  {
    title: 'GDPR-compliant',
    description: 'Følger alle krav i GDPR, helsepersonelloven og personopplysningsloven.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Data lagret i Europa',
    description: 'Alle data lagres trygt hos godkjente leverandører i Europa.',
    icon: ServerStackIcon,
  },
  {
    title: 'Full sporbarhet',
    description: 'Alle aktiviteter logges automatisk. Full oversikt over hvem som har sett hva.',
    icon: ClipboardDocumentCheckIcon,
  },
];

interface SecurityProps {
  variant?: 'compact' | 'full';
  title?: string;
  subtitle?: string;
}

export function Security({ 
  variant = 'compact',
  title = 'Sikkerhet du kan stole på',
  subtitle = 'jodacare er bygget med sikkerhet i kjernen. Vi tar personvern på største alvor.'
}: SecurityProps) {
  if (variant === 'compact') {
    return (
      <section className="py-16 border-y border-secondary" aria-labelledby="security-title">
        <Container>
          <FadeIn>
            <div className="text-center mb-8">
              <h2 id="security-title" className="sr-only">Sikkerhet og tillit</h2>
              <p className="text-text-light">
                Brukt av norske kommuner siden 2016. Sikker og GDPR-compliant.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            <StaggerItem>
              <Badge icon={<ShieldCheckIcon className="w-4 h-4" />} variant="success">
                ID-porten sikkerhet
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <Badge icon={<DocumentCheckIcon className="w-4 h-4" />} variant="success">
                GDPR-compliant
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <Badge icon={<ServerStackIcon className="w-4 h-4" />} variant="success">
                Data i Europa
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <Badge icon={<ClipboardDocumentCheckIcon className="w-4 h-4" />} variant="success">
                Full sporbarhet
              </Badge>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28" aria-labelledby="security-full-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="success" className="mb-4">
              Sikkerhet
            </Badge>
            <h2 
              id="security-full-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-text-light">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-success" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text-light">
                    {feature.description}
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
