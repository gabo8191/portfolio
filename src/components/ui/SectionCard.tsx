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
      'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    glass: 'glass',
    gradient:
      'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-200',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      {children}
    </div>
  );
};
