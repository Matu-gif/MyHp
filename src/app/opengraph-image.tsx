import { ImageResponse } from 'next/og';

// OGP 画像（SNS シェア時のプレビュー）。サイトの雰囲気（ダーク＋yellow）に合わせて動的生成する。
// フォント読み込みを避けるため画像内テキストはラテン文字のみで構成している。
export const alt = '松尾翔太 — Shota Matsuo / Web Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, color: '#ffd60a', letterSpacing: 4 }}>
          // PORTFOLIO
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 108, fontWeight: 700, letterSpacing: -4 }}>
            <span>Shota Matsuo</span>
            <span style={{ color: '#ffd60a' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#8a8a90', marginTop: 18 }}>
            Web Engineer — third-party API driven development
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', fontSize: 28, color: '#ffffff' }}>matsuo.dev</div>
          <div style={{ display: 'flex', fontSize: 22, color: '#8a8a90' }}>
            Next.js · TypeScript · Supabase
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
