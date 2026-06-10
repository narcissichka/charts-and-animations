import gsap from "gsap";
import { getRandomInt } from "@/features/global/utils/getRandom";
import {
  useCallback,
  useEffect,
  useRef,
} from "react";
import { ColorScaleAnimationState, UseColorScaleChartAnimationParams } from "../../components/FacialAnalysis/charts/ColorScaleChart/ColorScaleChart.types";

const SAMPLE_PRESETS: ColorScaleAnimationState[] = [
  { value: 8, label: "Light", swatchColor: "#91AEC4" },
  { value: 24, label: "Fair", swatchColor: "#7E9F9A" },
  { value: 44, label: "Warm", swatchColor: "#A58345" },
  { value: 68, label: "Tan", swatchColor: "#624934" },
  { value: 88, label: "Deep", swatchColor: "#5C4A56" },
];

export const useColorScaleChartAnimation = ({
  initialState,
  setCurrentState,
}: UseColorScaleChartAnimationParams) => {
  const animatedValueRef = useRef<{ value: number }>({
    value: initialState.value,
  });
  const chartTweenRef = useRef<gsap.core.Tween | null>(null);

  const animateChartTo = useCallback(
    (target: ColorScaleAnimationState) => {
      chartTweenRef.current?.kill();

      setCurrentState((prev) => ({
        ...prev,
        label: target.label,
        swatchColor: target.swatchColor,
      }));

      chartTweenRef.current = gsap.to(animatedValueRef.current, {
        value: target.value,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          setCurrentState((prev) => ({
            ...prev,
            value: animatedValueRef.current.value,
          }));
        },
      });
    },
    [setCurrentState],
  );

  useEffect(() => {
    chartTweenRef.current?.kill();

    animatedValueRef.current = { value: initialState.value };
    setCurrentState(initialState);
  }, [initialState, setCurrentState]);

  const cancelAnimation = useCallback(() => {
    animateChartTo(initialState);
  }, [animateChartTo, initialState]);

  const animateRandomly = useCallback(() => {
    const randomIndex = getRandomInt(0, SAMPLE_PRESETS.length - 1);
    animateChartTo(SAMPLE_PRESETS[randomIndex]);
  }, [animateChartTo]);

  return {
    cancelAnimation,
    animateRandomly,
  };
};
