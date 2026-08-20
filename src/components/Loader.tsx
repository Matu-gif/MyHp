'use client';

/**
 * ローディング表示コンポーネント。
 * loading-ui.com（Free / open source）のスタイルを参考に自作。
 * `variant` を切り替えて複数のスタイルを試せます。
 * CSS は globals.css の「Loader」セクションにあります。色やサイズはそこで調整できます。
 *
 * 使い方: <Loader variant="ring" label="送信しています…" />
 */

export type LoaderVariant = 'ring' | 'dots' | 'bars' | 'pulse';

type Props = {
  variant?: LoaderVariant;
  /** ローダー下に表示するテキスト（省略可） */
  label?: string;
  size?: number;
};

export default function Loader({ variant = 'ring', label, size = 48 }: Props) {
  return (
    <div className="ldr-wrap" role="status" aria-live="polite">
      {variant === 'ring' && (
        <span className="ldr-ring" style={{ width: size, height: size }} />
      )}
      {variant === 'dots' && (
        <span className="ldr-dots">
          <i />
          <i />
          <i />
        </span>
      )}
      {variant === 'bars' && (
        <span className="ldr-bars" style={{ height: size }}>
          <i />
          <i />
          <i />
          <i />
        </span>
      )}
      {variant === 'pulse' && (
        <span className="ldr-pulse" style={{ width: size, height: size }} />
      )}

      {label && <span className="ldr-label">{label}</span>}
    </div>
  );
}
