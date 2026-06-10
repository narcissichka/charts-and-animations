import { ThirdSegment } from "../../components/FacialAnalysis/charts/FacialThirdsChart";

/**
 * Recharts stacked horizontal bar uses one row of data where every
 * segment's value is its own column. That makes the bar's width per
 * segment proportional to its value.
 */
export const buildRow = (segments: ThirdSegment[]) =>
  segments.reduce<Record<string, number>>(
    (acc, s) => {
      acc[s.key] = s.value;
      return acc;
    },
    { row: 1 },
  );
