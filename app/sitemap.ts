import { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cannabisinsight.kr";

  // 홈페이지
  const home = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  };

  // 카테고리 페이지
  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // 기사 상세 페이지
  const articlePages = ARTICLES.map((article) => ({
    url: `${baseUrl}/${article.category}/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 법적 페이지
  const legalPages = [
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
  ];

  return [home, ...categoryPages, ...articlePages, ...legalPages];
}
