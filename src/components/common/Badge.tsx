import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'ivory' | 'dark' | 'outline' | 'demo';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClasses = {
    gold: 'bg-gold-50 text-gold-800 border border-gold-300 font-medium',
    ivory: 'bg-ivory-200 text-dark-400 border border-ivory-300',
    dark: 'bg-dark text-white font-medium',
    outline: 'bg-transparent text-dark-400 border border-borderCream',
    demo: 'bg-amber-50 text-amber-900 border border-amber-300 font-medium tracking-wide uppercase text-[10px]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
