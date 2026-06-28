import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { XoxodevsPage } from "@/components/xoxodevs/XoxodevsPage";

export const metadata: Metadata = createPageMetadata({
  title: "xoxodevs | Methmal Deshapriya",
  description:
    "xoxodevs is a software studio by Methmal Deshapriya building MVPs, practical products, and modern web applications.",
  path: "/xoxodevs",
});

export default function Page() {
  return <XoxodevsPage />;
}
