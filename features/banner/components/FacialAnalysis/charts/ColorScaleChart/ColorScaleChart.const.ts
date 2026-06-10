import { ColorScaleChartProps, ScaleAnnotation } from "./ColorScaleChart.types";

export const MIN = 0;
export const MAX = 100;
export const VALUE = 60;

export const LABEL = "Dark Brown";
export const SIDE_LABEL = "You";

export const COLOR_STOPS: NonNullable<ColorScaleChartProps["colorStops"]> = [
  { offset: "0%", color: "#D4E7F4" },
  { offset: "4%", color: "#ACD6DA" },
  { offset: "8%", color: "#91AEC4" },
  { offset: "12%", color: "#6C97C0" },
  { offset: "16%", color: "#698DB5" },
  { offset: "20%", color: "#ADB291" },
  { offset: "24%", color: "#7E9F9A" },
  { offset: "28%", color: "#4E676E" },
  { offset: "32%", color: "#72736D" },
  { offset: "36%", color: "#252F38" },
  { offset: "40%", color: "#292D39" },
  { offset: "44%", color: "#C6A363" },
  { offset: "48%", color: "#A58345" },
  { offset: "52%", color: "#988155" },
  { offset: "56%", color: "#B9805B" },
  { offset: "60%", color: "#BB956E" },
  { offset: "64%", color: "#AA886C" },
  { offset: "68%", color: "#624934" },
  { offset: "72%", color: "#775A38" },
  { offset: "76%", color: "#8B5644" },
  { offset: "80%", color: "#B06045" },
  { offset: "84%", color: "#814642" },
  { offset: "88%", color: "#5C4A56" },
  { offset: "92%", color: "#5A3139" },
  { offset: "96%", color: "#482F33" },
  { offset: "100%", color: "#170C08" },
];

export const SWATCH_COLOR = "#624934";

export const ANNOTATIONS: ScaleAnnotation[] = [
  { value: 32, label: "Green", side: "left" },
  { value: 60, label: "Brown", side: "right" },
  { value: 92, label: "Deep", side: "left" },
];

export interface ColorScaleChartConfig {
  SCALE_WIDTH: number;
  SCALE_HEIGHT: number;
  MARKER_WIDTH: number;
  MARKER_HEIGHT: number;
  MARKER_RADIUS: number;
  SWATCH_SIZE: number;
  SWATCH_PADDING_X: number;
  SWATCH_TEXT_GAP: number;
  HIGHLIGHT_PADDING_X: number;
  HIGHLIGHT_RADIUS: number;
  DIAMOND_SIZE: number;
  ANNOTATION_CONNECTOR_LENGTH: number;
  ANNOTATION_LABEL_GAP: number;
  LEFT_CHIP_GAP: number;
}

const MOBILE: ColorScaleChartConfig = {
  SCALE_WIDTH: 4,
  SCALE_HEIGHT: 138,
  MARKER_WIDTH: 30,
  MARKER_HEIGHT: 7,
  MARKER_RADIUS: 1,
  SWATCH_SIZE: 3,
  SWATCH_PADDING_X: 3,
  SWATCH_TEXT_GAP: 3,
  HIGHLIGHT_PADDING_X: 1,
  HIGHLIGHT_RADIUS: 0.5,
  DIAMOND_SIZE: 1.5,
  ANNOTATION_CONNECTOR_LENGTH: 6,
  ANNOTATION_LABEL_GAP: 2,
  LEFT_CHIP_GAP: 6,
};

const DESKTOP: ColorScaleChartConfig = {
  SCALE_WIDTH: 9,
  SCALE_HEIGHT: 277,
  MARKER_WIDTH: 60,
  MARKER_HEIGHT: 14,
  MARKER_RADIUS: 2,
  SWATCH_SIZE: 6,
  SWATCH_PADDING_X: 6,
  SWATCH_TEXT_GAP: 6,
  HIGHLIGHT_PADDING_X: 2,
  HIGHLIGHT_RADIUS: 1,
  DIAMOND_SIZE: 3,
  ANNOTATION_CONNECTOR_LENGTH: 12,
  ANNOTATION_LABEL_GAP: 4,
  LEFT_CHIP_GAP: 12,
};

export const getColorScaleConfig = (isLg: boolean): ColorScaleChartConfig =>
  isLg ? DESKTOP : MOBILE;
