import { ArrowUpRight } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

type ProjectCardProps = {
  ctaLabel?: string;
  impact: string;
  link: string;
  metrics: readonly string[];
  summary: string;
  title: string;
};

export function ProjectCard({
  ctaLabel = "View project",
  impact,
  link,
  metrics,
  summary,
  title,
}: ProjectCardProps) {
  return (
    <Card className="h-full border border-stone-900/10 bg-white/80 shadow-[0_18px_60px_-40px_rgba(38,25,12,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/6 dark:shadow-[0_20px_70px_-44px_rgba(7,14,24,0.88)]">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => (
            <Badge
              key={metric}
              className="border-stone-900/10 bg-stone-900/5 text-stone-700 dark:border-white/10 dark:bg-white/6 dark:text-stone-200"
              variant="outline"
            >
              {metric}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl text-stone-950 dark:text-stone-50">{title}</CardTitle>
          <CardDescription className="text-sm leading-6 text-stone-700 dark:text-stone-300">
            {summary}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="rounded-2xl border border-dashed border-teal-900/15 bg-teal-50/80 px-4 py-3 text-sm leading-6 text-teal-950 dark:border-teal-200/10 dark:bg-teal-300/10 dark:text-teal-100">
          {impact}
        </p>
      </CardContent>
      <CardFooter className="mt-auto bg-stone-950/[0.03] dark:border-white/8 dark:bg-white/[0.03]">
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition hover:text-teal-900 dark:text-stone-100 dark:hover:text-teal-300"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          {ctaLabel}
          <ArrowUpRight className="size-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
