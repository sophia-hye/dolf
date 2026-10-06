import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'
import { BreatheIntro } from '@/components/visual/BreatheIntro'

// Editorial opener for the Breathe PDP — mirrors the bloom experience: a copy
// column that frames the concept, beside the animated cover where the dense
// scripture is pushed aside over three breaths to reveal "breathe".

const EYEBROW: Record<string, string> = {
  ko: '말씀으로 채운 커버',
  en: 'A cover made of scripture',
  ja: '言葉で満ちた表紙',
}
const TAG: Record<string, string> = {
  ko: '숨 가쁜 하루에, 세 번의 숨.',
  en: 'Three breaths for a breathless day.',
  ja: '息せく一日に、三つの息。',
}
// One sentence per line.
const BODY: Record<string, readonly string[]> = {
  ko: [
    '커버는 숨·생명·영에 관한 말씀으로 빽빽하게 채워집니다.',
    '세 번의 숨에 글자들이 조금씩 밀려나고, 그 여백으로 breathe가 드러나요.',
    '분주한 하루에도 숨 쉴 여백이 생기기를.',
  ],
  en: [
    'The cover is packed with scripture on breath, life and the Spirit.',
    'Over three breaths the letters are pushed aside, and in the space that opens, breathe appears.',
    'A little room to breathe in a crowded day.',
  ],
  ja: [
    '表紙は、息・いのち・霊についての言葉でびっしりと満たされています。',
    '三つの息で文字が少しずつ押しのけられ、その余白に breathe が現れます。',
    '慌ただしい一日にも、息をする余白を。',
  ],
}

export function BreatheCoverStory() {
  const { locale } = useLocale()
  const lang = locale in EYEBROW ? locale : 'en'

  return (
    <Section>
      <Grid>
        <Reveal>
          <Copy>
            <Lab>{EYEBROW[lang]}</Lab>
            <Name>Breathe</Name>
            <Tag>{TAG[lang]}</Tag>
            <Body>
              {BODY[lang].map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Body>
          </Copy>
        </Reveal>

        <Reveal>
          <BreatheIntro framed />
        </Reveal>
      </Grid>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: clamp(28px, 5vw, 64px) 0 clamp(28px, 5vw, 56px);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: clamp(28px, 5vw, 68px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const Copy = styled.div``

const Lab = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Name = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(54px, 10vw, 112px);
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 16px 0 6px;
  color: ${({ theme }) => theme.colors.ink};
`

const Tag = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(19px, 2.8vw, 28px);
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.soft};
`

const Body = styled.p`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.kr};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 46ch;
  margin: 20px 0 0;
  font-size: 15px;
  line-height: 1.7;
  word-break: normal;
  overflow-wrap: break-word;

  & > span {
    display: block;
  }
`
