import {
  ArrowUpRight,
  BrainCircuit,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  Play,
  Shield,
  Wrench,
} from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";

// â"€â"€ Data â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const identityItems = [
  "Practical technology education",
  "Sinhala-friendly explanations",
  "Project-based learning",
  "AI, full-stack, and software foundations",
  "Built for beginners and early builders",
] as const;

const principleCards = [
  {
    title: "Clear explanations",
    description:
      "Break complex topics into simple, understandable steps without losing the real technical meaning.",
    icon: Lightbulb,
  },
  {
    title: "Practical learning",
    description:
      "Help students build working systems instead of only memorizing definitions.",
    icon: Wrench,
  },
  {
    title: "Confidence first",
    description:
      "Support beginners so they feel capable of learning software, AI, and modern technology.",
    icon: Shield,
  },
] as const;

const roleCards = [
  {
    index: "01",
    title: "Lesson Design",
    description:
      "Turning technical topics into simple, structured learning paths.",
  },
  {
    index: "02",
    title: "Practical Teaching",
    description:
      "Helping students understand concepts by building real examples and small systems.",
  },
  {
    index: "03",
    title: "AI + Software Education",
    description:
      "Creating content around web development, AI tools, APIs, full-stack apps, and modern development workflows.",
  },
  {
    index: "04",
    title: "Student Support",
    description:
      "Explaining technical topics in a way that feels approachable, especially for beginners.",
  },
] as const;

const learningAreas = [
  {
    badge: "Curriculum",
    title: "Full-Stack Development",
    description:
      "Frontend, backend, APIs, databases, deployment, and project structure.",
    tags: ["React", "Node.js", "APIs", "Databases"],
    icon: Layers,
  },
  {
    badge: "Specialization",
    title: "AI / ML Foundations",
    description:
      "Beginner-friendly explanations of AI, ML, models, datasets, and real use cases.",
    tags: ["LLMs", "Python", "Prompting", "Use Cases"],
    icon: BrainCircuit,
  },
  {
    badge: "Career",
    title: "Software Engineering for Interns",
    description:
      "Git, debugging, CORS, deployment, APIs, environment variables, and real workplace basics.",
    tags: ["Git", "Debugging", "APIs", "Deployment"],
    icon: GitBranch,
  },
  {
    badge: "Local",
    title: "Sinhala Tech Education",
    description:
      "Simple Sinhala explanations for students who want technology content in a more accessible language.",
    tags: ["Sinhala", "Teaching", "Mentorship", "Video Content"],
    icon: Globe,
  },
] as const;

const freeSessions = [
  {
    id: "Ak0slj9ZMYs",
    title: "Python FastAPI Backend Tutorial",
    subtitle: "Connect ML Model with Pickle File — සිංහලෙන්",
    description:
      "Build a FastAPI backend from scratch and connect it to a trained machine learning model using pickle files. Explained step by step in Sinhala.",
    url: "https://youtu.be/Ak0slj9ZMYs",
  },
  {
    id: "av_XP2UIEmA",
    title: "React JS Frontend Tutorial",
    subtitle: "Connect FastAPI Backend & Deploy to Cloud — සිංහලෙන්",
    description:
      "Build a React frontend, connect it to a FastAPI backend, and deploy the full-stack application to the cloud. Explained in Sinhala.",
    url: "https://youtu.be/av_XP2UIEmA",
  },
  {
    id: "Jnl-SbFe_BU",
    title: "GitHub & LinkedIn Workshop",
    subtitle: "Foundry Academy Workshop",
    description:
      "A practical workshop on using GitHub for version control and building your developer profile on LinkedIn for professional visibility.",
    url: "https://youtu.be/Jnl-SbFe_BU",
  },
] as const;

const directionSteps = [
  {
    step: "STEP 01",
    title: "Backend Foundations",
    description:
      "FastAPI, endpoints, JSON, CORS, environment variables, and API thinking.",
    status: "Active focus",
    dark: true,
  },
  {
    step: "STEP 02",
    title: "Frontend Integration",
    description:
      "React, forms, API calls, state handling, and user interface structure.",
    status: "Upcoming phase",
    dark: false,
  },
  {
    step: "STEP 03",
    title: "Deployment Awareness",
    description:
      "Helping students understand how a project moves from local development to a live system.",
    status: "Future roadmap",
    dark: false,
  },
] as const;

// â"€â"€ Sub-components â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

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

