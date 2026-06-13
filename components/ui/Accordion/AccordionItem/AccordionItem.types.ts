import { ReactNode } from "react";
import { AccordionHeadingLevel } from "../Accordion.types";

export interface AccordionItemProps {
  /** Base id used to wire the trigger and panel together for assistive tech. */
  id: string;
  label: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  headingLevel?: AccordionHeadingLevel;
  /** Panel body — plain content or a nested `Accordion`. */
  children?: ReactNode;
  className?: string;
}
