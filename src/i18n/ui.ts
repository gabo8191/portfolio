// Every user-facing string of the site, per locale. The Spanish dictionary is typed
// against the English one, so a missing key fails the build instead of shipping a hole.

const en = {
  meta: {
    siteName: 'Gabriel Castillo',
    defaultTitle: 'Gabriel Castillo | Backend & Integration Engineer',
    defaultDescription:
      'Gabriel Castillo builds backend systems, integrations and internal tools and investigates production incidents. Experience with Python/Django, NestJS, Laravel, Java and SQL.',
    ogImageAlt: 'Gabriel Castillo, backend and integration developer',
    avatarAlt: 'Pixel-art portrait of Gabriel Castillo',
    jobTitles: ['Backend Developer', 'BI & Data Analytics Intern at Keyrus'],
    keyrusDescription:
      'International data intelligence and digital transformation consultancy, operating in Data & Analytics, Cloud, Digital Transformation and Digital Commerce.',
    contactType: 'professional inquiries',
    areaServed: 'Worldwide (remote)',
    contactAction: 'Contact Gabriel Castillo',
    breadcrumbHome: 'Home',
  },
  common: {
    skipLink: 'Skip to main content',
    opensInNewTab: ' (opens in new tab)',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  nav: {
    main: 'Main navigation',
    mobile: 'Mobile navigation',
    menu: 'Menu',
    home: 'Home',
    work: 'Work',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    switchShort: 'ES',
    switchLabel: 'Leer en español',
  },
  footer: {
    tagline: 'Gabriel Castillo · Backend & integrations · Tunja, CO',
    nav: 'Footer navigation',
  },
  home: {
    title: 'Gabriel Castillo | Backend & Integration Engineer',
    description:
      'Backend developer in Colombia working on integrations, production support and internal tools with Python/Django, NestJS, Laravel and SQL.',
    focus: [
      'Backend',
      'Integrations',
      'Production support',
      'SQL',
      'Internal tools',
      'Python / Django',
      'NestJS',
      'Laravel',
      'Java / Apache Camel',
      'Remote from Tunja, CO',
    ],
    focusLabel: 'Areas of work',
    stackLabel: 'Tools I use',
    roleTag: 'Backend & Integration Engineer',
    locationTag: 'Tunja, Colombia · Remote',
    pitch:
      'I connect systems, build internal tools and trace production incidents through code and data. Over three years with Python/Django, NestJS, Laravel, Java and SQL.',
    seeWork: 'See my work →',
    downloadCv: 'Download CV',
    cvFile: 'cv-en.pdf',
    capsIndex: '01 / What I do',
    capsTitle: "Where I'm useful",
    capabilities: [
      {
        title: 'System integrations',
        body: 'Financial messaging (SWIFT MT and ISO 20022), electronic invoicing connectors and data workflows between systems that were never meant to talk.',
      },
      {
        title: 'Production support',
        body: 'L2/L3 incidents traced through SQL, logs and code until the failure is clear, then a fix the team can maintain and a written root cause.',
      },
      {
        title: 'Internal tools',
        body: 'Practical software teams use every day: estimation tools, inventory platforms, reports, queued exports and admin panels.',
      },
    ],
    workIndex: '02 / Experience in practice',
    workTitle: 'Selected work',
    allWork: 'All professional work →',
    technologies: 'Technologies',
    openIndex: '03 / Built in the open',
    openTitle: 'Public projects',
    exploreProjects: 'Explore all projects →',
    openLede:
      'Most professional systems I work on are private. These personal projects show how I approach architecture and product decisions in public.',
    areaBackend: 'Backend & architecture',
    areaDesktop: 'Desktop application',
    viewRepo: 'View repository',
    closeTitleA: "Let's talk ",
    closeTitleB: 'systems.',
    closeBody:
      'For backend work, an integration that keeps failing or a difficult production issue, write to me directly.',
    contactPage: 'Contact page →',
  },
  stickers: {
    help: 'Stickers of things I have worked on. Focus one and use the arrow keys to move it.',
    listLabel: 'Things I have worked on',
    hint: '↑ drag the stickers',
    items: [
      { label: 'Systems that talk', note: 'banks, invoicing, CRMs' },
      { label: 'Bugs traced to the root', note: 'SQL → logs → code' },
      { label: 'Busywork → internal tool', note: 'Django, Laravel, React' },
      { label: 'Bank messages, translated', note: 'SWIFT to ISO 20022' },
      { label: 'Invoices that retry', note: 'e-invoicing in Colombia' },
      { label: 'Live in 5+ countries', note: 'benefits platform' },
      { label: 'Data you can trust', note: 'SQL and Python checks' },
      { label: 'Reports on autopilot', note: 'SQL, PL/SQL, Excel' },
    ],
  },
  work: {
    title: 'Professional work — Gabriel Castillo',
    description:
      'Professional work by Gabriel Castillo across Keyrus, TotalDev, PARQ and SEREMPRE: internal tools, interbank messaging, invoicing, inventory and production support.',
    index: 'Work',
    heading: 'Professional work',
    intro: (count: number) =>
      `${count} projects across four employers since 2023. The descriptions explain my work without sharing private source code.`,
    viewLive: 'View live →',
    confidential: 'Confidential source',
    lookingTitle: 'Looking for the code?',
    lookingBody:
      'Personal and open source projects are on their own page, with a timeline of what I built and when.',
    seePersonal: 'See personal projects →',
  },
  projects: {
    title: 'Projects — Gabriel Castillo',
    description:
      'Personal and open source projects by Gabriel Castillo: desktop and web apps, data experiments, backend services and infrastructure practice.',
    index: 'Projects',
    heading: 'Projects',
    intro: (count: number, first: string, last: string) =>
      `${count} personal and open source projects between ${first} and ${last}. The timeline shows what I built and when; filter it by stack to see where each technology shows up.`,
    timelineHeading: 'Project timeline',
    worthTitle: 'Worth explaining',
    problem: 'The problem',
    built: 'What I built',
    landed: 'Where it landed',
    github: 'GitHub',
    tryLive: 'Try it live',
    professionalTitle: 'Professional work',
    professionalBody: (count: number) =>
      `${count} professional projects across Keyrus, TotalDev, PARQ and SEREMPRE, described without sharing client code.`,
    seeProfessional: 'See professional work →',
    allRepos: 'All repositories',
  },
  explorer: {
    filterByStack: 'Filter by stack',
    clear: 'Clear',
    clearFilters: 'Clear filters',
    chartLabel: 'Timeline of projects by area. Select a project to see its details.',
    filterByArea: (area: string, count: number) => `Filter by ${area}, ${count} projects`,
    projectsCount: (count: number) => `${count} projects`,
    filterByTech: (tech: string) => `Filter by ${tech}`,
    viewGithub: 'View on GitHub →',
    tryLive: 'Try it live →',
    matchPrefix: 'projects match',
    betweenYears: 'projects between 2023 and 2026.',
    helpText:
      'Hover a square to preview it here, click an area to filter the lane, or pick a stack above to see when that technology shows up.',
    noMatch: 'No projects match that combination.',
  },
  about: {
    title: 'About — Gabriel Castillo, Backend & Integration Engineer',
    description:
      'Gabriel Castillo builds backend systems, integrations and internal tools, and investigates production incidents using SQL, code and application traces.',
    index: 'About',
    heading: 'About Gabriel',
    intro:
      'Backend engineer with 3+ years of remote experience building REST APIs, integrations and internal tools with Python/Django, NestJS, Laravel and Java, now applying that background to BI and data analytics.',
    introLabel: 'Introduction',
    p1: 'I like the difficult part of a system: following a record, message or transaction through SQL, logs and code until the failure is clear, then turning the finding into a fix the team can maintain.',
    p2: 'At Keyrus I designed and built an internal Django application that analyzes files and estimates effort for the team. Before that I worked on SWIFT messaging, electronic invoicing and a regional benefits platform.',
    cvLink: 'Download the CV',
    cvFile: 'cv-en.pdf',
    langSpanish: 'Spanish · native',
    langEnglish: 'English · B2',
    location: 'Tunja, Colombia · Remote',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    jobs: [
      {
        title: 'BI and Data Analytics Intern',
        company: 'Keyrus Colombia',
        period: 'Jul. 2026 – Present',
        highlights: [
          'Designed and built an internal Django application that analyzes files and estimates effort for the team.',
          'Built its REST API with DRF, background processing with Celery and Redis and PostgreSQL persistence, with automated tests in GitHub Actions.',
          'Prepared and validated data with SQL and Python for dashboard analysis.',
        ],
      },
      {
        title: 'Freelance Full Stack Developer',
        company: 'TotalDev SAS',
        period: 'Feb. 2025 – Mar. 2026',
        highlights: [
          'Added SWIFT MT support to an interbank gateway in Java/Apache Camel: MT103 and MT202 validation and automated ISO 20022 conversion.',
          'Developed the core modules of an electoral inventory platform in Laravel and React: bulk imports with row-level validation, regional permissions, Excel reports and queued PDF generation.',
          'Built a QR-scanning PWA for the operators of an industrial plant and its Laravel/Filament backend, with approvals, PDF delivery notes and monthly inventory reports.',
        ],
      },
      {
        title: 'Full Stack Developer',
        company: 'PARQ',
        period: 'Nov. 2024 – Jul. 2025',
        highlights: [
          'Extended the SATCOM, Siigo and Alegra electronic invoicing connectors in a Laravel middleware with queued resend of failed invoices and per-request tracing.',
          'Maintained the NestJS and PostgreSQL services of a parking platform in Colombia, Mexico and the UK: country-specific rates, queued bulk membership creation and consistent timezones in reports.',
          'Built the corporate Next.js site with SSR, i18n and SEO and documented the APIs with OpenAPI.',
        ],
      },
      {
        title: 'Backend Developer',
        company: 'SEREMPRE',
        period: 'Jan. 2023 – Nov. 2024',
        highlights: [
          'Diagnosed L2/L3 production incidents by tracing each failure through SQL, code review and Sentry, and documented its root cause.',
          'Built Laravel APIs for a benefits platform in more than five Latin American countries, with queues for validated payment uploads, duplicate cleanup and notifications.',
          'Wrote queries, PL/SQL procedures and Excel exports for other teams, and containerized legacy systems with Docker/DDEV.',
        ],
      },
    ],
    skillGroups: [
      { title: 'Languages', items: ['Python', 'TypeScript', 'PHP', 'Java', 'SQL'] },
      {
        title: 'Backend',
        items: ['Django', 'DRF', 'Celery', 'NestJS', 'Laravel', 'Filament', 'Apache Camel', 'REST', 'OpenAPI'],
      },
      {
        title: 'Data',
        items: ['PostgreSQL', 'MySQL', 'Oracle PL/SQL', 'Redis', 'pandas', 'Excel', 'Power BI', 'Tableau'],
      },
      {
        title: 'Operations',
        items: ['L2/L3 diagnosis', 'Sentry', 'Docker', 'Portainer', 'GitHub Actions', 'Linux'],
      },
    ],
    degrees: [
      {
        title: 'Bachelor of Engineering in Systems and Computer Engineering',
        school: 'Universidad Pedagógica y Tecnológica de Colombia (UPTC), Tunja',
        when: 'Expected 2026',
      },
      {
        title: 'Technologist in Information Systems Analysis and Development',
        school: 'Servicio Nacional de Aprendizaje (SENA), Tunja',
        when: '2022',
      },
    ],
  },
  contact: {
    title: 'Contact — Gabriel Castillo',
    description:
      'Contact Gabriel Castillo about backend systems, integrations, internal tools and production support.',
    index: 'Contact',
    heading: "Let's connect",
    intro:
      'Backend systems, integrations or tools for complex data workflows? Write to me; I reply in Spanish or English.',
    channelsLabel: 'Contact channels',
    cvTitle: 'Download my CV',
    cvButton: 'Download CV (PDF)',
    cvFile: 'cv-en.pdf',
    note: 'Tunja, Boyacá · Colombia · Remote',
  },
};

export type Ui = typeof en;

const es: Ui = {
  meta: {
    siteName: 'Gabriel Castillo',
    defaultTitle: 'Gabriel Castillo | Ingeniero Backend y de Integraciones',
    defaultDescription:
      'Gabriel Castillo construye sistemas backend, integraciones y herramientas internas, e investiga incidentes en producción. Experiencia con Python/Django, NestJS, Laravel, Java y SQL.',
    ogImageAlt: 'Gabriel Castillo, desarrollador backend y de integraciones',
    avatarAlt: 'Retrato en pixel art de Gabriel Castillo',
    jobTitles: ['Desarrollador Backend', 'Practicante de BI y Analítica de Datos en Keyrus'],
    keyrusDescription:
      'Consultora internacional de inteligencia de datos y transformación digital, con actividad en Data & Analytics, Cloud, Transformación Digital y Comercio Digital.',
    contactType: 'consultas profesionales',
    areaServed: 'Todo el mundo (remoto)',
    contactAction: 'Contactar a Gabriel Castillo',
    breadcrumbHome: 'Inicio',
  },
  common: {
    skipLink: 'Saltar al contenido principal',
    opensInNewTab: ' (se abre en una pestaña nueva)',
    email: 'Correo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  nav: {
    main: 'Navegación principal',
    mobile: 'Navegación móvil',
    menu: 'Menú',
    home: 'Inicio',
    work: 'Trabajo',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    switchShort: 'EN',
    switchLabel: 'Read in English',
  },
  footer: {
    tagline: 'Gabriel Castillo · Backend e integraciones · Tunja, CO',
    nav: 'Navegación del pie de página',
  },
  home: {
    title: 'Gabriel Castillo | Ingeniero Backend y de Integraciones',
    description:
      'Desarrollador backend en Colombia: integraciones, soporte de producción y herramientas internas con Python/Django, NestJS, Laravel y SQL.',
    focus: [
      'Backend',
      'Integraciones',
      'Soporte de producción',
      'SQL',
      'Herramientas internas',
      'Python / Django',
      'NestJS',
      'Laravel',
      'Java / Apache Camel',
      'Remoto desde Tunja, CO',
    ],
    focusLabel: 'Áreas de trabajo',
    stackLabel: 'Herramientas que uso',
    roleTag: 'Ingeniero Backend y de Integraciones',
    locationTag: 'Tunja, Colombia · Remoto',
    pitch:
      'Conecto sistemas, construyo herramientas internas y rastreo incidentes en producción a través del código y los datos. Más de tres años con Python/Django, NestJS, Laravel, Java y SQL.',
    seeWork: 'Ver mi trabajo →',
    downloadCv: 'Descargar hoja de vida',
    cvFile: 'cv-es.pdf',
    capsIndex: '01 / Qué hago',
    capsTitle: 'Dónde soy útil',
    capabilities: [
      {
        title: 'Integración de sistemas',
        body: 'Mensajería financiera (SWIFT MT e ISO 20022), conectores de facturación electrónica y flujos de datos entre sistemas que nunca fueron pensados para hablarse.',
      },
      {
        title: 'Soporte de producción',
        body: 'Incidentes N2/N3 rastreados con SQL, logs y código hasta aclarar la falla; luego una solución que el equipo pueda mantener y una causa raíz documentada.',
      },
      {
        title: 'Herramientas internas',
        body: 'Software práctico que los equipos usan a diario: herramientas de estimación, plataformas de inventario, reportes, exportaciones en cola y paneles de administración.',
      },
    ],
    workIndex: '02 / Experiencia en la práctica',
    workTitle: 'Trabajo destacado',
    allWork: 'Todo el trabajo profesional →',
    technologies: 'Tecnologías',
    openIndex: '03 / Construido en abierto',
    openTitle: 'Proyectos públicos',
    exploreProjects: 'Explorar todos los proyectos →',
    openLede:
      'La mayoría de los sistemas profesionales en los que trabajo son privados. Estos proyectos personales muestran, en público, cómo abordo las decisiones de arquitectura y de producto.',
    areaBackend: 'Backend y arquitectura',
    areaDesktop: 'Aplicación de escritorio',
    viewRepo: 'Ver repositorio',
    closeTitleA: 'Hablemos de ',
    closeTitleB: 'sistemas.',
    closeBody:
      'Si necesitas trabajo backend, una integración que sigue fallando o un problema difícil en producción, escríbeme directamente.',
    contactPage: 'Página de contacto →',
  },
  stickers: {
    help: 'Stickers de cosas en las que he trabajado. Enfoca uno y usa las flechas del teclado para moverlo.',
    listLabel: 'Cosas en las que he trabajado',
    hint: '↑ arrastra los stickers',
    items: [
      { label: 'Sistemas que se hablan', note: 'bancos, facturación, CRMs' },
      { label: 'Errores rastreados hasta la raíz', note: 'SQL → logs → código' },
      { label: 'Trabajo manual → herramienta interna', note: 'Django, Laravel, React' },
      { label: 'Mensajes bancarios, traducidos', note: 'SWIFT a ISO 20022' },
      { label: 'Facturas que se reintentan', note: 'facturación electrónica en Colombia' },
      { label: 'En producción en más de 5 países', note: 'plataforma de beneficios' },
      { label: 'Datos en los que se puede confiar', note: 'validaciones con SQL y Python' },
      { label: 'Reportes en piloto automático', note: 'SQL, PL/SQL, Excel' },
    ],
  },
  work: {
    title: 'Trabajo profesional — Gabriel Castillo',
    description:
      'Trabajo profesional de Gabriel Castillo en Keyrus, TotalDev, PARQ y SEREMPRE: herramientas internas, mensajería interbancaria, facturación, inventario y soporte de producción.',
    index: 'Trabajo',
    heading: 'Trabajo profesional',
    intro: (count: number) =>
      `${count} proyectos en cuatro empleadores desde 2023. Las descripciones explican mi trabajo sin compartir código fuente privado.`,
    viewLive: 'Ver en vivo →',
    confidential: 'Código confidencial',
    lookingTitle: '¿Buscas el código?',
    lookingBody:
      'Los proyectos personales y de código abierto están en su propia página, con una línea de tiempo de qué construí y cuándo.',
    seePersonal: 'Ver proyectos personales →',
  },
  projects: {
    title: 'Proyectos — Gabriel Castillo',
    description:
      'Proyectos personales y de código abierto de Gabriel Castillo: aplicaciones de escritorio y web, experimentos de datos, servicios backend y práctica de infraestructura.',
    index: 'Proyectos',
    heading: 'Proyectos',
    intro: (count: number, first: string, last: string) =>
      `${count} proyectos personales y de código abierto entre ${first} y ${last}. La línea de tiempo muestra qué construí y cuándo; fíltrala por tecnología para ver dónde aparece cada una.`,
    timelineHeading: 'Línea de tiempo de proyectos',
    worthTitle: 'Vale la pena contarlo',
    problem: 'El problema',
    built: 'Lo que construí',
    landed: 'En qué terminó',
    github: 'GitHub',
    tryLive: 'Pruébalo en vivo',
    professionalTitle: 'Trabajo profesional',
    professionalBody: (count: number) =>
      `${count} proyectos profesionales en Keyrus, TotalDev, PARQ y SEREMPRE, descritos sin compartir código de clientes.`,
    seeProfessional: 'Ver trabajo profesional →',
    allRepos: 'Todos los repositorios',
  },
  explorer: {
    filterByStack: 'Filtrar por tecnología',
    clear: 'Quitar',
    clearFilters: 'Quitar filtros',
    chartLabel: 'Línea de tiempo de proyectos por área. Selecciona un proyecto para ver sus detalles.',
    filterByArea: (area: string, count: number) => `Filtrar por ${area}, ${count} proyectos`,
    projectsCount: (count: number) => `${count} proyectos`,
    filterByTech: (tech: string) => `Filtrar por ${tech}`,
    viewGithub: 'Ver en GitHub →',
    tryLive: 'Pruébalo en vivo →',
    matchPrefix: 'proyectos coinciden con',
    betweenYears: 'proyectos entre 2023 y 2026.',
    helpText:
      'Pasa el cursor sobre un cuadrado para previsualizarlo aquí, haz clic en un área para filtrar el carril, o elige una tecnología arriba para ver cuándo aparece.',
    noMatch: 'Ningún proyecto coincide con esa combinación.',
  },
  about: {
    title: 'Sobre mí — Gabriel Castillo, Ingeniero Backend y de Integraciones',
    description:
      'Gabriel Castillo construye sistemas backend, integraciones y herramientas internas, e investiga incidentes en producción con SQL, código y trazas de aplicación.',
    index: 'Sobre mí',
    heading: 'Sobre Gabriel',
    intro:
      'Ingeniero backend con más de 3 años de experiencia remota construyendo APIs REST, integraciones y herramientas internas con Python/Django, NestJS, Laravel y Java, y que ahora aplica esa base a BI y analítica de datos.',
    introLabel: 'Presentación',
    p1: 'Me gusta la parte difícil de un sistema: seguir un registro, un mensaje o una transacción a través de SQL, logs y código hasta aclarar la falla, y convertir el hallazgo en una solución que el equipo pueda mantener.',
    p2: 'En Keyrus diseñé y construí una aplicación interna en Django que analiza archivos y estima el esfuerzo para el equipo. Antes trabajé en mensajería SWIFT, facturación electrónica y una plataforma regional de beneficios.',
    cvLink: 'Descargar la hoja de vida',
    cvFile: 'cv-es.pdf',
    langSpanish: 'Español · nativo',
    langEnglish: 'Inglés · B2',
    location: 'Tunja, Colombia · Remoto',
    experience: 'Experiencia',
    skills: 'Habilidades',
    education: 'Educación',
    jobs: [
      {
        title: 'Practicante de BI y Analítica de Datos',
        company: 'Keyrus Colombia',
        period: 'Jul. 2026 – Presente',
        highlights: [
          'Diseñé y construí una aplicación interna en Django que analiza archivos y estima el esfuerzo para el equipo.',
          'Construí su API REST con DRF, el procesamiento en segundo plano con Celery y Redis y la persistencia en PostgreSQL, con pruebas automatizadas en GitHub Actions.',
          'Preparé y validé datos con SQL y Python para el análisis en dashboards.',
        ],
      },
      {
        title: 'Desarrollador Full Stack freelance',
        company: 'TotalDev SAS',
        period: 'Feb. 2025 – Mar. 2026',
        highlights: [
          'Añadí soporte SWIFT MT a una pasarela interbancaria en Java/Apache Camel: validación de MT103 y MT202 y conversión automática a ISO 20022.',
          'Desarrollé los módulos centrales de una plataforma de inventario electoral en Laravel y React: cargas masivas con validación por fila, permisos regionales, reportes en Excel y generación de PDF en cola.',
          'Construí una PWA con lectura de QR para los operarios de una planta industrial y su backend en Laravel/Filament, con aprobaciones, remisiones en PDF y reportes mensuales de inventario.',
        ],
      },
      {
        title: 'Desarrollador Full Stack',
        company: 'PARQ',
        period: 'Nov. 2024 – Jul. 2025',
        highlights: [
          'Amplié los conectores de facturación electrónica SATCOM, Siigo y Alegra en un middleware Laravel, con reenvío en cola de facturas fallidas y trazabilidad por solicitud.',
          'Mantuve los servicios NestJS y PostgreSQL de una plataforma de parqueaderos en Colombia, México y Reino Unido: tarifas por país, creación masiva de membresías en cola y zonas horarias consistentes en los reportes.',
          'Construí el sitio corporativo en Next.js con SSR, i18n y SEO, y documenté las APIs con OpenAPI.',
        ],
      },
      {
        title: 'Desarrollador Backend',
        company: 'SEREMPRE',
        period: 'Ene. 2023 – Nov. 2024',
        highlights: [
          'Diagnostiqué incidentes de producción N2/N3 rastreando cada falla con SQL, revisión de código y Sentry, y documenté su causa raíz.',
          'Construí APIs en Laravel para una plataforma de beneficios en más de cinco países de Latinoamérica, con colas para cargas de pagos validadas, limpieza de duplicados y notificaciones.',
          'Escribí consultas, procedimientos PL/SQL y exportaciones a Excel para otros equipos, y contenericé sistemas heredados con Docker/DDEV.',
        ],
      },
    ],
    skillGroups: [
      { title: 'Lenguajes', items: ['Python', 'TypeScript', 'PHP', 'Java', 'SQL'] },
      {
        title: 'Backend',
        items: ['Django', 'DRF', 'Celery', 'NestJS', 'Laravel', 'Filament', 'Apache Camel', 'REST', 'OpenAPI'],
      },
      {
        title: 'Datos',
        items: ['PostgreSQL', 'MySQL', 'Oracle PL/SQL', 'Redis', 'pandas', 'Excel', 'Power BI', 'Tableau'],
      },
      {
        title: 'Operaciones',
        items: ['Diagnóstico N2/N3', 'Sentry', 'Docker', 'Portainer', 'GitHub Actions', 'Linux'],
      },
    ],
    degrees: [
      {
        title: 'Ingeniería de Sistemas y Computación',
        school: 'Universidad Pedagógica y Tecnológica de Colombia (UPTC), Tunja',
        when: 'Grado previsto en 2026',
      },
      {
        title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        school: 'Servicio Nacional de Aprendizaje (SENA), Tunja',
        when: '2022',
      },
    ],
  },
  contact: {
    title: 'Contacto — Gabriel Castillo',
    description:
      'Contacta a Gabriel Castillo para sistemas backend, integraciones, herramientas internas y soporte de producción.',
    index: 'Contacto',
    heading: 'Conectemos',
    intro:
      '¿Sistemas backend, integraciones o herramientas para flujos de datos complejos? Escríbeme; respondo en español o en inglés.',
    channelsLabel: 'Canales de contacto',
    cvTitle: 'Descargar mi hoja de vida',
    cvButton: 'Descargar hoja de vida (PDF)',
    cvFile: 'cv-es.pdf',
    note: 'Tunja, Boyacá · Colombia · Remoto',
  },
};

export const ui = { en, es };
