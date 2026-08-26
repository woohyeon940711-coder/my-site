"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import ArticleCardEn from "@/components/ArticleCardEn";
import { ARTICLES } from "@/lib/data";
import Link from "next/link";

type Lang = "KR" | "EN";

export default function SearchContent({ lang = "KR" }: { lang?: Lang }) {
  const isEn = lang === "EN";
  const base = isEn ? "/en" : "";
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return ARTICLES.filter((article) => {
      const searchFields = [
        article.title,
        article.summary,
        article.titleEn || "",
        article.summaryEn || "",
        article.categoryLabel,
        article.category,
      ];
      return searchFields.some((field) => field.toLowerCase().includes(term));
    });
  }, [searchTerm]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
        <Link href={base || "/"} className="hover:text-[#2d6a4f] transition-colors">
          {isEn ? "Home" : "홈"}
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">{isEn ? "Search" : "검색"}</span>
      </nav>

      <div className="border-b-2 border-[#2d6a4f] pb-3 mb-8">
        <h1 className="text-2xl font-black text-gray-900">{isEn ? "Search Articles" : "기사 검색"}</h1>
      </div>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              isEn
                ? "Enter a keyword (e.g., CBD, hemp, Germany, DEA...)"
                : "키워드를 입력하세요 (예: CBD, 헴프, 독일, DEA...)"
            }
            className="flex-1 px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#2d6a4f] text-white text-sm font-bold rounded-sm hover:bg-[#1b4332] transition-colors"
          >
            {isEn ? "Search" : "검색"}
          </button>
        </div>
      </form>

      {searchTerm && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-bold text-[#2d6a4f]">&quot;{searchTerm}&quot;</span>{" "}
            {isEn ? "returned" : "검색 결과"} <span className="font-bold">{results.length}</span>{" "}
            {isEn ? (results.length === 1 ? "article" : "articles") : "건"}
          </p>
        </div>
      )}

      {searchTerm && results.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-gray-400 text-sm">{isEn ? "No results found." : "검색 결과가 없습니다."}</p>
          <p className="text-gray-400 text-xs mt-2">
            {isEn ? "Try a different keyword." : "다른 키워드로 검색해 보세요."}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((article) =>
            isEn ? (
              <ArticleCardEn key={article.id} article={article} variant="card" />
            ) : (
              <ArticleCard key={article.id} article={article} variant="card" />
            )
          )}
        </div>
      )}
    </div>
  );
}
