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
} from '@/pages/auth/authStyles'
import { useLocale } from '@/i18n/context'
import { useAuth } from '@/state/auth-context'

export function SignUpPage() {
  const { t } = useLocale()
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const c = t.account.signUp

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp({ name, email, phone: phone || undefined })
    navigate('/mypage', { replace: true })
  }

  return (
    <AuthShell eyebrow={c.eyebrow} title={c.title} subhead={c.subhead}>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="country">{c.countryLabel}</Label>
          <Select id="country" defaultValue="KR">
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
          <Input id="password" type="password" placeholder={c.passwordPlaceholder} />
        </Field>
        <Field>
          <Label htmlFor="passwordConfirm">{c.passwordConfirmLabel}</Label>
          <Input
            id="passwordConfirm"
            type="password"
            placeholder={c.passwordConfirmPlaceholder}
          />
        </Field>
        <CheckboxRow>
          <input type="checkbox" required />
          {c.terms}
        </CheckboxRow>
        <SubmitButton type="submit">{c.submit}</SubmitButton>
      </form>
      <FootNote>
        {c.hasAccount} <Link to="/signin"><InlineLink>{c.signInLink}</InlineLink></Link>
      </FootNote>
    </AuthShell>
  )
}
