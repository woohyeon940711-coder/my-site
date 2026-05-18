"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORIES, Category } from "@/lib/data";
import Link from "next/link";

interface Props {
  slug: Category;
}

const ARTICLES_PER_PAGE = 12;

export default function CategoryPage({ slug }: Props) {
  const catInfo = CATEGORIES.find((c) => c.slug === slug)!;
  const articles = ARTICLES.filter((a) => a.category === slug);
  const otherCats = CATEGORIES.filter((c) => c.slug !== slug);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Math.max(articles.length - 1, 0) / ARTICLES_PER_PAGE);
  const paginatedArticles = articles.slice(
    1 + (currentPage - 1) * ARTICLES_PER_PAGE,
    1 + currentPage * ARTICLES_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">{catInfo.label}</span>
      </nav>

      {/* Category header */}
      <div className="border-b-2 border-[#2d6a4f] pb-3 mb-8">
        <h1 className="text-2xl font-black text-gray-900">
          {catInfo.label}
          <span className="ml-2 text-sm font-normal text-gray-400 uppercase tracking-widest">
            {catInfo.labelEn}
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main articles */}
        <div className="lg:col-span-3">
          {articles.length === 0 ? (
            <p className="text-gray-400 text-sm py-16 text-center">
              아직 등록된 기사가 없습니다.
            </p>
          ) : (
            <>
              {/* Featured */}
              <div className="mb-8">
                <ArticleCard article={articles[0]} variant="featured" />
              </div>

              {/* Grid */}
              {paginatedArticles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {paginatedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="card" />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-sm hover:border-[#2d6a4f] hover:text-[#2d6a4f] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    이전
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 text-sm rounded-sm transition-colors ${
                        currentPage === page
                          ? "bg-[#2d6a4f] text-white font-bold"
                          : "border border-gray-300 hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-sm hover:border-[#2d6a4f] hover:text-[#2d6a4f] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    다음
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Other categories */}
          <div className="border border-gray-200 rounded-sm p-4 mb-6">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              다른 카테고리
            </h3>
            <ul className="space-y-2">
              {otherCats.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="flex items-center justify-between text-sm text-gray-600 hover:text-[#2d6a4f] transition-colors py-1"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{cat.labelEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest across all */}
          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              최신 뉴스
            </h3>
            <ul className="space-y-3">
              {ARTICLES.slice(0, 5).map((article, i) => (
                <li key={article.id}>
                  <Link
                    href={`/${article.category}/${article.id}`}
                    className="group flex gap-2"
                  >
                    <span className="text-lg font-black text-[#2d6a4f] w-5 shrink-0 leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
                      {article.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
