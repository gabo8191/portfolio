import React from 'react';
import { cn } from '../../utils/cn';

interface StatusIndicatorProps {
  status: 'available' | 'busy' | 'away' | 'unavailable';
  text: string;
  className?: string;
  showDot?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  text,
  className,
  showDot = true,
}) => {
  const statusConfig = {
    available: {
      color: 'bg-green-500',
      textColor: 'text-green-700 dark:text-green-300',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    busy: {
      color: 'bg-red-500',
      textColor: 'text-red-700 dark:text-red-300',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
    },
    away: {
      color: 'bg-yellow-500',
      textColor: 'text-yellow-700 dark:text-yellow-300',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
    },
    unavailable: {
      color: 'bg-gray-500',
      textColor: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      borderColor: 'border-gray-200 dark:border-gray-800',
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300',
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      {showDot && (
        <div
          className={cn(
            'w-3 h-3 rounded-full animate-pulse shadow-lg',
            config.color,
            status === 'available' && 'shadow-green-500/50'
          )}
        ></div>
      )}
      <span className={cn('text-sm font-medium', config.textColor)}>
        {text}
      </span>
    </div>
  );
};
