import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { PagesExplainedData } from '@/data/shop-types'

export function PagesExplainedSection({ data }: { data: PagesExplainedData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
        <Rows>
          {data.items.map((item, i) => (
            <Row key={item.title} $imageRight={i % 2 === 1}>
              <ImageCard>
                <Img src={item.image} alt={item.title} />
              </ImageCard>
              <Text>
                <RowTitle>{item.title}</RowTitle>
                <Desc>{item.desc}</Desc>
                <Usage>{item.usage}</Usage>
              </Text>
            </Row>
          ))}
        </Rows>
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
  gap: 56px;
  padding-top: 96px;
  padding-bottom: 96px;
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
  max-width: 1040px;
`

const Row = styled.div<{ $imageRight: boolean }>`
  display: flex;
  flex-direction: ${({ $imageRight }) => ($imageRight ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 56px;
`

const ImageCard = styled.div`
  width: 340px;
  height: 483px;
  flex-shrink: 0;
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

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const RowTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Desc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Usage = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.brandRed};
`
