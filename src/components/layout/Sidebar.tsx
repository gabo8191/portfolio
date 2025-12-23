import React, { useState } from 'react';
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiTwitter,
  FiX,
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { personalInfo, technologies } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import { getCVPath } from '../../utils/paths';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ThemeToggle } from '../ui/ThemeToggle';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t, locale } = useLocale();

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDownloadCV = () => {
    // Get CV file name based on current language
    const cvFileName = locale === 'es' ? 'CV-ESPAÑOL.pdf' : 'CV-INGLÉS.pdf';

    const link = document.createElement('a');
    link.href = getCVPath(cvFileName);
    link.download = cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-[60] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-3 shadow-lg backdrop-blur-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
      >
        {isSidebarOpen ? (
          <FiX className="w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900',
          'border-r border-gray-200 dark:border-gray-800',
          'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600',
          'transition-all duration-300 z-50',
          'transform',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <div className="p-6">
          {/* Header with Controls */}
          <div className="flex items-center justify-end gap-2 mb-8">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
              />
            </div>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {personalInfo.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
              Software Engineer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
              Systems Engineering Student
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  3+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Years
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {technologies.length}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Skills
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  12+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
            </div>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors group w-full justify-center"
              title={
                locale === 'es'
                  ? 'Descargar CV en Español'
                  : 'Download CV in English'
              }
            >
              <FiDownload className="w-4 h-4" />
              {t('hero.downloadCV')}
              <span className="text-xs opacity-75 ml-1">
                ({locale === 'es' ? 'ES' : 'EN'})
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
              {t('contact.title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="w-4 h-4 text-gray-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiMapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
              {t('contact.social')}
            </h3>
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
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
              {t('about.title')}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(personalInfo.bio)}
            </p>
          </div>

          {/* Skills Section - Replaced with Skill Overview */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              {t('skills.title')}
            </h3>

            <div className="space-y-4">
              {[
                {
                  name: t('skills.categories.backendDevelopment'),
                  level: t('skills.levels.intermediate'),
                  category: 'backend',
                },
                {
                  name: t('skills.categories.databaseManagement'),
                  level: t('skills.levels.intermediate'),
                  category: 'database',
                },
                {
                  name: t('skills.categories.frontendDevelopment'),
                  level: t('skills.levels.intermediate'),
                  category: 'frontend',
                },
                {
                  name: 'Tools & DevOps',
                  level: t('skills.levels.basic'),
                  category: 'tools',
                },
                {
                  name: t('skills.categories.cloudTechnologies'),
                  level: t('skills.levels.basic'),
                  category: 'cloud',
                },
              ].map((skill, index) => {
                const getLevelColor = (level: string) => {
                  // Check for both English and Spanish level names
                  if (level === 'Expert' || level === 'Experto')
                    return 'text-green-600 dark:text-green-400';
                  if (level === 'Advanced' || level === 'Avanzado')
                    return 'text-blue-600 dark:text-blue-400';
                  if (level === 'Intermediate' || level === 'Intermedio')
                    return 'text-yellow-600 dark:text-yellow-400';
                  if (level === 'Basic' || level === 'Básico')
                    return 'text-orange-600 dark:text-orange-400';
                  if (level === 'Learning' || level === 'Aprendiendo')
                    return 'text-red-600 dark:text-red-400';
                  return 'text-gray-600 dark:text-gray-400';
                };

                return (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-medium ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse ${
                          skill.category === 'backend'
                            ? 'bg-blue-500'
                            : skill.category === 'database'
                              ? 'bg-violet-500'
                              : skill.category === 'frontend'
                                ? 'bg-emerald-500'
                                : skill.category === 'devops'
                                  ? 'bg-orange-500'
                                  : 'bg-sky-500'
                        }`}
                        style={{
                          width:
                            skill.level === 'Intermediate' ||
                            skill.level === 'Intermedio'
                              ? '60%'
                              : skill.level === 'Basic' ||
                                  skill.level === 'Básico'
                                ? '40%'
                                : '50%',
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
