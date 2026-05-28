export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="shell shell-full py-8 pb-12 border-t border-line mt-20 font-mono text-[11px] text-ink-4 flex justify-between gap-4 flex-wrap">
      <span>© {year} 松尾 翔太 / Shota Matsuo.</span>
      <span>built with Next.js mindset · designed pixel-by-pixel</span>
    </footer>
  );
}
