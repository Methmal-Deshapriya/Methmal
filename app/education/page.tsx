import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { EducationPage } from "@/components/education/EducationPage";

export const metadata: Metadata = createPageMetadata({
  title: "Education | Methmal Deshapriya",
  description:
    "Academic background, software foundations, and the ongoing learning journey of Methmal Deshapriya.",
  path: "/education",
});

export default function EducationRoute() {
  return <EducationPage />;
}
