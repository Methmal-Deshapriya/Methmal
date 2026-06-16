import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${
        isCenter ? "md:items-center" : ""
      }`}
    >
      <div className={isCenter ? "max-w-3xl text-center md:text-left" : "max-w-3xl"}>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
