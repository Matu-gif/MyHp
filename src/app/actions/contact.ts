'use server';

/**
 * お問い合わせ内容を LINE Messaging API 経由で LINE グループへ push するサーバーアクション。
 * トークンとグループIDは環境変数（サーバー側のみ）で管理します。
 *   - LINE_CHANNEL_ACCESS_TOKEN … Messaging API のチャネルアクセストークン
 *   - LINE_GROUP_ID … 送信先グループの ID
 */

export type ContactState = {
  ok: boolean;
  error?: string;
};

const LINE_PUSH_ENDPOINT = 'https://api.line.me/v2/bot/message/push';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  // ---- バリデーション ----
  if (!name || !email || !message) {
    return { ok: false, error: 'お名前・メールアドレス・お問い合わせ内容は必須です。' };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: 'メールアドレスの形式が正しくありません。' };
  }
  if (name.length > 100 || email.length > 200 || message.length > 2000) {
    return { ok: false, error: '入力内容が長すぎます。文字数をご確認ください。' };
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const groupId = process.env.LINE_GROUP_ID;
  if (!token || !groupId) {
    return { ok: false, error: '送信設定が未完了です。時間をおいて再度お試しください。' };
  }

  const text = [
    '【ポートフォリオサイト お問い合わせ】',
    `お名前: ${name}`,
    `メール: ${email}`,
    '内容:',
    message,
  ].join('\n');

  try {
    // ローディング演出のため最低約3秒表示する
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(LINE_PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to: groupId,
        messages: [{ type: 'text', text }],
      }),
    });

    if (!res.ok) {
      return { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: '送信に失敗しました。通信環境をご確認ください。' };
  }
}
