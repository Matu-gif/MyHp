'use client';

import { useState, useEffect, useRef } from 'react';

const SECTIONS = [
  { id: 'top', label: '01 / top' },
  { id: 'career', label: '02 / career' },
  { id: 'skills', label: '03 / skills' },
  { id: 'domains', label: '04 / domains' },
  { id: 'works', label: '05 / works' },
  { id: 'contact', label: '06 / contact' },
];

// SNS リンク（アイコンは公式ブランドロゴ形状 / Simple Icons 相当・CC0）。増やす場合はここに追加。
const SOCIALS = [
  {
    label: 'X',
    handle: '@MatusTT12',
    href: 'https://x.com/MatusTT12',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    handle: '@matu1230k',
    href: 'https://www.instagram.com/matu1230k',
    path: 'M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.043.379.513.199.88.437 1.265.822.385.385.623.752.822 1.265.151.388.33.971.379 2.043.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445c-.049 1.072-.228 1.655-.379 2.043a3.41 3.41 0 01-.822 1.265 3.41 3.41 0 01-1.265.822c-.388.151-.971.33-2.043.379-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064c-1.072-.049-1.655-.228-2.043-.379a3.41 3.41 0 01-1.265-.822 3.41 3.41 0 01-.822-1.265c-.151-.388-.33-.971-.379-2.043-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445c.049-1.072.228-1.655.379-2.043.199-.513.437-.88.822-1.265a3.41 3.41 0 011.265-.822c.388-.151.971-.33 2.043-.379 1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.511a5.39 5.39 0 00-1.949 1.269 5.39 5.39 0 00-1.269 1.949c-.271.7-.457 1.499-.511 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535c.054 1.171.24 1.97.511 2.67a5.39 5.39 0 001.269 1.949 5.39 5.39 0 001.949 1.269c.7.271 1.499.457 2.67.511C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.511a5.39 5.39 0 001.949-1.269 5.39 5.39 0 001.269-1.949c.271-.7.457-1.499.511-2.67C22.987 15.362 23 14.987 23 12s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.511-2.67a5.39 5.39 0 00-1.269-1.949 5.39 5.39 0 00-1.949-1.269c-.7-.271-1.499-.457-2.67-.511C15.362 1.013 14.987 1 12 1zm0 5.351A5.649 5.649 0 1017.649 12 5.649 5.649 0 0012 6.351zm0 9.316A3.667 3.667 0 1115.667 12 3.667 3.667 0 0112 15.667zm5.872-9.539a1.32 1.32 0 11-1.32-1.32 1.32 1.32 0 011.32 1.32z',
  },
  {
    label: 'GitHub',
    handle: 'Matu-gif',
    href: 'https://github.com/Matu-gif',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
];

export default function Nav() {
  const [active, setActive] = useState('top');
  const [snsOpen, setSnsOpen] = useState(false);
  const snsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!snsOpen) return;
    const onDown = (e: MouseEvent) => {
      if (snsRef.current && !snsRef.current.contains(e.target as Node)) setSnsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSnsOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [snsOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = 'top';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white/85 backdrop-blur-[14px] border-b border-line">
      <div className="max-w-[1280px] mx-auto px-14 py-3.5 flex items-center gap-6 max-[1024px]:px-10 max-[760px]:px-5 max-md:gap-3 max-[380px]:px-3 max-[380px]:gap-2">
        <a href="#top" onClick={go('top')} className="flex items-center gap-2.5 max-md:min-w-0 font-mono text-[13px] font-semibold max-[380px]:gap-2 max-[380px]:text-[11px]">
          <span className="w-[22px] h-[22px] shrink-0 grid grid-cols-4 gap-0 max-[380px]:w-[18px] max-[380px]:h-[18px]" style={{ imageRendering: 'pixelated' }}>
            <span className="bg-ink" />
            <span className="bg-blue" />
            <span className="bg-ink" />
            <span className="bg-transparent" />
            <span className="bg-blue" />
            <span className="bg-ink" />
            <span className="bg-yellow" />
            <span className="bg-ink" />
            <span className="bg-ink" />
            <span className="bg-yellow" />
            <span className="bg-ink" />
            <span className="bg-blue" />
            <span className="bg-transparent" />
            <span className="bg-ink" />
            <span className="bg-blue" />
            <span className="bg-ink" />
          </span>
          <span className="max-md:truncate">matsuoself.dev</span>
        </a>

        <div className="hidden md:flex gap-0.5 ml-auto font-mono text-xs">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={go(s.id)}
              className={`px-3 py-2 text-ink-3 relative transition-colors duration-150 hover:text-ink ${
                active === s.id ? 'text-ink pl-[18px]' : ''
              }`}
            >
              {active === s.id && (
                <span className="absolute left-1.5 top-1/2 w-1 h-1 bg-blue -translate-y-1/2" />
              )}
              {s.label}
            </a>
          ))}
        </div>

        <div ref={snsRef} className="relative max-md:shrink-0 ml-auto md:ml-0">
          <button
            type="button"
            onClick={() => setSnsOpen((o) => !o)}
            aria-haspopup="true"
            aria-expanded={snsOpen}
            className="font-mono text-xs font-semibold px-3 py-2 border border-line-strong rounded-sm inline-flex items-center gap-1.5 text-ink bg-bg hover:border-ink transition-colors duration-150 max-[380px]:px-2 max-[380px]:gap-1 max-[380px]:text-[11px]"
          >
            SNS
            <span className={`text-[10px] text-ink-4 transition-transform duration-150 ${snsOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {snsOpen && (
            <div className="absolute top-[calc(100%+8px)] right-0 w-[220px] p-1.5 bg-bg border border-line rounded-[var(--radius-lg)] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.06)]">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded font-mono text-[13px] text-ink hover:bg-bg-soft transition-colors duration-150"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d={s.path} />
                  </svg>
                  {s.label}
                  <span className="ml-auto text-ink-4 text-xs">{s.handle}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="#contact"
          onClick={go('contact')}
          className="font-mono text-xs font-semibold px-3.5 py-2 bg-ink text-bg rounded-sm inline-flex items-center gap-2 max-md:shrink-0 whitespace-nowrap hover:bg-blue transition-colors duration-150 max-[380px]:px-2.5 max-[380px]:gap-1.5 max-[380px]:text-[11px]"
        >
          → contact
        </a>
      </div>
    </nav>
  );
}
