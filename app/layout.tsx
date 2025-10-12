import type { Metadata } from "next";
import { Geist, Geist_Mono, Funnel_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // pick the weights you need
  variable: "--font-funnel-sans", // CSS variable name
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
  title: "Methmal Deshapriya | AI & Full-Stack Developer",
  description:
    "Explore Methmal Deshapriya’s portfolio — showcasing projects in AI, web development, and creative technology. Built with Next.js, Tailwind CSS, and cutting-edge design.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Methmal",
    "Methmal Deshapriya",
    "AI Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Machine Learning Projects",
    "React Developer Sri Lanka",
    "Software Engineer Portfolio",
  ],
  authors: [
    { name: "Methmal Deshapriya", url: "https://methmaldeshapriya.com" },
  ],
  metadataBase: new URL("https://methmaldeshapriya.com"),
  openGraph: {
    title: "Methmal Deshapriya | AI & Full-Stack Developer",
    description:
      "Discover Methmal Deshapriya’s portfolio featuring innovative AI and web development projects.",
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
    title: "Methmal Deshapriya | Developer Portfolio",
    description:
      "AI, Web Development, and Software Engineering projects by Methmal Deshapriya.",
    images: ["/og-image.png"],
    creator: "@methmaldeshapriya",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Methmal Deshapriya",
      jobTitle: "AI & Full Stack Developer",
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
        className={`${geistSans.variable} ${geistMono.variable} ${funnelSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
