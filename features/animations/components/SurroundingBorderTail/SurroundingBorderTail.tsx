"use client";

import { useRef } from "react";
import styles from "./SurroundingBorderTail.module.scss";
import { useSurroundingBorderAnimation } from "../../hooks/useSurroundingBorderAnimation";
import { SurroundingBorderTailProps } from "./SurroundingBorderTail.types";
import { SurroundingBorderNodes } from "./SurroundingBorderNodes/SurroundingBorderNodes";
import { SurroundingBorderNodeType } from "../../types/surroundingBorder";

export const SurroundingBorderTail = ({
  firstChild,
  secondChild,
}: SurroundingBorderTailProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useSurroundingBorderAnimation(rootRef);

  return (
    <div className={`${styles.wrapper} ${styles.relative}`} ref={rootRef}>
      <div className={styles.grid}>
        <div className={`beforeCard ${styles.relative}`}>
          <SurroundingBorderNodes type={SurroundingBorderNodeType.Before} />
          {firstChild}
        </div>

        <div className={`centralCard ${styles.relative}`}>
          <SurroundingBorderNodes type={SurroundingBorderNodeType.Center} />
          <div className={styles.centerBox}></div>
        </div>

        <div className={`afterCard ${styles.relative}`}>
          <SurroundingBorderNodes type={SurroundingBorderNodeType.After} />
          {secondChild}
        </div>
      </div>
    </div>
  );
};
