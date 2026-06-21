import type { Metadata } from "next";

import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  createPageMetadata,
} from "@/app/metadata";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = createPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
