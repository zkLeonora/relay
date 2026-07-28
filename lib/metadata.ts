import type { Metadata } from "next";

export const siteConfig = {
  name: "Relay",
  description:
    "Relay builds practical business software for real operations: Point of Sale, Booking, Inventory, Accounting, HR, and Analytics.",
  url: "https://relaylabs.vercel.app",
  ogImage: "https://relaylabs.vercel.app/opengraph-image",
  links: {
    twitter: "https://twitter.com/relaylabs",
    github: "https://github.com/relaylabs",
  },
};

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title
      ? `${title} | Relay`
      : {
          default: "Relay: Business Software for Real Operations",
          template: "%s | Relay",
        },
    description: description ?? siteConfig.description,
    keywords: [
      "business software",
      "point of sale",
      "booking system",
      "inventory management",
      "accounting software",
      "HR software",
      "business analytics",
      "Relay",
    ],
    authors: [{ name: "Relay" }],
    creator: "Relay",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: title ?? "Relay: Business Software for Real Operations",
      description: description ?? siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Relay business software",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? "Relay: Business Software for Real Operations",
      description: description ?? siteConfig.description,
      images: [image ?? siteConfig.ogImage],
      creator: "@relaysoftware",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
  };
}
