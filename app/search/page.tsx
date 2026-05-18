import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-400 text-sm">검색 중...</div>}>
      <SearchContent />
    </Suspense>
  );
}
