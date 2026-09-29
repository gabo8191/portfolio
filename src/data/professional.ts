// Professional work with public descriptions and no client source code.

export type ProfessionalProject = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  /** When I worked on it, taken from my commit history. */
  period?: string;
  liveUrl?: string;
};

export type Employer = {
  name: string;
  role: string;
  period: string;
  /** The main kind of work done for this employer. */
  focus: string;
};

// Reverse chronological order.
export const EMPLOYERS: Employer[] = [
  {
    name: 'Keyrus Colombia',
    role: 'BI & Data Analytics Intern',
    period: 'Jul 2026 – Present',
    focus:
      'Data analytics and an internal Django application that analyzes files and estimates effort for the team.',
  },
  {
    name: 'TotalDev',
    role: 'Freelance Fullstack Developer',
    period: 'Feb 2025 – Mar 2026',
    focus:
      'Interbank messaging, inventory systems, event operations and content management for clients in several industries.',
  },
  {
    name: 'PARQ',
    role: 'Fullstack Developer',
    period: 'Nov 2024 – Jul 2025',
    focus:
      'NestJS services on a shared PostgreSQL database, a Laravel electronic invoicing middleware and production data diagnosis.',
  },
  {
    name: 'SEREMPRE',
    role: 'Backend Developer',
    period: 'Jan 2023 – Nov 2024',
    focus:
      'Laravel backend and L2/L3 production support for regional benefits, e-learning and insurance platforms.',
  },
];

export const PROFESSIONAL_PROJECTS: ProfessionalProject[] = [
  {
    title: 'Internal Effort Estimation Tool',
    company: 'Keyrus Colombia',
    period: 'Jul 2026 – Present',
    description:
      'Designed and built an internal Django application that analyzes files and estimates effort for the team. REST API with DRF, background processing with Celery and Redis, PostgreSQL persistence and automated tests in GitHub Actions.',
    technologies: ['Python', 'Django', 'DRF', 'Celery', 'PostgreSQL'],
  },
  {
    title: 'SWIFT MT Support for an Interbank Gateway',
    company: 'TotalDev',
    period: 'Aug – Sep 2025',
    description:
      'Added SWIFT MT support to an interbank gateway in Java/Apache Camel: MT103 and MT202 validation and automated conversion to ISO 20022.',
    technologies: ['Java', 'Apache Camel', 'SWIFT', 'ISO 20022'],
  },
  {
    title: 'Electoral Inventory Platform',
    company: 'TotalDev',
    period: 'Jul – Oct 2025',
    description:
      'Developed the core modules of an inventory platform for electoral operations in Laravel and React: bulk imports with row-level validation, regional permissions, Excel reports and queued PDF generation.',
    technologies: ['Laravel', 'React', 'MySQL', 'Queues', 'Zod'],
  },
  {
    title: 'Industrial Plant Inventory PWA',
    company: 'TotalDev',
    period: 'Aug – Oct 2025',
    description:
      'Built a QR-scanning PWA for plant operators and its Laravel/Filament backend for inventory control and reports.',
    technologies: ['React', 'PWA', 'Laravel', 'Filament', 'MySQL'],
  },
  {
    title: 'Event Guest Registration',
    company: 'TotalDev',
    period: 'Nov – Dec 2025',
    description:
      'Built guest registration with single-use QR codes and a validation app for event staff.',
    technologies: ['React', 'Laravel', 'TypeScript', 'PWA'],
  },
  {
    title: 'Corporate Site with Custom CMS',
    company: 'TotalDev',
    period: 'Nov – Dec 2025',
    description:
      'Built a Laravel/Filament CMS so nontechnical users can update their site, with a React front end.',
    technologies: ['React', 'Laravel', 'Filament', 'TanStack Query'],
  },
  {
    title: 'Inspection Operations Platform',
    company: 'TotalDev',
    period: 'Apr 2025; Jul – Oct 2025',
    description:
      'Built modules for claims, field visits and visit reports with review and approval workflows.',
    technologies: ['Laravel', 'React', 'MySQL'],
  },
  {
    title: 'Insurance Data Reporting',
    company: 'TotalDev',
    period: 'Apr – Jul 2025',
    description:
      'Validated data and maintained reports with SQL for an insurance industry client.',
    technologies: ['Laravel', 'SQL', 'Reporting'],
  },
  {
    title: 'Field Operations Platform',
    company: 'TotalDev',
    period: 'Jun 2025',
    description:
      'Built management views and their API endpoints for a field team tool.',
    technologies: ['Laravel', 'React'],
  },
  {
    title: 'Electronic Billing Middleware',
    company: 'PARQ',
    period: 'Jan – Jul 2025',
    description:
      'Extended the SATCOM, Siigo and Alegra connectors of a Laravel invoicing middleware with queued resend of failed invoices and per-request tracing, and connected membership invoicing from the NestJS services.',
    technologies: ['Laravel', 'NestJS', 'Queues', 'PostgreSQL'],
  },
  {
    title: 'Parking Services Backend',
    company: 'PARQ',
    period: 'Dec 2024 – Jun 2025',
    description:
      'Built country-specific rates, queued bulk membership creation, sales reports and consistent timezone handling in NestJS services on PostgreSQL, and traced production data issues from the database into the services.',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'Angular', 'Swagger'],
    liveUrl: 'https://app.parqco.com/sign-in',
  },
  {
    title: 'Corporate Website',
    company: 'PARQ',
    period: 'May – Jun 2025',
    description:
      'Rebuilt the corporate site in Next.js with server rendering, i18n and SEO.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'i18n'],
    liveUrl: 'https://parqtech.com/',
  },
  {
    title: 'Regional Benefits Platform',
    company: 'SEREMPRE',
    period: 'Mar 2023 – Jun 2024',
    description:
      'Built Laravel APIs for a benefits platform in more than five Latin American countries, with queued payment uploads and reports, and diagnosed L2/L3 incidents through SQL, code and Sentry.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Queues'],
  },
  {
    title: 'Educational Platform',
    company: 'SEREMPRE',
    period: 'Jun – Aug 2023',
    description:
      'Evolved an educational platform with a Laravel backend, a Moodle LTI integration and Cloudinary for multimedia content.',
    technologies: ['Laravel', 'Moodle', 'Cloudinary'],
  },
  {
    title: 'Insurance Data Integration',
    company: 'SEREMPRE',
    period: 'Aug – Nov 2023',
    description:
      'Built an insurance policy lookup between systems with Laravel and Vue, tested end to end in Postman.',
    technologies: ['Laravel', 'PHP', 'Vue', 'SQL'],
  },
];
