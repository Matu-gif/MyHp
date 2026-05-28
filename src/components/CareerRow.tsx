'use client';

import PixelGrid from './PixelGrid';
import { LANDMARKS } from '@/data/pixel-art';
import type { CareerEntry } from '@/data/career';

type Props = {
  entry: CareerEntry;
  isLast: boolean;
  visible: boolean;
};

export default function CareerRow({ entry, isLast, visible }: Props) {
  const art = LANDMARKS[entry.landmark];
  const isNow = entry.badge === '継続中' || entry.badge === '在学中';

  return (
    <article
      className={`grid grid-cols-[140px_28px_minmax(0,1fr)] items-stretch relative pb-7 max-[900px]:grid-cols-1 max-[900px]:pb-6 ${isLast ? 'last' : ''}`}
      style={{ '--accent': entry.accent } as React.CSSProperties}
    >
      {/* Left meta column */}
      <div className="pt-[30px] text-right pr-[18px] flex flex-col gap-2 items-end max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-start max-[900px]:text-left max-[900px]:p-0 max-[900px]:pb-3 max-[900px]:gap-3">
        <span className="font-mono text-[15px] font-semibold text-ink tracking-[0.02em] leading-tight whitespace-nowrap">
          {entry.year}
        </span>
        <span
          className="font-pixel text-[8px] tracking-[0.08em] px-1.5 py-1 border bg-white/50"
          style={{ color: entry.accent, borderColor: entry.accent }}
        >
          {entry.cat}
        </span>
      </div>

      {/* Vertical rail */}
      <div className="relative flex justify-center w-7 max-[900px]:hidden">
        <span className="absolute top-[38px] w-3 h-3 z-1 border-2 border-white shadow-[0_0_0_2px_var(--accent)]" style={{ background: entry.accent }} />
        <span className="cq-rail-line absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px" />
      </div>

      {/* Card */}
      <div
        className="cq-card grid grid-cols-[180px_minmax(0,1fr)] gap-7 items-center px-7 py-6 rounded border border-black/8 ml-2 relative transition-all duration-500 max-[900px]:grid-cols-1 max-[900px]:ml-0 max-[900px]:gap-4 max-[900px]:px-[18px] max-[900px]:py-[18px] max-[900px]:pb-5 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_24px_-10px_rgba(0,0,0,0.18)]"
        style={{
          background: entry.tint,
          boxShadow: visible ? '0 1px 0 rgba(0,0,0,0.04), 0 4px 14px -8px rgba(0,0,0,0.12)' : undefined,
        }}
      >
        <div className="flex justify-center items-end h-[130px] max-[900px]:h-[110px]" style={{ filter: 'drop-shadow(0 4px 0 rgba(0,0,0,0.08))', imageRendering: 'pixelated' }}>
          {art && (
            <PixelGrid
              grid={art}
              scale={5}
              className={`max-w-full h-auto origin-center-bottom transition-transform duration-600 ${visible ? 'scale-100' : 'scale-[0.85]'} max-[900px]:${visible ? 'scale-95' : 'scale-[0.85]'}`}
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-block font-pixel text-[8px] tracking-[0.08em] text-white px-2 py-[5px] rounded-sm"
              style={{ background: entry.accent }}
            >
              {entry.badge}
            </span>
            {isNow && (
              <span className="cq-now-dot w-2 h-2 rounded-full bg-[#1f8a5b] shadow-[0_0_0_3px_rgba(31,138,91,0.18)]" />
            )}
          </div>
          <h3 className="font-jp text-xl font-bold text-ink mt-0.5 leading-[1.4] flex flex-col gap-0.5 max-[900px]:text-[17px]">
            {entry.label}
            {entry.sub && (
              <span className="text-[13px] font-medium text-ink-2 tracking-[0.01em] max-[900px]:text-xs">
                {entry.sub}
              </span>
            )}
          </h3>
          <p className="font-jp text-[13.5px] leading-[1.75] text-ink-2 mt-1 max-[900px]:text-[13px]" style={{ textWrap: 'pretty' }}>
            {entry.note}
          </p>
          {entry.href && (
            <a
              className="self-start mt-2 font-mono text-xs border-b border-current pb-px inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: entry.accent }}
            >
              visit website
              <span className="inline-block transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
