import { ARTICLES, CATEGORIES, Category } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  category: Category;
  id: number;
}

export default function ArticleDetail({ category, id }: Props) {
  const article = ARTICLES.find((a) => a.id === id && a.category === category);

  if (!article) notFound();

  const catInfo = CATEGORIES.find((c) => c.slug === category)!;
  const related = ARTICLES.filter(
    (a) => a.category === category && a.id !== id
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">
          홈
        </Link>
        <span>/</span>
        <Link
          href={`/${category}`}
          className="hover:text-[#2d6a4f] transition-colors"
        >
          {catInfo.label}
        </Link>
        <span>/</span>
        <span className="text-gray-600 truncate max-w-xs">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Article body */}
        <article className="lg:col-span-3">
          {/* Category badge + date */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-white bg-[#2d6a4f] px-2 py-0.5 rounded-sm uppercase tracking-wide">
              {article.categoryLabel}
            </span>
            {article.country && (
              <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm">
                {article.country}
              </span>
            )}
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Divider */}
          <hr className="border-[#2d6a4f] border-t-2 mb-6" />

          {/* Cover image */}
          {article.image && (
            <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Summary / body */}
          <div className="prose prose-gray max-w-none">
            <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium border-l-4 border-[#2d6a4f] pl-4 bg-[#f0faf4] py-3 rounded-r-sm">
              {article.summary}
            </p>

            {/* Placeholder body text */}
            <p className="text-sm text-gray-500 leading-loose">
              이 기사의 전문은 원문 링크에서 확인하실 수 있습니다. CannabisInsight는 글로벌 대마 산업·정책 관련 주요 뉴스를 큐레이션하여 제공합니다.
            </p>
          </div>

          {/* Source link */}
          {article.link && article.link !== "None" && (
            <div className="mt-8 p-4 border border-gray-200 rounded-sm bg-gray-50 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">원문 출처</p>
                <p className="text-sm text-gray-600 truncate max-w-sm">
                  {article.link}
                </p>
              </div>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 ml-4 text-sm font-bold text-white bg-[#2d6a4f] hover:bg-[#1e4d38] transition-colors px-4 py-2 rounded-sm"
              >
                원문 보기 →
              </a>
            </div>
          )}

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              #{article.categoryLabel}
            </span>
            {article.country && (
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                #{article.country}
              </span>
            )}
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              #대마
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              #Cannabis
            </span>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Back to category */}
          <Link
            href={`/${category}`}
            className="flex items-center gap-2 text-sm font-bold text-[#2d6a4f] hover:underline mb-6"
          >
            ← {catInfo.label} 목록으로
          </Link>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="border border-gray-200 rounded-sm p-4">
              <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
                관련 기사
              </h3>
              <ul className="space-y-4">
                {related.map((rel) => (
                  <li key={rel.id}>
                    <Link
                      href={`/${rel.category}/${rel.id}`}
                      className="group block"
                    >
                      {rel.image && (
                        <div className="relative w-full aspect-video mb-2 overflow-hidden rounded-sm bg-gray-100">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="200px"
                          />
                        </div>
                      )}
                      <p className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">{rel.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
