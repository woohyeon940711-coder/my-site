import ArticleDetailEn from "@/components/ArticleDetailEn";
import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.filter((a) => a.category === "policy").map((a) => ({
    id: String(a.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === Number(id) && a.category === "policy");
  if (!article) return {};
  const title = article.titleEn || article.title;
  const description = (article.summaryEn || article.summary).slice(0, 155) + "…";
  return {
    title: `${title} | CannabisInsight`,
    description,
    keywords: ["cannabis", "hemp", "CBD", "CannabisInsight"],
    openGraph: {
      title: `${title} | CannabisInsight`,
      description,
      url: `https://www.cannabisinsight.kr/en/policy/${article.id}`,
      siteName: "CannabisInsight",
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
      images: article.image ? [{ url: article.image, width: 800, height: 450 }] : undefined,
    },
    alternates: {
      canonical: `https://www.cannabisinsight.kr/en/policy/${article.id}`,
      languages: { "ko": `https://www.cannabisinsight.kr/policy/${article.id}` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const numId = Number(id);
  if (isNaN(numId)) notFound();
  return <ArticleDetailEn category="policy" id={numId} />;
}
