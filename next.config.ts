import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 動的機能（Server Action / お問い合わせフォーム）を使うため静的エクスポートは無効化。
  // Vercel 上で Node ランタイムとして動作させる。
  images: { unoptimized: true },
};

export default nextConfig;
