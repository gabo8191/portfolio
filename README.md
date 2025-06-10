# Gabriel Castillo - Portfolio

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, internationalization (English/Spanish), and an interactive DevOps terminal simulation.

## 🚀 Features

- **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless adaptability
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Internationalization**: Full English/Spanish support with i18next
- **Interactive Terminal**: DevOps command simulation with real project data
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Code Quality**: ESLint, Prettier, and strict TypeScript configuration
- **Performance**: Optimized bundle size and fast loading times

## 🛠️ Technologies

### Frontend
- React 19 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons for iconography
- Vite for build tooling

### Quality & Tools
- ESLint with strict rules
- Prettier for code formatting
- TypeScript strict mode
- Responsive design patterns
- Semantic HTML5

### DevOps Features
- Terminal simulation
- Command history
- Realistic development environment showcase
- Docker, Kubernetes, Git command examples

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/gabo8191/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues automatically
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # TypeScript type checking

# Utilities
npm run clean           # Clean build directory
npm run analyze         # Bundle size analysis
npm run prepare         # Pre-commit checks
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Sidebar, MainContent)
│   ├── pages/           # Page components (Projects, Experience, Terminal)
│   └── ui/              # Reusable UI components
├── contexts/            # React contexts (Theme, Locale)
├── data/                # Portfolio data and content
├── i18n/               # Internationalization configuration
│   └── locales/        # Translation files (en.json, es.json)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🌐 Internationalization

The portfolio supports English and Spanish languages:

- Language toggle button in sidebar
- Complete translation of all content
- Persistent language preference
- Dynamic document title updates

### Adding New Languages

1. Create new translation file in `src/i18n/locales/`
2. Add language to `src/i18n/index.ts`
3. Update `LocaleContext` to include new language option

## 🎨 Customization

### Personal Information
Update your data in `src/data/portfolio.ts`:
- Personal information and contact details
- Work experience and education
- Projects and technologies
- Social media links

### Styling
- Modify Tailwind CSS configuration in `tailwind.config.js`
- Update CSS variables in `src/index.css`
- Customize component styles in individual files

### Terminal Commands
Add or modify terminal commands in `src/utils/terminal.ts`:
- Custom command responses
- Project-specific file structures
- DevOps tool outputs

## 📄 CV Download

To enable CV download functionality:

1. Place your CV file in `public/cv/`
2. Name it exactly: `Gabriel_Castillo_CV.pdf`
3. The download will work automatically from the sidebar button

Supported formats: PDF (recommended), DOCX

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build project
npm run build

# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

## 🔧 Configuration

### Environment Variables
Create `.env` file for environment-specific settings:
```env
VITE_SITE_URL=https://your-domain.com
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

### ESLint Configuration
Customize code quality rules in `.eslintrc.cjs`:
- React best practices
- TypeScript strict rules
- Import organization
- Code style enforcement

### Prettier Configuration
Format settings in `.prettierrc`:
- Single quotes
- Semicolons
- 2-space indentation
- Trailing commas

## 🎯 Performance

- **Bundle Size**: ~315KB (gzipped: ~98KB)
- **CSS Size**: ~26KB (gzipped: ~5KB)
- **Build Time**: ~2 seconds
- **First Load**: Optimized with code splitting
- **Images**: Lazy loading and optimization

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Gabriel Fernando Castillo Mendieta
- Email: gabo8191@gmail.com
- LinkedIn: [gabodev8191](https://linkedin.com/in/gabodev8191/)
- GitHub: [gabo8191](https://github.com/gabo8191)

## 🙏 Acknowledgments

- React community for amazing ecosystem
- Tailwind CSS for utility-first styling
- Vite for lightning-fast development
- Open source contributors

---

Made with ❤️ by Gabriel Castillo
