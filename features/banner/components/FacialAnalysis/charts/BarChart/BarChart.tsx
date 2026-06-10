"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  BAR_CHART_MARGIN,
  CHART_DATA_KEY,
  CHART_NAME,
  getBarChartConfig,
} from "./BarChart.const";
import styles from "./BarChart.module.scss";
import { BarChartProps } from "./BarChart.types";
import { BarShape } from "./BarShape/BarShape";
import { Marker } from "./Marker/Marker";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { useBarChartAnimation } from "@/features/banner/hooks/charts/useBarChartAnimation";
import { getFullWidth } from "@/features/banner/utils/charts/barChart";
import { LG_BREAKPOINT } from "@/features/global/constants/breakpoints";

export default function BarChartSmoothness({
  value,
  label,
  tickLabel,
}: BarChartProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getBarChartConfig(isLg), [isLg]);

  const [currentValue, setCurrentValue] = useState(value);

  const data = useMemo(
    () => [{ name: CHART_NAME, value: currentValue }],
    [currentValue],
  );

  const { cancelAnimation, animateRandomly } = useBarChartAnimation({
    initialValue: value,
    setCurrentValue,
  });

  const [initialFullWidth, setInitialFullWidth] = useState<number | null>(null);

  return (
    <div className={`${styles.card} card`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{Math.round(currentValue)}%</span>
      </div>

      <div
        onMouseEnter={animateRandomly}
        onMouseLeave={cancelAnimation}
        className={styles.plot}
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={0}>
          <BarChart layout="vertical" data={data} margin={BAR_CHART_MARGIN}>
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />

            <Bar
              dataKey={CHART_DATA_KEY}
              isAnimationActive={false}
              shape={(props) => {
                const nextWidth =
                  initialFullWidth ??
                  (props.width && props.width > 0
                    ? getFullWidth(value, props.width)
                    : null);

                if (initialFullWidth == null && nextWidth != null) {
                  queueMicrotask(() => {
                    setInitialFullWidth((prev) => prev ?? nextWidth);
                  });
                }

                return (
                  <BarShape
                    {...props}
                    fullWidth={nextWidth ?? props.width ?? 0}
                    value={currentValue}
                    tickLabel={tickLabel}
                    config={config}
                  />
                );
              }}
            />

            <ReferenceLine
              x={currentValue}
              stroke="none"
              label={(props) => <Marker {...props} config={config} />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
