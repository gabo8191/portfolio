import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCode, FiFilter } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { professionalProjects, projects } from '../../data/portfolio';
import { Badge } from '../ui/Badge';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionCard } from '../ui/SectionCard';

export const Projects: React.FC = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'personal' | 'professional'>(
    'personal'
  );
  const [technologyFilter, setTechnologyFilter] = useState<
    'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'data'
  >('all');
  const [categoryFilter, setCategoryFilter] = useState<
    | 'all'
    | 'frontend'
    | 'backend'
    | 'database'
    | 'devops'
    | 'vanilla'
    | 'proof-of-concept'
    | 'featured'
  >('all');
  const [professionalFilter, setProfessionalFilter] = useState<
    'all' | 'TotalDev' | 'PARQ' | 'Serempre'
  >('all');

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
            <span className="text-blue-500 dark:text-blue-400 mt-1 text-xs">
              ●
            </span>
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
            <p
              key={`p-${i}`}
              className="mb-3 font-medium text-gray-800 dark:text-gray-200"
            >
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

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    // Category filter
    if (categoryFilter !== 'all' && project.category !== categoryFilter) {
      return false;
    }

    // Technology type filter
    if (technologyFilter !== 'all') {
      const projectTechTypes = project.technologies
        .filter(tech => tech && tech.category)
        .map(tech => tech.category);
      if (!projectTechTypes.includes(technologyFilter)) {
        return false;
      }
    }

    return true;
  });

  // Filter professional projects
  const filteredProfessionalProjects = professionalProjects.filter(project => {
    if (professionalFilter === 'all') return true;
    return project.company === professionalFilter;
  });

  // Get unique technology categories for filtering
  const techCategories = Array.from(
    new Set(
      projects.flatMap(project =>
        project.technologies
          .filter(tech => tech && tech.category)
          .map(tech => tech.category)
      )
    )
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiCode className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {t('projects.title')}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('nav.projects')} & {t('experience.workExperience')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 p-1 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === 'personal'
                  ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t('projects.title')} ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === 'professional'
                  ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t('professionalProjects.title')} ({professionalProjects.length})
            </button>
          </div>
        </div>

        {/* Personal Projects */}
        {activeTab === 'personal' && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="space-y-6">
                {/* Category Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <FiFilter className="w-4 h-4" />
                    {t('projects.filterByCategory')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        'all',
                        'frontend',
                        'backend',
                        'database',
                        'devops',
                        'vanilla',
                        'proof-of-concept',
                      ] as const
                    ).map(category => (
                      <button
                        key={category}
                        onClick={() => setCategoryFilter(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                          categoryFilter === category
                            ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        {t(`projects.categories.${category}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technology Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t('projects.filterByTechnology')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setTechnologyFilter('all')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        technologyFilter === 'all'
                          ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {t('projects.technologyCategories.all')}
                    </button>
                    {techCategories.map(category => (
                      <button
                        key={category}
                        onClick={() =>
                          setTechnologyFilter(
                            category as
                              | 'frontend'
                              | 'backend'
                              | 'database'
                              | 'tools'
                              | 'cloud'
                              | 'data'
                          )
                        }
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                          technologyFilter === category
                            ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        {t(`projects.technologyCategories.${category}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
                <FiCode className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t('projects.noProjectsFound')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('projects.tryDifferentFilters')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Professional Projects */}
        {activeTab === 'professional' && (
          <div className="space-y-8">
            {/* Note about confidentiality */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Badge variant="info" size="sm">
                  {t('professionalProjects.confidential')}
                </Badge>
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  {t('professionalProjects.note')}
                </p>
              </div>
            </div>

            {/* Company Filter */}
            <div className="flex justify-center">
              <div className="inline-flex gap-2 p-1 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {(['all', 'TotalDev', 'PARQ', 'Serempre'] as const).map(
                  company => (
                    <button
                      key={company}
                      onClick={() => setProfessionalFilter(company)}
                      className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        professionalFilter === company
                          ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      {company === 'all' ? 'All Companies' : company}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Projects by Company */}
            <div className="space-y-12">
              {/* TotalDev Projects */}
              {(professionalFilter === 'all' ||
                professionalFilter === 'TotalDev') && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    TotalDev Projects
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProfessionalProjects
                      .filter(project => project.company === 'TotalDev')
                      .map(project => (
                        <SectionCard key={project.id} className="hover-lift">
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="warning" size="sm">
                                  TotalDev
                                </Badge>
                                <Badge variant="error" size="sm">
                                  {t('professionalProjects.confidential')}
                                </Badge>
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t(project.title)}
                              </h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <span>{project.period}</span>
                                <span>●</span>
                                <span>{project.category}</span>
                              </div>
                            </div>

                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                              {renderDescription(t(project.description))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="default" size="sm">
                                  {tech.name}
                                </Badge>
                              ))}
                            </div>

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                              >
                                View Live
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </SectionCard>
                      ))}
                  </div>
                </div>
              )}

              {/* PARQ Projects */}
              {(professionalFilter === 'all' ||
                professionalFilter === 'PARQ') && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    PARQ Projects
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProfessionalProjects
                      .filter(project => project.company === 'PARQ')
                      .map(project => (
                        <SectionCard key={project.id} className="hover-lift">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t(project.title)}
                              </h4>
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="info" size="sm">
                                  PARQ
                                </Badge>
                                <Badge variant="error" size="sm">
                                  {t('professionalProjects.confidential')}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {renderDescription(t(project.description))}
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="default"
                                size="sm"
                              >
                                {tech.name}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                              {project.category}
                            </span>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500 dark:text-gray-400">
                                {t(project.period)}
                              </span>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                  View Live
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </SectionCard>
                      ))}
                  </div>
                </div>
              )}

              {/* Serempre Projects */}
              {(professionalFilter === 'all' ||
                professionalFilter === 'Serempre') && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    Serempre Projects
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProfessionalProjects
                      .filter(project => project.company === 'Serempre')
                      .map(project => (
                        <SectionCard key={project.id} className="hover-lift">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t(project.title)}
                              </h4>
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="success" size="sm">
                                  Serempre
                                </Badge>
                                <Badge variant="error" size="sm">
                                  {t('professionalProjects.confidential')}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {renderDescription(t(project.description))}
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="default"
                                size="sm"
                              >
                                {tech.name}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                              {project.category}
                            </span>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500 dark:text-gray-400">
                                {t(project.period)}
                              </span>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                                >
                                  View Live
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </SectionCard>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
