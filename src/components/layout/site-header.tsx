"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/features/portfolio/types";

type SiteHeaderProps = {
  name: string;
  navLinks: NavLink[];
};

export function SiteHeader({ name, navLinks }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-[96rem] px-4 pb-4 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-border/70 bg-background/75 px-4 py-3 shadow-[0_25px_60px_-35px_rgba(13,26,45,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="text-sm font-semibold tracking-[-0.02em] text-foreground sm:text-base"
            >
              {name}
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "hidden rounded-full px-4 sm:inline-flex",
                )}
              >
                Let&apos;s Talk
                <ArrowUpRight className="size-3.5" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          <nav className="mt-3 flex items-center gap-1 overflow-x-auto pb-1 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
