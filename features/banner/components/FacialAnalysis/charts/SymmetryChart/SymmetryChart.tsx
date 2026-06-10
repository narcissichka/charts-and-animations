"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./SymmetryChart.module.scss";
import {
  DEFAULT_LINE_COLOR,
  GRID_COLOR,
  MAX,
  MIN,
  SCATTER_CHART_DATA,
  SCATTER_CHART_MARGIN,
  X_AXIS_PADDING,
  Y_DOMAIN_PADDING,
  getSymmetryConfig,
} from "./SymmetryChart.const";
import { SymmetryChartProps } from "./SymmetryChart.types";
import { AxisTick } from "./AxisTick/AxisTick";
import { getVerticalGridCoordinates } from "@/features/banner/utils/charts/symmetryChart";
import { ChipLabel } from "./ChipLabel/ChipLabel";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { useSymmetryChartAnimation } from "@/features/banner/hooks/charts/⁠useSymmetryChartAnimation";
import { LG_BREAKPOINT } from "@/features/global/constants/breakpoints";

export default function SymmetryChart({
  min = MIN,
  max = MAX,
  gridColumns,
  markers,
  leftAxisLabel = "Asymmetrical",
  rightAxisLabel = "Symmetrical",
}: SymmetryChartProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getSymmetryConfig(isLg), [isLg]);
  const [currentMarkers, setCurrentMarkers] = useState(markers);

  const effectiveGridColumns = gridColumns ?? config.GRID_COLUMNS;

  const yMin = -Y_DOMAIN_PADDING;
  const yMax = currentMarkers.length - 1 + Y_DOMAIN_PADDING;
  const axisTickLabels: Record<number, string> = {
    [min]: leftAxisLabel,
    [max]: rightAxisLabel,
  };

  const { cancelAnimation, animateRandomly } = useSymmetryChartAnimation({
    initialMarkers: markers,
    setCurrentMarkers,
  });

  return (
    <div className={`${styles.card} card`}>
      <div
        className={styles.plot}
        onMouseEnter={animateRandomly}
        onMouseLeave={cancelAnimation}
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={0}>
          <ScatterChart data={SCATTER_CHART_DATA} margin={SCATTER_CHART_MARGIN}>
            <XAxis
              type="number"
              dataKey="x"
              domain={[min, max]}
              ticks={[min, max]}
              tick={AxisTick({ axisTickLabels, min, config })}
              tickLine={false}
              axisLine={false}
              interval={0}
              padding={X_AXIS_PADDING}
            />

            <YAxis
              type="number"
              dataKey="y"
              domain={[yMin, yMax]}
              hide
              reversed
            />

            <CartesianGrid
              stroke={GRID_COLOR}
              strokeWidth={1}
              strokeDasharray="1 1"
              horizontal={false}
              verticalCoordinatesGenerator={(options) =>
                getVerticalGridCoordinates({
                  gridColumns: effectiveGridColumns,
                  ...options,
                })
              }
            />

            {currentMarkers.map((m, i) => {
              const lineColor = m.lineColor ?? DEFAULT_LINE_COLOR;

              return (
                <ReferenceLine
                  key={`dashed-${i}`}
                  stroke={lineColor}
                  strokeWidth={config.DASHED_STROKE_WIDTH}
                  strokeDasharray={config.DASHED_DASH}
                  opacity={0.7}
                  segment={[
                    { x: m.value, y: i },
                    { x: max, y: i },
                  ]}
                />
              );
            })}

            {currentMarkers.map((m, i) => {
              const lineColor = m.swatchColor ?? DEFAULT_LINE_COLOR;

              return (
                <ReferenceLine
                  key={`solid-${i}`}
                  stroke={lineColor}
                  strokeWidth={config.SOLID_STROKE_WIDTH}
                  segment={[
                    { x: min, y: i },
                    { x: m.value, y: i },
                  ]}
                  label={<ChipLabel marker={m} config={config} />}
                  ifOverflow="visible"
                />
              );
            })}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
