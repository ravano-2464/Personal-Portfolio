"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 300, damping: 26, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 26, mass: 0.3 });
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateState = () => {
      setEnabled(pointerFine.matches && !reducedMotion.matches);
    };

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    updateState();

    if (pointerFine.matches && !reducedMotion.matches) {
      window.addEventListener("mousemove", handleMove, { passive: true });
    }

    pointerFine.addEventListener("change", updateState);
    reducedMotion.addEventListener("change", updateState);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      pointerFine.removeEventListener("change", updateState);
      reducedMotion.removeEventListener("change", updateState);
    };
  }, [x, y]);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("custom-cursor-active", enabled);

    return () => {
      root.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[65] size-7 rounded-full border border-primary/45 bg-primary/10 shadow-[0_0_28px_0_rgba(52,143,235,0.35)] backdrop-blur-sm"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
