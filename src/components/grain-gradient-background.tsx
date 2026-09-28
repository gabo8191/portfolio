import { GrainGradient, type GrainGradientProps } from '@paper-design/shaders-react';
import { useEffect, useRef, useState } from 'react';

// Keep the decorative shader's fragment workload within a small pixel budget.
const MAX_PIXEL_COUNT = 640 * 360;
const MIN_PIXEL_RATIO = 1;

type BackgroundProps = GrainGradientProps & { showControls?: boolean };

export default function GrainGradientBackground({ showControls = false, ...props }: BackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [paused, setPaused] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // Stop rendering when the background leaves the viewport.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '100px' },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReduced(query.matches);
    syncPreference();
    query.addEventListener('change', syncPreference);
    return () => query.removeEventListener('change', syncPreference);
  }, []);

  const speed = paused || prefersReduced || !inView ? 0 : (props.speed ?? 1);

  return (
    <div ref={containerRef} className="animated-art">
      <div className="animated-art__canvas" aria-hidden="true">
        <GrainGradient
          minPixelRatio={MIN_PIXEL_RATIO}
          maxPixelCount={MAX_PIXEL_COUNT}
          {...props}
          speed={speed}
          style={{ width: '100%', height: '100%', ...props.style }}
        />
      </div>
      {showControls && !prefersReduced && (
        <button
          className="motion-toggle"
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
        >
          {paused ? 'Play motion' : 'Pause motion'}
        </button>
      )}
    </div>
  );
}
