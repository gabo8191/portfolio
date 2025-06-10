import React from 'react';
import { FiCode, FiDatabase, FiExternalLink, FiGithub, FiLayers, FiServer, FiSettings, FiZap } from 'react-icons/fi';
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
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
          name: 'Frontend'
        };
      case 'backend':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          shadowColor: 'shadow-blue-500/25',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
          name: 'Backend'
        };
      case 'database':
        return {
          gradient: 'from-violet-500 via-purple-500 to-pink-500',
          shadowColor: 'shadow-violet-500/25',
          badgeColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
          name: 'Database'
        };
      case 'devops':
        return {
          gradient: 'from-orange-500 via-red-500 to-pink-500',
          shadowColor: 'shadow-orange-500/25',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
          name: 'DevOps'
        };
      case 'vanilla':
        return {
          gradient: 'from-amber-500 via-yellow-500 to-orange-500',
          shadowColor: 'shadow-amber-500/25',
          badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
          name: 'Vanilla'
        };
      case 'proof-of-concept':
        return {
          gradient: 'from-slate-500 via-gray-500 to-zinc-500',
          shadowColor: 'shadow-slate-500/25',
          badgeColor: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
          name: 'PoC'
        };
      default:
        return {
          gradient: 'from-gray-500 to-slate-600',
          shadowColor: 'shadow-gray-500/25',
          badgeColor: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
          name: 'Other'
        };
    }
  };

  const categoryConfig = getCategoryConfig(project.category);

  return (
    <div className={cn(
      'relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
      'hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]',
      'flex flex-col h-full overflow-hidden',
      project.featured && categoryConfig.shadowColor,
      className
    )}>
      {/* Flame effect for featured projects */}
      {project.featured && (
        <>
          {/* Subtle flame animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-t ${categoryConfig.gradient} opacity-5 animate-pulse`}></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 animate-pulse"></div>
          </div>

          {/* Subtle border glow */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categoryConfig.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
        </>
      )}

      {/* Header with Icon */}
      <div className={`relative p-6 pb-4 bg-gradient-to-br ${categoryConfig.gradient} rounded-t-xl`}>
        <div className="flex items-center justify-between">
          <div className="text-white drop-shadow-lg">
            {getProjectIcon(project.category)}
          </div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
            )}
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
              {categoryConfig.name}
            </span>
          </div>
        </div>

        {/* Featured project flame indicator */}
        {project.featured && (
          <div className="absolute top-2 right-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {t(project.title)}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1 line-clamp-3">
          {t(project.description)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-md border transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: tech.color + '15',
                color: tech.color,
                borderColor: tech.color + '30'
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FiGithub className="w-4 h-4" />
            <span className="whitespace-nowrap">{t('projects.viewCode')}</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r ${categoryConfig.gradient} hover:shadow-lg transition-all duration-200 shadow-sm rounded-lg`}
            >
              <FiExternalLink className="w-4 h-4" />
              <span className="whitespace-nowrap">{t('projects.viewLive')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
