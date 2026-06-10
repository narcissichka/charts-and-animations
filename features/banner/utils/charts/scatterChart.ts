import {
  ScatterPoint,
  ScatterProps,
} from "../../components/FacialAnalysis/charts/ScatterChart";

export function getDomain(size: number, centerGapUnits: number) {
  return [-0.5, size - 0.5 + centerGapUnits] as const;
}

export function getCenterLinePositions({
  cols,
  rows,
  centerGapUnits,
}: {
  cols: number;
  rows: number;
  centerGapUnits: number;
}) {
  return {
    midX: cols / 2 - 0.5 + centerGapUnits / 2,
    midY: rows / 2 - 0.5 + centerGapUnits / 2,
  };
}

const shiftAfterMiddle = (index: number, count: number, gap: number) => {
  const half = count / 2;

  return index >= half ? index + gap : index;
};

export const buildGrid = (
  cols: number,
  rows: number,
  markers: NonNullable<ScatterProps["markers"]>,
  centerGap: number,
): ScatterPoint[] => {
  const tag = new Map(markers.map((m) => [`${m.x}:${m.y}`, m.variant]));
  const cells: ScatterPoint[] = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      cells.push({
        x: shiftAfterMiddle(x, cols, centerGap),
        y: shiftAfterMiddle(y, rows, centerGap),
        variant: tag.get(`${x}:${y}`) ?? "dim",
      });
    }
  }

  return cells;
};
