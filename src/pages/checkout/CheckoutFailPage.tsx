import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useLocale } from '@/i18n/context'

// Toss redirects here with ?code=&message=&orderId= when a payment fails or is
// cancelled by the buyer.
export function CheckoutFailPage() {
  const { t } = useLocale()
  const c = t.account.checkout
  const [params] = useSearchParams()
  const code = params.get('code')
  const message = params.get('message')

  return (
    <Section>
      <Inner>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Panel>
          <FailTitle>{c.failTitle}</FailTitle>
          <Note>{message || c.failNote}</Note>
          {code && <Code>code: {code}</Code>}
          <Actions>
            <PrimaryLink to="/checkout">{c.retry}</PrimaryLink>
            <TextLink to="/cart">{c.backToShop}</TextLink>
          </Actions>
        </Panel>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;
`

const Inner = styled(Container)`
  padding-top: 72px;
  padding-bottom: 96px;
  max-width: 720px;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 0;
`

const FailTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Code = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
`

const PrimaryLink = styled(Link)`
  padding: 14px 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: 500;
`

const TextLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: ${({ theme }) => theme.colors.ink};
  text-decoration: underline;
`
