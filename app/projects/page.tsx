import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { ProjectsPage } from "@/components/projects/ProjectsPage";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Methmal Deshapriya",
  description:
    "Software projects by Methmal Deshapriya — full-stack web apps, machine learning experiments, and personal builds.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage />;
}
