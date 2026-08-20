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
    note: '義務教育を修了しました。',
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
    note: '2年生の初めの頃に中途退学しました。',
    landmark: 'LM_HIGH_SCHOOL',
    tint: '#ececee',
    accent: '#6b6e76',
  },
  {
    id: 'beniya',
    year: '2022 夏',
    cat: '職歴',
    badge: '退職',
    sub: '短期アルバイト',
    label: '紅谷商事株式会社 メガ新田店',
    note: 'レジカウンターでのお客様対応と品出しを担当しました。',
    landmark: 'LM_SHOP',
    tint: '#fbe8d2',
    accent: '#b9682a',
  },
  {
    id: 'mizuki',
    year: '2025 3月',
    cat: '職歴',
    badge: '退職',
    label: '㈱みづきブーケティング低温センター',
    sub: '短期アルバイト',
    note: '花束の制作から出荷までの業務を経験しました。',
    landmark: 'LM_WAREHOUSE',
    tint: '#e4eef2',
    accent: '#4a7a8c',
  },
  {
    id: 'iu',
    year: '2025.4 — 現在',
    cat: '学歴',
    badge: '在学中',
    label: '情報経営イノベーション専門職大学（iU）',
    note: 'ビジネス × IT を学んでいます。',
    landmark: 'LM_UNIVERSITY',
    tint: '#e6efff',
    accent: '#3565d6',
  },
  {
    id: 'fromcenter',
    year: '2025.6 — 2025.8',
    cat: '職歴',
    badge: '退職',
    label: '株式会社 from-center',
    sub: '長期インターン',
    note: 'ノーコードツールでの開発体験や、APIの調査などに取り組みました。',
    landmark: 'LM_LAPTOP',
    tint: '#efe8fb',
    accent: '#7c5cc4',
  },
  {
    id: 'kpass',
    year: '2025.11 — 2026.04',
    cat: '職歴',
    badge: '終了',
    label: 'フリーランス',
    sub: '個人のお仕事',
    note: 'HP・予約システムの開発に参加しました。',
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
    sub: 'アルバイト',
    note: '商品をスーパーから受け取り、配達員へお渡ししています。',
    landmark: 'LM_ONIGO',
    tint: '#fde2ea',
    accent: '#c44f6e',
  },
  {
    id: 'teach',
    year: '2026.05',
    cat: '職歴',
    badge: '終了',
    label: 'フリーランス',
    sub: '個人のお仕事',
    note: '技術の調査からPoCの開発とシステムの提案を担当しました。',
    landmark: 'LM_LAPTOP',
    tint: '#e2eee6',
    accent: '#3f8163',
  },
];
