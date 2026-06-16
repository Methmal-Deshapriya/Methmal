import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: readonly string[];
  href: string;
};

const blogPosts: BlogPost[] = [
  {
    title:
      "Breaking Down Multiple Variable Linear Regression Model with House Price Prediction Model",
    excerpt:
      "A practical walkthrough of multivariate linear regression â€” covering feature normalization, gradient descent across multiple parameters, and building a house price prediction model in Python from the ground up.",
    date: "Dec 2024",
    readTime: "13 min read",
    tags: ["Machine Learning", "Python", "Regression", "Supervised Learning"],
    href: "https://medium.com/@methmaldeshapriya2002/breaking-down-multiple-variable-linear-regression-model-with-house-price-prediction-model-08a547b00bf0",
  },
];

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--editorial-primary)]">
        {index}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-foreground)]">
        {label}
      </span>
    </div>
  );
}

function TopicTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[rgba(94,92,230,0.12)] bg-[rgba(94,92,230,0.05)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--editorial-primary)]">
      {label}
    </span>
  );
}

function BlogRow({ post }: { post: BlogPost }) {
  return (
    <article className="group border-b border-[rgba(119,117,134,0.12)] py-8 transition-colors duration-200 hover:border-[rgba(94,92,230,0.18)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
              {post.date}
            </span>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-colors duration-200 group-hover:text-[var(--editorial-primary)]"
            >
              {post.title}
            </a>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--editorial-muted)]">
            {post.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TopicTag key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
          <span className="rounded-full bg-[rgba(94,92,230,0.06)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--editorial-primary)]">
            {post.readTime}
          </span>
          <a
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)] transition-colors duration-200 hover:text-[var(--editorial-primary)]"
          >
            Read on Medium
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function BlogsPage() {
  return (
    <PageScaffold active="Blogs">
      <main className="pb-8 pt-10 md:pt-14">

        {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal className="section-shell section-block">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
              Writing
            </p>
            <h1 className="mt-5 font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
              Builder notes and
              <br />
              technical writing.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              Writing is how I slow down and verify that I actually understand
              something. These pieces cover the technical topics I&apos;m
              working through â€” machine learning, software engineering, and the
              mechanics behind the systems I build.
            </p>
          </div>
        </SectionReveal>

        {/* â”€â”€ 01 Written Work â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal className="section-shell section-block" delay={0.05}>
          <SectionMarker index="01" label="Written work" />

          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-hanken text-3xl font-semibold tracking-[-0.05em] text-[var(--editorial-foreground)] md:text-4xl">
                Articles published on Medium.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-[var(--editorial-muted)]">
                In-depth breakdowns of the concepts and systems behind the work
                I build â€” written to be clear, not abbreviated.
              </p>
            </div>
            <a
              href="https://medium.com/@methmaldeshapriya2002"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)] transition-colors duration-200 hover:text-[var(--editorial-primary)] sm:mt-0"
            >
              All articles
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="border-t border-[rgba(119,117,134,0.12)]">
            {blogPosts.map((post) => (
              <BlogRow key={post.href} post={post} />
            ))}
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
            More articles in progress â€” updated as new writing is published.
          </p>
        </SectionReveal>

        {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <SectionReveal
          className="bg-[var(--editorial-foreground)] py-20 md:py-28"
          delay={0.1}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-3xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              Writing is thinking out loud.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Follow along on Medium for new articles as they ship â€” technical
              writing, machine learning breakdowns, and builder reflections.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://medium.com/@methmaldeshapriya2002"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-52 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--editorial-foreground)] shadow-[0_10px_24px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Follow on Medium
              </a>
            </div>
          </div>
        </SectionReveal>

      </main>
    </PageScaffold>
  );
}


