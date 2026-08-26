import { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cannabisinsight.kr";
  const now = new Date();

  const homePages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  const categoryPages = CATEGORIES.flatMap((category) => [
    {
      url: `${baseUrl}/${category.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/${category.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
  ]);

  const articlePages = ARTICLES.flatMap((article) => [
    {
      url: `${baseUrl}/${article.category}/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/${article.category}/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ]);

  const fixedPages = [
    {
      url: `${baseUrl}/legislation`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/legislation`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [...homePages, ...categoryPages, ...articlePages, ...fixedPages];
}
