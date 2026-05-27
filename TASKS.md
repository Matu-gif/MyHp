# 実装タスク

## フェーズ 1: ドキュメント
- [x] CLAUDE.md 作成
- [x] SPEC.md 作成
- [x] DESIGN.md 作成
- [x] TASKS.md 作成

## フェーズ 2: プロジェクトセットアップ
- [x] Next.js 15 + TypeScript + Tailwind CSS v4 プロジェクト初期化
- [x] Google Fonts 設定 (Noto Sans JP, Space Grotesk, JetBrains Mono, Press Start 2P)
- [x] globals.css (CSS変数、背景グリッド、アニメーション定義)
- [x] Tailwind カスタム設定

## フェーズ 3: データファイル
- [x] `src/data/pixel-art.ts` — パレット + ランドマーク + アバター
- [x] `src/data/career.ts` — 経歴エントリ (8件)
- [x] `src/data/skills.ts` — スキルカテゴリ (4件)
- [x] `src/data/schedule.ts` — 週間スケジュールグリッド
- [x] `src/data/domains.ts` — フォーカスエリア (3件)

## フェーズ 4: コンポーネント
- [x] `PixelGrid.tsx` — SVGピクセルアートレンダラー
- [x] `SectionHead.tsx` — セクション見出し共通
- [x] `Nav.tsx` — 固定ナビ + スクロールスパイ
- [x] `Hero.tsx` + `Terminal.tsx` — ヒーロー + ターミナルアニメーション
- [x] `Career.tsx` + `CareerRow.tsx` — タイムライン
- [x] `Skills.tsx` — スキルグリッド
- [x] `Resources.tsx` — 稼働情報 + 週間スケジュール
- [x] `Domains.tsx` — 得意領域カード
- [x] `Contact.tsx` — 連絡先
- [x] `Footer.tsx` — フッター

## フェーズ 5: ページ統合
- [x] `layout.tsx` — フォント、メタデータ
- [x] `page.tsx` — 全セクション統合

## フェーズ 6: 仕上げ
- [x] レスポンシブ調整
- [x] next.config.ts (静的エクスポート)
- [ ] favicon (オプション)

## フェーズ 7: 機能改善
- [x] Career セクション — タブ切替 (全て/学歴/職歴)
- [x] Contact セクション — 見出し変更 (Get in touch. → Contact.)
- [x] Contact セクション — メールボタン廃止 + Instagram ボタン追加
- [x] SPEC.md 更新
- [x] ブラウザ確認
- [x] ビルド確認

## 検証
- [x] ブラウザ表示確認 (デスクトップ + モバイル)
- [x] 元デザインとの比較
- [x] ビルド成功確認
- [x] コンソールエラーなし
