// Professional work with public descriptions and no client source code.

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
      'Analytics and an internal Django tool for Power BI to Tableau migration estimates. The team uses its estimates; formal application deployment is pending.',
  },
  {
    name: 'TotalDev',
    role: 'Freelance Fullstack Developer',
    period: 'Feb 2025 – Mar 2026',
    focus:
      'Interbank messaging, inventory, field operations and content management. Freelance work overlapped with PARQ through Jul 2025.',
  },
  {
    name: 'PARQ',
    role: 'Fullstack Developer',
    period: 'Nov 2024 – Jul 2025',
    focus:
      'NestJS services sharing PostgreSQL, electronic invoicing integrations and production data diagnosis.',
  },
  {
    name: 'SEREMPRE',
    role: 'Backend Developer',
    period: 'Jan 2023 – Nov 2024',
    focus:
      'Laravel backend and L2/L3 production support for regional benefits and e-learning platforms.',
  },
];

export const PROFESSIONAL_PROJECTS: ProfessionalProject[] = [
  {
    title: 'PBIX Migration Estimation Tool',
    company: 'Keyrus Colombia',
    description:
      'Designed and built an internal Django application that analyzes PBIX files and estimates Power BI to Tableau migration work. Built DRF APIs, Celery/Redis jobs, PostgreSQL persistence and Excel reporting. The team uses its estimates; formal deployment is pending.',
    technologies: ['Python', 'Django', 'DRF', 'Celery', 'PostgreSQL'],
  },
  {
    title: 'Interbank Message Mapping',
    company: 'TotalDev',
    description:
      'Worked on MT message reception and created JSON mapping files for MT to MX and MX to MT conversion within a Java/Apache Camel gateway using SWIFT and ISO 20022 formats.',
    technologies: ['Java', 'Apache Camel', 'SWIFT', 'ISO 20022'],
  },
  {
    title: 'Biosimtec — Corporate Site with Custom CMS',
    company: 'TotalDev',
    description:
      'Built a Laravel/Filament content management backend and React interfaces so nontechnical users could update site content. Backend content caches are invalidated when relevant records change.',
    technologies: ['React', 'Laravel', 'MySQL', 'Docker', 'Filament'],
    liveUrl: 'https://www.biosimtec.com/',
  },
  {
    title: 'Chivas House — Event Management Platform',
    company: 'TotalDev',
    description:
      'Built guest registration linked to invitation codes, one-use QR validation and event-driven welcome emails, with a PWA for staff working with limited connectivity.',
    technologies: ['React', 'Laravel', 'TypeScript', 'PWA'],
    liveUrl: 'https://chivas-house.co/age-validation',
  },
  {
    title: 'Invex — Electoral Inventory Platform',
    company: 'TotalDev',
    description:
      'Inventory platform for electoral operations: product and record imports with row-level error reporting, regional permissions and reports, SQL views, and queued PDF/ZIP generation.',
    technologies: ['Laravel', 'React', 'MySQL', 'Docker'],
    liveUrl: 'https://www.invex.com.co/login/',
  },
  {
    title: 'Materiales de la Sabana — Inventory System',
    company: 'TotalDev',
    description:
      'React and Laravel/Filament inventory system covering stock receipts and issues, production with raw materials, monthly reports and QR-based vehicle identification.',
    technologies: ['React', 'Laravel', 'MySQL', 'Filament'],
  },
  {
    title: 'Inspection Operations Platform',
    company: 'TotalDev',
    description:
      'Contributed to backend workflows for visits, laboratory and microbiology samples, claims and related inspection records.',
    technologies: ['Laravel', 'PHP'],
  },
  {
    title: 'Field Operations Platform',
    company: 'TotalDev',
    description:
      'Contributed to backend workflows for campaigns, staff check-ins and check-outs, surveys and supervisor forms.',
    technologies: ['Laravel', 'PHP'],
  },
  {
    title: 'PARQ — Parking Services Backend',
    company: 'PARQ',
    description:
      'Maintained NestJS services sharing a PostgreSQL database, investigating production data inconsistencies and working on pagination, queued bulk loads, scheduled jobs and OpenAPI documentation.',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'TypeORM', 'Swagger'],
    liveUrl: 'https://app.parqco.com/sign-in',
  },
  {
    title: 'Electronic Billing Middleware',
    company: 'PARQ',
    description:
      'Implemented connectors for SATCOM, Siigo and Alegra in a NestJS electronic invoicing service, including transaction tracing and provider error handling.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Membeers — AB InBev Benefits Platform',
    company: 'SEREMPRE',
    description:
      'Built Laravel APIs for a regional benefits platform and investigated L2/L3 production incidents through SQL, code and Sentry. Worked on reporting, queued jobs and scheduled processes. Joined the Membeers backend team as a SENA intern.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Story Training — Educational Platform',
    company: 'SEREMPRE',
    description:
      'Evolved an educational platform with international clients in Spain: Laravel backend, Orchid admin panel, custom Moodle plugin and Cloudinary integration for multimedia content.',
    technologies: ['Laravel', 'Moodle', 'Cloudinary'],
  },
  {
    title: 'Insurance Data Integration',
    company: 'SEREMPRE',
    description:
      'Worked on insurance-related Laravel and legacy PHP workflows. The project includes queued imports, queries and exports for policy applications.',
    technologies: ['Laravel', 'PHP', 'Queues', 'SQL'],
  },
];
