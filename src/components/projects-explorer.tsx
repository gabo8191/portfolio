import { useMemo, useState } from 'react';
import clsx from 'clsx/lite';
import type { Area, AreaId, Project } from '../data/projects';
import { getUi, type Lang } from '../i18n';

type Props = { projects: Project[]; areas: Area[]; lang: Lang };

// The X axis is real time: each dot sits on the month the project was worked
// on, so the chart answers "when did he build what?", which a list cannot.
const FIRST_MONTH = '2023-01';
const LAST_MONTH = '2026-09';

// The viewBox is close to the real render width (~830px): scaling the SVG
// down would make the labels unreadable.
const CHART = {
  width: 800,
  gutter: 152,
  laneHeight: 50,
  paddingRight: 24,
  paddingTop: 14,
  axisHeight: 32,
};

const INK = '#0d0d0d';

const monthIndex = (value: string): number => {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
};

const SPAN_START = monthIndex(FIRST_MONTH);
const SPAN_END = monthIndex(LAST_MONTH);

const plotWidth = CHART.width - CHART.gutter - CHART.paddingRight;
const chartHeightFor = (laneCount: number) =>
  CHART.paddingTop + laneCount * CHART.laneHeight + CHART.axisHeight;

/** Horizontal position of a `YYYY-MM` month inside the plot area. */
function xFor(date: string): number {
  const ratio = (monthIndex(date) - SPAN_START) / (SPAN_END - SPAN_START);
  return CHART.gutter + ratio * plotWidth;
}

const YEARS = [2023, 2024, 2025, 2026];

