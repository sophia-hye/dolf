import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { RelatedData } from '@/data/shop-types'

export function RelatedSection({ data }: { data: RelatedData }) {
  return (
    <Section>
      <Inner>
        <CenteredEyebrow>{data.eyebrow}</CenteredEyebrow>
        <Cards>
          {data.cards.map((card) => (
            <Card key={card.title}>
              <ImageCard>
                <Img src={card.image} alt={card.title} />
              </ImageCard>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </Card>
          ))}
        </Cards>
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
  gap: 40px;
  padding-top: 96px;
  padding-bottom: 104px;
`

const CenteredEyebrow = styled(Eyebrow)`
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  gap: 28px;
  width: 100%;
  max-width: 760px;
`

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ImageCard = styled.div`
  height: 520px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`
