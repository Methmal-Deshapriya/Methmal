import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { FoundryPage } from "@/components/foundry/FoundryPage";

export const metadata: Metadata = createPageMetadata({
  title: "Foundry Academy | Methmal Deshapriya",
  description:
    "Foundry Academy is Methmal Deshapriya's space for beginner-friendly software, AI, and full-stack learning.",
  path: "/foundry",
});

export default function Page() {
  return <FoundryPage />;
}
