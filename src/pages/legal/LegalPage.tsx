import styled from 'styled-components'
import { Container } from '@/components/ui/Container'

export interface LegalSection {
  readonly heading: string
  readonly paragraphs: readonly string[]
}

export interface LegalDoc {
  readonly title: string
  readonly updated: string
  readonly intro?: string
  readonly sections: readonly LegalSection[]
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Wrapper>
      <Header>
        <Title>{doc.title}</Title>
        <Updated>시행일 · {doc.updated}</Updated>
      </Header>

      <DraftNote>
        본 문서는 <strong>초안 템플릿</strong>입니다. 실제 사업자 정보와 정책으로
        검토·확정한 뒤 게시해 주세요. (대괄호 [ ] 표시는 채워야 할 항목)
      </DraftNote>

      {doc.intro && <Intro>{doc.intro}</Intro>}

      {doc.sections.map((s) => (
        <Section key={s.heading}>
          <Heading>{s.heading}</Heading>
          {s.paragraphs.map((p, i) => (
            <Paragraph key={i}>{p}</Paragraph>
          ))}
        </Section>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  max-width: 820px;
  padding-top: 72px;
  padding-bottom: 96px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 48px;
    padding-bottom: 64px;
  }
`

const Header = styled.header`
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`

const Updated = styled.p`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const DraftNote = styled.p`
  margin-bottom: 40px;
  padding: 14px 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Intro = styled.p`
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Section = styled.section`
  margin-bottom: 32px;
`

const Heading = styled.h2`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Paragraph = styled.p`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.8;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.textSecondary};
`
