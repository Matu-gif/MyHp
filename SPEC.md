# サイト仕様書

## 概要
松尾翔太のパーソナルポートフォリオサイト。トップページはシングルページ構成で、アンカーナビゲーションによるセクション移動。お問い合わせのみ別ルート (`/contact`) のフォームページを持つ 2 ページ構成。

- フレームワーク: Next.js (App Router) / React / TypeScript
- スタイル: Tailwind CSS v4
- フォント: Space Grotesk (見出し) / Noto Sans JP (本文) / JetBrains Mono (等幅) / Press Start 2P (ピクセル)

## ページ構成
| ルート | 内容 |
| --- | --- |
| `/` | トップページ (下記セクション構成) |
| `/contact` | お問い合わせフォーム (入力 → 確認 → 完了の3ステップ) |

## セクション構成

### ナビゲーション (固定)
- ロゴ: `matsuoself.dev` + ピクセルマーク (4x4グリッド)
- リンク: 01/top, 02/career, 03/skills, 04/domains, 05/works, 06/contact
- SNS ドロップダウン: X (@MatusTT12) / Instagram (@matu1230k) / GitHub (Matu-gif)
- CTA: `→ contact`
- スクロールスパイでアクティブセクションをハイライト
- モバイル: ナビリンク非表示、SNS と CTA のみ
- 380px 未満: ロゴ文字 11px / ピクセルマーク 18px、SNS・CTA のパディングと文字を縮小、
  nav の左右余白 12px / gap 8px（320px でヘッダーを1行に収めるため）

### #top — ヒーロー
- 大見出し: `Shota Matsuo.` (Space Grotesk, clamp 56px-120px、`u` と `.` は青)
- 自己紹介文 (日本語)。「サードパーティAPIを用いた開発が得意な」を強調、「つなぎ合わせて」を黄マーカー
- CTA: 「深く知る →」(#career) 「お問い合わせ →」(#contact)
- ターミナルカード: `whoami` + `cat profile.json` のタイピングアニメーション
- ピクセルアバター (16x16, ターミナルの右上に配置)
- 黄色の吹き出しバッジ: `→ drag · hover · explore`
- 2カラムグリッド (≤900px で1カラム)
- 上下余白は `.hero-shell` で指定 (≤900px: 96px/64px、≤380px: 84px/56px)
  - `.shell` の padding ショートハンドが Tailwind の `pt-*` を打ち消すため、専用クラスで指定している
- ピクセルアバターは ≤760px ではみ出し量を 8px に抑える (画面外での見切れ防止)

### #career — 経歴
- セクション番号: 02 / 見出し `Career.` / `// 経歴`
- タブ切替: 全て / 学歴 / 職歴 (デフォルト: 全て)
- タイムライン形式 (左: 年/カテゴリ | 中央: ドットレール | 右: カード)
- 9エントリ (学歴3 + 職歴6)
- 各カードにピクセルアートのランドマーク建物
- IntersectionObserver によるフェードインアニメーション
- モバイル: 1カラム、レール非表示

### #skills — スキル & スタック
- セクション番号: 03 / 見出し `Skills & Stack.` / `// 使える道具たち`
- 2x2 グリッド (4カテゴリ)
  1. Languages / Frameworks
  2. Database / Backend
  3. API / Integrations
  4. Workflow / Tools
- 各カテゴリにタグ形式でスキル表示 (primary/accent バリエーション)
- 環境情報バー (ENV, OS, EDITOR)

### #domains — 得意領域
- セクション番号: 04 / 見出し `Domains.` / `// 得意・伸ばしたい・興味`
- 3カラムカード (≤900px で1カラム)
  1. 得意領域 (黒背景 / `// strength`): API連携の提案・技術のキャッチアップ・最低限のWebセキュリティ
  2. 苦手な領域 (白背景 / `// weakness`): 深いセキュリティ・DB/APIの設計・綺麗なコード
  3. 興味のある領域 (青背景 / `// curious`): AI を組み込んだサービス開発・AI活用・AIと人の関わり・自動化
- 各カードにピクセルアートの装飾ダイヤモンド

### #works — 制作物
- セクション番号: 05 / 見出し `Works.` / `// 制作物`
- 現在は準備中の案内メッセージのみを表示するプレースホルダー
- 掲載許可の取得後に一覧表示へ戻す想定 (実績データ `src/data/works.ts` はコミット ca732e8 で削除済み。復元は git 履歴から)

### #contact — 連絡先
- セクション番号: 06 / 見出し `Contact.` / `// 連絡先`
- ダーク背景カード (グリッドパターンオーバーレイ、角丸)
- 「お気軽にご相談ください.」見出し (`.` は黄)
- 説明文 + CTA 2種
  - 「お問い合わせフォームへ →」(`/contact` へのリンク)
  - メールアドレス + コピーボタン (コピー後 1.8秒 `✓ COPIED` 表示)
- 区切り線の下に SNS アイコン (X / Instagram) の丸ボタン
- カード余白: 上 68px / 左右下 56px (≤760px は 上42px / 左右28px / 下36px)

### フッター
- コピーライト: `© {現在の年} Shouta Matsuo. All rights reserved`

## `/contact` — お問い合わせフォーム
- ステップ表示: 入力 → 確認 → 完了
- 入力項目: お名前 / メールアドレス / お問い合わせ内容 (すべて必須)
- 確認画面で入力内容を一覧表示し、送信前に修正可能
- 送信中はローダーを表示
- 送信処理: サーバーアクション `sendContact` から LINE Messaging API へ push
  - 環境変数 `LINE_CHANNEL_ACCESS_TOKEN` / `LINE_GROUP_ID` (サーバー側のみ)

## レスポンシブ
- デスクトップ: max-width 1280px, padding 0 56px
- ≤1024px: shell の左右マージン 20px、shell-full は padding 0 40px
- ≤900px: ヒーロー / Domains を1カラムに
- ≤760px: shell-full は padding 0 20px、ナビリンク非表示、セクション padding 120px → 72px、
  ヒーローのピクセルアバターのはみ出しを 8px に抑制
- ≤480px: セクション padding 56px
- <380px: ヘッダー各要素とヒーローの上下余白を縮小 (最小幅 320px を想定)

> Tailwind の `max-[N]` は `not (min-width: N)` にコンパイルされ **「N 未満」** となる (N ちょうどを含まない)。
> CSS の `@media (max-width: N)` は N を含むため、境界を揃える箇所では `max-[N+1]` を指定している。

## メタデータ / SEO
- タイトル: `松尾翔太 — Shota Matsuo` (下層は `%s | 松尾翔太`)
- 言語: `ja` / OGP locale: `ja_JP`
- サイト URL は `NEXT_PUBLIC_SITE_URL` → Vercel 本番URL → localhost の順にフォールバック (`src/lib/site.ts`)
- OGP / Twitter カード画像は動的生成 (`opengraph-image.tsx` / `twitter-image.tsx`)
- `sitemap.ts` / `robots.ts` / JSON-LD (`JsonLd.tsx`) を出力
