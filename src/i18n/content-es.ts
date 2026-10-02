// Spanish overlays for the data files. Technical names (stacks, products, repos) are
// kept as they are; only prose is translated. Keys are the English titles/slugs.
import type { AreaId } from '../data/projects';

type ProfessionalEs = { title: string; description: string };

export const EMPLOYERS_ES: Record<string, { role: string; focus: string }> = {
  'Keyrus Colombia': {
    role: 'Practicante de BI y Analítica de Datos',
    focus:
      'Analítica de datos y una aplicación interna en Django que analiza archivos y estima el esfuerzo para el equipo.',
  },
  TotalDev: {
    role: 'Desarrollador Fullstack freelance',
    focus:
      'Mensajería interbancaria, sistemas de inventario, operación de eventos y gestión de contenido para clientes de varias industrias.',
  },
  PARQ: {
    role: 'Desarrollador Fullstack',
    focus:
      'Servicios NestJS sobre una base de datos PostgreSQL compartida, un middleware de facturación electrónica en Laravel y diagnóstico de datos en producción.',
  },
  SEREMPRE: {
    role: 'Desarrollador Backend',
    focus:
      'Backend en Laravel y soporte de producción N2/N3 para plataformas regionales de beneficios, e-learning y seguros.',
  },
};

export const PROFESSIONAL_ES: Record<string, ProfessionalEs> = {
  'Internal Effort Estimation Tool': {
    title: 'Herramienta interna de estimación de esfuerzo',
    description:
      'Diseñé y construí una aplicación interna en Django que analiza archivos y estima el esfuerzo para el equipo. API REST con DRF, procesamiento en segundo plano con Celery y Redis, persistencia en PostgreSQL y pruebas automatizadas en GitHub Actions.',
  },
  'SWIFT MT Support for an Interbank Gateway': {
    title: 'Soporte SWIFT MT para una pasarela interbancaria',
    description:
      'Añadí soporte SWIFT MT a una pasarela interbancaria en Java/Apache Camel: validación de MT103 y MT202 y conversión automática a ISO 20022.',
  },
  'Electoral Inventory Platform': {
    title: 'Plataforma de inventario electoral',
    description:
      'Desarrollé los módulos centrales de una plataforma de inventario para operaciones electorales en Laravel y React: cargas masivas con validación por fila, permisos regionales, reportes en Excel y generación de PDF en cola.',
  },
  'Industrial Plant Inventory PWA': {
    title: 'PWA de inventario para una planta industrial',
    description:
      'Construí una PWA con lectura de QR para los operarios de una planta y su backend en Laravel/Filament para el control de inventario y los reportes.',
  },
  'Event Guest Registration': {
    title: 'Registro de invitados a eventos',
    description:
      'Construí el registro de invitados con códigos QR de un solo uso y una aplicación de validación para el personal del evento.',
  },
  'Corporate Site with Custom CMS': {
    title: 'Sitio corporativo con CMS a medida',
    description:
      'Construí un CMS en Laravel/Filament para que usuarios no técnicos actualicen su sitio, con un front end en React.',
  },
  'Inspection Operations Platform': {
    title: 'Plataforma de operaciones de inspección',
    description:
      'Construí módulos de siniestros, visitas de campo e informes de visita, con flujos de revisión y aprobación.',
  },
  'Insurance Data Reporting': {
    title: 'Reportes de datos para seguros',
    description:
      'Validé datos y mantuve reportes con SQL para un cliente del sector asegurador.',
  },
  'Field Operations Platform': {
    title: 'Plataforma de operaciones de campo',
    description:
      'Construí vistas de gestión y sus endpoints de API para una herramienta de equipos de campo.',
  },
  'Electronic Billing Middleware': {
    title: 'Middleware de facturación electrónica',
    description:
      'Amplié los conectores SATCOM, Siigo y Alegra de un middleware de facturación en Laravel con reenvío en cola de facturas fallidas y trazabilidad por solicitud, y conecté la facturación de membresías desde los servicios NestJS.',
  },
  'Parking Services Backend': {
    title: 'Backend de servicios de parqueaderos',
    description:
      'Construí tarifas por país, creación masiva de membresías en cola, reportes de ventas y manejo consistente de zonas horarias en servicios NestJS sobre PostgreSQL, y rastreé problemas de datos en producción desde la base de datos hasta los servicios.',
  },
  'Corporate Website': {
    title: 'Sitio web corporativo',
    description:
      'Reconstruí el sitio corporativo en Next.js con renderizado en servidor, i18n y SEO.',
  },
  'Regional Benefits Platform': {
    title: 'Plataforma regional de beneficios',
    description:
      'Construí APIs en Laravel para una plataforma de beneficios en más de cinco países de Latinoamérica, con cargas de pagos y reportes en cola, y diagnostiqué incidentes N2/N3 con SQL, código y Sentry.',
  },
  'Educational Platform': {
    title: 'Plataforma educativa',
    description:
      'Evolucioné una plataforma educativa con backend en Laravel, una integración Moodle LTI y Cloudinary para contenido multimedia.',
  },
  'Insurance Data Integration': {
    title: 'Integración de datos de seguros',
    description:
      'Construí una consulta de pólizas de seguros entre sistemas con Laravel y Vue, probada de extremo a extremo en Postman.',
  },
};

