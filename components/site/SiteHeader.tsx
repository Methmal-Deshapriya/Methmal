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
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 md:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-hanken text-lg font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(94,92,230,0.32)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(252,248,255,0.9)]"
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
                  aria-current={isActive ? "page" : undefined}
                  className="site-nav-link"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--editorial-primary)] shadow-[0_0_0_4px_rgba(94,92,230,0.12)]" />
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
                aria-current={isActive ? "page" : undefined}
                className="site-mobile-nav-link shrink-0"
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
