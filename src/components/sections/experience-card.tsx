import { Badge } from "../ui/badge";

type ExperienceCardProps = {
  highlights: readonly string[];
  highlightsLabel?: string;
  organization: string;
  period: string;
  role: string;
  stack: readonly string[];
  summary: string;
};

export function ExperienceCard({
  highlights,
  highlightsLabel = "Highlights",
  organization,
  period,
  role,
  stack,
  summary,
}: ExperienceCardProps) {
  return (
    <article className="surface-panel h-full px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500">
            <span>{period}</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-950 dark:text-stone-50">
            {organization}
          </h3>
          <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{role}</p>
          <p className="text-sm leading-6 text-stone-700 dark:text-stone-300">{summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge
              key={item}
              className="rounded-full border-stone-900/10 bg-stone-900/5 px-3 py-1 text-stone-700 dark:border-white/10 dark:bg-white/6 dark:text-stone-200"
              variant="outline"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500">
            {highlightsLabel}
          </p>
          <ul className="space-y-2 text-sm leading-6 text-stone-700 dark:text-stone-300">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-amber-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
