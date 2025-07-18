import React, { useEffect, useState } from 'react';
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiMousePointer,
  FiSun,
  FiTwitter,
  FiX,
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo, technologies } from '../../data/portfolio';
import type { Technology } from '../../types';
import { getCVPath } from '../../utils/paths';
import { Badge } from '../ui/Badge';
import { ContactButton } from '../ui/ContactButton';
import { MetricCard } from '../ui/MetricCard';
import { SectionCard } from '../ui/SectionCard';
import { StatusIndicator } from '../ui/StatusIndicator';
import { TechnologyGrid } from '../ui/TechnologyGrid';

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
    const cvFileName =
      locale === 'es'
        ? 'Gabriel_Castillo_CV_ES.pdf'
        : 'Gabriel_Castillo_CV_EN.pdf';

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
      case 'devops':
        return 'Basic';
      case 'cloud':
        return 'Basic';
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
      case 'devops':
        if (tech.name === 'Git') return 'Intermediate';
        if (tech.name === 'Docker') return 'Basic';
        if (tech.name === 'AWS') return 'Basic';
        if (tech.name === 'GitHub Actions' || tech.name === 'Bitbucket')
          return 'Basic';
        if (tech.name === 'SonarQube') return 'Basic';
        return 'Basic';
      case 'tools':
        return 'Intermediate';
      case 'cloud':
        if (tech.name === 'AWS') return 'Basic';
        return 'Basic';
      default:
        return 'Intermediate';
    }
  };

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'backend':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          name: 'Backend',
          bgColor: 'bg-blue-50 dark:bg-blue-900/20',
          borderColor: 'border-blue-200 dark:border-blue-800',
          emoji: '⚙️',
        };
      case 'frontend':
        return {
          gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
          name: 'Frontend',
          bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
          borderColor: 'border-emerald-200 dark:border-emerald-800',
          emoji: '💻',
        };
      case 'database':
        return {
          gradient: 'from-violet-500 via-purple-500 to-pink-500',
          name: 'Database',
          bgColor: 'bg-violet-50 dark:bg-violet-900/20',
          borderColor: 'border-violet-200 dark:border-violet-800',
          emoji: '🗄️',
        };
      case 'devops':
        return {
          gradient: 'from-orange-500 via-red-500 to-pink-500',
          name: 'DevOps',
          bgColor: 'bg-orange-50 dark:bg-orange-900/20',
          borderColor: 'border-orange-200 dark:border-orange-800',
          emoji: '🚀',
        };
      case 'tools':
        return {
          gradient: 'from-gray-600 via-slate-600 to-zinc-600',
          name: 'Tools',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20',
          borderColor: 'border-gray-200 dark:border-gray-800',
          emoji: '🛠️',
        };
      case 'cloud':
        return {
          gradient: 'from-sky-500 via-blue-500 to-indigo-500',
          name: 'Cloud',
          bgColor: 'bg-sky-50 dark:bg-sky-900/20',
          borderColor: 'border-sky-200 dark:border-sky-800',
          emoji: '☁️',
        };
      default:
        return {
          gradient: 'from-gray-500 to-slate-600',
          name: 'Other',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20',
          borderColor: 'border-gray-200 dark:border-gray-800',
          emoji: '🔧',
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-6">
        {/* Top Controls */}
        <div className="flex justify-end items-center gap-4 mb-8">
          {/* Language Toggle */}
          <div className="flex items-center bg-white dark:bg-gray-900 rounded-xl p-1 border border-gray-200 dark:border-gray-800 shadow-sm">
            <button
              onClick={() => setLocale('es')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                locale === 'es'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                locale === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
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
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Simple status indicator */}
              <div className="absolute -bottom-2 -right-2">
                <StatusIndicator
                  status="available"
                  text={t('home.profileStatus.availableFor')}
                  className="scale-75"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-2 -right-2">
                <Badge variant="info" size="sm">
                  3Y
                </Badge>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>

          <p className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {t(personalInfo.title)}
          </p>

          {/* Brief description */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t(personalInfo.bio)}
            </p>
          </div>

          {/* Location and availability */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FiMapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <Badge variant="success" size="sm">
              {t('home.profileStatus.availableFor')}
            </Badge>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactButton
              href="#"
              icon={<FiDownload />}
              label={`${t('hero.downloadCV')} (${locale === 'es' ? 'ES' : 'EN'})`}
              variant="primary"
              size="lg"
              onClick={e => {
                e.preventDefault();
                handleDownloadCV();
              }}
            />
            <ContactButton
              href={`mailto:${personalInfo.email}`}
              icon={<FiMail />}
              label={t('contact.emailMe')}
              variant="secondary"
              size="lg"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            title={t('home.keyAchievements.yearsExperience')}
            value="3+"
            icon="📅"
            gradient="from-blue-500 to-indigo-600"
          />
          <MetricCard
            title={t('home.keyAchievements.productionSystems')}
            value="12+"
            icon="🚀"
            gradient="from-emerald-500 to-teal-600"
          />
          <MetricCard
            title={t('home.keyAchievements.technologiesMastered')}
            value="25+"
            icon="⚙️"
            gradient="from-purple-500 to-pink-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <SectionCard title={t('home.professionalSummary')}>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('home.currentRole')}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Backend Developer
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('home.careerInterest')}
                  </div>
                  <div className="font-medium text-blue-600 dark:text-blue-400 text-sm">
                    DevOps & Data Engineering
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('home.education')}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    Systems Engineering
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {t('home.inProgress')}
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title={t('home.coreTechnologies')}>
              <TechnologyGrid
                technologies={[
                  technologies.find(t => t.name === 'Laravel')!,
                  technologies.find(t => t.name === 'NestJS')!,
                  technologies.find(t => t.name === 'React')!,
                  technologies.find(t => t.name === 'PostgreSQL')!,
                  technologies.find(t => t.name === 'TypeScript')!,
                  technologies.find(t => t.name === 'Docker')!,
                ]}
                variant="minimal"
              />
            </SectionCard>
          </div>

          {/* Center - Technologies */}
          <div className="lg:col-span-6">
            <SectionCard title={t('skills.title')}>
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
                  <FiMousePointer className="w-4 h-4" />
                  {t('home.clickToSeeDetails')}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(skillCategories).map(([category, techs]) => {
                  const categoryConfig = getCategoryConfig(category);
                  const level = getCategoryLevel(category);

                  return (
                    <div
                      key={category}
                      onClick={() => openCategoryModal(category)}
                      className="group cursor-pointer"
                    >
                      <div
                        className={`${categoryConfig.bgColor} ${categoryConfig.borderColor} border rounded-xl p-4 hover:shadow-md transition-all duration-200`}
                      >
                        <div className="flex items-center justify-center mb-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${categoryConfig.gradient} rounded-xl flex items-center justify-center`}
                          >
                            <span className="text-lg">
                              {categoryConfig.emoji}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center mb-2">
                          {categoryConfig.name}
                        </h3>

                        <div className="flex items-center justify-center mb-2">
                          <Badge variant="default" size="sm">
                            {level}
                          </Badge>
                        </div>

                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                          {techs.length}{' '}
                          {techs.length === 1 ? 'technology' : 'technologies'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <SectionCard title={t('contact.title')}>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <FiMail className="w-5 h-5 text-blue-600" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <FiMapPin className="w-5 h-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Location
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {t('contact.connectWithMe')}
                </p>
                <div className="flex justify-center gap-3">
                  {personalInfo.socialLinks.map((link, index) => {
                    const IconComponent =
                      socialIcons[link.icon as keyof typeof socialIcons];
                    return (
                      <ContactButton
                        key={index}
                        href={link.url}
                        icon={IconComponent && <IconComponent />}
                        label={link.platform}
                        variant="floating"
                        external={true}
                      />
                    );
                  })}
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>

      {/* Technology Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
              onClick={closeCategoryModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
              {(() => {
                const categoryConfig = getCategoryConfig(selectedCategory);
                const techs = skillCategories[selectedCategory] || [];
                const level = getCategoryLevel(selectedCategory);

                return (
                  <>
                    {/* Modal Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${categoryConfig.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-2xl">
                            {categoryConfig.emoji}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {categoryConfig.name} Technologies
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <Badge variant="default">{level}</Badge>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {techs.length} technologies
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={closeCategoryModal}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <FiX className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Technologies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {techs.map((tech, index) => {
                        const techLevel = getTechLevel(tech, selectedCategory);

                        return (
                          <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-all duration-200"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: tech.color }}
                              ></div>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {tech.name}
                              </span>
                              <Badge
                                variant="default"
                                size="sm"
                                className="ml-auto"
                              >
                                {techLevel}
                              </Badge>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="h-2 rounded-full transition-all duration-500"
                                style={{
                                  backgroundColor: tech.color,
                                  width:
                                    techLevel === 'Intermediate'
                                      ? '60%'
                                      : techLevel === 'Basic'
                                        ? '40%'
                                        : '50%',
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Based on {techs.length} technologies in{' '}
                          {categoryConfig.name.toLowerCase()} development
                        </p>
                        <button
                          onClick={closeCategoryModal}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
