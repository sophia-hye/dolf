import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '@/pages/auth/AuthShell'
import {
  Field,
  Label,
  Input,
  Select,
  SubmitButton,
  InlineLink,
  CheckboxRow,
  FootNote,
  ErrorText,
} from '@/pages/auth/authStyles'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'
import { isStrongPassword, isValidPhone } from '@/lib/validation'
import { pushEvent } from '@/lib/gtm'

export function SignUpPage() {
  const { t, locale } = useLocale()
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [country, setCountry] = useState('KR')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const c = t.account.signUp

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    if (!isStrongPassword(password)) {
      setError(c.passwordWeak)
      return
    }
    if (password !== passwordConfirm) {
      setError(c.passwordMismatch)
      return
    }
    if (!isValidPhone(phone, country)) {
      setError(c.phoneInvalid)
      return
    }
    setBusy(true)
    const { error: err, user } = await signUp({
      name,
      email,
      password,
      phone: phone || undefined,
      country,
      locale,
    })
    setBusy(false)
    if (err) {
      setError(err)
      return
    }
    pushEvent('sign_up', { method: 'email' })
    navigate(user ? '/mypage' : '/signin', { replace: true })
  }

  return (
    <AuthShell eyebrow={c.eyebrow} title={c.title} subhead={c.subhead}>
      <form onSubmit={handleSubmit}>
        {error && <ErrorText>{error}</ErrorText>}
        <Field>
          <Label htmlFor="country">{c.countryLabel}</Label>
          <Select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="KR">대한민국 (KR)</option>
            <option value="US">United States (US)</option>
            <option value="JP">日本 (JP)</option>
          </Select>
        </Field>
        <Field>
          <Label htmlFor="name">{c.nameLabel}</Label>
          <Input
            id="name"
            type="text"
            placeholder={c.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Field>
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
          <Label htmlFor="phone">{c.phoneLabel}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={c.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
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
        <CheckboxRow>
          <input type="checkbox" required />
          {c.terms}
        </CheckboxRow>
        <SubmitButton type="submit" disabled={busy}>
          {c.submit}
        </SubmitButton>
      </form>
      <FootNote>
        {c.hasAccount} <Link to="/signin"><InlineLink>{c.signInLink}</InlineLink></Link>
      </FootNote>
    </AuthShell>
  )
}
