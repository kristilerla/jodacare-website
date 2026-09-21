'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';

interface HeroImage {
  src: string;
  alt: string;
}

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
  /**
   * Kort merknad under knappene i page-varianten, til forbehold om hva
   * knappen faktisk gjør. Vises bare når en primærknapp finnes.
   */
  primaryCtaNote?: string;
  variant?: 'home' | 'page';
  images?: HeroImage[];
  badge?: string;
  /**
   * Bilde ved siden av teksten på segmentsidene. Tekst til venstre, bilde til
   * høyre i 5/12 av bredden på desktop. På mobil ligger bildet over teksten.
   * Stående motiv beskjæres fra 30 % ned, slik at ansikter ikke kuttes.
   */
  image?: { src: string; alt: string; portrait?: boolean };
}

const SLIDE_DURATION = 6000;

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryCtaNote,
  variant = 'home',
  images = [],
  badge,
  image,
}: HeroProps) {
  const isHome = variant === 'home';
  const hasImages = isHome && images.length > 0;
  const shouldReduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasImages || images.length <= 1) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [hasImages, images.length, nextSlide]);

  // Page variant — no images, same as before
  if (!isHome) {
    return (
      <section
        className="relative overflow-hidden py-16 lg:py-24"
        aria-labelledby="hero-title"
      >
        <Container size="md">
          <div
            className={
              image
                ? 'grid gap-10 lg:grid-cols-12 lg:items-center'
                : undefined
            }
          >
            {image && (
              <FadeIn className="order-1 lg:order-2 lg:col-span-5">
                {/*
                  Liggende motiv står i 4/3. Stående motiv står i 3/4 også på
                  mobil: i en liggende ramme havner ansiktet utenfor bildet,
                  som er det motsatte av hensikten med beskjæringen.
                */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    image.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={`img-tone object-cover ${
                      image.portrait ? 'object-[center_30%]' : ''
                    }`}
                    priority
                  />
                </div>
              </FadeIn>
            )}
          <div className={image ? 'order-2 lg:order-1 lg:col-span-7' : 'max-w-3xl'}>
            {badge && (
              <FadeIn>
                <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-medium rounded-full mb-6">
                  {badge}
                </span>
              </FadeIn>
            )}
            <FadeIn delay={badge ? 0.1 : 0}>
              <h1
                id="hero-title"
                className="font-serif font-bold text-text text-3xl sm:text-4xl lg:text-5xl leading-tight"
              >
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={badge ? 0.2 : 0.1}>
              <p className="mt-6 text-lg sm:text-xl text-text-light leading-relaxed">
                {subtitle}
              </p>
            </FadeIn>
            {(primaryCta || secondaryCta) && (
              <FadeIn delay={badge ? 0.3 : 0.2}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                {primaryCta && primaryCtaNote && (
                  <p className="mt-4 max-w-xl text-sm text-text-light">{primaryCtaNote}</p>
                )}
              </FadeIn>
            )}
          </div>
          </div>
        </Container>
      </section>
    );
  }

  // Home variant with image carousel
  return (
    <section
      className="relative min-h-[500px] overflow-hidden"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      aria-label="Bilder fra hverdagen"
    >
      {/* Background images */}
      {hasImages && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Fallback background when no images */}
      {!hasImages && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-light/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
      )}

      {/* Content */}
      <Container size="lg" className="relative z-10">
        <div className="flex flex-col justify-center py-20 lg:py-28 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h1
              id="hero-title"
              className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight ${
                hasImages ? 'text-white drop-shadow-lg' : 'text-text'
              }`}
            >
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className={`mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto ${
                hasImages ? 'text-white drop-shadow-md' : 'text-text-light'
              }`}
            >
              {subtitle}
            </p>
          </FadeIn>

          {(primaryCta || secondaryCta) && (
            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    size="lg"
                    variant={hasImages ? 'white' : 'primary'}
                  >
                    {primaryCta.text}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    size="lg"
                    variant={hasImages ? 'white-outline' : 'outline'}
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            </FadeIn>
          )}

          {/* Slide indicators */}
          {hasImages && images.length > 1 && (
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Velg bilde">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Bilde ${index + 1} av ${images.length}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
