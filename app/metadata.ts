import type { Metadata } from "next";

export const SITE_URL = "https://methmaldeshapriya.com";
export const SITE_NAME = "Methmal Deshapriya";
export const SITE_TITLE = "Methmal Deshapriya | Software Engineer";
export const SITE_DESCRIPTION =
  "Methmal Deshapriya — software engineer, full-stack developer, and educator. Building projects in web development, machine learning, and AI.";
export const SITE_OG_DESCRIPTION =
  "Software engineering, full-stack development, machine learning, and tech education by Methmal Deshapriya.";
export const SITE_TWITTER_DESCRIPTION =
  "Software engineering, machine learning, and tech education by Methmal Deshapriya.";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const PROFILE_IMAGE_URL = `${SITE_URL}/methmal.png`;
export const TWITTER_HANDLE = "@methmaldeshapriya";
export const SITE_LAST_MODIFIED = "2026-06-22T12:00:00+05:30";

export const SAME_AS_LINKS = [
  "https://www.linkedin.com/in/methmal-deshapriya",
  "https://github.com/Methmal-Deshapriya",
  "https://medium.com/@methmaldeshapriya2002",
  "https://m.youtube.com/@methmaldeshapriya",
  "https://www.instagram.com/__methmal__?igsh=eXdweHE3cmdlbzI5",
] as const;

export const INDEXABLE_PAGES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.8 },
  { path: "/foundry", changeFrequency: "monthly", priority: 0.8 },
  { path: "/education", changeFrequency: "monthly", priority: 0.8 },
  { path: "/xoxodevs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/connect", changeFrequency: "monthly", priority: 0.8 },
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function getAbsoluteUrl(path: `/${string}`): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = getAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} portfolio preview`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
      creator: TWITTER_HANDLE,
    },
  };
}
