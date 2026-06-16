import Link from "next/link";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Methmal-Deshapriya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/methmal-deshapriya" },
  { label: "Medium", href: "https://medium.com/@methmaldeshapriya2002" },
  { label: "WhatsApp", href: "https://wa.me/94757451258" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(119,117,134,0.12)] py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="font-hanken text-2xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
              MethmalDeshapriya
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-primary)]">
              Software builder
            </p>
            <p className="text-sm leading-7 text-[var(--editorial-muted)] md:text-base">
              I build software, teach technology, and explore AI-driven ideas
              with a focus on clarity, usefulness, and real-world impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--editorial-muted)]">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[var(--editorial-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(119,117,134,0.1)] pt-6 text-sm text-[var(--editorial-muted)] md:flex-row md:items-center md:justify-between">
          <p className="hidden md:block">
            Built around real projects, clear thinking, and practical digital
            experiences.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em]">
            Copyright 2026 Methmal Deshapriya
          </p>
        </div>
      </div>
    </footer>
  );
}
