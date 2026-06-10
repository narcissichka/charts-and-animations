import { ParallaxScroll } from "@/features/animations/components/ParallaxScroll/ParallaxScroll";
import { Heading } from "./Heading/Heading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage/ResponsiveImage";

import styles from "./FacialAnalysis.module.scss";
import { FacialAnalysisChartGrid } from "./FacialAnalysisChartGrid/FacialAnalysisChartGrid";

export const FacialAnalysis = () => {
  return (
    <ParallaxScroll
      imageElement={
        <ResponsiveImage
          className={styles.img}
          responsiveImageProps={{
            mobileSrc: "/images/analysis_mobile.png",
            desktopSrc: "/images/analysis.png",
            alt: "Facial analysis",
          }}
        />
      }
      headingElement={<Heading />}
    >
      <FacialAnalysisChartGrid />
    </ParallaxScroll>
  );
};
