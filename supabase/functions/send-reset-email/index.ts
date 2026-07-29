// DoLF — password-reset email, localized to the request-time UI language.
//
// The frontend calls this with { email, locale, redirectTo }. We mint a recovery
// action link with the admin API (no email sent by Supabase) and deliver our own
// localized HTML through Resend. This lets the email match whatever language the
// visitor is viewing when they click "forgot password" — which Supabase's built-in
// templates cannot do (they only see the account's stored metadata).
//
// Deploy: supabase functions deploy send-reset-email
// Secret:  supabase secrets set RESEND_API_KEY=re_...
// (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically.)

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const FROM = 'DoLF <noreply@dolfstory.com>'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

type Locale = 'ko' | 'en' | 'ja'

function pickLocale(value: unknown): Locale {
  return value === 'en' || value === 'ja' ? value : 'ko'
}

const COPY: Record<Locale, {
  subject: string
  heading: string
  body: string
  button: string
  fallback: (link: string) => string
  note: string
}> = {
  ko: {
    subject: '[DoLF] 비밀번호 재설정 안내',
    heading: '비밀번호 재설정',
    body: '안녕하세요. 아래 버튼을 눌러 새로운 비밀번호를 설정해 주세요.<br />이 링크는 <strong style="color:#1f1f21;">1시간 후 만료</strong>됩니다.',
    button: '비밀번호 재설정하기',
    fallback: (l) => `버튼이 열리지 않으면 ${l}를 클릭해 주세요.`,
    note: '본인이 요청하지 않았다면 이 메일을 무시하셔도 됩니다. 비밀번호는 변경되지 않습니다.',
  },
  en: {
    subject: 'Reset your DoLF password',
    heading: 'Reset your password',
    body: 'Click the button below to set a new password.<br />This link <strong style="color:#1f1f21;">expires in 1 hour</strong>.',
    button: 'Reset password',
    fallback: (l) => `If the button doesn't work, click ${l}.`,
    note: "If you didn't request a password reset, you can safely ignore this email — your password won't change.",
  },
  ja: {
    subject: 'DoLF パスワードの再設定',
    heading: 'パスワードの再設定',
    body: '下のボタンから新しいパスワードを設定してください。<br />このリンクは<strong style="color:#1f1f21;">1時間後に期限切れ</strong>となります。',
    button: 'パスワードを再設定',
    fallback: (l) => `ボタンが開かない場合は${l}をクリックしてください。`,
    note: 'お心当たりがない場合は、このメールを無視してください。パスワードは変更されません。',
  },
}

const FALLBACK_WORD: Record<Locale, string> = { ko: '여기', en: 'here', ja: 'こちら' }

function renderEmail(locale: Locale, actionUrl: string): string {
  const c = COPY[locale]
  const link = `<a href="${actionUrl}" style="color:#a81212;text-decoration:underline;">${FALLBACK_WORD[locale]}</a>`
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fcfbf9;margin:0;padding:32px 0;">
  <tr><td align="center">
    <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="width:480px;max-width:480px;background-color:#ffffff;border:1px solid #e2dfd9;border-radius:8px;">
      <tr><td align="center" style="padding:36px 40px 8px;">
        <span style="font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:700;letter-spacing:0.5px;color:#1f1f21;">D<span style="color:#a81212;">o</span>LF</span>
      </td></tr>
      <tr><td align="center" style="padding:0 40px 4px;">
        <span style="font-family:Georgia,serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a81212;">Reset Password</span>
      </td></tr>
      <tr><td align="center" style="padding:16px 40px 0;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:500;color:#1f1f21;">${c.heading}</h1>
      </td></tr>
      <tr><td style="padding:16px 44px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.7;color:#6e6e72;text-align:center;">${c.body}</td></tr>
      <tr><td align="center" style="padding:28px 44px 8px;">
        <a href="${actionUrl}" style="display:inline-block;background-color:#a81212;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:500;letter-spacing:0.3px;text-decoration:none;padding:14px 40px;border-radius:4px;">${c.button}</a>
      </td></tr>
      <tr><td style="padding:12px 44px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;line-height:1.6;color:#6e6e72;text-align:center;">${c.fallback(link)}</td></tr>
      <tr><td style="padding:24px 44px 0;"><div style="border-top:1px solid #e2dfd9;"></div></td></tr>
      <tr><td style="padding:20px 44px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;line-height:1.7;color:#6e6e72;text-align:center;">${c.note}</td></tr>
      <tr><td align="center" style="padding:28px 40px 36px;">
        <span style="font-family:Georgia,serif;font-size:15px;font-weight:700;color:#1f1f21;">D<span style="color:#a81212;">o</span>LF</span><br />
        <span style="font-family:Georgia,serif;font-size:12px;font-style:italic;color:#6e6e72;">dot of line and form</span><br />
        <span style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:#6e6e72;">@dolf._official &nbsp;·&nbsp; dolfstory.com</span>
      </td></tr>
    </table>
  </td></tr>
</table>`
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS })
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })

  try {
    const { email, locale, redirectTo } = await req.json()
    if (!email || typeof email !== 'string') {
      return json({ error: 'email is required' }, 400)
    }
    const loc = pickLocale(locale)

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
    const { data, error } = await admin.auth.admin.generateLink({
      type: 'recovery',
      email: email.trim(),
      options: redirectTo ? { redirectTo } : undefined,
    })

    // Don't reveal whether the account exists: on any generateLink failure
    // (e.g. user not found), return success without sending.
    const actionUrl = data?.properties?.action_link
    if (error || !actionUrl) return json({ ok: true })

    const c = COPY[loc]
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: email.trim(),
        subject: c.subject,
        html: renderEmail(loc, actionUrl),
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      return json({ error: 'send_failed', detail }, 502)
    }
    return json({ ok: true })
  } catch (e) {
    return json({ error: String(e) }, 500)
  }
})
