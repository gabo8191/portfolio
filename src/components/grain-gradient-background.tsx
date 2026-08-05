import { GrainGradient, type GrainGradientProps } from '@paper-design/shaders-react';
import { useEffect, useRef, useState } from 'react';

// Presupuesto de píxeles del shader. Por defecto la librería usa
// minPixelRatio 2 y hasta 1920*1080*4 (8,3 Mpx), lo que para un fondo
// decorativo dispara el coste del fragment shader en cada frame.
const MAX_PIXEL_COUNT = 640 * 360;
const MIN_PIXEL_RATIO = 1;

export default function GrainGradientBackground(props: GrainGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // La librería ya pausa el rAF con la pestaña oculta y cuando speed es 0,
  // pero no sabe si el fondo está fuera de pantalla: al hacer scroll seguía
  // ocupando el hilo principal. Con IntersectionObserver lo detenemos.
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

  // Detiene la animación si el usuario pide menos movimiento (a11y + ahorro de CPU/GPU).
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const speed = prefersReduced || !inView ? 0 : (props.speed ?? 1);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <GrainGradient
        minPixelRatio={MIN_PIXEL_RATIO}
        maxPixelCount={MAX_PIXEL_COUNT}
        {...props}
        speed={speed}
        style={{ width: '100%', height: '100%', ...props.style }}
      />
    </div>
  );
}
