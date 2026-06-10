import { ReactNode } from "react";

export interface ParallaxScrollProps {
  backgroundClassName?: string;
  imageElement: ReactNode;
  headingElement: ReactNode;
  children: ReactNode;
  withBlur?: boolean
}
