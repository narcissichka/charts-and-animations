import { ChartOffsetInternal } from "recharts/types/util/types";
import {
  DOTS_NUMBER_DEFAULT,
  GAUSSIAN_MU,
  GAUSSIAN_SIGMA,
  TickLabel,
} from "../../components/FacialAnalysis/charts/BellCurve";

export const gaussian = (x: number, mu = GAUSSIAN_MU, s = GAUSSIAN_SIGMA) =>
  Math.exp(-((x - mu) ** 2) / (2 * s * s));

export const getData = (
  X_MIN: number,
  X_MAX: number,
  TAIL_FROM: number,
  DOTS_NUMBER = DOTS_NUMBER_DEFAULT,
) => {
  return Array.from({ length: DOTS_NUMBER }, (_, i) => {
    const x = X_MIN + (i * (X_MAX - X_MIN)) / (DOTS_NUMBER - 1);
    const y = gaussian(x);
    return {
      x,
      y, // full curve line
      tail: x >= TAIL_FROM ? y : null, // only the right tail gets a fill
    };
  });
};

export function getTickValues(tickLabel: TickLabel) {
  return Object.keys(tickLabel).map(Number);
}

export const coordinatesGenerator =
  (type: "x" | "y", gridPropertyNumber: number) =>
  ({
    height,
    width,
    offset,
  }: {
    height: number;
    width: number;
    offset: ChartOffsetInternal;
  }) => {
    const distance = type === "y" ? height : width;
    const offsetProps =
      type === "y" ? [offset.top, offset.bottom] : [offset.left, offset.right];

    const top = offsetProps[0];
    const usable = distance - offsetProps[0] - offsetProps[1];
    return Array.from(
      { length: gridPropertyNumber + 1 },
      (_, i) => top + (usable * i) / gridPropertyNumber,
    );
  };
