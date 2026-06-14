import { createElement } from "react";
import { AccordionItemProps } from "./AccordionItem.types";
import styles from "./AccordionItem.module.scss";

export const AccordionItem = ({
  id,
  label,
  isOpen,
  onToggle,
  headingLevel = 3,
  children,
  className = "",
}: AccordionItemProps) => {
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={`${styles.item} item ${isOpen ? `${styles.open} open` : ""} ${className}`}
    >
      {createElement(
        `h${headingLevel}`,
        { className: styles.heading },
        <button
          type="button"
          id={triggerId}
          className={`${styles.trigger} trigger`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.icon} aria-hidden="true" />
        </button>,
      )}

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={styles.panel}
        // Removes collapsed content from tab order and the a11y tree while
        // keeping it mounted so the open/close height can animate.
        inert={!isOpen}
      >
        <div className={styles.panelInner}>{children}</div>
      </div>
    </div>
  );
};
