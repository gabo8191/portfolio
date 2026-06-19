import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx/lite';

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
};

const CATEGORY_ORDER = [
  'All',
  'Data & AI',
  'Backend',
  'DevOps & Infra',
  'Security',
  'Web & PWA',
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All');

  const categories = useMemo(() => {
    return CATEGORY_ORDER.filter(
      (cat) =>
        cat === 'All' || projects.some((p) => p.category === cat),
    );
  }, [projects]);

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category === active),
    [active, projects],
  );

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={clsx(
                'flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-full border transition-all duration-300',
                isActive
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-100'
                  : 'text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-zinc-200',
              )}
            >
              {cat}
              <span
                className={clsx(
                  'text-xs tabular-nums',
                  isActive ? 'text-zinc-500' : 'text-zinc-600',
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grilla animada */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.a
              layout
              key={project.title}
              href={project.githubUrl ?? project.liveUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex flex-col p-5 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:border-zinc-500 hover:bg-zinc-800/60 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="shrink-0 px-2 py-0.5 text-[11px] text-zinc-400 bg-zinc-700/50 rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-4 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 text-[11px] text-zinc-300 bg-zinc-700/60 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>{project.githubUrl ? 'View on GitHub' : 'View Live'}</span>
                <ArrowIcon />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
