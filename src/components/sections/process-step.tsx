type ProcessStepProps = {
  detail: string;
  index: number;
  stepLabel: string;
  title: string;
};

export function ProcessStep({ detail, index, stepLabel, title }: ProcessStepProps) {
  return (
    <article className="rounded-[1.75rem] border border-stone-900/10 bg-white/70 p-5 shadow-[0_16px_40px_-34px_rgba(38,25,12,0.45)] backdrop-blur sm:p-6 dark:border-white/10 dark:bg-white/6 dark:shadow-[0_18px_48px_-36px_rgba(7,14,24,0.82)]">
      <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-teal-800 sm:text-sm dark:text-teal-300">
        {stepLabel} {index.toString().padStart(2, "0")}
      </div>
      <h3 className="text-lg font-semibold text-stone-950 sm:text-xl dark:text-stone-50">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-stone-700 dark:text-stone-300">{detail}</p>
    </article>
  );
}
