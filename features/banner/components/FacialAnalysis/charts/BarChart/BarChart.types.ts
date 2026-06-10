import { JSX, ReactNode } from "react";
import { BarChartConfig } from "./BarChart.const";

export interface BarChartProps {
  value: number;
  label: string;
  /** x-position (0–100) → caption */
  tickLabel: TickLabel;
}

export type TickLabel = Record<
  number | string,
  (({ value }: { value: number }) => JSX.Element)
>;

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MarkerProps {
  viewBox?: ViewBox;
  config: BarChartConfig;
}

export interface CaptionProps {
  caption: ReactNode;
  x: number;
  y: number;
  dx?: number;
  anchor: "start" | "middle" | "end";
}

export interface ValuePillProps {
  caption: ReactNode;
  x: number;
  y: number;
  config: BarChartConfig;
}

export interface BarShapeProps extends Partial<ViewBox> {
  value: number;
  tickLabel: TickLabel;
  config: BarChartConfig;
  fullWidth: number;
}
