import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'accent';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default: 'bg-secondary text-text',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  accent: 'bg-accent-light text-accent-dark',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon,
  className 
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
