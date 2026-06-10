import { ColorStop, ScaleAnnotation } from "../../components/FacialAnalysis/charts/ColorScaleChart/ColorScaleChart.types";

interface GetValueYParams {
  value: number;
  min: number;
  max: number;
  scaleY: number;
  scaleHeight: number;
}

interface GetScaleLayoutParams {
  plotX: number;
  plotY: number;
  plotWidth: number;
  plotHeight: number;
  scaleWidth: number;
  scaleHeight: number;
}

interface GetHighlightLayoutParams {
  value: number;
  min: number;
  max: number;
  scaleX: number;
  scaleWidth: number;
  segments: ScaleSegment[];
  paddingX: number;
  diamondSize: number;
}

interface GetAnnotationLayoutParams {
  side: ScaleAnnotation["side"];
  scaleX: number;
  scaleWidth: number;
  connectorLength: number;
  labelGap: number;
}

export interface ScaleSegment {
  key: string;
  y: number;
  height: number;
  color: string;
}

const SEGMENT_OVERLAP = 0.5;
const SCALE_EDGE_GAP = 2;

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function getValueRatio(value: number, min: number, max: number) {
  if (min === max) {
    return 0;
  }

  return clamp((value - min) / (max - min), 0, 1);
}

export function getValueY({
  value,
  min,
  max,
  scaleY,
  scaleHeight,
}: GetValueYParams) {
  return scaleY + scaleHeight * getValueRatio(value, min, max);
}

export function getScaleLayout({
  plotX,
  plotY,
  plotWidth,
  plotHeight,
  scaleWidth,
  scaleHeight,
}: GetScaleLayoutParams) {
  const centerX = plotX + plotWidth / 2;

  return {
    scaleX: centerX - scaleWidth / 2,
    scaleY: plotY + plotHeight / 2 - scaleHeight / 2,
  };
}

export function getScaleSegments(
  colorStops: ColorStop[],
  scaleHeight: number,
): ScaleSegment[] {
  const segmentCount = colorStops.length;

  return colorStops.map((stop, index) => {
    const start = index / segmentCount;
    const end = (index + 1) / segmentCount;
    const y = scaleHeight * start;
    const rawHeight = scaleHeight * (end - start);
    const isLast = index === segmentCount - 1;

    return {
      key: `${stop.offset}-${stop.color}-${index}`,
      y,
      height: isLast ? rawHeight : rawHeight + SEGMENT_OVERLAP,
      color: stop.color,
    };
  });
}

export function getHighlightLayout({
  value,
  min,
  max,
  scaleX,
  scaleWidth,
  segments,
  paddingX,
  diamondSize,
}: GetHighlightLayoutParams) {
  const segmentCount = segments.length;
  const valueRatio = getValueRatio(value, min, max);

  const valueIndex = clamp(
    Math.floor(valueRatio * segmentCount),
    0,
    segmentCount - 1,
  );

  const fromIndex = Math.max(0, valueIndex - 1);
  const toIndex = Math.min(segmentCount - 1, valueIndex + 1);

  const y = segments[fromIndex].y;
  const bottom =
    segments[toIndex].y + segments[toIndex].height - SEGMENT_OVERLAP;
  const height = bottom - y;
  const width = scaleWidth + paddingX * 2;
  const x = scaleX - paddingX;

  return {
    x,
    y,
    width,
    height,
    midY: y + height / 2 + diamondSize / 2,
  };
}

export function getAnnotationLayout({
  side = "left",
  scaleX,
  scaleWidth,
  connectorLength,
  labelGap,
}: GetAnnotationLayoutParams) {
  const isLeft = side === "left";
  const lineStartX = isLeft
    ? scaleX - SCALE_EDGE_GAP
    : scaleX + SCALE_EDGE_GAP + scaleWidth;
  const lineEndX = isLeft
    ? lineStartX - connectorLength
    : lineStartX + connectorLength;
  const textX = isLeft ? lineEndX - labelGap : lineEndX + labelGap;

  return {
    lineStartX,
    lineEndX,
    textX,
    textAnchor: isLeft ? "end" : "start",
  } as const;
}
