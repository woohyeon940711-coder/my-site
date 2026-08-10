import { ARTICLES, CATEGORIES, Category } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return hostname;
  } catch {
    return url;
  }
}

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

interface Props {
  category: Category;
  id: number;
}

export default function ArticleDetailEn({ category, id }: Props) {
  const article = ARTICLES.find((a) => a.id === id && a.category === category);
  if (!article) notFound();

  const catInfo = CATEGORIES.find((c) => c.slug === category)!;
  const catLabel = EN_CATEGORY_LABELS[category] || catInfo.labelEn;
  const title = article.titleEn || article.title;
  const summary = article.summaryEn || article.summary;

  const related = ARTICLES.filter(
    (a) => a.category === category && a.id !== id
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/en/${category}`} className="hover:text-[#2d6a4f] transition-colors">
          {catLabel}
        </Link>
        <span>/</span>
        <span className="text-gray-600 truncate max-w-xs">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Article body */}
        <article className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-white bg-[#2d6a4f] px-2 py-0.5 rounded-sm uppercase tracking-wide">
              {catLabel}
            </span>
            {article.country && (
              <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm">
                {article.country}
              </span>
            )}
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
            {title}
          </h1>

          <hr className="border-[#2d6a4f] border-t-2 mb-6" />

          {article.image && (
            <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={article.image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          <div className="prose prose-gray max-w-none">
            <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium border-l-4 border-[#2d6a4f] pl-4 bg-[#f0faf4] py-3 rounded-r-sm">
              {summary}
            </p>
            <p className="text-sm text-gray-500 leading-loose">
              For the full article, please visit the original source link below. CannabisInsight curates and summarizes key news from the global cannabis and hemp industry.
            </p>
          </div>

          {article.link && article.link !== "None" && (
            <div className="mt-8 space-y-3">
              <div className="p-4 border-l-4 border-[#2d6a4f] bg-[#f0faf4] rounded-r-sm">
                <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Source</p>
                <p className="text-sm text-gray-700 font-medium">{extractDomain(article.link)}</p>
                <p className="text-xs text-gray-400 mt-1">
                  This content is a summary and editorial by CannabisInsight based on the above source. Copyright of the original article belongs to the respective publisher.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-sm bg-gray-50 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Original Link</p>
                  <p className="text-sm text-gray-600 truncate max-w-sm">{article.link}</p>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-4 text-sm font-bold text-white bg-[#2d6a4f] hover:bg-[#1e4d38] transition-colors px-4 py-2 rounded-sm"
                >
                  Read Original →
                </a>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              #{catLabel}
            </span>
            {article.country && (
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                #{article.country}
              </span>
            )}
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">#Cannabis</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">#Hemp</span>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Link
            href={`/en/${category}`}
            className="flex items-center gap-2 text-sm font-bold text-[#2d6a4f] hover:underline mb-6"
          >
            ← Back to {catLabel}
          </Link>

          {related.length > 0 && (
            <div className="border border-gray-200 rounded-sm p-4">
              <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Related Articles
              </h3>
              <ul className="space-y-4">
                {related.map((rel) => (
                  <li key={rel.id}>
                    <Link href={`/en/${rel.category}/${rel.id}`} className="group block">
                      {rel.image && (
                        <div className="relative w-full aspect-video mb-2 overflow-hidden rounded-sm bg-gray-100">
                          <Image
                            src={rel.image}
                            alt={rel.titleEn || rel.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="200px"
                          />
                        </div>
                      )}
                      <p className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
                        {rel.titleEn || rel.title}
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
