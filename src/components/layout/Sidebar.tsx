import React, { useState } from 'react';
import {
    FiDownload,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiMenu,
    FiTwitter,
    FiX
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { personalInfo, technologies } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import { getCVPath } from '../../utils/paths';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ThemeToggle } from '../ui/ThemeToggle';

interface SidebarProps {
  className?: string;
  isVisible?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, isVisible = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale } = useLocale();

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownloadCV = () => {
    // Get CV file name based on current language
    const cvFileName = locale === 'es'
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

  if (!isVisible) {
    return (
      <>
        {/* Mobile Menu Button - always visible for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-[60] lg:hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg backdrop-blur-lg"
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-gray-900 dark:text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
          )}
        </button>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <aside
            className={cn(
              'fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900',
              'border-r border-gray-200 dark:border-gray-700',
              'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600',
              'transition-all duration-300 z-50 lg:hidden',
              className
            )}
          >
            <div className="p-6">
              {/* Header with Theme and Language Toggle */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('common.portfolio')}
                </h1>
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>

              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary-500 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-blue-500/20"></div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {personalInfo.name}
                </h2>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {t(personalInfo.title)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t(personalInfo.subtitle)}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2.7+</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Years</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 border border-green-200 dark:border-green-800">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{technologies.length}</div>
                    <div className="text-xs text-green-600 dark:text-green-400">Tech</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 border border-purple-200 dark:border-purple-800">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">8+</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">Projects</div>
                  </div>
                </div>

                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors group w-full justify-center"
                  title={locale === 'es' ? 'Descargar CV en Español' : 'Download CV in English'}
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
                  Social
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
                  Skill Overview
                </h3>

                <div className="space-y-4">
                  {[
                    { name: 'Backend Development', level: 'Intermediate', category: 'backend' },
                    { name: 'Database Management', level: 'Intermediate', category: 'database' },
                    { name: 'Frontend Development', level: 'Intermediate', category: 'frontend' },
                    { name: 'DevOps & Infrastructure', level: 'Basic', category: 'devops' },
                    { name: 'Cloud Technologies', level: 'Basic', category: 'cloud' },
                  ].map((skill, index) => {
                    const getLevelColor = (level: string) => {
                      switch (level) {
                        case 'Expert': return 'text-green-600 dark:text-green-400';
                        case 'Advanced': return 'text-blue-600 dark:text-blue-400';
                        case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400';
                        case 'Basic': return 'text-orange-600 dark:text-orange-400';
                        case 'Learning': return 'text-red-600 dark:text-red-400';
                        default: return 'text-gray-600 dark:text-gray-400';
                      }
                    };

                    return (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse ${
                              skill.category === 'backend' ? 'bg-blue-500' :
                              skill.category === 'database' ? 'bg-violet-500' :
                              skill.category === 'frontend' ? 'bg-emerald-500' :
                              skill.category === 'devops' ? 'bg-orange-500' :
                              'bg-sky-500'
                            }`}
                            style={{
                              width: skill.level === 'Intermediate' ? '60%' :
                                     skill.level === 'Basic' ? '40%' : '50%'
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
        )}
      </>
    );
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-[60] lg:hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg backdrop-blur-lg"
      >
        {isMobileMenuOpen ? (
          <FiX className="w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900',
          'border-r border-gray-200 dark:border-gray-700',
          'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600',
          'transition-all duration-300 z-50',
          // Mobile responsiveness
          'transform lg:transform-none',
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0',
          className
        )}
      >
        <div className="p-6">
          {/* Header with Theme and Language Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('common.portfolio')}
            </h1>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover border-4 border-primary-500 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-blue-500/20"></div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {personalInfo.name}
            </h2>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
              {t(personalInfo.title)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {t(personalInfo.subtitle)}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2.7+</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">Years</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 border border-green-200 dark:border-green-800">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">{technologies.length}</div>
                <div className="text-xs text-green-600 dark:text-green-400">Tech</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 border border-purple-200 dark:border-purple-800">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">8+</div>
                <div className="text-xs text-purple-600 dark:text-purple-400">Projects</div>
              </div>
            </div>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors group w-full justify-center"
              title={locale === 'es' ? 'Descargar CV en Español' : 'Download CV in English'}
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
              Social
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
              Skill Overview
            </h3>

            <div className="space-y-4">
              {[
                { name: 'Backend Development', level: 'Intermediate', category: 'backend' },
                { name: 'Database Management', level: 'Intermediate', category: 'database' },
                { name: 'Frontend Development', level: 'Intermediate', category: 'frontend' },
                { name: 'DevOps & Infrastructure', level: 'Basic', category: 'devops' },
                { name: 'Cloud Technologies', level: 'Basic', category: 'cloud' },
              ].map((skill, index) => {
                const getLevelColor = (level: string) => {
                  switch (level) {
                    case 'Expert': return 'text-green-600 dark:text-green-400';
                    case 'Advanced': return 'text-blue-600 dark:text-blue-400';
                    case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400';
                    case 'Basic': return 'text-orange-600 dark:text-orange-400';
                    case 'Learning': return 'text-red-600 dark:text-red-400';
                    default: return 'text-gray-600 dark:text-gray-400';
                  }
                };

                return (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse ${
                          skill.category === 'backend' ? 'bg-blue-500' :
                          skill.category === 'database' ? 'bg-violet-500' :
                          skill.category === 'frontend' ? 'bg-emerald-500' :
                          skill.category === 'devops' ? 'bg-orange-500' :
                          'bg-sky-500'
                        }`}
                        style={{
                          width: skill.level === 'Intermediate' ? '60%' :
                                 skill.level === 'Basic' ? '40%' : '50%'
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
