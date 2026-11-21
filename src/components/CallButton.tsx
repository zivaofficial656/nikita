import React from 'react';
import { Phone } from 'lucide-react';
import { trackCallClick } from '../utils/analytics';

interface CallButtonProps {
  className?: string;
  source?: string;
  showText?: boolean;
  text?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CallButton: React.FC<CallButtonProps> = ({
  className = '',
  source = 'website',
  showText = true,
  text = 'Call Now',
  showIcon = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-xs sm:text-sm gap-2',
    lg: 'px-6 py-3 text-sm sm:text-base gap-2.5',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <a
      href="tel:+919693264878"
      onClick={() => trackCallClick(source)}
      aria-label="Call Nikita Spa at +91 9693264878"
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <Phone className={iconSizes[size]} />}
      {showText && <span>{text}</span>}
    </a>
  );
};
