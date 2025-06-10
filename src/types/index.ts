export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'vanilla' | 'proof-of-concept';
  completedAt: string;
  featured?: boolean;
}

export interface ProfessionalProject {
  id: string;
  company: string;
  title: string;
  description: string;
  technologies: Technology[];
  period: string;
  category: string;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'tools' | 'cloud';
  icon?: string;
  color?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: Technology[];
  type: 'work' | 'education' | 'certification';
  area?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

export interface TerminalCommand {
  command: string;
  output: string;
  timestamp: Date;
}

export interface TerminalSession {
  id: string;
  commands: TerminalCommand[];
  isActive: boolean;
}

export type SectionId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'contact';
