"use client";

import { useMemo } from "react";
import {
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import WithCaption from "../WithCaption/WithCaption";
import {
  CENTER_GAP_UNITS,
  CHART_MARGIN,
  COLS,
  HOVER_MARKERS,
  MARKERS,
  ROWS,
  getScatterChartConfig,
} from "./ScatterChart.const";
import styles from "./ScatterChart.module.scss";
import { ScatterProps } from "./ScatterChart.types";

import { useCellSize } from "@/features/banner/hooks/charts/useCellSize";
import {
  buildGrid,
  getCenterLinePositions,
  getDomain,
} from "@/features/banner/utils/charts/scatterChart";
import { AxisLabels } from "./AxisLabels/AxisLabels";
import { Square } from "./Square/Square";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { LG_BREAKPOINT } from "@/features/global/constants/breakpoints";

export default function ScatterChartMatrix({
  cols = COLS,
  rows = ROWS,
  markers = MARKERS,
  axisLabel,
  caption,
}: ScatterProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getScatterChartConfig(isLg), [isLg]);

  const data = useMemo(() => {
    const baseGrid = buildGrid(cols, rows, markers, CENTER_GAP_UNITS);
    const hoverGrid = buildGrid(cols, rows, HOVER_MARKERS, CENTER_GAP_UNITS);

    return baseGrid.map((point, index) => ({
      ...point,
      hoverVariant: hoverGrid[index]?.variant ?? "dim",
    }));
  }, [cols, rows, markers]);

  const { midX, midY } = getCenterLinePositions({
    cols,
    rows,
    centerGapUnits: CENTER_GAP_UNITS,
  });

  const xDomain = getDomain(cols, CENTER_GAP_UNITS);
  const yDomain = getDomain(rows, CENTER_GAP_UNITS);

  const [ref, cellSize] = useCellSize(cols, rows, config.GAP);

  return (
    <WithCaption caption={caption}>
      <div className={styles.matrix}>
        <AxisLabels axisLabel={axisLabel} />

        <div className={styles.chart} ref={ref}>
          <ResponsiveContainer width="100%" height="100%" minHeight={0}>
            <ScatterChart margin={CHART_MARGIN}>
              <XAxis type="number" dataKey="x" domain={xDomain} hide />
              <YAxis type="number" dataKey="y" domain={yDomain} reversed hide />
              <ZAxis range={[cellSize, cellSize]} />

              <Scatter
                data={data}
                shape={Square(cellSize, config)}
                isAnimationActive={false}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Scatter>

              <ReferenceLine
                x={midX}
                ifOverflow="extendDomain"
                className={styles.cross}
              />
              <ReferenceLine
                y={midY}
                ifOverflow="extendDomain"
                className={styles.cross}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </WithCaption>
  );
}
