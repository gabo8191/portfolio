import React, { useState } from 'react';
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
        return <FiCode className="w-8 h-8" />;
      case 'backend':
        return <FiServer className="w-8 h-8" />;
      case 'database':
        return <FiDatabase className="w-8 h-8" />;
      case 'devops':
        return <FiSettings className="w-8 h-8" />;
      case 'vanilla':
        return <FiLayers className="w-8 h-8" />;
      case 'proof-of-concept':
        return <FiZap className="w-8 h-8" />;
      default:
        return <FiCode className="w-8 h-8" />;
    }
  };

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'frontend':
        return {
          gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
          shadowColor: 'shadow-emerald-500/25',
          badgeColor:
            'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
          name: 'Frontend',
        };
      case 'backend':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          shadowColor: 'shadow-blue-500/25',
          badgeColor:
            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
          name: 'Backend',
        };
      case 'database':
        return {
          gradient: 'from-violet-500 via-purple-500 to-pink-500',
          shadowColor: 'shadow-violet-500/25',
          badgeColor:
            'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
          name: 'Database',
        };
      case 'devops':
        return {
          gradient: 'from-orange-500 via-red-500 to-pink-500',
          shadowColor: 'shadow-orange-500/25',
          badgeColor:
            'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
          name: 'DevOps',
        };
      case 'vanilla':
        return {
          gradient: 'from-amber-500 via-yellow-500 to-orange-500',
          shadowColor: 'shadow-amber-500/25',
          badgeColor:
            'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
          name: 'Vanilla',
        };
      case 'proof-of-concept':
        return {
          gradient: 'from-slate-500 via-gray-500 to-zinc-500',
          shadowColor: 'shadow-slate-500/25',
          badgeColor:
            'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
          name: 'PoC',
        };
      default:
        return {
          gradient: 'from-gray-500 to-slate-600',
          shadowColor: 'shadow-gray-500/25',
          badgeColor:
            'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
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
    <div
      className={cn(
        'relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
        'hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]',
        'flex flex-col h-full overflow-hidden',
        project.featured &&
          'border-2 border-orange-200 dark:border-orange-800 shadow-2xl shadow-orange-500/20',
        className
      )}
    >
      {/* Enhanced effects for featured projects */}
      {project.featured && (
        <>
          {/* Premium glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-pulse"></div>

          {/* Dynamic border animation */}
          <div className="absolute inset-0 rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-20 animate-spin-slow"></div>
            <div className="absolute inset-[2px] rounded-xl bg-white dark:bg-gray-800"></div>
          </div>

          {/* Corner accent lights */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 animate-pulse shadow-lg shadow-orange-500/50"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-40 animate-pulse delay-500 shadow-lg shadow-pink-500/50"></div>

          {/* Subtle energy waves */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-shimmer-reverse"></div>
          </div>
        </>
      )}

      {/* Header with Icon */}
      <div
        className={`relative p-6 pb-4 bg-gradient-to-br ${categoryConfig.gradient} rounded-t-xl ${
          project.featured ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white drop-shadow-lg">
            {getProjectIcon(project.category)}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
              {categoryConfig.name}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {t(project.title)}
        </h3>

        <div className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1">
          <p className="mb-3">{displayDescription}</p>

          {shouldShowExpandButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium"
            >
              {isExpanded ? (
                <>
                  <span>Show less</span>
                  <FiChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Read more</span>
                  <FiChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Technologies - Only show for non-featured projects */}
        {!project.featured && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
              {t('projects.technologiesUsed')}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-medium">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Project status - Remove completion date for personal projects */}
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {t('projects.projectStatus')}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600 dark:text-green-400 font-medium">
                {t('projects.completed')}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <FiGithub className="w-4 h-4" />
            {t('projects.viewCode')}
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <FiExternalLink className="w-4 h-4" />
              {t('projects.viewLive')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
