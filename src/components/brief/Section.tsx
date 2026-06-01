import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';

type Variant = 'default' | 'soft' | 'accent';

const variantBg: Record<Variant, string> = {
  default: 'bg-background',
  soft: 'bg-background-alt',
  accent: 'bg-accent-light',
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  variant?: Variant;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  variant = 'default',
  children,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(variantBg[variant], 'py-20 lg:py-28')}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <Container size="md">
        <FadeIn>
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="inline-block px-3 py-1 bg-accent-light text-primary-dark text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                {eyebrow}
              </span>
            )}
            <h2
              id={id ? `${id}-title` : undefined}
              className="font-serif font-bold text-text text-3xl sm:text-4xl leading-tight"
            >
              {title}
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-text-light">
            {children}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
