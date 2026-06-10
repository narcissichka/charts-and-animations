import { FacialThirdsChartConfig } from "../FacialThirdsChart.const";
import { ViewBox } from "../FacialThirdsChart.types";
import styles from "../FacialThirdsChart.module.scss";

const Label = (
  text: string,
  className: string,
  yOffset: number,
  addHeight?: boolean,
) =>
  function RechartsLabel({ x, y, height, width }: ViewBox) {
    const cx = x as number;
    const cy = y as number;
    const w = width as number;
    const h = height as number;

    const offsetY = addHeight ? yOffset + h : yOffset;

    return (
      <text
        x={cx + w / 2}
        y={cy + offsetY}
        textAnchor="middle"
        dominantBaseline="alphabetic"
        className={styles[className]}
      >
        {text}
      </text>
    );
  };

/** Label rendered just above each segment */
export const TopLabel = (text: string, config: FacialThirdsChartConfig) =>
  Label(text, "topLabel", -config.TOP_LABEL_OFFSET);

/** Value rendered just below each segment */
export const ValueLabel = (text: string, config: FacialThirdsChartConfig) =>
  Label(text, "value", config.BOTTOM_VALUE_OFFSET, true);
