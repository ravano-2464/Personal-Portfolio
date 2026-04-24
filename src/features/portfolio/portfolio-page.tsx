"use client";

import { motion } from "framer-motion";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { InitialLoader } from "@/components/layout/initial-loader";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteHeader } from "@/components/layout/site-header";
import { usePortfolioAnimations } from "@/features/portfolio/hooks/use-portfolio-animations";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { ProjectsSection } from "@/features/portfolio/sections/projects-section";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";
import type { PortfolioData } from "@/features/portfolio/types";

type PortfolioPageProps = {
  data: PortfolioData;
};

export function PortfolioPage({ data }: PortfolioPageProps) {
  usePortfolioAnimations();

  return (
    <>
      <InitialLoader />
      <ScrollProgress />
      <CustomCursor />
      <SiteHeader name={data.name} navLinks={data.navLinks} />

      <motion.main
        className="overflow-x-clip"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <section id="home" className="scroll-mt-24">
          <HeroSection
            name={data.name}
            role={data.role}
            tagline={data.tagline}
            summary={data.summary}
            stats={data.stats}
            contact={data.contact}
          />
        </section>
        <AboutSection
          summary={data.summary}
          experiences={data.experiences}
          education={data.education}
        />
        <SkillsSection groups={data.skillGroups} />
        <ProjectsSection projects={data.projects} />
        <ContactSection contact={data.contact} />
      </motion.main>

      <footer className="border-t border-border/70 bg-background/70 py-8">
        <div className="mx-auto flex max-w-[96rem] flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} {data.name}. Crafted with Next.js,
            TypeScript, GSAP, and Framer Motion.
          </p>
          <a
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            github.com/ravano-2464
          </a>
        </div>
      </footer>
    </>
  );
}
