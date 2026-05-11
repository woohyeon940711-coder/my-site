import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-xl font-black text-[#52b788] uppercase tracking-tight">
              Cannabis<span className="text-white">Insight</span>
            </span>
            <p className="text-xs leading-5 max-w-xs">
              대한민국 대마 산업·정책·과학의 신뢰할 수 있는 미디어.
              <br />
              Korea&apos;s leading cannabis business &amp; policy media.
            </p>
          </div>

          {/* Category links */}
          <div>
            <p className="text-white text-sm font-semibold mb-3">카테고리</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="hover:text-[#52b788] transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="text-xs space-y-1">
            <p className="text-white font-semibold mb-3">안내</p>
            <p>이메일: contact@cannabisinsight.kr</p>
            <p>제보: press@cannabisinsight.kr</p>
            <div className="flex gap-3 mt-3">
              <Link href="#" className="hover:text-[#52b788] transition-colors">
                이용약관
              </Link>
              <Link href="#" className="hover:text-[#52b788] transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center">
          © {new Date().getFullYear()} CannabisInsight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
