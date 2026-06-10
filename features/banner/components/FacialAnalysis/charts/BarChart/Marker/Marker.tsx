import {
  getMarkerLayout,
  drawTopCap,
  drawBottomCap,
} from "@/features/banner/utils/charts/barChart";
import { MarkerProps } from "../BarChart.types";
import styles from "../BarChart.module.scss";

export function Marker({ viewBox, config }: MarkerProps) {
  if (!viewBox) {
    return null;
  }

  const { lineX, top, bottom } = getMarkerLayout({
    viewBox,
    barSize: config.BAR_SIZE,
    lineOffsetX: config.LINE_OFFSET_X,
    lineBottomOffset: config.LINE_BOTTOM_OFFSET,
  });

  return (
    <g>
      <line
        x1={lineX}
        y1={top + config.LINE_TOP_OFFSET}
        x2={lineX}
        y2={bottom}
        className={styles.divider}
      />

      <path
        d={drawTopCap(lineX, top, config.CAP_HALF_WIDTH, config.CAP_HEIGHT)}
        className={styles.cap}
      />
      <path
        d={drawBottomCap(
          lineX,
          bottom,
          config.CAP_HALF_WIDTH,
          config.BOTTOM_CAP_OFFSET_Y,
        )}
        className={styles.cap}
      />
    </g>
  );
}
