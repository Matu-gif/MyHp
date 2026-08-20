import { SITE_URL, SITE_NAME, AUTHOR_NAME, SOCIAL_PROFILES } from '@/lib/site';

// 構造化データ（JSON-LD）。検索エンジンに本人（Person）とサイト（WebSite）を伝える。
// sameAs で SNS プロフィールを関連付け、指名検索でのナレッジ表示を狙う。
export default function JsonLd() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR_NAME,
      alternateName: 'Shota Matsuo',
      url: SITE_URL,
      jobTitle: 'Web エンジニア',
      sameAs: SOCIAL_PROFILES,
      knowsAbout: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'API連携'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'ja',
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify した静的データを埋め込む（ユーザー入力は含まないため安全）
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
