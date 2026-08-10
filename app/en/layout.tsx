import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="EN" />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}
