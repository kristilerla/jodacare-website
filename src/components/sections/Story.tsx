'use client';

import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';

interface StoryProps {
  quote: string;
  author: string;
  role?: string;
  variant?: 'default' | 'featured';
}

export function Story({ 
  quote, 
  author, 
  role,
  variant = 'default' 
}: StoryProps) {
  const isFeatured = variant === 'featured';

  return (
    <section 
      className={`py-20 lg:py-28 ${isFeatured ? 'bg-primary text-white' : 'bg-secondary-light'}`}
      aria-labelledby="story-title"
    >
      <Container size="md">
        <FadeIn>
          <figure className="text-center">
            <h2 id="story-title" className="sr-only">Historien bak JodaCare</h2>
            <svg 
              className={`w-12 h-12 mx-auto mb-6 ${isFeatured ? 'text-accent-light' : 'text-accent'}`}
              fill="currentColor" 
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote>
              <p className={`font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed ${
                isFeatured ? 'text-white' : 'text-text'
              }`}>
                {quote}
              </p>
            </blockquote>
            <figcaption className="mt-8">
              <div className={`font-semibold ${isFeatured ? 'text-white' : 'text-text'}`}>
                {author}
              </div>
              {role && (
                <div className={`text-sm mt-1 ${isFeatured ? 'text-white/70' : 'text-text-light'}`}>
                  {role}
                </div>
              )}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </section>
  );
}
