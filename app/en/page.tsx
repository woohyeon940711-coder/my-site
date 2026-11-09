import ArticleCardEn from "@/components/ArticleCardEn";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/SeoEnhancements";
import { alternatesFor, DEFAULT_OG_IMAGE, websiteJsonLd } from "@/lib/seo";
import { SITE_INTRO_EN } from "@/lib/editorial";
import { formatDateEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Korea's Cannabis & Hemp Industry News",
  description: "Korea-based cannabis and hemp news curation, with Korean and English summaries covering policy, industry developments and research.",
  keywords: ["cannabis", "hemp", "CBD", "THC", "cannabis news", "hemp industry", "CannabisInsight", "Korea cannabis"],
  openGraph: {
    title: "CannabisInsight — Korea's Cannabis & Hemp Industry News",
    description: "Korea-based cannabis and hemp news curation, with Korean and English summaries covering policy, industry developments and research.",
    url: "https://www.cannabisinsight.kr/en",
    siteName: "CannabisInsight",
    locale: "en_US",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: "CannabisInsight" }],
  },
  alternates: alternatesFor("/", "en"),
};

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

export default function EnHomePage() {
  const featured = ARTICLES[0];
  const latestArticleDate = ARTICLES.reduce((latest, article) => article.date > latest ? article.date : latest, "");
  const usedIds = new Set([featured.id]);
  const sideArticles = ARTICLES.filter((a) => !usedIds.has(a.id)).slice(0, 3);
  sideArticles.forEach((a) => usedIds.add(a.id));
  const latestArticles = ARTICLES.filter((a) => !usedIds.has(a.id)).slice(0, 4);
  latestArticles.forEach((a) => usedIds.add(a.id));
  const topNews = ARTICLES.filter((a) => !usedIds.has(a.id)).slice(0, 5);

  return (
    <>
      <JsonLd data={websiteJsonLd("en")} />
      <div className="max-w-7xl mx-auto px-4 py-6">
      <section aria-labelledby="site-introduction" className="mb-6 border-b border-gray-100 pb-5">
        <h1 id="site-introduction" className="text-lg font-bold text-gray-900 mb-2">Korean &amp; global cannabis news</h1>
        <p className="max-w-4xl text-sm text-gray-600 leading-relaxed">{SITE_INTRO_EN}</p>
        <p className="text-xs text-gray-500 mt-2">Latest article date: <time dateTime={latestArticleDate}>{formatDateEn(latestArticleDate)}</time></p>
      </section>
      {/* Featured + Side */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <ArticleCardEn article={featured} variant="featured" />
        </div>
        <div className="flex flex-col gap-5">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
                href={`/en/${article.category}/${article.id}`}
                prefetch={false}
                className="group flex gap-3 border-b border-gray-100 pb-4 last:border-0"
            >
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-[#2d6a4f] uppercase tracking-wide">
                  {EN_CATEGORY_LABELS[article.category] || article.categoryLabel}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors mt-0.5">
                  {article.titleEn || article.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-[#2d6a4f] border-t-2 mb-8" />

      {/* Latest Articles */}
      <section className="mb-10">
        <h2 className="text-base font-black text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
          Latest Articles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {latestArticles.map((article) => (
            <ArticleCardEn key={article.id} article={article} variant="card" />
          ))}
        </div>
      </section>

      {/* Top News List */}
      <section className="mb-10">
        <h2 className="text-base font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
          Top News
        </h2>
        <div className="border-t-2 border-[#2d6a4f]">
          {topNews.map((article, i) => (
            <ArticleCardEn key={article.id} article={article} variant="list" rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Category Links */}
      <section>
        <h2 className="text-base font-black text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#2d6a4f] rounded-full inline-block" />
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/en/${cat.slug}`}
              className="flex flex-col items-center justify-center py-5 border border-gray-200 rounded-sm hover:border-[#2d6a4f] hover:bg-[#f0faf4] transition-colors group"
            >
              <span className="text-sm font-bold text-gray-700 group-hover:text-[#2d6a4f] transition-colors">
                {EN_CATEGORY_LABELS[cat.slug] || cat.labelEn}
              </span>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
