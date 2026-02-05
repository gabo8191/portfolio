# Gabriel Castillo | Portfolio

Personal portfolio website showcasing my experience as a Backend Developer with 3+ years of experience building scalable REST APIs, microservices architectures, and containerized applications.

Built with Astro 5, React 19, TailwindCSS 4, and Paper Shaders for animated backgrounds.

## Features

- Modern, responsive design with animated gradient backgrounds
- Professional experience showcase with detailed project descriptions
- Technical skills organized by category (Languages, Backend, Databases, DevOps)
- Personal and professional projects gallery
- Downloadable CV in English and Spanish
- Contact information and social links

## Tech Stack

- **Framework**: Astro 5.7
- **UI Components**: React 19
- **Styling**: TailwindCSS 4
- **Animations**: Paper Shaders (Grain Gradient)
- **Deployment**: Vercel

## Getting Started

Clone Repository

```sh
git clone https://github.com/gabo8191/portfolio.git
```

Install Dependencies

```sh
npm install
```

Development

```sh
npm run dev
```

Build

```sh
npm run build
```

Preview

```sh
npm run preview
```

## Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Custom G favicon
│   ├── social-image.jpg     # OG image for social sharing
│   ├── cv-en.pdf            # English CV
│   └── cv-es.pdf            # Spanish CV
├── src/
│   ├── components/
│   │   ├── grain-gradient-background.tsx  # Animated background
│   │   ├── navigation.tsx                 # Mobile/desktop navigation
│   │   ├── footer.astro                   # Site footer
│   │   └── ...                            # Other UI components
│   ├── layouts/
│   │   ├── RootLayout.astro    # Base HTML layout
│   │   └── InfoLayout.astro    # Layout for inner pages
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # Experience & skills
│   │   ├── projects.astro      # Project showcase
│   │   ├── contact.astro       # Contact information
│   │   └── blog/               # Blog (coming soon)
│   └── styles/
│       └── global.css          # Global styles with Tailwind
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Sections

### Home

Landing page with animated Grain Gradient background, name, availability status, and quick navigation.

### About

- Professional summary
- Work experience (TotalDev, PARQ, Serempre)
- Technical skills (Languages, Backend, Databases, DevOps, Tools)
- Education (UPTC, SENA)

### Projects

- Featured personal projects (APIs, microservices, distributed systems)
- Professional work (enterprise applications, CMS, billing systems)
- Backend & data structure projects
- DevOps & distributed systems projects

### Contact

- Email, phone, location
- Social links (GitHub, LinkedIn, Twitter)
- CV download buttons

## Customization

### Background Colors

Edit the `colors` array in:

- `src/pages/index.astro` - Main page background
- `src/layouts/InfoLayout.astro` - Inner pages sidebar

### Personal Information

Update your details in:

- `src/pages/about.astro` - Experience and skills
- `src/pages/projects.astro` - Project listings
- `src/pages/contact.astro` - Contact info
- `src/layouts/RootLayout.astro` - SEO metadata

## Deployment

The site is configured for deployment on Vercel. Simply connect your repository and deploy.

For other platforms, modify `astro.config.mjs` accordingly.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Template based on [Nikola Tesla Portfolio](https://github.com/iann-mathaiya/nikola-tesla) by Ian Mathaiya
- Animated backgrounds powered by [Paper Shaders](https://github.com/paper-design/shaders)
