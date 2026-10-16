import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { Reveal } from '@/components/visual/Reveal'

// Brand-story section for the Breathe PDP: why the diary exists, what the name
// means, and how the inserts are structured. Keeps the product context close to
// the buying decision without repeating the About page. Copy is held locally
// (like the other Breathe PDP sections) in ko / en / ja.

type Insert = { label: string; desc: string }
type Copy = {
  whyEyebrow: string
  whyTitle: string
  whyBody: readonly string[]
  nameEyebrow: string
  quote: string
  nameBody: readonly string[]
  insideEyebrow: string
  insideTitle: string
  inserts: readonly Insert[]
  insideFoot: string
  bindingEyebrow: string
  bindingTitle: string
  bindingBody: readonly string[]
}

const COPY: Record<string, Copy> = {
  ko: {
    whyEyebrow: 'WHY BREATHE',
    whyTitle: '계획과 성찰을 한 권에',
    whyBody: [
      '일반적인 플래너가 “무엇을 해야 하는가”를 정리한다면, Breathe는 거기에 “오늘을 어떻게 살았는가, 무엇을 느꼈는가”를 함께 남길 자리를 만듭니다.',
      '일정을 관리하는 나와 하루를 돌아보는 나를 한 권 안에서 연결해요. 하루를 빈틈없이 채우기보다, 잠시 멈춰 숨을 고르고 오늘을 의식하며 살아가도록 돕습니다.',
    ],
    nameEyebrow: '이름의 의미',
    quote: 'A day to breathe, eat, and follow the cross.',
    nameBody: [
      'Breathe에는 두 가지 숨이 담겨 있습니다. 하나는 생명을 주시는 하나님의 숨, 다른 하나는 분주한 일상에서 잠시 멈춰 고르는 숨.',
      '다이어리를 펼치는 순간만큼은, 자신의 상태와 하루를 돌아볼 여백이 되기를 바랍니다.',
    ],
    insideEyebrow: 'WHAT’S INSIDE',
    insideTitle: '서로 다른 시간의 크기',
    inserts: [
      { label: 'Monthly', desc: '한 달의 흐름과 방향을 바라봅니다.' },
      { label: 'Weekly', desc: '방향을 한 주의 일정과 실천으로 옮깁니다.' },
      { label: 'Tracker', desc: '반복되는 작은 행동을 눈으로 확인합니다.' },
      { label: 'Daily · QT · Journal', desc: '그날의 말씀·생각·경험을 구체적으로 남깁니다.' },
      { label: 'Dot grid · Notes', desc: '정해진 틀에 담기지 않는 기록을 받아 줍니다.' },
    ],
    insideFoot: '계획을 세우고 끝나는 것이 아니라, 실천하고 기록하고 돌아보는 흐름을 만듭니다.',
    bindingEyebrow: 'THE BINDING',
    bindingTitle: '180도 펼쳐지는 누드 사철 제본',
    bindingBody: [
      '실로 엮은 제본의 속을 그대로 드러내는 누드 사철 제본입니다. 감춰야 할 마감이 아니라, 만듦새 자체가 디자인이 됩니다.',
      '사철 제본이라 180도로 평평하게 펼쳐져 어느 페이지에서도 편하게 기록할 수 있고, 양장보다 부드러운 커버로 매일 손에 들기에 부담이 없습니다.',
    ],
  },
  en: {
    whyEyebrow: 'WHY BREATHE',
    whyTitle: 'Planning and reflection, in one book',
    whyBody: [
      'Where an ordinary planner organizes “what to do,” Breathe adds room for “how you lived today, what you thought and felt.”',
      'It keeps the self who manages the schedule and the self who looks back on the day in a single book. The point isn’t to fill every hour, but to pause, catch your breath, and live the day with awareness.',
    ],
    nameEyebrow: 'The meaning of the name',
    quote: 'A day to breathe, eat, and follow the cross.',
    nameBody: [
      'Breathe holds two kinds of breath: the breath of life given by God, and the breath you draw when you pause in a busy day.',
      'For the moment the diary is open, may it be room to notice your state and look back on your day.',
    ],
    insideEyebrow: 'WHAT’S INSIDE',
    insideTitle: 'Different scales of time',
    inserts: [
      { label: 'Monthly', desc: 'See the flow and direction of a month.' },
      { label: 'Weekly', desc: 'Turn that direction into a week of plans and practice.' },
      { label: 'Tracker', desc: 'Keep small, repeated actions in plain sight.' },
      { label: 'Daily · QT · Journal', desc: 'Record the day’s scripture, thoughts and moments.' },
      { label: 'Dot grid · Notes', desc: 'Hold whatever doesn’t fit a fixed template.' },
    ],
    insideFoot: 'Not a plan that ends once made, but a rhythm of practicing, recording and looking back.',
    bindingEyebrow: 'THE BINDING',
    bindingTitle: 'An exposed Smyth-sewn binding that lies flat',
    bindingBody: [
      'The sewn interior is left on show rather than hidden — the making itself becomes the design.',
      'Because it is Smyth-sewn, it opens a full 180° so you can write comfortably on any page, and its cover is softer than a hardcover, easy to hold every day.',
    ],
  },
  ja: {
    whyEyebrow: 'WHY BREATHE',
    whyTitle: '計画と省察を一冊に',
    whyBody: [
      '一般的なプランナーが「何をすべきか」を整理するなら、Breatheはそこに「今日をどう生きたか、何を感じたか」を残す場所を加えます。',
      '予定を管理する自分と、一日を振り返る自分を一冊の中でつなぎます。隙間なく埋めるよりも、少し立ち止まって息を整え、今日を意識して生きられるように。',
    ],
    nameEyebrow: '名前の意味',
    quote: 'A day to breathe, eat, and follow the cross.',
    nameBody: [
      'Breatheには二つの息が込められています。いのちを与える神の息と、慌ただしい日常で立ち止まって整える息。',
      'ダイアリーを開くその瞬間だけは、自分の状態と一日を振り返る余白になりますように。',
    ],
    insideEyebrow: 'WHAT’S INSIDE',
    insideTitle: '異なる時間の大きさ',
    inserts: [
      { label: 'Monthly', desc: '一か月の流れと方向を見渡します。' },
      { label: 'Weekly', desc: 'その方向を一週間の予定と実践に移します。' },
      { label: 'Tracker', desc: '繰り返す小さな行動を目で確認します。' },
      { label: 'Daily · QT · Journal', desc: 'その日のみことば・考え・経験を具体的に残します。' },
      { label: 'Dot grid · Notes', desc: '決まった型に収まらない記録を受けとめます。' },
    ],
    insideFoot: '計画を立てて終わりではなく、実践し、記録し、振り返る流れをつくります。',
    bindingEyebrow: 'THE BINDING',
    bindingTitle: '180度ひらく、糸かがりの背を見せる製本',
    bindingBody: [
      '糸でかがった製本の内側をあえて見せる、背を隠さないつくり。隠す仕上げではなく、つくり方そのものがデザインになります。',
      '糸かがり製本なので180度フラットにひらき、どのページでも書きやすく、上製本より柔らかい表紙で毎日手に取るのに負担がありません。',
    ],
  },
}

