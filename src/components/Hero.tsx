import PixelGrid from './PixelGrid';
import Terminal from './Terminal';
import { AVATAR_16 } from '@/data/pixel-art';

export default function Hero() {
  return (
    <section id="top" className="shell shell-full min-h-screen pt-[110px] pb-20 grid grid-cols-[1fr_1.05fr] gap-14 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:min-h-auto max-[900px]:pt-24">
      <div>
        <h1 className="hero-fade font-display text-[clamp(56px,8vw,120px)] font-bold tracking-[-0.04em] leading-[0.92] mb-[18px] mt-2" style={{ animationDelay: '60ms' }}>
          Shota<br />
          Mats<span className="text-blue">u</span>o<span className="text-blue">.</span>
        </h1>
        <p className="hero-fade text-[17px] text-ink-2 max-w-[480px] mb-9" style={{ animationDelay: '120ms', textWrap: 'pretty' }}>
          <b className="font-bold text-ink">サードパーティAPIを用いた開発が得意な</b>Webエンジニアです。
          Next.js × TypeScript × Tailwind CSS を軸に、外部サービスを
          <span className="bg-yellow-soft px-1">つなぎ合わせて</span>
          Webサイトやシステムを作ることができます。
          最近はClaudeを使った開発に取り組んでいます。
        </p>
        <div className="hero-fade flex gap-3 flex-wrap" style={{ animationDelay: '180ms' }}>
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

      <div className="hero-fade relative" style={{ animationDelay: '100ms' }}>
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
