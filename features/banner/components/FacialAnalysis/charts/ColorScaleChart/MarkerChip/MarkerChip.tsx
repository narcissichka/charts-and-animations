import {
  LeftMarkerChipProps,
  MarkerChipProps,
  RightMarkerChipProps,
} from "../ColorScaleChart.types";
import styles from "../ColorScaleChart.module.scss";

export function MarkerChip({ x, y, width, children, config }: MarkerChipProps) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={config.MARKER_HEIGHT}
        rx={config.MARKER_RADIUS}
        className={styles.marker}
      />
      {children}
    </>
  );
}

export function LeftMarkerChip({
  x,
  y,
  centerY,
  label,
  swatchColor,
  config,
}: LeftMarkerChipProps) {
  const swatchX = x + config.SWATCH_PADDING_X;
  const textX = swatchX + config.SWATCH_SIZE + config.SWATCH_TEXT_GAP;

  return (
    <MarkerChip
      x={x}
      y={y}
      width={config.MARKER_WIDTH}
      centerY={centerY}
      config={config}
    >
      <rect
        x={swatchX}
        y={centerY - config.SWATCH_SIZE / 2}
        width={config.SWATCH_SIZE}
        height={config.SWATCH_SIZE}
        fill={swatchColor}
        className={styles.swatch}
      />
      <text
        x={textX}
        y={centerY}
        textAnchor="start"
        dominantBaseline="central"
        className={styles.markerText}
      >
        {label}
      </text>
    </MarkerChip>
  );
}

export function RightMarkerChip({
  x,
  y,
  width,
  centerY,
  label,
  config,
}: RightMarkerChipProps) {
  return (
    <MarkerChip x={x} y={y} width={width} centerY={centerY} config={config}>
      <text
        x={x + width / 2}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        className={styles.markerText}
      >
        {label}
      </text>
    </MarkerChip>
  );
}