export const AREAS_ES: Record<AreaId, { label: string; blurb: string }> = {
  data: { label: 'Datos e IA', blurb: 'Pipelines, modelos y análisis' },
  backend: { label: 'Backend y APIs', blurb: 'Microservicios, mensajería y APIs' },
  apps: { label: 'Apps abiertas', blurb: 'Productos que mantengo en abierto' },
  web: { label: 'Web y móvil', blurb: 'PWAs, offline-first y móvil' },
  infra: { label: 'DevOps e infra', blurb: 'Contenedores, virtualización y servidores' },
  security: { label: 'Seguridad', blurb: 'Criptografía y análisis de amenazas' },
};

type ProjectEs = {
  title?: string;
  summary: string;
  featured?: { tagline: string; problem: string; approach: string; outcome: string };
};

export const PROJECTS_ES: Record<string, ProjectEs> = {
  tomoreader: {
    summary: 'Lector de cómics y manga de escritorio con núcleo en Rust',
    featured: {
      tagline: 'Lector de cómics y manga de escritorio',
      problem:
        'Los lectores CBR/CBZ de escritorio o son pesados, o olvidan dónde te quedaste, o te cansan la vista en sesiones largas.',
      approach:
        'Un núcleo en Rust extrae y pagina los archivos sin bloquear la interfaz, con la biblioteca guardada en SQLite y organizada en bolsillos. La interfaz es React sobre Tauri 2, con temas pensados para leer de noche: sepia, oscuro y OLED.',
      outcome:
        'Una app de escritorio multiplataforma que retoma la lectura donde la dejaste y mantiene la biblioteca ordenada sin depender de ningún servicio externo.',
    },
  },
  'cv-maker': {
    summary: 'Creador de hojas de vida con vista previa A4 en vivo y exportación a PDF en un clic',
    featured: {
      tagline: 'Creador de hojas de vida elegante',
      problem:
        'Mantener la hoja de vida en LaTeX da un resultado impecable, pero deja fuera a quien no quiere pelear con la sintaxis.',
      approach:
        'Convertí mi propia plantilla LaTeX en una aplicación web: secciones que se agregan y reordenan al vuelo, una vista previa A4 fiel al resultado impreso y exportación a PDF en un clic. Todo corre en el navegador, sin registro y sin servidor.',
      outcome:
        'Una herramienta pública que cualquiera puede usar, con el mismo resultado tipográfico del original.',
    },
  },
  'autotranslate-anki': {
    summary: 'Complemento de Anki que completa las traducciones de un mazo entero',
    featured: {
      tagline: 'Complemento de Anki para vocabulario',
      problem:
        'Capturar vocabulario sobre la marcha es fácil; traducir cada tarjeta a mano después es lo que hace que la gente abandone el mazo.',
      approach:
        'Un complemento en Python que recorre cada nota de un mazo y llena el campo de traducción de una sola vez, contra un endpoint de traducción gratuito y sin clave de API. El par de idiomas y el mapeo de campos son configurables.',
      outcome:
        'Un mazo de cientos de tarjetas se traduce con un clic, sin credenciales y sin servicios de pago.',
    },
  },
  'ml-algorithms': {
    summary: 'Pipeline de ML que compara seis algoritmos con métricas operativas',
    featured: {
      tagline: 'Pipeline de machine learning de extremo a extremo',
      problem:
        'Elegir un algoritmo por costumbre es la forma más rápida de obtener un modelo que luce bien en el papel y falla en producción.',
      approach:
        'Un pipeline completo sobre un conjunto de datos operativo: preparación, ingeniería de características y una comparación de seis algoritmos (regresión logística, árboles de decisión, KNN y otros), todos evaluados con el mismo protocolo.',
      outcome:
        'Una comparación reproducible que muestra qué aporta cada familia de modelos y a qué costo, en lugar de un único modelo sin nada con qué contrastarlo.',
    },
  },
  'nlp-reglamento': {
    title: 'NLP — Clasificador de reglamento',
    summary: 'Clasifica secciones de un reglamento en PDF en categorías predefinidas',
    featured: {
      tagline: 'Clasificación de documentos a partir de PDF sin procesar',
      problem:
        'Un reglamento largo en PDF es texto sin estructura: saber qué artículo aplica a un caso obliga a leerlo completo.',
      approach:
        'Un sistema que ingiere los PDF, extrae y normaliza el texto (limpieza, tokenización, eliminación de stopwords) y clasifica cada sección en categorías predefinidas con scikit-learn.',
      outcome:
        'El documento pasa de ser un muro de texto a una estructura que se puede consultar por categoría.',
    },
  },
  'catsdogs-ai': {
    summary: 'Clasificador de imágenes con Transfer Learning (EfficientNetB0) y una interfaz web',
  },
  'knn-titanic': {
    summary: 'K-Nearest Neighbors sobre el dataset del Titanic, de la limpieza a la evaluación',
  },
  'synthetic-data': {
    title: 'Generación de datos sintéticos',
    summary: 'Genera datos tabulares sintéticos a partir de un conjunto real para pruebas',
  },
  'savings-plan': {
    title: 'Generador de plan de ahorro',
    summary: 'Construye planes de ahorro diarios y los exporta a Excel',
  },
  'polyglot-microservices': {
    title: 'Microservicios políglotas',
    summary: 'Tres servicios en stacks distintos detrás de un gateway, con descubrimiento de servicios',
    featured: {
      tagline: 'Arquitectura de microservicios políglota',
      problem:
        'Los sistemas distribuidos reales rara vez se escriben en un solo lenguaje, y la teoría de microservicios se vuelve interesante justo cuando stacks distintos tienen que hablarse.',
      approach:
        'Tres servicios independientes, cada uno en el stack que mejor le queda (la autenticación en Go con Gin y Redis para sesiones y tokens), coordinados por un API Gateway central con descubrimiento automático de servicios.',
      outcome:
        'Un banco de pruebas funcional donde conviven el descubrimiento de servicios, el enrutamiento por gateway y bases de datos especializadas en un solo sistema.',
    },
  },
  'kafka-eda': {
    title: 'Microservicios con Kafka (EDA)',
    summary: 'Arquitectura orientada a eventos con Kafka y Spring Cloud Gateway',
  },
  'streaming-kafka-redis': {
    title: 'Microservicios de streaming',
    summary: 'Simulación de streaming con tres consumidores Kafka, caché Redis y Compose',
  },
  'api-gateway-lb': {
    title: 'API Gateway + balanceador de carga',
    summary: 'Gateway en Spring con balanceo de carga y autenticación por token de acceso',
  },
  eureka: {
    title: 'Descubrimiento de servicios con Eureka',
    summary: 'Registro y resolución dinámicos de microservicios con Eureka',
  },
  'jpa-relations': {
    title: 'Libros y editoriales (JPA)',
    summary: 'Relaciones entre entidades y persistencia con Spring Boot 3.2',
  },
  'graphql-docker': {
    title: 'API GraphQL con Docker',
    summary: 'API GraphQL en NestJS con esquema tipado, en contenedor',
  },
  'laravel-passport': {
    title: 'API segura con Laravel Passport',
    summary: 'API REST con OAuth2 mediante Passport, documentada y probada',
  },
  'almendros-mobile': {
    title: 'Almendros — App móvil de pedidos',
    summary: 'App en React Native con inicio de sesión por documento e historial de pedidos sincronizado',
  },
  'pouchdb-offline': {
    title: 'Almacén offline-first con PouchDB',
    summary: 'PWA que guarda registros y archivos adjuntos en IndexedDB',
  },
  'pwa-caching': {
    title: 'Estrategias de caché en PWA',
    summary: 'Compara cache-first, network-first y stale-while-revalidate en Service Workers',
  },
  'angular-pwa': {
    summary: 'PWA en Angular: instalabilidad, soporte offline y herramientas de CLI',
  },
  'habit-tracker': {
    title: 'PWA de seguimiento de hábitos',
    summary: 'App instalable para el seguimiento diario de hábitos',
  },
  'calendar-ai': {
    title: 'Calendario con IA',
    summary: 'Calendario asistido por IA construido con Next.js',
  },
  hipervisores: {
    title: 'IaaS y virtualización',
    summary: 'Una red de tres máquinas virtuales: hipervisor, redes y aprovisionamiento',
  },
  'proxmox-docs': {
    title: 'Documentación de Proxmox',
    summary: 'Notas de instalación y operación de Proxmox VE, de cero a máquinas virtuales',
  },
  'oracle-docker': {
    title: 'Oracle DB en Docker',
    summary: 'Oracle Database listo para usar, sin instalación local',
  },
  'block-cipher': {
    title: 'Cifrado por bloques a medida',
    summary: 'Sustitución, transposición y XOR guiados por generación pseudoaleatoria',
  },
  'phishing-explorer': {
    title: 'Explorador de phishing',
    summary: 'Herramienta en Java para explorar y analizar URLs de phishing',
  },
};

const MONTHS_ES: Record<string, string> = {
  Jan: 'Ene',
  Apr: 'Abr',
  Aug: 'Ago',
  Dec: 'Dic',
  Present: 'Presente',
};

/** "Aug – Sep 2025" → "Ago – Sep 2025"; months that match in both languages are untouched. */
export function periodEs(period: string): string {
  return period.replace(/\b(Jan|Apr|Aug|Dec|Present)\b/g, (match) => MONTHS_ES[match]);
}
