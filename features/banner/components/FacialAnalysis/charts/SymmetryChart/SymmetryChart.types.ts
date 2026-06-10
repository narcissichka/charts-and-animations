import { ReactNode } from "react";
import { SymmetryChartConfig } from "./SymmetryChart.const";

export interface SymmetryMarker {
  value: number;
  label: ReactNode;
  swatchColor?: string;
  lineColor?: string;
}

export interface SymmetryChartProps {
  min?: number;
  max?: number;
  /** override grid columns (otherwise comes from config) */
  gridColumns?: number;
  markers: SymmetryMarker[];
  leftAxisLabel?: string;
  rightAxisLabel?: string;
}

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ChipLabelProps {
  viewBox?: ViewBox;
  marker: SymmetryMarker;
  config: SymmetryChartConfig;
}

export interface RechartsAxisTickPayload {
  value: number;
}

export interface RechartsAxisTickProps {
  x: number | string;
  y: number | string;
  payload: RechartsAxisTickPayload;
}

export interface AxisTickProps {
  axisTickLabels: Record<number, string>;
  min: number;
  config: SymmetryChartConfig;
}

export interface GetAxisTickLabelsParams {
  min: number;
  max: number;
  leftAxisLabel: string;
  rightAxisLabel: string;
}

export interface GetChipLayoutParams {
  viewBox: ViewBox;
  marker: SymmetryMarker;
  fontSize: number;
  chipHeight: number;
  chipPaddingX: number;
  chipGap: number;
  swatchSize: number;
}
