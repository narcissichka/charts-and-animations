import { ReactNode } from "react";
import { GridRowVariant } from "../GridBanner.types";
import styles from "../GridBanner.module.scss";

type GridRowProps = {
  children: ReactNode;
  variant: GridRowVariant;
};

export const GridRow = ({ children, variant }: GridRowProps) => {
  return (
    <div className={`${styles.row} ${variant}`}>
      <div className={`${styles.cell} ${styles.side}`}></div>
      <div className={`${styles.cell} ${styles.center} centerCell`}>
        {children}
      </div>
      <div className={`${styles.cell} ${styles.side}`}></div>
    </div>
  );
};
