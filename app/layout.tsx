import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Relay: Business Software for Real Operations",
    template: "%s | Relay",
  },
  description: siteConfig.description,
  keywords: [
    "business software",
    "point of sale system",
    "booking system",
    "inventory management",
    "accounting software",
    "HR software",
    "business analytics",
    "small business tools",
    "Relay software",
  ],
  authors: [{ name: "Relay" }],
  creator: "Relay",
  publisher: "Relay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Relay: Business Software for Real Operations",
    description: siteConfig.description,
    siteName: "Relay",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Relay business software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relay: Business Software for Real Operations",
    description: siteConfig.description,
    images: ["/opengraph-image"],
    creator: "@relaysoftware",
    site: "@relaysoftware",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "Relay",
      url: siteConfig.url,
      description: siteConfig.description,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
        width: 32,
        height: 32,
      },
      sameAs: [siteConfig.links.twitter],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Relay",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
