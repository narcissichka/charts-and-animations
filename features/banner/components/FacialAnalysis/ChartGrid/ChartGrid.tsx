import { ReactNode } from "react";
import styles from "./ChartGrid.module.scss";

export const ChartGrid = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
};
