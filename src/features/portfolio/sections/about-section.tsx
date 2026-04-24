import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import type { EducationItem, ExperienceItem } from "@/features/portfolio/types";

type AboutSectionProps = {
  summary: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
};

export function AboutSection({
  summary,
  experiences,
  education,
}: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Professional Journey and Learning Path"
          description="A timeline of hands-on fullstack work and academic growth focused on modern software development."
        />

        <div
          data-reveal
          className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start"
        >
          <Card className="rounded-2xl border border-border/70 bg-card/74 shadow-[0_20px_42px_-34px_rgba(13,22,42,0.75)]">
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
              <CardDescription>
                Adaptable fullstack developer with practical product-delivery
                experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>{summary}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="rounded-xl border border-border/65 bg-background/55 p-3 text-sm">
                  Strong foundation in frontend and backend web application
                  development.
                </li>
                <li className="rounded-xl border border-border/65 bg-background/55 p-3 text-sm">
                  Comfortable collaborating with backend teams and shipping
                  maintainable interfaces.
                </li>
                <li className="rounded-xl border border-border/65 bg-background/55 p-3 text-sm">
                  Experienced with real project cycles from planning to delivery.
                </li>
                <li className="rounded-xl border border-border/65 bg-background/55 p-3 text-sm">
                  Strong interest in continuous learning and technology
                  exploration.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border/70 bg-card/74">
            <CardHeader>
              <CardTitle>Key Focus Areas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
              <div className="rounded-xl border border-border/60 bg-background/55 p-3 text-sm text-muted-foreground">
                Scalable component architecture and clean code organization.
              </div>
              <div className="rounded-xl border border-border/60 bg-background/55 p-3 text-sm text-muted-foreground">
                Responsive UI systems with strong visual hierarchy.
              </div>
              <div className="rounded-xl border border-border/60 bg-background/55 p-3 text-sm text-muted-foreground">
                API-driven workflows and reliable data synchronization.
              </div>
              <div className="rounded-xl border border-border/60 bg-background/55 p-3 text-sm text-muted-foreground">
                Collaborative development in fast-moving project environments.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          <div data-reveal>
            <h3 className="mb-5 text-2xl font-semibold tracking-[-0.03em]">
              Experience Timeline
            </h3>
            <ol className="relative space-y-6 before:absolute before:bottom-5 before:left-2.5 before:top-4 before:w-px before:bg-border/70">
              {experiences.map((item) => (
                <li
                  key={`${item.company}-${item.period}`}
                  className="relative grid grid-cols-[1.25rem_1fr] gap-4"
                >
                  <span className="relative mt-1.5 size-5">
                    <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/55 bg-primary/30 shadow-[0_0_0_4px_color-mix(in_oklab,var(--background)_65%,transparent)]" />
                  </span>
                  <div className="rounded-2xl border border-border/70 bg-card/76 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-lg font-semibold tracking-[-0.02em]">
                        {item.role}
                      </p>
                      <Badge
                        variant="outline"
                        className="rounded-full border-primary/35 bg-primary/8 text-xs text-primary"
                      >
                        {item.employmentType}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/85">
                      {item.company}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {item.period}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.description.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal>
            <h3 className="mb-5 text-2xl font-semibold tracking-[-0.03em]">
              Education
            </h3>
            <div className="space-y-5">
              {education.map((item) => (
                <Card
                  key={`${item.institution}-${item.period}`}
                  className="rounded-2xl border border-border/70 bg-card/76"
                >
                  <CardHeader>
                    <CardTitle className="text-lg tracking-[-0.02em]">
                      {item.degree}
                    </CardTitle>
                    <CardDescription>
                      {item.institution} • {item.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.description.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
