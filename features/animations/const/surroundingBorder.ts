import { Direction, LineId } from "../types/surroundingBorder";
import { lineId } from "../utils/surroundingBorder";
import {
  SurroundingBorderNodeType as Node,
  LineSuffix,
} from "@/features/animations/types/surroundingBorder";

export const DOT_SIZE = 5;
export const SPEED = 200; // px per second

export const CORNER_RADIUS = 12; // default corner radius
export const CENTER_CORNER_RADIUS = 21; // radius for corners touching the central block

/* Tail config */
export const TAIL_LENGTH = 175; // px of trail behind the head
export const TAIL_SEGMENTS = 175; // number of nodes forming the tail

export const SVG_NS = "http://www.w3.org/2000/svg";

// Corners (unordered name pairs) that should use CENTER_CORNER_RADIUS
export const CENTER_CORNER_PAIRS: Array<[LineId, LineId]> = [
  [
    lineId(Node.Before, LineSuffix.RightTop),
    lineId(Node.Center, LineSuffix.Top),
  ],
  [
    lineId(Node.Before, LineSuffix.RightBottom),
    lineId(Node.Center, LineSuffix.Bottom),
  ],
  [lineId(Node.After, LineSuffix.LeftTop), lineId(Node.Center, LineSuffix.Top)],
  [
    lineId(Node.After, LineSuffix.LeftBottom),
    lineId(Node.Center, LineSuffix.Bottom),
  ],
];

export const ROUTE: Array<{ name: LineId; direction: Direction }> = [
  { name: lineId(Node.Before, LineSuffix.Top), direction: Direction.LTR },
  { name: lineId(Node.Before, LineSuffix.RightTop), direction: Direction.TTB },

  { name: lineId(Node.Center, LineSuffix.Top), direction: Direction.LTR },

  { name: lineId(Node.After, LineSuffix.LeftTop), direction: Direction.BTT },
  { name: lineId(Node.After, LineSuffix.Top), direction: Direction.LTR },
  { name: lineId(Node.After, LineSuffix.Right), direction: Direction.TTB },
  { name: lineId(Node.After, LineSuffix.Bottom), direction: Direction.RTL },
  { name: lineId(Node.After, LineSuffix.LeftBottom), direction: Direction.BTT },

  { name: lineId(Node.Center, LineSuffix.Bottom), direction: Direction.RTL },

  {
    name: lineId(Node.Before, LineSuffix.RightBottom),
    direction: Direction.TTB,
  },
  { name: lineId(Node.Before, LineSuffix.Bottom), direction: Direction.RTL },
  { name: lineId(Node.Before, LineSuffix.Left), direction: Direction.BTT },
];

export const DOT_PHASES = [0, 0.5];
