"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionReveal } from "@/components/site/SectionReveal";

const roleItems = [
  "Software engineer intern at OleeAI LLC",
  "ceo of Foundry academy",
  "co-founder of xoxodevs",
] as const;

const tickerItems = [
  "software builder",
  "new era engineering",
  "AI-aware systems",
  "product thinking",
  "frontend polish",
  "backend architecture",
] as const;

const pathwayCards = [
  {
    title: "Projects",
    description:
      "A scalable work system for selected builds, case studies, and technical depth.",
    href: "/projects",
    badge: "Selected work",
  },
  {
    title: "Education",
    description:
      "A narrative page for academic growth, milestones, and the foundation behind the builder.",
    href: "/education",
    badge: "Background",
  },
  {
    title: "Foundry Academy",
    description:
      "A separate space for leadership, vision, execution, and the story of building Foundry.",
    href: "/foundry",
    badge: "Role page",
  },
  {
    title: "Blogs",
    description:
      "A reading-first editorial surface for engineering notes, reflections, and ideas.",
    href: "/blogs",
    badge: "Writing",
  },
] as const;

const capabilityCards = [
  {
    index: "01",
    title: "Product Engineering",
    description:
      "Shipping software with a strong product sense, clear technical structure, and a polished user-facing experience.",
    chips: ["Full stack", "Execution", "Product taste"],
    tone: "light" as const,
  },
  {
    index: "02",
    title: "Backend Architecture",
    description:
      "Designing the foundations behind APIs, data flow, and systems that need to stay reliable as they grow.",
    chips: ["System design", "APIs", "Reliability"],
    tone: "dark" as const,
  },
  {
    index: "03",
    title: "Frontend Engineering",
    description:
      "Crafting interfaces that feel intentional in spacing, interaction, hierarchy, and performance.",
    chips: ["Next.js", "UI systems", "Performance"],
    tone: "primary" as const,
  },
] as const;

const expertiseCards = [
  {
    icon: Layers3,
    title: "Systems thinking",
    description:
      "Thinking in structure, boundaries, resilience, and the tradeoffs behind scalable software.",
    points: [
      "service boundaries",
      "application architecture",
      "technical decision-making",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Applied AI",
    description:
      "Integrating AI into products in a way that still respects strong engineering fundamentals.",
    points: [
      "AI product integration",
      "workflow automation",
      "tooling for builders",
    ],
  },
] as const;

const pageCards = [
  {
    title: "Education page",
    description:
      "Academic story, achievements, and the learning path behind the engineering mindset.",
    href: "/education",
    icon: GraduationCap,
  },
  {
    title: "Foundry page",
    description:
      "A focused page about vision, leadership, and the operational side of building Foundry Academy.",
    href: "/foundry",
    icon: BriefcaseBusiness,
  },
  {
    title: "Blog page",
    description:
      "A clean reading surface for technical writing, experiments, and builder reflections.",
    href: "/blogs",
    icon: FileText,
  },
] as const;

function SurfaceTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full border border-[rgba(119,117,134,0.14)] bg-white/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted)]">
      {children}
    </span>
  );
}

function PathwayCard({
  title,
  description,
  href,
  badge,
}: (typeof pathwayCards)[number]) {
  return (
    <Link
      href={href}
      className="editorial-panel group flex h-full min-h-[260px] flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(94,92,230,0.22)] hover:shadow-[0_18px_42px_rgba(27,27,35,0.05)]"
    >
      <div>
        <SurfaceTag>{badge}</SurfaceTag>
        <h3 className="mt-5 font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)]">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-7 text-[var(--editorial-muted)]">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between gap-6">
        <div className="relative h-20 flex-1 overflow-hidden rounded-2xl border border-[rgba(119,117,134,0.12)] bg-[rgba(255,255,255,0.58)]">
          <div className="absolute inset-0 dot-grid opacity-75" />
          <div className="absolute bottom-0 left-5 h-10 w-14 border-r border-t border-[rgba(94,92,230,0.22)]" />
          <div className="absolute right-5 top-5 h-6 w-10 border-b border-l border-[rgba(119,117,134,0.18)]" />
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
      </div>
    </Link>
  );
}

