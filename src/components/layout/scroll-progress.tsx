"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const TRACK_INSET = 12;
const MIN_THUMB_HEIGHT = 56;

type ScrollbarMetrics = {
  trackHeight: number;
  thumbHeight: number;
  maxTravel: number;
  scrollable: boolean;
};

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.28,
  });
  const [enabled, setEnabled] = React.useState(false);
  const [metrics, setMetrics] = React.useState<ScrollbarMetrics>({
    trackHeight: 0,
    thumbHeight: 0,
    maxTravel: 0,
    scrollable: false,
  });
  const y = useTransform(smoothProgress, [0, 1], [0, metrics.maxTravel]);

  React.useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => {
      setEnabled(pointerFine.matches);
    };

    updateEnabled();
    pointerFine.addEventListener("change", updateEnabled);

    return () => {
      pointerFine.removeEventListener("change", updateEnabled);
    };
  }, []);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const root = document.documentElement;

    const updateMetrics = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = root.scrollHeight;
      const trackHeight = Math.max(viewportHeight - TRACK_INSET * 2, 0);
      const scrollableHeight = Math.max(documentHeight - viewportHeight, 0);

      if (!trackHeight || !scrollableHeight) {
        setMetrics({
          trackHeight,
          thumbHeight: trackHeight,
          maxTravel: 0,
          scrollable: false,
        });
        return;
      }

      const thumbByRatio = (viewportHeight / documentHeight) * trackHeight;
      const thumbHeight = Math.min(
        trackHeight,
        Math.max(thumbByRatio, MIN_THUMB_HEIGHT),
      );

      setMetrics({
        trackHeight,
        thumbHeight,
        maxTravel: Math.max(trackHeight - thumbHeight, 0),
        scrollable: true,
      });
    };

    updateMetrics();

    const hasResizeObserver = typeof ResizeObserver !== "undefined";
    const resizeObserver = hasResizeObserver
      ? new ResizeObserver(updateMetrics)
      : null;

    if (resizeObserver) {
      resizeObserver.observe(root);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    window.addEventListener("resize", updateMetrics);
    window.addEventListener("load", updateMetrics);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("load", updateMetrics);
    };
  }, [enabled]);

  React.useEffect(() => {
    const root = document.documentElement;
    const isActive = enabled && metrics.scrollable;
    root.classList.toggle("custom-scrollbar-active", isActive);

    return () => {
      root.classList.remove("custom-scrollbar-active");
    };
  }, [enabled, metrics.scrollable]);

  if (!enabled || !metrics.scrollable) {
    return null;
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-3 right-2 z-[70] w-1.5 rounded-full bg-border/60"
    >
      <motion.div
        className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-primary via-cyan-400 to-primary shadow-[0_0_20px_0_rgba(52,143,235,0.35)]"
        style={{
          y,
          height: metrics.thumbHeight,
        }}
      />
    </div>
  );
}
