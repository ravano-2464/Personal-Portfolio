"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/features/portfolio/types";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = React.useState<ProjectItem | null>(
    null,
  );

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[112rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Interactive products built with modern fullstack tooling, each focused on usability and scalable structure."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              data-reveal
              type="button"
              onClick={() => setActiveProject(project)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              className="w-full text-left"
            >
              <Card className="h-full rounded-2xl border border-border/70 bg-card/78 py-0 shadow-[0_20px_45px_-34px_rgba(13,20,40,0.8)]">
                <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-border/70">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="w-full !rounded-none bg-background/45 object-contain"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/35 bg-primary/8 text-xs text-primary"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      View Detail
                    </span>
                  </div>
                  <CardTitle className="text-xl tracking-[-0.03em]">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4 sm:pb-5">
                  <p className="text-sm text-muted-foreground">
                    {project.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/65 bg-background/65 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog
        open={Boolean(activeProject)}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setActiveProject(null);
          }
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border border-border/75 bg-background/95 p-0 backdrop-blur-xl sm:max-w-5xl">
          {activeProject ? (
            <>
              <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-border/70">
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} cover`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1024px"
                  className="w-full !rounded-none bg-background/45 object-contain"
                  preload
                />
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <DialogHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Layers3 className="size-4" />
                    {activeProject.category}
                  </div>
                  <DialogTitle className="text-3xl tracking-[-0.03em]">
                    {activeProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                    {activeProject.overview}
                  </DialogDescription>
                </DialogHeader>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-border/70 bg-background/60 px-3 py-1 text-xs text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {activeProject.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-full px-4",
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
