import React, { useState } from 'react';
import { FiCode, FiFilter } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { professionalProjects, projects } from '../../data/portfolio';
import { Badge } from '../ui/Badge';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionCard } from '../ui/SectionCard';
import { TabSwitch } from '../ui/TabSwitch';

export const Projects: React.FC = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'personal' | 'professional'>(
    'personal'
  );
  const [technologyFilter, setTechnologyFilter] = useState<
    'all' | 'frontend' | 'backend' | 'devops' | 'database'
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
    'all' | 'PARQ' | 'Serempre'
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
      const projectTechTypes = project.technologies.map(tech => tech.category);
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
        project.technologies.map(tech => tech.category)
      )
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <FiCode className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            {t('projects.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('nav.projects')} & {t('experience.workExperience')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <TabSwitch
            tabs={[
              {
                id: 'personal',
                label: t('projects.title'),
                count: projects.length,
                icon: <FiCode className="w-4 h-4" />,
              },
              {
                id: 'professional',
                label: t('professionalProjects.title'),
                count: professionalProjects.length,
                subtitle: t('professionalProjects.subtitle'),
              },
            ]}
            activeTab={activeTab}
            onTabChange={tabId =>
              setActiveTab(tabId as 'personal' | 'professional')
            }
          />
        </div>

        {/* Personal Projects */}
        {activeTab === 'personal' && (
          <div className="space-y-8">
            {/* Filters */}
            <SectionCard title={t('projects.filterByCategory')} padding="sm">
              <div className="space-y-4">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
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
                        className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 ${
                          categoryFilter === category
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                        }`}
                      >
                        {t(`projects.categories.${category}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technology Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('projects.filterByTechnology')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setTechnologyFilter('all')}
                      className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 ${
                        technologyFilter === 'all'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
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
                              | 'devops'
                              | 'database'
                          )
                        }
                        className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 ${
                          technologyFilter === category
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                        }`}
                      >
                        {t(`projects.technologyCategories.${category}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <SectionCard className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400">
                  <FiCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">
                    {t('projects.noProjectsFound')}
                  </h3>
                  <p className="text-sm">{t('projects.tryDifferentFilters')}</p>
                </div>
              </SectionCard>
            )}
          </div>
        )}

        {/* Professional Projects */}
        {activeTab === 'professional' && (
          <div className="space-y-8">
            {/* Note about confidentiality */}
            <SectionCard variant="gradient" className="text-center">
              <div className="flex items-center justify-center gap-3 text-blue-700 dark:text-blue-300">
                <Badge variant="info" size="sm">
                  {t('professionalProjects.confidential')}
                </Badge>
                <p className="text-sm">{t('professionalProjects.note')}</p>
              </div>
            </SectionCard>

            {/* Company Filter */}
            <div className="flex justify-center">
              <div className="flex gap-2">
                {(['all', 'PARQ', 'Serempre'] as const).map(company => (
                  <button
                    key={company}
                    onClick={() => setProfessionalFilter(company)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
                      professionalFilter === company
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                  >
                    {company === 'all' ? 'All Companies' : company}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects by Company */}
            <div className="space-y-12">
              {/* PARQ Projects */}
              {(professionalFilter === 'all' ||
                professionalFilter === 'PARQ') && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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

                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>{project.category}</span>
                            <span>{t(project.period)}</span>
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
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
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

                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>{project.category}</span>
                            <span>{t(project.period)}</span>
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
    </div>
  );
};
