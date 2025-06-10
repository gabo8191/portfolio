import type { Experience, PersonalInfo, Project, Technology } from '../types';
import { getImagePath } from '../utils/paths';

export const personalInfo: PersonalInfo = {
  name: 'Gabriel Fernando Castillo Mendieta',
  title: 'hero.title',
  subtitle: 'hero.subtitle',
  email: 'gabo8191@gmail.com',
  phone: '+57 318 8708253',
  location: 'Tunja, Colombia',
  bio: 'about.description',
  avatar: getImagePath('profile/gabriel-avatar.jpg'),
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/gabo8191',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/gabodev8191/',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/@gcastillo8191',
      icon: 'twitter',
    },
  ],
};

export const technologies: Technology[] = [
  // Backend - Core Strengths (Intermediate to Advanced)
  { name: 'PHP', category: 'backend', color: '#777BB4' }, // Intermediate
  { name: 'Laravel', category: 'backend', color: '#FF2D20' }, // Intermediate
  { name: 'NestJS', category: 'backend', color: '#E0234E' }, // Intermediate
  { name: 'Node.js', category: 'backend', color: '#339933' }, // Intermediate
  { name: 'Java', category: 'backend', color: '#ED8B00' }, // Intermediate
  { name: 'Spring Boot', category: 'backend', color: '#6DB33F' }, // Intermediate
  { name: 'Express.js', category: 'backend', color: '#000000' }, // Intermediate

  // Backend - Basic Level
  { name: 'Flask', category: 'backend', color: '#000000' }, // Basic
  { name: 'Python', category: 'backend', color: '#3776AB' }, // Basic
  { name: 'C++', category: 'backend', color: '#00599C' }, // Basic

  // Frontend - Intermediate Level
  { name: 'JavaScript', category: 'frontend', color: '#F7DF1E' }, // Intermediate
  { name: 'TypeScript', category: 'frontend', color: '#3178C6' }, // Intermediate
  { name: 'React', category: 'frontend', color: '#61DAFB' }, // Intermediate
  { name: 'Next.js', category: 'frontend', color: '#000000' }, // Intermediate
  { name: 'TailwindCSS', category: 'frontend', color: '#06B6D4' }, // Intermediate
  { name: 'Bootstrap', category: 'frontend', color: '#7952B3' }, // Intermediate

  // Frontend - Basic Level
  { name: 'Vue.js', category: 'frontend', color: '#4FC08D' }, // Basic
  { name: 'Angular', category: 'frontend', color: '#DD0031' }, // Basic

  // Databases - Intermediate Level
  { name: 'MySQL', category: 'database', color: '#4479A1' }, // Intermediate
  { name: 'PostgreSQL', category: 'database', color: '#336791' }, // Intermediate
  { name: 'Prisma', category: 'database', color: '#2D3748' }, // Intermediate (ORM)
  { name: 'TypeORM', category: 'database', color: '#FF6B35' }, // Intermediate (ORM)

  // Databases - Basic Level
  { name: 'Redis', category: 'database', color: '#DC382D' }, // Basic

  // DevOps & Infrastructure - Basic/Learning Level
  { name: 'Docker', category: 'devops', color: '#2496ED' }, // Basic
  { name: 'AWS', category: 'devops', color: '#232F3E' }, // Basic
  { name: 'Git', category: 'devops', color: '#F05032' }, // Intermediate
  { name: 'GitHub Actions', category: 'devops', color: '#2088FF' }, // Basic
  { name: 'Bitbucket', category: 'devops', color: '#0052CC' }, // Basic
  { name: 'SonarQube', category: 'devops', color: '#4E9BCD' }, // Basic

  // Development Tools
  { name: 'Swagger', category: 'tools', color: '#85EA2D' },
  { name: 'Postman', category: 'tools', color: '#FF6C37' },
  { name: 'Moodle', category: 'tools', color: '#FF7800' }, // Basic
  { name: 'Cloudinary', category: 'tools', color: '#3448C5' },

  // Testing & Quality
  { name: 'Jest', category: 'backend', color: '#C21325' },
  { name: 'PHPUnit', category: 'backend', color: '#777BB4' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'projects.portfolioWebsite.title',
    description: 'projects.portfolioWebsite.description',
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'TypeScript')!,
      technologies.find(t => t.name === 'TailwindCSS')!,
    ],
    githubUrl: 'https://github.com/gabo8191/portfolio',
    category: 'frontend',
    completedAt: '2024-12-16',
    featured: true,
  },
  {
    id: '2',
    title: 'projects.arduinoEsp32Communication.title',
    description: 'projects.arduinoEsp32Communication.description',
    technologies: [
      technologies.find(t => t.name === 'C++')!,
      technologies.find(t => t.name === 'Python')!,
      technologies.find(t => t.name === 'Flask')!,
    ],
    githubUrl: 'https://github.com/gabo8191/esp32_arduino_middleware',
    category: 'proof-of-concept',
    completedAt: '2024-11-15',
  },
  {
    id: '3',
    title: 'projects.almendrosBackend.title',
    description: 'projects.almendrosBackend.description',
    technologies: [
      technologies.find(t => t.name === 'NestJS')!,
      technologies.find(t => t.name === 'TypeScript')!,
      technologies.find(t => t.name === 'Prisma')!,
      technologies.find(t => t.name === 'Swagger')!,
      technologies.find(t => t.name === 'GitHub Actions')!,
      technologies.find(t => t.name === 'SonarQube')!,
    ],
    githubUrl: 'https://github.com/gabo8191/backend-almendros',
    category: 'backend',
    completedAt: '2024-10-20',
    featured: true,
  },
  {
    id: '4',
    title: 'projects.customCipherAlgorithm.title',
    description: 'projects.customCipherAlgorithm.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'JavaScript')!,
      technologies.find(t => t.name === 'TailwindCSS')!,
    ],
    githubUrl: 'https://github.com/gabo8191/cipher_algorithm',
    category: 'proof-of-concept',
    completedAt: '2024-09-30',
  },
  {
    id: '5',
    title: 'projects.fleetManagement.title',
    description: 'projects.fleetManagement.description',
    technologies: [
      technologies.find(t => t.name === 'Spring Boot')!,
      technologies.find(t => t.name === 'Java')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'Docker')!,
      technologies.find(t => t.name === 'GitHub Actions')!,
      technologies.find(t => t.name === 'Bootstrap')!,
    ],
    githubUrl: 'https://github.com/gabo8191/fleet-management-system',
    category: 'backend',
    completedAt: '2024-09-15',
    featured: true,
  },
  {
    id: '6',
    title: 'projects.kafkaRedisMicroservices.title',
    description: 'projects.kafkaRedisMicroservices.description',
    technologies: [
      technologies.find(t => t.name === 'Redis')!,
      technologies.find(t => t.name === 'Docker')!,
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'Python')!,
    ],
    githubUrl: 'https://github.com/gabo8191/lab5-kafka-redis',
    category: 'devops',
    completedAt: '2024-11-15',
    featured: true,
  },
  {
    id: '7',
    title: 'projects.bullyAlgorithm.title',
    description: 'projects.bullyAlgorithm.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'Docker')!,
    ],
    githubUrl: 'https://github.com/gabo8191/lab4-bully',
    category: 'devops',
    completedAt: '2024-11-10',
  },
  {
    id: '8',
    title: 'projects.redisTopTen.title',
    description: 'projects.redisTopTen.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'Redis')!,
    ],
    githubUrl: 'https://github.com/gabo8191/redis-task1',
    category: 'backend',
    completedAt: '2024-10-28',
  },
  {
    id: '9',
    title: 'projects.berkeleyAlgorithm.title',
    description: 'projects.berkeleyAlgorithm.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
    ],
    githubUrl: 'https://github.com/gabo8191/lab3-berkeley',
    category: 'devops',
    completedAt: '2024-10-15',
  },
  {
    id: '10',
    title: 'projects.serverAutoscaling.title',
    description: 'projects.serverAutoscaling.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'Docker')!,
    ],
    githubUrl: 'https://github.com/gabo8191/Lab2-autoscalling',
    category: 'devops',
    completedAt: '2024-10-05',
  },
  {
    id: '11',
    title: 'projects.loadBalancerMiddleware.title',
    description: 'projects.loadBalancerMiddleware.description',
    technologies: [
      technologies.find(t => t.name === 'Express.js')!,
      technologies.find(t => t.name === 'Docker')!,
    ],
    githubUrl: 'https://github.com/gabo8191/lab-load-balancer',
    category: 'devops',
    completedAt: '2024-09-20',
  },
  {
    id: '12',
    title: 'projects.linkedListProducts.title',
    description: 'projects.linkedListProducts.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/linkedListLab',
    category: 'backend',
    completedAt: '2024-05-30',
  },
  {
    id: '13',
    title: 'projects.bracketsVerifier.title',
    description: 'projects.bracketsVerifier.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/LabStacksBrackets',
    category: 'backend',
    completedAt: '2024-05-15',
  },
  {
    id: '14',
    title: 'projects.mixedQueuesStacks.title',
    description: 'projects.mixedQueuesStacks.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/LabMixedQueuesAndStacks',
    category: 'backend',
    completedAt: '2024-05-01',
  },
  {
    id: '15',
    title: 'projects.priorityPrintQueue.title',
    description: 'projects.priorityPrintQueue.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/LabQueueOrderPriority',
    category: 'backend',
    completedAt: '2024-04-20',
  },
  {
    id: '16',
    title: 'projects.queueRootOrdering.title',
    description: 'projects.queueRootOrdering.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/LabQueueRootOrder',
    category: 'backend',
    completedAt: '2024-04-10',
  },
  {
    id: '17',
    title: 'projects.binaryTreeTranslator.title',
    description: 'projects.binaryTreeTranslator.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
    ],
    githubUrl: 'https://github.com/gabo8191/LabBinaryTree',
    category: 'backend',
    completedAt: '2024-03-30',
  },
  {
    id: '18',
    title: 'projects.oracleDocker.title',
    description: 'projects.oracleDocker.description',
    technologies: [
      technologies.find(t => t.name === 'Docker')!,
    ],
    githubUrl: 'https://github.com/gabo8191/OracleDBDocker',
    category: 'devops',
    completedAt: '2024-03-15',
  },
  {
    id: '19',
    title: 'projects.sqlAccidentAnalytics.title',
    description: 'projects.sqlAccidentAnalytics.description',
    technologies: [
      technologies.find(t => t.name === 'MySQL')!,
    ],
    githubUrl: 'https://github.com/gabo8191/ProjectSQL',
    category: 'database',
    completedAt: '2024-02-28',
  },
  {
    id: '20',
    title: 'projects.unitySimulationGame.title',
    description: 'projects.unitySimulationGame.description',
    technologies: [
      technologies.find(t => t.name === 'C++')!,
    ],
    githubUrl: 'https://github.com/gabo8191/SimulationGame',
    category: 'proof-of-concept',
    completedAt: '2024-02-10',
  },
  {
    id: '21',
    title: 'projects.pseudorandomGenerator.title',
    description: 'projects.pseudorandomGenerator.description',
    technologies: [
      technologies.find(t => t.name === 'Flask')!,
      technologies.find(t => t.name === 'Python')!,
    ],
    githubUrl: 'https://github.com/gabo8191/pseudorandom-numbers-flask',
    category: 'backend',
    completedAt: '2024-01-25',
  },
];

