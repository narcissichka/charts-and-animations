import { GridBanner } from "@/components/ui/GridBanner";
import { Heading } from "./Heading/Heading";
import { BeforeAfterDiagram } from "@/features/banner/components/QovesPlan/BeforeAfterDiagram";
import { List } from "./List/List";
import { Spacer } from "@/components/ui/Spacer";
import styles from "./QovesPlan.module.scss";

export const QovesPlan = () => {
  return (
    <GridBanner
      className={styles.qovesPlanCell}
      top={<Heading />}
      main={<BeforeAfterDiagram />}
      bottom={<List />}
      decoration={<Spacer />}
    />
  );
};
