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
      'Interbank messaging, inventory systems, event operations and content management. Freelance work overlapped with PARQ through Jul 2025.',
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
      'Added MT message support to a Java/Apache Camel gateway between internal systems and SWIFT: MT103 and MT202 models, parsers and validators, JSON mapping configurations, and automated flows from MT to pacs.008 and from pacs.009 to MT202. Message batches run asynchronously with per-message failure logging.',
    technologies: ['Java', 'Apache Camel', 'SWIFT', 'ISO 20022'],
  },
  {
    title: 'Invex — Electoral Inventory Platform',
    company: 'TotalDev',
    period: 'Jul – Oct 2025',
    description:
      'Main developer of an inventory platform for electoral operations: bulk imports with duplicate and row-level validation, permissions by department and municipality, Excel reports and KPI dashboards, and record PDFs cached and bundled into ZIP files by a queued job with scheduled cleanup.',
    technologies: ['Laravel', 'React', 'MySQL', 'Queues', 'Zod'],
    liveUrl: 'https://www.invex.com.co/login/',
  },
  {
    title: 'Materiales de la Sabana — Plant Inventory',
    company: 'TotalDev',
    period: 'Aug – Oct 2025',
    description:
      'Built the PWA used by drivers, yard and machine operators, with QR scanning, photo capture and role dashboards, plus its Laravel/Filament backend for receipts, issues, production, administrator approvals and monthly inventory reports.',
    technologies: ['React', 'PWA', 'Laravel', 'Filament', 'MySQL'],
  },
  {
    title: 'Chivas House — Event Management Platform',
    company: 'TotalDev',
    period: 'Nov – Dec 2025',
    description:
      'Built guest registration linked to invitation codes, one-use QR codes, event-driven welcome emails and a validation PWA for event staff.',
    technologies: ['React', 'Laravel', 'TypeScript', 'PWA'],
    liveUrl: 'https://chivas-house.co/age-validation',
  },
  {
    title: 'Biosimtec — Corporate Site with Custom CMS',
    company: 'TotalDev',
    period: 'Nov – Dec 2025',
    description:
      'Built a Laravel/Filament CMS so nontechnical users manage every section of the site, with content caches invalidated when records change, and a React front end on TanStack Query.',
    technologies: ['React', 'Laravel', 'Filament', 'TanStack Query'],
    liveUrl: 'https://www.biosimtec.com/',
  },
  {
    title: 'Inspection Operations Platform',
    company: 'TotalDev',
    period: 'Apr 2025; Jul – Oct 2025',
    description:
      'Modeled and built the discounts module (causes, claims and notifications) and microbiology visits with their samples; later built the visit report form with coordinator review, approval states and evidence uploads.',
    technologies: ['Laravel', 'React', 'MySQL'],
  },
  {
    title: 'Insurance Registry Maintenance',
    company: 'TotalDev',
    period: 'Apr – Jul 2025',
    description:
      'Maintained reports for an insurance industry registry: SQL validation of response history, pending-response tracking, a blocklist, and a data report for a merger between two insurers.',
    technologies: ['Laravel', 'SQL', 'Reporting'],
  },
  {
    title: 'Field Operations Platform',
    company: 'TotalDev',
    period: 'Jun 2025',
    description:
      'Built the campaign, activity and user editing views and the endpoints behind them for a merchandising team tool.',
    technologies: ['Laravel', 'React'],
  },
  {
    title: 'Electronic Billing Middleware',
    company: 'PARQ',
    period: 'Jan – Jul 2025',
    description:
      'Extended the SATCOM, Siigo and Alegra connectors of a Laravel invoicing middleware: queued resend of failed invoices, company registration with providers, document and ID types, and per-request logging with tax ID for tracing. Connected membership invoicing from the NestJS services.',
    technologies: ['Laravel', 'NestJS', 'Queues', 'PostgreSQL'],
  },
  {
    title: 'PARQ — Parking Services Backend',
    company: 'PARQ',
    period: 'Dec 2024 – Jun 2025',
    description:
      'Worked on NestJS services sharing PostgreSQL: country-specific rates for Colombia and Mexico, custom calendar days, queued bulk membership creation, sales reports with sub-tariffs and a platform-wide timezone standard. Traced production data inconsistencies from the database into the services.',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'Angular', 'Swagger'],
    liveUrl: 'https://app.parqco.com/sign-in',
  },
  {
    title: 'PARQ — Corporate Website',
    company: 'PARQ',
    period: 'May – Jun 2025',
    description:
      'Rebuilt the corporate site in Next.js with server rendering, Colombia and UK locales, SEO metadata, Intercom and Tailwind.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'i18n'],
    liveUrl: 'https://parqtech.com/',
  },
  {
    title: 'Membeers — AB InBev Benefits Platform',
    company: 'SEREMPRE',
    period: 'Mar 2023 – Jun 2024',
    description:
      'Built Laravel APIs and handled L2/L3 incidents through SQL, code and Sentry. Queued validated payment uploads and duplicate cleanup, Excel exports of members, missions and payments, per-country parameters and a faster waiting list. Joined the team as a SENA intern.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Queues'],
  },
  {
    title: 'Story Training — Educational Platform',
    company: 'SEREMPRE',
    period: 'Jun – Aug 2023',
    description:
      'Evolved an educational platform with clients in Spain: Laravel backend, Orchid admin panel, custom Moodle plugin and Cloudinary integration for multimedia content.',
    technologies: ['Laravel', 'Moodle', 'Cloudinary'],
  },
  {
    title: 'Insurance Data Integration',
    company: 'SEREMPRE',
    period: 'Aug – Nov 2023',
    description:
      'Worked on a ten-year residential insurance lookup inside a legacy insurance registry, combining Laravel, existing PHP, Vue and Bootstrap, with cross-system testing in Postman.',
    technologies: ['Laravel', 'PHP', 'Vue', 'SQL'],
  },
];
