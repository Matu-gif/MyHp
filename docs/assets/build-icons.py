"""favicon-source.png から Next.js のファイル規約に沿ったアイコン一式を生成する。

- 中央を正方形にクロップ → 円形マスク（四隅は透過）
- 円周に ink(#0a0a0a) の細いリングを描き、白いタブバー上でも輪郭が出るようにする
- apple-icon だけは背景を白で塗る（iOS は透過部分を黒く塗りつぶすため）

リポジトリルートで `python3 docs/assets/build-icons.py` として実行する（要 Pillow）。
"""
from PIL import Image, ImageDraw

SRC = 'docs/assets/favicon-source.png'
DST = 'src/app'
SS = 4          # スーパーサンプリング倍率（円のエッジをアンチエイリアスする）
INK = (10, 10, 10, 255)   # --color-ink
BG = (255, 255, 255)      # --color-bg

im = Image.open(SRC).convert('RGBA')
w, h = im.size
side = min(w, h)
ox, oy = (w - side) // 2, (h - side) // 2
im = im.crop((ox, oy, ox + side, oy + side))

# 円形マスク
mask = Image.new('L', (side * SS, side * SS), 0)
ImageDraw.Draw(mask).ellipse((0, 0, side * SS - 1, side * SS - 1), fill=255)
im.putalpha(mask.resize((side, side), Image.LANCZOS))

# 輪郭のリング（直径の約1.5%）
ov = Image.new('RGBA', (side * SS, side * SS), (0, 0, 0, 0))
lw = max(2, side * SS // 64)
ImageDraw.Draw(ov).ellipse(
    (lw // 2, lw // 2, side * SS - 1 - lw // 2, side * SS - 1 - lw // 2),
    outline=INK, width=lw)
im = Image.alpha_composite(im, ov.resize((side, side), Image.LANCZOS))

# icon.png: 高DPIタブ / Android 用
im.resize((192, 192), Image.LANCZOS).save(f'{DST}/icon.png')

# apple-icon.png: iOS は透過を黒く塗るため白背景に合成する
apple = Image.new('RGBA', (side, side), BG + (255,))
apple.alpha_composite(im)
apple.convert('RGB').resize((180, 180), Image.LANCZOS).save(f'{DST}/apple-icon.png')

# favicon.ico: 16/32/48 のマルチサイズ
im.save(f'{DST}/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('生成完了')
