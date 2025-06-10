import React from 'react';
import { FiBriefcase, FiCalendar, FiLock } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import type { ProfessionalProject } from '../../types';
import { cn } from '../../utils/cn';

interface ProfessionalProjectCardProps {
  project: ProfessionalProject;
  className?: string;
}

export const ProfessionalProjectCard: React.FC<ProfessionalProjectCardProps> = ({
  project,
  className,
}) => {
  const { t } = useLocale();

  return (
    <div className={cn('professional-project-card group', className)}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
              <FiBriefcase className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                {t(project.title)}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">{project.company}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-full">
            <FiLock className="w-3 h-3 text-red-600 dark:text-red-400" />
            <span className="text-xs font-medium text-red-600 dark:text-red-400">
              Confidential
            </span>
          </div>
        </div>

        {/* Period */}
        <div className="flex items-center gap-2 mb-4">
          <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            {project.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {t(project.description)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-md border transition-colors"
              style={{
                backgroundColor: tech.color + '10',
                color: tech.color,
                borderColor: tech.color + '30'
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
