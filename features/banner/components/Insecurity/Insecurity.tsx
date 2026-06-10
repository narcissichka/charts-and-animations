import { Badge } from "@/components/ui/Badge";
import { GridBanner } from "@/components/ui/GridBanner";
import { InfiniteScroll } from "@/features/animations/components/InfiniteScroll";
import { Heading } from "./Heading";
import { List } from "./List";
import { HeroVideo } from "@/components/ui/HeroVideo";
import styles from "./Insecurity.module.scss";

export const InsecurityBanner = () => {
  return (
    <InfiniteScroll
      className="dark"
      background={<HeroVideo videoSrc="/video/insecure.mp4" />}
    >
      <GridBanner
        className={styles.grid}
        main={
          <>
            <Badge text="Your Questions" />
            <Heading />
          </>
        }
        bottom={<List />}
      />

      <GridBanner
        className={styles.grid}
        main={
          <>
            <Badge text="Your Questions" />
            <Heading />
          </>
        }
        bottom={<List />}
      />
    </InfiniteScroll>
  );
};
