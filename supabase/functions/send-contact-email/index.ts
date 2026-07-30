// DoLF — contact form → email to the store inbox (hello@dolfstory.com).
//
// The frontend calls this with { name, email, message, locale }. We deliver the
// message through Resend to the store inbox, with reply_to set to the visitor's
// address so the owner can reply straight from their mailbox.
//
// Deploy: supabase functions deploy send-contact-email
// Secret:  supabase secrets set RESEND_API_KEY=re_...
// (No auth needed — this is a public contact form. Verify JWT is disabled below.)

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const FROM = 'DoLF Contact <noreply@dolfstory.com>'
const TO = 'hello@dolfstory.com'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const MAX_NAME = 120
const MAX_EMAIL = 200
const MAX_MESSAGE = 5000

// Minimal HTML-escape so message content can't break the email markup.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

function renderEmail(name: string, email: string, message: string, locale: string): string {
  const rows = [
    ['이름 / Name', escapeHtml(name)],
    ['이메일 / Email', escapeHtml(email)],
    ['언어 / Locale', escapeHtml(locale)],
  ]
  const infoRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:#6e6e72;width:120px;vertical-align:top;">${label}</td><td style="padding:6px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:#1f1f21;">${value}</td></tr>`,
    )
    .join('')
  const body = escapeHtml(message).replace(/\n/g, '<br />')
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fcfbf9;margin:0;padding:32px 0;">
  <tr><td align="center">
    <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="width:520px;max-width:520px;background-color:#ffffff;border:1px solid #e2dfd9;border-radius:8px;">
      <tr><td style="padding:32px 40px 4px;">
        <span style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;letter-spacing:0.5px;color:#1f1f21;">D<span style="color:#a81212;">o</span>LF</span>
        <span style="font-family:Georgia,serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a81212;margin-left:10px;">New Inquiry</span>
      </td></tr>
      <tr><td style="padding:12px 40px 0;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:500;color:#1f1f21;">웹사이트 문의가 도착했습니다</h1>
      </td></tr>
      <tr><td style="padding:16px 40px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${infoRows}</table>
      </td></tr>
      <tr><td style="padding:16px 40px 0;"><div style="border-top:1px solid #e2dfd9;"></div></td></tr>
      <tr><td style="padding:16px 40px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.7;color:#1f1f21;">${body}</td></tr>
      <tr><td style="padding:24px 40px 32px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:#6e6e72;">
        답장은 이 메일에 바로 회신하시면 문의하신 분(${escapeHtml(email)})에게 전달됩니다.
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
    const payload = await req.json()
    const name = String(payload?.name ?? '').trim()
    const email = String(payload?.email ?? '').trim()
    const message = String(payload?.message ?? '').trim()
    const locale = String(payload?.locale ?? 'ko').trim().slice(0, 8)

    if (!name || !email || !message) {
      return json({ error: 'name, email and message are required' }, 400)
    }
    if (!isEmail(email)) return json({ error: 'invalid email' }, 400)
    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return json({ error: 'field too long' }, 400)
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: `[DoLF 문의] ${name} 님`,
        html: renderEmail(name, email, message, locale),
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
