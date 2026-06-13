"use client";

import { useId, useState } from "react";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import {
  AccordionHeadingLevel,
  AccordionProps,
} from "./Accordion.types";
import styles from "./Accordion.module.scss";

export const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  headingLevel = 3,
  className = "",
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const groupId = useId();

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      // Single-open (default): opening an item collapses the others.
      if (!allowMultiple) {
        return isOpen ? [] : [id];
      }
      return isOpen ? prev.filter((openId) => openId !== id) : [...prev, id];
    });
  };

  const nestedLevel = Math.min(headingLevel + 1, 6) as AccordionHeadingLevel;

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map(({ id, label, content, items: nestedItems }) => (
        <AccordionItem
          key={id}
          id={`${groupId}-${id}`}
          label={label}
          isOpen={openIds.includes(id)}
          onToggle={() => toggle(id)}
          headingLevel={headingLevel}
        >
          {nestedItems ? (
            <Accordion
              className={styles.nested}
              items={nestedItems}
              allowMultiple={allowMultiple}
              headingLevel={nestedLevel}
            />
          ) : (
            <div className={styles.content}>{content}</div>
          )}
        </AccordionItem>
      ))}
    </div>
  );
};
