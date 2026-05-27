import SectionHead from './SectionHead';
import PixelGrid from './PixelGrid';
import { DOMAIN_CARDS } from '@/data/domains';
import { PALETTE } from '@/data/pixel-art';

function decoFor(color: string) {
  const c = color;
  return `
.....${c}..
....${c}${c}..
...${c}${c}${c}..
..${c}${c}${c}${c}..
.${c}${c}${c}${c}${c}..
${c}${c}${c}${c}${c}${c}..
.${c}${c}${c}${c}${c}..
..${c}${c}${c}${c}..
...${c}${c}${c}..
....${c}${c}..
.....${c}..
`;
}

const cardStyles = {
  d1: 'bg-ink text-bg border-ink hover:shadow-[6px_6px_0_var(--color-blue)]',
  d2: 'bg-bg text-ink border-line hover:shadow-[6px_6px_0_var(--color-ink)] hover:border-ink',
  d3: 'bg-blue text-bg border-blue hover:shadow-[6px_6px_0_var(--color-yellow)]',
} as const;

const subStyles = {
  d1: 'bg-white/12 border-0',
  d2: 'bg-bg-soft border border-line',
  d3: 'bg-yellow/20 border-0',
} as const;

export default function Domains() {
  return (
    <section id="domains" className="shell section-pad">
      <SectionHead num="04" title="Domains." jp="// 得意・伸ばしたい・興味" />

      <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
        {DOMAIN_CARDS.map((c) => (
          <article
            key={c.num}
            className={`relative p-7 rounded-[var(--radius-lg)] min-h-[260px] flex flex-col transition-all duration-200 overflow-hidden border hover:-translate-x-[3px] hover:-translate-y-[3px] ${cardStyles[c.cls]}`}
          >
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-72 mb-3">
              {c.kicker}
            </div>
            <h3 className="font-display text-[28px] font-semibold tracking-[-0.02em] mb-3.5">
              {c.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {c.sub.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-xs font-semibold px-2 py-1 rounded-sm tracking-[0.03em] ${subStyles[c.cls]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm leading-[1.65] opacity-85" style={{ textWrap: 'pretty' }}>
              {c.body}
            </p>
            <div className="absolute -right-2.5 -bottom-2.5 opacity-18">
              <PixelGrid grid={decoFor(c.pixelColor)} scale={8} palette={PALETTE} />
            </div>
            <span className="absolute top-[22px] right-6 font-pixel text-[11px] opacity-55">
              {c.num}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
