import React, { useEffect, useState } from 'react';
import { FiCode, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiMoon, FiMousePointer, FiServer, FiSun, FiTool, FiTwitter, FiX } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo, technologies } from '../../data/portfolio';

export const Home: React.FC = () => {
  const { t, locale, setLocale } = useLocale();
  const { isDark, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCategory) {
        closeCategoryModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [selectedCategory]);

  const getGreeting = () => {
    // Get Colombian time (UTC-5)
    const colombianTime = new Date(currentTime.toLocaleString("en-US", {timeZone: "America/Bogota"}));
    const hour = colombianTime.getHours();

    if (hour < 12) return t('home.greeting.morning');
    if (hour < 18) return t('home.greeting.afternoon');
    return t('home.greeting.evening');
  };

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
    const cvFileName = locale === 'es'
      ? 'Gabriel_Castillo_CV_ES.pdf'
      : 'Gabriel_Castillo_CV_EN.pdf';

    const link = document.createElement('a');
    link.href = `/cv/${cvFileName}`;
    link.download = cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryLevel = (category: string) => {
    switch (category) {
      case 'backend': return 'Expert';
      case 'database': return 'Advanced';
      case 'frontend': return 'Advanced';
      case 'devops': return 'Basic';
      case 'cloud': return 'Intermediate';
      case 'tools': return 'Advanced';
      default: return 'Intermediate';
    }
  };

  const openCategoryModal = (category: string) => {
    setSelectedCategory(category);
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const getTechLevel = (tech: any, category: string) => {
    switch (category) {
      case 'backend':
        if (tech.name === 'Laravel' || tech.name === 'PHP') return 'Intermediate';
        if (tech.name === 'NestJS') return 'Intermediate';
        if (tech.name === 'Node.js') return 'Intermediate';
        if (tech.name === 'Spring Boot' || tech.name === 'Java') return 'Intermediate';
        if (tech.name === 'Express.js') return 'Intermediate';
        if (tech.name === 'Python' || tech.name === 'Flask') return 'Basic';
        if (tech.name === 'C++') return 'Basic';
        return 'Intermediate';
      case 'frontend':
        if (tech.name === 'React') return 'Intermediate';
        if (tech.name === 'TypeScript' || tech.name === 'JavaScript') return 'Intermediate';
        if (tech.name === 'Next.js') return 'Intermediate';
        if (tech.name === 'TailwindCSS' || tech.name === 'Bootstrap') return 'Intermediate';
        if (tech.name === 'Angular' || tech.name === 'Vue.js') return 'Basic';
        return 'Intermediate';
      case 'database':
        if (tech.name === 'MySQL' || tech.name === 'PostgreSQL') return 'Intermediate';
        if (tech.name === 'TypeORM' || tech.name === 'Prisma') return 'Intermediate';
        if (tech.name === 'Redis') return 'Basic';
        return 'Intermediate';
      case 'devops':
        if (tech.name === 'Git') return 'Intermediate';
        if (tech.name === 'Docker') return 'Basic';
        if (tech.name === 'AWS') return 'Basic';
        if (tech.name === 'GitHub Actions' || tech.name === 'Bitbucket') return 'Basic';
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

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Advanced': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Basic': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Learning': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
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
          icon: FiServer,
          emoji: '⚙️'
        };
      case 'frontend':
        return {
          gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
          name: 'Frontend',
          bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
          borderColor: 'border-emerald-200 dark:border-emerald-800',
          icon: FiCode,
          emoji: '💻'
        };
      case 'database':
        return {
          gradient: 'from-violet-500 via-purple-500 to-pink-500',
          name: 'Database',
          bgColor: 'bg-violet-50 dark:bg-violet-900/20',
          borderColor: 'border-violet-200 dark:border-violet-800',
          icon: FiServer,
          emoji: '🗄️'
        };
      case 'devops':
        return {
          gradient: 'from-orange-500 via-red-500 to-pink-500',
          name: 'DevOps',
          bgColor: 'bg-orange-50 dark:bg-orange-900/20',
          borderColor: 'border-orange-200 dark:border-orange-800',
          icon: FiTool,
          emoji: '🚀'
        };
      case 'tools':
        return {
          gradient: 'from-gray-600 via-slate-600 to-zinc-600',
          name: 'Tools',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20',
          borderColor: 'border-gray-200 dark:border-gray-800',
          icon: FiTool,
          emoji: '🛠️'
        };
      case 'cloud':
        return {
          gradient: 'from-sky-500 via-blue-500 to-indigo-500',
          name: 'Cloud',
          bgColor: 'bg-sky-50 dark:bg-sky-900/20',
          borderColor: 'border-sky-200 dark:border-sky-800',
          icon: FiServer,
          emoji: '☁️'
        };
      default:
        return {
          gradient: 'from-gray-500 to-slate-600',
          name: 'Other',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20',
          borderColor: 'border-gray-200 dark:border-gray-800',
          icon: FiCode,
          emoji: '🔧'
        };
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Controls */}
        <div className="flex justify-end items-center gap-4 mb-8">
          {/* Language Toggle */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
            <button
              onClick={() => setLocale('es')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                locale === 'es'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
            className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-full border border-primary-200 dark:border-primary-800 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <span className="text-primary-700 dark:text-primary-300 font-medium">
              {getGreeting()}! {t('home.welcomeMessage')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="space-y-3 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400">
              {t(personalInfo.title)}
            </p>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              {t(personalInfo.subtitle)}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            {t(personalInfo.bio)}
          </p>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/10 to-blue-500/10 pointer-events-none"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl shadow-xl animate-float"></div>
              <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">

          {/* Left Sidebar - Stats & Actions */}
          <div className="xl:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">2.7+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">{technologies.length}</div>
                  <div className="text-green-100 text-sm">Technologies</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">8+</div>
                  <div className="text-purple-100 text-sm">Projects</div>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <FiDownload className="w-5 h-5" />
              <div className="text-left">
                <div>{t('hero.downloadCV')}</div>
                <div className="text-sm opacity-90">
                  ({locale === 'es' ? 'ES' : 'EN'})
                </div>
              </div>
            </button>
          </div>

          {/* Center - Technologies (Main Focus) */}
          <div className="xl:col-span-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('skills.title')}
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                  <FiMousePointer className="w-4 h-4 animate-bounce" />
                  <p className="text-sm">Click on each category to see detailed technologies</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillCategories).map(([category, techs]) => {
                  const categoryConfig = getCategoryConfig(category);
                  const IconComponent = categoryConfig.icon;
                  const level = getCategoryLevel(category);

                  return (
                    <div
                      key={category}
                      onClick={() => openCategoryModal(category)}
                      className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                    >
                      <div className={`${categoryConfig.bgColor} ${categoryConfig.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>

                        {/* Click indicator animation */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                            <FiMousePointer className="w-3 h-3 animate-pulse" />
                            <span>Click</span>
                          </div>
                        </div>

                        {/* Animated background pulse */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* Icon and Emoji */}
                        <div className="flex items-center justify-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${categoryConfig.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                            <span className="text-2xl animate-pulse group-hover:scale-110 transition-transform duration-300">{categoryConfig.emoji}</span>
                          </div>
                        </div>

                        {/* Category Name */}
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 text-center mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {categoryConfig.name}
                        </h3>

                        {/* Level Badge */}
                        <div className="flex items-center justify-center mb-4">
                          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 group-hover:scale-110 ${getLevelBadgeColor(level)}`}>
                            {level}
                          </div>
                        </div>

                        {/* Tech Count */}
                        <div className="text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                            {techs.length} technologies
                          </p>
                        </div>

                        {/* Hover effect overlay with ripple animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                             style={{
                               background: `linear-gradient(45deg, transparent, ${categoryConfig.gradient.split(' ')[1]?.replace('from-', '') || '#3B82F6'}20, transparent)`,
                               animation: 'spin 3s linear infinite'
                             }}>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Contact */}
          <div className="xl:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('contact.title')}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <FiMail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Location</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                  Connect with me
                </p>
                <div className="flex justify-center gap-3">
                  {personalInfo.socialLinks.map((link, index) => {
                    const IconComponent = socialIcons[link.icon as keyof typeof socialIcons];
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-primary-500 hover:to-blue-600 text-gray-600 dark:text-gray-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
            <span className="text-sm font-medium">{t('common.exploreMessage')}</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
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
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
              {(() => {
                const categoryConfig = getCategoryConfig(selectedCategory);
                const techs = skillCategories[selectedCategory] || [];
                const level = getCategoryLevel(selectedCategory);

                return (
                  <>
                    {/* Modal Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${categoryConfig.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-2xl">{categoryConfig.emoji}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {categoryConfig.name} Technologies
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelBadgeColor(level)}`}>
                              {level}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {techs.length} technologies
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={closeCategoryModal}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
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
                            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="w-4 h-4 rounded-full shadow-sm"
                                style={{ backgroundColor: tech.color }}
                              ></div>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {tech.name}
                              </span>
                              <span className={`ml-auto text-sm font-medium ${getLevelColor(techLevel)}`}>
                                {techLevel}
                              </span>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                              <div
                                className="h-2 rounded-full transition-all duration-1000"
                                style={{
                                  backgroundColor: tech.color,
                                  width: techLevel === 'Intermediate' ? '60%' :
                                         techLevel === 'Basic' ? '40%' : '50%'
                                }}
                              ></div>
                            </div>

                            <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${getLevelBadgeColor(techLevel)}`}>
                              {techLevel}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Based on {techs.length} technologies in {categoryConfig.name.toLowerCase()} development
                        </p>
                        <button
                          onClick={closeCategoryModal}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
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
