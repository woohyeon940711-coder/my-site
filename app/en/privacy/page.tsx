import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CannabisInsight",
  description: "CannabisInsight privacy policy covering data collection, use, retention, and user rights.",
  alternates: {
    canonical: "https://www.cannabisinsight.kr/en/privacy",
    languages: { ko: "https://www.cannabisinsight.kr/privacy" },
  },
};

export default function EnPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1">
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-600">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: May 15, 2026</p>
      <hr className="border-[#2d6a4f] border-t-2 mb-10" />

      <div className="prose prose-gray max-w-none space-y-10 text-sm text-gray-700 leading-loose">
        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">1. Purpose</h2>
          <p>
            CannabisInsight (the “Company”) values the privacy of its users and complies with the Personal Information Protection Act and other applicable laws.
            This policy explains the purposes, categories, and retention periods for personal information processed through <strong>cannabisinsight.kr</strong> (the “Site”).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">2. Information We Collect and How We Collect It</h2>
          <p>The Site does not currently offer user registration and does not directly collect personal information. The following technical information may be collected automatically:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>IP address, browser type, operating system, visit time, and service-use records through server logs.</li>
            <li>Basic aggregate analytics provided by the Vercel platform, such as page views and visitor counts.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">3. Purpose of Processing</h2>
          <p>Any collected information is used only for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Operating and reliably providing the Site.</li>
            <li>Analyzing service-use statistics and improving quality.</li>
            <li>Preventing unlawful or improper use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">4. Retention Period</h2>
          <p>
            Server logs are retained and deleted according to the Vercel platform&apos;s policies. The Company does not directly collect or store separate personal information.
            Where retention is required by law, information will be kept for the legally required period.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">5. Disclosure to Third Parties</h2>
          <p>
            The Company does not, in principle, provide users&apos; personal information to external parties, except where required by law or in response to a lawful request from an investigative authority.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">6. Cookies</h2>
          <p>
            Minimal technical information may be collected automatically for Site operations. This policy will be updated if additional analytics or statistics features are introduced.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">7. Your Rights</h2>
          <p>You may request access, correction, deletion, or suspension of processing of your personal information at any time by contacting us at the address below.</p>
          <p className="mt-2 font-medium text-[#2d6a4f]">contact@cannabisinsight.kr</p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">8. Privacy Contact</h2>
          <table className="w-full text-sm border border-gray-200 rounded-sm overflow-hidden mt-2">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="bg-gray-50 px-4 py-2 font-semibold w-1/3">Privacy Contact</td>
                <td className="px-4 py-2">CannabisInsight Operations Team</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="bg-gray-50 px-4 py-2 font-semibold">Email</td>
                <td className="px-4 py-2">contact@cannabisinsight.kr</td>
              </tr>
              <tr>
                <td className="bg-gray-50 px-4 py-2 font-semibold">Website</td>
                <td className="px-4 py-2">cannabisinsight.kr</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>This policy may be revised to reflect changes in applicable laws or Site services. Any material update will be notified through the Site or this page.</p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-gray-50 border border-gray-200 rounded-sm text-xs text-gray-500 leading-relaxed">
        Content on this Site is provided for industry-information purposes and does not constitute legal, medical, or investment advice.
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-400">
        <Link href="/en/terms" className="hover:text-[#2d6a4f] transition-colors mr-4">View Terms of Use</Link>
        <Link href="/en" className="hover:text-[#2d6a4f] transition-colors">← Back to Home</Link>
      </div>
    </div>
  );
}
