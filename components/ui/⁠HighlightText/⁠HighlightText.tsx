import { createElement, ReactNode } from "react";
import styles from "./HighlightText.module.scss";

type HighlightTextProps = {
  as?: "span" | "tspan";
  children: ReactNode;
};

export const HighlightText = ({
  as = "span",
  children,
}: HighlightTextProps) => {
  return createElement(
    as,
    { className: `${styles.highlight} highlight` },
    children,
  );
};
