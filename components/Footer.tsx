import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      {/* ── 법적 고지 (Disclaimer) 배너 ── */}
      <div className="bg-[#1a3d2b] border-t-2 border-[#2d6a4f]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-[#74c69d] leading-relaxed">
            <span className="font-bold text-[#95d5b2] mr-1">[법적 고지]</span>
            본 사이트는 대마(Cannabis) 관련 산업·정책·과학 정보를 <strong className="text-[#95d5b2]">정보 제공 목적</strong>으로만 제공합니다.
            본 콘텐츠는 법적·의학적·투자 조언이 아니며, 대마의 생산·소지·유통·사용은 국가 및 지역 법령에 따라 엄격히 규제됩니다.
            대한민국에서 대마는 「마약류 관리에 관한 법률」에 의해 규제되며, 관련 행위는 형사 처벌 대상이 될 수 있습니다.
            실제 행동 전 반드시 해당 지역의 법률 전문가와 상담하시기 바랍니다.
          </p>
        </div>
      </div>

      {/* ── 메인 푸터 ── */}
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
            <p className="text-[10px] text-gray-600 mt-1 leading-relaxed max-w-xs">
              본 사이트에 게재된 외부 기사 요약의 저작권은 원 언론사에 있으며,
              CannabisInsight는 출처를 명시하고 정보 제공 목적으로 인용합니다.
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
              <Link
                href="/terms"
                className="hover:text-[#52b788] transition-colors"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#52b788] transition-colors"
              >
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center space-y-1">
          <p>© {new Date().getFullYear()} CannabisInsight. All rights reserved.</p>
          <p className="text-gray-600">
            본 사이트는 정보 제공 목적으로 운영되며, 대마 관련 법령 준수는 이용자 본인의 책임입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
