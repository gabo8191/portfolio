import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  className?: string;
  color?: 'blue' | 'emerald' | 'violet' | 'orange' | 'sky';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  className,
  color = 'blue',
}) => {
  const colorConfig = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800/50',
      text: 'text-blue-600 dark:text-blue-400',
      accent: 'bg-blue-600',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800/50',
      text: 'text-emerald-600 dark:text-emerald-400',
      accent: 'bg-emerald-600',
    },
    violet: {
      bg: 'bg-violet-50 dark:bg-violet-950/30',
      border: 'border-violet-200 dark:border-violet-800/50',
      text: 'text-violet-600 dark:text-violet-400',
      accent: 'bg-violet-600',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-950/30',
      border: 'border-orange-200 dark:border-orange-800/50',
      text: 'text-orange-600 dark:text-orange-400',
      accent: 'bg-orange-600',
    },
    sky: {
      bg: 'bg-sky-50 dark:bg-sky-950/30',
      border: 'border-sky-200 dark:border-sky-800/50',
      text: 'text-sky-600 dark:text-sky-400',
      accent: 'bg-sky-600',
    },
  };

  const config = colorConfig[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'rounded-lg border p-6 transition-all duration-200 bg-gray-50 dark:bg-gray-900',
        'border-gray-200 dark:border-gray-800',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <motion.div
          className={`w-2 h-2 ${config.accent} rounded-full`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="space-y-2">
        <div className={`text-3xl font-bold ${config.text}`}>{value}</div>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};
