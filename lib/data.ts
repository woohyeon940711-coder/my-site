export type Category =
  | "domestic"
  | "global"
  | "policy"
  | "rnd"
  | "insight"
  | "guide";

export interface Article {
  id: number;
  title: string;
  summary: string;
  category: Category;
  categoryLabel: string;
  date: string;
  image?: string;
  featured?: boolean;
}

export const CATEGORIES: { slug: Category; label: string; labelEn: string }[] = [
  { slug: "domestic", label: "국내", labelEn: "Domestic" },
  { slug: "global", label: "글로벌", labelEn: "Global" },
  { slug: "policy", label: "정책·규제", labelEn: "Policy" },
  { slug: "rnd", label: "R&D·기술", labelEn: "R&D" },
  { slug: "insight", label: "인사이트", labelEn: "Insight" },
  { slug: "guide", label: "가이드", labelEn: "Guide" },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "국내 의료용 대마 처방 건수 전년 대비 42% 급증…환자 접근성 확대 효과",
    summary:
      "식품의약품안전처가 발표한 2025년 의료용 대마 처방 통계에 따르면 전년 대비 42% 증가한 것으로 나타났다. 희귀·난치성 질환 환자들의 접근성이 높아진 것이 주요 원인으로 분석된다.",
    category: "domestic",
    categoryLabel: "국내",
    date: "2026-05-11",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "독일, 기호용 대마 합법화 1년…관광 수요 증가·세수 확대 효과 확인",
    summary:
      "독일이 기호용 대마 합법화 1주년을 맞아 발표한 보고서에서 관련 세수가 예상치를 30% 초과했으며, 의료 관광 수요도 증가한 것으로 나타났다.",
    category: "global",
    categoryLabel: "글로벌",
    date: "2026-05-10",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: 3,
    title: "식약처, 의료용 대마 성분 의약품 신규 품목 허가 절차 간소화 추진",
    summary:
      "식품의약품안전처가 의료용 대마 성분 의약품의 허가 심사 기간을 현행 180일에서 90일로 단축하는 방안을 검토 중이다.",
    category: "policy",
    categoryLabel: "정책·규제",
    date: "2026-05-09",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: 4,
    title: "KAIST 연구팀, CBD 기반 신경 보호 메커니즘 규명…치매 치료 가능성 제시",
    summary:
      "KAIST 바이오및뇌공학과 연구팀이 카나비디올(CBD)이 신경 세포 사멸을 억제하는 분자 메커니즘을 세계 최초로 규명했다고 밝혔다.",
    category: "rnd",
    categoryLabel: "R&D·기술",
    date: "2026-05-08",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  },
  {
    id: 5,
    title: "2026 글로벌 대마 산업 전망: 아시아 시장이 새로운 성장 엔진으로 부상",
    summary:
      "글로벌 시장조사기관 Grand View Research가 발표한 보고서에 따르면 2026년 아시아 대마 시장 규모가 전년 대비 65% 성장할 것으로 전망된다.",
    category: "insight",
    categoryLabel: "인사이트",
    date: "2026-05-07",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 6,
    title: "국내 CBD 제품 구매 완벽 가이드: 합법 제품 선별 방법과 주의사항",
    summary:
      "국내에서 합법적으로 구매 가능한 CBD 제품의 종류와 선별 기준, 그리고 불법 제품을 구분하는 방법을 상세히 안내한다.",
    category: "guide",
    categoryLabel: "가이드",
    date: "2026-05-06",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
  },
  {
    id: 7,
    title: "한국 헴프 산업 육성 특별법 국회 본회의 통과…산업용 대마 재배 허용 확대",
    summary:
      "산업용 헴프 재배 및 가공을 허용하는 특별법이 국회 본회의를 통과했다. 이에 따라 THC 0.3% 이하 헴프의 상업적 재배가 전국으로 확대될 전망이다.",
    category: "domestic",
    categoryLabel: "국내",
    date: "2026-05-05",
    image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&q=80",
  },
  {
    id: 8,
    title: "태국, 대마 재규제 이후 CBD 관광 산업 새 활로 모색",
    summary:
      "태국 정부가 기호용 대마를 재규제한 이후 CBD 웰니스 관광 상품을 새로운 수익원으로 육성하는 정책을 발표했다.",
    category: "global",
    categoryLabel: "글로벌",
    date: "2026-05-04",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: 9,
    title: "EU, 대마 성분 식품 첨가물 기준 통일 추진…국내 수출 기업 영향 주목",
    summary:
      "유럽연합이 CBD를 포함한 대마 성분 식품 첨가물에 대한 통일된 안전 기준을 마련하기로 했다. 국내 관련 기업들의 대EU 수출 전략 수정이 불가피할 전망이다.",
    category: "policy",
    categoryLabel: "정책·규제",
    date: "2026-05-03",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    id: 10,
    title: "서울대 약학대학, 대마 유래 항암 물질 신규 합성 경로 개발 성공",
    summary:
      "서울대학교 약학대학 연구팀이 대마 유래 항암 활성 물질의 신규 합성 경로를 개발하는 데 성공했다. 이번 연구 결과는 국제 학술지 Nature Chemistry에 게재됐다.",
    category: "rnd",
    categoryLabel: "R&D·기술",
    date: "2026-05-02",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  },
];

export const BREAKING_NEWS = [
  "속보: 식약처, 의료용 대마 처방 대상 질환 5개 추가 발표",
  "속보: 독일 대마 합법화 1년 세수 목표치 130% 달성",
  "속보: 국내 최초 CBD 전문 클리닉 서울 강남구 개원",
  "속보: KAIST, CBD 기반 치매 치료제 임상 1상 승인",
];
