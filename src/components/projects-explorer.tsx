import { useMemo, useState } from 'react';
import clsx from 'clsx/lite';
import { AREAS, type AreaId, type Project } from '../data/projects';

type Props = { projects: Project[] };

// El eje X es tiempo real, no decoración: cada punto se sitúa en el mes en que
// se trabajó el proyecto. Así el gráfico responde "¿cuándo hizo qué?", que es
// justo lo que una lista no puede contar.
const FIRST_MONTH = '2023-01';
const LAST_MONTH = '2026-09';

// El viewBox se elige cercano al ancho real de render (~830px dentro del
// layout): si el SVG se escala hacia abajo, las etiquetas se vuelven ilegibles.
const CHART = {
  width: 800,
  gutter: 132, // espacio para las etiquetas de carril
  laneHeight: 50,
  paddingRight: 24,
  paddingTop: 14,
  axisHeight: 32,
};

const monthIndex = (value: string): number => {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
};

const SPAN_START = monthIndex(FIRST_MONTH);
const SPAN_END = monthIndex(LAST_MONTH);

const plotWidth = CHART.width - CHART.gutter - CHART.paddingRight;
const chartHeight =
  CHART.paddingTop + AREAS.length * CHART.laneHeight + CHART.axisHeight;

/** Posición horizontal de un mes `YYYY-MM` dentro del área de trazado. */
function xFor(date: string): number {
  const ratio = (monthIndex(date) - SPAN_START) / (SPAN_END - SPAN_START);
  return CHART.gutter + ratio * plotWidth;
}

const YEARS = [2023, 2024, 2025, 2026];

/**
 * Reparte verticalmente los proyectos que caen en el mismo carril y en meses
 * cercanos, para que no se pisen los puntos. Sin esto, septiembre de 2025 en
 * Backend sería un solo punto en lugar de cuatro.
 */
function withOffsets(items: Project[]) {
  const buckets = new Map<number, Project[]>();
  for (const project of items) {
    // Agrupa por trimestre: dos puntos a menos de ~3 meses se solapan visualmente
    const bucket = Math.round(monthIndex(project.date) / 3);
    buckets.set(bucket, [...(buckets.get(bucket) ?? []), project]);
  }

  const offsets = new Map<string, number>();
  for (const group of buckets.values()) {
    const step = 11;
    const start = -((group.length - 1) * step) / 2;
    group.forEach((project, index) => {
      offsets.set(project.slug, start + index * step);
    });
  }
  return offsets;
}

