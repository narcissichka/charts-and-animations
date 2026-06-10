import {
  getBarLayout,
  getCaptionX,
  getCaptionAnchor,
} from "@/features/banner/utils/charts/barChart";
import { Caption } from "../Caption/Caption";
import { ValuePill } from "../ValuePill/ValuePill";
import { BarShapeProps } from "../BarChart.types";
import styles from "../BarChart.module.scss";

export function BarShape({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  value,
  tickLabel,
  config,
  fullWidth,
}: BarShapeProps) {
  const barLayout = getBarLayout({
    y,
    height,
    barSize: config.BAR_SIZE,
    captionGap: config.CAPTION_GAP,
  });

  return (
    <g>
      <rect
        x={x}
        y={barLayout.barY}
        width={fullWidth}
        height={config.BAR_SIZE}
        rx={config.TRACK_RADIUS}
        className={styles.track}
      />

      <rect
        x={x}
        y={barLayout.barY}
        width={width}
        height={config.BAR_SIZE}
        rx={config.TRACK_RADIUS}
        className={styles.fill}
      />

      <rect
        x={x}
        y={barLayout.barY}
        width={config.MIN_FILL_WIDTH}
        height={config.BAR_SIZE}
        rx={config.TRACK_RADIUS}
        className={styles.minW}
      />

      {Object.entries(tickLabel).map(([key, renderCaption]) => {
        if (key === "value") {
          const captionX = getCaptionX({
            x,
            fullWidth,
            tickValue: value,
          });

          return (
            <ValuePill
              key={key}
              caption={renderCaption({ value })}
              x={captionX}
              y={barLayout.valuePillY}
              config={config}
            />
          );
        }

        const tickValue = Number(key);
        const captionX = getCaptionX({
          x,
          fullWidth,
          tickValue,
        });
        const anchor = getCaptionAnchor(tickValue);

        return (
          <Caption
            key={key}
            caption={renderCaption({ value })}
            x={captionX}
            y={barLayout.captionY}
            anchor={anchor}
          />
        );
      })}
    </g>
  );
}
