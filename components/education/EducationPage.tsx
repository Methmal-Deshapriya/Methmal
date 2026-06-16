import Link from "next/link";
import {
  BookOpenCheck,
  BrainCircuit,
  Database,
  GitBranch,
  Layers3,
} from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";

const studyAreas = [
  "Programming",
  "Databases",
  "Software engineering",
  "Web systems",
  "AI fundamentals",
  "Systems thinking",
] as const;

const academicHighlights = [
  {
    label: "Result",
    value: "3As",
  },
  {
    label: "Island rank",
    value: "15th",
  },
  {
    label: "Stream",
    value: "Tech",
  },
  {
    label: "Z-score",
    value: "2.9294",
  },
] as const;

const learningCards = [
  {
    title: "Version control discipline",
    description:
      "Strengthening git-based workflows, collaborative delivery habits, and the engineering discipline needed inside fast-moving teams.",
    note: "Workflow foundations",
    icon: GitBranch,
  },
  {
    title: "Full-stack plus AI learning",
    description:
      "Bridging practical product engineering with AI-aware development, experimentation, and real-world implementation thinking.",
    note: "Applied intelligence",
    icon: BrainCircuit,
  },
  {
    title: "Practical software learning",
    description:
      "Self-directed study around architecture, databases, system behavior, and the product-quality details that shape better software.",
    note: "Builder mindset",
    icon: BookOpenCheck,
  },
] as const;

const focusAreas = [
  {
    label: "Current focus",
    title: "Software engineering",
    icon: Layers3,
  },
  {
    label: "Architecture",
    title: "Full-stack development",
    icon: GitBranch,
  },
  {
    label: "Innovation",
    title: "AI-aware systems",
    icon: BrainCircuit,
  },
  {
    label: "Infrastructure",
    title: "Databases and systems",
    icon: Database,
  },
] as const;

type SectionMarkerProps = {
  index: string;
};

function SectionMarker({ index }: SectionMarkerProps) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-12">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-primary)]">
        {index}
      </span>
      <div className="h-px flex-1 bg-[rgba(119,117,134,0.18)]" />
    </div>
  );
}

type HighlightCardProps = {
  label: string;
  value: string;
};

function HighlightCard({ label, value }: HighlightCardProps) {
  return (
    <div className="editorial-panel flex min-h-[148px] flex-col justify-between rounded-[26px] p-6 md:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
        {label}
      </p>
      <p className="font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)] md:text-[2rem]">
        {value}
      </p>
    </div>
  );
}

type LearningCardProps = {
  title: string;
  description: string;
  note: string;
  icon: (typeof learningCards)[number]["icon"];
};

function LearningCard({
  title,
  description,
  note,
  icon: Icon,
}: LearningCardProps) {
  return (
    <article className="editorial-panel group flex h-full flex-col rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)] transition-colors duration-300 group-hover:bg-[rgba(94,92,230,0.12)]">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-7 text-[var(--editorial-muted)]">
        {description}
      </p>

      <div className="mt-6 border-t border-[rgba(119,117,134,0.1)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-primary)]">
          {note}
        </p>
      </div>
    </article>
  );
}

type FocusCardProps = {
  label: string;
  title: string;
  icon: (typeof focusAreas)[number]["icon"];
};

function FocusCard({ label, title, icon: Icon }: FocusCardProps) {
  return (
    <article className="group rounded-[24px] border border-[rgba(119,117,134,0.12)] bg-white/55 p-6 transition-all duration-300 hover:border-[rgba(94,92,230,0.2)] hover:bg-white/72">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            {label}
          </p>
          <h3 className="mt-4 font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
            {title}
          </h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)]">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
}

export function EducationPage() {
  return (
    <PageScaffold active="Education">
      <main className="pb-8 pt-28 md:pt-32">
        <SectionReveal className="section-shell section-block relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-[rgba(94,92,230,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-10 h-48 w-48 rounded-full bg-[rgba(154,146,255,0.12)] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
                Academic foundation
              </p>
              <h1 className="mt-5 max-w-4xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
                Learning the foundations behind{" "}
                <span className="font-normal italic text-[var(--editorial-primary)]">
                  software
                </span>
                , systems, and intelligent products.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                My education journey is centered around Information and
                Communication Technology, with a strong emphasis on how
                systematic thinking can solve complex human problems.
              </p>
            </div>

            <div className="lg:col-span-4">
              <aside className="editorial-panel-strong border-l-2 border-l-[var(--editorial-primary)] p-7 md:p-8">
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                      Degree
                    </p>
                    <p className="mt-2 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)]">
                      BICT (Hons)
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                      Major
                    </p>
                    <p className="mt-2 text-lg font-medium text-[var(--editorial-foreground)]">
                      Software Technology
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                        Institution
                      </p>
                      <p className="mt-2 max-w-[15rem] text-sm leading-6 text-[var(--editorial-foreground)] md:text-base">
                        University of Sri Jayewardenepura
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                        GPA
                      </p>
                      <p className="mt-2 font-hanken text-4xl font-semibold tracking-[-0.05em] text-[var(--editorial-primary)]">
                        3.712
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block" delay={0.05}>
          <SectionMarker index="01" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="max-w-sm font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
                BICT (Hons) in Information and Communication Technology
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--editorial-muted)]">
                University of Sri Jayewardenepura
              </p>
              <p className="mt-2 text-base leading-7 text-[var(--editorial-muted)]">
                Faculty of Technology
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-4xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                My undergraduate experience was more than credits and lectures.
                It is where I started forming a software-builder mindset:
                understanding that every line of code belongs to a larger
                system, and every database schema carries real human intent.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {studyAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block" delay={0.1}>
          <SectionMarker index="02" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
                A/L Technology Stream
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                My academic path began with a strong performance in the Advanced
                Level Technology stream, which helped set the direction for my
                engineering trajectory.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
              {academicHighlights.map((item) => (
                <HighlightCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          className="section-shell section-block relative"
          delay={0.15}
        >
          <div className="pointer-events-none absolute inset-x-10 top-16 h-40 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.12),transparent_68%)] blur-3xl" />
          <SectionMarker index="03" />

          <div className="relative">
            <h2 className="max-w-2xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Structured learning beyond the classroom.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {learningCards.map((card) => (
                <LearningCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block" delay={0.2}>
          <SectionMarker index="04" />

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-hanken text-4xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-5xl">
              The areas I keep building around.
            </h2>
            <p className="max-w-md text-base leading-7 text-[var(--editorial-muted)]">
              Education is a perpetual state. These are the pillars I keep
              sharpening as I grow deeper into software building.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <FocusCard key={area.label} {...area} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal
          className="bg-[rgba(94,92,230,0.05)] py-20 md:py-28"
          delay={0.25}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-4xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              Education is the base.
              <br />
              Building is the proof.
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="editorial-button-primary min-w-52"
              >
                View selected projects
              </Link>
              <Link
                href="/connect"
                className="editorial-button-secondary min-w-52"
              >
                Connect with me
              </Link>
            </div>
          </div>
        </SectionReveal>
      </main>
    </PageScaffold>
  );
}
