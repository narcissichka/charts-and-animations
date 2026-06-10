"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./FacialThirdsChart.module.scss";
import {
  CHART_MARGIN,
  DEFAULT_COLOR,
  DEFAULT_SEGMENTS,
  DEFAULT_VALUE_FORMATTER,
  LG_BREAKPOINT,
  getFacialThirdsConfig,
} from "./FacialThirdsChart.const";
import { FacialThirdsChartProps } from "./FacialThirdsChart.types";
import { buildRow } from "@/features/banner/utils/charts/facialThirdsChart";
import { TopLabel, ValueLabel } from "./Label/Label";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { useFacialThirdsChartAnimation } from "@/features/banner/hooks/charts/useFacialThirdsChartAnimation";

export default function FacialThirdsChart({
  segments = DEFAULT_SEGMENTS,
  valueFormatter = DEFAULT_VALUE_FORMATTER,
  caption,
}: FacialThirdsChartProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getFacialThirdsConfig(isLg), [isLg]);

  const [currentSegments, setCurrentSegments] = useState(segments);

  const data = useMemo(() => [buildRow(currentSegments)], [currentSegments]);

  const { cancelAnimation, animateRandomly } = useFacialThirdsChartAnimation({
    initialSegments: segments,
    setCurrentSegments,
  });

  return (
    <div
      className={`${styles.card} card`}
      onMouseEnter={animateRandomly}
      onMouseLeave={cancelAnimation}
    >
      <div className={styles.header}>
        <span className={styles.label}>{caption}</span>
      </div>

      <div className={styles.plot}>
        <ResponsiveContainer width="100%" height="100%" minHeight={0}>
          <BarChart
            data={data}
            layout="vertical"
            margin={CHART_MARGIN}
            barCategoryGap={0}
          >
            <XAxis type="number" hide domain={[0, 1]} />
            <YAxis type="category" dataKey="row" hide />

            {currentSegments.map((s) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                stackId="thirds"
                fill={s.color ?? DEFAULT_COLOR}
                barSize={config.BAR_HEIGHT}
                radius={config.BAR_RADIUS}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey={s.key}
                  content={TopLabel(String(s.label), config)}
                />
                <LabelList
                  dataKey={s.key}
                  content={ValueLabel(valueFormatter(s.value), config)}
                />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
