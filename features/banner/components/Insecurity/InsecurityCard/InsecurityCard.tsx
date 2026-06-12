import { InfoCard, InfoCardSize } from "@/components/ui/InfoList/InfoCard";
import {
  Title,
  TitlePosition,
  TitleSize,
  TitleTag,
  TitleVariant,
} from "@/components/ui/Title";
import { InsecurityCardProps } from "../Insecurity.types";
import styles from "./InsecurityCard.module.scss";

const ListTitle = ({ title }: { title: string }) => {
  return (
    <Title
      className={`${TitleSize.Small} ${TitlePosition.Left} ${TitleVariant.Dark}`}
      titleTag={TitleTag.P}
      title={title}
    />
  );
};

export const InsecurityCard = ({
  className = "",
  listItems,
  title,
}: InsecurityCardProps) => {
  return (
    <div className={className}>
      <InfoCard className={`${styles.card}`} size={InfoCardSize.Large}>
        <ListTitle title={title} />
        <ul className={styles.list}>
          {listItems.map((item) => (
            <li className={styles.listItem} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </InfoCard>
    </div>
  );
};
