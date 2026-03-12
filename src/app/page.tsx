"use client";

import {
  ArrowRight,
  Github,
  Languages,
  Mail,
  MoonStar,
  MoveRight,
  Sparkles,
  SunMedium,
} from "lucide-react";
import { useEffect, useState } from "react";

import { ContactStrip } from "../components/sections/contact-strip";
import { ProcessStep } from "../components/sections/process-step";
import { ProjectCard } from "../components/sections/project-card";
import { Reveal } from "../components/sections/reveal";
import { SectionHeading } from "../components/sections/section-heading";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { defaultLocale, type Locale, localeOptions, portfolioContent } from "../data/portfolio";
import { cn } from "../lib/utils";

type ThemeMode = "light" | "dark";

const localeStorageKey = "kodigo-locale";
const themeStorageKey = "kodigo-theme";

const primaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-stone-950 px-4 py-3 text-center text-sm font-medium text-stone-50 transition-all outline-none hover:bg-stone-800 sm:w-auto sm:px-5 sm:py-0 sm:whitespace-nowrap dark:bg-teal-300 dark:text-stone-950 dark:hover:bg-teal-200";

const secondaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-stone-900/15 bg-white/60 px-4 py-3 text-center text-sm font-medium text-stone-900 transition-all outline-none hover:bg-stone-100 sm:w-auto sm:px-5 sm:py-0 sm:whitespace-nowrap dark:border-white/12 dark:bg-white/6 dark:text-stone-100 dark:hover:bg-white/10";

