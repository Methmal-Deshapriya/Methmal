import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  BookOpen,
  Github,
  Instagram,
  Linkedin,
  MessageCircleMore,
  Youtube,
} from "lucide-react";

import { PageScaffold } from "@/components/site/PageScaffold";
import { SectionReveal } from "@/components/site/SectionReveal";
import { ContactForm } from "@/components/site/ContactForm";

const socialChannels = [
  {
    label: "Email",
    handle: "methmaldeshapriya2002@gmail.com",
    href: "mailto:methmaldeshapriya2002@gmail.com",
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    handle: "/in/methmal-deshapriya",
    href: "https://www.linkedin.com/in/methmal-deshapriya",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "/Methmal-Deshapriya",
    href: "https://github.com/Methmal-Deshapriya",
    icon: Github,
  },
  {
    label: "WhatsApp",
    handle: "+94 75 745 1258",
    href: "https://wa.me/94757451258",
    icon: MessageCircleMore,
  },
  {
    label: "Medium",
    handle: "@methmaldeshapriya2002",
    href: "https://medium.com/@methmaldeshapriya2002",
    icon: BookOpen,
  },
  {
    label: "YouTube",
    handle: "@methmaldeshapriya",
    href: "https://m.youtube.com/@methmaldeshapriya",
    icon: Youtube,
  },
  {
    label: "Instagram",
    handle: "__methmal__",
    href: "https://www.instagram.com/__methmal__?igsh=eXdweHE3cmdlbzI5",
    icon: Instagram,
  },
] as const;

const contextCards = [
  {
    label: "Availability",
    text: "Open to thoughtful software collaborations, product engineering work, and ambitious digital builds.",
  },
  {
    label: "Response time",
    text: "Most messages receive a considered reply within 24 to 48 business hours.",
  },
  {
    label: "Working style",
    text: "Best suited for teams that value clarity, long-term quality, and calm execution.",
  },
] as const;

type SocialCardProps = {
  label: string;
  handle: string;
  href: string;
  icon: (typeof socialChannels)[number]["icon"];
};

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

function SocialCard({ label, handle, href, icon: Icon }: SocialCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-[rgba(119,117,134,0.12)] bg-white/40 px-4 py-3.5 transition-all duration-200 hover:border-[rgba(94,92,230,0.18)] hover:bg-white/65"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(94,92,230,0.06)] text-[var(--editorial-primary)]">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-sm font-medium leading-tight text-[var(--editorial-foreground)]">
            {label}
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-[var(--editorial-muted-soft)]">
            {handle}
          </p>
        </div>
      </div>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--editorial-muted-soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ConnectPage() {
  return (
    <PageScaffold active="Connect">
      <main className="pb-8 pt-28 md:pt-32">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <SectionReveal className="section-shell section-block relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-[rgba(94,92,230,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-4 h-52 w-52 rounded-full bg-[rgba(158,153,255,0.12)] blur-3xl" />

          <div className="relative max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
              Connect
            </p>
            <h1 className="mt-5 font-hanken text-5xl font-semibold tracking-[-0.06em] text-[var(--editorial-foreground)] md:text-6xl lg:text-[4.5rem] lg:leading-[0.98]">
              Let&apos;s start a
              <br />
              conversation.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-muted)] md:text-lg">
              I&apos;m open to meaningful collaborations, software partnerships,
              and carefully built digital products. If there&apos;s something
              ambitious in motion, I&apos;d be glad to hear about it.
            </p>
          </div>
        </SectionReveal>

        {/* ── 01 Form + Social Directory ────────────────────────────────── */}
        <SectionReveal className="section-shell section-block" delay={0.05}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionMarker index="01" label="Get in touch" />
              <ContactForm />
            </div>

            <div className="lg:col-span-5">
              <SectionMarker index="02" label="Social directory" />
              <div className="flex flex-col gap-2.5">
                {socialChannels.map((ch) => (
                  <SocialCard key={ch.label} {...ch} />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── 03 Connecting Context ─────────────────────────────────────── */}
        <SectionReveal className="section-shell section-block" delay={0.1}>
          <SectionMarker index="03" label="Connecting context" />
          <div className="grid grid-cols-1 gap-8 border-t border-[rgba(119,117,134,0.12)] pt-10 md:grid-cols-3">
            {contextCards.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--editorial-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <SectionReveal
          className="bg-[var(--editorial-foreground)] py-20 md:py-28"
          delay={0.15}
        >
          <div className="section-shell text-center">
            <h2 className="mx-auto max-w-3xl font-hanken text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-[4.25rem] lg:leading-[0.98]">
              Have something in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Whether it&apos;s a new product, a technical challenge, or a
              collaboration worth building — use the form above or find me on
              any of the channels listed.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex min-w-52 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-[var(--editorial-foreground)] shadow-[0_10px_24px_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                View my work
              </Link>
            </div>
          </div>
        </SectionReveal>

      </main>
    </PageScaffold>
  );
}
