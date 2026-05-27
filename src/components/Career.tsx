'use client';

import { useState } from 'react';
import SectionHead from './SectionHead';
import CareerRow from './CareerRow';
import { CAREER_ENTRIES } from '@/data/career';

const TABS = ['全て', '学歴', '職歴'] as const;
type Tab = (typeof TABS)[number];

export default function Career() {
  const [activeTab, setActiveTab] = useState<Tab>('全て');

  const filtered = activeTab === '全て'
    ? CAREER_ENTRIES
    : CAREER_ENTRIES.filter((e) => e.cat === activeTab);

  return (
    <section id="career" className="shell section-pad">
      <SectionHead num="02" title="Career." jp="// 経歴" />

      <div className="flex gap-1 border-b border-line mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 font-mono text-xs transition-colors duration-150 relative ${
              activeTab === tab
                ? 'text-ink font-semibold'
                : 'text-ink-4 hover:text-ink-3'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue" />
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        {filtered.map((e, i) => (
          <CareerRow key={e.id} entry={e} isLast={i === filtered.length - 1} />
        ))}
      </div>
    </section>
  );
}
