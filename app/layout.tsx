import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk, Inter } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
  title: "Methmal Deshapriya | Software Builder",
  description:
    "A premium portfolio for Methmal Deshapriya focused on software engineering, systems thinking, AI-aware product building, and founder-led execution.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Methmal",
    "Methmal Deshapriya",
    "Software Builder",
    "Software Engineer Intern",
    "Portfolio Website",
    "AI Product Builder",
    "React Developer",
    "Software Engineer Portfolio",
  ],
  authors: [
    { name: "Methmal Deshapriya", url: "https://methmaldeshapriya.com" },
  ],
  metadataBase: new URL("https://methmaldeshapriya.com"),
  openGraph: {
    title: "Methmal Deshapriya | Software Builder",
    description:
      "Explore Methmal Deshapriya's work across software engineering, AI-aware systems, and founder-led product building.",
    url: "https://methmaldeshapriya.com",
    siteName: "Methmal Deshapriya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Methmal Deshapriya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Methmal Deshapriya | Software Builder",
    description:
      "Software engineering, systems thinking, AI-aware products, and modern web craftsmanship by Methmal Deshapriya.",
    images: ["/og-image.png"],
    creator: "@methmaldeshapriya",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Methmal Deshapriya",
      jobTitle: "Software Builder",
      url: "https://methmaldeshapriya.com",
      sameAs: [
        "https://www.linkedin.com/in/methmal-deshapriya",
        "https://github.com/Methmal-Deshapriya",
        "https://www.instagram.com/__methmal__?igsh=eXdweHE3cmdlbzI5",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
