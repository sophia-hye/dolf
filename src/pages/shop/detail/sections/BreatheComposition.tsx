import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'

// "What's in the book" section for the Breathe PDP: announces the diary's make-up
// in binding order — front cover, inner sections (with page counts), back cover —
// derived from the actual print files (cover 2p + 128p inner block). Each card
// shows the real page design rendered from the print PDF
// (public/images/pdp-pages), large enough to read the layout. Sits just above the
// moodboard's "IN USE" block. Copy is held locally in ko / en / ja.

const IMG = '/images/pdp-pages/'

type Card = {
  tag: string
  kr: string
  en: string
  count?: number
  desc: string
  img: string
}
type Copy = {
  eyebrow: string
  title: string
  intro: string
  unit: string
  hint: string
  cards: readonly Card[]
  foot: string
}

const COPY: Record<string, Copy> = {
  ko: {
    eyebrow: 'WHAT’S IN THE BOOK',
    title: '구성 안내',
    intro: '앞표지부터 뒷표지까지, 실제 페이지로 보는 Breathe의 구성이에요. 각 섹션이 몇 쪽인지 함께 안내합니다.',
    unit: 'p',
    hint: '옆으로 밀어 더 보기 →',
    cards: [
      { tag: 'FRONT', kr: '앞표지', en: 'Front cover', desc: 'breathe, 숨결로 채운 타이포그래피', img: `${IMG}front.jpg` },
      { tag: '01', kr: '속표지 · 오프닝', en: 'Title & Opening', count: 3, desc: '“STILL BECOMING — What’s your story?”', img: `${IMG}opening.jpg` },
      { tag: '02', kr: '먼슬리', en: 'Monthly', count: 2, desc: '두 달의 큰 흐름을 한눈에.', img: `${IMG}monthly.jpg` },
      { tag: '03', kr: '위클리', en: 'Weekly', count: 9, desc: '7am–11pm 시간 블록으로 한 주를.', img: `${IMG}weekly.jpg` },
      { tag: '04', kr: '플랜 노트', en: 'Dot · facing', count: 11, desc: '먼슬리·위클리와 마주보는 도트.', img: `${IMG}dot.jpg` },
      { tag: '05', kr: '트래커', en: 'Tracker', count: 2, desc: '하루 한 줄, –를 +로.', img: `${IMG}tracker.jpg` },
      { tag: '06', kr: '데일리 · QT', en: 'Daily · QT', count: 62, desc: '말씀·묵상·감사를 한 페이지에. 31일 × 두 달.', img: `${IMG}daily.jpg` },
      { tag: '07', kr: '마무리 · breathe', en: 'Closing', count: 1, desc: '“fill your paper with the breathings of your heart.”', img: `${IMG}breathe.jpg` },
      { tag: '08', kr: '자유 도트 노트', en: 'Free dot notes', count: 38, desc: '형식 없이 쓰는 도트 그리드. 마지막 장엔 QR.', img: `${IMG}notes.jpg` },
      { tag: 'BACK', kr: '뒷표지', en: 'Back cover', desc: 'DOT OF LINE AND FORM · DoLF', img: `${IMG}back.jpg` },
    ],
    foot: '표지 포함 총 130쪽 · 속지 128p',
  },
  en: {
    eyebrow: 'WHAT’S IN THE BOOK',
    title: 'What’s in the book',
    intro: 'From front cover to back, here is Breathe laid out in its actual pages — and how many pages each section holds.',
    unit: 'pp',
    hint: 'Swipe for more →',
    cards: [
      { tag: 'FRONT', kr: 'Front cover', en: 'Front cover', desc: 'breathe, drawn in dense typography', img: `${IMG}front.jpg` },
      { tag: '01', kr: 'Title & Opening', en: 'Title & Opening', count: 3, desc: '“STILL BECOMING — What’s your story?”', img: `${IMG}opening.jpg` },
      { tag: '02', kr: 'Monthly', en: 'Monthly', count: 2, desc: 'The big flow of two months at a glance.', img: `${IMG}monthly.jpg` },
      { tag: '03', kr: 'Weekly', en: 'Weekly', count: 9, desc: 'Each week in hourly blocks, 7am–11pm.', img: `${IMG}weekly.jpg` },
      { tag: '04', kr: 'Dot · facing', en: 'Dot · facing', count: 11, desc: 'Dot pages facing the plan spreads.', img: `${IMG}dot.jpg` },
      { tag: '05', kr: 'Tracker', en: 'Tracker', count: 2, desc: 'One line a day, – into +.', img: `${IMG}tracker.jpg` },
      { tag: '06', kr: 'Daily · QT', en: 'Daily · QT', count: 62, desc: 'Scripture, reflection and gratitude on a page. 31 days × two months.', img: `${IMG}daily.jpg` },
      { tag: '07', kr: 'Closing', en: 'Closing', count: 1, desc: '“fill your paper with the breathings of your heart.”', img: `${IMG}breathe.jpg` },
      { tag: '08', kr: 'Free dot notes', en: 'Free dot notes', count: 38, desc: 'Dot grid for free writing; a QR on the last page.', img: `${IMG}notes.jpg` },
      { tag: 'BACK', kr: 'Back cover', en: 'Back cover', desc: 'DOT OF LINE AND FORM · DoLF', img: `${IMG}back.jpg` },
    ],
    foot: 'Total 130 pp incl. covers · 128-page inner block',
  },
  ja: {
    eyebrow: 'WHAT’S IN THE BOOK',
    title: '構成のご案内',
    intro: '表紙から裏表紙まで、実際のページで見るBreatheの構成です。各セクションのページ数もご案内します。',
    unit: 'ページ',
    hint: '横にスクロールしてもっと見る →',
    cards: [
      { tag: 'FRONT', kr: '表紙', en: 'Front cover', desc: 'breathe、緻密なタイポグラフィ', img: `${IMG}front.jpg` },
      { tag: '01', kr: '中表紙 · オープニング', en: 'Title & Opening', count: 3, desc: '「STILL BECOMING — What’s your story?」', img: `${IMG}opening.jpg` },
      { tag: '02', kr: 'マンスリー', en: 'Monthly', count: 2, desc: '二か月の大きな流れをひと目で。', img: `${IMG}monthly.jpg` },
      { tag: '03', kr: 'ウィークリー', en: 'Weekly', count: 9, desc: '7am–11pm、時間ブロックで一週間を。', img: `${IMG}weekly.jpg` },
      { tag: '04', kr: 'ドット · 見開き', en: 'Dot · facing', count: 11, desc: 'プランと向かい合うドットページ。', img: `${IMG}dot.jpg` },
      { tag: '05', kr: 'トラッカー', en: 'Tracker', count: 2, desc: '一日一行、—を+へ。', img: `${IMG}tracker.jpg` },
      { tag: '06', kr: 'デイリー · QT', en: 'Daily · QT', count: 62, desc: 'みことば・黙想・感謝を一ページに。31日×二か月。', img: `${IMG}daily.jpg` },
      { tag: '07', kr: 'クロージング', en: 'Closing', count: 1, desc: '“fill your paper with the breathings of your heart.”', img: `${IMG}breathe.jpg` },
      { tag: '08', kr: '自由ドットノート', en: 'Free dot notes', count: 38, desc: '自由に書けるドットグリッド。最終ページにQR。', img: `${IMG}notes.jpg` },
      { tag: 'BACK', kr: '裏表紙', en: 'Back cover', desc: 'DOT OF LINE AND FORM · DoLF', img: `${IMG}back.jpg` },
    ],
    foot: '表紙込み全130ページ · 本文128p',
  },
}

