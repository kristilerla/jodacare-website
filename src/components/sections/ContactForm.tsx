'use client';

import { useState } from 'react';
import { Container, Button, Card } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactFormProps {
  showContactInfo?: boolean;
  title?: string;
  subtitle?: string;
}

export function ContactForm({ 
  showContactInfo = true,
  title = 'Ta kontakt',
  subtitle = 'Vi hjelper deg gjerne i gang med jodacare.'
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 lg:py-28" aria-labelledby="contact-title">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 
              id="contact-title"
              className="font-serif text-3xl sm:text-4xl font-bold text-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-text-light">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className={`grid gap-12 ${showContactInfo ? 'lg:grid-cols-2' : 'max-w-xl mx-auto'}`}>
          {showContactInfo && (
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text mb-4">
                    Kontaktinformasjon
                  </h3>
                  <p className="text-text-light">
                    Ta gjerne kontakt om du har spørsmål om jodacare, 
                    ønsker en demo, eller vil komme i gang.
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:post@jodacare.com"
                    className="flex items-center gap-4 text-text hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <EnvelopeIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">E-post</div>
                      <div className="font-medium">post@jodacare.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+4790606433"
                    className="flex items-center gap-4 text-text hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <PhoneIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Telefon</div>
                      <div className="font-medium">+47 906 06 433</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Adresse</div>
                      <div className="font-medium">Forskningsparken, Oslo</div>
                    </div>
                  </div>
                </div>

                <Card variant="bordered" padding="md" className="bg-secondary-light/50">
                  <p className="text-sm text-text-light">
                    <strong className="text-text">Kristil Erla Håland</strong>
                    <br />
                    Gründer og daglig leder
                    <br />
                    <a href="tel:+4790606433" className="text-primary hover:underline">
                      +47 906 06 433
                    </a>
                  </p>
                </Card>
              </div>
            </FadeIn>
          )}

          <FadeIn direction={showContactInfo ? 'right' : 'up'}>
            <Card variant="elevated" padding="lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text mb-2">
                    Takk for din henvendelse!
                  </h3>
                  <p className="text-text-light">
                    Vi tar kontakt med deg så snart som mulig.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Navn <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-dark bg-white text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="Ditt navn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      E-post <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-dark bg-white text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="din@epost.no"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-dark bg-white text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="+47 XXX XX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-text mb-2">
                      Type henvendelse
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-dark bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    >
                      <option value="general">Generell henvendelse</option>
                      <option value="kommune">Kommune / organisasjon</option>
                      <option value="familie">Privat familie</option>
                      <option value="demo">Ønsker demo</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Melding <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-dark bg-white text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                      placeholder="Fortell oss hva vi kan hjelpe deg med..."
                    />
                  </div>

                  <Button type="submit" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Sender...' : 'Send melding'}
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    Ved å sende inn skjemaet godtar du at vi behandler dine personopplysninger 
                    i henhold til vår personvernerklæring.
                  </p>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
