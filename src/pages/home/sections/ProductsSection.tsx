import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'
import breatheImg from '@/assets/products/breathe.png'
import trackerImg from '@/assets/products/tracker.png'
import calendarImg from '@/assets/products/calendar.png'

const IMAGES = [breatheImg, trackerImg, calendarImg]

export function ProductsSection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{t.products.eyebrow}</Eyebrow>
          <SectionTitle>{t.products.title}</SectionTitle>
        </Head>

        <Grid>
          {t.products.items.map((item, i) => (
            <Card key={item.name}>
              <ImageWrap>
                <ProductImage src={IMAGES[i]} alt={item.name} />
              </ImageWrap>
              <CardTitle>{item.name}</CardTitle>
              <CardDesc>{item.description}</CardDesc>
            </Card>
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
  padding-top: 96px;
  padding-bottom: 104px;

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
  margin-bottom: 56px;

  ${({ theme }) => theme.media.mobile} {
    margin-bottom: 36px;
  }
`

const Grid = styled.div`
  display: flex;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  margin-bottom: 20px;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 8px;
`

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`
