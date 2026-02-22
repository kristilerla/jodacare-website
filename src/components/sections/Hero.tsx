'use client';

import { Container, Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'home' | 'page';
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  variant = 'home' 
}: HeroProps) {
  const isHome = variant === 'home';

  return (
    <section 
      className={`relative overflow-hidden ${isHome ? 'py-20 lg:py-32' : 'py-16 lg:py-24'}`}
      aria-labelledby="hero-title"
    >
      {/* Background decoration */}
      {isHome && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-light/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
      )}

      <Container size={isHome ? 'lg' : 'md'}>
        <div className={`${isHome ? 'text-center' : ''} max-w-3xl ${isHome ? 'mx-auto' : ''}`}>
          <FadeIn>
            <h1 
              id="hero-title"
              className={`font-serif font-bold text-text ${
                isHome 
                  ? 'text-4xl sm:text-5xl lg:text-6xl' 
                  : 'text-3xl sm:text-4xl lg:text-5xl'
              } leading-tight`}
            >
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className={`mt-6 text-lg sm:text-xl text-text-light leading-relaxed ${
              isHome ? 'max-w-2xl mx-auto' : ''
            }`}>
              {subtitle}
            </p>
          </FadeIn>

          {(primaryCta || secondaryCta) && (
            <FadeIn delay={0.2}>
              <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${
                isHome ? 'justify-center' : ''
              }`}>
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.text}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}
