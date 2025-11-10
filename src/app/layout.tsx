import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import QueryClientWrapper from "@/components/layouts/QueryClientWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Coptera Career | Temukan Lowongan Kerja Terbaik di Indonesia",
  description:
    "Coptera Career membantu kamu mengembangkan karir dan menemukan lowongan kerja terbaru dari perusahaan terpercaya di Indonesia. Temukan peluang terbaik untuk meraih karir impianmu!",
  verification: {
    google: "RbpqRG45BYQKjhMqnnV9D9SRwzGH8Mqp9TnRhXoiCmg",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Coptera Career | Temukan Lowongan Kerja Terbaik di Indonesia",
    description:
      "Coptera Career membantu kamu mengembangkan karir dan menemukan lowongan kerja terbaru dari perusahaan terpercaya di Indonesia. Temukan peluang terbaik untuk meraih karir impianmu!",
    url: "https://career.coptera.id",
    siteName: "Coptera Career",
    images: [
      {
        url: "/img/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coptera Career - Lowongan Kerja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coptera Career | Temukan Lowongan Kerja Terbaik di Indonesia",
    description:
      "Coptera Career membantu kamu mengembangkan karir dan menemukan lowongan kerja terbaru dari perusahaan terpercaya di Indonesia. Temukan peluang terbaik untuk meraih karir impianmu!",
    images: ["/img/logo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Coptera",
    url: "https://career.coptera.id",
    logo: "https://career.coptera.id/img/logo/og-image.png",
    sameAs: [
      "https://www.linkedin.com/company/coptera",
      "https://www.instagram.com/copteracareer",
    ],
    department: {
      "@type": "Organization",
      name: "Coptera Career",
      url: "https://career.coptera.id",
      description:
        "Platform resmi untuk menemukan lowongan kerja dan membangun karier bersama Coptera di Indonesia.",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <QueryClientWrapper> {children} </QueryClientWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
