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

import { ContactForm } from "@/components/site/ContactForm";
import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionReveal } from "@/components/site/SectionReveal";

const ventures = [
  {
    role: "Co-Founder",
    venture: "Foundry Academy",
    href: "https://foundryacademy.lk",
    description:
      "Designing a structured path for developers who want to close the gap between studying and actually shipping software.",
  },
  {
    role: "Founder",
    venture: "xoxodevs",
    href: "https://xoxodevs.vercel.app/",
    description:
      "A startup building developer-first tools and products — moving fast while staying close to what genuinely matters.",
  },
] as const;

const tickerItems = [
  "software builder",
  "new era engineering",
  "AI-aware systems",
  "product thinking",
  "frontend polish",
  "backend architecture",
] as const;

type PathwayCard = {
  index: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  accent: "soft" | "dark" | "primary" | "wide";
  wide?: boolean;
  platforms?: readonly string[];
  topics?: readonly string[];
  sideLabel?: string;
};

const pathwayCards: readonly PathwayCard[] = [
  {
    index: "01",
    title: "Projects",
    description:
      "Selected builds, case studies, and the software work that best represents how I think and execute.",
    href: "/projects",
    badge: "Selected work",
    accent: "soft",
  },
  {
    index: "02",
    title: "Education",
    description:
      "The academic journey, learning milestones, and technical foundations behind the builder.",
    href: "/education",
    badge: "Background",
    accent: "soft",
  },
  {
    index: "03",
    title: "Foundry Academy",
    description:
      "A dedicated page for vision, execution, and the work of building Foundry Academy over time.",
    href: "/foundry",
    badge: "Venture",
    accent: "dark",
  },
  {
    index: "04",
    title: "xoxodevs",
    description:
      "A focused page for the startup story, what we are building, and the direction behind xoxodevs.",
    href: "/xoxodevs",
    badge: "Startup",
    accent: "primary",
  },
  {
    index: "05",
    title: "Connect",
    description:
      "A curated surface for social presence, public profiles, and the platforms where I share work, ideas, and updates.",
    href: "/connect",
    badge: "Presence",
    accent: "wide",
    wide: true,
    sideLabel: "Digital presence",
    platforms: ["LinkedIn", "GitHub", "Instagram", "Email"],
  },
  {
    index: "06",
    title: "Blogs",
    description:
      "Technical articles on Medium and free YouTube sessions — writing and teaching on machine learning, software engineering, and the systems I build.",
    href: "/blogs",
    badge: "Writing",
    accent: "wide",
    wide: true,
    sideLabel: "Topics covered",
    topics: ["Machine Learning", "Software Engineering", "YouTube Sessions", "Technical Writing"],
  },
];

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

function PathwayLink({ index, title, description, href, badge }: PathwayCard) {
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
      className={`${toneClass} group relative overflow-hidden rounded-xl border p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7`}
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
  const widePathways = pathwayCards.filter((card) => card.wide);

  return (
    <PageScaffold active="Home">
      <main className="pb-20 pt-2 md:pt-4">
        <SectionReveal className="section-shell section-block pt-8 md:pt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
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
                I design and build modern software experiences with a focus on
                clean interfaces, reliable systems, AI-enabled workflows, and
                real-world product execution.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/projects"
                  className="editorial-button-primary w-full sm:w-auto"
                >
                  View selected work
                </Link>
                <Link
                  href="/education"
                  className="editorial-button-secondary w-full sm:w-auto"
                >
                  Explore background
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-center">
              <div className="mx-auto w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[30rem]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
                  <Image
                    src="/methmal.png"
                    alt="Illustrated portrait of Methmal Deshapriya"
                    fill
                    priority
                    className="object-cover object-center lg:hidden"
                    sizes="(min-width: 768px) 24rem, 18rem"
                  />
                  <Image
                    src="/hero.png"
                    alt="Illustrated hero portrait"
                    fill
                    priority
                    className="hidden object-cover object-center lg:block"
                    sizes="30rem"
                  />
                </div>
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
                <div className="rounded-lg border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted-soft)]">
                    Location
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--editorial-foreground)]">
                    Sri Lanka - open to meaningful collaboration, software work,
                    and ambitious digital products.
                  </p>
                </div>
                <div className="rounded-lg border border-[rgba(119,117,134,0.12)] bg-white/60 p-5">
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
            title="A focused look at the projects, lessons, ideas, and ventures I’m building."
            description="Bringing together my work in software engineering, AI-powered projects, teaching, Foundry Academy, and technical writing.
