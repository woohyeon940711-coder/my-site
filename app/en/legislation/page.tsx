import { LEGISLATIONS, ARTICLES, LegislationStatus } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/SeoEnhancements";
import { legislationJsonLd, legislationMetadata } from "@/lib/seo";

export const metadata: Metadata = legislationMetadata("en");

const STATUS_STEPS: LegislationStatus[] = [
  "접수",
  "위원회 심사",
  "체계자구 심사",
  "본회의 심의",
  "정부이송",
  "공포",
];

const STATUS_STEPS_EN: Record<LegislationStatus, string> = {
  "접수": "Received",
  "위원회 심사": "Committee Review",
  "체계자구 심사": "Legal Review",
  "본회의 심의": "Plenary Session",
  "정부이송": "Sent to Gov.",
  "공포": "Enacted",
};

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

const representativeName = (proposer: string) => proposer.replace(/의원$/, "");

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
                  className={`text-[9px] mt-1 text-center leading-tight w-14 ${
                    isCurrent ? "font-bold text-gray-800" : isCompleted ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {STATUS_STEPS_EN[step]}
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

export default function EnLegislationPage() {
  const latestArticles = ARTICLES.slice(0, 5);

  return (
    <>
      <JsonLd data={legislationJsonLd("en")} />
      <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">Legislation</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-[#2d6a4f] pb-3 mb-8">
        <h1 className="text-2xl font-black text-gray-900">
          Korean Cannabis Legislation
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Tracking cannabis, hemp, and CBD-related bills in the Korean National Assembly — proposal status and committee review progress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {LEGISLATIONS.length === 0 ? (
            <p className="text-gray-400 text-sm py-16 text-center">
              No bills registered.
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
                        Bill No. {law.billNo}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[law.status]}`}
                      >
                        {STATUS_STEPS_EN[law.status]}
                      </span>
                      {law.proposedDate === new Date().toISOString().slice(0, 10) && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 animate-pulse">
                          Proposed Today
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-black text-gray-900 leading-snug">
                      {law.titleEn || law.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Rep. {representativeName(law.proposer)} et al. ({law.proposerCount} co-sponsors) &middot; Proposed {law.proposedDate} &middot; {law.committeeEn || law.committee}
                    </p>
                  </div>
                  <a
                    href={law.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs border border-[#2d6a4f] text-[#2d6a4f] px-3 py-1.5 rounded-sm hover:bg-[#2d6a4f] hover:text-white transition-colors"
                  >
                    View Bill →
                  </a>
                </div>

                {/* Progress bar */}
                <ProgressBar status={law.status} />

                {/* Summary */}
                <p className="text-sm text-gray-700 leading-relaxed mt-4 mb-4">
                  {law.summaryEn || law.summary}
                </p>

                {/* Key points */}
                <div className="bg-gray-50 rounded-sm p-4">
                  <h3 className="text-xs font-black text-gray-700 mb-2 uppercase tracking-wider">
                    Key Provisions
                  </h3>
                  <ul className="space-y-1.5">
                    {(law.keyPointsEn || law.keyPoints).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#2d6a4f] font-bold mt-0.5 shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {(law.tagsEn || law.tags).map((tag) => (
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
              This page is based on publicly available data from the Korean National Assembly Bill Information System.
              Legislative status may not reflect real-time updates. For the latest information, please visit the{" "}
              <a
                href="https://likms.assembly.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d6a4f] underline"
              >
                National Assembly Bill Information System
              </a>
              .
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="border border-gray-200 rounded-sm p-4 mb-6">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Bill Status Summary
            </h3>
            <ul className="space-y-2">
              {LEGISLATIONS.map((law) => (
                <li key={law.id} className="flex items-center justify-between text-xs text-gray-600 py-1 border-b border-gray-50 last:border-0">
                  <span className="truncate mr-2">Rep. {representativeName(law.proposer)}</span>
                  <span className={`shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded-full ${STATUS_BADGE[law.status]}`}>
                    {STATUS_STEPS_EN[law.status]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-sm font-black text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Latest News
            </h3>
            <ul className="space-y-3">
              {latestArticles.map((article, i) => (
                <li key={article.id}>
                  <Link
                    href={`/en/${article.category}/${article.id}`}
                    className="group flex gap-2"
                  >
                    <span className="text-lg font-black text-[#2d6a4f] w-5 shrink-0 leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors">
                      {article.titleEn || article.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      </div>
    </>
  );
}
