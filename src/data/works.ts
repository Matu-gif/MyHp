export type WorkItem = {
  num: string;
  title: string;
  tech: string[];
  url: string;
  role: string;
};

export const WORKS: WorkItem[] = [
  {
    num: '01',
    title: 'K-PASS様のホームページ',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS','Resend'],
    url: 'https://kpass.jp/',
    role: '合格実績ページの改善、コース・料金ページの土台作成、フォームからのメール送信、LINEグループへの通知などの機能の開発を行いました。',
  },
  {
    num: '02',
    title: 'K-PASS様の予約サイト',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS','Supabase', 'Resend', 'LINE Messagin API', '公式ライン' ],
    url: 'https://www.kpass-form.com/',
    role: 'フォーム送信者への確認メール送信、管理者へのメール通知、LINEグループへの通知送信、Supabase設定（RLS＋レート制限など）を行いました。',
  },
  {
    num: '03',
    title: 'TeachLeaderのほぼ自動レポート作成機能',
    tech: ['Next.js','TypeScript','Tailwind CSS', 'Google Workspace', 'Google Meet REST API', 'Google Calender API'],
    url: '',
    role: '講師のボタン操作だけでGoogle Meetに参加し、自動で議事録・文字起こし・録画し、ミーティング終了後自動でファイルをドライブ保存し、自動でレポート化する機能を設計・開発中です。',
  },
];
