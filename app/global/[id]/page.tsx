import ArticleDetail from "@/components/ArticleDetail";
import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.filter((a) => a.category === "global").map((a) => ({
    id: String(a.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === Number(id) && a.category === "global");
  if (!article) return {};
  const description = article.summary.slice(0, 155) + (article.summary.length > 155 ? "…" : "");
  return {
    title: `${article.title} | CannabisInsight`,
    description,
    keywords: ["글로벌 대마", "헴프 뉴스", "cannabis", "CBD", "카나비스인사이트", "CannabisInsight"],
    openGraph: {
      title: `${article.title} | CannabisInsight`,
      description,
      url: `https://www.cannabisinsight.kr/global/${article.id}`,
      siteName: "CannabisInsight",
      locale: "ko_KR",
      type: "article",
      publishedTime: article.date,
      images: article.image ? [{ url: article.image, width: 800, height: 450 }] : undefined,
    },
    alternates: { canonical: `https://www.cannabisinsight.kr/global/${article.id}` },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const numId = Number(id);
  if (isNaN(numId)) notFound();
  return <ArticleDetail category="global" id={numId} />;
}
