import { Badge } from "@/components/ui/Badge";
import { HighlightText } from "@/components/ui/HighlightText";
import { Title } from "@/components/ui/Title";
import styles from "./Heading.module.scss";

export const Heading = () => {
  return (
    <div className={styles.faqHeading}>
      <Badge text="your questions" />
      <Title
        title={
          <>
            Frequently asked <HighlightText>questions</HighlightText>
          </>
        }
        subtitle="If you have any further questions, please use the chat box in the bottom right or contact us by email at hello@qoves.com"
      />
    </div>
  );
};
