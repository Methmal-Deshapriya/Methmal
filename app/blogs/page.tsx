import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { BlogsPage } from "@/components/blogs/BlogsPage";

export const metadata: Metadata = createPageMetadata({
  title: "Blogs | Methmal Deshapriya",
  description:
    "Technical writing and builder notes by Methmal Deshapriya on machine learning, software engineering, and systems thinking.",
  path: "/blogs",
});

export default function BlogsRoute() {
  return <BlogsPage />;
}
