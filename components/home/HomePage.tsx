import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
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
    index: "01",
    title: "Projects",
    description:
      "Selected builds, case studies, and the software work that best represents how I think and execute.",
    href: "/projects",
    badge: "Selected work",
    accent: "soft" as const,
  },
  {
    index: "02",
    title: "Education",
    description:
      "The academic journey, learning milestones, and technical foundations behind the builder.",
    href: "/education",
    badge: "Background",
    accent: "soft" as const,
  },
  {
    index: "03",
    title: "Foundry Academy",
    description:
      "A dedicated page for vision, execution, and the work of building Foundry Academy over time.",
    href: "/foundry",
    badge: "Venture",
    accent: "dark" as const,
  },
  {
    index: "04",
    title: "xoxodevs",
    description:
      "A focused page for the startup story, what we are building, and the direction behind xoxodevs.",
    href: "/xoxodevs",
    badge: "Startup",
    accent: "primary" as const,
  },
  {
    index: "05",
    title: "Social",
    description:
      "A curated surface for social presence, public profiles, and the platforms where I share work, ideas, and updates.",
    href: "/social",
    badge: "Presence",
    accent: "wide" as const,
    wide: true,
    platforms: ["LinkedIn", "GitHub", "Instagram", "Email"],
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

const interestCards = [
  {
    index: "01",
    title: "Full-Stack engineering",
    description:
      "Thoughtful product engineering, strong foundations, and software that stays reliable as it grows.",
    icon: Layers3,
    marker: "Product systems",
    accent: "soft" as const,
  },
  {
    index: "02",
    title: "DevOps & systems",
    description:
      "Deployment flow, infrastructure thinking, and the systems mindset behind dependable delivery.",
    icon: BriefcaseBusiness,
    marker: "Operational clarity",
    accent: "dark" as const,
  },
  {
    index: "03",
    title: "AI / ML",
    description:
      "Applied AI, practical experimentation, and building products that use intelligence in useful ways.",
    icon: BrainCircuit,
    marker: "Applied intelligence",
    accent: "primary" as const,
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
  index,
  title,
  description,
  href,
  badge,
  accent,
  wide,
  platforms,
}: (typeof pathwayCards)[number]) {
  const toneClass =
    accent === "dark"
      ? "bg-[linear-gradient(145deg,rgba(27,27,35,1),rgba(37,37,49,0.98))] text-white border-[rgba(255,255,255,0.06)]"
      : accent === "primary"
        ? "bg-[linear-gradient(145deg,rgba(94,92,230,0.96),rgba(123,112,255,0.92))] text-white border-[rgba(126,123,255,0.18)]"
        : accent === "wide"
          ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,240,255,0.98))] text-[var(--editorial-foreground)] border-[rgba(119,117,134,0.12)]"
          : "bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(248,246,255,0.98))] text-[var(--editorial-foreground)] border-[rgba(119,117,134,0.12)]";

  const mutedClass =
    accent === "soft" || accent === "wide"
      ? "text-[var(--editorial-muted)]"
      : "text-white/74";

  const badgeClass =
    accent === "soft" || accent === "wide"
      ? "border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.06)] text-[var(--editorial-primary)]"
      : "border-white/10 bg-white/8 text-white/76";

  const lineClass =
    accent === "soft" || accent === "wide"
      ? "bg-[rgba(94,92,230,0.14)]"
      : "bg-white/10";

  const frameClass =
    accent === "soft" || accent === "wide"
      ? "border-[rgba(119,117,134,0.12)] bg-[rgba(255,255,255,0.58)]"
      : "border-white/10 bg-white/5";

  const cornerClass =
    accent === "soft" || accent === "wide"
      ? "border-[rgba(94,92,230,0.22)]"
      : "border-white/14";

  return (
    <Link
      href={href}
      className={`${toneClass} ${wide ? "md:col-span-2" : ""} group relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[30px] border p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -right-10 top-0 h-28 w-28 rounded-full blur-3xl ${
            accent === "primary"
              ? "bg-white/12"
              : accent === "dark"
                ? "bg-[rgba(94,92,230,0.18)]"
                : "bg-[rgba(94,92,230,0.12)]"
          }`}
        />
        <div
          className={`absolute bottom-6 right-6 h-12 w-16 border-b border-r ${
            accent === "soft" || accent === "wide" ? cornerClass : "border-white/10"
          }`}
        />
        <div
          className={`absolute left-0 top-0 h-full w-1 ${
            accent === "primary"
              ? "bg-white/22"
              : accent === "dark"
                ? "bg-[rgba(94,92,230,0.55)]"
                : "bg-[rgba(94,92,230,0.65)]"
          }`}
        />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${mutedClass}`}>
              {index}
            </p>
            <h3 className="mt-3 font-hanken text-2xl font-semibold tracking-[-0.04em] md:text-[2rem]">
              {title}
            </h3>
          </div>
          <span
            className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        <p
          className={`mt-4 text-base leading-7 ${mutedClass} ${
            wide ? "max-w-3xl" : "max-w-md"
          }`}
        >
          {description}
        </p>

        <div className="mt-auto pt-8">
          {wide ? (
            <div className="grid gap-5 md:grid-cols-[1.35fr_0.9fr] md:items-end">
              <div
                className={`relative overflow-hidden rounded-[24px] border ${frameClass} px-5 py-5 md:px-6`}
              >
                <div className="absolute inset-0 dot-grid opacity-75" />
                <div className={`absolute left-6 top-0 h-12 w-16 border-l border-b ${cornerClass}`} />
                <div className={`absolute bottom-0 right-6 h-10 w-14 border-r border-t ${cornerClass}`} />

                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                    Digital presence
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {platforms?.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-[rgba(94,92,230,0.12)] bg-white/72 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between gap-6 md:justify-end">
                <div className="flex flex-col items-start gap-2">
                  <span className={`h-px w-16 ${lineClass}`} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
                    Profiles & updates
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
              </div>
            </div>
          ) : (
            <div className="flex items-end justify-between gap-6">
              <div
                className={`relative h-20 flex-1 overflow-hidden rounded-[22px] border ${frameClass}`}
              >
                <div className="absolute inset-0 dot-grid opacity-75" />
                <div className={`absolute bottom-0 left-5 h-10 w-14 border-r border-t ${cornerClass}`} />
                <div
                  className={`absolute right-5 top-5 h-6 w-10 border-b border-l ${
                    accent === "soft" || accent === "wide"
                      ? "border-[rgba(119,117,134,0.18)]"
                      : "border-white/12"
                  }`}
                />
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className={`h-px w-14 ${lineClass}`} />
                <ArrowUpRight
                  className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                    accent === "soft" || accent === "wide"
                      ? "text-[var(--editorial-muted)] group-hover:text-[var(--editorial-primary)]"
                      : "text-white/62 group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
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
    <article
      className={`${toneClass} flex min-h-[320px] flex-col rounded-[28px] p-8`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.24em] ${mutedText}`}
        >
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
          <span
            key={chip}
            className={`rounded-full px-3 py-1 text-xs ${chipClass}`}
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

