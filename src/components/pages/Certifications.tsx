import React, { useState } from 'react';
import { FiAward, FiCalendar, FiDownload, FiExternalLink, FiFilter, FiUser } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';

interface Certification {
  id: string;
  title: string;
  provider: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  skills: string[];
  category: 'backend' | 'frontend' | 'devops' | 'database' | 'general';
  icon: string;
}

const certifications: Certification[] = [
  {
    id: 'docker-guide',
    title: 'Docker - Guía práctica de uso para desarrolladores',
    provider: 'Udemy - DevTalles',
    date: '2025-03',
    credentialUrl: 'https://www.udemy.com/certificate/UC-805ad3ee-653b-4edc-8e6e-9b2304f86b89/',
    skills: ['Docker', 'Containers', 'DevOps', 'Development Tools'],
    category: 'devops',
    icon: '🐳'
  },
  {
    id: 'spring-boot-university',
    title: 'Universidad de Spring Boot',
    provider: 'Udemy',
    date: '2023-12',
    credentialUrl: 'https://www.udemy.com/certificate/UC-12a8a53f-b66f-47a9-a507-adaca82cd2ca/',
    skills: ['Spring Boot', 'Java', 'Backend Development', 'Enterprise Applications'],
    category: 'backend',
    icon: '🍃'
  },
  {
    id: 'mysql-administration',
    title: 'Administración de MySQL: Seguridad y Optimización de la Base de Datos',
    provider: 'Alura',
    date: '2023',
    credentialUrl: 'https://app.aluracursos.com/certificate/fe818f82-ed70-4cf3-a08b-997684098759',
    skills: ['MySQL', 'Database Administration', 'Security', 'Optimization'],
    category: 'database',
    icon: '🗄️'
  },
  {
    id: 'design-patterns-java',
    title: 'Curso de Patrones de Diseño con Java',
    provider: 'Código Facilito',
    date: '2023-07',
    credentialId: '4dd1e894-1727-4b9f-b11f-34d5fcee950b',
    skills: ['Design Patterns', 'Java', 'Software Architecture', 'OOP'],
    category: 'backend',
    icon: '🏗️'
  }
];

export const Certifications: React.FC = () => {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<'all' | 'backend' | 'frontend' | 'devops' | 'database' | 'general'>('all');

  const filteredCertifications = certifications.filter(cert =>
    activeFilter === 'all' || cert.category === activeFilter
  );

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'backend':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          shadowColor: 'shadow-blue-500/25',
          badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
          borderColor: 'border-blue-200 dark:border-blue-800',
          name: '⚙️ Backend'
        };
      case 'frontend':
        return {
          gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
          shadowColor: 'shadow-emerald-500/25',
          badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
          borderColor: 'border-emerald-200 dark:border-emerald-800',
          name: '💻 Frontend'
        };
      case 'database':
        return {
          gradient: 'from-violet-500 via-purple-500 to-pink-500',
          shadowColor: 'shadow-violet-500/25',
          badgeColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
          borderColor: 'border-violet-200 dark:border-violet-800',
          name: '🗄️ Database'
        };
      case 'devops':
        return {
          gradient: 'from-orange-500 via-red-500 to-pink-500',
          shadowColor: 'shadow-orange-500/25',
          badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
          borderColor: 'border-orange-200 dark:border-orange-800',
          name: '🚀 DevOps'
        };
      case 'general':
        return {
          gradient: 'from-slate-500 via-gray-500 to-zinc-500',
          shadowColor: 'shadow-slate-500/25',
          badgeColor: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
          borderColor: 'border-slate-200 dark:border-slate-800',
          name: '📚 General'
        };
      default:
        return {
          gradient: 'from-gray-500 to-slate-600',
          shadowColor: 'shadow-gray-500/25',
          badgeColor: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
          borderColor: 'border-gray-200 dark:border-gray-800',
          name: 'Other'
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <FiAward className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          {t('certifications.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t('certifications.description')}
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mr-2 sm:mr-4 mb-2 sm:mb-0">
            <FiFilter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('common.filter')}:
            </span>
          </div>
          {['all', 'backend', 'frontend', 'devops', 'database', 'general'].map((filter) => {
            const isActive = activeFilter === filter;
            const config = filter !== 'all' ? getCategoryConfig(filter) : null;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {filter === 'all' ? t('common.all') :
                 config ? config.name : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">
            {certifications.length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {t('certifications.totalCertifications')}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
            {certifications.filter(c => c.category === 'backend').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Backend
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
            {certifications.filter(c => c.category === 'frontend').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Frontend
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">
            {certifications.filter(c => c.category === 'devops').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            DevOps
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCertifications.map((cert) => {
          const categoryConfig = getCategoryConfig(cert.category);
          return (
            <div
              key={cert.id}
              className={`relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] overflow-hidden ${categoryConfig.shadowColor}`}
            >
              {/* Elegant Header with Gradient */}
              <div className={`relative p-6 pb-4 bg-gradient-to-br ${categoryConfig.gradient} rounded-t-xl`}>
                <div className="flex items-center justify-between">
                  <div className="text-white drop-shadow-lg">
                    <div className="text-3xl">{cert.icon}</div>
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                    {categoryConfig.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <FiUser className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.provider}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                  <FiCalendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                {/* Skills */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('certifications.skillsLearned')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {cert.downloadUrl && (
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = cert.downloadUrl!;
                        link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
                        link.target = '_blank';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${categoryConfig.gradient} hover:shadow-lg transition-all duration-200 shadow-sm rounded-lg`}
                    >
                      <FiDownload className="w-4 h-4" />
                      {t('certifications.downloadCertificate')}
                    </button>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-current rounded-lg transition-all duration-200 hover:shadow-md ${
                        cert.downloadUrl
                          ? 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                          : `text-white bg-gradient-to-r ${categoryConfig.gradient}`
                      }`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      {t('certifications.viewCredential')}
                    </a>
                  )}

                  {!cert.downloadUrl && !cert.credentialUrl && (
                    <div className="text-center py-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {t('certifications.noCredentialAvailable')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCertifications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {t('certifications.noResults')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('certifications.tryDifferentFilter')}
          </p>
        </div>
      )}
    </div>
  );
};
