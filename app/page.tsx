import BreakingNewsBanner from "@/components/BreakingNewsBanner";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const subArticles = ARTICLES.filter((a) => !a.featured).slice(0, 4);
  const todayNews = ARTICLES.slice(0, 5);

  return (
    <>
      <BreakingNewsBanner />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Featured + Side */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2">
            <ArticleCard article={featured} variant="featured" />
          </div>
          <div className="flex flex-col gap-5">
            {subArticles.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                href={`/${article.category}/${article.id}`}
                className="group flex gap-3 border-b border-gray-100 pb-4 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-[#2d6a4f] uppercase tracking-wide">
                    {article.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors mt-0.5">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <hr className="border-[#2d6a4f] border-t-2 mb-8" />

        {/* 2x2 Card Grid */}
        <section className="mb-10">
          <h2 className="text-base font-black text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
            최신 기사
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {subArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="card" />
            ))}
          </div>
        </section>

        {/* Today's News List */}
        <section className="mb-10">
          <h2 className="text-base font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
            오늘의 뉴스
          </h2>
          <div className="border-t-2 border-[#2d6a4f]">
            {todayNews.map((article, i) => (
              <ArticleCard key={article.id} article={article} variant="list" rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Category Links */}
        <section>
          <h2 className="text-base font-black text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
            카테고리
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="flex flex-col items-center justify-center py-5 border border-gray-200 rounded-sm hover:border-[#2d6a4f] hover:bg-[#f0faf4] transition-colors group"
              >
                <span className="text-sm font-bold text-gray-700 group-hover:text-[#2d6a4f] transition-colors">
                  {cat.label}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wide">
                  {cat.labelEn}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
