import React from 'react';
import { cn } from '../../utils/cn';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  external = false,
  onClick,
  className,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 hover:scale-105';

  const variants = {
    primary:
      'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    secondary:
      'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300',
    ghost:
      'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
    floating:
      'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const linkProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a
      href={href}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...linkProps}
      onClick={onClick}
    >
      <div className={cn(iconSizes[size])}>{icon}</div>
      {variant !== 'floating' && <span>{label}</span>}
    </a>
  );
};
