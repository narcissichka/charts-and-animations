import { ReactNode } from "react";

export interface ThirdSegment {
  key: string;
  value: number;
  label: ReactNode;
  color?: string;
}

export interface FacialThirdsChartProps {
  segments: ThirdSegment[];
  valueFormatter?: (value: number) => string;
  caption: string;
}

export interface ViewBox {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

export interface LabelConfig {
  yOffset: number;
  addHeight?: boolean;
}
