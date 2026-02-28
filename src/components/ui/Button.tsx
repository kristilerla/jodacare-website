'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'white-outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
  secondary: 'bg-secondary text-text hover:bg-secondary-dark focus-visible:ring-secondary',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
  ghost: 'text-primary hover:bg-secondary-light focus-visible:ring-primary',
  white: 'bg-white text-primary hover:bg-white/90 focus-visible:ring-white',
  'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-primary focus-visible:ring-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, children, className, ...props }, ref) => {
    const baseStyles = clsx(
      'inline-flex items-center justify-center font-medium rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    if ('href' in props && props.href) {
      const { href, ...linkProps } = props;
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseStyles}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        {...(props as ButtonAsButton)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
