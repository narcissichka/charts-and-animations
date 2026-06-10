import { BarChartProps } from "../charts/BarChart/BarChart.types";
import { ScatterProps } from "../charts/ScatterChart/ScatterChart.types";
import { HighlightText } from "@/components/ui/⁠HighlightText/⁠HighlightText";
import { SymmetryChartProps } from "../charts/SymmetryChart/SymmetryChart.types";
import { ThirdSegment } from "../charts/FacialThirdsChart/FacialThirdsChart.types";

export const bellCurveTickLabel: Record<number, string> = {
  [-3]: "LOW DENSITY",
  [-0.8]: "MEDIUM DENSITY",
  [1.9]: "HIGH DENSITY",
};

export const scatterChartAxisLabels: NonNullable<ScatterProps["axisLabel"]> = {
  top: "Bold",
  bottom: "Subtle",
  left: "Feminine",
  right: "Masculine",
};

export const barChartValue = 56;
export const barChartLabel = "Lip Smoothness";

export const barChartTickLabel: NonNullable<BarChartProps["tickLabel"]> = {
  0: () => (
    <tspan>
      Rough <HighlightText as="tspan">(0%)</HighlightText>
    </tspan>
  ),
  value: ({ value }: { value: number }) => (
    <tspan>
      {Math.round(value)}% <HighlightText as="tspan">(You)</HighlightText>
    </tspan>
  ),
  100: () => (
    <tspan>
      Smooth <HighlightText as="tspan">(100%)</HighlightText>
    </tspan>
  ),
};

export const symmetryChartMarkers: SymmetryChartProps["markers"] = [
  { value: 92, label: "Ideal", swatchColor: "#CDDBE1" },
  { value: 78, label: "You", swatchColor: "#9AAEB5" },
  {
    value: 55,
    label: "Average",
    swatchColor: "#5D767E",
  },
];

export const facialThirdChartSegments: ThirdSegment[] = [
  { key: "lower", value: 0.31, color: "#5D767E", label: "Lower Third [C]" },
  { key: "middle", value: 0.38, color: "#9AAEB5", label: "Middle Third [B]" },
  { key: "upper", value: 0.31, color: "#CDDBE1", label: "Upper Third [A]" },
];

export const colorScaleValue = 64;
export const colorScaleLabel = "Dark Brown";
export const colorScaleSideLabel = "You";
export const colorScaleCaption =
  "Your brow color falls in the natural dark brown range.";
