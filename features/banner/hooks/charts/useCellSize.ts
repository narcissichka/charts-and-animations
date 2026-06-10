import { useRef, useState, useEffect } from "react";

export function useCellSize(cols: number, rows: number, gap: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      const pitch = Math.min(width / cols, height / rows); // square cells
      setSize(Math.max(0, pitch - gap)); // ← fixed 6px gap
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [cols, rows, gap]);

  return [ref, size] as const;
}
