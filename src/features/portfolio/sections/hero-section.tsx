"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactDetails, StatItem } from "@/features/portfolio/types";

type HeroSectionProps = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  stats: StatItem[];
  contact: ContactDetails;
};

export function HeroSection({
  name,
  role,
  tagline,
  summary,
  stats,
  contact,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-parallax="soft"
          className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-cyan-400/12 to-transparent blur-3xl"
        />
        <div
          data-parallax="strong"
          className="absolute right-[-140px] top-20 h-[280px] w-[280px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-primary/8 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12 2xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="space-y-8">
            <Badge
              data-hero-eyebrow
              className="rounded-full border border-primary/30 bg-primary/8 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-primary uppercase"
            >
              {role}
            </Badge>

            <div className="space-y-4">
              <h1
                data-hero-title
                className="max-w-4xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl"
              >
                {name}
              </h1>
              <p
                data-hero-copy
                className="max-w-3xl text-lg font-medium text-foreground/90 sm:text-xl"
              >
                {tagline}
              </p>
              <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
                {summary}
              </p>
            </div>

            <div
              data-hero-actions
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "rounded-full px-6",
                )}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Projects
                <ArrowDownRight className="size-4" />
              </motion.a>
              <motion.a
                href="/Ravano-Akbar-Widodo-CV.pdf"
                download
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6",
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
                <Download className="size-4" />
              </motion.a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card/70 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.aside
            data-hero-card
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-border/70 bg-card/72 p-5 shadow-[0_26px_55px_-36px_rgba(9,16,30,0.7)] backdrop-blur-xl sm:p-6"
          >
            <div className="rounded-2xl border border-white/25 bg-gradient-to-br from-primary/16 via-background/10 to-cyan-500/12 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary/90">
                Open To Opportunity
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                Fullstack Role and Product-Focused Team
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Available for contract and full-time opportunities with modern web
                stacks.
              </p>
            </div>

            <div className="mt-5 space-y-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitBranch className="size-4 text-primary" />
                github.com/ravano-2464
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {contact.phone}
              </a>
              <div className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                {contact.location}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
