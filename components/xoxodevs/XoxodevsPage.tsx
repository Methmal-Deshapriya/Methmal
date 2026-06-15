import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Github,
  Globe,
  Rocket,
  Route,
} from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";

// ── Constants ─────────────────────────────────────────────────────────────────

// TODO: Confirm GitHub org URL once the org is publicly set up
const GITHUB_ORG_URL = "https://github.com/xoxodevs";
const WEBSITE_URL = "https://xoxodevs.vercel.app/";

// ── Data ──────────────────────────────────────────────────────────────────────

const studioFocusItems = [
  "Full-stack software solutions",
  "AI-ready digital products",
  "MVP development",
  "Web applications and dashboards",
  "Cloud, deployment, and support",
  "Founder-led execution",
] as const;

const principles = [
  {
    index: "01",
    title: "Simple before complex",
    description:
      "Start with the clearest version of the solution before adding unnecessary features.",
  },
  {
    index: "02",
    title: "Useful before flashy",
    description:
      "Build software that solves a real problem instead of only looking impressive.",
  },
  {
    index: "03",
    title: "Reliable before over-engineered",
    description:
      "Keep systems understandable, maintainable, and practical for real users.",
  },
] as const;

const services = [
  {
    title: "Web Applications",
    description:
      "Custom web platforms, dashboards, portals, booking systems, LMS solutions, and business tools with clean interfaces and scalable structure.",
    tags: ["Web Apps", "Dashboards", "Portals"],
    icon: Globe,
  },
  {
    title: "AI-Ready Software",
    description:
      "Practical AI integrations such as chatbots, intelligent search, document Q&A, automation workflows, and ML model connections.",
    tags: ["AI", "Automation", "Search"],
    icon: BrainCircuit,
  },
  {
    title: "MVP Development",
    description:
      "From idea to working product, xoxodevs helps shape, build, launch, and improve the first usable version of a software product.",
    tags: ["MVP", "Product", "Launch"],
    icon: Rocket,
  },
  {
    title: "Cloud & Support",
    description:
      "Deployment, hosting setup, performance improvements, maintenance, bug fixing, and technical support after launch.",
    tags: ["Cloud", "Hosting", "Support"],
    icon: Cloud,
  },
  {
    title: "Technical Planning",
    description:
      "Planning project scope, core modules, user flows, architecture, timelines, and the most suitable development direction.",
    tags: ["Architecture", "Roadmaps", "Planning"],
    icon: Route,
  },
] as const;

const githubMetadata = [
  "Repositories",
  "Product experiments",
  "Starter systems",
  "Internal tools",
] as const;

type XoxodevsProject = {
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  action: { label: string; href: string; external?: boolean };
  live: boolean;
};

// Add future projects to this array — no code changes needed elsewhere.
const xoxodevsProjects: readonly XoxodevsProject[] = [
  {
    index: "01",
    title: "xoxodevs Website",
    category: "Startup Website",
    description:
      "The public website for xoxodevs, presenting the studio's services, process, software direction, and contact flow.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Responsive UI"],
    action: { label: "Visit Site", href: WEBSITE_URL, external: true },
    live: true,
  },
  {
    index: "02",
    title: "Product Experiments",
    category: "Future Work",
    description:
      "A space for future MVPs, internal tools, dashboards, and AI-assisted products built under the xoxodevs brand.",
    technologies: ["Full-stack", "AI-ready", "MVP", "Cloud"],
    action: { label: "Coming Soon", href: "#" },
    live: false,
  },
  {
    index: "03",
    title: "Client Systems",
    category: "Future Work",
    description:
      "A place to showcase practical software systems, websites, dashboards, and automations built for real users and small teams.",
    technologies: ["Web Apps", "Dashboards", "Automation", "Support"],
    action: { label: "Coming Soon", href: "#" },
    live: false,
  },
];

const philosophy = [
  {
    title: "Clarity",
    description:
      "The user should understand what the system does without needing a long explanation.",
  },
  {
    title: "Speed",
    description:
      "Small teams and early ideas need fast execution without losing structure.",
  },
  {
    title: "Maintainability",
    description: "The system should be easy to update, explain, and improve later.",
  },
  {
    title: "Real-world value",
    description:
      "Every feature should support a real workflow, user need, or business goal.",
  },
] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionMarker({ index }: { index: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-12">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-primary)]">
        {index}
      </span>
      <div className="h-px flex-1 bg-[rgba(119,117,134,0.18)]" />
    </div>
  );
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--editorial-primary)]">
      {label}
    </span>
  );
}

