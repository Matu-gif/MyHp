type Props = {
  num: string;
  title: string;
  jp: string;
};

export default function SectionHead({ num, title, jp }: Props) {
  return (
    <header className="flex items-baseline gap-4 mb-14 pb-[18px] border-b border-line flex-wrap max-[760px]:mb-9">
      <span className="font-mono text-xs text-blue font-semibold tracking-[0.1em]">{num}</span>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] max-[760px]:text-[28px]">{title}</h2>
      <span className="text-[13px] text-ink-4 ml-auto font-mono hidden md:inline">{jp}</span>
    </header>
  );
}
