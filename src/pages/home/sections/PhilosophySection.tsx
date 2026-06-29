import styled from 'styled-components'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useLocale } from '@/i18n/context'
import dotMotif from '@/assets/motifs/dot.svg'
import lineMotif from '@/assets/motifs/line.svg'
import formMotif from '@/assets/motifs/form.svg'

const MOTIFS = [dotMotif, lineMotif, formMotif]

export function PhilosophySection() {
  const { t } = useLocale()

  return (
    <Section>
      <Inner>
        <Head>
          <Eyebrow>{t.philosophy.eyebrow}</Eyebrow>
          <SectionTitle>{t.philosophy.title}</SectionTitle>
          <Intro>{t.philosophy.intro}</Intro>
        </Head>

        <Columns>
          {t.philosophy.items.map((item, i) => (
            <Column key={item.title}>
              <Motif src={MOTIFS[i]} alt="" aria-hidden />
              <ColTitle>{item.title}</ColTitle>
              <ColDesc>{item.description}</ColDesc>
            </Column>
          ))}
        </Columns>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`

const Inner = styled(Container)`
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
  max-width: 720px;
  margin: 0 auto 64px;

  ${({ theme }) => theme.media.mobile} {
    margin-bottom: 40px;
  }
`

const Intro = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Columns = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1040px;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 40px;
  }
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`

const Motif = styled.img`
  width: 88px;
  height: 56px;
  object-fit: contain;
`

const ColTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const ColDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`
