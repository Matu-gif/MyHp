'use client';

import { useActionState, useEffect, useState } from 'react';
import Link from 'next/link';
import { sendContact, type ContactState } from '../actions/contact';
import Loader from '@/components/Loader';

const initialState: ContactState = { ok: false };

// ローダーのスタイルはここで切り替えて試せます: 'ring' | 'dots' | 'bars' | 'pulse'
const LOADER_VARIANT = 'ring' as const;

type Step = 'input' | 'confirm' | 'done';

export default function ContactPage() {
  const [step, setStep] = useState<Step>('input');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [localError, setLocalError] = useState('');

  const [state, formAction, isPending] = useActionState(sendContact, initialState);

  useEffect(() => {
    if (state.ok) setStep('done');
  }, [state.ok]);

  const toConfirm = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setLocalError('お名前・メールアドレス・お問い合わせ内容をすべてご入力ください。');
      return;
    }
    // メール形式チェック（サーバー側 isValidEmail と同じ正規表現）
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setLocalError('メールアドレスの形式が正しくありません。');
      return;
    }
    setLocalError('');
    setStep('confirm');
  };

  const stepIndex = step === 'input' ? 1 : step === 'confirm' ? 2 : 3;

  return (
    <main className="min-h-screen bg-bg">
      <div className="shell section-pad max-w-[720px] mx-auto">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs text-ink-3 hover:text-ink transition-colors duration-150"
          >
            ← トップへ戻る
          </Link>
          <span className="font-mono text-xs text-ink-4 tracking-[0.1em]">// CONTACT</span>
        </div>

        <div className="bg-ink text-bg rounded-[var(--radius-lg)] p-12 max-[760px]:p-[32px_24px] relative overflow-hidden contact-card">
          <div className="relative">
            <StepIndicator current={stepIndex} />

            {/* ===== 送信中 ===== */}
            {isPending && (
              <div className="py-16 flex items-center justify-center">
                <Loader variant={LOADER_VARIANT} label="送信しています…" />
              </div>
            )}

            {/* ===== 入力 ===== */}
            {!isPending && step === 'input' && (
              <>
                <h1 className="font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] mb-2">
                  お問い合わせ
                </h1>
                <p className="text-ink-4 text-sm mb-8">
                  必要事項をご入力のうえ、確認画面へお進みください。
                </p>

                <div className="flex flex-col gap-5">
                  <Field label="お名前">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ct-input"
                      placeholder="山田 太郎"
                    />
                  </Field>
                  <Field label="メールアドレス">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ct-input"
                      placeholder="example@mail.com"
                    />
                  </Field>
                  <Field label="お問い合わせ内容">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="ct-input resize-y"
                      placeholder="ご相談内容をご記入ください。"
                    />
                  </Field>
                </div>

                {localError && (
                  <p className="text-[#ffb4b4] text-sm mt-4 font-mono">{localError}</p>
                )}

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={toConfirm}
                    className="inline-flex items-center gap-2 px-6 py-[16px] bg-yellow text-ink rounded font-mono text-sm font-semibold border border-yellow transition-all duration-150 hover:bg-bg hover:border-bg"
                  >
                    確認画面へ →
                  </button>
                </div>
              </>
            )}

            {/* ===== 確認 ===== */}
            {!isPending && step === 'confirm' && (
              <>
                <h1 className="font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] mb-2">
                  入力内容の確認
                </h1>
                <p className="text-ink-4 text-sm mb-8">
                  内容をご確認のうえ、送信してください。
                </p>

                <dl className="flex flex-col gap-5 border-t border-white/12 pt-6">
                  <ReviewRow label="お名前" value={name} />
                  <ReviewRow label="メールアドレス" value={email} />
                  <ReviewRow label="お問い合わせ内容" value={message} multiline />
                </dl>

                {state.error && (
                  <p className="text-[#ffb4b4] text-sm mt-6 font-mono">{state.error}</p>
                )}

                <form action={formAction} className="mt-8 flex flex-wrap gap-4">
                  <input type="hidden" name="name" value={name} />
                  <input type="hidden" name="email" value={email} />
                  <input type="hidden" name="message" value={message} />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-[16px] bg-yellow text-ink rounded font-mono text-sm font-semibold border border-yellow transition-all duration-150 hover:bg-bg hover:border-bg"
                  >
                    送信する →
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep('input')}
                    className="inline-flex items-center gap-2 px-6 py-[16px] bg-transparent text-bg rounded font-mono text-sm font-semibold border border-white/30 transition-all duration-150 hover:bg-bg hover:text-ink hover:border-bg"
                  >
                    修正する
                  </button>
                </form>
              </>
            )}

            {/* ===== 完了 ===== */}
            {!isPending && step === 'done' && (
              <div className="py-8">
                <div className="font-mono text-xs text-yellow tracking-[0.1em] mb-4">
                  // SENT
                </div>
                <h1 className="font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] mb-4">
                  お問い合わせ情報を送信しました<span className="text-yellow">.</span>
                </h1>
                <p className="text-ink-4 text-[15px] mb-8" style={{ textWrap: 'pretty' }}>
                  ご連絡ありがとうございます。折り返しご返信いたします。
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-[16px] bg-yellow text-ink rounded font-mono text-sm font-semibold border border-yellow transition-all duration-150 hover:bg-bg hover:border-bg"
                >
                  トップへ戻る →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const STEPS = ['入力', '確認', '完了'];

function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex items-start mb-10" aria-label="お問い合わせの進捗">
      {STEPS.map((label, i) => {
        const num = i + 1;
        const done = num < current;
        const active = num === current;
        const lineDone = num <= current - 1; // 直前の円までが完了していれば手前のラインを点灯

        return (
          <li
            key={label}
            className={`flex items-start ${i === STEPS.length - 1 ? '' : 'flex-1'}`}
          >
            <div className="flex flex-col items-center gap-2">
              <span
                aria-current={active ? 'step' : undefined}
                className={[
                  'w-9 h-9 rounded-full border flex items-center justify-center font-mono text-sm transition-all duration-200',
                  done ? 'bg-yellow border-yellow text-ink' : '',
                  active
                    ? 'bg-yellow border-yellow text-ink font-bold shadow-[0_0_0_4px_rgba(255,214,10,0.18)]'
                    : '',
                  !done && !active ? 'bg-transparent border-white/25 text-ink-4' : '',
                ].join(' ')}
              >
                {done ? '✓' : num}
              </span>
              <span
                className={`font-mono text-[11px] tracking-[0.06em] ${
                  active ? 'text-bg font-semibold' : done ? 'text-white/70' : 'text-ink-4'
                }`}
              >
                {label}
              </span>
            </div>

            {i !== STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className={`flex-1 h-px mt-[18px] mx-2 ${lineDone ? 'bg-yellow' : 'bg-white/15'}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] text-ink-4 tracking-[0.08em] uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

function ReviewRow({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="grid grid-cols-[8em_1fr] gap-4 max-[520px]:grid-cols-1 max-[520px]:gap-1">
      <dt className="font-mono text-[11px] text-ink-4 tracking-[0.08em] uppercase pt-1">
        {label}
      </dt>
      <dd
        className={`text-bg text-[15px] ${multiline ? 'whitespace-pre-wrap leading-[1.7]' : ''}`}
      >
        {value}
      </dd>
    </div>
  );
}
