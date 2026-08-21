import SectionHead from './SectionHead';

// 実績（Works）の掲載は準備中のため、現在は案内メッセージのみ表示しています。
// 各実績の中身は src/data/works.ts に残してあり、公開時に一覧表示へ戻せます。
export default function Works() {
  return (
    <section id="works" className="shell section-pad">
      <SectionHead num="05" title="Works." jp="// 制作物" />

      <div className="mt-14">
        <div className="rounded-[var(--radius-lg)] border border-line bg-bg-soft px-8 py-16 text-center max-[600px]:px-5 max-[600px]:py-12">
          {/* ブロックは mx-auto で中央寄せ、本文は text-left で左寄せ */}
          <p
            className="text-ink-2 text-[15px] leading-[1.9] max-w-[540px] mx-auto text-left"
            style={{ textWrap: 'pretty' }}
          >
            ただいま、実績の掲載許可をいただいたり、準備したりしている途中です。公開できるようになりましたら、こちらに掲載いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
