import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  FiAward,
  FiCalendar,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiPackage,
  FiTool,
} from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { Badge } from '../ui/Badge';
import { SectionCard } from '../ui/SectionCard';

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
}

const certifications: Certification[] = [
  {
    id: 'docker-guide',
    title: 'Docker - Guía práctica de uso para desarrolladores',
    provider: 'Udemy - DevTalles',
    date: '2025-03',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-805ad3ee-653b-4edc-8e6e-9b2304f86b89/',
    skills: ['Docker', 'Containers', 'DevOps', 'Development Tools'],
    category: 'devops',
  },
  {
    id: 'spring-boot-university',
    title: 'Universidad de Spring Boot',
    provider: 'Udemy',
    date: '2023-12',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-12a8a53f-b66f-47a9-a507-adaca82cd2ca/',
    skills: [
      'Spring Boot',
      'Java',
      'Backend Development',
      'Enterprise Applications',
    ],
    category: 'backend',
  },
  {
    id: 'mysql-administration',
    title:
      'Administración de MySQL: Seguridad y Optimización de la Base de Datos',
    provider: 'Alura',
    date: '2023',
    credentialUrl:
      'https://app.aluracursos.com/certificate/fe818f82-ed70-4cf3-a08b-997684098759',
    skills: ['MySQL', 'Database Administration', 'Security', 'Optimization'],
    category: 'database',
  },
  {
    id: 'design-patterns-java',
    title: 'Curso de Patrones de Diseño con Java',
    provider: 'Código Facilito',
    date: '2023-07',
    credentialId: '4dd1e894-1727-4b9f-b11f-34d5fcee950b',
    skills: ['Design Patterns', 'Java', 'Software Architecture', 'OOP'],
    category: 'backend',
  },
];

export const Certifications: React.FC = () => {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'backend' | 'frontend' | 'devops' | 'database' | 'general'
  >('all');

  const filteredCertifications = certifications.filter(
    cert => activeFilter === 'all' || cert.category === activeFilter
  );

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'backend':
        return {
          variant: 'info' as const,
          name: 'Backend',
          icon: FiCode,
        };
      case 'frontend':
        return {
          variant: 'success' as const,
          name: 'Frontend',
          icon: FiPackage,
        };
      case 'database':
        return {
          variant: 'warning' as const,
          name: 'Database',
          icon: FiDatabase,
        };
      case 'devops':
        return {
          variant: 'error' as const,
          name: 'DevOps',
          icon: FiTool,
        };
      case 'general':
        return {
          variant: 'default' as const,
          name: 'General',
          icon: FiAward,
        };
      default:
        return {
          variant: 'default' as const,
          name: 'General',
          icon: FiAward,
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiAward className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {t('certifications.title')}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('certifications.description')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap gap-2 p-1 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            {(
              [
                'all',
                'backend',
                'frontend',
                'devops',
                'database',
                'general',
              ] as const
            ).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {filter === 'all' ? 'All' : getCategoryConfig(filter).name}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCertifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertifications.map(cert => {
              const categoryConfig = getCategoryConfig(cert.category);

              const IconComponent = categoryConfig.icon;

              return (
                <SectionCard key={cert.id} className="hover-lift">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {cert.provider}
                          </p>
                        </div>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            title="View Certificate"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant={categoryConfig.variant} size="sm">
                          {categoryConfig.name}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <FiCalendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <Badge key={index} variant="default" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {cert.credentialId && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Credential ID:</span>{' '}
                            {cert.credentialId}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </SectionCard>
              );
            })}
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
            <FiAward className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No certifications found
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Try changing the filter to see more certifications.
            </p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionCard className="text-center" padding="sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Total Certifications
            </p>
          </SectionCard>

          <SectionCard className="text-center" padding="sm">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              {new Set(certifications.map(c => c.category)).size}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Categories Covered
            </p>
          </SectionCard>

          <SectionCard className="text-center" padding="sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {new Set(certifications.flatMap(c => c.skills)).size}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Skills Validated
            </p>
          </SectionCard>
        </div>
      </div>
    </motion.div>
  );
};
