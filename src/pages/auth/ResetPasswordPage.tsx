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
import { isStrongPassword } from '@/lib/validation'

export function ResetPasswordPage() {
  const { t } = useLocale()
  const { updatePassword } = useAuth()
  const c = t.account.resetPassword
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    if (!isStrongPassword(password)) {
      setError(t.account.signUp.passwordWeak)
      return
    }
    if (password !== passwordConfirm) {
      setError(t.account.signUp.passwordMismatch)
      return
    }
    setBusy(true)
    const { error: err } = await updatePassword(password)
    setBusy(false)
    if (err) {
      setError(c.noSession)
      return
    }
    setDone(true)
  }

  return (
    <AuthShell eyebrow={c.eyebrow} title={c.title} subhead={c.subhead}>
      {done ? (
        <Notice>{c.success}</Notice>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <ErrorText>{error}</ErrorText>}
          <Field>
            <Label htmlFor="password">{c.passwordLabel}</Label>
            <Input
              id="password"
              type="password"
              placeholder={c.passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label htmlFor="passwordConfirm">{c.passwordConfirmLabel}</Label>
            <Input
              id="passwordConfirm"
              type="password"
              placeholder={c.passwordConfirmPlaceholder}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </Field>
          <SubmitButton type="submit" disabled={busy}>
            {c.submit}
          </SubmitButton>
        </form>
      )}
      <FootNote>
        <Link to={done ? '/mypage' : '/signin'}>
          <InlineLink>{done ? t.account.myPageNav : t.account.signIn.submit}</InlineLink>
        </Link>
      </FootNote>
    </AuthShell>
  )
}
