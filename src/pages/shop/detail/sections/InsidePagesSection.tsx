import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { InsidePagesData } from '@/data/shop-types'

export function InsidePagesSection({ data }: { data: InsidePagesData }) {
  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Gallery>
          {data.items.map((item) => (
            <Figure key={item.caption}>
              <ImageCard>
                <Img src={item.image} alt={item.caption} />
              </ImageCard>
              <Caption>{item.caption}</Caption>
            </Figure>
          ))}
        </Gallery>
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

const Gallery = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;
`

const Figure = styled.figure`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ImageCard = styled.div`
  height: 498px;
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

const Caption = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`
