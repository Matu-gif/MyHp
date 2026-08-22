# 松尾翔太 ポートフォリオサイト

## 概要
松尾翔太のパーソナルポートフォリオサイト。Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 で構築。
トップページ `/` のシングルページ構成 + お問い合わせ `/contact` の2ページ。

## 技術スタック
- **フレームワーク**: Next.js 16.2.6 (App Router, Turbopack) / React 19
- **言語**: TypeScript
- **スタイル**: Tailwind CSS v4 + CSS変数
- **フォント**: Noto Sans JP, Space Grotesk, JetBrains Mono, Press Start 2P (Google Fonts via next/font)
- **デプロイ**: Vercel (Node ランタイム)
  - **静的エクスポートは使っていない**。お問い合わせフォームで Server Action を使うため、`next.config.ts` で意図的に無効化している。

## 開発コマンド
```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint 実行（※現在 eslint.config.js が無く動作しない。ESLint v9 移行が未対応）
```

## プロジェクト構造
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト (フォント、メタデータ)
│   ├── page.tsx            # トップページ
│   ├── globals.css         # 共通レイアウトクラス・CSS変数・アニメーション
│   ├── contact/            # お問い合わせページ (入力→確認→完了)
│   ├── actions/            # Server Action (contact.ts: LINE Messaging API へ push)
│   ├── opengraph-image.tsx # OGP画像 (動的生成)
│   ├── twitter-image.tsx   # Twitterカード画像 (OGP画像を再利用)
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # React コンポーネント
├── data/                   # 静的データ (経歴、スキル等)
├── hooks/                  # カスタムフック (useInView)
└── lib/                    # 共通定数 (site.ts: SEO用のサイト情報)
```

## コーディング規約
- コンポーネントは関数コンポーネント + TypeScript
- `'use client'` は状態管理やブラウザAPIを使うコンポーネントのみ
- データは `src/data/` に型付きで分離
- CSS: Tailwind ユーティリティ優先、複雑なスタイルは globals.css の CSS変数で管理

## レイアウトCSSの注意点
`globals.css` の `.shell` は `padding` ショートハンドを使っている。Tailwind v4 のユーティリティは
`@layer utilities` 内にあり、**レイヤ外のCSSが無条件で優先される**ため、`.shell` を持つ要素に
`pt-*` / `pb-*` を付けても効かない（`.section-pad` が `.shell` の左右余白を打ち消しているのも同じ理由）。

- 「Tailwind のクラスが効かない」ときは `getComputedStyle(el)` で実測して確認する
- `.shell` 系の要素に上下余白が必要なら、`.hero-shell` のように globals.css 側へ専用クラスを追加する
- Tailwind の `max-[N]` は `not (min-width: N)`、つまり **「N 未満」で N ちょうどを含まない**。
  CSS の `@media (max-width: N)` と境界を揃えたい場合は `max-[N+1]` と書く

## mdファイル
- デザインはDESIGN.md
- アプリケーション情報はSPEC.md
- タスクはTASKS.md
- そのほか作業単位の記録は `docs/` (CHANGES.md, SEO-TASKS.md, TASKS.md)