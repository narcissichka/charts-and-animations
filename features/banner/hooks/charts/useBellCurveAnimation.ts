import gsap from "gsap";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { AnimatedChartState } from "../../components/FacialAnalysis/charts/BellCurve/BellCurve.types";
import { Y_DOMAIN } from "../../components/FacialAnalysis/charts/BellCurve/BellCurve.const";
import { getRandom } from "@/features/global/utils/getRandom";

export const useBellCurveAnimation = ({
  tailFrom,
  setCurrentChartState,
  initialChartState,
  xDomain,
}: {
  tailFrom: number;
  setCurrentChartState: Dispatch<SetStateAction<AnimatedChartState>>;
  initialChartState: AnimatedChartState;
  xDomain: number[];
}) => {
  const animatedValueRef = useRef<AnimatedChartState>(initialChartState);
  const chartTweenRef = useRef<gsap.core.Tween | null>(null);

  const animateChartTo = useCallback(
    (target: Partial<AnimatedChartState>) => {
      chartTweenRef.current?.kill();

      chartTweenRef.current = gsap.to(animatedValueRef.current, {
        ...target,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          setCurrentChartState({
            tailFrom: animatedValueRef.current.tailFrom,
            yDomain: animatedValueRef.current.yDomain,
          });
        },
      });
    },
    [setCurrentChartState],
  );

  useEffect(() => {
    chartTweenRef.current?.kill();

    animatedValueRef.current = {
      tailFrom,
      yDomain: Y_DOMAIN[1],
    };

    setCurrentChartState({
      tailFrom,
      yDomain: Y_DOMAIN[1],
    });
  }, [setCurrentChartState, tailFrom]);

  const cancelAnimation = useCallback(() => {
    animateChartTo(initialChartState);
  }, [animateChartTo, initialChartState]);

  const animateRandomly = useCallback(() => {
    animateChartTo({
      tailFrom: getRandom(xDomain[0], xDomain[1]),
      yDomain: getRandom(Y_DOMAIN[0], Y_DOMAIN[1] + 2),
    });
  }, [animateChartTo, xDomain]);

  return {
    cancelAnimation,
    animateRandomly,
  };
};
