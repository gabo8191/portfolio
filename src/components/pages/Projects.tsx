import React, { useState } from 'react';
import { FiBriefcase, FiCode, FiFilter } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { professionalProjects, projects, technologies } from '../../data/portfolio';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'personal' | 'professional'>('personal');
  const [technologyFilter, setTechnologyFilter] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'database'>('all');
  const [frameworkFilter, setFrameworkFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'vanilla' | 'proof-of-concept' | 'featured'>('all');
  const [professionalFilter, setProfessionalFilter] = useState<'all' | 'PARQ' | 'Serempre'>('all');

  // Function to render description with bullet points
  const renderDescription = (description: string) => {
    const lines = description.split('\n');
    const result = [];
    let currentList = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('•')) {
        if (!inList) {
          inList = true;
          if (result.length > 0) {
            result.push(<br key={`br-${i}`} />);
          }
        }
        currentList.push(
          <li key={`li-${i}`} className="flex items-start gap-2 mb-2">
            <span className="text-primary-500 dark:text-primary-400 mt-1 text-xs">●</span>
            <span>{line.substring(1).trim()}</span>
          </li>
        );
      } else if (line && !line.startsWith('•')) {
        if (inList && currentList.length > 0) {
          result.push(
            <ul key={`ul-${i}`} className="space-y-1 mb-3">
              {currentList}
            </ul>
          );
          currentList = [];
          inList = false;
        }

        if (line) {
          result.push(
            <p key={`p-${i}`} className="mb-3 font-medium text-gray-800 dark:text-gray-200">
              {line}
            </p>
          );
        }
      } else if (!line && currentList.length > 0 && inList) {
        result.push(
          <ul key={`ul-${i}`} className="space-y-1 mb-3">
            {currentList}
          </ul>
        );
        currentList = [];
        inList = false;
      }
    }

    // Handle any remaining list items
    if (currentList.length > 0) {
      result.push(
        <ul key="ul-final" className="space-y-1 mb-3">
          {currentList}
        </ul>
      );
    }

    return result;
  };

  // Get unique frameworks based on technology filter
  const getAvailableFrameworks = () => {
    const relevantTechs = technologies.filter(tech =>
      technologyFilter === 'all' || tech.category === technologyFilter
    );

    const frameworks = relevantTechs
      .filter(tech => ['Laravel', 'NestJS', 'React', 'Angular', 'Vue.js', 'Next.js', 'Spring Boot', 'Express.js'].includes(tech.name))
      .map(tech => tech.name);

    return ['all', ...frameworks];
  };

  const filteredPersonalProjects = projects.filter(project => {
    // Filter by project category
    if (categoryFilter === 'featured') {
      if (!project.featured) return false;
    } else if (categoryFilter !== 'all') {
      if (project.category !== categoryFilter) return false;
    }

    // Filter by technology category
    if (technologyFilter !== 'all') {
      const hasMatchingTech = project.technologies.some(tech => tech.category === technologyFilter);
      if (!hasMatchingTech) return false;
    }

    // Filter by specific framework
    if (frameworkFilter !== 'all') {
      const hasMatchingFramework = project.technologies.some(tech => tech.name === frameworkFilter);
      if (!hasMatchingFramework) return false;
    }

    return true;
  });

  const filteredProfessionalProjects = professionalProjects.filter(project => {
    if (professionalFilter === 'all') return true;
    return project.company === professionalFilter;
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Creative Tab Navigation */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-2 border border-slate-200 dark:border-slate-700">
          <div className="flex relative">
            {/* Background Slider */}
            <div
              className={`absolute top-0 h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600 transition-all duration-500 ease-out ${
                activeTab === 'personal' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'
              }`}
            />

            {/* Personal Projects Tab */}
            <button
              onClick={() => setActiveTab('personal')}
              className={`relative z-10 flex-1 px-4 sm:px-8 py-4 sm:py-6 rounded-xl text-center transition-all duration-300 group ${
                activeTab === 'personal'
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'personal'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 scale-110'
                    : 'bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                }`}>
                  <FiCode className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-lg">{t('projects.title')}</h3>
                  <p className="text-xs sm:text-sm opacity-75 hidden sm:block">Open Source & GitHub</p>
                </div>
              </div>
            </button>

            {/* Professional Projects Tab */}
            <button
              onClick={() => setActiveTab('professional')}
              className={`relative z-10 flex-1 px-4 sm:px-8 py-4 sm:py-6 rounded-xl text-center transition-all duration-300 group ${
                activeTab === 'professional'
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'professional'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 scale-110'
                    : 'bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                }`}>
                  <FiBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-lg">{t('professionalProjects.title')}</h3>
                  <p className="text-xs sm:text-sm opacity-75 hidden sm:block">{t('professionalProjects.subtitle')}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      {activeTab === 'personal' && (
        <div className="space-y-6 sm:space-y-8">
          {/* Category Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FiFilter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>{t('projects.filterByCategory')}:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['all', 'featured', 'frontend', 'backend', 'database', 'devops', 'vanilla', 'proof-of-concept'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setCategoryFilter(filter as any);
                    setTechnologyFilter('all');
                    setFrameworkFilter('all');
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    categoryFilter === filter
                      ? filter === 'featured'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700 shadow-sm shadow-orange-500/25'
                        : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {filter === 'all' ? t('projects.categories.all') :
                   filter === 'featured' ? t('projects.categories.featured') :
                   filter === 'frontend' ? t('projects.categories.frontend') :
                   filter === 'backend' ? t('projects.categories.backend') :
                   filter === 'database' ? t('projects.categories.database') :
                   filter === 'devops' ? t('projects.categories.devops') :
                   filter === 'vanilla' ? t('projects.categories.vanilla') :
                   filter === 'proof-of-concept' ? t('projects.categories.proofOfConcept') : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filters */}
          {categoryFilter === 'all' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <FiFilter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span>{t('projects.filterByTechnology')}:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['all', 'frontend', 'backend', 'devops', 'database'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setTechnologyFilter(filter as any);
                      setFrameworkFilter('all'); // Reset framework filter when technology changes
                    }}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                      technologyFilter === filter
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    {filter === 'all' ? t('projects.technologies.all') :
                     filter === 'frontend' ? t('projects.technologies.frontend') :
                     filter === 'backend' ? t('projects.technologies.backend') :
                     filter === 'devops' ? t('projects.technologies.devops') : t('projects.technologies.database')}
                  </button>
                ))}
              </div>

              {/* Framework Filters */}
              {technologyFilter !== 'all' && (
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('projects.filterByFramework')}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getAvailableFrameworks().map((framework) => (
                      <button
                        key={framework}
                        onClick={() => setFrameworkFilter(framework)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                          frameworkFilter === framework
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                            : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 border border-transparent'
                        }`}
                      >
                        {framework === 'all' ? t('projects.categories.all') : framework}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredPersonalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPersonalProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {t('projects.noProjectsFound')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('projects.tryDifferentFilters')}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Professional Projects */}
      {activeTab === 'professional' && (
        <div className="space-y-6 sm:space-y-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <FiFilter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('common.filter')}:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'PARQ', 'Serempre'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProfessionalFilter(filter as any)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    professionalFilter === filter
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {filter === 'all' ? t('common.all') : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              📝 {t('professionalProjects.note')}
            </p>
          </div>

          {/* PARQ Projects */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-500/30"></div>
              <span>PARQ Projects</span>
              <div className="h-px bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800 flex-1 ml-4"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredProfessionalProjects
                .filter(project => project.company === 'PARQ')
                .map((project) => (
                  <div key={project.id} className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] overflow-hidden">
                    {/* Elegant Header with Gradient */}
                    <div className="relative p-6 pb-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-t-xl">
                      <div className="flex items-center justify-between">
                        <div className="text-white drop-shadow-lg">
                          <FiBriefcase className="w-8 h-8" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                            PARQ
                          </span>
                          <span className="px-2 py-1 bg-red-100/90 backdrop-blur-sm text-red-800 text-xs rounded-full font-medium">
                            Confidencial
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {t(project.title)}
                      </h4>

                      {/* Enhanced Description with Bullet Points */}
                      <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                        {renderDescription(t(project.description))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
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

                      {/* Category and Period */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                            {project.category}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {project.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Serempre Projects */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/30"></div>
              <span>Serempre Projects</span>
              <div className="h-px bg-gradient-to-r from-green-200 to-transparent dark:from-green-800 flex-1 ml-4"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredProfessionalProjects
                .filter(project => project.company === 'Serempre')
                .map((project) => (
                  <div key={project.id} className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] overflow-hidden">
                    {/* Elegant Header with Gradient */}
                    <div className="relative p-6 pb-4 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-t-xl">
                      <div className="flex items-center justify-between">
                        <div className="text-white drop-shadow-lg">
                          <FiBriefcase className="w-8 h-8" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                            Serempre
                          </span>
                          <span className="px-2 py-1 bg-red-100/90 backdrop-blur-sm text-red-800 text-xs rounded-full font-medium">
                            Confidencial
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {t(project.title)}
                      </h4>

                      {/* Enhanced Description with Bullet Points */}
                      <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                        {renderDescription(t(project.description))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
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

                      {/* Category and Period */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                            {project.category}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {project.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
