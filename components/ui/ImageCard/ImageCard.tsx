import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import { ImageCardProps } from "./ImageCard.types";
import styles from "./ImageCard.module.scss";

export const ImageCard = ({
  responsiveImageProps,
  cardText,
  className,
}: ImageCardProps) => {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <figcaption className={styles.caption}>{cardText}</figcaption>
      <ResponsiveImage
        responsiveImageProps={responsiveImageProps}
        className={styles.image}
      />
    </figure>
  );
};
