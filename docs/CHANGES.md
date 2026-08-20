# 改修方針メモ

## 要望 → 対応マッピング
| # | 要望 | 対応 | 変更ファイル |
|---|------|------|------------|
| 1 | from-center インターン記録を追加 | 職歴エントリを追加（約3ヶ月・インターン） | `src/data/career.ts` |
| 2 | 「AVAILABLE · 25h+/week · 要相談」を削除 | Hero バッジ削除＋Contact の稼働表記削除 | `Hero.tsx` / `Contact.tsx` |
| 3 | メガ新田店を具体的な業務内容へ | 「レジカウンターでの接客対応と品出し」 | `src/data/career.ts` |
| 4 | サイト内の文章を全てですます | data・components の日本語文を統一 | `src/data/*` / `components/*` |
| 5 | できること: 最低限のWebセキュリティ＋程度 | 得意領域に具体例（バリデーション・トークン秘匿・RLS・レート制限） | `src/data/domains.ts` |
| 6 | 苦手: 深いセキュリティ / DB・API設計 / 綺麗コード / 開発が遅い | 苦手領域を再構成（最低限は作れる旨も明記） | `src/data/domains.ts` |
| 7 | TeachLeader を PoC 開発とシステム提案までに | 経歴・実績とも提案フェーズ表記に | `career.ts` / `works.ts` |
| 8 | Python を Languages に追加 | Languages / Frameworks に追加 | `src/data/skills.ts` |
| 9 | 得意領域を設計実装ではなく提案に | 「〜提案するのが得意」に修正 | `src/data/domains.ts` |
| 10 | Works の文章フレーム統一＋スペース改善 | 「概要→担当→技術→成果」＋カード圧縮 | `works.ts` / `Works.tsx` |
| 11 | 実績 03 を提案までに | PoC 開発・提案フェーズ表記 | `src/data/works.ts` |
| 12 | 連絡機能を LINE 送信に | フォーム → Server Action → Messaging API push | `contact/page.tsx` / `actions/contact.ts` |
| 13 | AI 自動化・フローをまとめて記載 | **今回スコープ外**（将来枠） | — |
| 14 | システムを1つ作って実績化 | **今回スコープ外**（将来枠） | — |

## ですます統一ルール
- 文末を「です・ます」に統一する。
- ナビ・バッジ・見出しの短い体言止めラベル（例: 「経歴」「学歴」「制作物」「継続中」）は対象外。

## Works フレーム定義
1行の**概要** → **担当** → **技術（タグ）** → **成果** の順で統一。
文章が長くなりすぎないよう、概要は約40字、担当・成果は約60字を目安にする。

## お問い合わせ（LINE）構成メモ
- 静的エクスポート（`output: 'export'`）を無効化し、Vercel の Node ランタイムで動かす。
- `/contact` … 入力 → 確認 → 送信中（約3秒ローディング）→ 完了 の4ステップ（クライアント）。
- `sendContact`（Server Action）… 入力を検証し、`https://api.line.me/v2/bot/message/push` で
  `LINE_GROUP_ID` 宛にテキストを push。トークン・グループIDは環境変数（サーバー側のみ）。
- ローダー（`Loader.tsx`）は `ring` / `dots` / `bars` / `pulse` を切替可。`loading-ui.com`（Free/OSS）を参考。
