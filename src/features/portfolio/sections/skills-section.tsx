"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import type { SkillGroup } from "@/features/portfolio/types";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit and Strengths"
          description="A balanced profile across frontend, backend, data, and collaborative engineering capabilities."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <Card
              key={group.title}
              data-reveal
              className="rounded-2xl border border-border/70 bg-card/75"
            >
              <CardHeader>
                <CardTitle className="text-xl tracking-[-0.03em]">
                  {group.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{group.caption}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.06,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
