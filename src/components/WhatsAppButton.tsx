import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

interface WhatsAppButtonProps {
  className?: string;
  source?: string;
  showText?: boolean;
  text?: string;
  showIcon?: boolean;
  customMessage?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = '',
  source = 'website',
  showText = true,
  text = 'WhatsApp',
  showIcon = true,
  customMessage,
  size = 'md',
}) => {
  const defaultMessage = "Hello Nikita Spa, I would like to book an appointment.";
  const message = customMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/919693264878?text=${encodeURIComponent(message)}`;

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
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      aria-label="Chat with Nikita Spa on WhatsApp"
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <MessageSquare className={iconSizes[size]} />}
      {showText && <span>{text}</span>}
    </a>
  );
};
