import { InfoList } from "@/components/ui/InfoList/InfoList";
import { InfoCardSize } from "@/components/ui/InfoList/InfoCard/InfoCard.types";
import { Title } from "@/components/ui/Title/Title";
import {
  TitlePosition,
  TitleSize,
  TitleTag,
} from "@/components/ui/Title/Title.types";
import styles from "./List.module.scss";

const ListTitle = ({ title }: { title: string }) => {
  return (
    <Title
      className={`${TitleSize.Small} ${TitlePosition.Left} ${styles.title}`}
      titleTag={TitleTag.P}
      title={title}
    />
  );
};

export const qovesPlanListItems = [
  {
    id: "qoves-plan-1",
    child: <ListTitle title={"Get your expert facial\nanalysis"} />,
  },
  {
    id: "qoves-plan-2",
    child: <ListTitle title={"Visualise your best\nlooking self"} />,
  },
  {
    id: "qoves-plan-3",
    child: <ListTitle title={"Get your personalized\nglow-up protocol"} />,
  },
  {
    id: "qoves-plan-4",
    child: <ListTitle title={"Track your progress and see\ndramatic results"} />,
  },
];

export const List = () => {
  return (
    <InfoList
      items={qovesPlanListItems}
      showIndex={true}
      size={InfoCardSize.Small}
      className={styles.card}
    />
  );
};
