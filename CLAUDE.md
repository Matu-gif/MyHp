# 松尾翔太 ポートフォリオサイト

## 概要
松尾翔太のパーソナルポートフォリオサイト。Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 で構築。

## 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS v4 + CSS変数
- **フォント**: Noto Sans JP, Space Grotesk, JetBrains Mono, Press Start 2P (Google Fonts via next/font)
- **デプロイ**: 静的エクスポート (`output: 'export'`)

## 開発コマンド
```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint 実行
```

## プロジェクト構造
```
src/
├── app/           # Next.js App Router
│   ├── layout.tsx # ルートレイアウト (フォント、メタデータ)
│   ├── page.tsx   # メインページ
│   └── globals.css
├── components/    # React コンポーネント
├── data/          # 静的データ (経歴、スキル等)
└── hooks/         # カスタムフック (未使用時は省略)
```

## コーディング規約
- コンポーネントは関数コンポーネント + TypeScript
- `'use client'` は状態管理やブラウザAPIを使うコンポーネントのみ
- データは `src/data/` に型付きで分離
- CSS: Tailwind ユーティリティ優先、複雑なスタイルは globals.css の CSS変数で管理

## mdファイル
- デザインはDESIGN.md
- アプリケーション情報はSPEC.md
- タスクはTASKS.md