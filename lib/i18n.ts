const COUNTRY_NAMES: Record<string, string> = {
  "한국": "South Korea",
  "대한민국": "South Korea",
  "미국": "United States",
  "캐나다": "Canada",
  "영국": "United Kingdom",
  "호주": "Australia",
  "뉴질랜드": "New Zealand",
  "독일": "Germany",
  "프랑스": "France",
  "스페인": "Spain",
  "포르투갈": "Portugal",
  "이탈리아": "Italy",
  "아일랜드": "Ireland",
  "네덜란드": "Netherlands",
  "덴마크": "Denmark",
  "스위스": "Switzerland",
  "오스트리아": "Austria",
  "폴란드": "Poland",
  "체코": "Czechia",
  "그리스": "Greece",
  "우크라이나": "Ukraine",
  "러시아": "Russia",
  "이스라엘": "Israel",
  "튀르키예": "Türkiye",
  "인도": "India",
  "네팔": "Nepal",
  "중국": "China",
  "일본": "Japan",
  "태국": "Thailand",
  "브라질": "Brazil",
  "아르헨티나": "Argentina",
  "우루과이": "Uruguay",
  "파라과이": "Paraguay",
  "콜롬비아": "Colombia",
  "멕시코": "Mexico",
  "코스타리카": "Costa Rica",
  "남아공": "South Africa",
  "남아프리카공화국": "South Africa",
  "보츠와나": "Botswana",
  "르완다": "Rwanda",
  "우간다": "Uganda",
  "모로코": "Morocco",
  "모리셔스": "Mauritius",
  "국제": "International",
  "글로벌": "Global",
  "유럽": "Europe",
  "EU": "European Union",
};

export function countryNameEn(country?: string): string {
  if (!country) return "";
  return country
    .split(/\s*[/,;·]\s*/)
    .map((part) => COUNTRY_NAMES[part.trim()] || part.trim())
    .join(" / ");
}

export function formatDateEn(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
