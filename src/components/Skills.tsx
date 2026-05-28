'use client';

import SectionHead from './SectionHead';
import { CATEGORIES } from '@/data/skills';
import { useInView, fadeUpStyle } from '@/hooks/useInView';

export default function Skills() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="shell section-pad">
      <SectionHead num="03" title="Skills & Stack." jp="// 使える道具たち" />

      <div ref={ref} className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
        {CATEGORIES.map((c, i) => (
          <div key={c.key} style={fadeUpStyle(inView, i)}>
            <div className="h-full bg-bg border border-line px-7 py-[26px] rounded-[var(--radius-lg)] relative transition-all duration-[180ms] hover:border-ink hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-blue)]">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-ink-4 uppercase tracking-[0.1em] mb-4">
                <span className={`w-2 h-2 ${c.pipColor}`} />
                {c.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <span
                    key={it.name}
                    className={`inline-block whitespace-nowrap font-mono text-xs font-medium px-2.5 py-1.5 border rounded-sm transition-all duration-150 ${
                      it.primary
                        ? 'bg-ink text-bg border-ink hover:bg-blue hover:border-blue'
                        : it.accent
                        ? 'bg-blue-soft border-blue text-blue-deep'
                        : 'bg-bg-soft border-line-strong text-ink-2 hover:border-ink hover:bg-ink hover:text-bg'
                    }`}
                  >
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={fadeUpStyle(inView, CATEGORIES.length)}
        className="mt-7 flex flex-wrap gap-6 px-6 py-5 border border-dashed border-line-strong rounded-[var(--radius-lg)] font-mono text-xs text-ink-3"
      >
        <div className="flex items-center gap-1"><b className="text-ink font-semibold">ENV</b> · MacBook Air M1 / 16GB</div>
        <div className="flex items-center gap-1"><b className="text-ink font-semibold">OS</b> · macOS</div>
        <div className="flex items-center gap-1"><b className="text-ink font-semibold">EDITOR</b> · VS Code + Claude Code Pro</div>
        <div className="flex items-center gap-1"><b className="text-ink font-semibold">SHELL</b> · zsh</div>
      </div>
    </section>
  );
}
