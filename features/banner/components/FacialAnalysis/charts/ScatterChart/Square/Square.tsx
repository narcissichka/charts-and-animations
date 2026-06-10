import { CSSProperties } from "react";
import { CellShape, ScatterPointVariant } from "../ScatterChart.types";
import { ScatterChartConfig } from "../ScatterChart.const";
import styles from "../ScatterChart.module.scss";

const VARIANT_OPACITY: Record<ScatterPointVariant, number> = {
  dim: 0.12,
  soft: 0.22,
  highlight: 0.45,
  you: 0.95,
};

export const Square = (size: number, config: ScatterChartConfig) =>
  function ScatterCell({ cx, cy, payload }: CellShape) {
    const variant = payload?.variant ?? "dim";
    const hoverVariant = payload?.hoverVariant ?? variant;

    const style = {
      "--cell-opacity": VARIANT_OPACITY[variant],
      "--cell-hover-opacity": VARIANT_OPACITY[hoverVariant],
    } as CSSProperties;

    return (
      <rect
        x={(cx ?? 0) - size / 2}
        y={(cy ?? 0) - size / 2}
        width={size}
        height={size}
        rx={config.CELL_RADIUS}
        className={styles.cell}
        style={style}
      />
    );
  };
