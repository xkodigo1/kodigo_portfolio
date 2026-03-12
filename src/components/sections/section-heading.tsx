import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";

type SectionHeadingProps = {
  align?: "left" | "center";
  eyebrow: string;
  summary: string;
  title: string;
};

export function SectionHeading({ align = "left", eyebrow, summary, title }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", align === "center" && "mx-auto text-center")}>
      <Badge
        className="border-amber-400/50 bg-amber-200/70 text-stone-900 dark:border-amber-300/18 dark:bg-amber-300/12 dark:text-amber-100"
        variant="outline"
      >
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 md:text-4xl">
          {title}
        </h2>
        <p className="text-pretty text-base leading-7 text-stone-700 dark:text-stone-300 md:text-lg">
          {summary}
        </p>
      </div>
    </div>
  );
}
