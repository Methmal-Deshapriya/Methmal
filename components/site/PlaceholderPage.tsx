import Link from "next/link";

import { PageScaffold } from "./PageScaffold";

type PlaceholderPageProps = {
  active: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  active,
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <PageScaffold active={active}>
      <main className="section-shell flex min-h-[70vh] items-center py-20 md:py-24">
        <div className="editorial-panel-strong w-full rounded-[32px] border border-[rgba(119,117,134,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(244,240,255,0.96))] p-8 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-hanken text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="editorial-button-primary">
              Back to homepage
            </Link>
            <Link href="/projects" className="editorial-button-secondary">
              View projects direction
            </Link>
          </div>
        </div>
      </main>
    </PageScaffold>
  );
}
