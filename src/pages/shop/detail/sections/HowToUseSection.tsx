import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { HowToUseData } from '@/data/shop-types'

export function HowToUseSection({ data }: { data: HowToUseData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Steps>
          {data.steps.map((step) => (
            <Step key={step.num}>
              <Num>{step.num}</Num>
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </Step>
          ))}
        </Steps>
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
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`

const Steps = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1040px;
`

const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`

const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 40px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.brandRed};
`

const StepTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const StepDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