// Professional Work Projects (Confidential - No public repositories)
export const professionalProjects = [
  // PARQ Projects
  {
    id: 'parq-1',
    company: 'PARQ',
    title: 'professionalProjects.parqMicroservices.title',
    description: 'professionalProjects.parqMicroservices.description',
    technologies: [
      technologies.find(t => t.name === 'NestJS')!,
      technologies.find(t => t.name === 'Swagger')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'Docker')!,
    ],
    period: 'November 2024 - Present',
    category: 'Backend Development',
  },
  {
    id: 'parq-2',
    company: 'PARQ',
    title: 'professionalProjects.parqBillingMiddleware.title',
    description: 'professionalProjects.parqBillingMiddleware.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'PHP')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'Postman')!,
    ],
    period: 'November 2024 - Present',
    category: 'Backend Development',
  },
  {
    id: 'parq-3',
    company: 'PARQ',
    title: 'professionalProjects.parqAngularModules.title',
    description: 'professionalProjects.parqAngularModules.description',
    technologies: [
      technologies.find(t => t.name === 'Angular')!,
      technologies.find(t => t.name === 'TypeScript')!,
    ],
    period: 'November 2024 - Present',
    category: 'Frontend Development',
  },
  {
    id: 'parq-4',
    company: 'PARQ',
    title: 'professionalProjects.parqReactModules.title',
    description: 'professionalProjects.parqReactModules.description',
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'JavaScript')!,
    ],
    period: 'November 2024 - Present',
    category: 'Frontend Development',
  },
  {
    id: 'parq-5',
    company: 'PARQ',
    title: 'professionalProjects.parqNextjsMigration.title',
    description: 'professionalProjects.parqNextjsMigration.description',
    technologies: [
      technologies.find(t => t.name === 'Next.js')!,
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'TypeScript')!,
    ],
    period: 'November 2024 - Present',
    category: 'Frontend Development',
  },

  // Serempre Projects
  {
    id: 'serempre-1',
    company: 'Serempre',
    title: 'professionalProjects.serempre.membeers.title',
    description: 'professionalProjects.serempre.membeers.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'PHP')!,
      technologies.find(t => t.name === 'MySQL')!,
    ],
    period: 'January 2023 - November 2024',
    category: 'Backend Development',
  },
  {
    id: 'serempre-2',
    company: 'Serempre',
    title: 'professionalProjects.serempre.fasecolda.title',
    description: 'professionalProjects.serempre.fasecolda.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'Vue.js')!,
      technologies.find(t => t.name === 'Bootstrap')!,
      technologies.find(t => t.name === 'Postman')!,
    ],
    period: 'January 2023 - November 2024',
    category: 'Full-Stack Development',
  },
  {
    id: 'serempre-3',
    company: 'Serempre',
    title: 'professionalProjects.serempre.storyTraining.title',
    description: 'professionalProjects.serempre.storyTraining.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'Moodle')!,
      technologies.find(t => t.name === 'Cloudinary')!,
    ],
    period: 'January 2023 - November 2024',
    category: 'Backend Development',
  },
  {
    id: 'serempre-4',
    company: 'Serempre',
    title: 'professionalProjects.serempre.evaluationSystem.title',
    description: 'professionalProjects.serempre.evaluationSystem.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'Bootstrap')!,
      technologies.find(t => t.name === 'MySQL')!,
    ],
    period: 'January 2023 - November 2024',
    category: 'Full-Stack Development',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'experience.parq.title',
    company: 'PARQ',
    period: 'experience.parq.period',
    description: 'experience.parq.description',
    technologies: [
      technologies.find(t => t.name === 'NestJS')!,
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Angular')!,
      technologies.find(t => t.name === 'Next.js')!,
      technologies.find(t => t.name === 'TypeORM')!,
      technologies.find(t => t.name === 'Swagger')!,
    ],
    type: 'work',
  },
  {
    id: '2',
    title: 'experience.serempre.title',
    company: 'Serempre',
    period: 'experience.serempre.period',
    description: 'experience.serempre.description',
    technologies: [
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'PHP')!,
      technologies.find(t => t.name === 'Vue.js')!,
      technologies.find(t => t.name === 'MySQL')!,
      technologies.find(t => t.name === 'Docker')!,
    ],
    type: 'work',
  },
  {
    id: '3',
    title: 'experience.senaIntern.title',
    company: 'Serempre',
    period: 'experience.senaIntern.period',
    description: 'experience.senaIntern.description',
    technologies: [
      technologies.find(t => t.name === 'PHP')!,
      technologies.find(t => t.name === 'Laravel')!,
      technologies.find(t => t.name === 'MySQL')!,
    ],
    type: 'work',
  },
  {
    id: '4',
    title: 'experience.uptc.title',
    company: 'experience.uptc.company',
    period: 'experience.uptc.period',
    description: 'experience.uptc.description',
    technologies: [
      technologies.find(t => t.name === 'Java')!,
      technologies.find(t => t.name === 'Spring Boot')!,
      technologies.find(t => t.name === 'MySQL')!,
    ],
    type: 'education',
  },
  {
    id: '5',
    title: 'experience.sena.title',
    company: 'SENA',
    period: 'experience.sena.period',
    description: 'experience.sena.description',
    technologies: [
      technologies.find(t => t.name === 'PHP')!,
      technologies.find(t => t.name === 'MySQL')!,
      technologies.find(t => t.name === 'JavaScript')!,
    ],
    type: 'education',
  },
];
