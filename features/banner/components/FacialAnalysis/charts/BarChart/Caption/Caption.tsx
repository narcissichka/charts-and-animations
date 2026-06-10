import { CaptionProps } from "../BarChart.types";
import styles from "../BarChart.module.scss";

export function Caption({ caption, x, y, anchor, dx = 0 }: CaptionProps) {
  return (
    <text
      x={x}
      y={y}
      dx={dx}
      textAnchor={anchor}
      dominantBaseline="alphabetic"
      className={styles.tick}
    >
      {caption}
    </text>
  );
}
