export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="shell shell-full py-8 pb-12 border-t border-line mt-20 font-mono text-[11px] text-ink-4 flex justify-center gap-4 flex-wrap">
      <span>© {year} Shouta Matsuo. All rights reserved</span>
    </footer>
  );
}
