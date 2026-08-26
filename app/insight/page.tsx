import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryMetadata } from "@/lib/seo";

export const metadata: Metadata = categoryMetadata("insight", "ko");

export default function CategoryRoute() {
  return <CategoryPage slug="insight" />;
}
