import { MetadataRoute } from "next";

import {
  INDEXABLE_PAGES,
  SITE_LAST_MODIFIED,
  getAbsoluteUrl,
} from "@/app/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PAGES.map((page) => ({
    url: getAbsoluteUrl(page.path),
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
