import { ReactNode } from "react";
import { ResponsiveImageProps } from "../../ResponsiveImage/ResponsiveImage.types";

export enum InfoCardSize {
  Small = "sm",
  Medium = "md",
}

export interface InfoCardProps {
  imageProps?: ResponsiveImageProps;
  index?: number;
  size?: InfoCardSize;
  children: ReactNode;
  className?: string;
}
