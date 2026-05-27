import PixelGrid from './PixelGrid';
import Terminal from './Terminal';
import { AVATAR_16 } from '@/data/pixel-art';

export default function Hero() {
  return (
    <section id="top" className="shell min-h-screen pt-[110px] pb-20 grid grid-cols-[1fr_1.05fr] gap-14 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:min-h-auto max-[900px]:pt-24">
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-3 bg-bg-soft border border-line px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
          AVAILABLE · 25h+/week · 要相談
        </div>
        <h1 className="font-display text-[clamp(56px,8vw,120px)] font-bold tracking-[-0.04em] leading-[0.92] mb-[18px]">
          Shota<br />
          Mats<span className="text-blue">u</span>o<span className="text-blue">.</span>
        </h1>
        <p className="text-[17px] text-ink-2 max-w-[480px] mb-9" style={{ textWrap: 'pretty' }}>
          <b className="font-bold text-ink">API を主戦場にする</b>フルスタックエンジニア。<br />
          Next.js × TypeScript × Supabase を軸に、外部サービスを
          <span className="bg-yellow-soft px-1">つなぎ合わせて</span>
          Webサイトやシステムを作るのが得意です。<br />
          最近はClaudeを使うことにハマってます。
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#career"
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 font-mono text-[13px] font-semibold rounded-sm border border-ink bg-ink text-bg transition-all duration-150 hover:bg-blue hover:border-blue hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
          >
            深く知る
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 font-mono text-[13px] font-semibold rounded-sm border border-ink bg-bg text-ink transition-all duration-150 hover:bg-ink hover:text-bg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-blue)]"
          >
            お問い合わせ
            <span className="transition-transform duration-150">→</span>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-7 -top-7 z-2">
          <PixelGrid grid={AVATAR_16} scale={6} />
        </div>
        <Terminal />
        <div
          className="absolute -bottom-[18px] left-6 bg-yellow text-ink font-mono text-xs font-semibold px-3 py-1.5 rounded-sm border border-ink"
          style={{ transform: 'rotate(-1.5deg)' }}
        >
          → drag · hover · explore
        </div>
      </div>
    </section>
  );
}
