import { ReactNode } from "react";

export type AccordionHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface AccordionItemData {
  /** Unique id within its sibling group. */
  id: string;
  /** Label rendered inside the toggle button. */
  label: ReactNode;
  /** Panel body. Mutually exclusive with `items`. */
  content?: ReactNode;
  /** Nested items — renders a child `Accordion` inside the panel. */
  items?: AccordionItemData[];
}

export interface AccordionProps {
  items: AccordionItemData[];
  /** Allow more than one panel open at a time. Defaults to single-open. */
  allowMultiple?: boolean;
  /** Ids open on first render. */
  defaultOpenIds?: string[];
  /** Heading level for the triggers, for a correct document outline. */
  headingLevel?: AccordionHeadingLevel;
  className?: string;
}
