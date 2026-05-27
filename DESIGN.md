# デザインシステム

## カラートークン

| トークン | 値 | 用途 |
|---|---|---|
| `--bg` | `#ffffff` | ページ背景 |
| `--bg-soft` | `#fafaf9` | カード背景 (微妙な差) |
| `--bg-grid` | `#f4f4f2` | 背景グリッド線 |
| `--ink` | `#0a0a0a` | メインテキスト |
| `--ink-2` | `#1d1d1f` | セカンダリテキスト |
| `--ink-3` | `#4a4a4f` | ラベル、ナビリンク |
| `--ink-4` | `#8a8a90` | キャプション、kicker |
| `--line` | `#e6e6e3` | ボーダー |
| `--line-strong` | `#d0d0cc` | 強調ボーダー |
| `--blue` | `#1e57ff` | プライマリアクセント |
| `--blue-deep` | `#0a3acc` | ホバー、強調 |
| `--blue-soft` | `#e8efff` | 薄い青背景 |
| `--yellow` | `#ffd60a` | セカンダリアクセント |
| `--yellow-deep` | `#c79900` | 黄色強調 |
| `--yellow-soft` | `#fff8d6` | 薄い黄背景 |

## フォント

| 変数名 | フォント | 用途 |
|---|---|---|
| `--font-jp` | Noto Sans JP | 本文、日本語テキスト |
| `--font-display` | Space Grotesk | 見出し、大文字 |
| `--font-mono` | JetBrains Mono | ラベル、コード、ナビ |
| `--font-pixel` | Press Start 2P | ピクセル装飾 (バッジ等) |

## タイポグラフィ

- **h1 (Hero)**: Space Grotesk, clamp(56px, 8vw, 120px), weight 700, letter-spacing -0.04em
- **h2 (セクション)**: Space Grotesk, 36px, weight 600, letter-spacing -0.02em
- **h3 (カード)**: Noto Sans JP, 20-28px, weight 600-700
- **本文**: Noto Sans JP, 15px, line-height 1.7
- **ラベル**: JetBrains Mono, 11-12px, uppercase, letter-spacing 0.08-0.12em
- **ピクセルバッジ**: Press Start 2P, 8px

## スペーシング

- **セクション間**: 120px (モバイル: 72px)
- **コンテナ**: max-width 1280px, padding 0 56px (モバイル: 0 20px)
- **セクション見出し下**: margin-bottom 56px

## Border Radius
- `--radius`: 4px (一般)
- `--radius-lg`: 6px (カード)

## 背景パターン
- ページ全体に48pxグリッド (1px `--bg-grid` 線)
- Contact カードに24pxグリッド (1px rgba白4%線)

## インタラクション
- **ホバー**: translate(-3px, -3px) + box-shadow 6px 6px で浮き上がり効果
- **ボタン**: border 1px solid + hover時に background/color 反転
- **リンク矢印**: hover時に translateX(3px)
- **ターミナル**: 段階的タイピングアニメーション (200ms-2950ms)
- **タイムライン**: IntersectionObserver でフェードイン (opacity 0→1, translateY 20px→0)

## ピクセルアート
- **レンダリング**: SVG rect による1px単位のグリッド描画
- **パレット**: 31色 (透明含む)
- **ランドマーク**: 24x18ピクセル (scale 5)
- **アバター**: 16x16ピクセル (scale 6)
- **`image-rendering: pixelated`** でシャープなエッジを維持
