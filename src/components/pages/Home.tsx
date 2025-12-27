import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  FiBarChart2,
  FiCloud,
  FiCode,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSun,
  FiTool,
  FiTwitter,
  FiX,
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo, technologies } from '../../data/portfolio';
import type { Technology } from '../../types';
import { getCVPath } from '../../utils/paths';
import { Badge } from '../ui/Badge';
import { MetricCard } from '../ui/MetricCard';

export const Home: React.FC = () => {
  const { t, locale, setLocale } = useLocale();
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCategory) {
        closeCategoryModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [selectedCategory]);

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
  };

  const skillCategories = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, typeof technologies>
  );

  const handleDownloadCV = () => {
    const cvFileName = locale === 'es' ? 'CV-ESPAÑOL.pdf' : 'CV-INGLÉS.pdf';

    const link = document.createElement('a');
    link.href = getCVPath(cvFileName);
    link.download = cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryLevel = (category: string) => {
    switch (category) {
      case 'backend':
        return 'Advanced';
      case 'database':
        return 'Intermediate';
      case 'frontend':
        return 'Intermediate';
      case 'data':
        return 'Basic';
      case 'cloud':
        return 'Intermediate';
      case 'tools':
        return 'Intermediate';
      default:
        return 'Intermediate';
    }
  };

  const openCategoryModal = (category: string) => {
    setSelectedCategory(category);
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const getTechLevel = (tech: Technology, category: string) => {
    switch (category) {
      case 'backend':
        if (tech.name === 'Laravel' || tech.name === 'PHP')
          return 'Intermediate';
        if (tech.name === 'NestJS') return 'Intermediate';
        if (tech.name === 'Node.js') return 'Intermediate';
        if (tech.name === 'Spring Boot' || tech.name === 'Java')
          return 'Intermediate';
        if (tech.name === 'Express.js') return 'Intermediate';
        if (tech.name === 'Python' || tech.name === 'Flask') return 'Basic';
        if (tech.name === 'C++') return 'Basic';
        if (tech.name === 'Docker' || tech.name === 'Git') return 'Basic';
        if (tech.name === 'GitHub Actions') return 'Basic';
        if (tech.name === 'Swagger') return 'Intermediate';
        return 'Intermediate';
      case 'frontend':
        if (tech.name === 'React') return 'Intermediate';
        if (tech.name === 'TypeScript' || tech.name === 'JavaScript')
          return 'Intermediate';
        if (tech.name === 'Next.js') return 'Intermediate';
        if (tech.name === 'TailwindCSS' || tech.name === 'Bootstrap')
          return 'Intermediate';
        if (tech.name === 'Angular' || tech.name === 'Vue.js') return 'Basic';
        return 'Intermediate';
      case 'database':
        if (tech.name === 'MySQL' || tech.name === 'PostgreSQL')
          return 'Intermediate';
        if (tech.name === 'TypeORM' || tech.name === 'Prisma')
          return 'Intermediate';
        if (tech.name === 'Redis') return 'Basic';
        return 'Intermediate';
      case 'data':
        return 'Basic';
      case 'tools':
        return 'Intermediate';
      case 'cloud':
        if (tech.name === 'AWS') return 'Intermediate';
        if (tech.name === 'GCP') return 'Basic';
        if (tech.name === 'Cloudinary') return 'Intermediate';
        return 'Basic';
      default:
        return 'Intermediate';
    }
  };

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'backend':
        return {
          name: 'Backend',
          color: 'text-blue-600 dark:text-blue-400',
          icon: FiCode,
        };
      case 'frontend':
        return {
          name: 'Frontend',
          color: 'text-emerald-600 dark:text-emerald-400',
          icon: FiLayers,
        };
      case 'database':
        return {
          name: 'Database',
          color: 'text-violet-600 dark:text-violet-400',
          icon: FiDatabase,
        };
      case 'data':
        return {
          name: locale === 'es' ? 'Ingeniería de Datos' : 'Data Engineering',
          color: 'text-orange-600 dark:text-orange-400',
          icon: FiBarChart2,
        };
      case 'tools':
        return {
          name: 'Tools',
          color: 'text-gray-600 dark:text-gray-400',
          icon: FiTool,
        };
      case 'cloud':
        return {
          name: 'Cloud',
          color: 'text-sky-600 dark:text-sky-400',
          icon: FiCloud,
        };
      default:
        return {
          name: 'Other',
          color: 'text-gray-600 dark:text-gray-400',
          icon: FiCode,
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Controls */}
        <div className="flex justify-end items-center gap-4 mb-8">
          {/* Language Toggle */}
          <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setLocale('es')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                locale === 'es'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                locale === 'en'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-400"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1">
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-950"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            {personalInfo.name}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium mb-6">
            {t(personalInfo.title)}
          </p>

          {/* Brief description */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t(personalInfo.bio)}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
            <FiMapPin className="w-4 h-4" />
            <span className="text-sm">{personalInfo.location}</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg transition-colors font-medium"
            >
              <FiDownload className="w-4 h-4" />
              {t('hero.downloadCV')} ({locale === 'es' ? 'ES' : 'EN'})
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
            >
              <FiMail className="w-4 h-4" />
              {t('contact.emailMe')}
            </a>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <MetricCard
            title={t('home.keyAchievements.yearsExperience')}
            value="3+"
            color="blue"
          />
          <MetricCard
            title={t('home.keyAchievements.productionSystems')}
            value="12+"
            color="emerald"
          />
          <MetricCard
            title={t('home.keyAchievements.technologiesMastered')}
            value="25+"
            color="violet"
          />
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {t('home.currentRole')}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineer
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {t('home.careerInterest')}
              </div>
              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {t('home.careerInterest') === 'Career Interest'
                  ? 'Data Engineering'
                  : 'Ingeniería de Datos'}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {t('home.education')}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                Systems Engineering
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {t('home.inProgress')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('home.clickToSeeDetails')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(skillCategories).map(([category, techs]) => {
              const categoryConfig = getCategoryConfig(category);
              const level = getCategoryLevel(category);
              const IconComponent = categoryConfig.icon;

              return (
                <button
                  key={category}
                  onClick={() => openCategoryModal(category)}
                  className="group relative bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-lg p-4 sm:p-5 transition-all duration-200 text-left"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${categoryConfig.color}`}
                    />
                    <Badge variant="default" size="sm">
                      {level}
                    </Badge>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-semibold mb-1 break-words ${categoryConfig.color}`}
                  >
                    {categoryConfig.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {techs.length}{' '}
                    {techs.length === 1 ? 'technology' : 'technologies'}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('contact.title')}
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex gap-3">
                {personalInfo.socialLinks.map((link, index) => {
                  const IconComponent =
                    socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all"
                      title={link.platform}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Category Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-center min-h-screen px-4 py-4 text-center">
              {/* Background overlay */}
              <div
                className="fixed inset-0 transition-opacity bg-gray-900/50 dark:bg-gray-950/80 backdrop-blur-sm"
                onClick={closeCategoryModal}
              ></div>

              {/* Modal panel */}
              <div className="inline-block w-full max-w-3xl p-6 sm:p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-800 animate-scale-in">
                {(() => {
                  const categoryConfig = getCategoryConfig(selectedCategory!);
                  const techs = skillCategories[selectedCategory!] || [];
                  const level = getCategoryLevel(selectedCategory!);

                  return (
                    <>
                      {/* Modal Header */}
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          {(() => {
                            const IconComponent = categoryConfig.icon;
                            return (
                              <IconComponent
                                className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 ${categoryConfig.color}`}
                              />
                            );
                          })()}
                          <div className="min-w-0 flex-1">
                            <h3
                              className={`text-xl sm:text-2xl font-bold break-words ${categoryConfig.color}`}
                            >
                              {categoryConfig.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                              <Badge variant="default">{level}</Badge>
                              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                {techs.length}{' '}
                                {techs.length === 1
                                  ? 'technology'
                                  : 'technologies'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={closeCategoryModal}
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex-shrink-0"
                        >
                          <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                        {techs.map((tech: Technology, index: number) => {
                          const techLevel = getTechLevel(
                            tech,
                            selectedCategory!
                          );

                          return (
                            <div
                              key={index}
                              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
                            >
                              <div className="flex items-center justify-between mb-2 gap-2">
                                <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm break-words flex-1">
                                  {tech.name}
                                </span>
                                <Badge variant="default" size="sm" className="flex-shrink-0">
                                  {techLevel}
                                </Badge>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Modal Footer */}
                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                        <button
                          onClick={closeCategoryModal}
                          className="px-4 sm:px-6 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg transition-colors font-medium text-sm sm:text-base"
                        >
                          Close
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
