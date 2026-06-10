export type Point = {
  x: number;
  y: number;
};

export type GetPointParams = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  centerX: number;
  centerY: number;
  isStart: boolean;
};

export enum Direction {
  LTR = "ltr",
  RTL = "rtl",
  TTB = "ttb",
  BTT = "btt",
}

export type Train = {
  phase: number;
  wrapper: HTMLElement;
  head: HTMLElement;
  tail: HTMLElement[];
};

export enum SurroundingBorderNodeType {
  Before = "before",
  Center = "center",
  After = "after",
}

/** Positional suffixes appended to a node type to form a line id. */
export enum LineSuffix {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  RightTop = "right-top",
  RightBottom = "right-bottom",
  LeftTop = "left-top",
  LeftBottom = "left-bottom",
}

export type LineId = `${SurroundingBorderNodeType}-${LineSuffix}`;

export type Segment = {
  name: LineId;
  start: Point;
  end: Point;
};

