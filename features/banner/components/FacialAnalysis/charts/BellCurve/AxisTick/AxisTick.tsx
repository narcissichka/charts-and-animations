import styles from "../BellCurve.module.scss";
import { RechartsAxisTickProps, TickLabel } from "../BellCurve.types";

export const AxisTick = (tickLabel: TickLabel) =>
  function BellCurveAxis(params: RechartsAxisTickProps) {
    const { x, y, height, payload } = params as {
      x: number;
      y: number;
      height: number;
      payload: RechartsAxisTickProps["payload"];
    };

    const label = tickLabel[payload.value] ?? "";

    return (
      <text x={x} y={(1 / 5) * height + y} className={styles.axisLabel}>
        {label}
      </text>
    );
  };
