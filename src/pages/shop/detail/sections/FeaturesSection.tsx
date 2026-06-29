import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { FeaturesData } from '@/data/shop-types'

export function FeaturesSection({ data }: { data: FeaturesData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Grid>
          {data.items.map((item) => (
            <Cell key={item.title}>
              <CellTitle>{item.title}</CellTitle>
              <CellDesc>{item.desc}</CellDesc>
            </Cell>
          ))}
        </Grid>
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

  ${({ theme }) => theme.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
  width: 100%;
  max-width: 1180px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CellTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const CellDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
