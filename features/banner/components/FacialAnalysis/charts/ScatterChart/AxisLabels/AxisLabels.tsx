import styles from "../ScatterChart.module.scss";
import { AxisLabelsProps } from "../ScatterChart.types";

export function AxisLabels({ axisLabel }: AxisLabelsProps) {
  return (
    <>
      <span className={`${styles.axis} ${styles.top}`}>{axisLabel.top}</span>
      <span className={`${styles.axis} ${styles.left}`}>{axisLabel.left}</span>
      <span className={`${styles.axis} ${styles.right}`}>
        {axisLabel.right}
      </span>
      <span className={`${styles.axis} ${styles.bottom}`}>
        {axisLabel.bottom}
      </span>
    </>
  );
}
