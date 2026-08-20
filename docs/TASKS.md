# サイト改修タスク（2026 リニューアル）

本改修のタスク一覧です。進捗はチェックボックスで管理します。
※文章はいったんこちらで草案を作成しています。**最終的な文言は本人がレビュー・修正してください。**

## 完了済み
- [x] 作業ブランチ作成（`site-revamp-2026`）
- [x] `next.config.ts` の `output: 'export'` 削除（Server Action 有効化）
- [x] `src/data/career.ts` — from-center 追加 / メガ新田・TeachLeader 更新 / 全 note ですます化
- [x] `src/data/works.ts` — 「概要→担当→技術→成果」フレームに再設計 / 03 を提案フェーズに
- [x] `src/components/Works.tsx` — 新フレーム表示・カード圧縮（担当/成果をラベル行に）
- [x] `src/data/domains.ts` — 得意（提案＋最低限のWebセキュリティ）/ 苦手（深いセキュリティ・DB/API設計・綺麗コード・開発速度）
- [x] `src/data/skills.ts` — Python 追加
- [x] `src/components/Hero.tsx` — 「AVAILABLE · 25h+/week · 要相談」バッジ削除・文言調整
- [x] `src/components/Contact.tsx` — Instagram 削除 / `/contact` への CTA / 稼働表記削除
- [x] `src/app/contact/page.tsx` — 入力 → 確認 → 送信中（約3秒ローディング）→ 完了
- [x] `src/app/actions/contact.ts` — LINE Messaging API で グループへ push（Server Action）
- [x] `src/components/Loader.tsx` — ローダー（ring/dots/bars/pulse 切替可、loading-ui.com 参考）
- [x] 全文ですます統一の確認（短ラベルは対象外）

## 未対応 / 要ユーザー対応
- [ ] **【要ユーザー対応】文章内容の最終レビュー**（全セクションの文言を本人が確認・修正する）
- [ ] from-center の在籍期間（開始・終了月）を確定（現在 `career.ts` に `2026（約3ヶ月）` を仮置き・TODO コメントあり）
- [ ] Vercel 環境変数を登録
  - `LINE_CHANNEL_ACCESS_TOKEN`（Messaging API のチャネルアクセストークン）
  - `LINE_GROUP_ID`（送信先グループの ID）
- [ ] ローダーの採用スタイルを選定（`src/app/contact/page.tsx` の `LOADER_VARIANT` で切替）
- [ ] `/contact` の送信を実機で確認（LINE グループへの着信・異常系表示）

## 将来枠（今回スコープ外）
- [ ] AI 関係の自動化・フローをいくつか完成させてまとめる
- [ ] システムを1つ作って実績として追加する

## 検証コマンド
```bash
npm run dev     # ローカル確認
npm run build   # 本番ビルド
npm run lint    # Lint
```
