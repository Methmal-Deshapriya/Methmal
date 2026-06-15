import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageScaffoldProps = {
  active: string;
  children: ReactNode;
};

export function PageScaffold({ active, children }: PageScaffoldProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--editorial-background)] text-[var(--editorial-foreground)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,92,230,0.1),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(94,92,230,0.08),_transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 dot-grid opacity-60" />

      <SiteHeader active={active} />
      {children}
      <SiteFooter />
    </div>
  );
}
