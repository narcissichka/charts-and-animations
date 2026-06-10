import {
  CENTER_CORNER_PAIRS,
  CENTER_CORNER_RADIUS,
  CORNER_RADIUS,
  DOT_PHASES,
  ROUTE,
  SVG_NS,
  TAIL_SEGMENTS,
} from "../const/surroundingBorder";
import {
  Direction,
  GetPointParams,
  LineId,
  LineSuffix,
  Point,
  Segment,
  SurroundingBorderNodeType,
  Train,
} from "../types/surroundingBorder";

/** Single source of truth for every data-line value. */
export const lineId = (
  type: SurroundingBorderNodeType,
  suffix: LineSuffix,
): LineId => `${type}-${suffix}`;

const getPoint = (
  direction: Direction,
  { left, top, right, bottom, centerX, centerY, isStart }: GetPointParams,
): Point => {
  switch (direction) {
    case Direction.LTR:
      return { x: isStart ? left : right, y: centerY };

    case Direction.RTL:
      return { x: isStart ? right : left, y: centerY };

    case Direction.TTB:
      return { x: centerX, y: isStart ? top : bottom };

    case Direction.BTT:
      return { x: centerX, y: isStart ? bottom : top };

    default:
      return { x: left, y: top };
  }
};

// Build a rounded SVG path "d" from an ordered list of points (closed loop).
// `radii[i]` is the corner radius applied at points[i].
const buildRoundedPathD = (points: Point[], radii: number[]): string => {
  const n = points.length;

  if (n < 3) {
    return points.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
  }

  const commands: string[] = [];

  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const curr = points[i];
    const next = points[(i + 1) % n];

    const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
    const v2 = { x: next.x - curr.x, y: next.y - curr.y };

    const len1 = Math.hypot(v1.x, v1.y) || 1;
    const len2 = Math.hypot(v2.x, v2.y) || 1;

    // clamp radius so it never exceeds half of either adjacent segment
    const r = Math.min(radii[i], len1 / 2, len2 / 2);

    const before = {
      x: curr.x - (v1.x / len1) * r,
      y: curr.y - (v1.y / len1) * r,
    };

    const after = {
      x: curr.x + (v2.x / len2) * r,
      y: curr.y + (v2.y / len2) * r,
    };

    commands.push(`${i === 0 ? "M" : "L"} ${before.x} ${before.y}`);
    commands.push(`Q ${curr.x} ${curr.y} ${after.x} ${after.y}`);
  }

  commands.push("Z");

  return commands.join(" ");
};

const isCenterCorner = (a: string, b: string): boolean =>
  CENTER_CORNER_PAIRS.some(
    ([x, y]) => (x === a && y === b) || (x === b && y === a),
  );

/* -------------------------------------------------------------------------- */
/*  DOM creation helpers                                                      */
/* -------------------------------------------------------------------------- */

/** Creates the visible rounded border SVG and returns it with its path node. */
export const createBorderSvg = (root: HTMLElement) => {
  const svg = document.createElementNS(SVG_NS, "svg");

  svg.setAttribute("class", "flow-border");
  svg.setAttribute("fill", "none");

  const borderPath = document.createElementNS(SVG_NS, "path");

  borderPath.setAttribute("class", "flow-border__path");
  svg.appendChild(borderPath);

  root.appendChild(svg);

  return { svg, borderPath };
};

/** Builds a single train (head + tail nodes) inside a wrapper. */
const createTrain = (root: HTMLElement, phase: number): Train => {
  const wrapper = document.createElement("span");

  wrapper.className = "flow-train";
  root.appendChild(wrapper);

  const head = document.createElement("span");

  head.className = "flow-dot flow-dot--head";
  wrapper.appendChild(head);

  const tail = Array.from({ length: TAIL_SEGMENTS }, () => {
    const node = document.createElement("span");

    node.className = "flow-dot flow-dot--tail";
    wrapper.appendChild(node);

    return node;
  });

  return { phase, wrapper, head, tail };
};

/** Creates one train per configured dot phase. */
export const createTrains = (root: HTMLElement): Train[] =>
  DOT_PHASES.map((phase) => createTrain(root, phase));

/* -------------------------------------------------------------------------- */
/*  Geometry helpers                                                          */
/* -------------------------------------------------------------------------- */

/** Measures each route line and returns its start/end points. */
const collectSegments = (root: HTMLElement, rootRect: DOMRect): Segment[] =>
  ROUTE.map(({ name, direction }) => {
    const line = root.querySelector<HTMLElement>(`[data-line="${name}"]`);

    if (!line) return null;

    const rect = line.getBoundingClientRect();

    const left = rect.left - rootRect.left;
    const top = rect.top - rootRect.top;
    const right = rect.right - rootRect.left;
    const bottom = rect.bottom - rootRect.top;

    const centerX = left + rect.width / 2;
    const centerY = top + rect.height / 2;

    const start = getPoint(direction, {
      left,
      top,
      right,
      bottom,
      centerX,
      centerY,
      isStart: true,
    });

    const end = getPoint(direction, {
      left,
      top,
      right,
      bottom,
      centerX,
      centerY,
      isStart: false,
    });

    return { name, start, end };
  }).filter(Boolean) as Segment[];

/** Derives the loop vertices from segments, dropping a closing duplicate. */
const buildPoints = (segments: Segment[]): Point[] => {
  const points: Point[] = [
    segments[0].start,
    ...segments.map((segment) => segment.end),
  ];

  const first = points[0];
  const last = points[points.length - 1];

  if (Math.hypot(last.x - first.x, last.y - first.y) < 1) {
    points.pop();
  }

  return points;
};

/**
 * Computes the corner radius for each vertex.
 * The corner at points[i] sits between segment names[(i-1)] and names[i].
 */
const buildRadii = (points: Point[], names: string[]): number[] => {
  const count = points.length;

  return points.map((_, i) => {
    const nameIn = names[(i - 1 + count) % count];
    const nameOut = names[i % count];

    return isCenterCorner(nameIn, nameOut)
      ? CENTER_CORNER_RADIUS
      : CORNER_RADIUS;
  });
};

/** Sizes the SVG to the diagram and draws the rounded border path. */
const drawBorder = (
  svg: SVGSVGElement,
  borderPath: SVGPathElement,
  rootRect: DOMRect,
  points: Point[],
  radii: number[],
) => {
  svg.setAttribute("width", `${rootRect.width}`);
  svg.setAttribute("height", `${rootRect.height}`);
  svg.setAttribute("viewBox", `0 0 ${rootRect.width} ${rootRect.height}`);

  borderPath.setAttribute("d", buildRoundedPathD(points, radii));
};

export const buildGeometry = (
  root: HTMLElement,
  svg: SVGSVGElement,
  borderPath: SVGPathElement,
) => {
  const rootRect = root.getBoundingClientRect();

  const segments = collectSegments(root, rootRect);

  if (!segments.length) return null;

  const points = buildPoints(segments);
  const names = segments.map((segment) => segment.name);
  const radii = buildRadii(points, names);

  drawBorder(svg, borderPath, rootRect, points, radii);

  const pathLength = borderPath.getTotalLength();

  if (!pathLength) return null;

  return { pathLength };
};
