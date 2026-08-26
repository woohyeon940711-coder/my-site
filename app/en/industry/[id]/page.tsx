import ArticleDetailEn from "@/components/ArticleDetailEn";
import { JsonLd } from "@/components/SeoEnhancements";
import { ARTICLES } from "@/lib/data";
import { articleJsonLd, articleMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.filter((article) => article.category === "industry").map((article) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((item) => item.id === Number(id) && item.category === "industry");
  return article ? articleMetadata(article, "en") : {};
}

export default async function EnArticlePage({ params }: Props) {
  const { id } = await params;
  const article = ARTICLES.find((item) => item.id === Number(id) && item.category === "industry");
  if (!article) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(article, "en")} />
      <ArticleDetailEn category="industry" id={article.id} />
    </>
  );
}
