import { InfoCard } from "./InfoCard/InfoCard";
import { InfoListProps } from "./InfoList.types";
import styles from "./InfoList.module.scss";
import { CSSProperties } from "react";

export const InfoList = ({
  cols = 4,
  items,
  showIndex,
  ...restProps
}: InfoListProps) => {
  return (
    <div style={{ "--columns-number": cols } as CSSProperties} className={`${styles.grid} fullWidthMobile`}>
      {items.map((item, i) => {
        const { id, child, ...rest } = item;
        return (
          <div key={id} className={styles.gridItem}>
            <InfoCard
              {...restProps}
              {...rest}
              {...(showIndex ? { index: i + 1 } : {})}
            >
              {child}
            </InfoCard>
          </div>
        );
      })}
    </div>
  );
};