export function BreatheStory() {
  const { locale } = useLocale()
  const c = COPY[locale in COPY ? locale : 'en']

  return (
    <Section>
      <Reveal>
        <Why>
          <Lab>{c.whyEyebrow}</Lab>
          <Title>{c.whyTitle}</Title>
          <Body>
            {c.whyBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Body>
        </Why>
      </Reveal>

      <Reveal>
        <Name>
          <Lab>{c.nameEyebrow}</Lab>
          <Quote>{c.quote}</Quote>
          <Body>
            {c.nameBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Body>
        </Name>
      </Reveal>

      <Reveal>
        <Inside>
          <Lab>{c.insideEyebrow}</Lab>
          <InsideTitle>{c.insideTitle}</InsideTitle>
          <List>
            {c.inserts.map((i) => (
              <Item key={i.label}>
                <ItemLabel>{i.label}</ItemLabel>
                <ItemDesc>{i.desc}</ItemDesc>
              </Item>
            ))}
          </List>
          <Foot>{c.insideFoot}</Foot>
        </Inside>
      </Reveal>

      <Reveal>
        <Binding>
          <Lab>{c.bindingEyebrow}</Lab>
          <BlockTitle>{c.bindingTitle}</BlockTitle>
          <Body>
            {c.bindingBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Body>
        </Binding>
      </Reveal>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 72px);
  padding: clamp(32px, 6vw, 72px) clamp(4px, 2vw, 16px) clamp(24px, 4vw, 48px);
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

const Why = styled.div``

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(30px, 5vw, 46px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 62ch;
  margin-top: 18px;

  p {
    font-family: ${({ theme }) => theme.fonts.kr};
    font-size: 15.5px;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`

const Name = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding-top: clamp(28px, 4vw, 44px);
`

const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(22px, 3.4vw, 34px);
  line-height: 1.28;
  letter-spacing: -0.01em;
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.ink};
`

const Inside = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding-top: clamp(28px, 4vw, 44px);
`

const Binding = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding-top: clamp(28px, 4vw, 44px);
`

const BlockTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(24px, 3.6vw, 34px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const InsideTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(24px, 3.6vw, 34px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 12px 0 24px;
  color: ${({ theme }) => theme.colors.ink};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 14px;
  border-left: 2px solid ${({ theme }) => theme.colors.brandRed};
`

const ItemLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.ink};
`

const ItemDesc = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: keep-all;
`

const Foot = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: 14.5px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.soft};
  margin: 26px 0 0;
  max-width: 60ch;
  word-break: keep-all;
`
