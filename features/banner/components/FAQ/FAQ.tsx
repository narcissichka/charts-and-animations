import { GridBanner } from "@/components/ui/GridBanner";
import { Heading } from "./Heading";
import { Spacer } from "@/components/ui/Spacer";
import styles from "./FAQ.module.scss";
import { Accordion } from "@/components/ui/Accordion";
import { accordionItems } from "./FAQ.const";

export const FAQ = () => {
  return (
    <GridBanner
      className={styles.grid}
      top={<Spacer className={styles.hideOnMobile} />}
      main={
        <>
          <Heading />
          <Accordion className={styles.accordion} items={accordionItems} />
        </>
      }
      bottom={<Spacer className={styles.hideOnMobile} />}
    />
  );
};
