import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export function Container({ 
  children, 
  className, 
  size = 'xl',
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
