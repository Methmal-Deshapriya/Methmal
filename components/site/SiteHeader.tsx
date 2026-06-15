import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Foundry", href: "/foundry" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Connect", href: "/connect" },
];

type SiteHeaderProps = {
  active?: string;
};

export function SiteHeader({ active = "Home" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(119,117,134,0.12)] bg-[rgba(252,248,255,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 md:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-transform duration-300 hover:scale-[1.02]"
          >
            MethmalDeshapriya
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const isActive = item.label === active;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border-b pb-1 text-sm transition-all duration-300 ${
                    isActive
                      ? "border-[var(--editorial-primary)] text-[var(--editorial-primary)]"
                      : "border-transparent text-[var(--editorial-muted)] hover:border-[rgba(94,92,230,0.25)] hover:text-[var(--editorial-foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--editorial-primary)] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--editorial-primary)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--editorial-muted)]">
              Current status: available
            </span>
          </div>
        </div>

        <nav className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto border-t border-[rgba(119,117,134,0.08)] px-5 py-3 md:hidden">
          {navItems.map((item) => {
            const isActive = item.label === active;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`shrink-0 rounded-full border px-3 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "border-[rgba(94,92,230,0.18)] bg-[rgba(94,92,230,0.08)] text-[var(--editorial-primary)]"
                    : "border-[rgba(119,117,134,0.12)] bg-white/60 text-[var(--editorial-muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
