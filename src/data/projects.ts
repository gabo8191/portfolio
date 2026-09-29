// Catálogo único de proyectos. La página solo presenta; los datos viven aquí
// para que el mapa de áreas, los destacados y el índice lean siempre lo mismo.
// El contenido va en inglés porque el sitio entero está en inglés.

export type AreaId =
  | 'apps'
  | 'data'
  | 'backend'
  | 'infra'
  | 'security'
  | 'web';

export type Project = {
  slug: string;
  /** Mes del último trabajo relevante, `YYYY-MM`. Alimenta el eje temporal. */
  date: string;
  title: string;
  /** Una línea. Es lo que se lee en el índice denso. */
  summary: string;
  area: AreaId;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Solo los destacados llevan narrativa larga. */
  featured?: {
    emoji: string;
    tagline: string;
    problem: string;
    approach: string;
    outcome: string;
  };
};

export type Area = {
  id: AreaId;
  label: string;
  /** Descripción corta que acompaña al clúster en el mapa. */
  blurb: string;
  /** Flat "Hard Copy" fill; every dot also gets an ink stroke, so contrast holds. */
  color: string;
};

export const AREAS: Area[] = [
  {
    id: 'data',
    label: 'Data & AI',
    blurb: 'Pipelines, models and analysis',
    color: '#ffd93d',
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    blurb: 'Microservices, messaging and APIs',
    color: '#2f5bff',
  },
  {
    id: 'apps',
    label: 'Apps & Open Source',
    blurb: 'Products I maintain in the open',
    color: '#ff6fb5',
  },
  {
    id: 'web',
    label: 'Web & Mobile',
    blurb: 'PWAs, offline-first and mobile',
    color: '#3ddc97',
  },
  {
    id: 'infra',
    label: 'DevOps & Infra',
    blurb: 'Containers, virtualization and servers',
    color: '#ff8a3d',
  },
  {
    id: 'security',
    label: 'Security',
    blurb: 'Cryptography and threat analysis',
    color: '#0d0d0d',
  },
];

