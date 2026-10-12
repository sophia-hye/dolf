import { supabase } from '@/lib/supabase'

export interface ContactInput {
  name: string
  email: string
  message: string
  locale?: string
  // Human-readable inquiry type (e.g. "단체 발주"); prepended to the email body
  // so the store sees it without a backend change.
  inquiryType?: string
}

export interface ContactResult {
  error: string | null
}

// Sends a contact-form message to the store inbox via the send-contact-email
// Edge Function (delivered through Resend). Returns a plain error string so the
// UI can decide how to present it.
export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  if (!supabase) return { error: 'not-configured' }

  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()
  if (!name || !email || !message) return { error: 'required' }

  const inquiryType = input.inquiryType?.trim()
  const fullMessage = inquiryType
    ? `[문의 유형 / Inquiry: ${inquiryType}]\n\n${message}`
    : message

  try {
    const { error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        name,
        email,
        message: fullMessage,
        locale: input.locale ?? 'ko',
        inquiryType: inquiryType ?? null,
      },
    })
    return { error: error ? error.message : null }
  } catch (e) {
    console.error('sendContactMessage failed:', e)
    return { error: 'send-failed' }
  }
}
