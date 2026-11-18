import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 text-xs sm:text-sm text-black font-medium ${className}`}>
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-burgundy transition-colors text-black font-semibold"
            title="Love Home"
          >
            <Home className="w-3.5 h-3.5 text-gold-600" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gold-500/70 flex-shrink-0" />
              {isLast || !item.path ? (
                <span className="font-bold text-burgundy line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-burgundy transition-colors line-clamp-1 text-black"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
