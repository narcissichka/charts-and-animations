export const CHART_NAME = "smoothness";
export const CHART_DATA_KEY = "value";

export const BAR_CHART_MARGIN = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export interface BarChartConfig {
  BAR_SIZE: number;
  CAP_HALF_WIDTH: number;
  CAP_HEIGHT: number;
  BOTTOM_CAP_OFFSET_Y: number;
  LINE_OFFSET_X: number;
  LINE_TOP_OFFSET: number;
  LINE_BOTTOM_OFFSET: number;
  TRACK_RADIUS: number;
  MIN_FILL_WIDTH: number;
  CAPTION_GAP: number;
  PILL_OFFSET_X: number;
  PILL_WIDTH: number;
  PILL_TEXT_Y: number;
  PILL_HEIGHT: number;
}

const MOBILE: BarChartConfig = {
  BAR_SIZE: 3,
  CAP_HALF_WIDTH: 1,
  CAP_HEIGHT: 2,
  BOTTOM_CAP_OFFSET_Y: 3,
  LINE_OFFSET_X: -2,
  LINE_TOP_OFFSET: 5,
  LINE_BOTTOM_OFFSET: 7,
  TRACK_RADIUS: 0.5,
  MIN_FILL_WIDTH: 5,
  CAPTION_GAP: 5,
  PILL_OFFSET_X: -12,
  PILL_WIDTH: 17,
  PILL_TEXT_Y: 7,
  PILL_HEIGHT: 5,
};

const DESKTOP: BarChartConfig = {
  BAR_SIZE: 7,
  CAP_HALF_WIDTH: 2,
  CAP_HEIGHT: 4,
  BOTTOM_CAP_OFFSET_Y: 7,
  LINE_OFFSET_X: -4,
  LINE_TOP_OFFSET: 10,
  LINE_BOTTOM_OFFSET: 14,
  TRACK_RADIUS: 1,
  MIN_FILL_WIDTH: 10,
  CAPTION_GAP: 10,
  PILL_OFFSET_X: -24,
  PILL_WIDTH: 33,
  PILL_TEXT_Y: 14,
  PILL_HEIGHT: 10,
};

export const getBarChartConfig = (isLg: boolean): BarChartConfig =>
  isLg ? DESKTOP : MOBILE;
