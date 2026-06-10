import gsap from "gsap";

import { getRandomInt } from "@/features/global/utils/getRandom";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

export const useBarChartAnimation = ({
  initialValue,
  setCurrentValue,
}: {
  initialValue: number;
  setCurrentValue: Dispatch<SetStateAction<number>>;
}) => {
  const animatedValueRef = useRef<{ value: number }>({ value: initialValue });
  const chartTweenRef = useRef<gsap.core.Tween | null>(null);

  const animateChartTo = useCallback(
    (target: number) => {
      chartTweenRef.current?.kill();

      chartTweenRef.current = gsap.to(animatedValueRef.current, {
        value: target,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          setCurrentValue(animatedValueRef.current.value);
        },
      });
    },
    [setCurrentValue],
  );

  useEffect(() => {
    chartTweenRef.current?.kill();

    animatedValueRef.current = { value: initialValue };

    setCurrentValue(initialValue);
  }, [initialValue, setCurrentValue]);

  const cancelAnimation = useCallback(() => {
    animateChartTo(initialValue);
  }, [animateChartTo, initialValue]);

  const animateRandomly = useCallback(() => {
    animateChartTo(getRandomInt(0, 100));
  }, [animateChartTo]);

  return {
    cancelAnimation,
    animateRandomly,
  };
};
