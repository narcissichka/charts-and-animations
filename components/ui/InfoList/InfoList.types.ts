import { ReactNode } from "react";
import { ResponsiveImageProps } from "../ResponsiveImage/ResponsiveImage.types";
import { InfoCardSize } from "./InfoCard/InfoCard.types";

export interface InfoListItem {
  child: ReactNode;
  id: string;
  imageProps?: ResponsiveImageProps;
}

export interface InfoListProps {
  items: InfoListItem[];
  showIndex?: boolean;
  size?: InfoCardSize;
  className?: string;
}