function InterestCard({
  index,
  title,
  description,
  icon,
  marker,
  accent,
}: (typeof interestCards)[number]) {
  const Icon = icon;

  const toneClass =
    accent === "dark"
      ? "bg-[linear-gradient(145deg,rgba(27,27,35,1),rgba(38,38,52,0.96))] text-white border-[rgba(255,255,255,0.06)]"
      : accent === "primary"
        ? "bg-[linear-gradient(145deg,rgba(94,92,230,0.96),rgba(123,112,255,0.92))] text-white border-[rgba(126,123,255,0.18)]"
        : "bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(244,240,255,0.96))] text-[var(--editorial-foreground)] border-[rgba(119,117,134,0.12)]";

  const mutedClass =
    accent === "soft"
      ? "text-[var(--editorial-muted)]"
      : "text-white/72";

  const badgeClass =
    accent === "soft"
      ? "border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.06)] text-[var(--editorial-primary)]"
      : "border-white/10 bg-white/8 text-white/78";

  const iconShellClass =
    accent === "soft"
      ? "bg-[rgba(94,92,230,0.1)] text-[var(--editorial-primary)]"
      : "bg-white/10 text-white";

  return (
    <article
      className={`${toneClass} group relative overflow-hidden rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -right-10 top-0 h-28 w-28 rounded-full blur-3xl ${
            accent === "soft"
              ? "bg-[rgba(94,92,230,0.12)]"
              : "bg-white/10"
          }`}
        />
        <div
          className={`absolute bottom-5 right-5 h-12 w-16 border-b border-r ${
            accent === "soft" ? "border-[rgba(94,92,230,0.12)]" : "border-white/10"
          }`}
        />
        <div
          className={`absolute left-0 top-0 h-full w-1 ${
            accent === "primary"
              ? "bg-white/24"
              : accent === "dark"
                ? "bg-[rgba(94,92,230,0.5)]"
                : "bg-[rgba(94,92,230,0.65)]"
          }`}
        />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] ${iconShellClass}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${mutedClass}`}>
                {index}
              </p>
              <h3 className="mt-2 font-hanken text-2xl font-semibold tracking-[-0.04em]">
                {title}
              </h3>
            </div>
          </div>

          <span
            className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${badgeClass}`}
          >
            {marker}
          </span>
        </div>

        <p className={`mt-5 max-w-md text-sm leading-7 md:text-[15px] ${mutedClass}`}>
          {description}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={`h-px flex-1 ${
              accent === "soft" ? "bg-[rgba(94,92,230,0.14)]" : "bg-white/10"
            }`}
          />
          <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${mutedClass}`}>
            Interested
          </span>
        </div>
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
                of software engineering.
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
                    <span
                      key={`${groupIndex}-${item}`}
                      className="flex items-center gap-3"
                    >
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
                A software builder with engineering depth and founder energy.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                I&apos;m Methmal Deshapriya. I care about building software that
                feels polished on the surface and reliable underneath, with a
                strong respect for clarity, systems thinking, and thoughtful
                execution.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted-soft)]">
                    Location
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--editorial-foreground)]">
                    Sri Lanka - open to meaningful collaboration, software work,
                    and ambitious digital products.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted-soft)]">
                    Current focus
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--editorial-foreground)]">
                    Growing through product building, engineering practice, and
                    long-term systems thinking across software, infrastructure,
                    and intelligent products.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              {interestCards.map((item) => (
                <InterestCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <SectionHeading
            eyebrow="Explore further"
            title="Dedicated spaces for the work, ideas, and ventures behind the portfolio."
            description="A cleaner navigation widget for the parts of the portfolio that deserve their own focused pages."
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
                        index === 0
                          ? "bg-[var(--editorial-primary)]"
                          : "bg-white/35"
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
                  <span className="text-[var(--editorial-primary)]">AI</span>{" "}
                  and engineering discipline.
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
              description="The homepage is now cleaner and more balanced. The next layer is turning Projects, Education, Foundry Academy, xoxodevs, and Social into fully designed dedicated pages."
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
