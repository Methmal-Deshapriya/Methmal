"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Foundry", href: "/foundry" },
  { label: "xoxodevs", href: "/xoxodevs" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Connect", href: "/connect" },
];

type SiteHeaderProps = {
  active?: string;
};

export function SiteHeader({ active = "Home" }: SiteHeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setDrawerOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <>
      <header className="site-header sticky top-0 z-50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">

          {/* Logo — fades out when drawer is open */}
          <Link
            href="/"
            className={`font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-all duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(94,92,230,0.32)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(252,248,255,0.9)] lg:opacity-100 ${
              drawerOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            MethmalDeshapriya
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => {
              const isActive = item.label === active;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="site-nav-link"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop status */}
          <div className="hidden items-center gap-3 lg:flex">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--editorial-primary)] shadow-[0_0_0_4px_rgba(94,92,230,0.12)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-muted)]">
              Available
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(119,117,134,0.14)] bg-white/60 text-[var(--editorial-muted)] transition-colors duration-200 hover:border-[rgba(94,92,230,0.2)] hover:text-[var(--editorial-foreground)] lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-[rgba(27,27,35,0.35)] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Side drawer — slides in from LEFT */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(80vw,300px)] flex-col border-r border-[rgba(119,117,134,0.1)] bg-[rgba(252,248,255,0.97)] shadow-[16px_0_40px_rgba(27,27,35,0.08)] backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[rgba(119,117,134,0.1)] px-6 py-5">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="font-hanken text-base font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-opacity hover:opacity-80"
          >
            MethmalDeshapriya
          </Link>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(119,117,134,0.12)] text-[var(--editorial-muted)] transition-colors duration-200 hover:border-[rgba(94,92,230,0.2)] hover:text-[var(--editorial-foreground)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-150 ${
                  isActive
                    ? "bg-[rgba(94,92,230,0.07)] text-[var(--editorial-primary)]"
                    : "text-[var(--editorial-muted)] hover:bg-[rgba(119,117,134,0.06)] hover:text-[var(--editorial-foreground)]"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--editorial-primary)]" />
                )}
                <span className={isActive ? "" : "pl-[18px]"}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-[rgba(119,117,134,0.1)] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--editorial-primary)] shadow-[0_0_0_3px_rgba(94,92,230,0.12)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--editorial-muted)]">
              Current status: available
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
