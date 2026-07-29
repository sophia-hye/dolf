import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthShell } from '@/pages/auth/AuthShell'
import {
  Field,
  Label,
  Input,
  SubmitButton,
  InlineLink,
  FootNote,
  Notice,
  ErrorText,
} from '@/pages/auth/authStyles'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'

export function ForgotPasswordPage() {
  const { t, locale } = useLocale()
  const { resetPassword } = useAuth()
  const c = t.account.forgotPassword
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    const { error: err } = await resetPassword(email, locale)
    setBusy(false)
    if (err) {
      setError(err)
      return
    }
    setSent(true)
  }

  return (
    <AuthShell eyebrow={c.eyebrow} title={c.title} subhead={c.subhead}>
      {sent ? (
        <Notice>{c.sent}</Notice>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <ErrorText>{error}</ErrorText>}
          <Field>
            <Label htmlFor="email">{c.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder={c.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <SubmitButton type="submit" disabled={busy}>
            {c.submit}
          </SubmitButton>
        </form>
      )}
      <FootNote>
        <Link to="/signin">
          <InlineLink>{c.backToSignIn}</InlineLink>
        </Link>
      </FootNote>
    </AuthShell>
  )
}
