# SEO 対策 タスク（段階分割・承認ゲート方式）

指名検索（松尾翔太 / Shota Matsuo）中心に SEO 基盤を整備する。
**1塊ずつ実装 → 型チェック/確認 → 報告 → 承認 → 次の塊** で進める。

## 決定事項
- ドメイン未定 → `NEXT_PUBLIC_SITE_URL`（Vercel/localhost フォールバック）で差し替え可能に。
- OGP 画像 → Next.js 動的生成（`ImageResponse`）。
- 計測 → Google Search Console 検証タグ（トークンは環境変数で後注入）。
- キーワード → 指名検索中心。

---

## 塊1: メタデータ基盤 ✅
- [x] `src/lib/site.ts` 追加（`SITE_URL` / `SITE_NAME` 等の定数）
- [x] `src/app/layout.tsx` の `metadata` 拡張（metadataBase / titleテンプレート / description更新 / OGP / Twitter / canonical / robots / verification）
- [x] `.env.example` に `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 追記
- [x] `npx tsc --noEmit` OK → 承認待ち

## 塊2: クロール制御（sitemap / robots）✅
- [x] `src/app/sitemap.ts` 追加（`/`, `/contact`）
- [x] `src/app/robots.ts` 追加（全許可 ＋ sitemap ＋ host）
- [x] `npx tsc --noEmit` OK（`/sitemap.xml` `/robots.txt` は dev/build で自動生成）→ 承認待ち

## 塊3: OGP 画像（動的生成）✅
- [x] `src/app/opengraph-image.tsx`（ImageResponse 1200×630、ダーク＋yellow・ラテン文字）
- [x] `src/app/twitter-image.tsx`（opengraph-image 再エクスポート）
- [x] `npx tsc --noEmit` OK（`/opengraph-image` は dev/build で生成）

## 塊4: 構造化データ（JSON-LD）✅
- [x] `src/components/JsonLd.tsx`（Person + WebSite、sameAs=[X, Instagram, GitHub]）
- [x] `layout.tsx` の `<body>` 先頭に組み込み

## 塊5: ページ個別メタ & 片付け ✅
- [x] `src/app/contact/layout.tsx`（title「お問い合わせ」＋ canonical /contact）
- [x] `public/` の初期 SVG 削除（file/globe/next/vercel/window）
- [x] 見出し階層確認（トップの `<h1>` は Hero の1つのみ、各セクションは `<h2>`）

---

## 最終検証（全塊完了後）
- [ ] `npm run build` 成功、meta/OG/twitter/canonical/JSON-LD がソースに出力
- [ ] `/contact` の title が「お問い合わせ | 松尾翔太」
- [ ] （本人）Vercel に `NEXT_PUBLIC_SITE_URL` / 検証トークン設定 → Search Console 所有権確認 → sitemap 送信
