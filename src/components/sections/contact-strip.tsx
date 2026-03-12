import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";

import { cn } from "../../lib/utils";

const primaryActionClass =
  "inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-amber-300 px-5 text-sm font-medium whitespace-nowrap text-stone-950 transition-all outline-none hover:bg-amber-200 dark:bg-teal-300 dark:hover:bg-teal-200";

const secondaryActionClass =
  "inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-stone-100/20 bg-transparent px-5 text-sm font-medium whitespace-nowrap text-stone-50 transition-all outline-none hover:bg-stone-50/10 dark:border-white/14 dark:text-stone-100";

type ContactStripProps = {
  availability: string;
  email: string;
  eyebrow: string;
  githubLabel: string;
  githubUrl: string;
  location: string;
  primaryAction: string;
  title: string;
};

export function ContactStrip({
  availability,
  email,
  eyebrow,
  githubLabel,
  githubUrl,
  location,
  primaryAction,
  title,
}: ContactStripProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
      <div className="overflow-hidden rounded-[2rem] border border-stone-900/10 bg-stone-950 px-6 py-8 text-stone-50 shadow-[0_24px_90px_-45px_rgba(25,16,9,0.95)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(17,24,39,0.94),rgba(15,23,42,0.98))] dark:text-stone-100 dark:shadow-[0_26px_100px_-48px_rgba(5,10,20,0.95)] md:px-10 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-300 dark:text-teal-300">
              {eyebrow}
            </p>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold md:text-4xl">{title}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-stone-300 dark:text-stone-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {location}
              </span>
              <span>{availability}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a className={cn(primaryActionClass)} href={`mailto:${email}`}>
              {primaryAction}
              <Mail className="size-4" />
            </a>
            <a
              className={cn(secondaryActionClass)}
              href={githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              {githubLabel}
              <Github className="size-4" />
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