function VideoRow({ session }: { session: (typeof freeSessions)[number] }) {
  return (
    <article className="group border-b border-[rgba(119,117,134,0.12)] py-8 transition-colors duration-200 hover:border-[rgba(94,92,230,0.18)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
        <a
          href={session.url}
          target="_blank"
          rel="noreferrer"
          className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:w-44"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${session.id}/hqdefault.jpg`}
            alt={session.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
              <Play className="h-4 w-4 translate-x-0.5 text-[var(--editorial-foreground)]" />
            </div>
          </div>
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
            <a
              href={session.url}
              target="_blank"
              rel="noreferrer"
              className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-colors duration-200 group-hover:text-[var(--editorial-primary)]"
            >
              {session.title}
            </a>
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
              {session.subtitle}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--editorial-muted)]">
            {session.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-row items-center sm:flex-col sm:items-end">
          <a
            href={session.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)] transition-colors duration-200 hover:text-[var(--editorial-primary)]"
          >
            Watch on YouTube
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

// â"€â"€ Page â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

export function FoundryPage() {
  return (
    <PageScaffold active="Foundry">
      <main className="pb-8 pt-10 md:pt-14">
        {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <SectionReveal className="section-shell section-block relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-[rgba(94,92,230,0.1)] blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-20 h-48 w-48 rounded-full bg-[rgba(154,146,255,0.1)] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
                Foundry Academy
              </p>
              <h1 className="mt-5 font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
                Creating a{" "}
                <span className="font-normal italic text-[var(--editorial-primary)]">
                  learning space
                </span>{" "}
                for students who want to enter technology with confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                Foundry Academy is where I explore teaching, mentoring, and
                practical learning experiences around software development, AI,
                full-stack systems, and beginner-friendly technology education.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="editorial-panel-strong border-l-2 border-l-[var(--editorial-primary)] p-7 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                  Academy Identity
                </p>
                <ul className="mt-6 space-y-4">
                  {identityItems.map((item) => (
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

        {/* â"€â"€ Why it exists â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <SectionReveal className="section-shell section-block" delay={0.05}>
          <SectionMarker index="01" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Technology becomes easier when it is taught clearly.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              Foundry Academy is built around one simple idea: students learn
              better when complex technology is explained clearly, practically,
              and step by step. The focus is not only on theory, but on helping
              learners understand how real systems are built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principleCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="editorial-panel group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)] transition-colors duration-300 group-hover:bg-[rgba(94,92,230,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>

        {/* â"€â"€ My role â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <SectionReveal className="section-shell section-block" delay={0.1}>
          <SectionMarker index="02" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Designing lessons, systems, and learning experiences.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              I contribute to Foundry Academy through lesson planning,
              beginner-friendly explanations, project-based teaching, and
              technical content design. My goal is to help students move from
              confusion to confidence by showing how concepts work in real
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {roleCards.map(({ index, title, description }) => (
              <div
                key={title}
                className="group rounded-xl border border-[rgba(119,117,134,0.12)] bg-white/40 p-6 transition-all duration-200 hover:border-[rgba(94,92,230,0.18)] hover:bg-white/65 md:p-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(94,92,230,0.45)] transition-colors duration-200 group-hover:text-[var(--editorial-primary)]">
                  {index}
                </span>
                <h3 className="mt-4 font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* â"€â"€ Learning areas â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <SectionReveal
          className="section-shell section-block relative"
          delay={0.15}
        >
          <div className="pointer-events-none absolute inset-x-10 top-16 h-40 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.10),transparent_68%)] blur-3xl" />
          <SectionMarker index="03" />

          <div className="relative mb-10">
            <h2 className="max-w-2xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              The subjects Foundry Academy can grow around.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {learningAreas.map(
              ({ badge, title, description, tags, icon: Icon }) => (
                <article
                  key={title}
                  className="editorial-panel group flex flex-col p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)] transition-colors duration-300 group-hover:bg-[rgba(94,92,230,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[rgba(94,92,230,0.07)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
                      {badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)]">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-[var(--editorial-muted)]">
                    {description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[rgba(119,117,134,0.1)] pt-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--editorial-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </SectionReveal>

        {/* â"€â"€ Recent direction â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <SectionReveal className="section-shell section-block" delay={0.2}>
          <SectionMarker index="04" />

          <div className="mb-10">
            <h2 className="max-w-2xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              From concepts to complete working systems.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              One of the learning directions is practical full-stack teaching,
              where students move from backend APIs to frontend interfaces and
              finally understand how a complete system works.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[rgba(119,117,134,0.12)] overflow-hidden rounded-xl border border-[rgba(119,117,134,0.12)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {directionSteps.map(
              ({ step, title, description, status, dark }) => (
                <div
                  key={step}
                  className={`flex flex-col p-8 md:p-10 ${
                    dark ? "bg-[var(--editorial-foreground)]" : "bg-white/40"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                      dark
                        ? "text-white/50"
                        : "text-[var(--editorial-muted-soft)]"
                    }`}
                  >
                    {step}
                  </span>
                  <h3
                    className={`mt-5 font-hanken text-2xl font-semibold tracking-[-0.04em] ${
                      dark ? "text-white" : "text-[var(--editorial-foreground)]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-base leading-7 ${
                      dark ? "text-white/65" : "text-[var(--editorial-muted)]"
                    }`}
                  >
                    {description}
                  </p>
                  <div
                    className={`mt-8 flex items-center gap-3 border-t pt-6 ${
                      dark
                        ? "border-white/12"
                        : "border-[rgba(119,117,134,0.12)]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        dark
                          ? "bg-[var(--editorial-primary)] shadow-[0_0_0_3px_rgba(94,92,230,0.22)]"
                          : "bg-[rgba(119,117,134,0.35)]"
                      }`}
                    />
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                        dark
                          ? "text-[rgba(180,178,255,0.85)]"
                          : "text-[var(--editorial-muted-soft)]"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </SectionReveal>

        {/* Free Sessions */}
        <SectionReveal className="section-shell section-block" delay={0.22}>
          <SectionMarker index="05" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Free sessions on YouTube.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              A selection of free lessons conducted by me for Foundry Academy.
              practical, beginner-friendly, and explained in Sinhala.
            </p>
          </div>

          <div className="border-t border-[rgba(119,117,134,0.12)]">
            {freeSessions.map((session) => (
              <VideoRow key={session.id} session={session} />
            ))}
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal
          className="bg-[var(--editorial-foreground)] py-20 md:py-28"
          delay={0.25}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-3xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              For students and early builders.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Foundry Academy is for learners who want to understand technology
              deeply, build real projects, and grow with a practical mindset.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.foundryacademy.lk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-52 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--editorial-foreground)] shadow-[0_10px_24px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Explore Foundry Academy
              </a>
            </div>
          </div>
        </SectionReveal>
      </main>
    </PageScaffold>
  );
}
