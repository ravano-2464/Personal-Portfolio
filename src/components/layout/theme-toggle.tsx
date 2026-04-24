"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const isDark =
    mounted &&
    (theme === "dark" || (theme === "system" && resolvedTheme === "dark"));

  return (
    <Button
      aria-label="Toggle light and dark mode"
      size="icon-sm"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-border/70 bg-background/50 backdrop-blur-md"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <MoonStar className="size-4" /> : <Sun className="size-4" />}
      </motion.span>
    </Button>
  );
}
