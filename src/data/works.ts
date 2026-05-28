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
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Resend' , 'Vercel', ],
    url: 'https://kpass.jp/',
    role: '一部文章作成、合格実績ページの改善、コース・料金ページの土台作成、よくある質問問い合わせ,フォームからのメール送信、LINEグループへのフォームの内容の通知',
  },
  {
    num: '02',
    title: 'K-PASS様の予約サイト',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Resend' , 'Vercel', ],
    url: 'https://www.kpass-form.com/',
    role: '生徒に対して確認メールの送信機能、管理者アカウントへのメール送信機能、LINEグループへの通知送信機能、Supabaseの設定(RLS+レート制限など)',
  },
  {
    num: '03',
    title: 'TeachLeaderの機能開発',
    tech: ['TypeScript', 'LINE API', 'Resend'],
    url: '',
    role: '講師がボタンをクリックするだけでGoogle Meetへの参加から議事録・文字起こし・録画を撮り、ドライブに自動で入りそれを講師のレポートとして表示する機能を実現方法の調査から行い、現在設計・開発途中',
  },
];
