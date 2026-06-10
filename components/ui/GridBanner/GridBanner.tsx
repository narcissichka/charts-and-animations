import { GridProps, GridRowVariant } from "./GridBanner.types";
import styles from "./GridBanner.module.scss";
import { GridRow } from "./GridRow/GridRow";

export const GridBanner = ({
  className = "",
  top,
  main,
  bottom,
  decoration,
}: GridProps) => {
  return (
    <section className={`${styles.grid} ${className}`}>
      {top && <GridRow variant={GridRowVariant.Top}>{top}</GridRow>}

      <GridRow variant={GridRowVariant.Main}>{main}</GridRow>

      {bottom && <GridRow variant={GridRowVariant.Bottom}>{bottom}</GridRow>}

      {decoration && (
        <GridRow variant={GridRowVariant.Decoration}>{decoration}</GridRow>
      )}
    </section>
  );
};