"
          />

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {primaryPathways.map((card) => (
              <PathwayLink key={card.title} {...card} />
            ))}
          </div>

          {widePathways.map((pathway, i) => (
            <Link
              key={pathway.title}
              href={pathway.href}
              className={`group block border-b border-[rgba(119,117,134,0.12)] py-8 transition-transform duration-300 hover:-translate-y-0.5 ${i === 0 ? "mt-12 border-t" : ""}`}
            >
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr] md:items-end">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                        {pathway.index}
                      </p>
                      <h3 className="mt-3 font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)] md:text-[1.9rem]">
                        {pathway.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                    {pathway.description}
                  </p>
                </div>

                <div className="md:justify-self-end">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                    {pathway.sideLabel}
                  </p>
                  <div className="mt-4 flex max-w-md flex-wrap gap-2.5">
                    {(pathway.platforms ?? pathway.topics)?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(255,255,255,0.68)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
                      {pathway.badge}
                    </span>
                    <span className="h-px flex-1 bg-[rgba(94,92,230,0.14)]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
            <div className="rounded-xl bg-[var(--editorial-foreground)] p-8 text-white md:p-10 lg:col-span-8">
              {/* Primary role — shown at the top as the main identity */}
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
                    Current role
                  </p>
                  <h3 className="mt-3 font-hanken text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    Software Engineer
                  </h3>
                  <p className="mt-1.5 font-hanken text-xl tracking-[-0.02em] text-white/55 md:text-2xl">
                    Olee AI
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[rgba(94,92,230,0.2)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary-soft)]">
                  Active
                </span>
              </div>

              {/* Ventures — concurrent, beneath the primary role */}
              <div className="border-t border-white/10 pt-8">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Also building
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                    2 concurrent
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {ventures.map((item) => (
                    <div key={item.venture}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
                        {item.role}
                      </p>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2.5 block font-hanken text-xl font-semibold tracking-[-0.03em] transition-opacity hover:opacity-70 md:text-2xl"
                      >
                        {item.venture}
                      </Link>
                      <p className="mt-2.5 text-sm leading-7 text-white/52">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="editorial-panel flex flex-col justify-between lg:col-span-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[rgba(119,117,134,0.8)]">
                  Focus areas
                </p>
                <h3 className="mt-5 font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)]">
                  Product engineering paired with{" "}
                  <span className="text-[var(--editorial-primary)]">
                    founder
                  </span>{" "}
                  thinking.
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--editorial-muted)]">
                  From backend foundations to polished interfaces — building
                  software that holds up and ventures that ship.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <SurfaceTag>Full-stack</SurfaceTag>
                <SurfaceTag>AI-aware</SurfaceTag>
                <SurfaceTag>Systems</SurfaceTag>
                <SurfaceTag>Product</SurfaceTag>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="section-shell pb-6">
          <div className="border-t border-[rgba(119,117,134,0.12)] pt-12 md:pt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left — heading + contact details */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                  Get in touch
                </p>
                <h2 className="mt-4 font-hanken text-4xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-5xl">
                  Let&apos;s start a<br />
                  conversation.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-8 text-[var(--editorial-muted)]">
                  Whether it&apos;s a project, a role, or just something
                  interesting — reach out and I&apos;ll get back to you.
                </p>

                <div className="mt-8 space-y-3 border-t border-[rgba(119,117,134,0.1)] pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                    Direct email
                  </p>
                  <a
                    href="mailto:methmaldeshapriya2002@gmail.com"
                    className="block text-sm text-[var(--editorial-foreground)] underline-offset-4 transition-colors hover:text-[var(--editorial-primary)] hover:underline"
                  >
                    methmaldeshapriya2002@gmail.com
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </SectionReveal>
      </main>
    </PageScaffold>
  );
}
