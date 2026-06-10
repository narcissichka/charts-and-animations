import styles from "../ColorScaleChart.module.scss";
import { ScaleBorderProps } from "../ColorScaleChart.types";

export function ScaleBorder({ scaleX, scaleY, config }: ScaleBorderProps) {
  return (
    <rect
      x={scaleX}
      y={scaleY}
      width={config.SCALE_WIDTH}
      height={config.SCALE_HEIGHT}
      className={styles.scaleBorder}
    />
  );
}
