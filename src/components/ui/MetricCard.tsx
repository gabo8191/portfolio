import React from 'react';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  className?: string;
  gradient?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  className,
  gradient = 'from-blue-500 to-indigo-600',
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center text-lg shadow-sm`}
            >
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div
          className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {value}
        </div>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
