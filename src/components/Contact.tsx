'use client';

import { useState } from 'react';
import SectionHead from './SectionHead';

export default function Contact() {
  const email = 'matuott1230@gmail.com';
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="shell section-pad">
      <SectionHead num="05" title="Contact." jp="// 連絡先" />

      <div className="contact-card bg-ink text-bg rounded-[var(--radius-lg)] p-14 max-[760px]:p-[36px_28px] relative overflow-hidden">
        <div className="relative">
          <div className="font-mono text-xs text-yellow tracking-[0.1em] mb-[18px]">
            // READY TO BUILD
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-7">
            お気軽にご相談ください<span className="text-yellow">.</span><br />
            {/* <span className="text-ink-4 font-medium text-[0.5em]">
              プロジェクト相談・業務委託・カジュアル面談、すべて歓迎です。
            </span> */}
          </h2>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={copy}
              className={`inline-flex items-center gap-3.5 px-6 py-[18px] bg-bg text-ink rounded font-mono text-sm font-semibold transition-all duration-150 border border-bg hover:bg-yellow hover:border-yellow ${copied ? '' : ''}`}
            >
              <span>{email}</span>
              <span className={`text-[10px] px-2 py-1 rounded-sm tracking-[0.06em] ${copied ? 'bg-[#22c55e] text-bg' : 'bg-ink text-bg'}`}>
                {copied ? '✓ COPIED' : 'COPY'}
              </span>
            </button>
            <a
              href="https://www.instagram.com/matu1230k/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 px-6 py-[18px] bg-transparent text-bg rounded font-mono text-sm font-semibold border border-white/30 transition-all duration-150 hover:bg-yellow hover:border-yellow hover:text-ink"
            >
              Instagram を開く →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-7 border-t border-white/12 max-[760px]:grid-cols-1 max-[760px]:gap-3.5">
            <div>
              <div className="font-mono text-[11px] text-ink-4 tracking-[0.08em] uppercase">name</div>
              <div className="text-bg font-medium mt-1">松尾 翔太 / Shota Matsuo</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-ink-4 tracking-[0.08em] uppercase">availability</div>
              <div className="text-bg font-medium mt-1">25h+ / week (flexible)</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-ink-4 tracking-[0.08em] uppercase">timezone</div>
              <div className="text-bg font-medium mt-1">JST · UTC+9</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
