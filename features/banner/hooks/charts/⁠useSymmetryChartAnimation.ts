import gsap from "gsap";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { getRandomInt } from "@/features/global/utils/getRandom";
import { SymmetryChartProps } from "@/features/banner/components/FacialAnalysis/charts/SymmetryChart/SymmetryChart.types";

type Marker = SymmetryChartProps["markers"][number];
type AnimatedMarkerValues = Record<number, number>;

const MARKER_RANDOM_RANGES = [
  { min: 85, max: 98 },
  { min: 60, max: 92 },
  { min: 40, max: 75 },
] as const;

function toAnimatedValues(markers: Marker[]): AnimatedMarkerValues {
  return Object.fromEntries(
    markers.map((marker, index) => [index, marker.value]),
  );
}

function mergeAnimatedValuesIntoMarkers(
  baseMarkers: Marker[],
  animatedValues: AnimatedMarkerValues,
): Marker[] {
  return baseMarkers.map((marker, index) => ({
    ...marker,
    value: Math.round(animatedValues[index] ?? marker.value),
  }));
}

function getRandomMarkerValue(index: number) {
  const range = MARKER_RANDOM_RANGES[index];

  if (!range) {
    return getRandomInt(35, 90);
  }

  return getRandomInt(range.min, range.max);
}

function generateRandomMarkerValues(markers: Marker[]): AnimatedMarkerValues {
  return Object.fromEntries(
    markers.map((_, index) => [index, getRandomMarkerValue(index)]),
  );
}

export const useSymmetryChartAnimation = ({
  initialMarkers,
  setCurrentMarkers,
}: {
  initialMarkers: Marker[];
  setCurrentMarkers: Dispatch<SetStateAction<Marker[]>>;
}) => {
  const animatedValuesRef = useRef<AnimatedMarkerValues>(
    toAnimatedValues(initialMarkers),
  );
  const chartTweenRef = useRef<gsap.core.Tween | null>(null);

  const animateChartTo = useCallback(
    (targetValues: AnimatedMarkerValues) => {
      chartTweenRef.current?.kill();

      chartTweenRef.current = gsap.to(animatedValuesRef.current, {
        ...targetValues,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          setCurrentMarkers(
            mergeAnimatedValuesIntoMarkers(
              initialMarkers,
              animatedValuesRef.current,
            ),
          );
        },
      });
    },
    [initialMarkers, setCurrentMarkers],
  );

  useEffect(() => {
    chartTweenRef.current?.kill();

    animatedValuesRef.current = toAnimatedValues(initialMarkers);
    setCurrentMarkers(initialMarkers);
  }, [initialMarkers, setCurrentMarkers]);

  const cancelAnimation = useCallback(() => {
    animateChartTo(toAnimatedValues(initialMarkers));
  }, [animateChartTo, initialMarkers]);

  const animateRandomly = useCallback(() => {
    animateChartTo(generateRandomMarkerValues(initialMarkers));
  }, [animateChartTo, initialMarkers]);

  return {
    cancelAnimation,
    animateRandomly,
  };
};
