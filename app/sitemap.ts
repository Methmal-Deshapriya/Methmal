import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://methmaldeshapriya.com";
  const routes = [
    "",
    "/education",
    "/foundry",
    "/projects",
    "/blogs",
    "/social",
    "/xoxodevs",
    "/connect",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