export const PROJECTS: Project[] = [
  // ── Apps & Open Source ──────────────────────────────────────────────
  {
    slug: 'tomoreader',
    date: '2026-06',
    title: 'TomoReader',
    summary: 'Desktop comic & manga reader with a Rust core',
    area: 'apps',
    technologies: ['Rust', 'Tauri 2', 'React', 'TypeScript', 'SQLite'],
    githubUrl: 'https://github.com/gabo8191/TomoReader',
    featured: {
      emoji: '📚',
      tagline: 'Desktop comic & manga reader',
      problem:
        'Desktop CBR/CBZ readers are either heavy, forget where you left off, or burn your eyes during long sessions.',
      approach:
        'A Rust core handles archive extraction and paging without blocking the UI, with the library persisted in SQLite and organised into pockets. The interface is React on Tauri 2, with themes built for reading at night — sepia, dark and OLED.',
      outcome:
        'A cross-platform desktop app that resumes reading where you stopped and keeps the library organised without relying on any external service.',
    },
  },
  {
    slug: 'cv-maker',
    date: '2026-06',
    title: 'CV-Maker',
    summary: 'Résumé builder with live A4 preview and one-click PDF export',
    area: 'apps',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/gabo8191/CV-Maker',
    featured: {
      emoji: '📄',
      tagline: 'Elegant résumé builder',
      problem:
        'Keeping a CV in LaTeX gives a flawless result but locks out anyone unwilling to fight the syntax.',
      approach:
        'I turned my own LaTeX template into a web app: sections you add and reorder on the fly, an A4 preview faithful to the printed result, and PDF export in one click. Everything runs client-side, with no sign-up and no server.',
      outcome:
        'A public tool anyone can use, with the same typographic result as the original.',
    },
  },
  {
    slug: 'autotranslate-anki',
    date: '2026-06',
    title: 'AutoTranslate-Anki',
    summary: 'Anki add-on that fills in translations for an entire deck',
    area: 'apps',
    technologies: ['Python', 'Anki', 'Add-on'],
    githubUrl: 'https://github.com/gabo8191/AutoTranslate-Anki',
    featured: {
      emoji: '🗣️',
      tagline: 'Anki add-on for vocabulary',
      problem:
        'Capturing vocabulary on the go is easy; translating every card by hand afterwards is what makes people abandon the deck.',
      approach:
        'A Python add-on that walks every note in a deck and fills the translation field in one pass, against a free translation endpoint with no API key. Language pair and field mapping are configurable.',
      outcome:
        'A deck of hundreds of cards gets translated in a single click, with no credentials and no paid service.',
    },
  },

  // ── Data & AI ───────────────────────────────────────────────────────
  {
    slug: 'ml-algorithms',
    date: '2025-09',
    title: 'ML-Algorithms',
    summary: 'ML pipeline comparing six algorithms on operational metrics',
    area: 'data',
    technologies: ['Python', 'scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/gabo8191/ML-Algorithms',
    featured: {
      emoji: '📊',
      tagline: 'End-to-end machine learning pipeline',
      problem:
        'Picking an algorithm out of habit is the fastest way to get a model that looks good on paper and fails in production.',
      approach:
        'A full pipeline over one operational dataset: preparation, feature engineering and a comparison of six algorithms — logistic regression, decision trees, KNN and others — all evaluated under the same protocol.',
      outcome:
        'A reproducible comparison showing what each family of models buys you and at what cost, instead of a single model with nothing to contrast it against.',
    },
  },
  {
    slug: 'nlp-reglamento',
    date: '2025-10',
    title: 'NLP — Regulations Classifier',
    summary: 'Classifies sections of a regulation PDF into predefined categories',
    area: 'data',
    technologies: ['Python', 'NLP', 'scikit-learn'],
    githubUrl: 'https://github.com/gabo8191/NLP-Reglamento',
    featured: {
      emoji: '🧾',
      tagline: 'Document classification from raw PDFs',
      problem:
        'A long regulation in PDF is unstructured text: finding which article applies to a given case means reading the whole thing.',
      approach:
        'A system that ingests the PDFs, extracts and normalises the text — cleaning, tokenisation, stopword removal — and classifies each section into predefined categories with scikit-learn.',
      outcome:
        'The document goes from a wall of text to a structure you can query by category.',
    },
  },
  {
    slug: 'catsdogs-ai',
    date: '2025-11',
    title: 'CatsDogs AI',
    summary:
      'Image classifier using Transfer Learning (EfficientNetB0) with a web UI',
    area: 'data',
    technologies: ['Python', 'PyTorch', 'Deep Learning'],
    githubUrl: 'https://github.com/gabo8191/model-image-cat-dogs',
  },
  {
    slug: 'knn-titanic',
    date: '2025-09',
    title: 'KNN — Titanic',
    summary: 'K-Nearest Neighbors on the Titanic dataset, cleaning to evaluation',
    area: 'data',
    technologies: ['Python', 'scikit-learn'],
    githubUrl: 'https://github.com/gabo8191/knn-clasification',
  },
  {
    slug: 'synthetic-data',
    date: '2025-09',
    title: 'Synthetic Data Generation',
    summary: 'Generates synthetic tabular data from a real dataset for testing',
    area: 'data',
    technologies: ['Python', 'Pandas'],
    githubUrl: 'https://github.com/gabo8191/synthetic_data',
  },
  {
    slug: 'savings-plan',
    date: '2025-12',
    title: 'Savings Plan Generator',
    summary: 'Builds daily savings plans and exports them to Excel',
    area: 'data',
    technologies: ['Python', 'Flask', 'OpenPyXL'],
    githubUrl: 'https://github.com/gabo8191/savings-plan-generator',
  },

  // ── Backend & APIs ──────────────────────────────────────────────────
  {
    slug: 'polyglot-microservices',
    date: '2025-10',
    title: 'Polyglot Microservices',
    summary:
      'Three services in different stacks behind a gateway, with service discovery',
    area: 'backend',
    technologies: ['Go', 'Gin', 'Redis', 'Microservices'],
    githubUrl: 'https://github.com/gabo8191/Project-Software-Engineering',
    featured: {
      emoji: '🧩',
      tagline: 'Polyglot microservices architecture',
      problem:
        'Real distributed systems are rarely written in a single language, and microservice theory gets interesting exactly when different stacks have to talk to each other.',
      approach:
        'Three independent services, each on the stack that suits it — authentication in Go with Gin and Redis for sessions and tokens — coordinated by a central API Gateway with automatic service discovery.',
      outcome:
        'A working testbed where service discovery, gateway routing and specialised databases coexist in one system.',
    },
  },
  {
    slug: 'kafka-eda',
    date: '2025-09',
    title: 'Kafka EDA Microservices',
    summary: 'Event-driven architecture with Kafka and Spring Cloud Gateway',
    area: 'backend',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Spring Cloud'],
    githubUrl: 'https://github.com/gabo8191/KafkaEDA-',
  },
  {
    slug: 'streaming-kafka-redis',
    date: '2024-12',
    title: 'Streaming Microservices',
    summary:
      'Streaming simulation with three Kafka consumers, Redis cache and Compose',
    area: 'backend',
    technologies: ['Kafka', 'Redis', 'Express.js', 'Docker'],
    githubUrl: 'https://github.com/gabo8191/lab5-kafka-redis',
  },
  {
    slug: 'api-gateway-lb',
    date: '2025-09',
    title: 'API Gateway + Load Balancer',
    summary: 'Spring gateway with load balancing and access-token auth',
    area: 'backend',
    technologies: ['Java', 'Spring Cloud', 'JWT'],
    githubUrl:
      'https://github.com/gabo8191/LoadBalancer-APIGateway-AccessToken',
  },
  {
    slug: 'eureka',
    date: '2024-08',
    title: 'Eureka Service Discovery',
    summary: 'Dynamic microservice registration and resolution with Eureka',
    area: 'backend',
    technologies: ['Java', 'Spring Boot', 'Eureka'],
    githubUrl: 'https://github.com/gabo8191/eureka_spring_project',
  },
  {
    slug: 'jpa-relations',
    date: '2025-09',
    title: 'Books & Publishers (JPA)',
    summary: 'Entity relationships and persistence with Spring Boot 3.2',
    area: 'backend',
    technologies: ['Java', 'Spring Boot', 'JPA'],
    githubUrl: 'https://github.com/gabo8191/relation-JPA',
  },
  {
    slug: 'graphql-docker',
    date: '2025-03',
    title: 'GraphQL API with Docker',
    summary: 'NestJS GraphQL API with a typed schema, containerized',
    area: 'backend',
    technologies: ['NestJS', 'GraphQL', 'Docker'],
    githubUrl: 'https://github.com/gabo8191/docker-graphql',
  },
  {
    slug: 'laravel-passport',
    date: '2023-02',
    title: 'Laravel Passport Secure API',
    summary: 'REST API with OAuth2 via Passport, documented and tested',
    area: 'backend',
    technologies: ['Laravel', 'PHP', 'OAuth2'],
    githubUrl: 'https://github.com/gabo8191/API-LaravelPassport',
  },

  // ── Web & Mobile ────────────────────────────────────────────────────
  {
    slug: 'almendros-mobile',
    date: '2025-06',
    title: 'Almendros — Orders Mobile App',
    summary:
      'React Native app with document-based login and synced order history',
    area: 'web',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    githubUrl: 'https://github.com/gabo8191/mobile-almendros',
  },
  {
    slug: 'pouchdb-offline',
    date: '2026-04',
    title: 'Offline-first store with PouchDB',
    summary: 'PWA storing records and file attachments in IndexedDB',
    area: 'web',
    technologies: ['PouchDB', 'IndexedDB', 'PWA'],
    githubUrl: 'https://github.com/gabo8191/PouchDB',
  },
  {
    slug: 'pwa-caching',
    date: '2026-03',
    title: 'PWA Caching Strategies',
    summary:
      'Compares cache-first, network-first and stale-while-revalidate in SWs',
    area: 'web',
    technologies: ['JavaScript', 'Service Workers', 'PWA'],
    githubUrl: 'https://github.com/gabo8191/caching-strategy-project',
  },
  {
    slug: 'angular-pwa',
    date: '2026-05',
    title: 'Angular PWA',
    summary: 'Angular PWA: installability, offline support and CLI tooling',
    area: 'web',
    technologies: ['Angular', 'TypeScript', 'PWA'],
    githubUrl: 'https://github.com/gabo8191/pwa-angular',
  },
  {
    slug: 'habit-tracker',
    date: '2026-04',
    title: 'Habit Tracker PWA',
    summary: 'Installable daily habit tracking app',
    area: 'web',
    technologies: ['JavaScript', 'PWA'],
    githubUrl: 'https://github.com/gabo8191/habit-tracker-pwa',
  },
  {
    slug: 'calendar-ai',
    date: '2026-04',
    title: 'AI Calendar',
    summary: 'AI-assisted calendar built on Next.js',
    area: 'web',
    technologies: ['Next.js', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/gabo8191/calendar-ai',
  },

  // ── DevOps & Infra ──────────────────────────────────────────────────
  {
    slug: 'hipervisores',
    date: '2026-03',
    title: 'IaaS & Virtualization',
    summary: 'A three-VM network: hypervisor, networking and provisioning',
    area: 'infra',
    technologies: ['Linux', 'Virtualization', 'Networking'],
    githubUrl: 'https://github.com/gabo8191/Proyecto-hipervisores',
  },
  {
    slug: 'proxmox-docs',
    date: '2026-03',
    title: 'Proxmox Documentation',
    summary: 'Install and operations notes for Proxmox VE, from zero to VMs',
    area: 'infra',
    technologies: ['Proxmox', 'Linux', 'Docs'],
    githubUrl: 'https://github.com/gabo8191/proxmox-docs',
  },
  {
    slug: 'oracle-docker',
    date: '2024-08',
    title: 'Oracle DB in Docker',
    summary: 'Ready-to-run Oracle Database with no local installation',
    area: 'infra',
    technologies: ['Docker', 'Oracle', 'PL/SQL'],
    githubUrl: 'https://github.com/gabo8191/OracleDBDocker',
  },

  // ── Security ────────────────────────────────────────────────────────
  {
    slug: 'block-cipher',
    date: '2025-04',
    title: 'Custom Block Cipher',
    summary:
      'Substitution, transposition and XOR driven by pseudorandom generation',
    area: 'security',
    technologies: ['Express.js', 'JavaScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/gabo8191/cipher_algorithm',
  },
  {
    slug: 'phishing-explorer',
    date: '2024-01',
    title: 'Phishing Explorer',
    summary: 'Java tool for exploring and analysing phishing URLs',
    area: 'security',
    technologies: ['Java'],
    githubUrl: 'https://github.com/gabo8191/phising-explorer',
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);

export function countByArea(areaId: AreaId): number {
  return PROJECTS.filter((p) => p.area === areaId).length;
}
