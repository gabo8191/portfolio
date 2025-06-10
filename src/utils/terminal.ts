export const executeCommand = (command: string, t: (key: string, options?: any) => string): string => {
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

Experience: 2 years and 7 months in software development
Specialization: Backend development with Laravel and NestJS
Current Studies: Computer and Systems Engineering at UPTC
Focus: Transitioning to DevOps and Site Reliability Engineering`;

    case 'pwd':
      return '/home/gabriel/portfolio';

    case 'ls':
      return `total 12
drwxr-xr-x 2 gabriel gabriel 4096 Dec 16 10:30 backend/
drwxr-xr-x 2 gabriel gabriel 4096 Dec 16 10:30 frontend/
drwxr-xr-x 2 gabriel gabriel 4096 Dec 16 10:30 projects/
-rw-r--r-- 1 gabriel gabriel  512 Dec 16 10:30 about.md
-rw-r--r-- 1 gabriel gabriel  256 Dec 16 10:30 experience.md
-rw-r--r-- 1 gabriel gabriel  128 Dec 16 10:30 education.md
-rw-r--r-- 1 gabriel gabriel  64  Dec 16 10:30 contact.md`;

    case 'ls backend/':
    case 'ls backend':
      return `total 8
drwxr-xr-x 2 gabriel gabriel 2048 Dec 16 10:30 laravel/
drwxr-xr-x 2 gabriel gabriel 1536 Dec 16 10:30 nestjs/
drwxr-xr-x 2 gabriel gabriel 1024 Dec 16 10:30 spring-boot/
drwxr-xr-x 2 gabriel gabriel  512 Dec 16 10:30 php/`;

    case 'ls frontend/':
    case 'ls frontend':
      return `total 6
drwxr-xr-x 2 gabriel gabriel 1536 Dec 16 10:30 react/
drwxr-xr-x 2 gabriel gabriel 1024 Dec 16 10:30 angular/
drwxr-xr-x 2 gabriel gabriel  768 Dec 16 10:30 nextjs/
drwxr-xr-x 2 gabriel gabriel  512 Dec 16 10:30 vue/`;

    case 'ls projects/':
    case 'ls projects':
      return `total 6
-rw-r--r-- 1 gabriel gabriel 1024 Dec 16 10:30 portfolio-website/
-rw-r--r-- 1 gabriel gabriel  768 Dec 16 10:30 laravel-api-boilerplate/
-rw-r--r-- 1 gabriel gabriel  512 Dec 16 10:30 nestjs-task-manager/
-rw-r--r-- 1 gabriel gabriel  256 Dec 16 10:30 react-ecommerce/
-rw-r--r-- 1 gabriel gabriel  128 Dec 16 10:30 docker-dev-env/
-rw-r--r-- 1 gabriel gabriel   64 Dec 16 10:30 spring-boot-api/`;

    case 'cat about.md':
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

## Serempre - ${t('experience.serempre.title')}
${t('experience.serempre.period')}
• Scalable Laravel solutions with design patterns
• Database optimization and query performance
• Legacy system modernization with Docker
• RESTful API development and documentation
• Production incident support and resolution

## Serempre - ${t('experience.senaIntern.title')}
${t('experience.senaIntern.period')}
• Backend development with PHP and Laravel
• MySQL database management
• Professional development fundamentals`;

    case 'cat education.md':
      return `# ${t('experience.education')}

## ${t('experience.uptc.company')}
${t('experience.uptc.title')}
${t('experience.uptc.period')}
• Advanced software development and system architecture
• Data structures and algorithms with Java
• Database design and optimization
• Object-Oriented Programming principles

## ${t('experience.sena.company')}
${t('experience.sena.title')}
${t('experience.sena.period')}
• Software development lifecycle methodology
• Database management and web development
• PHP, MySQL, HTML/CSS programming
• Project management fundamentals`;

    case 'skills':
      return `# ${t('skills.title')}

## Backend (Core Strength)
Laravel • NestJS • Spring Boot • PHP • Node.js

## Frontend (Practical Experience)
React • Angular • Vue.js • Next.js • TypeScript • JavaScript

## Database
MySQL • PostgreSQL • MongoDB • Redis • TypeORM • Prisma

## DevOps & Tools
Docker • Git • GitHub Actions • Linux • Nginx

## Cloud & APIs
AWS • Cloudinary • Swagger • REST APIs • Microservices

## Testing & Quality
PHPUnit • Jest • Postman • ESLint • Code Quality`;

    case 'projects':
      return `# ${t('projects.title')}

1. Portfolio Website (React + TypeScript)
   └─ Modern portfolio with dark mode and i18n

2. Laravel API Boilerplate
   └─ Base API with authentication and Swagger documentation

3. NestJS Task Manager
   └─ Task management API with TypeORM

4. React E-commerce Platform
   └─ E-commerce platform with Next.js

5. Docker Development Environment
   └─ Laravel development environment with Docker

6. Spring Boot REST API
   └─ Enterprise API with Spring Boot and JPA

GitHub: https://github.com/gabo8191`;

    case 'contact':
      return `# ${t('contact.title')}

Email: gabo8191@gmail.com
Location: Tunja, Colombia

Social Networks:
• GitHub: https://github.com/gabo8191
• LinkedIn: https://linkedin.com/in/gabodev8191/
• Twitter: https://twitter.com/@gcastillo8191

Available for:
• Backend Development (Laravel, NestJS)
• Frontend Development (React, Angular, Next.js)
• Full-stack Projects
• Technical Consulting`;

    case 'docker ps':
      return `CONTAINER ID   IMAGE              COMMAND                  STATUS         PORTS
a1b2c3d4e5f6   laravel-app:latest "/docker-entrypoint.…"   Up 2 hours     0.0.0.0:8000->80/tcp
b2c3d4e5f6a1   mysql:8.0          "docker-entrypoint.s…"   Up 2 hours     0.0.0.0:3306->3306/tcp
c3d4e5f6a1b2   redis:alpine       "docker-entrypoint.s…"   Up 2 hours     0.0.0.0:6379->6379/tcp
d4e5f6a1b2c3   nginx:alpine       "/docker-entrypoint.…"   Up 2 hours     0.0.0.0:80->80/tcp

Laravel development environment containers`;

    case 'git status':
      return `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)

	modified:   src/components/ui/ProjectCard.tsx
	modified:   src/data/portfolio.ts
	modified:   src/utils/terminal.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	src/components/ui/ProfessionalProjectCard.tsx
	src/components/pages/Certifications.tsx

no changes added to commit (use "git add" or "git commit -a")`;

    case 'git log':
      return `commit 8a7b6c5d4e3f2a1b (HEAD -> main, origin/main)
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Mon Dec 16 10:30:00 2024 -0500

    feat: add professional timeline and improve UX

commit 7b6c5d4e3f2a1b8a
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Sun Dec 15 15:45:30 2024 -0500

    refactor: separate personal and professional projects

commit 6c5d4e3f2a1b8a7b
Author: Gabriel Castillo <gabo8191@gmail.com>
Date:   Sat Dec 14 09:20:15 2024 -0500

    feat: implement multilingual CV download system`;

    case 'composer show':
      return `laravel/framework                v10.35.0  The Laravel Framework.
laravel/passport                 v11.10.1  OAuth2 server support
laravel/sanctum                  v3.3.2    Authentication for SPAs
doctrine/dbal                    v3.7.2    Database abstraction layer
spatie/laravel-permission        v5.11.1   Roles and permissions
guzzlehttp/guzzle               v7.8.0    HTTP client library`;

    case 'npm list':
      return `portfolio@0.0.0 /home/gabriel/portfolio
├── @nestjs/common@10.2.10
├── @nestjs/core@10.2.10
├── @nestjs/typeorm@10.0.1
├── react@18.2.0
├── @angular/core@17.0.5
├── next@14.0.4
├── typescript@5.3.3
└── tailwindcss@3.3.6`;

    case 'clear':
      return '';

    default:
      return `${cmd}: ${t('terminal.commandNotFound')}. ${t('terminal.typeHelp')}`;
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
