"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
    document.documentElement.lang = isEnglish ? "en" : "ko";
    document.documentElement.dir = "ltr";
  }, [pathname]);

  return null;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