const preferenceButtonClass =
  "inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-all outline-none sm:min-h-10";

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en" || value === "pt";
}

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    const storedTheme = window.localStorage.getItem(themeStorageKey);

    if (isLocale(storedLocale)) {
      setLocale(storedLocale);
    }

    if (isThemeMode(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const content = portfolioContent[locale];
  const isDark = theme === "dark";

  return (
    <main className="relative overflow-hidden pb-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.28),transparent_38%),radial-gradient(circle_at_78%_18%,rgba(20,184,166,0.2),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(245,158,11,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="grid-fade h-full w-full" />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <Reveal className="surface-panel px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10" delay={0.05}>
            <div className="flex min-w-0 flex-wrap items-start gap-3">
              <Badge
                className="h-auto max-w-full justify-start whitespace-normal border-teal-900/15 bg-teal-100 px-3 py-1.5 text-[11px] leading-4 text-teal-950 sm:h-5 sm:whitespace-nowrap sm:px-2 sm:py-0.5 sm:text-xs dark:border-teal-200/12 dark:bg-teal-300/14 dark:text-teal-100"
                variant="outline"
              >
                <Sparkles className="size-3.5" />
                {content.siteConfig.availability}
              </Badge>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-600 sm:text-xs sm:tracking-[0.24em] dark:text-stone-400">
                {content.siteConfig.location}
              </span>
            </div>

            <div className="mt-7 max-w-3xl min-w-0 space-y-5 sm:mt-8 sm:space-y-6">
              <div className="space-y-3">
                <p className="max-w-full font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.28em] dark:text-stone-500">
                  {content.siteConfig.title}
                </p>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl dark:text-stone-50 md:text-7xl">
                  {content.siteConfig.name}
                </h1>
              </div>

              <p className="max-w-2xl text-balance text-lg leading-7 text-stone-700 sm:text-xl sm:leading-8 dark:text-stone-200 md:text-2xl">
                {content.siteConfig.heroBlurb}
              </p>
              <p className="max-w-2xl text-pretty text-[15px] leading-7 text-stone-600 sm:text-base dark:text-stone-400 md:text-lg">
                {content.siteConfig.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={cn(primaryCtaClass)} href="#work">
                {content.ui.workButton}
                <ArrowRight className="size-4" />
              </a>
              <a className={cn(secondaryCtaClass)} href={`mailto:${content.siteConfig.email}`}>
                {content.ui.contactButton}
                <Mail className="size-4" />
              </a>
            </div>

            <Separator className="my-8 bg-stone-900/10 dark:bg-white/10" />

            <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
              {content.principles.map((principle) => (
                <div key={principle} className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                    {content.ui.principleLabel}
                  </p>
                  <p className="text-sm leading-6 text-stone-700 dark:text-stone-300">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="grid min-w-0 gap-5" delay={0.12}>
            <article className="surface-panel p-5 sm:p-6 md:p-7">
              <div className="flex flex-col gap-6">
                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                    {content.ui.controlsEyebrow}
                  </p>
                  <h2 className="text-xl font-semibold text-stone-950 sm:text-2xl dark:text-stone-50">
                    {content.ui.controlsTitle}
                  </h2>
                  <p className="text-sm leading-6 text-stone-700 dark:text-stone-400">
                    {content.ui.controlsSummary}
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                      <Languages className="size-3.5" />
                      {content.ui.languageLabel}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {localeOptions.map((option) => {
                        const selected = option.code === locale;

                        return (
                          <button
                            aria-pressed={selected}
                            key={option.code}
                            className={cn(
                              preferenceButtonClass,
                              "min-w-[4.5rem] flex-1 sm:min-w-0 sm:flex-none",
                              selected
                                ? "border-teal-900/15 bg-teal-100 text-teal-950 dark:border-teal-200/12 dark:bg-teal-300/14 dark:text-teal-100"
                                : "border-stone-900/10 bg-white/65 text-stone-700 hover:bg-stone-100 dark:border-white/10 dark:bg-white/6 dark:text-stone-300 dark:hover:bg-white/10",
                            )}
                            onClick={() => setLocale(option.code)}
                            title={option.nativeName}
                            type="button"
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                      {isDark ? (
                        <MoonStar className="size-3.5" />
                      ) : (
                        <SunMedium className="size-3.5" />
                      )}
                      {content.ui.themeLabel}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        aria-pressed={!isDark}
                        className={cn(
                          preferenceButtonClass,
                          "flex-1 sm:flex-none",
                          !isDark
                            ? "border-amber-900/15 bg-amber-100 text-amber-950 dark:border-amber-200/12 dark:bg-amber-300/14 dark:text-amber-100"
                            : "border-stone-900/10 bg-white/65 text-stone-700 hover:bg-stone-100 dark:border-white/10 dark:bg-white/6 dark:text-stone-300 dark:hover:bg-white/10",
                        )}
                        onClick={() => setTheme("light")}
                        type="button"
                      >
                        <SunMedium className="size-4" />
                        {content.ui.lightMode}
                      </button>
                      <button
                        aria-pressed={isDark}
                        className={cn(
                          preferenceButtonClass,
                          "flex-1 sm:flex-none",
                          isDark
                            ? "border-teal-900/15 bg-teal-100 text-teal-950 dark:border-teal-200/12 dark:bg-teal-300/14 dark:text-teal-100"
                            : "border-stone-900/10 bg-white/65 text-stone-700 hover:bg-stone-100 dark:border-white/10 dark:bg-white/6 dark:text-stone-300 dark:hover:bg-white/10",
                        )}
                        onClick={() => setTheme("dark")}
                        type="button"
                      >
                        <MoonStar className="size-4" />
                        {content.ui.darkMode}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="surface-panel overflow-hidden p-5 sm:p-6 md:p-7">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between">
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                    {content.ui.operatingStackEyebrow}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-stone-950 sm:text-2xl dark:text-stone-50">
                    {content.ui.operatingStackTitle}
                  </h2>
                </div>
                <a
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/60 px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-white sm:w-auto dark:border-white/10 dark:bg-white/6 dark:text-stone-100 dark:hover:bg-white/10"
                  href={content.siteConfig.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.ui.githubLabel}
                  <Github className="size-4" />
                </a>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {content.stackGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[1.5rem] border border-stone-900/10 bg-white/65 p-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500">
                      {content.ui.stackGroupLabel}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-stone-950 dark:text-stone-50">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700 dark:text-stone-300">
                      {group.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          className="rounded-full border-stone-900/10 bg-stone-900/5 px-3 py-1 text-stone-700 dark:border-white/10 dark:bg-white/6 dark:text-stone-200"
                          variant="outline"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {content.timeline.map((entry) => (
                <article
                  key={entry.label}
                  className="surface-panel min-h-36 px-5 py-5 sm:min-h-44 sm:py-6 md:min-h-52 md:px-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                    {entry.label}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-stone-950 sm:mt-5 sm:text-xl dark:text-stone-50">
                    {entry.value}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 md:px-10 md:py-14">
        <Reveal>
          <SectionHeading
            eyebrow={content.ui.capabilitiesEyebrow}
            summary={content.ui.capabilitiesSummary}
            title={content.ui.capabilitiesTitle}
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.capabilityGroups.map((group, index) => (
            <Reveal key={group.title} delay={0.05 * (index + 1)}>
              <article className="surface-panel h-full px-5 py-5 sm:px-6 sm:py-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 sm:text-xs sm:tracking-[0.22em] dark:text-stone-500">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-stone-950 sm:text-2xl dark:text-stone-50">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-700 dark:text-stone-300">
                  {group.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 md:px-10 md:py-14" id="work">
        <Reveal>
          <SectionHeading
            eyebrow={content.ui.selectedWorkEyebrow}
            summary={content.ui.selectedWorkSummary}
            title={content.ui.selectedWorkTitle}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {content.featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={0.06 * (index + 1)}>
              <ProjectCard {...project} ctaLabel={project.ctaLabel ?? content.ui.projectButton} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 md:px-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <Reveal className="surface-panel px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow={content.ui.processEyebrow}
              summary={content.ui.processSummary}
              title={content.ui.processTitle}
            />
            <div className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-4 py-2 text-center text-sm text-stone-700 sm:w-auto dark:border-white/10 dark:bg-white/6 dark:text-stone-200">
              {content.ui.processBadge}
              <MoveRight className="size-4" />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {content.processSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.06 * (index + 1)}>
                <ProcessStep
                  detail={step.detail}
                  index={index + 1}
                  stepLabel={content.ui.stepLabel}
                  title={step.title}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip
        availability={content.siteConfig.availability}
        email={content.siteConfig.email}
        eyebrow={content.contact.eyebrow}
        githubLabel={content.contact.githubLabel}
        githubUrl={content.siteConfig.githubUrl}
        location={content.siteConfig.location}
        primaryAction={content.contact.primaryAction}
        title={content.contact.title}
      />
    </main>
  );
}
