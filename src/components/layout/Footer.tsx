import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLocale } from '@/i18n/context'
import { businessInfo, legalLinks } from '@/data/business'

export function Footer() {
  const { t } = useLocale()

  const navItems = [
    { label: t.nav.about, to: '/about' },
    { label: t.nav.products, to: '/products' },
    { label: t.nav.community, to: '/community' },
    { label: t.nav.contact, to: '/contact' },
    { label: t.nav.shop, to: '/shop' },
  ]

  return (
    <Wrapper>
      <Inner>
        <TopRow>
          <Brand>
            <BrandName>DoLF</BrandName>
            <Tagline>{t.footer.tagline}</Tagline>
          </Brand>

          <Right>
            <Instagram>Instagram {t.footer.instagram}</Instagram>
            <Nav>
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </Nav>
          </Right>
        </TopRow>

        <Divider />

        <LegalNav>
          {legalLinks.map((l) => (
            <LegalLink key={l.to} to={l.to}>
              {l.label}
            </LegalLink>
          ))}
        </LegalNav>

        <BizInfo>
          <BizRow>
            {businessInfo.companyName} · 대표 {businessInfo.owner}
          </BizRow>
          <BizRow>사업자등록번호 {businessInfo.registrationNumber}</BizRow>
          <BizRow>통신판매업신고 {businessInfo.mailOrderNumber}</BizRow>
          <BizRow>{businessInfo.address}</BizRow>
          <BizRow>
            고객센터 {businessInfo.phone} · {businessInfo.email}
          </BizRow>
        </BizInfo>

        <Copyright>{t.footer.copyright}</Copyright>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
`

const Inner = styled(Container)`
  padding-top: 56px;
  padding-bottom: 40px;
`

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 28px;
  }
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
`

const Tagline = styled.span`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.brandRed};
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  ${({ theme }) => theme.media.mobile} {
    align-items: flex-start;
  }
`

const Instagram = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  color: rgba(255, 255, 255, 0.7);
`

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 32px 0 20px;
`

const LegalNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-bottom: 16px;
`

const LegalLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const BizInfo = styled.address`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 16px;
  font-style: normal;
`

const BizRow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
`

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.5);
`
