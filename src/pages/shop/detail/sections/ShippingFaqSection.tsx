import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { ShippingFaqData } from '@/data/shop-types'

export function ShippingFaqSection({ data }: { data: ShippingFaqData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Content>
          <Block>
            <BlockTitle>{data.shipping.title}</BlockTitle>
            <BlockBody>{data.shipping.body}</BlockBody>
          </Block>
          {data.faq.map((item) => (
            <Block key={item.q}>
              <Question>{item.q}</Question>
              <BlockBody>{item.a}</BlockBody>
            </Block>
          ))}
        </Content>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 720px;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const BlockTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Question = styled.h4`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const BlockBody = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
