import Link from "next/link";

export const metadata = {
  title: "이용약관 | CannabisInsight",
  description: "CannabisInsight 이용약관",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1">
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">홈</Link>
        <span>/</span>
        <span className="text-gray-600">이용약관</span>
      </nav>

      <h1 className="text-3xl font-black text-gray-900 mb-2">이용약관</h1>
      <p className="text-sm text-gray-400 mb-8">최종 업데이트: 2026년 5월 15일</p>
      <hr className="border-[#2d6a4f] border-t-2 mb-10" />

      <div className="prose prose-gray max-w-none space-y-10 text-sm text-gray-700 leading-loose">

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제1조 (목적)</h2>
          <p>
            본 약관은 CannabisInsight(이하 &quot;회사&quot;)가 운영하는 웹사이트 <strong>cannabisinsight.kr</strong>(이하 &quot;사이트&quot;)의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제2조 (서비스의 내용)</h2>
          <p>사이트는 대마(Cannabis) 산업·정책·과학 분야의 국내외 뉴스를 큐레이션하여 정보 제공 목적으로 운영됩니다. 제공되는 콘텐츠는 다음을 포함합니다.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>국내외 대마 관련 뉴스 요약 및 큐레이션</li>
            <li>정책·규제 동향 분석</li>
            <li>R&amp;D·기술 연구 소개</li>
            <li>산업·비즈니스 정보</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제3조 (지적재산권)</h2>
          <p>
            사이트 내 CannabisInsight가 직접 작성한 콘텐츠(요약문, 편집 내용 등)의 저작권은 회사에 귀속됩니다.
            외부 언론사·기관의 기사를 요약·인용한 경우, 원문의 저작권은 해당 언론사·기관에 있으며 각 기사 하단에 출처를 명시합니다.
            이용자는 회사의 사전 동의 없이 사이트 콘텐츠를 상업적으로 복제·배포·전송할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제4조 (면책 조항)</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-sm mb-4">
            <p className="font-semibold text-yellow-800 mb-1">중요 고지</p>
            <p className="text-yellow-700">
              본 사이트는 <strong>정보 제공만을 목적</strong>으로 하며, 법적·의학적·투자 조언을 제공하지 않습니다.
              대마 관련 법령은 국가·지역마다 상이하므로, 실제 행동 전 반드시 해당 지역의 법률 전문가와 상담하시기 바랍니다.
            </p>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>회사는 사이트 콘텐츠의 정확성·완전성을 보증하지 않습니다.</li>
            <li>콘텐츠 이용으로 발생한 손해에 대해 회사는 책임을 지지 않습니다.</li>
            <li>외부 링크(원문 출처)의 내용에 대해 회사는 책임을 지지 않습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제5조 (금지 행위)</h2>
          <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>사이트 콘텐츠의 무단 복제·상업적 이용</li>
            <li>사이트 운영을 방해하는 행위(DDoS, 크롤링 남용 등)</li>
            <li>타인의 권리를 침해하는 행위</li>
            <li>관련 법령을 위반하는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제6조 (서비스 변경 및 중단)</h2>
          <p>
            회사는 운영상·기술상 필요에 따라 서비스 내용을 변경하거나 중단할 수 있습니다.
            중요한 변경 사항은 사이트를 통해 사전 고지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제7조 (준거법 및 분쟁 해결)</h2>
          <p>
            본 약관은 대한민국 법령에 따라 해석되며, 분쟁 발생 시 회사 소재지 관할 법원을 전속 관할 법원으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">제8조 (문의)</h2>
          <p>약관에 관한 문의는 아래로 연락하시기 바랍니다.</p>
          <p className="mt-2 font-medium text-[#2d6a4f]">contact@cannabisinsight.kr</p>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-400">
        <Link href="/privacy" className="hover:text-[#2d6a4f] transition-colors mr-4">개인정보처리방침 보기</Link>
        <Link href="/" className="hover:text-[#2d6a4f] transition-colors">← 홈으로</Link>
      </div>
    </div>
  );
}
