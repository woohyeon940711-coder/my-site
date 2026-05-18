import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "CannabisInsight — 대한민국 대마 산업·정책 미디어",
  description:
    "국내외 대마 산업, 정책·규제, R&D·기술, 글로벌 동향을 가장 빠르고 정확하게 전달하는 대한민국 대표 대마 전문 미디어입니다.",
  keywords: ["대마", "CBD", "헴프", "의료용 대마", "대마 정책", "cannabis", "CBD 뉴스"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "CannabisInsight",
    description: "대한민국 대마 산업·정책 미디어",
    url: "https://www.cannabisinsight.kr",
    siteName: "CannabisInsight",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white font-[var(--font-noto-sans-kr)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
