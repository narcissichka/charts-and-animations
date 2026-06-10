import { ColorSegmentsProps } from "../ColorScaleChart.types";

export function ColorSegments({
  scaleX,
  scaleY,
  segments,
  config,
}: ColorSegmentsProps) {
  return (
    <>
      {segments.map((segment) => (
        <rect
          key={segment.key}
          x={scaleX}
          y={scaleY + segment.y}
          width={config.SCALE_WIDTH}
          height={segment.height}
          fill={segment.color}
        />
      ))}
    </>
  );
}
