import type { Metadata } from "next";

const SITE_URL = "https://methmaldeshapriya.com";
const SITE_NAME = "Methmal Deshapriya";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = "@methmaldeshapriya";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

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
