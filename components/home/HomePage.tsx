import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
    title: "Product Engineering",
    description:
      "Shipping software with a strong product sense, clear technical structure, and a polished user-facing experience.",
    points: ["Full stack", "Execution", "Product taste"],
    icon: Layers3,
  },
  {
    title: "Backend Architecture",
    description:
      "Designing the foundations behind APIs, data flow, and systems that need to stay reliable as they grow.",
    points: ["System design", "APIs", "Reliability"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Frontend Engineering",
    description:
      "Crafting interfaces that feel intentional in spacing, interaction, hierarchy, and performance.",
    points: ["Next.js", "UI systems", "Performance"],
    icon: Sparkles,
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

function PathwayLink({
  index,
  title,
  description,
  href,
  badge,
}: (typeof pathwayCards)[number]) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col border-t border-[rgba(119,117,134,0.12)] pt-6 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.12),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
              {index}
            </p>
            <h3 className="mt-3 font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)] md:text-[1.9rem]">
              {title}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
        </div>

        <p className="mt-4 max-w-md text-base leading-7 text-[var(--editorial-muted)]">
          {description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-6 pt-8">
          <span className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
            {badge}
          </span>
          <div className="flex items-center gap-3">
            <span className="h-px w-14 bg-[rgba(94,92,230,0.14)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
              Open
            </span>
          </div>
        </div>
      </div>
    </Link>
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
    accent === "soft" ? "text-[var(--editorial-muted)]" : "text-white/72";

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
            accent === "soft" ? "bg-[rgba(94,92,230,0.12)]" : "bg-white/10"
          }`}
        />
        <div
          className={`absolute bottom-5 right-5 h-12 w-16 border-b border-r ${
            accent === "soft"
              ? "border-[rgba(94,92,230,0.12)]"
              : "border-white/10"
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
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.22em] ${mutedClass}`}
              >
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

        <p
          className={`mt-5 max-w-md text-sm leading-7 md:text-[15px] ${mutedClass}`}
        >
          {description}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={`h-px flex-1 ${
              accent === "soft" ? "bg-[rgba(94,92,230,0.14)]" : "bg-white/10"
            }`}
          />
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.22em] ${mutedClass}`}
          >
            Interested
          </span>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({
  title,
  description,
  points,
  icon,
  wide = false,
}: (typeof capabilityCards)[number] & { wide?: boolean }) {
  const Icon = icon;

  return (
    <article
      className={`${wide ? "md:col-span-2" : ""} flex h-full min-h-[300px] flex-col rounded-[26px] border border-[rgba(119,117,134,0.12)] bg-white/58 p-6 md:p-7`}
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] md:text-[1.45rem]">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-8 text-[var(--editorial-muted)]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="mb-5 h-px w-full bg-[rgba(94,92,230,0.12)]" />
        <ul
          className={`grid gap-3 ${
            wide
              ? "sm:grid-cols-3"
              : "sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
          }`}
        >
          {points.map((point) => (
            <li
              key={point}
              className="flex min-h-6 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(94,92,230,0.65)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function HomePage() {
  const primaryPathways = pathwayCards.filter((card) => !card.wide);
  const socialPathway = pathwayCards.find((card) => card.wide);

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

        <section className="mb-20 border-y border-[rgba(119,117,134,0.1)] bg-white/35 py-4 md:mb-28">
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
        </section>

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

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {primaryPathways.map((card) => (
              <PathwayLink key={card.title} {...card} />
            ))}
          </div>

          {socialPathway ? (
            <Link
              href={socialPathway.href}
              className="group mt-12 block border-y border-[rgba(119,117,134,0.12)] py-8"
            >
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr] md:items-end">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                        {socialPathway.index}
                      </p>
                      <h3 className="mt-3 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-5xl">
                        {socialPathway.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                    {socialPathway.description}
                  </p>
                </div>

                <div className="md:justify-self-end">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                    Digital presence
                  </p>
                  <div className="mt-4 flex max-w-md flex-wrap gap-2.5">
                    {socialPathway.platforms?.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(255,255,255,0.68)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
                      {socialPathway.badge}
                    </span>
                    <span className="h-px flex-1 bg-[rgba(94,92,230,0.14)]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ) : null}
        </SectionReveal>

        <SectionReveal className="section-shell section-block">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="What I do"
                title="Services and expertise."
                description="A cleaner expression of the capabilities behind the projects, roles, and future case studies."
              />
              <div className="mt-10 hidden overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/methmal.png"
                  alt="Methmal Deshapriya"
                  width={480}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-8 lg:col-span-8 md:grid-cols-2">
              {capabilityCards.map((card, index) => (
                <ServiceCard key={card.title} {...card} wide={index === 2} />
              ))}
            </div>
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