export function BreatheComposition() {
  const { locale } = useLocale()
  const c = COPY[locale in COPY ? locale : 'en']

  return (
    <Section aria-label={c.title}>
      <Reveal>
        <Head>
          <Lab>{c.eyebrow}</Lab>
          <Title>{c.title}</Title>
          <Intro>{c.intro}</Intro>
          <Hint>{c.hint}</Hint>
        </Head>
      </Reveal>

      <Reveal>
        <Track>
          {c.cards.map((card) => (
            <CardBox key={card.tag}>
              <Fig>
                <img src={card.img} alt={`${card.kr} 페이지`} loading="lazy" />
                {card.count != null && (
                  <Badge>
                    {card.count}
                    {c.unit}
                  </Badge>
                )}
              </Fig>
              <Meta>
                <Tag>{card.tag}</Tag>
                <Name>
                  {card.kr}
                  {card.en !== card.kr && <En> · {card.en}</En>}
                </Name>
                <Desc>{card.desc}</Desc>
              </Meta>
            </CardBox>
          ))}
        </Track>
      </Reveal>

      <Foot>{c.foot}</Foot>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 4.5vw, 48px);
  padding: clamp(40px, 7vw, 88px) clamp(4px, 2vw, 16px) clamp(32px, 5vw, 64px);
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`

const Head = styled.div`
  max-width: 60ch;
`

const Lab = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(28px, 4.6vw, 44px);
  line-height: 1.14;
  letter-spacing: -0.02em;
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Intro = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 15.5px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 16px 0 0;
  max-width: 56ch;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Hint = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brandRed};
`

// Horizontal carousel track: cards sit in one row and the section scrolls
// sideways (not one-at-a-time). The next card peeks past the right edge to
// signal there is more, and a gentle proximity snap keeps cards tidy.
const Track = styled.div`
  display: flex;
  gap: clamp(14px, 2vw, 22px);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  scroll-padding-left: 2px;
  padding: 4px 2px 16px;
  margin: 0 -2px;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.line} transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.line};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

const CardBox = styled.figure`
  flex: 0 0 auto;
  width: clamp(220px, 66vw, 282px);
  scroll-snap-align: start;
  margin: 0;
  display: flex;
  flex-direction: column;
`

const Fig = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 520 / 738;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.line};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Badge = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
`

const Meta = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 2px 0;
`

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.22;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
`

const En = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.68em;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Desc = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Foot = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.soft};
  margin: 0;
`
