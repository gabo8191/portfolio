import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { experiences } from '../../data/portfolio';
import { Badge } from '../ui/Badge';
import { SectionCard } from '../ui/SectionCard';

export const Experience: React.FC = () => {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'work' | 'education'
  >('all');

  const filteredExperiences = experiences.filter(
    exp => activeFilter === 'all' || exp.type === activeFilter
  );

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <FiBriefcase className="w-5 h-5" />;
      case 'education':
        return <FiBook className="w-5 h-5" />;
      default:
        return <FiCalendar className="w-5 h-5" />;
    }
  };

  const getExperienceColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-600';
      case 'education':
        return 'bg-emerald-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <FiCalendar className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {t('experience.title')}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t('experience.workExperience')} & {t('experience.education')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex flex-nowrap gap-2 p-1 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 min-w-max">
            {(['all', 'work', 'education'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {filter === 'all'
                  ? 'Todo'
                  : filter === 'work'
                    ? t('experience.workExperience')
                    : t('experience.education')}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-8">
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 z-10">
                  <div
                    className={`w-10 h-10 ${getExperienceColor(exp.type)} rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center`}
                  >
                    <div className="text-white">
                      {getExperienceIcon(exp.type)}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                >
                  <SectionCard className="hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge
                            variant={exp.type === 'work' ? 'info' : 'success'}
                            size="sm"
                          >
                            {exp.type === 'work'
                              ? t('experience.work')
                              : t('experience.education')}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <FiCalendar className="w-3 h-3" />
                            <span className="break-words">{t(exp.period)}</span>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 break-words">
                          {t(exp.title)}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                          <FiMapPin className="w-4 h-4" />
                          <span className="font-medium">{t(exp.company)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {t(exp.description)
                        .split('\n')
                        .map((line, lineIndex) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <div
                                key={lineIndex}
                                className="flex items-start gap-2 mb-2"
                              >
                                <span className="text-blue-500 dark:text-blue-400 mt-1 text-xs">
                                  ●
                                </span>
                                <span>{line.trim().substring(1).trim()}</span>
                              </div>
                            );
                          } else if (line.trim()) {
                            return (
                              <p key={lineIndex} className="mb-3 font-medium">
                                {line.trim()}
                              </p>
                            );
                          }
                          return null;
                        })}
                    </div>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                        {exp.technologies
                          .filter(tech => tech && (typeof tech === 'string' || tech.name))
                          .map((tech, techIndex) => (
                            <Badge key={techIndex} variant="default" size="sm">
                              {typeof tech === 'string' ? tech : tech.name}
                            </Badge>
                          ))}
                      </div>
                    )}
                  </SectionCard>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredExperiences.length === 0 && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
            <FiCalendar className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No experiences found</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Try changing the filter to see more experiences.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
