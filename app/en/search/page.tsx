import { Suspense } from "react";
import type { Metadata } from "next";
import SearchContent from "@/app/search/SearchContent";

export const metadata: Metadata = {
  title: "Search Articles | CannabisInsight",
  description: "Search CannabisInsight's curated Korean and global cannabis, hemp, CBD, policy, and research news.",
  alternates: {
    canonical: "https://www.cannabisinsight.kr/en/search",
    languages: { ko: "https://www.cannabisinsight.kr/search" },
  },
};

export default function EnSearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-400 text-sm">Searching…</div>}>
      <SearchContent lang="EN" />
    </Suspense>
  );
}
