import { getScaleSegments } from "@/features/banner/utils/charts/colorScale";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ColorScaleChartConfig } from "./ColorScaleChart.const";

export interface ColorStop {
  offset: string;
  color: string;
}

export interface ScaleAnnotation {
  value: number;
  label: string;
  side?: "left" | "right";
}

export interface ColorScaleChartProps {
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  sideLabel?: string;
  caption: string;
  colorStops?: ColorStop[];
  swatchColor?: string;
  annotations?: ScaleAnnotation[];
}

export interface ScaleLayerProps {
  value: number;
  min: number;
  max: number;
  label: ColorScaleChartProps["label"];
  sideLabel: ColorScaleChartProps["sideLabel"];
  colorStops: ColorStop[];
  swatchColor: string;
  annotations: ScaleAnnotation[];
  config: ColorScaleChartConfig;
}

export interface ColorSegmentsProps {
  scaleX: number;
  scaleY: number;
  segments: ReturnType<typeof getScaleSegments>;
  config: ColorScaleChartConfig;
}

export interface ScaleBorderProps {
  scaleX: number;
  scaleY: number;
  config: ColorScaleChartConfig;
}

export interface HelperLineProps {
  x: number;
  width: number;
  y: number;
}

export interface AnnotationsProps {
  annotations: ScaleAnnotation[];
  min: number;
  max: number;
  scaleX: number;
  scaleY: number;
  config: ColorScaleChartConfig;
}

export interface HighlightProps {
  x: number;
  y: number;
  width: number;
  height: number;
  midY: number;
  config: ColorScaleChartConfig;
}

export interface MarkerChipProps {
  x: number;
  y: number;
  width: number;
  centerY: number;
  children: ReactNode;
  config: ColorScaleChartConfig;
}

export interface LeftMarkerChipProps {
  x: number;
  y: number;
  centerY: number;
  label: ReactNode;
  swatchColor: string;
  config: ColorScaleChartConfig;
}

export interface RightMarkerChipProps {
  x: number;
  y: number;
  width: number;
  centerY: number;
  label: ReactNode;
  config: ColorScaleChartConfig;
}

export interface ColorScaleAnimationState {
  value: number;
  label: string;
  swatchColor: string;
}

export interface UseColorScaleChartAnimationParams {
  initialState: ColorScaleAnimationState;
  setCurrentState: Dispatch<SetStateAction<ColorScaleAnimationState>>;
}
