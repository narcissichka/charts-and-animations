import { InsecurityCard } from ".";
import { InsecurityCardProps } from "../Insecurity.types";
import styles from "./InsecurityCard.module.scss";

export const InsecurityCardWrapper = ({
  insecurityCardsData,
}: {
  insecurityCardsData: InsecurityCardProps[];
}) => {
  return (
    <>
      <svg aria-hidden="true" className={styles.filterSvg}>
        <defs>
          <filter
            id="glass-warp"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warp"
            />
            <feGaussianBlur in="warp" stdDeviation="1" />
          </filter>
        </defs>
      </svg>
      {insecurityCardsData.map((card, i) => (
        <InsecurityCard
          key={`insecurity-card-${i}`}
          className={card.className}
          title={card.title}
          listItems={card.listItems}
        />
      ))}
    </>
  );
};
