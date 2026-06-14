import { ReactNode } from "react";

export interface GridProps {
  className?: string;
  top?: ReactNode;
  main: ReactNode;
  bottom?: ReactNode;
  decoration?: ReactNode;
}

export enum GridRowVariant {
  Top = "top",
  Main = "main",
  Bottom = "bottom",
  Decoration = "decoration",
}
