import styles from "../BarChart.module.scss";
import { ValuePillProps } from "../BarChart.types";

export function ValuePill({ caption, x, y, config }: ValuePillProps) {
  const cx = x + config.PILL_OFFSET_X;
  const cy = y;

  return (
    <g>
      <rect
        x={cx - config.PILL_WIDTH / 2}
        y={cy - config.PILL_HEIGHT / 2}
        width={config.PILL_WIDTH}
        height={config.PILL_HEIGHT}
        rx={config.PILL_HEIGHT / 2}
        className={styles.pill}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        className={styles.tick}
      >
        {caption}
      </text>
    </g>
  );
}
