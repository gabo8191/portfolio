import React from 'react';
import type { Technology } from '../../types';
import { cn } from '../../utils/cn';

interface TechnologyGridProps {
  technologies: Technology[];
  maxVisible?: number;
  showProgress?: boolean;
  variant?: 'compact' | 'detailed' | 'minimal';
  className?: string;
}

export const TechnologyGrid: React.FC<TechnologyGridProps> = ({
  technologies,
  maxVisible,
  showProgress = false,
  variant = 'compact',
  className,
}) => {
  const displayTechs = maxVisible
    ? technologies.slice(0, maxVisible)
    : technologies;
  const remainingCount = maxVisible
    ? Math.max(0, technologies.length - maxVisible)
    : 0;

  const renderTechnology = (tech: Technology, index: number) => {
    switch (variant) {
      case 'detailed':
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200"
          >
            <div
              className="w-3 h-3 rounded-full shadow-sm"
              style={{ backgroundColor: tech.color }}
            />
            <span className="font-medium text-gray-900 dark:text-white flex-1">
              {tech.name}
            </span>
            {showProgress && (
              <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{
                    backgroundColor: tech.color,
                    width: '70%', // You can make this dynamic based on skill level
                  }}
                />
              </div>
            )}
          </div>
        );

      case 'minimal':
        return (
          <span
            key={index}
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
            {tech.name}
          </span>
        );

      default: // compact
        return (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium hover:scale-105 transition-transform duration-200"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
            {tech.name}
          </span>
        );
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {variant === 'detailed' ? (
        <div className="grid gap-2">{displayTechs.map(renderTechnology)}</div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {displayTechs.map(renderTechnology)}
          {remainingCount > 0 && (
            <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-medium">
              +{remainingCount} more
            </span>
          )}
        </div>
      )}
    </div>
  );
};
