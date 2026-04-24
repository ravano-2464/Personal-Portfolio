import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}
