import styles from "./ParallaxScroll.module.scss";
import { ParallaxScrollProps } from "./ParallaxScroll.types";

export const ParallaxScroll = ({
  backgroundClassName = "",
  imageElement,
  headingElement,
  children,
  withBlur = true,
}: ParallaxScrollProps) => {
  return (
    <div className={styles.parallax}>
      <section className={styles.banner}>
        <div
          className={`${styles.layer} ${styles.layerBg} ${backgroundClassName}`}
        ></div>
        <div className={`${styles.layer} ${styles.layerImg}`}>
          {imageElement}
        </div>

        <div className={`${styles.content} ${withBlur ? styles.blur : ""}`}>
          <div className={styles.heading}>{headingElement}</div>
          <div className={styles.main}>{children}</div>
        </div>
      </section>
    </div>
  );
};
