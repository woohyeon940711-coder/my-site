import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | CannabisInsight",
  description: "CannabisInsight terms of use for its cannabis, hemp, policy, and research news service.",
  alternates: {
    canonical: "https://www.cannabisinsight.kr/en/terms",
    languages: { ko: "https://www.cannabisinsight.kr/terms" },
  },
};

export default function EnTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1">
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-600">Terms of Use</span>
      </nav>

      <h1 className="text-3xl font-black text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: May 15, 2026</p>
      <hr className="border-[#2d6a4f] border-t-2 mb-10" />

      <div className="prose prose-gray max-w-none space-y-10 text-sm text-gray-700 leading-loose">
        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">1. Purpose</h2>
          <p>
            These Terms of Use govern the rights, obligations, and responsibilities between CannabisInsight (the “Company”) and users in connection with use of <strong>cannabisinsight.kr</strong> (the “Site”).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">2. Service Description</h2>
          <p>The Site curates domestic and international news in the cannabis industry, policy, and science for informational purposes. Content includes:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Curated summaries of Korean and international cannabis news.</li>
            <li>Policy and regulatory developments.</li>
            <li>R&amp;D and technology research coverage.</li>
            <li>Industry and business information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">3. Intellectual Property</h2>
          <p>
            Copyright in content directly created by CannabisInsight, including summaries and editorial material, belongs to the Company. Where the Site summarizes or quotes external media or institutional articles, copyright in the original work remains with the relevant publisher or institution and the source is identified at the bottom of each article. Users may not reproduce, distribute, transmit, or commercially use Site content without prior consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">4. Disclaimer</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-sm mb-4">
            <p className="font-semibold text-yellow-800 mb-1">Important Notice</p>
            <p className="text-yellow-700">
              This Site is provided <strong>for informational purposes only</strong> and does not provide legal, medical, or investment advice. Cannabis laws differ by country and region. Please consult a qualified legal professional in the relevant jurisdiction before taking action.
            </p>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>The Company does not guarantee the accuracy or completeness of Site content.</li>
            <li>The Company is not liable for losses arising from use of Site content.</li>
            <li>The Company is not responsible for the content of external source links.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">5. Prohibited Conduct</h2>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Reproduce or commercially use Site content without authorization.</li>
            <li>Interfere with Site operations, including through DDoS attacks or abusive crawling.</li>
            <li>Infringe the rights of others.</li>
            <li>Violate applicable laws or regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">6. Changes or Suspension of Service</h2>
          <p>The Company may modify or suspend Site services where operational or technical needs require it. Material changes will be announced through the Site in advance where reasonably practicable.</p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">7. Governing Law and Dispute Resolution</h2>
          <p>These Terms are governed by the laws of the Republic of Korea. Any dispute will be subject to the exclusive jurisdiction of the court having jurisdiction over the Company&apos;s place of business.</p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">8. Contact</h2>
          <p>For questions about these Terms, please contact:</p>
          <p className="mt-2 font-medium text-[#2d6a4f]">contact@cannabisinsight.kr</p>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-400">
        <Link href="/en/privacy" className="hover:text-[#2d6a4f] transition-colors mr-4">View Privacy Policy</Link>
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">← Back to Home</Link>
      </div>
    </div>
  );
}
