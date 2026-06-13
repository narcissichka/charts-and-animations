import { Badge } from "@/components/ui/Badge";
import { GridBanner } from "@/components/ui/GridBanner";
import { InfiniteScroll } from "@/features/animations/components/InfiniteScroll";
import { Heading } from "./Heading";
import { List } from "./List";
import { HeroVideo } from "@/components/ui/HeroVideo";
import styles from "./Insecurity.module.scss";
import { insecurityCardsData } from "./Insecurity.const";
import { Title, TitleTag } from "@/components/ui/Title";
import { HighlightText } from "@/components/ui/HighlightText";
import { InsecurityCardWrapper } from "./InsecurityCard";
import { BlurredBackground } from "@/components/ui/BlurredBackground";

export const InsecurityBanner = () => {
  return (
    <InfiniteScroll
      className="dark"
      background={<HeroVideo videoSrc="/video/insecure.mp4" />}
      lastPanelExtraScroll={150}
    >
      <GridBanner
        className={`${styles.grid} ${styles.gridFirst}`}
        main={
          <>
            <Badge text="Your Questions" />
            <Heading />
          </>
        }
        bottom={<List />}
      />

      <BlurredBackground>
        <GridBanner
          className={styles.grid}
          main={
            <>
              <div className={`${styles.cardsContainer} fullWidthMobile`}>
                <InsecurityCardWrapper insecurityCardsData={insecurityCardsData(styles.cardItem)} />
              </div>
              <Title
                className={styles.absoluteText}
                titleTag={TitleTag.H3}
                title={
                  <>
                    Is it vain to care{"\n"}
                    <HighlightText>about your appearance?</HighlightText>
                  </>
                }
                subtitle={`Many feel guilty about wanting to improve their looks, fearing it means they’re shallow or insecure. But here's what research tells us : caring about appearance is natural. Like health, finances, and education, it’s just another form of self-improvement.`}
              />
            </>
          }
        />
      </BlurredBackground>
    </InfiniteScroll>
  );
};
