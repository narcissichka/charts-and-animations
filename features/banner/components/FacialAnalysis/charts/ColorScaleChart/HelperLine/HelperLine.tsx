import { HelperLineProps } from "../ColorScaleChart.types";
import styles from "../ColorScaleChart.module.scss";

export function HelperLine({ x, width, y }: HelperLineProps) {
  return (
    <line x1={x} x2={x + width} y1={y} y2={y} className={styles.helperLine} />
  );
}
