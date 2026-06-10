"use client";

import { useMemo, useState } from "react";
import { ScatterChart, ResponsiveContainer } from "recharts";
import WithCaption from "../WithCaption/WithCaption";
import {
  ANNOTATIONS,
  COLOR_STOPS,
  LABEL,
  MAX,
  MIN,
  SIDE_LABEL,
  SWATCH_COLOR,
  VALUE,
  getColorScaleConfig,
} from "./ColorScaleChart.const";
import { ColorScaleChartProps } from "./ColorScaleChart.types";
import { ScaleLayer } from "./ScaleLayer/ScaleLayer";
import styles from "./ColorScaleChart.module.scss";
import useMediaQuery from "@/features/functional/hooks/useMediaQuery";
import { useColorScaleChartAnimation } from "@/features/banner/hooks/charts/useColorScaleChartAnimation";
import { LG_BREAKPOINT } from "@/features/global/constants/breakpoints";

const CHART_DATA = [{ x: 0, y: 0 }];
const CHART_MARGIN = { top: 0, right: 0, bottom: 0, left: 0 };

export default function ColorScaleChart({
  value = VALUE,
  min = MIN,
  max = MAX,
  label = LABEL,
  sideLabel = SIDE_LABEL,
  caption,
  colorStops = COLOR_STOPS,
  swatchColor = SWATCH_COLOR,
  annotations = ANNOTATIONS,
}: ColorScaleChartProps) {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const config = useMemo(() => getColorScaleConfig(isLg), [isLg]);

  const initialState = useMemo(
    () => ({
      value,
      label,
      swatchColor,
    }),
    [value, label, swatchColor],
  );

  const [currentState, setCurrentState] = useState(initialState);

  const { cancelAnimation, animateRandomly } = useColorScaleChartAnimation({
    initialState,
    setCurrentState,
  });

  return (
    <WithCaption
      className={styles.card}
      caption={caption}
      onMouseEnter={animateRandomly}
      onMouseLeave={cancelAnimation}
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={0}>
        <ScatterChart data={CHART_DATA} margin={CHART_MARGIN}>
          <ScaleLayer
            value={currentState.value}
            min={min}
            max={max}
            label={currentState.label}
            sideLabel={sideLabel}
            colorStops={colorStops}
            swatchColor={currentState.swatchColor}
            annotations={annotations}
            config={config}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </WithCaption>
  );
}
