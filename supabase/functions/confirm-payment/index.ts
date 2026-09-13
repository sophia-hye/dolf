// DoLF — confirm a Toss payment (server-side) and persist the order.
//
// Works for BOTH guests and members:
//   • The payment is verified with Toss using the SECRET key (never in the
//     browser). Only on a successful confirm do we store the order.
//   • The order is written with the SERVICE ROLE (bypasses RLS), so guest
//     orders (user_id = null) can be saved. Members keep their user_id, so the
//     order still appears in their order history.
//
// Deploy:  supabase functions deploy confirm-payment
// Secret:  supabase secrets set TOSS_SECRET_KEY=test_sk_...   (live: live_sk_...)
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are injected
// automatically by the platform.
//
// IMPORTANT: disable "Verify JWT" for this function (guests have no JWT):
//   supabase functions deploy confirm-payment --no-verify-jwt
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.111.0'

const TOSS_SECRET_KEY = Deno.env.get('TOSS_SECRET_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface Item {
  productSlug: string
  name: string
  unitPrice: number
  currency: string
  quantity: number
}

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

// Best-effort owner SMS on a new paid order via Solapi. Never throws — the
// order is already saved, so a notification failure must not fail the request.
// No-op until SOLAPI_API_KEY / SOLAPI_API_SECRET / SMS_SENDER are configured.
//   supabase secrets set SOLAPI_API_KEY=...  SOLAPI_API_SECRET=...
//   supabase secrets set SMS_SENDER=01012345678   (registered 발신번호)
//   supabase secrets set SMS_TO=01062918111       (owner recipient; defaults to SMS_SENDER)
async function sendOwnerSms(
  admin: ReturnType<typeof createClient>,
  order: Record<string, unknown>,
  items: Item[],
): Promise<void> {
  const apiKey = Deno.env.get('SOLAPI_API_KEY')
  const apiSecret = Deno.env.get('SOLAPI_API_SECRET')
  const from = Deno.env.get('SMS_SENDER')
  const to = Deno.env.get('SMS_TO') || from
  if (!apiKey || !apiSecret || !from || !to) return // not configured yet

  // Respect the admin's "new order" notification toggle.
  const { data: st } = await admin
    .from('store_settings')
    .select('notify_new_order')
    .eq('id', 1)
    .maybeSingle()
  if (st && st.notify_new_order === false) return

  const count = items.reduce((n, it) => n + Number(it.quantity || 0), 0)
  const first = items[0]?.name ?? '상품'
  const more = items.length > 1 ? ` 외 ${items.length - 1}건` : ''
  const total = Number(order?.total ?? 0).toLocaleString('ko-KR')
  const text = `[DoLF] 새 주문\n${String(order?.recipient ?? '')} / ${total}원\n${first}${more} (${count}개)`

  const date = new Date().toISOString()
  const salt = crypto.randomUUID().replace(/-/g, '')
  const signature = await hmacSha256Hex(apiSecret, date + salt)
  const res = await fetch('https://api.solapi.com/messages/v4/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
    },
    body: JSON.stringify({ message: { to, from, text } }),
  })
  if (!res.ok) {
    console.error('owner sms failed', res.status, await res.text())
  }
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
    const p = await req.json()
    const paymentKey = String(p?.paymentKey ?? '').trim()
    const tossOrderId = String(p?.tossOrderId ?? '').trim()
    const amount = Number(p?.amount)
    const order = p?.order ?? {}

    if (!paymentKey || !tossOrderId || !Number.isFinite(amount) || amount <= 0) {
      return json({ error: 'missing_payment_params' }, 400)
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

    // Idempotency — if this Toss order was already saved (e.g. page refresh),
    // return the existing order instead of confirming/inserting again.
    const { data: existing } = await admin
      .from('orders')
      .select('id')
      .eq('toss_order_id', tossOrderId)
      .maybeSingle()
    if (existing) return json({ id: existing.id, alreadySaved: true })

    // Integrity — the charged amount must equal the order total we recorded.
    if (Number(order?.total) !== amount) {
      return json({ error: 'amount_mismatch' }, 400)
    }

    // Verify the payment with Toss using the secret key.
    const basic = btoa(`${TOSS_SECRET_KEY}:`)
    const confirmRes = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentKey, orderId: tossOrderId, amount }),
    })
    const toss = await confirmRes.json()
    if (!confirmRes.ok) {
      return json({ error: 'payment_confirm_failed', detail: toss }, 402)
    }

    // Associate a member if a real user JWT was sent; guests resolve to null.
    let userId: string | null = null
    const authHeader = req.headers.get('Authorization') ?? ''
    if (authHeader) {
      const userClient = createClient(SUPABASE_URL, ANON_KEY, {
        global: { headers: { Authorization: authHeader } },
      })
      const { data } = await userClient.auth.getUser()
      userId = data.user?.id ?? null
    }

    const { data: inserted, error: oErr } = await admin
      .from('orders')
      .insert({
        user_id: userId,
        status: 'paid',
        currency: String(order?.currency ?? 'KRW'),
        subtotal: Number(order?.subtotal ?? 0),
        shipping_fee: Number(order?.shippingFee ?? 0),
        total: Number(order?.total ?? amount),
        recipient: order?.recipient ?? null,
        email: order?.email ?? null,
        address: order?.address ?? null,
        phone: order?.phone ?? null,
        payment_ref: paymentKey,
        toss_order_id: tossOrderId,
        payment_method: toss?.method ?? null,
        paid_at: new Date().toISOString(),
      })
      .select('id')
      .single()

    if (oErr || !inserted) {
      return json({ error: 'order_insert_failed', detail: oErr?.message }, 500)
    }

    const items: Item[] = Array.isArray(order?.items) ? order.items : []
    if (items.length) {
      const rows = items.map((it) => ({
        order_id: inserted.id,
        product_slug: String(it.productSlug),
        name: String(it.name),
        unit_price: Number(it.unitPrice),
        currency: String(it.currency),
        quantity: Number(it.quantity),
      }))
      const { error: iErr } = await admin.from('order_items').insert(rows)
      if (iErr) {
        return json({ id: inserted.id, warning: 'items_insert_failed', detail: iErr.message })
      }
    }

    // Notify the owner by SMS (best-effort; ignore failures so a working,
    // already-saved order is never reported as failed).
    await sendOwnerSms(admin, order, items).catch((e) => console.error('sms error', e))

    return json({ id: inserted.id, method: toss?.method ?? null })
  } catch (e) {
    return json({ error: String(e) }, 500)
  }
})
