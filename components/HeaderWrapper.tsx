"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  return <Header lang={isEn ? "EN" : "KR"} />;
}
