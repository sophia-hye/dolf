import { useState, type FormEvent } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'

export function ContactFormSection() {
  const { t } = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // UI-only for now: no backend wired up yet.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{t.contact.form.eyebrow}</Eyebrow>
          <SectionTitle>{t.contact.form.title}</SectionTitle>
          <Body>{t.contact.form.body}</Body>
        </Head>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder={t.contact.form.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Submit type="submit">{t.contact.form.submit}</Submit>
        </Form>

        <B2B>
          <B2BText>{t.contact.form.b2bText}</B2BText>
          <OutlineButton type="button">{t.contact.form.b2bCta}</OutlineButton>
        </B2B>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 560px;

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`

const fieldStyles = `
  border-radius: 4px;
  padding: 15px 18px;
  font-size: 15px;
  width: 100%;
`

const Input = styled.input`
  ${fieldStyles}
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.kr};
  color: ${({ theme }) => theme.colors.ink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const Textarea = styled.textarea`
  ${fieldStyles}
  height: 130px;
  resize: vertical;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.kr};
  color: ${({ theme }) => theme.colors.ink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const Submit = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`

const B2B = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
`

const B2BText = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const OutlineButton = styled.button`
  padding: 14px 32px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.white};
  }
`
