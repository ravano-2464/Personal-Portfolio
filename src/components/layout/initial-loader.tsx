"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOADER_DURATION_MS = 1300;

export function InitialLoader() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasSeenLoader = sessionStorage.getItem("portfolio-loader-seen");

    if (reducedMotion || hasSeenLoader) {
      const immediateHide = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(immediateHide);
    }

    const timeout = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-loader-seen", "true");
      setVisible(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="initial-loader"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="grid size-20 place-items-center rounded-2xl border border-border/70 bg-gradient-to-br from-primary/20 to-cyan-500/15 text-2xl font-bold tracking-[-0.04em]"
              initial={{ scale: 0.88, opacity: 0.2 }}
              animate={{ scale: [0.9, 1, 0.96, 1], opacity: [0.3, 0.8, 1] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              RA
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0.2, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Loading portfolio experience...
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
