// Trabajo profesional: código confidencial, así que solo se documenta el
// alcance y el resultado. Separado de `projects.ts` porque no entra en el mapa
// de áreas ni en el índice filtrable.

export type ProfessionalProject = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
};

export type Employer = {
  name: string;
  role: string;
  period: string;
  /** Qué tipo de trabajo se hizo allí, en una frase. */
  focus: string;
};

// Orden cronológico inverso: el trabajo más reciente primero.
export const EMPLOYERS: Employer[] = [
  {
    name: 'TotalDev',
    role: 'Fullstack Developer',
    period: 'Jul 2025 – Mar 2026',
    focus:
      'Interbank messaging, inventory platforms and content management for corporate clients.',
  },
  {
    name: 'PARQ',
    role: 'Fullstack Developer',
    period: 'Nov 2024 – Jul 2025',
    focus:
      'NestJS microservices over a shared PostgreSQL database, and electronic invoicing for the Colombian market.',
  },
  {
    name: 'Serempre',
    role: 'Backend Developer',
    period: 'Jan 2023 – Nov 2024',
    focus:
      'Regional benefits and e-learning platforms on Laravel, with heavy SQL reporting.',
  },
];

export const PROFESSIONAL_PROJECTS: ProfessionalProject[] = [
  {
    title: 'Biosimtec — Corporate Site with Custom CMS',
    company: 'TotalDev',
    description:
      'Evolved a React site (from Figma designs) into a fully manageable platform with a custom Filament CMS, TanStack Query caching, role & permission system and skeleton loading for a smoother UX.',
    technologies: ['React', 'Laravel', 'MySQL', 'Docker', 'Filament'],
    liveUrl: 'https://www.biosimtec.com/',
  },
  {
    title: 'Chivas House — Event Management Platform',
    company: 'TotalDev',
    description:
      'Platform for an exclusive Chivas Regal event: age validation, pseudo-random guest code generation, QR generation/reading, automated email delivery and a PWA for staff working with limited connectivity.',
    technologies: ['React', 'Laravel', 'TypeScript', 'PWA'],
    liveUrl: 'https://chivas-house.co/age-validation',
  },
  {
    title: 'Invex — Electoral Inventory Platform',
    company: 'TotalDev',
    description:
      'Inventory platform for Thomas Greg & Sons handling Colombian electoral processes: role/permission system segmented by municipality, optimized SQL views, dynamic dashboards and full traceability.',
    technologies: ['Laravel', 'React', 'MySQL', 'Docker'],
    liveUrl: 'https://www.invex.com.co/login/',
  },
  {
    title: 'Materiales de la Sabana — Inventory System',
    company: 'TotalDev',
    description:
      'Hybrid React + Laravel inventory system with a Filament admin panel: merchandise inflow/outflow management, reporting, role module and QR-based vehicle identification.',
    technologies: ['React', 'Laravel', 'MySQL', 'Filament'],
  },
  {
    title: 'PARQ — Microservices Backend',
    company: 'PARQ',
    description:
      'Maintained and evolved five NestJS microservices over a shared PostgreSQL database: legacy refactoring, pagination, bulk-load queues, timezone-aware cron jobs and Swagger documentation.',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'TypeORM', 'Swagger'],
    liveUrl: 'https://app.parqco.com/sign-in',
  },
  {
    title: 'Electronic Billing Middleware',
    company: 'PARQ',
    description:
      'Electronic invoicing middleware integrating with Colombian providers (Siigo, Alegra, SATCOM), with transaction logging, error handling and regulatory compliance for high-volume processing.',
    technologies: ['Laravel', 'PHP', 'PostgreSQL'],
  },
  {
    title: 'Membeers — AB InBev Benefits Platform',
    company: 'Serempre',
    description:
      'Backend for a regional corporate benefits platform across 5+ Latin American countries: scalable Laravel architecture, complex MySQL/PL-SQL reporting, design patterns and automated cron jobs.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Story Training — Educational Platform',
    company: 'Serempre',
    description:
      'Evolved an educational platform with international clients in Spain: Laravel backend, Orchid admin panel, custom Moodle plugin and Cloudinary integration for multimedia content.',
    technologies: ['Laravel', 'Moodle', 'Cloudinary'],
  },
];
