import Link from "next/link";
import { ArrowUpRight, Database, Lightbulb, Rocket, Sparkles } from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";

// â”€â”€ Types & Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  detail?: string;
  technologies: readonly string[];
  type: "featured" | "learning";
  links: readonly ProjectLink[];
};

const projects: readonly Project[] = [
  {
    index: "01",
    title: "HotelzaAI",
    category: "AI-Driven Hotel Booking Platform",
    description:
      "A MERN-based hotel booking platform with AI-powered search, secure payments, chatbot support, user and admin workflows, and automated operational features.",
    detail:
      "This project helped me practice how a real product connects frontend experience, backend APIs, authentication, payments, database design, AI search, chatbot support, and deployment into one working system.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Stripe",
      "OpenAI API",
      "LangChain",
      "MongoDB Atlas Vector Search",
      "GPT API",
      "Node-cache",
      "Nodemailer",
      "Node-cron",
      "Netlify",
      "Render",
      "UptimeRobot",
    ],
    type: "featured",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Source", href: "#" },
    ],
  },
  {
    index: "02",
    title: "Imagify",
    category: "Text-to-Image Generator SaaS",
    description:
      "A MERN-based AI SaaS platform that generates images from text prompts using the Clipdrop API, with authentication, credits, payments, and persistent user data.",
    detail:
      "This project helped me understand how AI APIs can be packaged into a product-like experience instead of only being used as simple API calls.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Clipdrop API",
      "Online Payment Gateway",
    ],
    type: "featured",
    links: [{ label: "View Project", href: "#" }],
  },
  {
    index: "03",
    title: "Cocogo",
    category: "Freelancer-Style Mobile App Concept",
    description:
      "A mobile app concept for connecting people who need coconut harvesting work with nearby available workers.",
    detail:
      "Cocogo explores how local real-world service problems can be supported through digital platforms and better user flow design.",
    technologies: [
      "Figma",
      "Mobile App Concept",
      "UX Planning",
      "Product Design",
      "Local Services",
    ],
    type: "featured",
    links: [{ label: "View Case Study", href: "#" }],
  },
  {
    index: "04",
    title: "Foodapp â€” Recipe App",
    category: "React API Integration Project",
    description:
      "A React application built to practice API integration, dynamic search, recipe browsing, and state management using the Spoonacular API.",
    technologies: [
      "React",
      "CSS",
      "Spoonacular API",
      "API Integration",
      "State Management",
    ],
    type: "learning",
    links: [{ label: "View Project", href: "#" }],
  },
  {
    index: "05",
    title: "MD Portfolio Website",
    category: "Frontend Portfolio Experiment",
    description:
      "An earlier React portfolio website built with Framer Motion to practice portfolio structure, motion, responsive layout, and personal branding.",
    technologies: [
      "React",
      "Framer Motion",
      "Frontend Design",
      "Responsive UI",
      "Portfolio",
    ],
    type: "learning",
    links: [{ label: "View Project", href: "#" }],
  },
];

const featuredProjects = projects.filter((p) => p.type === "featured");
const learningProjects = projects.filter((p) => p.type === "learning");

const summaryItems = [
  "Full-stack systems",
  "AI integrations",
  "SaaS experiments",
  "Product thinking",
  "Deployment practice",
] as const;

const buildPrinciples = [
  {
    title: "Product Thinking",
    description:
      "Starting from the problem, user flow, and real purpose before choosing the technology.",
    icon: Lightbulb,
  },
  {
    title: "Frontend Polish",
    description:
      "Creating interfaces with clear hierarchy, spacing, responsiveness, and intentional interaction.",
    icon: Sparkles,
  },
  {
    title: "Backend Structure",
    description:
      "Designing APIs, authentication, database models, and service logic that support the product.",
    icon: Database,
  },
  {
    title: "Deployment & Reliability",
    description:
      "Taking projects beyond localhost through deployment, monitoring, environment configuration, and production awareness.",
    icon: Rocket,
  },
] as const;

