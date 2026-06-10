import { SymmetryChartProps } from "./SymmetryChart.types";

export const MIN = 0;
export const MAX = 100;

export const Y_DOMAIN_PADDING = 0.6;

export const DEFAULT_LINE_COLOR = "rgba(255,255,255,0.7)";
export const GRID_COLOR = "rgba(255,255,255,0.25)";

export const SCATTER_CHART_DATA = [{ x: 0, y: 0 }];

export const SCATTER_CHART_MARGIN = {
  top: 8,
  right: 0,
  bottom: 0,
  left: 0,
};

export const X_AXIS_PADDING = {
  left: 0,
  right: 0,
};

export const DEFAULT_MARKERS: SymmetryChartProps["markers"] = [
  { value: 92, label: "Ideal", swatchColor: "#CDDBE1" },
  { value: 78, label: "You", swatchColor: "#9AAEB5" },
  { value: 55, label: "Average", swatchColor: "#5D767E" },
];

/** Match SCSS $lg breakpoint */
export const LG_BREAKPOINT = "(min-width: 1024px)";

export interface SymmetryChartConfig {
  GRID_COLUMNS: number;
  CHIP_HEIGHT: number;
  CHIP_PADDING_X: number;
  CHIP_GAP: number;
  CHIP_RADIUS: number;
  SWATCH_SIZE: number;
  FONT_SIZE: number;
  SOLID_STROKE_WIDTH: number;
  DASHED_STROKE_WIDTH: number;
  DASHED_DASH: string;
  AXIS_TICK_Y_OFFSET: number;
}

const MOBILE: SymmetryChartConfig = {
  GRID_COLUMNS: 6,
  CHIP_HEIGHT: 6,
  CHIP_PADDING_X: 4,
  CHIP_GAP: 3,
  CHIP_RADIUS: 1.5,
  SWATCH_SIZE: 3.5,
  FONT_SIZE: 3,
  SOLID_STROKE_WIDTH: 1.5,
  DASHED_STROKE_WIDTH: 0.75,
  DASHED_DASH: "2 2",
  AXIS_TICK_Y_OFFSET: 6,
};

const DESKTOP: SymmetryChartConfig = {
  GRID_COLUMNS: 10,
  CHIP_HEIGHT: 12,
  CHIP_PADDING_X: 8,
  CHIP_GAP: 6,
  CHIP_RADIUS: 3,
  SWATCH_SIZE: 7,
  FONT_SIZE: 6,
  SOLID_STROKE_WIDTH: 2.5,
  DASHED_STROKE_WIDTH: 1,
  DASHED_DASH: "4 4",
  AXIS_TICK_Y_OFFSET: 12,
};

export const getSymmetryConfig = (isLg: boolean): SymmetryChartConfig =>
  isLg ? DESKTOP : MOBILE;
