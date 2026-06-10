import { ScatterChartConfig } from "./ScatterChart.const";

export type ScatterPointVariant = "dim" | "highlight" | "you" | "soft";

export interface ScatterPoint {
  x: number;
  y: number;
  variant?: ScatterPointVariant;
  hoverVariant?: ScatterPointVariant;
}

export interface Marker {
  x: number;
  y: number;
  variant: Exclude<ScatterPointVariant, "dim">;
}

export interface AxisLabel {
  top: string;
  bottom: string;
  left: string;
  right: string;
}

export interface ScatterProps {
  cols?: number;
  rows?: number;
  markers?: Marker[];
  axisLabel: AxisLabel;
  caption: string;
}

export interface CellShape {
  cx?: number;
  cy?: number;
  payload?: ScatterPoint;
}

export interface AxisLabelsProps {
  axisLabel: AxisLabel;
}

export interface SquareFactoryParams {
  size: number;
  config: ScatterChartConfig;
}
