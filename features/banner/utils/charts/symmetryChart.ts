import { ChartOffsetInternal } from "recharts/types/util/types";
import {
  GetAxisTickLabelsParams,
  GetChipLayoutParams,
} from "../../components/FacialAnalysis/charts/SymmetryChart/SymmetryChart.types";

function estimateTextWidth(text: string, fontSize: number) {
  return text.length * fontSize * 0.78;
}

export function getYDomain(markerCount: number, padding: number) {
  return [-padding, markerCount - 1 + padding] as const;
}

export function getAxisTickLabels({
  min,
  max,
  leftAxisLabel,
  rightAxisLabel,
}: GetAxisTickLabelsParams) {
  return {
    [min]: leftAxisLabel,
    [max]: rightAxisLabel,
  };
}

export function getVerticalGridCoordinates({
  width,
  offset,
  gridColumns,
}: {
  width: number;
  offset: ChartOffsetInternal;
  gridColumns: number;
}) {
  return Array.from(
    { length: gridColumns + 1 },
    (_, index) => offset.left + (width * index) / gridColumns,
  );
}

export function getChipLayout({
  viewBox,
  marker,
  fontSize,
  chipHeight,
  chipPaddingX,
  chipGap,
  swatchSize,
}: GetChipLayoutParams) {
  const anchorX = viewBox.x + viewBox.width;
  const centerY = viewBox.y;
  const hasSwatch = Boolean(marker.swatchColor);
  const text = String(marker.label);
  const textWidth = estimateTextWidth(text, fontSize);
  const contentWidth = textWidth + (hasSwatch ? swatchSize + chipGap : 0);
  const chipWidth = contentWidth + chipPaddingX * 2;
  const chipX = anchorX - chipWidth;
  const chipY = centerY - chipHeight / 2;
  const textX = chipX + chipPaddingX + (hasSwatch ? swatchSize + chipGap : 0);

  return {
    hasSwatch,
    chipX,
    chipY,
    chipWidth,
    textX,
    textY: centerY,
    swatchX: chipX + chipPaddingX,
    swatchY: centerY - swatchSize / 2,
  };
}
