"use client";
import dynamic from "next/dynamic";
import { ChartGrid } from "../ChartGrid/ChartGrid";
import {
  barChartLabel,
  barChartTickLabel,
  barChartValue,
  bellCurveTickLabel,
  colorScaleCaption,
  colorScaleLabel,
  colorScaleSideLabel,
  colorScaleValue,
  facialThirdChartSegments,
  scatterChartAxisLabels,
  symmetryChartMarkers,
} from "./FacialAnalysisChartGrid.const";
import styles from "./FacialAnalysisChartGrid.module.scss";
import { Spacer } from "@/components/ui/Spacer/Spacer";

const ScatterChartMatrix = dynamic(
  () => import("../charts/ScatterChart/ScatterChart"),
  {
    ssr: false,
  },
);

const SymmetryChart = dynamic(
  () => import("../charts/SymmetryChart/SymmetryChart"),
  {
    ssr: false,
  },
);

const FacialThirdsChart = dynamic(
  () => import("../charts/FacialThirdsChart/FacialThirdsChart"),
  {
    ssr: false,
  },
);

const BellCurve = dynamic(() => import("../charts/BellCurve/BellCurve"), {
  ssr: false,
});

const BarChartSmoothness = dynamic(
  () => import("../charts/BarChart/BarChart"),
  {
    ssr: false,
  },
);

const ColorScaleChart = dynamic(
  () => import("../charts/ColorScaleChart/ColorScaleChart"),
  {
    ssr: false,
  },
);

export const FacialAnalysisChartGrid = () => {
  return (
    <ChartGrid className={`dark ${styles.rootGrid}`}>
      <ScatterChartMatrix
        axisLabel={scatterChartAxisLabels}
        caption="Brows fall in the top 20% for natural fullness."
      />
      <div
        className={`${styles.gridCallWrapper} ${styles.gridCallWrapperFirst}`}
      >
        <BellCurve
          tickLabel={bellCurveTickLabel}
          caption="Your eyebrow density is in the mid 40th percentile"
        />
        <BarChartSmoothness
          label={barChartLabel}
          value={barChartValue}
          tickLabel={barChartTickLabel}
        />
      </div>
      <Spacer className={styles.spacer} />
      <ColorScaleChart
        value={colorScaleValue}
        label={colorScaleLabel}
        sideLabel={colorScaleSideLabel}
        caption={colorScaleCaption}
      />
      <div
        className={`${styles.gridCallWrapper} ${styles.gridCallWrapperSecond}`}
      >
        <FacialThirdsChart
          segments={facialThirdChartSegments}
          caption="Facial Thirds"
        />
        <SymmetryChart markers={symmetryChartMarkers} />
      </div>
    </ChartGrid>
  );
};
