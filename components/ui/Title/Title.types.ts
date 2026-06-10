import { ReactNode } from "react";

export enum TitleTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum TitleVariant {
  Light = "light",
  Dark = "dark",
}

export enum TitlePosition {
  Left = "left",
  Center = "center",
}

export enum TitleSize {
  Small = "sm",
  Medium = "md",
}

export interface TitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  titleTag?: TitleTag;
  className?: string;
}
