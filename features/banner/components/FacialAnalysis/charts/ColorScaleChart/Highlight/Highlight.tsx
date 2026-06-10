import { HighlightProps } from "../ColorScaleChart.types";
import styles from "../ColorScaleChart.module.scss";

export function Highlight({
  x,
  y,
  width,
  height,
  midY,
  config,
}: HighlightProps) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={config.HIGHLIGHT_RADIUS}
        ry={config.HIGHLIGHT_RADIUS}
        className={styles.highlight}
      />

      {[x, x + width].map((centerX) => (
        <rect
          key={`diamond-${centerX}`}
          x={centerX - config.DIAMOND_SIZE / 2}
          y={midY - config.DIAMOND_SIZE / 2}
          width={config.DIAMOND_SIZE}
          height={config.DIAMOND_SIZE}
          transform={`rotate(45 ${centerX} ${midY})`}
          className={styles.highlightDiamond}
        />
      ))}
    </>
  );
}