function StudioProjectCard({ project }: { project: XoxodevsProject }) {
  const isExternal = project.action.external;

  return (
    <article className="group relative border-t border-[rgba(119,117,134,0.12)] pt-6 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.09),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            {project.index}
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h3 className="font-hanken text-xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)] md:text-2xl">
              {project.title}
            </h3>
            <span className="rounded-full bg-[rgba(94,92,230,0.07)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--editorial-primary)]">
              {project.category}
            </span>
          </div>
        </div>
        {project.live ? (
          <span className="mt-1 flex h-2 w-2 shrink-0 items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-[var(--editorial-primary)] shadow-[0_0_0_3px_rgba(94,92,230,0.15)]" />
          </span>
        ) : null}
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--editorial-muted)] md:text-base">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-5 border-t border-[rgba(119,117,134,0.08)] pt-4">
        {isExternal ? (
          <a
            href={project.action.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-foreground)] transition-colors duration-200 hover:text-[var(--editorial-primary)]"
          >
            {project.action.label}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            {project.action.label}
          </span>
        )}
      </div>
    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function XoxodevsPage() {
  return (
    <PageScaffold active="xoxodevs">
      <main className="pb-8 pt-28 md:pt-32">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <SectionReveal className="section-shell section-block relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-[rgba(94,92,230,0.1)] blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-20 h-48 w-48 rounded-full bg-[rgba(154,146,255,0.1)] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
                xoxodevs
              </p>
              <h1 className="mt-5 font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
                A small software studio for{" "}
                <span className="font-normal italic text-[var(--editorial-primary)]">
                  practical products
                </span>
                , clean systems, and founder-led execution.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                xoxodevs is my startup-focused space for building useful software
                products, client solutions, MVPs, and digital systems with a
                strong focus on clarity, design, and real-world execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-button-primary"
                >
                  Visit xoxodevs
                </a>
                <a
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-button-secondary"
                >
                  View GitHub Organization
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="editorial-panel-strong border-l-2 border-l-[var(--editorial-primary)] p-7 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                  Studio Focus
                </p>
                <ul className="mt-6 space-y-4">
                  {studioFocusItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--editorial-primary)]" />
                      <span className="text-base leading-7 text-[var(--editorial-foreground)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </SectionReveal>

        {/* ── Why xoxodevs exists ──────────────────────────────────────── */}
        <SectionReveal className="section-shell section-block" delay={0.05}>
          <SectionMarker index="01" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Turning ideas into working software.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              xoxodevs was created as a space to turn ideas into practical
              software. The focus is on small but meaningful systems: MVPs,
              websites, dashboards, internal tools, AI-assisted products, and
              digital platforms that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map(({ index, title, description }) => (
              <article
                key={title}
                className="editorial-panel group flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-primary)]">
                  {index}
                </span>
                <h3 className="mt-5 font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>

        {/* ── What xoxodevs builds ─────────────────────────────────────── */}
        <SectionReveal className="section-shell section-block" delay={0.1}>
          <SectionMarker index="02" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Focused services for early ideas and practical systems.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              The work is shaped around the project goal, the users, and the
              right technical foundation — not around one fixed template or
              stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, tags, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-xl border border-[rgba(119,117,134,0.12)] bg-white/40 p-6 transition-all duration-200 hover:border-[rgba(94,92,230,0.18)] hover:bg-white/65 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)] transition-colors duration-200 group-hover:bg-[rgba(94,92,230,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[rgba(119,117,134,0.08)] pt-4">
                  {tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>

        {/* ── Open work / GitHub org ───────────────────────────────────── */}
        <SectionReveal
          className="section-shell section-block"
          delay={0.15}
        >
          <SectionMarker index="03" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              A public space for xoxodevs code and experiments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              The xoxodevs GitHub organization is where software experiments,
              starter projects, internal tools, and future product work can live
              as the studio grows.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-[var(--editorial-foreground)]">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-hanken text-2xl font-semibold tracking-[-0.04em] text-white">
                    xoxodevs GitHub Organization
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-7 text-white/62">
                    A central place for repositories, experiments, templates, and
                    product work connected to xoxodevs.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
                {githubMetadata.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-t border-white/10 pt-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--editorial-primary)]" />
                    <span className="text-sm leading-6 text-white/62">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-[var(--editorial-foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                >
                  Open GitHub Organization
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── Projects through xoxodevs ────────────────────────────────── */}
        <SectionReveal className="section-shell section-block" delay={0.2}>
          <SectionMarker index="04" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Work that can grow under the xoxodevs brand.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              This section is reserved for products, client systems, experiments,
              and case studies built through xoxodevs. The studio is still early,
              so this space will grow over time.
            </p>
          </div>

          <div className="space-y-8">
            {xoxodevsProjects.map((project) => (
              <StudioProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionReveal>

        {/* ── Building philosophy ──────────────────────────────────────── */}
        <SectionReveal
          className="section-shell section-block relative"
          delay={0.25}
        >
          <div className="pointer-events-none absolute inset-x-10 top-16 h-40 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.09),transparent_68%)] blur-3xl" />
          <SectionMarker index="05" />

          <div className="relative mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              How I want xoxodevs to build.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              Every solution should be shaped around the project goal, not a
              fixed template. The focus is to understand before building, choose
              the right tools, and create software that can grow over time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(({ title, description }) => (
              <div key={title} className="border-t border-[rgba(119,117,134,0.2)] pt-6">
                <h3 className="font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <SectionReveal
          className="bg-[var(--editorial-foreground)] py-20 md:py-28"
          delay={0.3}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-3xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              A founder-led space for building useful software.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              xoxodevs is where I turn product ideas, client needs, and practical
              system thinking into working digital solutions.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-52 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--editorial-foreground)] shadow-[0_10px_24px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Visit xoxodevs
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/connect"
                className="inline-flex min-w-52 items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </SectionReveal>

      </main>
    </PageScaffold>
  );
}
