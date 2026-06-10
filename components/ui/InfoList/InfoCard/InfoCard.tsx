import { InfoCardProps, InfoCardSize } from "./InfoCard.types";
import styles from "./InfoCard.module.scss";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";

export const InfoCard = ({
  imageProps,
  children,
  index,
  size = InfoCardSize.Small,
  className = "",
}: InfoCardProps) => {
  return (
    <div className={`${styles.card} ${styles[size]} ${className}`}>
      {imageProps && (
        <ResponsiveImage
          className={styles.imageContainer}
          responsiveImageProps={imageProps}
        />
      )}
      {index && <span className={`${styles.index} index`}>{index}</span>}
      {children}
    </div>
  );
};
