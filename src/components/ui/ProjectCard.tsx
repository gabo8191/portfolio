import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiServer,
  FiSettings,
  FiZap,
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import type { Project } from '../../types';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
}) => {
  const { t } = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <FiCode className="w-6 h-6" />;
      case 'backend':
        return <FiServer className="w-6 h-6" />;
      case 'database':
        return <FiDatabase className="w-6 h-6" />;
      case 'devops':
        return <FiSettings className="w-6 h-6" />;
      case 'vanilla':
        return <FiLayers className="w-6 h-6" />;
      case 'proof-of-concept':
        return <FiZap className="w-6 h-6" />;
      default:
        return <FiCode className="w-6 h-6" />;
    }
  };

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'frontend':
        return {
          badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
          iconColor: 'text-emerald-600 dark:text-emerald-400',
          name: 'Frontend',
        };
      case 'backend':
        return {
          badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
          iconColor: 'text-blue-600 dark:text-blue-400',
          name: 'Backend',
        };
      case 'database':
        return {
          badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
          iconColor: 'text-violet-600 dark:text-violet-400',
          name: 'Database',
        };
      case 'devops':
        return {
          badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
          iconColor: 'text-orange-600 dark:text-orange-400',
          name: 'DevOps',
        };
      case 'vanilla':
        return {
          badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
          iconColor: 'text-amber-600 dark:text-amber-400',
          name: 'Vanilla',
        };
      case 'proof-of-concept':
        return {
          badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400',
          iconColor: 'text-slate-600 dark:text-slate-400',
          name: 'Proof of Concept',
        };
      default:
        return {
          badgeColor: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
          iconColor: 'text-gray-600 dark:text-gray-400',
          name: 'Other',
        };
    }
  };

  const categoryConfig = getCategoryConfig(project.category);
  const description = t(project.description);
  const shouldShowExpandButton = description.length > 200;

  const displayDescription =
    !isExpanded && shouldShowExpandButton
      ? description.substring(0, 200) + '...'
      : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-md',
        className
      )}
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`${categoryConfig.iconColor}`}>
              {getProjectIcon(project.category)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {t(project.title)}
              </h3>
              <span className={cn('inline-block px-2 py-1 text-xs font-medium rounded-md', categoryConfig.badgeColor)}>
                {categoryConfig.name}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                title="View on GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                title="View Live"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {displayDescription}
          </p>
          {shouldShowExpandButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  Show less <FiChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read more <FiChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              {t('projects.technologiesUsed')}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies
                .filter(tech => tech && tech.name && tech.color)
                .slice(0, 4)
                .map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-200 dark:border-gray-700"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    {tech.name}
                  </span>
                ))}
              {project.technologies.filter(tech => tech && tech.name).length > 4 && (
                <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md font-medium border border-gray-200 dark:border-gray-700">
                  +{project.technologies.filter(tech => tech && tech.name).length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Completion Date */}
        {project.completedAt && (
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Completed: {new Date(project.completedAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </motion.div>
  );
};
