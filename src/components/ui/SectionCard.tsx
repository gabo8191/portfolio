import React from 'react';
import { cn } from '../../utils/cn';

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  className,
  variant = 'default',
  padding = 'md',
}) => {
  const variants = {
    default:
      'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    glass: 'glass',
    gradient:
      'bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 border border-blue-200/50 dark:border-blue-800/50',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      {children}
    </div>
  );
};
