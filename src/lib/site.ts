/**
 * サイト共通の定数。SEO メタデータ・sitemap・robots・JSON-LD で再利用する。
 * 本番ドメインは未定のため、環境変数 → Vercel の本番URL → localhost の順にフォールバックする。
 * 本番確定後は Vercel の環境変数 NEXT_PUBLIC_SITE_URL を設定するだけで全体に反映される。
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  // Vercel 本番デプロイ時に自動で入る（例: my-site.vercel.app）
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = '松尾翔太 — Shota Matsuo';
export const SITE_TITLE_DEFAULT = '松尾翔太 — Shota Matsuo';
export const SITE_TITLE_TEMPLATE = '%s | 松尾翔太';
export const SITE_DESCRIPTION =
  'サードパーティ API を用いた開発が得意な Web エンジニア、松尾翔太のポートフォリオです。Next.js × TypeScript を軸に、外部サービスを連携させて Web サイトやシステムを作っています。';

export const AUTHOR_NAME = '松尾翔太';
export const TWITTER_HANDLE = '@MatusTT12';

/** JSON-LD などで使う SNS プロフィール URL */
export const SOCIAL_PROFILES = [
  'https://x.com/MatusTT12',
  'https://www.instagram.com/matu1230k',
  'https://github.com/Matu-gif',
];
