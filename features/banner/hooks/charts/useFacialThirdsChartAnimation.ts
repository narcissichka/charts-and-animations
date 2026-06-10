import gsap from "gsap";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { ThirdSegment } from "@/features/banner/components/FacialAnalysis/charts/FacialThirdsChart";

type SegmentValues = Record<string, number>;

function toAnimatedValues(segments: ThirdSegment[]): SegmentValues {
  return Object.fromEntries(
    segments.map((segment) => [segment.key, segment.value]),
  );
}

function normalizeValues(values: number[]) {
  const sum = values.reduce((acc, value) => acc + value, 0);

  if (sum === 0) {
    return values.map(() => 1 / values.length);
  }

  return values.map((value) => value / sum);
}

function generateRandomSegmentValues(keys: string[]): SegmentValues {
  const raw = keys.map(() => 0.2 + Math.random() * 0.6);
  const normalized = normalizeValues(raw);

  return Object.fromEntries(keys.map((key, index) => [key, normalized[index]]));
}

function mergeAnimatedValuesIntoSegments(
  baseSegments: ThirdSegment[],
  animatedValues: SegmentValues,
): ThirdSegment[] {
  return baseSegments.map((segment) => ({
    ...segment,
    value: animatedValues[segment.key] ?? segment.value,
  }));
}

export const useFacialThirdsChartAnimation = ({
  initialSegments,
  setCurrentSegments,
}: {
  initialSegments: ThirdSegment[];
  setCurrentSegments: Dispatch<SetStateAction<ThirdSegment[]>>;
}) => {
  const animatedValuesRef = useRef<SegmentValues>(
    toAnimatedValues(initialSegments),
  );
  const chartTweenRef = useRef<gsap.core.Tween | null>(null);

  const animateChartTo = useCallback(
    (targetValues: SegmentValues) => {
      chartTweenRef.current?.kill();

      chartTweenRef.current = gsap.to(animatedValuesRef.current, {
        ...targetValues,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          setCurrentSegments(
            mergeAnimatedValuesIntoSegments(
              initialSegments,
              animatedValuesRef.current,
            ),
          );
        },
      });
    },
    [initialSegments, setCurrentSegments],
  );

  useEffect(() => {
    chartTweenRef.current?.kill();

    animatedValuesRef.current = toAnimatedValues(initialSegments);
    setCurrentSegments(initialSegments);
  }, [initialSegments, setCurrentSegments]);

  const cancelAnimation = useCallback(() => {
    animateChartTo(toAnimatedValues(initialSegments));
  }, [animateChartTo, initialSegments]);

  const animateRandomly = useCallback(() => {
    const keys = initialSegments.map((segment) => segment.key);
    const randomValues = generateRandomSegmentValues(keys);

    animateChartTo(randomValues);
  }, [animateChartTo, initialSegments]);

  return {
    cancelAnimation,
    animateRandomly,
  };
};
