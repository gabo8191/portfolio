export const executeCommand = (
  command: string,
  t: (key: string, options?: unknown) => string
): string => {
  const cmd = command.toLowerCase().trim();

  switch (cmd) {
    case 'help':
      return `${t('terminal.availableCommands')}:

  whoami         - ${t('terminal.commands.whoami')}
  pwd            - ${t('terminal.commands.pwd')}
  ls             - ${t('terminal.commands.ls')}
  cat about.md   - ${t('terminal.commands.cat')}
  cat experience.md - Show work experience
  cat education.md  - Show education background
  docker ps      - ${t('terminal.commands.dockerPs')}
  git status     - ${t('terminal.commands.gitStatus')}
  git log        - ${t('terminal.commands.gitLog')}
  composer show  - ${t('terminal.commands.composer')}
  npm list       - ${t('terminal.commands.npm')}
  skills         - Show technical skills
  projects       - List personal projects
  work           - Show work experience
  contact        - Show contact information
  clear          - ${t('terminal.commands.clear')}
  help           - ${t('terminal.commands.help')}

${t('terminal.exploreHint')}: ls backend/, cat experience.md, skills`;

    case 'whoami':
      return `gabriel

Gabriel Fernando Castillo Mendieta
${t('hero.title')} - ${t('hero.subtitle')}
Location: Tunja, Colombia
Email: gabo8191@gmail.com
GitHub: https://github.com/gabo8191
LinkedIn: https://linkedin.com/in/gabodev8191/

Experience: 3 years in professional software development
Specialization: Backend development with Laravel and NestJS
Current Studies: Computer and Systems Engineering at UPTC
Professional Interest: Exploring opportunities in DevOps and Data Engineering`;

    case 'pwd':
      return '/home/gabriel/portfolio';

    case 'ls':
      return `drwxr-xr-x  4 gabriel gabriel   128 Dec 14 10:30 backend/
drwxr-xr-x  3 gabriel gabriel    96 Dec 14 10:30 frontend/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 projects/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 scripts/
-rw-r--r--  1 gabriel gabriel  1430 Dec 14 10:30 about.md
-rw-r--r--  1 gabriel gabriel  2140 Dec 14 10:30 experience.md
-rw-r--r--  1 gabriel gabriel   890 Dec 14 10:30 education.md
-rw-r--r--  1 gabriel gabriel   450 Dec 14 10:30 contact.md
-rw-r--r--  1 gabriel gabriel   320 Dec 14 10:30 README.md`;

    case 'ls backend/':
    case 'ls backend':
      return `drwxr-xr-x  3 gabriel gabriel    96 Dec 14 10:30 laravel/
drwxr-xr-x  3 gabriel gabriel    96 Dec 14 10:30 nestjs/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 microservices/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 apis/
-rw-r--r--  1 gabriel gabriel   340 Dec 14 10:30 docker-compose.yml
-rw-r--r--  1 gabriel gabriel   180 Dec 14 10:30 Dockerfile`;

    case 'ls frontend/':
    case 'ls frontend':
      return `drwxr-xr-x  3 gabriel gabriel    96 Dec 14 10:30 react/
drwxr-xr-x  3 gabriel gabriel    96 Dec 14 10:30 angular/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 nextjs/
drwxr-xr-x  2 gabriel gabriel    64 Dec 14 10:30 vue/
-rw-r--r--  1 gabriel gabriel   250 Dec 14 10:30 package.json
-rw-r--r--  1 gabriel gabriel   120 Dec 14 10:30 tailwind.config.js`;

    case 'cat about.md': {
      const focusAreas = t('about.focusAreas', { returnObjects: true });
      const areas = Array.isArray(focusAreas) ? focusAreas : [];
      return `# ${t('about.title')}

${t('about.description')}

## ${t('about.currentFocus')}
${areas.map((area: string, index: number) => `${index + 1}. ${area}`).join('\n')}

## ${t('skills.title')}
- Backend: Laravel, NestJS, Spring Boot, PHP, Node.js
- Frontend: React, Angular, Vue.js, Next.js, TypeScript
- Database: MySQL, PostgreSQL, MongoDB, Redis
- DevOps: Docker, Git, GitHub Actions, Linux

---
${t('hero.subtitle')} | Email: gabo8191@gmail.com`;
    }

    case 'cat experience.md':
    case 'work':
      return `# ${t('experience.workExperience')}

## PARQ - ${t('experience.parq.title')}
${t('experience.parq.period')}
• Microservices architecture with NestJS (microlithic)
• Electronic billing middleware for Colombian market
• Frontend modules in React and Angular
• Landing page with Next.js SSR and internationalization
• SEO optimization and performance improvements
• Docker container deployment with Portainer

## Serempre - ${t('experience.serempre.title')}
${t('experience.serempre.period')}
• Scalable Laravel solutions with design patterns
• Database optimization and query performance
• Legacy system modernization with Docker
• RESTful API development and documentation
• Production incident support and resolution
• Vue.js frontend integration and Bootstrap UI

## Serempre - ${t('experience.senaIntern.title')}
${t('experience.senaIntern.period')}
• Backend development with PHP and Laravel
• MySQL database management
• Professional development fundamentals
• Collaborative development environment`;

    case 'cat education.md':
      return `# ${t('experience.education')}

## ${t('experience.uptc.company')}
${t('experience.uptc.title')}
${t('experience.uptc.period')}
• Advanced software development and system architecture
• Data structures and algorithms with Java
• Database design and optimization
• Object-Oriented Programming principles
• Software engineering methodologies

## ${t('experience.sena.company')}
${t('experience.sena.title')}
${t('experience.sena.period')}
• Full-stack web development lifecycle
• Database management and web development
• PHP, MySQL, HTML/CSS programming
• Project management fundamentals
• Capstone project: Inventory management system`;

    case 'skills':
      return `# ${t('skills.title')}

## Backend (Core Expertise - 3 Years)
Laravel • NestJS • Spring Boot • PHP • Node.js • Express.js

## Frontend (Professional Experience)
React • Angular • Vue.js • Next.js • TypeScript • JavaScript

## Database & Storage
MySQL • PostgreSQL • MongoDB • Redis • TypeORM • Prisma

## DevOps & Infrastructure (Growing Interest)
Docker • Git • GitHub Actions • Linux • Nginx • Portainer

## Cloud & Integration
AWS • Cloudinary • Swagger • REST APIs • Microservices

## Testing & Quality
PHPUnit • Jest • Postman • ESLint • SonarQube

## Professional Development Interests
• DevOps Engineering: CI/CD, Infrastructure automation
• Data Engineering: ETL processes, Data pipelines
• Cloud Platforms: AWS, GCP, Azure
• Container Orchestration: Kubernetes, Docker Swarm`;

    case 'projects':
      return `# ${t('projects.title')}

## Featured Projects

1. Professional Portfolio Website (React + TypeScript)
   └─ Modern portfolio with dark mode, i18n, and terminal simulation

2. Almendros Backend API (NestJS + TypeScript)
   └─ Production-ready API with security, testing, and CI/CD

3. Fleet Management System (Spring Boot + Java)
   └─ Enterprise-grade application with Docker and GitHub Actions

4. Microservices with Kafka & Redis
   └─ Distributed streaming system with event-driven architecture

5. Load Balancer Middleware System
   └─ Production-grade load balancing with health monitoring

6. Custom Cipher Algorithm (Flask + Python)
   └─ Cryptographic implementation with web interface

## Technologies Used
Frontend: React, Angular, Vue.js, Next.js, TypeScript
Backend: Laravel, NestJS, Spring Boot, Flask
Database: MySQL, PostgreSQL, MongoDB, Redis
DevOps: Docker, Kubernetes, GitHub Actions
Cloud: AWS services, Cloudinary

GitHub: https://github.com/gabo8191`;

    case 'contact':
      return `# Contact Information

Gabriel Fernando Castillo Mendieta
Backend Developer | Open to DevOps & Data Engineering

📧 Email: gabo8191@gmail.com
📱 Phone: +57 318 8708253
📍 Location: Tunja, Colombia

🔗 Social Links:
• GitHub: https://github.com/gabo8191
• LinkedIn: https://linkedin.com/in/gabodev8191/
• Twitter: https://twitter.com/@gcastillo8191

💼 Professional Status:
Currently open to opportunities in:
• Backend Development (Laravel, NestJS)
• DevOps Engineering (Docker, CI/CD, Infrastructure)
• Data Engineering (ETL, Data Pipelines, Analytics)

Available for: Full-time positions, freelance projects, and consulting`;

    case 'docker ps':
      return `CONTAINER ID   IMAGE                    COMMAND                  STATUS         PORTS                    NAMES
a1b2c3d4e5f6   laravel-api:latest      "php artisan serve"      Up 2 hours     0.0.0.0:8000->8000/tcp   laravel_api
b2c3d4e5f6a7   nestjs-microservice     "npm run start:prod"     Up 2 hours     0.0.0.0:3000->3000/tcp   nestjs_service
c3d4e5f6a7b8   postgres:15             "docker-entrypoint.s…"   Up 2 hours     0.0.0.0:5432->5432/tcp   postgres_db
d4e5f6a7b8c9   redis:alpine            "docker-entrypoint.s…"   Up 2 hours     0.0.0.0:6379->6379/tcp   redis_cache
e5f6a7b8c9d0   nginx:alpine            "/docker-entrypoint.…"   Up 2 hours     0.0.0.0:80->80/tcp       nginx_proxy`;

    case 'git status':
      return `On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)
        modified:   src/components/pages/Home.tsx
        modified:   src/i18n/locales/en.json
        modified:   src/i18n/locales/es.json

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   README.md
        modified:   src/utils/terminal.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/deployment.md`;

    case 'git log':
      return `commit f8e9a0b1c2d3e4f5 (HEAD -> main, origin/main)
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Sat Dec 14 10:30:15 2024 -0500

    feat: update professional profile with 3 years experience

    - Updated hero and about sections with current experience
    - Enhanced professional descriptions for HR quality
    - Added openness to DevOps and Data Engineering opportunities
    - Modernized UI components and image focus

commit d7e8f9a0b1c2d3e4
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Fri Dec 13 16:45:32 2024 -0500

    fix: resolve TypeScript linter errors in Home component

    - Fixed 'any' type usage in getTechLevel function
    - Added proper type definitions for technology objects

commit c6d7e8f9a0b1c2d3
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Thu Dec 12 14:20:18 2024 -0500

    feat: add interactive terminal simulation

    - Implemented portfolio terminal with command execution
    - Added realistic command responses and file structure
    - Enhanced user engagement with technical demonstration`;

    case 'composer show':
      return `laravel/framework                 v10.35.0  The Laravel Framework.
laravel/sanctum                   v3.3.2    Laravel Sanctum provides API token authentication
laravel/tinker                    v2.8.2    Powerful REPL for the Laravel framework
spatie/laravel-permission         v5.11.1   Associate users with roles and permissions
tymon/jwt-auth                    v2.0.0    A JSON Web Token authentication package
doctrine/dbal                     v3.7.2    Powerful PHP database abstraction layer
intervention/image                v2.7.2    Image handling and manipulation library
maatwebsite/excel                 v3.1.48   Supercharged Excel exports and imports`;

    case 'npm list':
      return `portfolio@1.0.0 /home/gabriel/portfolio
├── @types/react@18.2.43
├── @types/react-dom@18.2.17
├── @typescript-eslint/eslint-plugin@6.13.1
├── @typescript-eslint/parser@6.13.1
├── @vitejs/plugin-react@4.2.0
├── eslint@8.54.0
├── eslint-plugin-react-hooks@4.6.0
├── eslint-plugin-react-refresh@0.4.4
├── i18next@23.7.6
├── react@18.2.0
├── react-dom@18.2.0
├── react-i18next@13.5.0
├── react-icons@4.12.0
├── tailwindcss@3.3.6
├── typescript@5.3.2
└── vite@5.0.2`;

    case 'kubectl get pods':
    case 'kubectl pods':
      return `NAME                              READY   STATUS    RESTARTS   AGE
laravel-api-7b8c9d0e1f-2g3h4     1/1     Running   0          2h15m
nestjs-service-8c9d0e1f2g-3h4i   1/1     Running   0          2h15m
postgres-db-9d0e1f2g3h-4i5j      1/1     Running   0          2h20m
redis-cache-0e1f2g3h4i-5j6k      1/1     Running   0          2h20m
nginx-proxy-1f2g3h4i5j-6k7l      1/1     Running   0          2h18m`;

    case 'ps aux | grep php':
    case 'ps php':
      return `gabriel    12345  0.1  2.3  456789  98765 ?        S    10:30   0:02 php artisan serve
gabriel    12346  0.2  1.8  345678  87654 ?        S    10:30   0:03 php-fpm: master process
gabriel    12347  0.1  1.5  234567  76543 ?        S    10:31   0:01 php-fpm: pool www
gabriel    12348  0.1  1.5  234567  76543 ?        S    10:31   0:01 php-fpm: pool www
gabriel    12349  0.0  0.1   12345   6789 pts/0    S+   12:45   0:00 grep --color=auto php`;

    case 'clear':
      return '\x1b[2J\x1b[H';

    default:
      return `${t('terminal.commandNotFound')}: ${command}

${t('terminal.typeHelp')}`;
  }
};

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const generatePrompt = (): string => {
  return 'gabriel@portfolio:~$ ';
};
