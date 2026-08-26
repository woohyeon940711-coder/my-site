"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/data";

const domesticIdx = CATEGORIES.findIndex((c) => c.slug === "domestic");
const NAV_ITEMS = [
  ...CATEGORIES.slice(0, domesticIdx + 1).map((c) => ({
    hrefKr: `/${c.slug}`,
    hrefEn: `/en/${c.slug}`,
    label: c.label,
    labelEn: c.labelEn,
  })),
  { hrefKr: "/legislation", hrefEn: "/en/legislation", label: "입법동향", labelEn: "Legislation" },
  ...CATEGORIES.slice(domesticIdx + 1).map((c) => ({
    hrefKr: `/${c.slug}`,
    hrefEn: `/en/${c.slug}`,
    label: c.label,
    labelEn: c.labelEn,
  })),
];

export default function Header({ lang = "KR" }: { lang?: "KR" | "EN" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const isEn = lang === "EN";

  const today = new Date().toLocaleDateString(isEn ? "en-US" : "ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  // KR/EN 전환 시 현재 경로 기반으로 상대 경로 계산
  const switchToKr = () => {
    if (!pathname.startsWith("/en")) {
      router.push("/");
      return;
    }

    const koreanPath = pathname.replace(/^\/en/, "") || "/";
    const hasKoreanCounterpart = [
      "/",
      "/domestic",
      "/global",
      "/policy",
      "/rnd",
      "/insight",
      "/guide",
      "/legislation",
      "/privacy",
      "/terms",
      "/search",
    ].some((route) => koreanPath === route || koreanPath.startsWith(`${route}/`));

    router.push(hasKoreanCounterpart ? koreanPath : "/");
  };

  const switchToEn = () => {
    if (!pathname.startsWith("/en")) {
      router.push("/en" + (pathname === "/" ? "" : pathname));
    } else {
      router.push("/en");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`${isEn ? "/en/search" : "/search"}?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top bar: date + language */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8 text-xs text-gray-500 border-b border-gray-100">
        <span>{today}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={switchToKr}
            className={`font-semibold transition-colors ${!isEn ? "text-[#2d6a4f]" : "text-gray-400 hover:text-gray-600"}`}
          >
            KR
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={switchToEn}
            className={`font-semibold transition-colors ${isEn ? "text-[#2d6a4f]" : "text-gray-400 hover:text-gray-600"}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Logo area */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center py-4">
        <Link href={isEn ? "/en" : "/"} className="flex flex-col items-center gap-1">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-[#2d6a4f] uppercase">
            Cannabis<span className="text-gray-900">Insight</span>
          </span>
          <span className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
            Korea&apos;s Cannabis Business &amp; Policy Media
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-[#2d6a4f]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.hrefKr}>
                <Link
                  href={isEn ? item.hrefEn : item.hrefKr}
                  className="block px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b4332] transition-colors"
                >
                  {isEn ? item.labelEn : item.label}
                </Link>
              </li>
            ))}
            {/* Search button */}
            <li className="ml-auto">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="block px-4 py-3 text-white hover:bg-[#1b4332] transition-colors"
                aria-label={isEn ? "Search" : "검색"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </li>
          </ul>

          {/* Mobile nav toggle */}
          <div className="flex md:hidden items-center justify-between py-2">
            <span className="text-white text-sm font-semibold">{isEn ? "Categories" : "카테고리"}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white p-1"
                aria-label={isEn ? "Search" : "검색"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-1"
                aria-label={isEn ? "Open menu" : "메뉴 열기"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <ul className="md:hidden pb-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.hrefKr}>
                  <Link
                    href={isEn ? item.hrefEn : item.hrefKr}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-white hover:bg-[#1b4332] transition-colors"
                  >
                    {isEn ? item.labelEn : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Search bar dropdown */}
          {searchOpen && (
            <div className="pb-3">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isEn ? "Search keywords..." : "키워드 검색..."}
                  autoFocus
                  className="flex-1 px-3 py-2 text-sm rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-[#95d5b2]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1b4332] text-white text-sm font-semibold rounded-sm hover:bg-black transition-colors"
                >
                  {isEn ? "Search" : "검색"}
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
