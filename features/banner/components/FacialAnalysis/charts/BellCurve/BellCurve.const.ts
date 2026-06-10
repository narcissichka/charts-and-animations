import { BellCurveMarker } from "./BellCurve.types";

export const X_MIN = -3.2;
export const X_MAX = 3.2;
export const TAIL_FROM = 2;

export const GAUSSIAN_MU = 0.5;
export const GAUSSIAN_SIGMA = 1.2;
export const DOTS_NUMBER_DEFAULT = 80;

export const MARKERS: BellCurveMarker[] = [
  { x: -2.6, y: 0 },
  { x: -0.2, y: 0 },
  { x: 1.45, y: 0 },
  { x: 2, y: 0 },
  { x: 2.6, y: 0 },
];

export const TAIL_FILL_ID = "bellCurveTailFill";

export const AREA_ANIMATION_DURATION = 900;
export const LINE_ANIMATION_DURATION = 1100;

export const Y_DOMAIN = [0, 1.3];

export const BELL_CURVE_MARGIN = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const X_AXIS_PADDING = {
  left: 8,
  right: 8,
};

/** Match SCSS $lg breakpoint */
export const LG_BREAKPOINT = "(min-width: 1024px)";

export interface BellCurveConfig {
  SQUARE_SIZE: number;
  GRID_X_LINES: number;
  GRID_Y_LINES: number;
  CURVE_STROKE_WIDTH: number;
  TAIL_LINE_STROKE_WIDTH: number;
  TAIL_LINE_DASH: string;
  TAIL_LINE_OFFSET_X: number;
  TAIL_LINE_TOP_PADDING: number;
}

const MOBILE: BellCurveConfig = {
  SQUARE_SIZE: 2,
  GRID_X_LINES: 6,
  GRID_Y_LINES: 5,
  CURVE_STROKE_WIDTH: 0.75,
  TAIL_LINE_STROKE_WIDTH: 0.75,
  TAIL_LINE_DASH: "2 2",
  TAIL_LINE_OFFSET_X: 0.04,
  TAIL_LINE_TOP_PADDING: 0.12,
};

const DESKTOP: BellCurveConfig = {
  SQUARE_SIZE: 4,
  GRID_X_LINES: 8,
  GRID_Y_LINES: 7,
  CURVE_STROKE_WIDTH: 1.25,
  TAIL_LINE_STROKE_WIDTH: 1,
  TAIL_LINE_DASH: "4 2",
  TAIL_LINE_OFFSET_X: 0.06,
  TAIL_LINE_TOP_PADDING: 0.2,
};

export const getBellCurveConfig = (isLg: boolean): BellCurveConfig =>
  isLg ? DESKTOP : MOBILE;
