"use client";

import { useMemo, useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import WithCaption from "../WithCaption/WithCaption";
import { LG_BREAKPOINT } from "@/features/global/constants/breakpoints";
import {
  BELL_CURVE_MARGIN,
  MARKERS,
  TAIL_FILL_ID,
  TAIL_FROM,
  X_AXIS_PADDING,
  X_MAX,
  X_MIN,
  Y_DOMAIN,
  getBellCurveConfig,
} from "./BellCurve.const";
import styles from "./BellCurve.module.scss";
import { AnimatedChartState, BellCurveProps } from "./BellCurve.types";
import {
  coordinatesGenerator,
  gaussian,
  getData,
  getTickValues,
} from "@/features/banner/utils/charts/bellCurve";
import { Square } from "./Square/Square";
import { AxisTick } from "./AxisTick/AxisTick";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { useBellCurveAnimation } from "@/features/banner/hooks/charts/useBellCurveAnimation";

export default function BellCurve({
  xMin = X_MIN,
  xMax = X_MAX,
  tailFrom = TAIL_FROM,
  markers = MARKERS,
  tickLabel,
  caption,
}: BellCurveProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getBellCurveConfig(isLg), [isLg]);

  const initialChartState = useMemo<AnimatedChartState>(
    () => ({
      yDomain: Y_DOMAIN[1],
      tailFrom,
    }),
    [tailFrom],
  );
  const xDomain = [xMin, xMax];

  const [currentChartState, setCurrentChartState] =
    useState<AnimatedChartState>(initialChartState);
  const data = useMemo(
    () => getData(xMin, xMax, currentChartState.tailFrom),
    [xMin, xMax, currentChartState.tailFrom],
  );
  const ticks = useMemo(() => getTickValues(tickLabel), [tickLabel]);

  const { cancelAnimation, animateRandomly } = useBellCurveAnimation({
    tailFrom,
    setCurrentChartState,
    initialChartState,
    xDomain,
  });

  return (
    <WithCaption
      onMouseEnter={animateRandomly}
      onMouseLeave={cancelAnimation}
      className={styles.card}
      caption={caption}
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={0}>
        <ComposedChart data={data} margin={BELL_CURVE_MARGIN}>
          <CartesianGrid
            className={styles.grid}
            horizontalCoordinatesGenerator={coordinatesGenerator(
              "y",
              config.GRID_Y_LINES,
            )}
            verticalCoordinatesGenerator={coordinatesGenerator(
              "x",
              config.GRID_X_LINES,
            )}
          />

          <XAxis
            dataKey="x"
            type="number"
            domain={xDomain}
            ticks={ticks}
            tick={AxisTick(tickLabel)}
            tickLine={false}
            axisLine={false}
            interval={0}
            padding={X_AXIS_PADDING}
          />

          <YAxis hide domain={[Y_DOMAIN[0], currentChartState.yDomain]} />

          <ReferenceLine
            segment={[
              {
                x: currentChartState.tailFrom + config.TAIL_LINE_OFFSET_X,
                y: 0,
              },
              {
                x: currentChartState.tailFrom + config.TAIL_LINE_OFFSET_X,
                y:
                  gaussian(currentChartState.tailFrom) +
                  config.TAIL_LINE_TOP_PADDING,
              },
            ]}
            stroke="white"
            opacity={0.35}
            strokeDasharray={config.TAIL_LINE_DASH}
            strokeWidth={config.TAIL_LINE_STROKE_WIDTH}
          />

          <defs>
            <linearGradient id={TAIL_FILL_ID} x1="0" y1="0" x2="0" y2="1">
              <stop className={styles.tailGradientStop} offset="0%" />
              <stop className={styles.tailGradientStop} offset="100%" />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="tail"
            className={styles.tailArea}
            fill={`url(#${TAIL_FILL_ID})`}
            isAnimationActive={false}
            connectNulls={false}
            activeDot={false}
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="y"
            className={styles.curveLine}
            stroke="rgba(255,255,255,.6)"
            strokeWidth={config.CURVE_STROKE_WIDTH}
            dot={(props) => {
              const { cx, cy, index } = props;
              const isEdgePoint = index === 0 || index === data.length - 1;

              if (!isEdgePoint || cx == null || cy == null) {
                return null;
              }

              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={config.CURVE_STROKE_WIDTH}
                  fill="rgba(255,255,255,.6)"
                />
              );
            }}
            activeDot={false}
            isAnimationActive={false}
          />

          {markers.map((marker) => (
            <ReferenceDot
              key={`${marker.x}-${marker.y}`}
              x={marker.x}
              y={marker.y}
              shape={(props) => <Square {...props} config={config} />}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </WithCaption>
  );
}
