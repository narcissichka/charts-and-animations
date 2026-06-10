import { Badge } from "@/components/ui/Badge";
import { BadgeVariant } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";
import { TitlePosition, TitleSize, TitleVariant } from "@/components/ui/Title";
import { HighlightText } from "@/components/ui/HighlightText";
import styles from "./Heading.module.scss";

export const Heading = () => {
  return (
    <div className={styles.wrapper}>
      <Badge variant={BadgeVariant.Dark} text="Personalized aesthetics" />
      <Title
        className={`${TitleVariant.Dark} ${TitlePosition.Center} ${TitleSize.Medium}`}
        title={
          <>
            Your complete <HighlightText>facial analysis</HighlightText>
          </>
        }
        subtitle="Every face is unique. We assess more than 100 unique facial markers to give you a precise understanding of your aesthetics."
      />
    </div>
  );
};
