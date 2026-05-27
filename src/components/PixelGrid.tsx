import { PALETTE } from '@/data/pixel-art';

type Props = {
  grid: string;
  scale?: number;
  palette?: Record<string, string | null>;
  className?: string;
  style?: React.CSSProperties;
};

export default function PixelGrid({
  grid,
  scale = 4,
  palette = PALETTE,
  className = '',
  style = {},
}: Props) {
  const rows = grid.trim().split('\n').map((r) => r.trim());
  const h = rows.length;
  const w = rows[0].length;

  return (
    <svg
      className={`pixel ${className}`}
      width={w * scale}
      height={h * scale}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={style}
    >
      {rows.map((row, y) =>
        row.split('').map((ch, x) => {
          const fill = palette[ch];
          if (!fill) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />;
        })
      )}
    </svg>
  );
}
