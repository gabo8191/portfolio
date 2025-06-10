import React, { useState } from 'react';
import { FiBook, FiBriefcase, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { experiences } from '../../data/portfolio';

export const Experience: React.FC = () => {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredExperiences = experiences.filter(exp =>
    activeFilter === 'all' || exp.type === activeFilter
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
        return 'from-blue-600 via-indigo-600 to-purple-600';
      case 'education':
        return 'from-emerald-600 via-teal-600 to-cyan-600';
      default:
        return 'from-gray-600 via-slate-600 to-zinc-600';
    }
  };

  const getExperienceShadow = (type: string) => {
    switch (type) {
      case 'work':
        return 'shadow-blue-500/25';
      case 'education':
        return 'shadow-emerald-500/25';
      default:
        return 'shadow-gray-500/25';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <FiClock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          {t('experience.title')}
        </h2>

        {/* Modern Filter Tabs */}
        <div className="relative overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-2 border border-slate-200 dark:border-slate-700">
            <div className="flex relative">
              {/* Background Slider */}
              <div
                className={`absolute top-0 h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600 transition-all duration-500 ease-out ${
                  activeFilter === 'all' ? 'left-0 w-1/3' :
                  activeFilter === 'work' ? 'left-1/3 w-1/3' : 'left-2/3 w-1/3'
                }`}
              />

              {/* All Tab */}
              <button
                onClick={() => setActiveFilter('all')}
                className={`relative z-10 flex-1 px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="font-medium text-sm">Todo</span>
              </button>

              {/* Work Tab */}
              <button
                onClick={() => setActiveFilter('work')}
                className={`relative z-10 flex-1 px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                  activeFilter === 'work'
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="font-medium text-sm">{t('experience.workExperience')}</span>
              </button>

              {/* Education Tab */}
              <button
                onClick={() => setActiveFilter('education')}
                className={`relative z-10 flex-1 px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                  activeFilter === 'education'
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="font-medium text-sm">{t('experience.education')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Timeline */}
      <div className="relative">
        {/* Modern Timeline Line with Gradient */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800 rounded-full shadow-sm"></div>

        <div className="space-y-12">
          {filteredExperiences.map((experience) => (
            <div key={experience.id} className="relative flex items-start group">
              {/* Enhanced Timeline Node */}
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 bg-gradient-to-br ${getExperienceGradient(experience.type)} shadow-xl ${getExperienceShadow(experience.type)} group-hover:scale-110 transition-all duration-300`}>
                <div className="text-white drop-shadow-lg">
                  {getExperienceIcon(experience.type)}
                </div>
                {/* Pulse Animation */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getExperienceGradient(experience.type)} opacity-30 animate-ping`}></div>
              </div>

              {/* Enhanced Content Card */}
              <div className="ml-6 flex-1 relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                {/* Gradient Header */}
                <div className={`relative p-6 pb-4 bg-gradient-to-br ${getExperienceGradient(experience.type)} rounded-t-xl`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
                        {t(experience.title)}
                      </h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <FiMapPin className="w-4 h-4" />
                        <span className="font-medium">{experience.company.startsWith('experience.') ? t(experience.company) : experience.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3 sm:mt-0">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                        {experience.type === 'work' ? t('experience.work') : t('experience.education')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4 relative z-10">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <FiClock className="w-4 h-4" />
                    <span className="text-sm font-medium">{t(experience.period)}</span>
                  </div>

                  {/* Programming Area */}
                  {experience.type === 'work' && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Specialization:</span>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-200 dark:border-primary-800">
                          {t(`experience.${experience.id === '1' ? 'parq' : experience.id === '2' ? 'serempre' : 'senaIntern'}.area`)}
                        </span>
                      </div>
                    </div>
                  )}

                  {experience.type === 'education' && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Focus Area:</span>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-800">
                          {t(`experience.${experience.id === '4' ? 'uptc' : 'sena'}.area`)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap">
                    {t(experience.description)}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Timeline End */}
        <div className="relative flex items-center justify-center mt-12">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 border-4 border-white dark:border-gray-900 shadow-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-300 shadow-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
