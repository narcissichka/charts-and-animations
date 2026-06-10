import { ResponsiveImageProps } from "./ResponsiveImage.types";
import styles from "./ResponsiveImage.module.scss";

export const ResponsiveImage = ({
  responsiveImageProps,
  className = "",
}: {
  responsiveImageProps: ResponsiveImageProps;
  className?: string;
}) => {
  return (
    <picture className={className}>
      <source
        media="(min-width: 1440px)"
        srcSet={responsiveImageProps.desktopSrc}
      />
      <source
        media="(min-width: 768px)"
        srcSet={
          responsiveImageProps.tabletSrc ?? responsiveImageProps.mobileSrc
        }
      />
      <img
        className={styles.img}
        src={responsiveImageProps.mobileSrc}
        alt={responsiveImageProps.alt}
      />
    </picture>
  );
};
