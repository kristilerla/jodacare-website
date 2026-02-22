'use client';

import { Container, Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'accent';
}

export function CTA({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  variant = 'default' 
}: CTAProps) {
  const isAccent = variant === 'accent';

  return (
    <section 
      className={`py-20 lg:py-28 ${isAccent ? 'bg-accent' : 'bg-primary'}`}
      aria-labelledby="cta-title"
    >
      <Container size="md">
        <FadeIn>
          <div className="text-center">
            <h2 
              id="cta-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-white"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={primaryCta.href} 
                variant="secondary"
                size="lg"
              >
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button 
                  href={secondaryCta.href}
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
