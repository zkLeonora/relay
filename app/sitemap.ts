import { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { getAllBlogSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs();
  const blogSlugs = getAllBlogSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${siteConfig.url}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
