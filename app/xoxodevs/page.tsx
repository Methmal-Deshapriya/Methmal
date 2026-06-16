import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { XoxodevsPage } from "@/components/xoxodevs/XoxodevsPage";

export const metadata: Metadata = createPageMetadata({
  title: "xoxodevs | Methmal Deshapriya",
  description:
    "Explore xoxodevs, the founder-led software studio by Methmal Deshapriya focused on MVPs, practical products, and AI-ready systems.",
  path: "/xoxodevs",
});

export default function Page() {
  return <XoxodevsPage />;
}
