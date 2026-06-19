import { GrainGradient, type GrainGradientProps } from '@paper-design/shaders-react';

export default function GrainGradientBackground(props: GrainGradientProps) {
  const defaultProps = {
    speed: 1,
    style: { width: '100%', height: '100%' },
  };

  // Detiene la animación si el usuario pide menos movimiento (a11y + ahorro de CPU/GPU).
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const speed = prefersReduced ? 0 : (props.speed ?? defaultProps.speed);

  return (
    <GrainGradient
      {...defaultProps}
      {...props}
      speed={speed}
      style={{ ...defaultProps.style, ...props.style }}
    />
  );
}
