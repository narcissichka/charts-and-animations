"use client";

import {
  Children,
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styles from "./InfiniteScroll.module.scss";

type InfiniteScrollProps = {
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  sectionHeight?: string;
};

export const InfiniteScroll = ({
  children,
  background,
  className = "",
  sectionHeight,
}: InfiniteScrollProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const items = useMemo(() => Children.toArray(children), [children]);
  const panelsCount = items.length;
  const resolvedSectionHeight = sectionHeight ?? `${panelsCount * 100}dvh`;

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    let frame = 0;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollable = rect.height - viewportHeight;
      const passed = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrollable > 0 ? passed / scrollable : 0;

      element.style.setProperty("--progress", `${progress}`);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${className}`}
      style={
        {
          "--section-height": resolvedSectionHeight,
          "--panels-count": panelsCount,
          "--travel": `${Math.max(panelsCount - 1, 0) * 100}dvh`,
        } as CSSProperties
      }
    >
      <div className={styles.sticky}>
        {background && <div className={styles.background}>{background}</div>}

        <div className={styles.track}>
          {items.map((item, index) => (
            <div className={styles.panel} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
