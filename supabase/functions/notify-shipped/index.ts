// DoLF — notify the customer by SMS that their order has shipped.
//
// Called by the admin from the order detail page right after the order's status
// is advanced to 'shipped' (carrier + tracking number entered). The shipping
// update itself is done client-side under the admin's RLS; this function only
// sends the customer SMS, so the Solapi secret never reaches the browser.
//
// Security: the caller MUST be an admin. We verify this with the caller's JWT
// via public.is_admin(); non-admins get 403. The order is then read with the
// service role to fetch the recipient phone.
//
// Deploy:  supabase functions deploy notify-shipped
// Secrets: SOLAPI_API_KEY, SOLAPI_API_SECRET, SMS_SENDER (registered 발신전용 번호)
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are injected.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.111.0'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const onlyDigits = (s: string) => (s || '').replace(/[^0-9]/g, '')

async function hmacSha256Hex(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function solapiSend(to: string, text: string): Promise<boolean> {
  const apiKey = Deno.env.get('SOLAPI_API_KEY')
  const apiSecret = Deno.env.get('SOLAPI_API_SECRET')
  const toNum = onlyDigits(to)
  const fromNum = onlyDigits(Deno.env.get('SMS_SENDER') || '')
  if (!apiKey || !apiSecret || !fromNum || !toNum) return false // not configured / no recipient
  const date = new Date().toISOString()
  const salt = crypto.randomUUID().replace(/-/g, '')
  const signature = await hmacSha256Hex(apiSecret, date + salt)
  const res = await fetch('https://api.solapi.com/messages/v4/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
    },
    body: JSON.stringify({ message: { to: toNum, from: fromNum, text } }),
  })
  if (!res.ok) {
    console.error('solapi send failed', res.status, await res.text())
    return false
  }
  return true
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })

  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

  try {
    const authHeader = req.headers.get('Authorization') ?? ''
    if (!authHeader) return json({ error: 'unauthorized' }, 401)

    // Verify the caller is an admin using their JWT.
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    })
    const { data: isAdmin, error: adminErr } = await userClient.rpc('is_admin')
    if (adminErr) return json({ error: 'admin_check_failed', detail: adminErr.message }, 500)
    if (isAdmin !== true) return json({ error: 'forbidden' }, 403)

    const { orderId } = await req.json().catch(() => ({ orderId: null }))
    if (!orderId) return json({ error: 'missing_order_id' }, 400)

    // Read the order with the service role to get the recipient phone.
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
    const { data: order, error: oErr } = await admin
      .from('orders')
      .select('recipient, phone, carrier, tracking_no, status')
      .eq('id', orderId)
      .maybeSingle()
    if (oErr) return json({ error: 'order_read_failed', detail: oErr.message }, 500)
    if (!order) return json({ error: 'order_not_found' }, 404)

    const phone = String(order.phone ?? '')
    if (!onlyDigits(phone)) return json({ sent: false, reason: 'no_phone' })

    const name = String(order.recipient ?? '') || '고객'
    const carrier = String(order.carrier ?? '') || '-'
    const tracking = String(order.tracking_no ?? '') || '-'
    const text =
      `[DoLF] 상품이 발송되었습니다\n` +
      `${name}님, 주문하신 상품이 출발했어요.\n` +
      `· 택배사: ${carrier}\n` +
      `· 송장번호: ${tracking}\n` +
      `택배사에서 송장번호로 배송조회가 가능합니다.\n` +
      `문의 hello@dolfstory.com`

    const sent = await solapiSend(phone, text)
    return json({ sent })
  } catch (e) {
    return json({ error: String(e) }, 500)
  }
})
