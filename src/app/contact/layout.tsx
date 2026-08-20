import type { Metadata } from 'next';

// contact/page.tsx は 'use client' のため metadata を持てない。
// サーバーコンポーネントのこのレイアウトで /contact のメタデータを定義する。
export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '松尾翔太へのお問い合わせフォームです。お仕事のご相談・ご連絡はこちらからお送りいただけます。',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
