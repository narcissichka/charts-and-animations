import { ReactNode } from "react";
import styles from "./BlurredBackground.module.scss";

export const BlurredBackground = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.background}></div>
      {children}
    </div>
  );
};
