import CategoryPageEn from "@/components/CategoryPageEn";
import type { Metadata } from "next";

const EN_LABELS: Record<string, string> = {
  policy: "Policy & Regulation",
  global: "Global",
  rnd: "R&D & Tech",
  domestic: "Korea",
  industry: "Industry",
  hemp: "Hemp Guide",
  insight: "Insight",
  guide: "Guide",
};

export const metadata: Metadata = {
  title: `${EN_LABELS["guide"]} | CannabisInsight`,
  description: `Latest cannabis and hemp ${EN_LABELS["guide"].toLowerCase()} news from CannabisInsight.`,
  alternates: {
    canonical: `https://www.cannabisinsight.kr/en/guide`,
    languages: { "ko": `https://www.cannabisinsight.kr/guide` },
  },
};

export default function EnCategoryPage() {
  return <CategoryPageEn slug="guide" />;
}
