'use client';

import SectionHead from './SectionHead';
import { WORKS } from '@/data/works';
import { useInView, fadeUpStyle } from '@/hooks/useInView';

export default function Works() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="works" className="shell section-pad">
      <SectionHead num="05" title="Works." jp="// 制作物" />

      <div ref={ref} className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
        {WORKS.map((w, i) => (
          <div key={w.num} style={fadeUpStyle(inView, i)}>
            <article className="h-full relative p-7 rounded-[var(--radius-lg)] min-h-[260px] flex flex-col border border-line bg-bg transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ink)] hover:border-ink">
              <h3 className="font-display text-[24px] font-semibold tracking-[-0.02em] mb-3.5">
                {w.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {w.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs font-semibold px-2 py-1 rounded-sm bg-bg-soft border border-line tracking-[0.03em]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-[1.65] text-ink-2 opacity-85 mb-4" style={{ textWrap: 'pretty' }}>
                {w.role}
              </p>

              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto font-mono text-xs text-blue hover:text-blue-deep transition-colors duration-150 inline-flex items-center gap-1"
              >
                → {w.url}
              </a>

              <span className="absolute top-[22px] right-6 font-pixel text-[11px] opacity-55">
                {w.num}
              </span>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
