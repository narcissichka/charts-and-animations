"use client";

import { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 1439px)");

  if (isMobile) {
    return null;
  }

  return children;
};
