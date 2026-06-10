import styles from "./Badge.module.scss";
import { BadgeProps, BadgeVariant } from "./Badge.types";

export const Badge = ({ text, variant = BadgeVariant.Light }: BadgeProps) => {
  return (
    <span aria-label={text} className={`${styles.badge} ${variant}`}>
      {text}
    </span>
  );
};
