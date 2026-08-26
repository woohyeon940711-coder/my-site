import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "content-language": "en",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
