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

## 最終検証（2026-08-22 完了）

本番 `https://www.matsuoself.dev` への実 HTTP リクエストで確認済み。

- [x] meta / OG / twitter / canonical / JSON-LD がソースに出力
- [x] OGP 画像が生成される（`/opengraph-image` `/twitter-image` とも PNG 1200×630）
- [x] `/contact` の title が「お問い合わせ | 松尾翔太」・canonical も個別
- [x] `robots.txt` `sitemap.xml` が 200 で配信（Googlebot UA・IPv6 でも 200）
- [x] `x-robots-tag: noindex` が付いていない
- [x] Vercel に `NEXT_PUBLIC_SITE_URL=https://www.matsuoself.dev` を設定
- [x] Search Console 所有権確認（**DNS TXT 方式**／DNS は Cloudflare 管理）
- [x] sitemap 送信 → 「正常に処理されました」検出2ページ
- [x] `/` `/contact` のインデックス登録をリクエスト

### 決定事項の変更
- **所有権確認は DNS TXT 方式を採用したため、`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` は未使用。**
  `layout.tsx` の `verification` は未設定時に `undefined` を返すので、そのままで問題ない。
  メタタグ方式に切り替える場合のみ、この環境変数を Vercel に設定する。
- 本番ドメインは `www.matsuoself.dev` に確定（apex `matsuoself.dev` は www へ 301）。

### 送信直後の表示について（既知の挙動）
サイトマップ一覧に「取得できませんでした」と出ることがあるが、詳細画面が
「正常に処理されました」なら成功。一覧の反映が遅れているだけで、再送信は不要。

---

## 今後の任意タスク（未着手）
- [ ] `my-hp-eight.vercel.app` を Vercel の Domains 設定でカスタムドメインへの Redirect に変更（重複URL対策。canonical で担保済みのため優先度は低い）
- [ ] アクセス解析の導入（GA4 または `@vercel/analytics`。現在いずれも未導入）
- [ ] Bing Webmaster Tools に Search Console からインポート
- [ ] 数日〜2週間後、Search Console の「ページ」レポートでインデックス状況を確認