export default function ProjectsExplorer({ projects }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [areaFilter, setAreaFilter] = useState<AreaId | null>(null);
  const [techFilter, setTechFilter] = useState<string | null>(null);

  // Tecnologías que aparecen en dos o más proyectos: las que de verdad dicen
  // algo al filtrar. Las de un solo uso solo ensucian la barra.
  const topTechnologies = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      for (const tech of project.technologies) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .filter(([, count]) => count > 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 10);
  }, [projects]);

  const matches = (project: Project) =>
    (areaFilter === null || project.area === areaFilter) &&
    (techFilter === null || project.technologies.includes(techFilter));

  const matching = useMemo(
    () => projects.filter(matches),
    [projects, areaFilter, techFilter],
  );

  const selectedProject =
    projects.find((project) => project.slug === selected) ?? null;

  // Índice agrupado por año, del más reciente al más antiguo
  const byYear = useMemo(() => {
    const groups = new Map<string, Project[]>();
    for (const project of [...matching].sort((a, b) =>
      b.date.localeCompare(a.date),
    )) {
      const year = project.date.slice(0, 4);
      groups.set(year, [...(groups.get(year) ?? []), project]);
    }
    return [...groups.entries()];
  }, [matching]);

  const activeFilterLabel = [
    areaFilter && AREAS.find((a) => a.id === areaFilter)?.label,
    techFilter,
  ]
    .filter(Boolean)
    .join(' + ');

  const clearFilters = () => {
    setAreaFilter(null);
    setTechFilter(null);
  };

  return (
    <div>
      {/* ── Filtro por tecnología ────────────────────────────────────
          Sobre el eje temporal, filtrar por stack enseña en qué época se
          usó cada cosa, no solo cuántos proyectos la usan. */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="text-xs uppercase tracking-wider text-zinc-500 mr-1">
          Filter by stack
        </span>
        {topTechnologies.map(([tech, count]) => {
          const isActive = techFilter === tech;
          return (
            <button
              key={tech}
              type="button"
              onClick={() => setTechFilter(isActive ? null : tech)}
              aria-pressed={isActive}
              className={clsx(
                'px-2.5 py-1 text-xs rounded-full border transition-colors',
                isActive
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-100'
                  : 'text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-zinc-200',
              )}
            >
              {tech}
              <span className="ml-1 tabular-nums opacity-60">{count}</span>
            </button>
          );
        })}
        {(areaFilter || techFilter) && (
          <button
            type="button"
            onClick={clearFilters}
            className="px-2.5 py-1 text-xs rounded-full border border-violet-500/60 text-violet-300 hover:bg-violet-500/10 transition-colors"
          >
            Clear {activeFilterLabel} ✕
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {/* ── Línea de tiempo ──────────────────────────────────────── */}
        <div className="hidden lg:block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <svg
            viewBox={`0 0 ${CHART.width} ${chartHeight}`}
            className="w-full h-auto"
            role="group"
            aria-label="Timeline of projects by area. Select a project to see its details."
          >
            {AREAS.map((area, laneIndex) => {
              const laneY =
                CHART.paddingTop + laneIndex * CHART.laneHeight + CHART.laneHeight / 2;
              const items = projects.filter(
                (project) => project.area === area.id,
              );
              const offsets = withOffsets(items);
              const laneActive = areaFilter === area.id;

              return (
                <g key={area.id}>
                  {/* Banda del carril */}
                  <rect
                    x={CHART.gutter - 8}
                    y={laneY - CHART.laneHeight / 2 + 3}
                    width={plotWidth + 8}
                    height={CHART.laneHeight - 6}
                    rx="8"
                    fill={laneActive ? area.color : '#ffffff'}
                    fillOpacity={laneActive ? 0.07 : 0.02}
                  />

                  {/* Etiqueta del carril: filtra por área */}
                  <g
                    role="button"
                    tabIndex={0}
                    aria-pressed={laneActive}
                    aria-label={`Filter by ${area.label}, ${items.length} projects`}
                    className="cursor-pointer outline-none"
                    onClick={() =>
                      setAreaFilter(laneActive ? null : area.id)
                    }
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setAreaFilter(laneActive ? null : area.id);
                      }
                    }}
                  >
                    <rect
                      x="0"
                      y={laneY - 18}
                      width={CHART.gutter - 14}
                      height="36"
                      fill="transparent"
                    />
                    <circle
                      cx="10"
                      cy={laneY - 4}
                      r="4"
                      fill={area.color}
                      fillOpacity={laneActive ? 1 : 0.7}
                    />
                    <text
                      x="22"
                      y={laneY}
                      className={clsx(
                        'text-[13px]',
                        laneActive ? 'fill-zinc-100' : 'fill-zinc-400',
                      )}
                    >
                      {area.label}
                    </text>
                    <text x="22" y={laneY + 15} className="fill-zinc-600 text-[11px]">
                      {items.length} projects
                    </text>
                  </g>

                  {/* Un punto por proyecto, situado en su mes */}
                  {items.map((project) => {
                    const isMatch = matches(project);
                    const isSelected = selected === project.slug;
                    const cx = xFor(project.date);
                    const cy = laneY - 4 + (offsets.get(project.slug) ?? 0);

                    return (
                      <g
                        key={project.slug}
                        role="button"
                        tabIndex={isMatch ? 0 : -1}
                        aria-label={`${project.title}, ${area.label}, ${project.date}`}
                        aria-pressed={isSelected}
                        className="cursor-pointer outline-none"
                        onClick={() =>
                          setSelected(isSelected ? null : project.slug)
                        }
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setSelected(isSelected ? null : project.slug);
                          }
                        }}
                        onMouseEnter={() => setSelected(project.slug)}
                        onFocus={() => setSelected(project.slug)}
                        style={{
                          opacity: isMatch ? 1 : 0.15,
                          transition: 'opacity 300ms ease',
                        }}
                      >
                        {isSelected && (
                          <circle
                            cx={cx}
                            cy={cy}
                            r="13"
                            fill={area.color}
                            fillOpacity="0.25"
                          />
                        )}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? 6.5 : 5}
                          fill={area.color}
                          stroke={isSelected ? '#fafafa' : 'transparent'}
                          strokeWidth="1.5"
                          style={{ transition: 'r 200ms ease' }}
                        />
                        {/* Área de click generosa: 5px de radio es poco puntería */}
                        <circle cx={cx} cy={cy} r="14" fill="transparent" />
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Rejilla y etiquetas de año */}
            {YEARS.map((year) => {
              const x = xFor(`${year}-01`);
              return (
                <g key={year}>
                  <line
                    x1={x}
                    y1={CHART.paddingTop - 6}
                    x2={x}
                    y2={chartHeight - CHART.axisHeight + 6}
                    stroke="rgb(63 63 70)"
                    strokeDasharray="3 5"
                    strokeOpacity="0.6"
                  />
                  <text
                    x={x}
                    y={chartHeight - 8}
                    textAnchor="middle"
                    className="fill-zinc-500 text-[12px] tabular-nums"
                  >
                    {year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ── Panel de detalle ─────────────────────────────────────── */}
        {/* Alto fijo: el panel cambia con el hover y sin reservarle sitio la
            página daría saltos cada vez que se pasa por un punto. */}
        <aside
          className="hidden lg:block rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 min-h-[7.5rem]"
          aria-live="polite"
        >
          {selectedProject ? (
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: AREAS.find(
                        (a) => a.id === selectedProject.area,
                      )?.color,
                    }}
                    aria-hidden="true"
                  />
                  <span className="text-xs text-zinc-500 tabular-nums">
                    {AREAS.find((a) => a.id === selectedProject.area)?.label} ·{' '}
                    {selectedProject.date}
                  </span>
                </div>

                <h3 className="text-lg text-zinc-100 mb-1.5">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-zinc-400 max-w-3xl">
                  {selectedProject.featured?.problem ?? selectedProject.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedProject.technologies.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setTechFilter(tech)}
                      className="px-1.5 py-0.5 text-[11px] text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
                      title={`Filter by ${tech}`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
                  >
                    View on GitHub →
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-300 hover:text-violet-200 transition-colors whitespace-nowrap"
                  >
                    Try it live →
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 h-full">
              <p className="text-3xl text-zinc-200 tabular-nums shrink-0">
                {matching.length}
              </p>
              <p className="text-sm text-zinc-500">
                {areaFilter || techFilter
                  ? `projects match ${activeFilterLabel}.`
                  : 'projects between 2023 and 2026.'}{' '}
                <span className="text-zinc-600">
                  Hover a dot to preview it here, click an area to filter the
                  lane, or pick a stack above to see when that technology shows
                  up.
                </span>
              </p>
            </div>
          )}
        </aside>
      </div>

      {/* ── Índice agrupado por año ──────────────────────────────────
          Es también el único camino en móvil, donde la línea de tiempo no
          cabe sin volverse ilegible. */}
      <div className="mt-8">
        {byYear.length === 0 && (
          <p className="text-sm text-zinc-500 py-6">
            No projects match that combination.{' '}
            <button
              type="button"
              onClick={clearFilters}
              className="text-violet-300 hover:text-violet-200 underline underline-offset-4"
            >
              Clear filters
            </button>
          </p>
        )}

        {byYear.map(([year, items]) => (
          <section key={year} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm text-zinc-500 tabular-nums">{year}</h3>
              <span className="h-px grow bg-zinc-800" />
              <span className="text-xs text-zinc-600 tabular-nums">
                {items.length}
              </span>
            </div>

            <ul className="list-none p-0 m-0 divide-y divide-zinc-800/70">
              {items.map((project) => {
                const area = AREAS.find((a) => a.id === project.area);
                return (
                  <li key={project.slug}>
                    <a
                      href={project.githubUrl ?? project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setSelected(project.slug)}
                      className="group grid gap-x-4 gap-y-1 grid-cols-1 md:grid-cols-[minmax(0,15rem)_1fr_auto] md:items-baseline py-3 px-2 -mx-2 rounded-lg hover:bg-zinc-800/40 transition-colors"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <span
                          className="shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: area?.color }}
                          aria-hidden="true"
                        />
                        <span className="text-zinc-200 group-hover:text-white transition-colors truncate">
                          {project.title}
                        </span>
                      </span>

                      <span className="text-sm text-zinc-400 min-w-0">
                        {project.summary}
                      </span>

                      <span className="flex items-center gap-3 shrink-0">
                        <span className="hidden lg:flex flex-wrap gap-1.5 justify-end">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 text-[11px] text-zinc-400 bg-zinc-800 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 shrink-0 text-zinc-600 -rotate-45 group-hover:rotate-0 group-hover:text-zinc-300 transition-all duration-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
