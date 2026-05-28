'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'top', label: '01 / top' },
  { id: 'career', label: '02 / career' },
  { id: 'skills', label: '03 / skills' },
  { id: 'domains', label: '04 / domains' },
  { id: 'works', label: '05 / works' },
  { id: 'contact', label: '06 / contact' },
];

export default function Nav() {
  const [active, setActive] = useState('top');

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
      <div className="max-w-[1280px] mx-auto px-14 py-3.5 flex items-center gap-6 max-[1024px]:px-10 max-[760px]:px-5 max-md:gap-3">
        <a href="#top" onClick={go('top')} className="flex items-center gap-2.5 font-mono text-[13px] font-semibold">
          <span className="w-[22px] h-[22px] grid grid-cols-4 gap-0" style={{ imageRendering: 'pixelated' }}>
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
          <span>matsuo.dev</span>
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

        <a
          href="#contact"
          onClick={go('contact')}
          className="font-mono text-xs font-semibold px-3.5 py-2 bg-ink text-bg rounded-sm inline-flex items-center gap-2 hover:bg-blue transition-colors duration-150 ml-auto md:ml-0"
        >
          → contact
        </a>
      </div>
    </nav>
  );
}
