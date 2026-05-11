import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/data";

interface Props {
  article: Article;
  variant?: "featured" | "card" | "list";
  rank?: number;
}

export default function ArticleCard({ article, variant = "card", rank }: Props) {
  const href = `/${article.category}/${article.id}`;

  if (variant === "featured") {
    return (
      <Link href={href} className="group block">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-block bg-[#2d6a4f] text-white text-[11px] font-bold px-2 py-0.5 mb-2 rounded-sm uppercase tracking-wide">
              {article.categoryLabel}
            </span>
            <h2 className="text-white text-xl md:text-2xl font-bold leading-snug line-clamp-2 group-hover:underline">
              {article.title}
            </h2>
            <p className="text-gray-300 text-sm mt-1 line-clamp-2">{article.summary}</p>
            <p className="text-gray-400 text-xs mt-2">{article.date}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "list") {
    return (
      <Link href={href} className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
        <span className="shrink-0 text-2xl font-black text-[#2d6a4f] w-7 leading-none mt-0.5">
          {rank}
        </span>
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-semibold text-[#2d6a4f] uppercase tracking-wide">
            {article.categoryLabel}
          </span>
          <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors mt-0.5">
            {article.title}
          </p>
          <p className="text-xs text-gray-400 mt-1">{article.date}</p>
        </div>
      </Link>
    );
  }

  // default: card
  return (
    <Link href={href} className="group flex flex-col">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-gray-100">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        )}
      </div>
      <div className="pt-3 flex flex-col gap-1">
        <span className="text-[11px] font-semibold text-[#2d6a4f] uppercase tracking-wide">
          {article.categoryLabel}
        </span>
        <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {article.summary}
        </p>
        <p className="text-xs text-gray-400 mt-1">{article.date}</p>
      </div>
    </Link>
  );
}
