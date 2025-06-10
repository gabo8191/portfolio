# Personalización del Portfolio - Gabriel Castillo

## 🎯 Datos ya configurados

Tu portfolio ya está configurado con la siguiente información:

### Información Personal
- **Nombre**: Gabriel Fernando Castillo Mendieta
- **Título**: Backend Developer
- **Subtítulo**: Transitioning to DevOps Engineer
- **Email**: gabo8191@gmail.com
- **Teléfono**: +57 318 8708253
- **Ubicación**: Tunja, Colombia
- **GitHub**: https://github.com/gabo8191
- **LinkedIn**: https://linkedin.com/in/gabodev8191/

### Experiencia Laboral Configurada
1. **Backend Developer en Serempre** (Enero 2023 - Presente)
2. **Fullstack Developer Freelance en PARQ** (Mayo 2024 - Presente)

### Educación Configurada
1. **Ingeniería de Sistemas y Computación** - UPTC (2022 - Presente)
2. **Análisis y Desarrollo de Sistemas de Información** - SENA (2021 - 2023)

## 🛠️ Tecnologías Incluidas

### Backend
- PHP, Laravel, Java, Spring Boot, NestJS, Node.js, Bash

### Frontend
- React, Angular, Vue.js, TypeScript, Next.js, Blade

### Bases de Datos
- OracleDB, MySQL, MongoDB, Redis, TypeORM, Prisma

### DevOps
- Docker, Kubernetes, Jenkins, DDEV

### Herramientas
- Git, GitHub, GitLab, Swagger, PHPUnit, JUnit, Helmet.js

## 📂 Archivos a Personalizar

### 1. Foto de Perfil
Actualmente usando una imagen de Unsplash. Para cambiar:
```typescript
// src/data/portfolio.ts
avatar: "TU_URL_DE_IMAGEN_AQUÍ"
```

### 2. Agregar más proyectos
```typescript
// src/data/portfolio.ts - en el array projects
{
  id: "nuevo-id",
  title: "Nombre del Proyecto",
  description: "Descripción detallada...",
  technologies: [
    technologies.find(t => t.name === "Laravel")!,
    // más tecnologías...
  ],
  githubUrl: "https://github.com/gabo8191/tu-repo",
  featured: true, // o false
  category: "web", // o "devops", "mobile", "other"
  completedAt: "2024-XX-XX"
}
```

### 3. Comandos personalizados del terminal
```typescript
// src/utils/terminal.ts - en terminalCommands
'tu-comando': 'Respuesta del comando',
```

### 4. Agregar más experiencias
```typescript
// src/data/portfolio.ts - en el array experiences
{
  id: "nuevo-id",
  title: "Título del puesto",
  company: "Nombre de la empresa",
  period: "Fechas",
  description: "Descripción...",
  technologies: [...],
  type: "work" // o "education", "certification"
}
```

## 🎨 Personalización de Colores

Para cambiar los colores del tema:
```javascript
// tailwind.config.js
colors: {
  primary: {
    // Cambia estos valores hex
    500: '#3b82f6',
    600: '#2563eb',
    // etc...
  }
}
```

## 🌐 Comandos de Desarrollo

```bash
# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔧 Comandos del Terminal Disponibles

Ya configurados con tu información:
- `whoami` - Tu información
- `cat about.md` - Tu biografía técnica
- `ls backend/` - Tus proyectos backend
- `ls frontend/` - Tus proyectos frontend
- `cat backend/laravel-projects/serempre.md` - Detalles Serempre
- `cat frontend/parq-landing.md` - Detalles PARQ
- `docker ps` - Containers simulados
- `git status` - Estado git simulado

## 📝 Próximos Pasos Recomendados

1. **Subir a GitHub**: Crear repositorio y subir código
2. **Deploy**: Usar Netlify, Vercel o GitHub Pages
3. **Dominio personalizado**: Opcional
4. **Analytics**: Agregar Google Analytics
5. **CV PDF**: Crear y enlazar tu CV en PDF

## 🚀 URL de desarrollo

Una vez que ejecutes `npm run dev`, tu portfolio estará disponible en:
http://localhost:5173

¡Tu portfolio está listo para usar! 🎉