/** Spreads dots of the same lane and quarter vertically so they never overlap. */
function withOffsets(items: Project[]) {
  const buckets = new Map<number, Project[]>();
  for (const project of items) {
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

export default function ProjectsExplorer({ projects, areas, lang }: Props) {
  const { explorer: ui, common } = getUi(lang);
  const areaOf = (id: AreaId) => areas.find((area) => area.id === id);
  const chartHeight = chartHeightFor(areas.length);
  const [selected, setSelected] = useState<string | null>(null);
  const [areaFilter, setAreaFilter] = useState<AreaId | null>(null);
  const [techFilter, setTechFilter] = useState<string | null>(null);

  // Technologies used by two or more projects: the only ones worth filtering by
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

  const selectedProject = projects.find((project) => project.slug === selected) ?? null;

  // Index grouped by year, newest first
  const byYear = useMemo(() => {
    const groups = new Map<string, Project[]>();
    for (const project of [...matching].sort((a, b) => b.date.localeCompare(a.date))) {
      const year = project.date.slice(0, 4);
      groups.set(year, [...(groups.get(year) ?? []), project]);
    }
    return [...groups.entries()];
  }, [matching]);

  const activeFilterLabel = [areaFilter && areaOf(areaFilter)?.label, techFilter]
    .filter(Boolean)
    .join(' + ');

  const clearFilters = () => {
    setAreaFilter(null);
    setTechFilter(null);
  };

  return (
    <div className="explorer">
      {/* Stack filter: over a time axis it shows when each tool was used */}
      <div className="explorer__filters">
        <span className="mono">{ui.filterByStack}</span>
        {topTechnologies.map(([tech, count]) => {
          const isActive = techFilter === tech;
          return (
            <button
              key={tech}
              type="button"
              onClick={() => setTechFilter(isActive ? null : tech)}
              aria-pressed={isActive}
              className={clsx('chip', isActive && 'chip--active')}
            >
              {tech}
              <span className="chip__count">{count}</span>
            </button>
          );
        })}
        {(areaFilter || techFilter) && (
          <button type="button" onClick={clearFilters} className="chip chip--clear">
            {ui.clear} {activeFilterLabel} ✕
          </button>
        )}
      </div>

      {/* Timeline (desktop only: it becomes unreadable on narrow screens) */}
      <div className="explorer__chart block">
        <svg
          viewBox={`0 0 ${CHART.width} ${chartHeight}`}
          role="group"
          aria-label={ui.chartLabel}
        >
          {areas.map((area, laneIndex) => {
            const laneY = CHART.paddingTop + laneIndex * CHART.laneHeight + CHART.laneHeight / 2;
            const items = projects.filter((project) => project.area === area.id);
            const offsets = withOffsets(items);
            const laneActive = areaFilter === area.id;

            return (
              <g key={area.id}>
                <rect
                  x={CHART.gutter - 8}
                  y={laneY - CHART.laneHeight / 2 + 4}
                  width={plotWidth + 8}
                  height={CHART.laneHeight - 8}
                  fill={laneActive ? area.color : INK}
                  fillOpacity={laneActive ? 0.28 : 0.04}
                  stroke={laneActive ? INK : 'none'}
                  strokeWidth={2}
                />

                {/* Lane label: filters by area */}
                <g
                  role="button"
                  tabIndex={0}
                  aria-pressed={laneActive}
                  aria-label={ui.filterByArea(area.label, items.length)}
                  className="explorer__lane"
                  onClick={() => setAreaFilter(laneActive ? null : area.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setAreaFilter(laneActive ? null : area.id);
                    }
                  }}
                >
                  <rect x="0" y={laneY - 18} width={CHART.gutter - 14} height="36" fill="transparent" />
                  <rect x="4" y={laneY - 10} width="11" height="11" fill={area.color} stroke={INK} strokeWidth={2} />
                  <text x="22" y={laneY} className="explorer__lane-label">
                    {area.label}
                  </text>
                  <text x="22" y={laneY + 15} className="explorer__lane-count">
                    {ui.projectsCount(items.length)}
                  </text>
                </g>

                {items.map((project) => {
                  const isMatch = matches(project);
                  const isSelected = selected === project.slug;
                  const cx = xFor(project.date);
                  const cy = laneY - 4 + (offsets.get(project.slug) ?? 0);
                  const size = isSelected ? 14 : 10;

                  return (
                    <g
                      key={project.slug}
                      role="button"
                      tabIndex={isMatch ? 0 : -1}
                      aria-label={`${project.title}, ${area.label}, ${project.date}`}
                      aria-pressed={isSelected}
                      className="explorer__dot"
                      onClick={() => setSelected(isSelected ? null : project.slug)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelected(isSelected ? null : project.slug);
                        }
                      }}
                      onMouseEnter={() => setSelected(project.slug)}
                      onFocus={() => setSelected(project.slug)}
                      style={{ opacity: isMatch ? 1 : 0.15 }}
                    >
                      {isSelected && (
                        <rect x={cx - size / 2 + 3} y={cy - size / 2 + 3} width={size} height={size} fill={INK} />
                      )}
                      <rect
                        x={cx - size / 2}
                        y={cy - size / 2}
                        width={size}
                        height={size}
                        fill={area.color}
                        stroke={INK}
                        strokeWidth={2}
                      />
                      {/* Generous hit area: a 10px square is hard to aim at */}
                      <circle cx={cx} cy={cy} r="14" fill="transparent" />
                    </g>
                  );
                })}
              </g>
            );
          })}

          {YEARS.map((year) => {
            const x = xFor(`${year}-01`);
            return (
              <g key={year}>
                <line
                  x1={x}
                  y1={CHART.paddingTop - 6}
                  x2={x}
                  y2={chartHeight - CHART.axisHeight + 6}
                  stroke={INK}
                  strokeDasharray="4 6"
                  strokeOpacity="0.45"
                />
                <text x={x} y={chartHeight - 8} textAnchor="middle" className="explorer__year">
                  {year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel with a fixed height: hovering dots must not shift the page */}
      <aside className="explorer__detail block" aria-live="polite">
        {selectedProject ? (
          <div className="explorer__detail-body">
            <div>
              <p className="mono">
                {areaOf(selectedProject.area)?.label} · {selectedProject.date}
              </p>
              <h3>{selectedProject.title}</h3>
              <p className="muted">{selectedProject.featured?.problem ?? selectedProject.summary}</p>
              <div className="tags">
                {selectedProject.technologies.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => setTechFilter(tech)}
                    className="chip"
                    title={ui.filterByTech(tech)}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="explorer__detail-links">
              {selectedProject.githubUrl && (
                <a className="link" href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  {ui.viewGithub}
                </a>
              )}
              {selectedProject.liveUrl && (
                <a className="link" href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  {ui.tryLive}
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="explorer__summary">
            <p className="explorer__count">{matching.length}</p>
            <p>
              {areaFilter || techFilter
                ? `${ui.matchPrefix} ${activeFilterLabel}.`
                : ui.betweenYears}{' '}
              <span className="muted">{ui.helpText}</span>
            </p>
          </div>
        )}
      </aside>

      {/* Index by year: also the only view on mobile */}
      <div className="explorer__index">
        {byYear.length === 0 && (
          <p>
            {ui.noMatch}{' '}
            <button type="button" onClick={clearFilters} className="chip chip--clear">
              {ui.clearFilters}
            </button>
          </p>
        )}

        {byYear.map(([year, items]) => (
          <section key={year} className="explorer__year-group">
            <h3 className="explorer__year-title">
              <span>{year}</span>
              <span className="mono">{ui.projectsCount(items.length)}</span>
            </h3>

            <ul className="explorer__list">
              {items.map((project) => {
                const area = areaOf(project.area);
                return (
                  <li key={project.slug}>
                    <a
                      href={project.githubUrl ?? project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setSelected(project.slug)}
                      className="explorer__item"
                    >
                      <span className="explorer__item-title">
                        <span
                          className="explorer__swatch"
                          style={{ backgroundColor: area?.color }}
                          aria-hidden="true"
                        />
                        {project.title}
                      </span>
                      <span className="muted">{project.summary}</span>
                      <span className="explorer__item-tags">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </span>
                      <span className="sr-only">{common.opensInNewTab}</span>
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
