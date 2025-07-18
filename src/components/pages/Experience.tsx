import React, { useState } from 'react';
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

  const getExperienceGradient = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-indigo-600';
      case 'education':
        return 'from-emerald-500 to-teal-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <FiCalendar className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            {t('experience.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('experience.workExperience')} & {t('experience.education')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center">
          <div className="flex gap-2 p-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            {(['all', 'work', 'education'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm'
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
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 z-10">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${getExperienceGradient(exp.type)} rounded-full border-4 border-white dark:border-gray-950 shadow-lg flex items-center justify-center`}
                  >
                    <div className="text-white text-sm">
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
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={exp.type === 'work' ? 'info' : 'success'}
                            size="sm"
                          >
                            {exp.type === 'work'
                              ? t('experience.work')
                              : t('experience.education')}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <FiCalendar className="w-3 h-3" />
                            <span>{t(exp.period)}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
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
                        {exp.technologies.map((tech, techIndex) => (
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
          <SectionCard className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400">
              <FiCalendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No experiences found</h3>
              <p className="text-sm">
                Try changing the filter to see more experiences.
              </p>
            </div>
          </SectionCard>
        )}
      </div>
    </div>
  );
};
