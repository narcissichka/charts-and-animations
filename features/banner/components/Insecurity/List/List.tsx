import { InfoList } from "@/components/ui/InfoList";
import { InfoCardSize } from "@/components/ui/InfoList/InfoCard";
import { Title, TitleVariant } from "@/components/ui/Title";
import { TitlePosition, TitleSize, TitleTag } from "@/components/ui/Title";

const ListTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Title
      className={`${TitleSize.Small} ${TitlePosition.Left} ${TitleVariant.Dark}`}
      titleTag={TitleTag.P}
      title={title}
      subtitle={subtitle}
    />
  );
};

export const insecurityListItems = [
  {
    id: "insecurity-1",
    child: (
      <ListTitle
        title="Lifestyle factors"
        subtitle="Considers diet, climate, stress, sleep, and habits."
      />
    ),
    imageProps: {
      mobileSrc: "/images/insecurity-1.svg",
      desktopSrc: "/images/insecurity-1.svg",
      alt: "Lifestyle factors",
    },
  },
  {
    id: "insecurity-2",
    child: (
      <ListTitle
        title="Cultural beauty standards"
        subtitle="Adapts to regional and societal ideals."
      />
    ),
    imageProps: {
      mobileSrc: "/images/insecurity-2.svg",
      desktopSrc: "/images/insecurity-2.svg",
      alt: "Cultural beauty standards",
    },
  },
  {
    id: "insecurity-3",
    child: (
      <ListTitle
        title="Genetic factors"
        subtitle="Takes into account genetic factors and how they might impact your facial aesthetics. "
      />
    ),
    imageProps: {
      mobileSrc: "/images/insecurity-3.svg",
      desktopSrc: "/images/insecurity-3.svg",
      alt: "Genetic factors",
    },
  },
];

export const List = () => {
  return (
    <InfoList
      items={insecurityListItems}
      size={InfoCardSize.Medium}
      cols={3}
    />
  );
};
