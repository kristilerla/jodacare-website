'use client';

import { Container, Card, Button, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CheckIcon } from '@heroicons/react/24/outline';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
  badge?: string;
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  footnote?: string;
}

export function Pricing({ 
  title = 'Enkel og transparent prising',
  subtitle = 'Velg planen som passer for deg.',
  tiers,
  footnote
}: PricingProps) {
  return (
    <section className="py-20 lg:py-28 bg-background-alt" aria-labelledby="pricing-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              id="pricing-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-text-light">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className={`grid gap-8 ${
          tiers.length === 1 ? 'max-w-md mx-auto' :
          tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <Card 
                variant={tier.highlighted ? 'elevated' : 'bordered'}
                padding="lg"
                className={`h-full flex flex-col ${
                  tier.highlighted ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-text">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <Badge variant="accent" size="sm">
                      {tier.badge}
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-text">{tier.price}</span>
                  {tier.period && (
                    <span className="text-text-light ml-1">{tier.period}</span>
                  )}
                </div>
                
                <p className="text-text-light mb-6">
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-text-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  href={tier.cta.href}
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  fullWidth
                >
                  {tier.cta.text}
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {footnote && (
          <FadeIn delay={0.3}>
            <p className="text-center text-sm text-text-muted mt-8">
              {footnote}
            </p>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
