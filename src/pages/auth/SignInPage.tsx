import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '@/pages/auth/AuthShell'
import {
  Field,
  FieldRow,
  Label,
  Input,
  SubmitButton,
  InlineLink,
  CheckboxRow,
  FootNote,
  Notice,
  ErrorText,
} from '@/pages/auth/authStyles'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'

export function SignInPage() {
  const { t } = useLocale()
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const c = t.account.signIn

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    const { error: err, user } = await signIn(email, password)
    setBusy(false)
    if (err || !user) {
      setError(c.notFound)
      return
    }
    navigate(user.role === 'admin' ? '/admin' : '/mypage', { replace: true })
  }

  return (
    <AuthShell eyebrow={c.eyebrow} title={c.title} subhead={c.subhead}>
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
        <Field>
          <FieldRow>
            <Label htmlFor="password">{c.passwordLabel}</Label>
            <Link to="/forgot-password"><InlineLink>{c.forgotPassword}</InlineLink></Link>
          </FieldRow>
          <Input
            id="password"
            type="password"
            placeholder={c.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        <CheckboxRow>
          <input type="checkbox" defaultChecked />
          {c.keepLoggedIn}
        </CheckboxRow>
        <SubmitButton type="submit" disabled={busy}>
          {c.submit}
        </SubmitButton>
      </form>
      <Notice>{c.notice}</Notice>
      <FootNote>
        {c.noAccount} <Link to="/signup"><InlineLink>{c.signUpLink}</InlineLink></Link>
      </FootNote>
    </AuthShell>
  )
}