// â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative border-t border-[rgba(119,117,134,0.12)] pt-8 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.1),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            {project.index}
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h3 className="font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              {project.title}
            </h3>
            <span className="rounded-full bg-[rgba(94,92,230,0.07)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--editorial-primary)]">
              {project.category}
            </span>
          </div>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--editorial-muted)] transition-colors duration-300 group-hover:text-[var(--editorial-primary)]" />
      </div>

      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--editorial-muted)] md:text-lg">
        {project.description}
      </p>

      {project.detail ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--editorial-muted-soft)]">
          {project.detail}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-[rgba(119,117,134,0.08)] pt-5">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-foreground)] transition-colors duration-200 hover:text-[var(--editorial-primary)]"
          >
            {link.label}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ))}
      </div>
    </article>
  );
}

function LearningProjectRow({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col gap-4 border-b border-[rgba(119,117,134,0.12)] py-6 transition-colors duration-200 hover:border-[rgba(94,92,230,0.18)] sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-4">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            {project.index}
          </span>
          <h3 className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
            {project.title}
          </h3>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--editorial-muted)]">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-row items-center gap-5 sm:flex-col sm:items-end sm:gap-3">
        <span className="rounded-full bg-[rgba(94,92,230,0.06)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
          {project.category}
        </span>
        <div className="flex flex-wrap gap-4 sm:flex-col sm:items-end sm:gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)] transition-colors duration-200 hover:text-[var(--editorial-primary)]"
            >
              {link.label}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function ProjectsPage() {
  return (
    <PageScaffold active="Projects">
      <main className="pb-8 pt-10 md:pt-14">

        {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal className="section-shell section-block relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-[rgba(94,92,230,0.09)] blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-24 h-48 w-48 rounded-full bg-[rgba(154,146,255,0.09)] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
                Selected work
              </p>
              <h1 className="mt-5 font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
                Projects that connect frontend polish, backend logic, and{" "}
                <span className="font-normal italic text-[var(--editorial-primary)]">
                  AI-aware
                </span>{" "}
                product thinking.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
                A collection of practical builds, experiments, and product ideas
                that helped me grow across full-stack development, AI
                integration, databases, deployment, and user experience.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="editorial-panel-strong border-l-2 border-l-[var(--editorial-primary)] p-7 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                  Project Focus
                </p>
                <ul className="mt-6 space-y-4">
                  {summaryItems.map((item) => (
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

        {/* â”€â”€ Featured Builds â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal className="section-shell section-block" delay={0.05}>
          <SectionMarker index="01" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Selected systems and product experiments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              Projects that best represent how I think, build, test, and connect
              ideas into working software.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionReveal>

        {/* â”€â”€ Learning Builds â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal className="section-shell section-block" delay={0.1}>
          <SectionMarker index="02" />

          <div className="mb-10">
            <h2 className="max-w-3xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              Smaller builds that strengthened the fundamentals.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              Not every project needs to be large. Some builds exist to sharpen
              a specific skill, test an idea, or practice one part of the
              software workflow.
            </p>
          </div>

          <div className="divide-y divide-[rgba(119,117,134,0.08)] border-t border-[rgba(119,117,134,0.12)]">
            {learningProjects.map((project) => (
              <LearningProjectRow key={project.title} project={project} />
            ))}
          </div>
        </SectionReveal>

        {/* â”€â”€ How I Build â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal
          className="section-shell section-block relative"
          delay={0.15}
        >
          <div className="pointer-events-none absolute inset-x-10 top-16 h-40 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.09),transparent_68%)] blur-3xl" />
          <SectionMarker index="03" />

          <div className="relative mb-10">
            <h2 className="max-w-2xl font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
              The pattern behind the projects.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {buildPrinciples.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-xl border border-[rgba(119,117,134,0.12)] bg-white/40 p-6 transition-all duration-200 hover:border-[rgba(94,92,230,0.18)] hover:bg-white/65 md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)] transition-colors duration-200 group-hover:bg-[rgba(94,92,230,0.12)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-5 font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal
          className="bg-[var(--editorial-foreground)] py-20 md:py-28"
          delay={0.2}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-3xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              Projects are where learning becomes visible.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Each build helped me understand a different part of software
              engineering, from interface design to AI integration and
              deployment.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/education"
                className="inline-flex min-w-52 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--editorial-foreground)] shadow-[0_10px_24px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Explore my background
              </Link>
              <Link
                href="/connect"
                className="inline-flex min-w-52 items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </SectionReveal>

      </main>
    </PageScaffold>
  );
}


