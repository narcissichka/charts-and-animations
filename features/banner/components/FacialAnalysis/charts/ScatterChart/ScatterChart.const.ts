import { ScatterProps } from "./ScatterChart.types";

export const COLS = 10;
export const ROWS = 10;

export const MARKERS: NonNullable<ScatterProps["markers"]> = [
  { x: 5, y: 1, variant: "highlight" },
  { x: 6, y: 1, variant: "highlight" },
  { x: 7, y: 1, variant: "highlight" },
  { x: 8, y: 1, variant: "soft" },

  { x: 5, y: 2, variant: "highlight" },
  { x: 6, y: 2, variant: "you" },
  { x: 7, y: 2, variant: "highlight" },
  { x: 8, y: 2, variant: "soft" },

  { x: 5, y: 3, variant: "soft" },
  { x: 6, y: 3, variant: "highlight" },
  { x: 7, y: 3, variant: "highlight" },
  { x: 8, y: 3, variant: "soft" },

  { x: 6, y: 4, variant: "soft" },
  { x: 7, y: 4, variant: "soft" },
  { x: 8, y: 4, variant: "soft" },

  { x: 9, y: 5, variant: "soft" },
  { x: 6, y: 7, variant: "soft" },
];

export const HOVER_MARKERS: NonNullable<ScatterProps["markers"]> = [
  { x: 5, y: 1, variant: "soft" },
  { x: 6, y: 1, variant: "highlight" },
  { x: 7, y: 1, variant: "soft" },
  { x: 8, y: 1, variant: "soft" },

  { x: 5, y: 2, variant: "highlight" },
  { x: 6, y: 2, variant: "highlight" },
  { x: 7, y: 2, variant: "highlight" },
  { x: 8, y: 2, variant: "soft" },

  { x: 5, y: 3, variant: "soft" },
  { x: 6, y: 3, variant: "you" },
  { x: 7, y: 3, variant: "highlight" },
  { x: 8, y: 3, variant: "soft" },

  { x: 5, y: 4, variant: "soft" },
  { x: 6, y: 4, variant: "highlight" },
  { x: 7, y: 4, variant: "soft" },
  { x: 8, y: 4, variant: "soft" },

  { x: 6, y: 5, variant: "soft" },
  { x: 7, y: 5, variant: "soft" },
  { x: 9, y: 5, variant: "soft" },

  { x: 6, y: 7, variant: "soft" },
];

export const CENTER_GAP_UNITS = 0.45;

export const CHART_MARGIN = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export interface ScatterChartConfig {
  CELL_SIZE: number;
  GAP: number;
  CELL_RADIUS: number;
}

const MOBILE: ScatterChartConfig = {
  CELL_SIZE: 6,
  GAP: 3,
  CELL_RADIUS: 1.5,
};

const DESKTOP: ScatterChartConfig = {
  CELL_SIZE: 12,
  GAP: 6,
  CELL_RADIUS: 3,
};

export const getScatterChartConfig = (isLg: boolean): ScatterChartConfig =>
  isLg ? DESKTOP : MOBILE;
