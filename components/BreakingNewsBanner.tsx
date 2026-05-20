"use client";

import { useEffect, useRef, useState } from "react";
import { BREAKING_NEWS } from "@/lib/data";
import Link from "next/link";

export default function BreakingNewsBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const currentNews = BREAKING_NEWS[index];

  return (
    <div className="w-full bg-[#2d6a4f] text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 h-9">
        <span className="shrink-0 bg-white text-[#2d6a4f] text-[11px] font-black px-2 py-0.5 rounded-sm tracking-wide uppercase">
          속보
        </span>
        <Link
          href={currentNews.link}
          className={`text-sm font-medium truncate transition-opacity duration-300 hover:underline decoration-white/50 underline-offset-4 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentNews.text}
        </Link>
      </div>
    </div>
  );
}
