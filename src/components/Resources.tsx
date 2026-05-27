import SectionHead from './SectionHead';

export default function Resources() {
  return (
    <section
      id="resources"
      className="shell bg-bg-soft rounded-[var(--radius-lg)] px-14 py-20 max-[760px]:px-5 max-[760px]:py-12"
    >
      <SectionHead num="04" title="Resources." jp="// 稼働の目安" />

      <div>
        <div className="font-display text-[clamp(120px,18vw,220px)] font-bold leading-[0.85] tracking-[-0.06em]">
          25<sup className="text-[0.3em] align-[0.9em] font-semibold text-blue">+</sup>
          <span className="text-[0.22em] tracking-normal ml-2 font-mono text-ink-3 font-medium">h / 週</span>
        </div>
        <div className="font-mono text-xs text-ink-4 tracking-[0.08em] uppercase mt-4">
          availability — 要相談で可変
        </div>
        <p className="mt-6 text-ink-2 text-[15px] max-w-[520px]" style={{ textWrap: 'pretty' }}>
          最低でも<b className="font-bold">週25時間</b>の稼働時間を確保できます。ご相談いただければ、25時間よりも多く時間を確保できる可能性があるため、お気軽にご相談ください。
        </p>
        <div className="mt-6 flex gap-6 flex-wrap font-mono text-xs">
          <div>
            <div className="text-ink-4 text-[11px] tracking-[0.08em] uppercase">timezone</div>
            <div className="text-ink mt-1 font-semibold">JST (UTC+9)</div>
          </div>
          <div>
            <div className="text-ink-4 text-[11px] tracking-[0.08em] uppercase">mode</div>
            <div className="text-ink mt-1 font-semibold">remote-first</div>
          </div>
        </div>
      </div>
    </section>
  );
}
