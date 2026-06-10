import { SquareProps } from "../BellCurve.types";
import styles from "../BellCurve.module.scss";

export const Square = ({ cx, cy, config }: SquareProps) => {
  const size = config.SQUARE_SIZE;

  return (
    <rect
      x={(cx ?? 0) - size / 2}
      y={(cy ?? 0) - size / 2}
      width={size}
      height={size}
      className={styles.squareMarker}
    />
  );
};
