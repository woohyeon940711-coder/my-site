import type { Metadata } from "next";
import type { Article, Category } from "@/lib/data";

export const SITE_URL = "https://www.cannabisinsight.kr";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/icon-512.png`;

type Locale = "ko" | "en";

const CATEGORY_SEO: Record<Category, { ko: { title: string; description: string }; en: { title: string; description: string } }> = {
  domestic: {
    ko: { title: "국내 대마 산업 뉴스", description: "국내 의료용 대마, CBD, 산업용 헴프 정책과 기업·연구 동향을 전하는 CannabisInsight 국내 뉴스입니다." },
    en: { title: "Korea Cannabis News", description: "Korea-focused cannabis, CBD, medical hemp policy, business and research news from CannabisInsight." },
  },
  global: {
    ko: { title: "글로벌 대마 산업 뉴스", description: "미국·유럽·아시아 등 주요 국가의 대마 정책, 시장, 기업과 산업 동향을 전하는 CannabisInsight 글로벌 뉴스입니다." },
    en: { title: "Global Cannabis News", description: "Cannabis policy, market, business and industry developments from major markets worldwide." },
  },
  policy: {
    ko: { title: "대마 정책·규제 뉴스", description: "대마·CBD·헴프 관련 법안, 규제, 합법화 및 정부 정책 변화를 심층적으로 정리합니다." },
    en: { title: "Cannabis Policy & Regulation", description: "In-depth cannabis, CBD and hemp policy, legislation, regulation and legal reform news." },
  },
  rnd: {
    ko: { title: "대마 R&D·기술 뉴스", description: "CBD, 카나비노이드, 헴프 소재와 의료·바이오 연구, 기술 개발 소식을 전합니다." },
    en: { title: "Cannabis R&D & Technology", description: "CBD, cannabinoid, hemp materials, medical research and technology development news." },
  },
  insight: {
    ko: { title: "대마 산업 인사이트", description: "대마 산업의 시장 구조, 투자, 정책 변화와 핵심 이슈를 분석하는 CannabisInsight 인사이트입니다." },
    en: { title: "Cannabis Industry Insights", description: "Analysis of cannabis industry market structure, investment, policy changes and key issues." },
  },
  guide: {
    ko: { title: "대마·헴프 가이드", description: "대마, CBD, 헴프와 관련 제도·용어·산업 정보를 이해하기 쉽게 정리한 CannabisInsight 가이드입니다." },
    en: { title: "Cannabis & Hemp Guide", description: "Clear guides to cannabis, CBD, hemp, industry terminology and related regulations." },
  },
  industry: {
    ko: { title: "대마 산업 뉴스", description: "대마 산업의 기업, 투자, 유통과 시장 동향을 전합니다." },
    en: { title: "Cannabis Industry News", description: "Cannabis business, investment, distribution and market news." },
  },
  hemp: {
    ko: { title: "헴프 가이드", description: "산업용 헴프와 관련 기술, 활용, 정책 정보를 정리합니다." },
    en: { title: "Hemp Guide", description: "Industrial hemp technology, applications and policy information." },
  },
};

export function localizedPath(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? `/en${normalized === "/" ? "" : normalized}` : normalized;
}

export function alternatesFor(path: string, locale: Locale) {
  const krPath = path.startsWith("/en/") ? path.replace(/^\/en/, "") : path === "/en" ? "/" : path;
  const normalized = krPath.startsWith("/") ? krPath : `/${krPath}`;
  const koUrl = `${SITE_URL}${normalized}`;
  const enUrl = `${SITE_URL}${localizedPath(normalized, "en")}`;
  return {
    canonical: locale === "ko" ? koUrl : enUrl,
    languages: {
      ko: koUrl,
      en: enUrl,
      "x-default": koUrl,
    },
  };
}

export function categoryMetadata(slug: Category, locale: Locale): Metadata {
  const copy = CATEGORY_SEO[slug][locale];
  const path = `/${slug}`;
  const url = `${SITE_URL}${localizedPath(path, locale)}`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: alternatesFor(path, locale),
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: "CannabisInsight",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: "CannabisInsight" }],
    },
  };
}

function truncated(text: string, limit = 155) {
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

export function articleMetadata(article: Article, locale: Locale): Metadata {
  const title = locale === "en" ? article.titleEn || article.title : article.title;
  const summary = locale === "en" ? article.summaryEn || article.summary : article.summary;
  const path = `/${article.category}/${article.id}`;
  const url = `${SITE_URL}${localizedPath(path, locale)}`;
  return {
    title,
    description: truncated(summary),
    keywords: locale === "en"
      ? ["cannabis", "hemp", "CBD", "cannabis policy", "CannabisInsight"]
      : ["대마", "헴프", "CBD", "의료용 대마", "카나비스인사이트", "CannabisInsight"],
    alternates: alternatesFor(path, locale),
    openGraph: {
      title,
      description: truncated(summary),
      url,
      siteName: "CannabisInsight",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image || DEFAULT_OG_IMAGE, width: 800, height: 450, alt: title }],
    },
  };
}

export function articleJsonLd(article: Article, locale: Locale) {
  const title = locale === "en" ? article.titleEn || article.title : article.title;
  const summary = locale === "en" ? article.summaryEn || article.summary : article.summary;
  const path = `/${article.category}/${article.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: truncated(summary),
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${SITE_URL}${localizedPath(path, locale)}`,
    image: [article.image || DEFAULT_OG_IMAGE],
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "CannabisInsight",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE },
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CannabisInsight",
    alternateName: ["카나비스인사이트", "칸나비스인사이트", "캐너비스 인사이트"],
    url: `${SITE_URL}${locale === "en" ? "/en" : ""}`,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "CannabisInsight",
      url: SITE_URL,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CannabisInsight",
    alternateName: ["카나비스인사이트", "Cannabis Insight"],
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    email: "contact@cannabisinsight.kr",
  };
}

export function legislationMetadata(locale: Locale): Metadata {
  const title = locale === "ko" ? "대한민국 대마·헴프 입법동향" : "Korean Cannabis Legislation";
  const description = locale === "ko"
    ? "국회에서 발의된 대마·헴프·CBD 관련 법안의 발의 현황, 소관위원회 심사 및 입법 진행 상태를 추적합니다."
    : "Track Korean National Assembly bills related to cannabis, hemp and CBD, including proposals, committee reviews and legislative progress.";
  const path = "/legislation";
  const url = `${SITE_URL}${localizedPath(path, locale)}`;
  return {
    title,
    description,
    alternates: alternatesFor(path, locale),
    openGraph: {
      title,
      description,
      url,
      siteName: "CannabisInsight",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: "CannabisInsight" }],
    },
  };
}

export function legislationJsonLd(locale: Locale) {
  const name = locale === "ko" ? "대한민국 대마·헴프 입법동향" : "Korean Cannabis Legislation";
  const description = locale === "ko"
    ? "국회에서 발의된 대마·헴프·CBD 관련 법안의 입법 진행 상태를 추적합니다."
    : "A tracker for cannabis, hemp and CBD legislation in the National Assembly of the Republic of Korea.";
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${localizedPath("/legislation", locale)}`,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    isPartOf: { "@type": "WebSite", name: "CannabisInsight", url: SITE_URL },
  };
}
