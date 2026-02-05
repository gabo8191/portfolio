import {
  GrainGradient,
  type GrainGradientProps,
} from '@paper-design/shaders-react';

export default function GrainGradientBackground(props: GrainGradientProps) {
  const defaultProps = {
    speed: 1,
    style: { width: '100%', height: '100%' },
  };

  return (
    <GrainGradient
      {...defaultProps}
      {...props}
      style={{ ...defaultProps.style, ...props.style }}
    />
  );
}
