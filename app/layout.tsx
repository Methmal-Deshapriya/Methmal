import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import {
  OG_IMAGE_URL,
  PROFILE_IMAGE_URL,
  SAME_AS_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_TITLE,
  SITE_TWITTER_DESCRIPTION,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/app/metadata";
import { WelcomeOverlay } from "@/components/site/WelcomeOverlay";

const websiteId = `${SITE_URL}/#website`;
const personId = `${SITE_URL}/#person`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: {
        "@id": personId,
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE_NAME,
      jobTitle: "Software Engineer",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: PROFILE_IMAGE_URL,
      sameAs: SAME_AS_LINKS,
    },
  ],
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Methmal Deshapriya",
    "Methmal",
    "Software Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "React Developer",
    "Next.js Developer",
    "Foundry Academy",
    "Software Engineer Sri Lanka",
    "Tech Educator Sinhala",
  ],
  authors: [
    { name: SITE_NAME, url: SITE_URL },
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_TWITTER_DESCRIPTION,
    images: [OG_IMAGE_URL],
    creator: TWITTER_HANDLE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistMono.variable} ${hankenGrotesk.variable} ${inter.variable} antialiased`}
      >
        <WelcomeOverlay />
        {children}
      </body>
    </html>
  );
}
