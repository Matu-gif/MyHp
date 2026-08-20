'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHead from './SectionHead';
import { useInView, fadeUpStyle } from '@/hooks/useInView';

export default function Contact() {
  const email = 'matuott1230@gmail.com';
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>();

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
      <SectionHead num="06" title="Contact." jp="// 連絡先" />

      <div ref={ref} style={fadeUpStyle(inView, 0)} className="contact-card bg-ink text-bg rounded-[var(--radius-lg)] p-14 max-[760px]:p-[36px_28px] relative overflow-hidden">
        <div className="relative">
          <div className="font-mono text-xs text-yellow tracking-[0.1em] mb-[18px]">
            // READY TO BUILD
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-7">
            お気軽にご相談ください<span className="text-yellow">.</span><br />
          </h2>
          <p className="text-ink-4 text-[15px] mb-8 max-w-[520px]" style={{ textWrap: 'pretty' }}>
            お問い合わせフォームからご連絡いただけます。メールでのご連絡も歓迎しています。
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3.5 px-6 py-[18px] bg-yellow text-ink rounded font-mono text-sm font-semibold transition-all duration-150 border border-yellow hover:bg-bg hover:border-bg"
            >
              お問い合わせフォームへ →
            </Link>
            <button
              onClick={copy}
              className="inline-flex items-center gap-3.5 px-6 py-[18px] max-[360px]:px-3 max-[360px]:gap-2 bg-transparent text-bg rounded font-mono text-sm font-semibold transition-all duration-150 border border-white/30 hover:bg-bg hover:text-ink hover:border-bg"
            >
              <span>{email}</span>
              <span className={`text-[10px] px-2 py-1 rounded-sm tracking-[0.06em] ${copied ? 'bg-[#22c55e] text-bg' : 'bg-white/15 text-bg'}`}>
                {copied ? '✓ COPIED' : 'COPY'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
