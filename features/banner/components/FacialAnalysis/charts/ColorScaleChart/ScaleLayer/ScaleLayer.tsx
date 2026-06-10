import { usePlotArea } from "recharts";
import { ScaleLayerProps } from "../ColorScaleChart.types";
import { useMemo } from "react";
import { HelperLine } from "../HelperLine/HelperLine";
import { ColorSegments } from "../ColorSegments/ColorSegments";
import { ScaleBorder } from "../ScaleBorder/ScaleBorder";
import { Annotations } from "../Annotations/Annotations";
import { LeftMarkerChip, RightMarkerChip } from "../MarkerChip/MarkerChip";
import { Highlight } from "../Highlight/Highlight";
import {
  getScaleSegments,
  getScaleLayout,
  getValueY,
  getHighlightLayout,
} from "@/features/banner/utils/charts/colorScale";

export function ScaleLayer({
  value,
  min,
  max,
  label,
  sideLabel,
  colorStops,
  swatchColor,
  annotations,
  config,
}: ScaleLayerProps) {
  const plot = usePlotArea();

  const normalizedColorStops = useMemo(
    () => (colorStops.length > 0 ? colorStops : []),
    [colorStops],
  );

  const segments = useMemo(
    () => getScaleSegments(normalizedColorStops, config.SCALE_HEIGHT),
    [normalizedColorStops, config.SCALE_HEIGHT],
  );

  if (!plot || normalizedColorStops.length === 0 || min === max) {
    return null;
  }

  const { scaleX, scaleY } = getScaleLayout({
    plotX: plot.x,
    plotY: plot.y,
    plotWidth: plot.width,
    plotHeight: plot.height,
    scaleWidth: config.SCALE_WIDTH,
    scaleHeight: config.SCALE_HEIGHT,
  });

  const markerCenterY = getValueY({
    value,
    min,
    max,
    scaleY,
    scaleHeight: config.SCALE_HEIGHT,
  });

  const markerY = markerCenterY - config.MARKER_HEIGHT / 2;

  const highlight = getHighlightLayout({
    value,
    min,
    max,
    scaleX,
    segments,
    scaleWidth: config.SCALE_WIDTH,
    paddingX: config.HIGHLIGHT_PADDING_X,
    diamondSize: config.DIAMOND_SIZE,
  });

  const leftChipX = scaleX - config.MARKER_WIDTH - config.LEFT_CHIP_GAP;
  const rightChipWidth = config.MARKER_WIDTH / 2;
  const rightSegmentStart = scaleX + config.SCALE_WIDTH;
  const rightSegmentEnd = plot.x + plot.width;
  const rightChipX =
    (rightSegmentStart + rightSegmentEnd) / 2 - rightChipWidth / 2;

  return (
    <g>
      <HelperLine x={plot.x} width={plot.width} y={markerCenterY} />

      <ColorSegments
        scaleX={scaleX}
        scaleY={scaleY}
        segments={segments}
        config={config}
      />

      <ScaleBorder scaleX={scaleX} scaleY={scaleY} config={config} />

      <Annotations
        annotations={annotations}
        min={min}
        max={max}
        scaleX={scaleX}
        scaleY={scaleY}
        config={config}
      />

      <Highlight
        x={highlight.x}
        y={scaleY + highlight.y}
        width={highlight.width}
        height={highlight.height}
        midY={scaleY + highlight.midY}
        config={config}
      />

      <LeftMarkerChip
        x={leftChipX}
        y={markerY}
        centerY={markerCenterY}
        label={label}
        swatchColor={swatchColor}
        config={config}
      />

      <RightMarkerChip
        x={rightChipX}
        y={markerY}
        width={rightChipWidth}
        centerY={markerCenterY}
        label={sideLabel}
        config={config}
      />
    </g>
  );
}
