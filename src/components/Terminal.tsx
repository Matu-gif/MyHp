'use client';

import { useState, useEffect } from 'react';

type Line = {
  p?: string;
  cmd?: string;
  out?: string;
  cursor?: boolean;
  delay: number;
};

const lines: Line[] = [
  { p: '$', cmd: 'whoami', delay: 200 },
  { out: 'shota_matsuo — full-stack engineer', delay: 600 },
  { p: '$', cmd: 'cat profile.json', delay: 1100 },
  { out: '{', delay: 1700 },
  { out: '  "born":   "2006-12-30",', delay: 1800 },
  { out: '  "age":    19,', delay: 1900 },
  { out: '  "gender": "male",', delay: 2000 },
  { out: '  "based":  "JP",', delay: 2100 },
  { out: '  "stack":  ["Next.js", "TypeScript", "Tailwind", "Supabase"],', delay: 2200 },
  { out: '  "hobby":  ["Anime", "Claude", "Developing"],', delay: 2300 },
  { out: '  "edge":   "API-driven product engineering",', delay: 2400 },
  { out: '  "open":   true', delay: 2500 },
  { out: '}', delay: 2650 },
  { p: '$', cmd: '', cursor: true, delay: 2950 },
];

function colorize(text: string) {
  return text.split(/("[^"]+"|true|false|\d{4}-\d{2}-\d{2})/g).map((p, j) => {
    if (/^".*"$/.test(p)) return <span key={j} className="s">{p}</span>;
    if (p === 'true' || p === 'false') return <span key={j} className="c">{p}</span>;
    if (/^\d{4}-\d{2}-\d{2}$/.test(p)) return <span key={j} className="k">{p}</span>;
    return p;
  });
}

export default function Terminal() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setTyped((t) => Math.max(t, i + 1)), lines[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-[#0d0d10] rounded-lg overflow-hidden shadow-[0_24px_64px_-16px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.06)] border border-[#1f1f24] font-mono text-[13px] relative">
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#17171c] border-b border-[#1f1f24]">
        <div className="flex gap-1.5">
          <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-ink-4 text-[11px]">shota@matsuo — zsh — 80×24</span>
      </div>
      <div className="terminal-body px-8 py-[30px] pb-[34px] text-[#d6d6db] leading-[1.7] overflow-x-auto font-medium">
        {lines.slice(0, typed).map((l, i) => (
          <div key={i} className="whitespace-pre">
            {l.p && <span className="prompt">{l.p} </span>}
            {l.cmd !== undefined && <span className="cmd">{l.cmd}</span>}
            {l.cursor && (
              <span
                className="inline-block w-2 h-3.5 bg-yellow align-[-2px]"
                style={{ animation: 'blink 1s steps(2) infinite' }}
              />
            )}
            {l.out && <span className="out">{colorize(l.out)}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
