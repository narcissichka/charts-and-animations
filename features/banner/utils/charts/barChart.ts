import { ViewBox } from "../../components/FacialAnalysis/charts/BarChart";

interface GetMarkerLayoutParams {
  viewBox: ViewBox;
  barSize: number;
  lineOffsetX: number;
  lineBottomOffset: number;
}

interface GetBarLayoutParams extends Partial<ViewBox> {
  barSize: number;
  captionGap: number;
}

interface GetCaptionXParams {
  x: number;
  fullWidth: number;
  tickValue: number;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function getSafeValue(value: number) {
  return clamp(value, 0, 100);
}

export function getFullWidth(value: number, valueWidth: number) {
  const safeValue = getSafeValue(value);

  if (safeValue <= 0) {
    return valueWidth;
  }

  return (valueWidth * 100) / safeValue;
}

export function drawTopCap(
  x: number,
  y: number,
  capHalfWidth: number,
  capHeight: number,
) {
  return `M${x - capHalfWidth},${y} L${x + capHalfWidth},${y} L${x},${y + capHeight} Z`;
}

export function drawBottomCap(
  x: number,
  y: number,
  capHalfWidth: number,
  bottomCapOffsetY: number,
) {
  return `M${x - capHalfWidth},${y + bottomCapOffsetY} L${x + capHalfWidth},${
    y + bottomCapOffsetY
  } L${x},${y - 1} Z`;
}

export function getMarkerLayout({
  viewBox,
  barSize,
  lineOffsetX,
  lineBottomOffset,
}: GetMarkerLayoutParams) {
  const { x, y, height } = viewBox;
  const barTop = y + height - barSize;
  const lineX = x + lineOffsetX;

  return {
    lineX,
    top: 0,
    bottom: barTop - lineBottomOffset,
  };
}

export function getBarLayout({
  y,
  height,
  barSize,
  captionGap,
}: GetBarLayoutParams) {
  const barY = (y as number) + (height as number) - barSize;
  const captionY = barY - captionGap;

  return {
    barY,
    captionY,
    valuePillY: captionY,
  };
}

export function getCaptionX({ x, fullWidth, tickValue }: GetCaptionXParams) {
  return x + fullWidth * (tickValue / 100);
}

export function getCaptionAnchor(tickValue: number) {
  return tickValue === 0 ? "start" : "end";
}
