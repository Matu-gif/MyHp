'use client';

import SectionHead from './SectionHead';
import { WORKS, type WorkItem } from '@/data/works';
import { useInView } from '@/hooks/useInView';

type BlockColor = {
  numColor: string;
  cardBgClass: string;
  hoverClass: string;
};

const BLOCK_COLORS: BlockColor[] = [
  {
    numColor: 'var(--color-ink)',
    cardBgClass: 'bg-blue-soft',
    hoverClass: 'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-blue)] hover:border-blue',
  },
  {
    // numColor: 'var(--color-blue)',
    numColor: 'var(--color-ink)',
    cardBgClass: 'bg-yellow-soft',
    hoverClass: 'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-yellow-deep)] hover:border-yellow-deep',
  },
  {
    // numColor: 'var(--color-line)',
    numColor: 'var(--color-ink)',
    cardBgClass: 'bg-green-soft',
    hoverClass: 'hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-green-deep)] hover:border-green-deep',
  },
];

function WorkBlock({ work, index }: { work: WorkItem; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const isReversed = index % 2 === 1;
  const colors = BLOCK_COLORS[index] ?? BLOCK_COLORS[0];

  const numberStyle: React.CSSProperties = {
    fontSize: 'clamp(64px, 18vw, 280px)',
    letterSpacing: '-3px',
    color: colors.numColor,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(48px)',
    transition: 'opacity 0.9s ease-out 0.15s, transform 0.9s ease-out 0.15s',
  };

  const cardWrapStyle: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };

  return (
    <div
      ref={ref}
      className={[
        'grid min-h-[35vh]',
        isReversed ? 'min-[1025px]:grid-cols-[1.4fr_1fr]' : 'grid-cols-[1fr_1.4fr]',
        'max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:min-h-0 max-[1024px]:mb-10',
      ].join(' ')}
    >
      {/* Number column */}
      <div
        className={[
          'flex items-center max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:mb-4',
          isReversed ? 'min-[1025px]:order-2' : '',
        ].join(' ')}
      >
        <span
          aria-hidden="true"
          className="font-mono font-medium leading-[0.85] select-none"
          style={numberStyle}
        >
          {work.num}
        </span>
      </div>

      {/* Card column */}
      <div
        style={cardWrapStyle}
        className={[
          'relative z-10',
          isReversed
            ? 'min-[1025px]:order-1 min-[1025px]:-mr-12'
            : '-ml-12 max-[1024px]:ml-0',
        ].join(' ')}
      >
        <article
          className={[
            'flex flex-col p-7 rounded-[var(--radius-lg)] h-full',
            colors.cardBgClass,
            `border border-line transition-all duration-200 ${colors.hoverClass}`,
          ].join(' ')}
        >
          <div className="flex items-center gap-2.5 mb-3.5">
            <h3 className="font-display text-[20px] font-medium tracking-[-0.02em]">
              {work.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {work.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs font-semibold px-2 py-1 rounded-sm bg-bg border border-line tracking-[0.03em]"
              >
                {t}
              </span>
            ))}
          </div>

          <p
            className="text-[13px] leading-[1.7] text-ink-3 mb-5"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            {work.role}
          </p>

          <div className="mt-auto">
            {work.url ? (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-blue hover:text-blue-deep transition-colors duration-150 inline-flex items-center gap-1"
              >
                → {work.url}
              </a>
            ) : (
              <span className="font-mono text-xs text-ink-4">設計・開発途中</span>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="shell section-pad">
      <SectionHead num="05" title="Works." jp="// 制作物" />

      <div className="mt-14 flex flex-col gap-8 max-[768px]:gap-0">
        {WORKS.map((w, i) => (
          <WorkBlock key={w.num} work={w} index={i} />
        ))}
      </div>
    </section>
  );
}
