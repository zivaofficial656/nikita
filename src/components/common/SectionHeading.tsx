import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-10 sm:mb-14 ${alignClasses} ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-[1px] bg-gold-500"></span>
          <img
            src="/images/nikita-spa-logo.png"
            alt="Love"
            className="w-3.5 h-3.5 object-contain object-center inline-block"
          />
          <span className={`text-[11px] uppercase tracking-[0.25em] font-bold ${light ? 'text-gold-300' : 'text-burgundy-700'}`}>
            {subtitle}
          </span>
          <span className="w-5 h-[1px] bg-gold-500"></span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-bold ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-white font-normal' : 'text-black font-normal'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
