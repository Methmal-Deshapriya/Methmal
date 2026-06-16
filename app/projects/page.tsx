import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { ProjectsPage } from "@/components/projects/ProjectsPage";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Methmal Deshapriya",
  description:
    "Featured software projects, AI experiments, and full-stack builds by Methmal Deshapriya.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage />;
}
