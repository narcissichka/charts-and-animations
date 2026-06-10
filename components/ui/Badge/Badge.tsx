import styles from "./Badge.module.scss";
import { BadgeProps, BadgeVariant } from "./Badge.types";

export const Badge = ({ text, className = BadgeVariant.Light }: BadgeProps) => {
  return (
    <span aria-label={text} className={`${styles.badge} ${className}`}>
      {text}
    </span>
  );
};
