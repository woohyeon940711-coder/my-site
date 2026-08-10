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
  title: `${EN_LABELS["domestic"]} | CannabisInsight`,
  description: `Latest cannabis and hemp ${EN_LABELS["domestic"].toLowerCase()} news from CannabisInsight.`,
  alternates: {
    canonical: `https://www.cannabisinsight.kr/en/domestic`,
    languages: { "ko": `https://www.cannabisinsight.kr/domestic` },
  },
};

export default function EnCategoryPage() {
  return <CategoryPageEn slug="domestic" />;
}
