import styled from 'styled-components'

interface ProductFeatureRowProps {
  readonly imageSide: 'left' | 'right'
  readonly background: 'cream' | 'surface'
  readonly name: string
  readonly description: string
  readonly spec: string
  readonly image: string
}

export function ProductFeatureRow({
  imageSide,
  background,
  name,
  description,
  spec,
  image,
}: ProductFeatureRowProps) {
  return (
    <Section $background={background}>
      <Inner $imageRight={imageSide === 'right'}>
        <ImageCard>
          <ProductImage src={image} alt={name} />
        </ImageCard>
        <Text>
          <Name>{name}</Name>
          <Body>{description}</Body>
          <Spec>{spec}</Spec>
        </Text>
      </Inner>
    </Section>
  )
}

const Section = styled.section<{ $background: 'cream' | 'surface' }>`
  background-color: ${({ theme, $background }) => theme.colors[$background]};
`

const Inner = styled.div<{ $imageRight: boolean }>`
  display: flex;
  flex-direction: ${({ $imageRight }) => ($imageRight ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 72px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 96px;
`

const ImageCard = styled.div`
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Name = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.ink};
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Spec = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
`
