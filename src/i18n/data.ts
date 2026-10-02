// Locale-aware views over the data files. The English data stays the source of truth;
// Spanish only overlays prose, so a stack or URL is never duplicated.
import { AREAS, PROJECTS, type Area, type Project } from '../data/projects';
import {
  EMPLOYERS,
  PROFESSIONAL_PROJECTS,
  type Employer,
  type ProfessionalProject,
} from '../data/professional';
import { AREAS_ES, EMPLOYERS_ES, PROFESSIONAL_ES, PROJECTS_ES, periodEs } from './content-es';
import type { Lang } from './index';

/** A professional project plus the English title it can be looked up by in any locale. */
export type LocalizedProfessionalProject = ProfessionalProject & { key: string };

function required<T>(value: T | undefined, what: string): T {
  if (value === undefined) throw new Error(`Missing Spanish translation for ${what}`);
  return value;
}

export function getEmployers(lang: Lang): Employer[] {
  if (lang === 'en') return EMPLOYERS;
  return EMPLOYERS.map((employer) => ({
    ...employer,
    ...required(EMPLOYERS_ES[employer.name], `employer "${employer.name}"`),
    period: periodEs(employer.period),
  }));
}

export function getProfessionalProjects(lang: Lang): LocalizedProfessionalProject[] {
  return PROFESSIONAL_PROJECTS.map((project) => {
    if (lang === 'en') return { ...project, key: project.title };
    const es = required(PROFESSIONAL_ES[project.title], `professional project "${project.title}"`);
    return {
      ...project,
      ...es,
      key: project.title,
      period: project.period && periodEs(project.period),
    };
  });
}

export function getAreas(lang: Lang): Area[] {
  if (lang === 'en') return AREAS;
  return AREAS.map((area) => ({ ...area, ...required(AREAS_ES[area.id], `area "${area.id}"`) }));
}

export function getProjects(lang: Lang): Project[] {
  if (lang === 'en') return PROJECTS;
  return PROJECTS.map((project) => {
    const es = required(PROJECTS_ES[project.slug], `project "${project.slug}"`);
    return {
      ...project,
      title: es.title ?? project.title,
      summary: es.summary,
      featured: project.featured
        ? { ...project.featured, ...required(es.featured, `featured copy of "${project.slug}"`) }
        : undefined,
    };
  });
}
