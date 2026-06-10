import styles from "../SymmetryChart.module.scss";
import { ChipLabelProps } from "../SymmetryChart.types";
import { getChipLayout } from "@/features/banner/utils/charts/symmetryChart";

export function ChipLabel({ viewBox, marker, config }: ChipLabelProps) {
  if (!viewBox) {
    return null;
  }

  const layout = getChipLayout({
    viewBox,
    marker,
    fontSize: config.FONT_SIZE,
    chipHeight: config.CHIP_HEIGHT,
    chipPaddingX: config.CHIP_PADDING_X,
    chipGap: config.CHIP_GAP,
    swatchSize: config.SWATCH_SIZE,
  });

  return (
    <g>
      <rect
        x={layout.chipX}
        y={layout.chipY}
        width={layout.chipWidth}
        height={config.CHIP_HEIGHT}
        rx={config.CHIP_RADIUS}
        className={styles.chip}
      />

      {layout.hasSwatch && (
        <rect
          x={layout.swatchX}
          y={layout.swatchY}
          width={config.SWATCH_SIZE}
          height={config.SWATCH_SIZE}
          fill={marker.swatchColor}
          className={styles.swatch}
        />
      )}

      <text
        x={layout.textX}
        y={layout.textY}
        textAnchor="start"
        dominantBaseline="central"
        className={styles.chipText}
      >
        {marker.label}
      </text>
    </g>
  );
}
