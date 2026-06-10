"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  TAIL_SEGMENTS,
  DOT_SIZE,
  TAIL_LENGTH,
  SPEED,
} from "../const/surroundingBorder";
import { Train } from "../types/surroundingBorder";
import {
  buildGeometry,
  createBorderSvg,
  createTrains,
} from "../utils/surroundingBorder";

gsap.registerPlugin(useGSAP);

export const useSurroundingBorderAnimation = (
  rootRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) return;

      const { svg, borderPath } = createBorderSvg(root);
      const trains = createTrains(root);

      let tween: gsap.core.Tween | null = null;

      const buildAnimation = () => {
        tween?.kill();

        const geometry = buildGeometry(root, svg, borderPath);

        if (!geometry) return;

        const { pathLength } = geometry;

        const state = {
          progress: 0,
        };

        const placeNode = (
          node: HTMLElement,
          progress: number,
          opacity: number,
          scale: number,
        ) => {
          const p = ((progress % 1) + 1) % 1;
          const point = borderPath.getPointAtLength(p * pathLength);

          gsap.set(node, {
            x: point.x - DOT_SIZE / 2,
            y: point.y - DOT_SIZE / 2,
            autoAlpha: opacity,
            scale,
          });
        };

        const placeTrain = (train: Train) => {
          const headProgress = state.progress + train.phase;

          placeNode(train.head, headProgress, 1, 1);

          train.tail.forEach((node, index) => {
            const ratio = (index + 1) / TAIL_SEGMENTS;
            const distanceBehind = ratio * TAIL_LENGTH;
            const progress = headProgress - distanceBehind / pathLength;

            const opacity = 1 - ratio;
            const scale = 1;

            placeNode(node, progress, opacity, scale);
          });
        };

        const setDotsPosition = () => {
          trains.forEach(placeTrain);
        };

        setDotsPosition();

        tween = gsap.to(state, {
          progress: 1,
          duration: pathLength / SPEED,
          ease: "none",
          repeat: -1,
          onUpdate: setDotsPosition,
        });
      };

      buildAnimation();

      let rafId = 0;

      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(buildAnimation);
      });

      resizeObserver.observe(root);

      return () => {
        cancelAnimationFrame(rafId);
        tween?.kill();
        resizeObserver.disconnect();

        svg.remove();

        trains.forEach((train) => {
          train.wrapper.remove();
        });
      };
    },
    { scope: rootRef },
  );
};
