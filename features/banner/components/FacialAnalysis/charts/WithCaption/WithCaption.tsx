"use client";

import { ReactNode } from "react";
import styles from "./WithCaption.module.scss";

export default function WithCaption({
  caption,
  children,
  className = "",
  ...rest
}: {
  caption: string;
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div className={`${styles.card} ${className} card`}>
      <div className={`${styles.chart} chart`} {...rest}>
        {children}
      </div>

      <p className={`${styles.caption} caption`}>{caption}</p>
    </div>
  );
}
