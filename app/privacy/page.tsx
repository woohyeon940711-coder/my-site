import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 | CannabisInsight",
  description: "CannabisInsight 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1">
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">홈</Link>
        <span>/</span>
        <span className="text-gray-600">개인정보처리방침</span>
      </nav>

      <h1 className="text-3xl font-black text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-gray-400 mb-8">최종 업데이트: 2026년 5월 15일</p>
      <hr className="border-[#2d6a4f] border-t-2 mb-10" />

      <div className="prose prose-gray max-w-none space-y-10 text-sm text-gray-700 leading-loose">

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제1조 (목적)</h2>
          <p>
            CannabisInsight(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다.
            본 방침은 회사가 운영하는 웹사이트 <strong>cannabisinsight.kr</strong>(이하 &quot;사이트&quot;)에서 수집하는 개인정보의 처리 목적, 항목, 보유 기간 등을 안내합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제2조 (수집하는 개인정보 항목 및 수집 방법)</h2>
          <p>현재 사이트는 회원가입 기능이 없으며, 별도의 개인정보를 직접 수집하지 않습니다. 다만 아래와 같은 정보가 자동으로 수집될 수 있습니다.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>접속 IP 주소, 브라우저 종류, 운영체제, 방문 일시, 서비스 이용 기록 (서버 로그)</li>
            <li>Vercel 플랫폼의 기본 분석 데이터 (페이지뷰, 방문자 수 등 집계 통계)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제3조 (개인정보의 처리 목적)</h2>
          <p>수집된 정보는 다음 목적으로만 사용됩니다.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>서비스 운영 및 안정적인 제공</li>
            <li>서비스 이용 통계 분석 및 품질 개선</li>
            <li>불법·부정 이용 방지</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제4조 (개인정보의 보유 및 이용 기간)</h2>
          <p>
            서버 로그는 Vercel 플랫폼의 정책에 따라 보관·삭제되며, 회사는 별도의 개인정보를 직접 수집·저장하지 않습니다.
            법령에 의해 보존이 필요한 경우에는 해당 기간 동안 보관합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제5조 (개인정보의 제3자 제공)</h2>
          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만 법령의 규정에 의거하거나 수사기관의 요구가 있는 경우에는 예외로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제6조 (쿠키(Cookie) 사용)</h2>
          <p>
            사이트는 서비스 운영을 위한 최소한의 기술적 정보가 자동 수집될 수 있습니다.
            향후 분석·통계 기능 추가 시 본 방침을 업데이트합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제7조 (이용자의 권리)</h2>
          <p>이용자는 언제든지 아래 이메일로 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.</p>
          <p className="mt-2 font-medium text-[#2d6a4f]">contact@cannabisinsight.kr</p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제8조 (개인정보 보호책임자)</h2>
          <table className="w-full text-sm border border-gray-200 rounded-sm overflow-hidden mt-2">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="bg-gray-50 px-4 py-2 font-semibold w-1/3">개인정보 보호 담당</td>
                <td className="px-4 py-2">CannabisInsight 운영팀</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="bg-gray-50 px-4 py-2 font-semibold">이메일</td>
                <td className="px-4 py-2">contact@cannabisinsight.kr</td>
              </tr>
              <tr>
                <td className="bg-gray-50 px-4 py-2 font-semibold">웹사이트</td>
                <td className="px-4 py-2">cannabisinsight.kr</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제9조 (방침 변경)</h2>
          <p>
            본 개인정보처리방침은 법령·서비스 변경에 따라 수정될 수 있습니다.
            변경 시 사이트 공지 또는 본 페이지를 통해 고지합니다.
          </p>
        </section>

      </div>

      <div className="mt-10 p-4 bg-gray-50 border border-gray-200 rounded-sm text-xs text-gray-500 leading-relaxed">
        본 사이트의 콘텐츠는 산업 정보 제공 목적이며, 법률·의학·투자 자문에 해당하지 않습니다.
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-400">
        <Link href="/terms" className="hover:text-[#2d6a4f] transition-colors mr-4">이용약관 보기</Link>
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">← 홈으로</Link>
      </div>
    </div>
  );
}
