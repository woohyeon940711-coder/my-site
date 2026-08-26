import type { Metadata } from "next";
import CategoryPageEn from "@/components/CategoryPageEn";
import { categoryMetadata } from "@/lib/seo";

export const metadata: Metadata = categoryMetadata("domestic", "en");

export default function EnCategoryRoute() {
  return <CategoryPageEn slug="domestic" />;
}
