import styles from "./Spacer.module.scss";

export const Spacer = ({ className }: { className?: string }) => {
  return <div className={className ?? styles.spacer}></div>;
};