function CapabilityCard({
  index,
  title,
  description,
  chips,
  tone,
}: (typeof capabilityCards)[number]) {
  const toneClass =
    tone === "dark"
      ? "bg-[var(--editorial-foreground)] text-white"
      : tone === "primary"
        ? "bg-[var(--editorial-primary)] text-white"
        : "editorial-panel text-[var(--editorial-foreground)]";

  const mutedText =
    tone === "light" ? "text-[var(--editorial-muted)]" : "text-white/75";

  const chipClass =
    tone === "light"
      ? "bg-[rgba(228,225,237,0.44)] text-[var(--editorial-muted)]"
      : "bg-white/10 text-white/80";

  return (
    <article className={`${toneClass} flex min-h-[320px] flex-col rounded-[28px] p-8`}>
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[11px] uppercase tracking-[0.24em] ${mutedText}`}>
          {index}
        </span>
        <ArrowRight className={`h-4 w-4 ${mutedText}`} />
      </div>

      <h3 className="mt-8 font-hanken text-3xl font-semibold leading-tight tracking-[-0.05em]">
        {title}
      </h3>
      <p className={`mt-4 text-base leading-7 ${mutedText}`}>{description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {chips.map((chip) => (
          <span key={chip} className={`rounded-full px-3 py-1 text-xs ${chipClass}`}>
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

export function HomePage() {
  return (
    <PageScaffold active="Home">
      <main className="pb-20 pt-6 md:pt-8">
        <SectionReveal className="section-shell section-block pt-10 md:pt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="editorial-panel inline-flex w-fit items-center gap-2 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[var(--editorial-primary)]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-muted)]">
                  Software builder
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl font-hanken text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[var(--editorial-foreground)] md:text-7xl">
                Crafting the <br className="hidden md:block" />
                <span className="font-light italic text-[var(--editorial-primary)]">
                  new era
                </span>{" "}
                of
                software engineering.
              </h1>

              <p className="mt-8 max-w-2xl border-l border-[rgba(119,117,134,0.22)] pl-6 text-lg leading-8 text-[var(--editorial-muted)]">
                A premium, multi-page portfolio centered on modern software
                systems, product-minded execution, and AI-aware engineering.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="editorial-button-primary">
                  View selected work
                </Link>
                <Link href="/education" className="editorial-button-secondary">
                  Explore background
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
                <Image
                  src="/hero.png"
                  alt="Illustrated hero portrait"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                />
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-20 border-y border-[rgba(119,117,134,0.1)] bg-white/35 py-4 md:mb-28">
          <div className="ticker-wrap">
            <div className="ticker-track font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-muted)]">
              {Array.from({ length: 3 }).map((_, groupIndex) => (
                <div key={groupIndex} className="ticker-group">
                  {tickerItems.map((item) => (
                    <span key={`${groupIndex}-${item}`} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgba(94,92,230,0.55)]" />
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="editorial-panel lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
                About
              </p>
              <h2 className="mt-4 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
                The person behind the code.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                I care about software engineering that stays reliable under real
                pressure. The goal is not just to build fast, but to build with
                clarity, structure, and thoughtful execution.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted-soft)]">
                    Location
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--editorial-foreground)]">
                    Sri Lanka - open for collaboration
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted-soft)]">
                    Portfolio approach
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--editorial-foreground)]">
                    Separate pages for depth, with the homepage acting as the calm entry point.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              {pageCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-[26px] border border-[rgba(119,117,134,0.12)] bg-white/62 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(94,92,230,0.2)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(94,92,230,0.09)] text-[var(--editorial-primary)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-medium text-[var(--editorial-foreground)]">
                            {item.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--editorial-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <SectionHeading
            eyebrow="Homepage pathways"
            title="A homepage that opens into deeper pages."
            description="The homepage now previews the portfolio system instead of trying to hold every story in one long landing page."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pathwayCards.map((card) => (
              <PathwayCard key={card.title} {...card} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <SectionHeading
            eyebrow="What I do"
            title="Services and expertise."
            description="A cleaner expression of the capabilities behind the projects, roles, and future case studies."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {capabilityCards.map((card) => (
              <CapabilityCard key={card.title} {...card} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <SectionHeading
            eyebrow="Experience"
            title="Roles and direction."
            description="The portfolio is primarily about software building, with leadership roles supporting that story rather than overpowering it."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="rounded-[30px] bg-[var(--editorial-foreground)] p-8 text-white md:p-10 lg:col-span-8">
              <div className="mb-10 flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Role timeline
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  3 current anchors
                </span>
              </div>

              <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8">
                {roleItems.map((role, index) => (
                  <div key={role} className="relative">
                    <span
                      className={`absolute -left-[28px] top-2.5 h-2.5 w-2.5 rounded-full ${
                        index === 0 ? "bg-[var(--editorial-primary)]" : "bg-white/35"
                      }`}
                    />
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-hanken text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                          {role}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                          {index === 0
                            ? "The main professional identity on the site right now."
                            : index === 1
                              ? "A dedicated page will carry the fuller founder and operator story."
                              : "A supporting role within the broader builder narrative."}
                        </p>
                      </div>
                      {index === 0 ? (
                        <span className="w-fit rounded-full bg-[rgba(94,92,230,0.2)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary-soft)]">
                          Current focus
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-panel flex flex-col justify-between lg:col-span-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[rgba(119,117,134,0.8)]">
                  Focus areas
                </p>
                <h3 className="mt-5 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)]">
                  Building the future with{" "}
                  <span className="text-[var(--editorial-primary)]">AI</span> and
                  engineering discipline.
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--editorial-muted)]">
                  Stronger systems, cleaner interfaces, and product work that
                  feels modern without becoming gimmicky.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <SurfaceTag>AI systems</SurfaceTag>
                <SurfaceTag>Architecture</SurfaceTag>
                <SurfaceTag>Product</SurfaceTag>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Core expertise"
                title="Foundations that scale beyond the landing page."
                description="The new portfolio should feel like the outer layer of a broader software-builder system."
              />
            </div>

            <div className="grid grid-cols-1 gap-8 lg:col-span-8 md:grid-cols-2">
              {expertiseCards.map((group) => {
                const Icon = group.icon;

                return (
                  <div
                    key={group.title}
                    className="rounded-[26px] border border-[rgba(119,117,134,0.12)] bg-white/58 p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[var(--editorial-primary)]" />
                      <h3 className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                        {group.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-8 text-[var(--editorial-muted)]">
                      {group.description}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {group.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(94,92,230,0.65)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell pb-6">
          <div className="editorial-panel-strong rounded-[32px] border border-[rgba(119,117,134,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,240,255,0.96))] px-6 py-10 md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Next step"
              title="Building a sharper multi-page portfolio system."
              description="The homepage is now cleaner and more balanced. The next layer is turning Education, Foundry, Projects, and Blogs into fully designed pages."
              action={
                <div className="hidden md:block">
                  <SurfaceTag>Homepage refined</SurfaceTag>
                </div>
              }
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/connect" className="editorial-button-primary">
                Start a conversation
              </Link>
              <Link href="/foundry" className="editorial-button-secondary">
                Explore Foundry Academy
              </Link>
            </div>
          </div>
        </SectionReveal>
      </main>
    </PageScaffold>
  );
}
