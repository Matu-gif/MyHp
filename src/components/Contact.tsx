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

          {/* SNS リンク（アイコンは X / Instagram の公式ブランドロゴ形状。Simple Icons 相当 / CC0） */}
          <div className="mt-10 pt-7 border-t border-white/12 flex gap-3.5">
            <a
              href="https://x.com/MatusTT12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X（旧Twitter）"
              className="w-11 h-11 rounded-full border border-white/25 inline-flex items-center justify-center transition-all duration-150 hover:bg-yellow hover:border-yellow hover:text-ink"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/matu1230k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-white/25 inline-flex items-center justify-center transition-all duration-150 hover:bg-yellow hover:border-yellow hover:text-ink"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.043.379.513.199.88.437 1.265.822.385.385.623.752.822 1.265.151.388.33.971.379 2.043.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445c-.049 1.072-.228 1.655-.379 2.043a3.41 3.41 0 01-.822 1.265 3.41 3.41 0 01-1.265.822c-.388.151-.971.33-2.043.379-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064c-1.072-.049-1.655-.228-2.043-.379a3.41 3.41 0 01-1.265-.822 3.41 3.41 0 01-.822-1.265c-.151-.388-.33-.971-.379-2.043-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445c.049-1.072.228-1.655.379-2.043.199-.513.437-.88.822-1.265a3.41 3.41 0 011.265-.822c.388-.151.971-.33 2.043-.379 1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.511a5.39 5.39 0 00-1.949 1.269 5.39 5.39 0 00-1.269 1.949c-.271.7-.457 1.499-.511 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535c.054 1.171.24 1.97.511 2.67a5.39 5.39 0 001.269 1.949 5.39 5.39 0 001.949 1.269c.7.271 1.499.457 2.67.511C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.511a5.39 5.39 0 001.949-1.269 5.39 5.39 0 001.269-1.949c.271-.7.457-1.499.511-2.67C22.987 15.362 23 14.987 23 12s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.511-2.67a5.39 5.39 0 00-1.269-1.949 5.39 5.39 0 00-1.949-1.269c-.7-.271-1.499-.457-2.67-.511C15.362 1.013 14.987 1 12 1zm0 5.351A5.649 5.649 0 1017.649 12 5.649 5.649 0 0012 6.351zm0 9.316A3.667 3.667 0 1115.667 12 3.667 3.667 0 0112 15.667zm5.872-9.539a1.32 1.32 0 11-1.32-1.32 1.32 1.32 0 011.32 1.32z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
