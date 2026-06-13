import { Title, TitlePosition, TitleSize } from "@/components/ui/Title";
import { HighlightText } from "@/components/ui/HighlightText";
import styles from "./Heading.module.scss";

export const Heading = () => {
  return (
    <Title
      className={`${TitleSize.Medium} ${TitlePosition.Left} ${styles.title}`}
      title={
        <>
          Will analyzing my face{"\n"}
          <HighlightText>Make me insecure?</HighlightText>
        </>
      }
      subtitle="Most insecurity comes from uncertainty-not knowing if your concerns are real or imagined. When you're guessing about your appearance, your mind often makes things seem worse than they are."
    />
  );
};
