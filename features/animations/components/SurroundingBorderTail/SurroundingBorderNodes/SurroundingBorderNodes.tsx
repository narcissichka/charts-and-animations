import {
  SurroundingBorderNodeType,
  LineSuffix,
} from "@/features/animations/types/surroundingBorder";
import styles from "./SurroundingBorderNodes.module.scss";
import { lineId } from "@/features/animations/utils/surroundingBorder";

export const SurroundingBorderNodes = ({
  type,
}: {
  type: SurroundingBorderNodeType;
}) => {
  const isBefore = type === SurroundingBorderNodeType.Before;
  const isAfter = type === SurroundingBorderNodeType.After;

  return (
    <>
      {isBefore && (
        <>
          <span
            className={`${styles.line} ${styles.lineY1}`}
            data-line={lineId(type, LineSuffix.Left)}
          />
          <span
            className={`${styles.line} ${styles.lineY2}`}
            data-line={lineId(type, LineSuffix.RightTop)}
          />
          <span
            className={`${styles.line} ${styles.lineY3}`}
            data-line={lineId(type, LineSuffix.RightBottom)}
          />
        </>
      )}
      {isAfter && (
        <>
          <span
            className={`${styles.line} ${styles.lineY1}`}
            data-line={lineId(type, LineSuffix.Right)}
          />
          <span
            className={`${styles.line} ${styles.lineY2}`}
            data-line={lineId(type, LineSuffix.LeftTop)}
          />
          <span
            className={`${styles.line} ${styles.lineY3}`}
            data-line={lineId(type, LineSuffix.LeftBottom)}
          />
        </>
      )}
      <span
        className={`${styles.line} ${styles.lineX1}`}
        data-line={lineId(type, LineSuffix.Top)}
      />
      <span
        className={`${styles.line} ${styles.lineX2}`}
        data-line={lineId(type, LineSuffix.Bottom)}
      />
    </>
  );
};
