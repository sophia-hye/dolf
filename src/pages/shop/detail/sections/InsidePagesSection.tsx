import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { SectionHead } from '@/pages/shop/detail/sections/SectionHead'
import type { InsidePagesData } from '@/data/shop-types'

export function InsidePagesSection({ data }: { data: InsidePagesData }) {
  // Each card's width flex-grows in proportion to its image aspect ratio,
  // so a 2-page foldout renders twice as wide as a single sheet — and since
  // the images keep their own ratio, both cards end up the same height.
  const [ratios, setRatios] = useState<Record<string, number>>({})

  return (
    <Section>
      <Inner>
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <Gallery>
          {data.items.map((item) => (
            <Figure key={item.caption} style={{ flexGrow: ratios[item.caption] ?? 1 }}>
              <ImageCard>
                <Img
                  src={item.image}
                  alt={item.caption}
                  onLoad={(e) => {
                    const el = e.currentTarget
                    const r = el.naturalWidth / el.naturalHeight
                    setRatios((prev) =>
                      prev[item.caption] === r
                        ? prev
                        : { ...prev, [item.caption]: r },
                    )
                  }}
                />
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

  ${({ theme }) => theme.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Gallery = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 1180px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`

const Figure = styled.figure`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ImageCard = styled.div`
  width: 100%;
  /* Height follows the image's own ratio (portrait sheet vs. wide foldout),
     so it stays true to scale and never distorts on resize. */
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Caption = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`
