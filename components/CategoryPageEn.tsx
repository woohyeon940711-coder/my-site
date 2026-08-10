"use client";

import { useState } from "react";
import { ARTICLES, CATEGORIES, Category } from "@/lib/data";
import ArticleCardEn from "@/components/ArticleCardEn";
import Link from "next/link";

const EN_CATEGORY_LABELS: Record<string, string> = {
  policy: "Policy & Regulation",
  global: "Global",
  rnd: "R&D & Tech",
  domestic: "Korea",
  industry: "Industry",
  hemp: "Hemp Guide",
  insight: "Insight",
  guide: "Guide",
};

const ARTICLES_PER_PAGE = 12;

interface Props {
  slug: Category;
}

export default function CategoryPageEn({ slug }: Props) {
  const catInfo = CATEGORIES.find((c) => c.slug === slug)!;
  const catArticles = ARTICLES.filter((a) => a.category === slug);
  const [page, setPage] = useState(1);

  const featured = catArticles[0];
  const rest = catArticles.slice(1);
  const totalPages = Math.ceil(rest.length / ARTICLES_PER_PAGE);
  const paged = rest.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
  const catLabel = EN_CATEGORY_LABELS[slug] || catInfo.labelEn;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-600">{catLabel}</span>
      </nav>

      <h1 className="text-2xl font-black text-gray-900 mb-2">{catLabel}</h1>
      <p className="text-sm text-gray-400 mb-8">{catArticles.length} articles</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          {/* Featured */}
          {featured && (
            <div className="mb-8">
              <ArticleCardEn article={featured} variant="featured" />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {paged.map((article) => (
              <ArticleCardEn key={article.id} article={article} variant="card" />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-1.5 text-sm border border-gray-200 rounded-sm disabled:opacity-40 hover:border-[#2d6a4f] transition-colors"
              >
                ← Prev
              </button>
              <span className="text-sm text-gray-500">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-1.5 text-sm border border-gray-200 rounded-sm disabled:opacity-40 hover:border-[#2d6a4f] transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="mb-6">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
              Categories
            </h3>
            <ul className="space-y-1">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/en/${cat.slug}`}
                    className={`text-sm py-1 block transition-colors ${
                      cat.slug === slug
                        ? "text-[#2d6a4f] font-bold"
                        : "text-gray-600 hover:text-[#2d6a4f]"
                    }`}
                  >
                    {EN_CATEGORY_LABELS[cat.slug] || cat.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
              Latest News
            </h3>
            <ul className="space-y-3">
              {ARTICLES.slice(0, 5).map((article) => (
                <li key={article.id}>
                  <Link
                    href={`/en/${article.category}/${article.id}`}
                    className="text-xs text-gray-700 hover:text-[#2d6a4f] leading-snug line-clamp-2 transition-colors block"
                  >
                    {article.titleEn || article.title}
                  </Link>
                  <p className="text-[10px] text-gray-400 mt-0.5">{article.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
