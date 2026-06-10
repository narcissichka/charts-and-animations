import { ThirdSegment } from "./FacialThirdsChart.types";

export const DEFAULT_COLOR = "rgba(255,255,255,0.85)";

export const DEFAULT_SEGMENTS: ThirdSegment[] = [
  { key: "lower", value: 0.31, color: "#5D767E", label: "Lower Third [C]" },
  { key: "middle", value: 0.38, color: "#9AAEB5", label: "Middle Third [B]" },
  { key: "upper", value: 0.31, color: "#CDDBE1", label: "Upper Third [A]" },
];

export const DEFAULT_VALUE_FORMATTER = (v: number) => v.toFixed(2);

export const CHART_MARGIN = { top: 0, right: 0, bottom: 0, left: 0 };

export interface FacialThirdsChartConfig {
  BAR_HEIGHT: number;
  BAR_RADIUS: number;
  TOP_LABEL_OFFSET: number;
  BOTTOM_VALUE_OFFSET: number;
}

const MOBILE: FacialThirdsChartConfig = {
  BAR_HEIGHT: 2,
  BAR_RADIUS: 0,
  TOP_LABEL_OFFSET: 5,
  BOTTOM_VALUE_OFFSET: 2 + 5, // BAR_HEIGHT + gap
};

const DESKTOP: FacialThirdsChartConfig = {
  BAR_HEIGHT: 4,
  BAR_RADIUS: 0,
  TOP_LABEL_OFFSET: 10,
  BOTTOM_VALUE_OFFSET: 4 + 10,
};

export const getFacialThirdsConfig = (
  isLg: boolean,
): FacialThirdsChartConfig => (isLg ? DESKTOP : MOBILE);
