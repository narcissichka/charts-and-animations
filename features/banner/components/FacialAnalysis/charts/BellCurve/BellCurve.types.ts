import { CartesianTickItem } from "recharts";
import { BellCurveConfig } from "./BellCurve.const";

export type TickLabel = Record<number, string>;

export interface BellCurveMarker {
  x: number;
  y: number;
}

export interface BellCurveDatum {
  x: number;
  y: number;
  tail: number | null;
}

export interface BellCurveProps {
  xMin?: number;
  xMax?: number;
  tailFrom?: number;
  tickLabel: TickLabel;
  markers?: BellCurveMarker[];
  caption: string;
}

export interface BellCurveData {
  min: number;
  max: number;
  tailX: number;
}

export interface SquareProps {
  cx?: number;
  cy?: number;
  config: BellCurveConfig;
}

export interface RechartsAxisTickProps {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  payload: CartesianTickItem;
}

export type AnimatedChartState = {
  yDomain: number;
  tailFrom: number;
};