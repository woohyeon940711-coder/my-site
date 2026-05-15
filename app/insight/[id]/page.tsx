import ArticleDetail from "@/components/ArticleDetail";
import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.filter((a) => a.category === "insight").map((a) => ({
    id: String(a.id),
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const numId = Number(id);
  if (isNaN(numId)) notFound();
  return <ArticleDetail category="insight" id={numId} />;
}
