import ArticleDetail from "@/components/ArticleDetail";
import { JsonLd } from "@/components/SeoEnhancements";
import { ARTICLES } from "@/lib/data";
import { articleJsonLd, articleMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.filter((article) => article.category === "rnd").map((article) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((item) => item.id === Number(id) && item.category === "rnd");
  return article ? articleMetadata(article, "ko") : {};
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = ARTICLES.find((item) => item.id === Number(id) && item.category === "rnd");
  if (!article) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(article, "ko")} />
      <ArticleDetail category="rnd" id={article.id} />
    </>
  );
}
