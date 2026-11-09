import { Suspense } from "react";
import SearchContent from "./SearchContent";
import type { Metadata } from "next";
import { alternatesFor, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "뉴스 검색",
  description: "CannabisInsight의 대마·헴프·CBD 관련 국내외 뉴스와 연구 요약을 검색합니다.",
  alternates: alternatesFor("/search", "ko"),
  openGraph: {
    title: "뉴스 검색 | CannabisInsight",
    description: "대마·헴프·CBD 관련 뉴스 큐레이션을 검색합니다.",
    url: `${SITE_URL}/search`,
    siteName: "CannabisInsight",
    locale: "ko_KR",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: "CannabisInsight" }],
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-400 text-sm">검색 중...</div>}>
      <SearchContent />
    </Suspense>
  );
}
