import styles from "../SymmetryChart.module.scss";
import { AxisTickProps, RechartsAxisTickProps } from "../SymmetryChart.types";

export const AxisTick = ({ axisTickLabels, min, config }: AxisTickProps) => {
  return function AxisTick({ x, y, payload }: RechartsAxisTickProps) {
    const isLeft = payload.value === min;
    return (
      <text
        x={x}
        y={(y as number) + config.AXIS_TICK_Y_OFFSET}
        textAnchor={isLeft ? "start" : "end"}
        className={styles.axisLabel}
      >
        {axisTickLabels[payload.value] ?? ""}
      </text>
    );
  };
};
