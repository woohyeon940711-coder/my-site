import { LEGISLATIONS, ARTICLES, LegislationStatus } from "@/lib/data";
import Link from "next/link";

const STATUS_STEPS: LegislationStatus[] = [
  "접수",
  "위원회 심사",
  "체계자구 심사",
  "본회의 심의",
  "정부이송",
  "공포",
];

const STATUS_COLOR: Record<LegislationStatus, string> = {
  "접수": "bg-gray-400",
  "위원회 심사": "bg-yellow-500",
  "체계자구 심사": "bg-orange-500",
  "본회의 심의": "bg-blue-600",
  "정부이송": "bg-indigo-600",
  "공포": "bg-[#2d6a4f]",
};

const STATUS_BADGE: Record<LegislationStatus, string> = {
  "접수": "bg-gray-100 text-gray-600",
  "위원회 심사": "bg-yellow-100 text-yellow-700",
  "체계자구 심사": "bg-orange-100 text-orange-700",
  "본회의 심의": "bg-blue-100 text-blue-700",
  "정부이송": "bg-indigo-100 text-indigo-700",
  "공포": "bg-green-100 text-[#2d6a4f]",
};

function ProgressBar({ status }: { status: LegislationStatus }) {
  const currentIdx = STATUS_STEPS.indexOf(status);
  return (
    <div className="mt-4 mb-2">
      <div className="flex items-center gap-0">
        {STATUS_STEPS.map((step, i) => {
          const isCompleted = i <= currentIdx;
          const isCurrent = i === currentIdx;
          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all ${
                    isCompleted
                      ? `${STATUS_COLOR[status]} border-transparent`
                      : "bg-white border-gray-300"
                  } ${isCurrent ? "ring-2 ring-offset-1 ring-current" : ""}`}
                />
                <span
                  className={`text-[9px] mt-1 text-center leading-tight w-12 ${
                    isCurrent ? "font-bold text-gray-800" : isCompleted ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
              {i < STATUS_STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mb-4 ${
                    i < currentIdx ? STATUS_COLOR[status] : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LegislationPage() {
  const latestArticles = ARTICLES.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">입법동향</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-[#2d6a4f] pb-3 mb-8">
        <h1 className="text-2xl font-black text-gray-900">
          입법동향
          <span className="ml-2 text-sm font-normal text-gray-400 uppercase tracking-widest">
            Legislation
          </span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          대마·헴프·CBD 관련 국내 법안의 발의 현황 및 심사 진행 상태를 추적합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {LEGISLATIONS.length === 0 ? (
            <p className="text-gray-400 text-sm py-16 text-center">
              등록된 법안이 없습니다.
            </p>
          ) : (
            LEGISLATIONS.map((law) => (
              <div
                key={law.id}
                className="border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f] transition-colors"
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">
                        의안번호 {law.billNo}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[law.status]}`}
                      >
                        {law.status}
                      </span>
                      {law.proposedDate === new Date().toISOString().slice(0, 10) && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 animate-pulse">
                          오늘 발의
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-black text-gray-900 leading-snug">
                      {law.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {law.proposer} 등 {law.proposerCount}인 &middot; 발의일 {law.proposedDate} &middot; 소관위 {law.committee}
                    </p>
                  </div>
                  <a
                    href={law.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs border border-[#2d6a4f] text-[#2d6a4f] px-3 py-1.5 rounded-sm hover:bg-[#2d6a4f] hover:text-white transition-colors"
                  >
                    국회 원문 →
                  </a>
                </div>

                {/* Progress bar */}
                <ProgressBar status={law.status} />

                {/* Summary */}
                <p className="text-sm text-gray-700 leading-relaxed mt-4 mb-4">
                  {law.summary}
                </p>

                {/* Key points */}
                <div className="bg-gray-50 rounded-sm p-4">
                  <h3 className="text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">
                    주요 내용
                  </h3>
                  <ul className="space-y-1.5">
                    {law.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#2d6a4f] font-bold mt-0.5 shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {law.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}

          {/* Notice */}
          <div className="border border-gray-200 rounded-sm p-4 bg-gray-50">
            <p className="text-xs text-gray-500 leading-relaxed">
              본 페이지는 국회 의안정보시스템의 공개 데이터를 기반으로 작성되었습니다.
              법안의 심사 진행 상태는 실시간으로 반영되지 않을 수 있으며, 정확한 현황은{" "}
              <a
                href="https://likms.assembly.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d6a4f] underline"
              >
                국회 의안정보시스템
              </a>
              에서 확인하시기 바랍니다.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="border border-gray-200 rounded-sm p-4 mb-6">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              법안 현황 요약
            </h3>
            <ul className="space-y-2">
              {LEGISLATIONS.map((law) => (
                <li key={law.id} className="flex items-center justify-between text-xs text-gray-600 py-1 border-b border-gray-50 last:border-0">
                  <span className="truncate mr-2">{law.proposer}</span>
                  <span className={`shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded-full ${STATUS_BADGE[law.status]}`}>
                    {law.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              최신 뉴스
            </h3>
            <ul className="space-y-3">
              {latestArticles.map((article, i) => (
                <li key={article.id}>
                  <Link
                    href={`/${article.category}/${article.id}`}
                    className="group flex gap-2"
                  >
                    <span className="text-lg font-black text-[#2d6a4f] w-5 shrink-0 leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
                      {article.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
