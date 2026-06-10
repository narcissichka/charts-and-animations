"use client";

import { ImageCard } from "@/components/ui/ImageCard";
import { SurroundingBorderTail } from "@/features/animations/components/SurroundingBorderTail";
import styles from "./BeforeAfterDiagram.module.scss";

export const BeforeAfterDiagram = () => {
  return (
    <div className={styles.wrapper}>
      <SurroundingBorderTail
        firstChild={
          <ImageCard
            responsiveImageProps={{
              mobileSrc: "/images/before.png",
              desktopSrc: "/images/before.png",
              alt: "Before image",
            }}
            cardText="BEFORE"
            className={styles.imageCard}
          />
        }
        secondChild={
          <ImageCard
            responsiveImageProps={{
              mobileSrc: "/images/after.png",
              desktopSrc: "/images/after.png",
              alt: "After image",
            }}
            cardText="AFTER"
            className={styles.imageCard}
          />
        }
      />
    </div>
  );
};
