export type CareerEntry = {
  id: string;
  year: string;
  cat: '学歴' | '職歴';
  badge: string;
  label: string;
  sub?: string;
  note: string;
  href?: string;
  landmark: string;
  tint: string;
  accent: string;
};

export const CAREER_ENTRIES: CareerEntry[] = [
  {
    id: 'jhs',
    year: '2022.03',
    cat: '学歴',
    badge: '卒業',
    label: '秋田南中学校 卒業',
    note: '義務教育の修了',
    landmark: 'LM_JUNIOR_HIGH',
    tint: '#fff4dc',
    accent: '#c98a2b',
  },
  {
    id: 'highschool',
    year: '2022 — 2023',
    cat: '学歴',
    badge: '中退',
    label: '秋田令和高等学校',
    sub: '2年次途中で退学',
    note: '大学受験のために大きな決断をし、努力を開始',
    href: 'https://www.akitareiwa-h.ed.jp/',
    landmark: 'LM_GATE',
    tint: '#ececee',
    accent: '#6b6e76',
  },
  {
    id: 'beniya',
    year: '2022 夏',
    cat: '職歴',
    badge: '短期',
    sub: '短期アルバイト',
    label: '紅谷商事株式会社',
    note: '社会との最初の接点',
    landmark: 'LM_SHOP',
    tint: '#fbe8d2',
    accent: '#b9682a',
  },
  {
    id: 'iu',
    year: '2025.4 — 現在',
    cat: '学歴',
    badge: '在学中',
    label: '情報経営イノベーション専門職大学（iU）',
    note: 'ビジネス × IT を実践で学ぶフィールドへ',
    href: 'https://www.i-u.ac.jp/',
    landmark: 'LM_UNIVERSITY',
    tint: '#e6efff',
    accent: '#3565d6',
  },
  {
    id: 'mizuki',
    year: '2025 3月',
    cat: '職歴',
    badge: '短期',
    label: '㈱みづき',
    sub: 'ブーケティング低温センター',
    note: '花束の制作から出荷までの業務を経験',
    landmark: 'LM_WAREHOUSE',
    tint: '#e4eef2',
    accent: '#4a7a8c',
  },
  {
    id: 'kpass',
    year: '2025.11 — 2026.04',
    cat: '職歴',
    badge: '案件',
    label: 'K-PASS 様',
    sub: 'HP・予約システム',
    note: '初めてのお仕事としての開発',
    landmark: 'LM_LAPTOP',
    tint: '#fff0c8',
    accent: '#b8861e',
  },
  {
    id: 'onigo',
    year: '2025.12 — 現在',
    cat: '職歴',
    badge: '継続中',
    label: '株式会社 Onigo',
    note: '商品をスーパーから持ってきて、配達員に渡す',
    landmark: 'LM_OFFICE',
    tint: '#fde2ea',
    accent: '#c44f6e',
  },
  {
    id: 'teach',
    year: '2026.05 — 現在',
    cat: '職歴',
    badge: '継続中',
    label: 'Teach Leader',
    sub: 'システム機能開発',
    note: 'プロダクトの機能拡張を担当。最前線へ。',
    landmark: 'LM_OFFICE',
    tint: '#e2eee6',
    accent: '#3f8163',
  },
];
