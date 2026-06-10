import { createElement } from "react";
import {
  TitlePosition,
  TitleProps,
  TitleSize,
  TitleTag,
  TitleVariant,
} from "./Title.types";
import styles from "./Title.module.scss";

export const Title = ({
  title,
  subtitle,
  titleTag = TitleTag.H4,
  className = `${TitleVariant.Light} ${TitlePosition.Center} ${TitleSize.Medium}`,
}: TitleProps) => {
  return (
    <div className={`${styles.title} ${className}`}>
      {createElement(titleTag, { className: `${styles[titleTag]} heading` }, title)}
      {subtitle && <p className={`${styles.subtitle} subtitle`}>{subtitle}</p>}
    </div>
  );
};
