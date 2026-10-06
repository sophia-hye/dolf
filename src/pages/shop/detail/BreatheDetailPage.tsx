import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import { getProductBySlug } from '@/data/products'
import { useCart } from '@/state/cart-context'
import { useProductOverrides } from '@/state/products-context'
import { isSoldOut } from '@/lib/product-pricing'
import { makeCartKey } from '@/lib/product-variants'
import { formatMoney, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import { BreatheIntro } from '@/components/visual/BreatheIntro'
import { RelatedProducts } from '@/components/shop/RelatedProducts'
import spec from './breathe-pdp.json'

// Faithful reproduction of the user's Figma "PDP" moodboard.
// The 7612px-wide absolute layout is rendered on a container-scaled canvas
// (all coordinates/sizes in cqw so the whole composition scales to the
// viewport width). The purchase card is a functional overlay. On mobile this
// is intentional: the same moodboard is shown scaled down to the phone width
// (customers can pinch-zoom for detail) rather than reflowed into a separate
// layout.

const W = spec.W
const H = spec.H
const IMG = '/images/pdp/'

type Node = {
  t: string
  x: number
  y: number
  w: number
  h: number
  c?: string
  s?: number
  fam?: string
  a?: string
  col?: number[]
  lh?: number
  id?: string
  fill?: number[]
}

const FAM: Record<string, string> = {
  display: `'Futura PT','Futura','Century Gothic','Inter','Noto Sans KR',sans-serif`,
  mono: `'Roboto Mono',ui-monospace,'SF Mono',Menlo,monospace`,
  kr: `'Noto Sans KR','Inter',system-ui,sans-serif`,
  serif: `'Cormorant Garamond','Cormorant',Georgia,serif`,
}
// 100cqw === canvas width, so any 7612-space value maps to (v / 76.12) cqw.
const u = (v: number) => `${(v / (W / 100)).toFixed(3)}cqw`
const rgb = (c?: number[]) => (c ? `rgb(${c[0]},${c[1]},${c[2]})` : '#1f1f21')

// Buy-now label for the sticky purchase bar (interaction microcopy).
const BUY: Record<string, string> = {
  ko: '바로 구매',
  en: 'Buy now',
  ja: '今すぐ購入',
}

export function BreatheDetailPage() {
  const { locale, t } = useLocale()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { overrides } = useProductOverrides()
  const product = getProductBySlug('breathe', locale)
  const variants = product?.variants ?? []
  const [variantId, setVariantId] = useState(variants[0]?.id ?? '')
  const currency = CURRENCY_BY_LOCALE[locale]
  const selected = useMemo(
    () => variants.find((v) => v.id === variantId) ?? variants[0],
    [variants, variantId],
  )
  // Sticky purchase bar appears once the user scrolls past the top, and tucks
  // away again near the footer so it never covers it.
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
      setShowBar(window.scrollY > 360 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  if (!product) return null
  const sold = isSoldOut(product.slug, overrides)
  const priceText = selected ? formatMoney(selected.price, currency) : product.catalogPrice
  const add = () => {
    const key = makeCartKey(product.slug, variantId, variants[0]?.id)
    addItem(key)
    pushEvent('add_to_cart', { item_id: key, item_name: product.catalogName })
  }
  const buyNow = () => {
    add()
    navigate('/cart')
  }

  const nodes = spec.nodes as unknown as Node[]

  return (
    <>
    <Page>
      <Main>
        <BreatheIntro />
        <Canvas style={{ aspectRatio: `${W} / ${H}` }}>
        {nodes.map((n, i) => {
          const base: React.CSSProperties = {
            position: 'absolute',
            left: u(n.x),
            top: u(n.y),
            width: u(n.w),
          }
          if (n.t === 'i' && n.id) {
            return (
              <img
                key={i}
                src={`${IMG}${n.id.replace(':', '_')}.jpg`}
                alt=""
                loading={n.y < 3000 ? 'eager' : 'lazy'}
                style={{ ...base, height: u(n.h), objectFit: 'cover', display: 'block' }}
              />
            )
          }
          if (n.t === 'x') {
            return (
              <div key={i} style={{ ...base, height: u(n.h), background: rgb(n.fill) }} />
            )
          }
          if (n.t === 'hero') {
            return (
              <div key={i} style={base}>
                <HeroLine style={{ fontSize: u(540) }}>Breathe</HeroLine>
                <HeroLine style={{ fontSize: u(384) }}>Planner &amp; Diary</HeroLine>
              </div>
            )
          }
          // text — keep single-line labels on one line, but let multi-line
          // copy wrap *within its box*. Fallback fonts run wider than Figma's
          // Futura/mono, so `pre` (no wrap) would overflow a narrow box into
          // the next column; `pre-line` keeps explicit breaks yet wraps inside
          // the box, avoiding both vertical and horizontal overlap.
          const hasNL = (n.c ?? '').includes('\n')
          const isPara = hasNL || n.h > (n.s ?? 100) * 1.6
          const whiteSpace = isPara ? 'pre-line' : 'nowrap'
          return (
            <div
              key={i}
              style={{
                ...base,
                fontFamily: FAM[n.fam ?? 'kr'],
                fontWeight: n.fam === 'display' ? 800 : n.fam === 'mono' ? 500 : 400,
                fontSize: u(n.s ?? 100),
                lineHeight: n.lh ? u(n.lh) : 1.35,
                letterSpacing: n.fam === 'mono' ? '0.06em' : 'normal',
                textAlign: (n.a?.toLowerCase() as 'left' | 'right' | 'center') ?? 'left',
                color: rgb(n.col),
                whiteSpace,
              }}
            >
              {n.c}
            </div>
          )
        })}

        {/* functional purchase card at the Figma card position */}
        <CardBox
          style={{ left: u(spec.card.x), top: u(spec.card.y), width: u(spec.card.w) }}
        >
          <CardLabel style={{ fontSize: u(52) }}>PLANNER &amp; DIARY</CardLabel>
          <CardName style={{ fontSize: u(150) }}>Breathe</CardName>
          <CardPrice style={{ fontSize: u(120) }}>{priceText}</CardPrice>
          <div>
            {variants.map((v) => (
              <Opt
                key={v.id}
                type="button"
                $on={v.id === (selected?.id ?? '')}
                onClick={() => setVariantId(v.id)}
                style={{ fontSize: u(58) }}
              >
                <span>{v.label}</span>
                <em>{formatMoney(v.price, currency)}</em>
              </Opt>
            ))}
          </div>
          <Cta type="button" onClick={buyNow} disabled={sold} style={{ fontSize: u(52) }}>
            {sold ? t.shop.soldOut : `ADD TO CART · ${t.shop.addToCart}`}
          </Cta>
          <Free style={{ fontSize: u(46) }}>7만원 이상 구매 시 국내 무료배송</Free>
        </CardBox>
        </Canvas>
        <RelatedProducts currentSlug={product.slug} />
      </Main>
    </Page>

      <StickyBar $show={showBar} aria-hidden={!showBar}>
        <BarInner>
          <BarInfo>
            <BarName>Breathe</BarName>
            <BarPrice>{priceText}</BarPrice>
          </BarInfo>
          <BarActions>
            {variants.length > 1 && (
              <BarSelect
                aria-label="옵션 선택"
                value={selected?.id ?? ''}
                onChange={(e) => setVariantId(e.target.value)}
              >
                {variants.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label} · {formatMoney(v.price, currency)}
                  </option>
                ))}
              </BarSelect>
            )}
            <BarCart type="button" onClick={add} disabled={sold}>
              {t.shop.addToCart}
            </BarCart>
            <BarBuy type="button" onClick={buyNow} disabled={sold}>
              {sold ? t.shop.soldOut : (BUY[locale] ?? BUY.en)}
            </BarBuy>
          </BarActions>
        </BarInner>
      </StickyBar>
    </>
  )
}

const Page = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 24px clamp(12px, 3vw, 40px) 80px;

  /* On phones the moodboard is shown as a scaled-down desktop composition,
     so trim the gutters to give the canvas the full width for legibility. */
  @media (max-width: 640px) {
    padding: 12px 8px 48px;
  }
`
const Main = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
`
const Canvas = styled.div`
  container-type: inline-size;
  position: relative;
  width: 100%;
  max-width: 1280px;
  color: ${({ theme }) => theme.colors.ink};
`
const HeroLine = styled.div`
  font-family: ${FAM.display};
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
`
const CardBox = styled.div`
  position: absolute;
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 0 2cqw 5cqw rgba(0, 0, 0, 0.1);
  padding: 2.6cqw 2.2cqw;
  display: flex;
  flex-direction: column;
`
const CardLabel = styled.p`
  font-family: ${FAM.mono};
  letter-spacing: 0.22em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 0.6cqw;
`
const CardName = styled.p`
  font-family: ${FAM.serif};
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
`
const CardPrice = styled.p`
  font-family: ${FAM.serif};
  margin: 0.4cqw 0 1.6cqw;
`
const Opt = styled.button<{ $on: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1cqw 1.2cqw;
  margin-bottom: 0.6cqw;
  border: 1.2px solid ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.border)};
  background: ${({ theme, $on }) => ($on ? theme.colors.surface : theme.colors.white)};
  cursor: pointer;
  font-family: ${FAM.mono};
  color: ${({ theme }) => theme.colors.ink};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
const Cta = styled.button`
  margin-top: 0.8cqw;
  padding: 1.4cqw;
  border: none;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${FAM.mono};
  letter-spacing: 0.12em;
  cursor: pointer;
  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
const Free = styled.p`
  margin: 1cqw 0 0;
  text-align: center;
  font-family: ${FAM.mono};
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
`

// Sticky purchase bar — follows the viewport as you scroll the PDP.
const StickyBar = styled.div<{ $show: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.07);
  transform: translateY(${({ $show }) => ($show ? '0' : '110%')});
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;
  padding: 10px clamp(12px, 3vw, 40px);
  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
const BarInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`
const BarInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: 0;

  /* On phones the select already shows the price, so drop the duplicate. */
  @media (max-width: 520px) {
    display: none;
  }
`
const BarName = styled.span`
  font-family: ${FAM.serif};
  font-size: clamp(16px, 2.6vw, 22px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};

  @media (max-width: 420px) {
    display: none;
  }
`
const BarPrice = styled.span`
  font-family: ${FAM.serif};
  font-size: clamp(16px, 2.6vw, 22px);
  color: ${({ theme }) => theme.colors.ink};
  white-space: nowrap;
`
const BarActions = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  min-width: 0;

  @media (max-width: 520px) {
    flex: 1;
    gap: 6px;
  }
`
const BarSelect = styled.select`
  font-family: ${FAM.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  padding: 0 10px;
  max-width: 44vw;
  cursor: pointer;

  @media (max-width: 520px) {
    flex: 1 1 auto;
    min-width: 0;
    max-width: none;
    padding: 0 6px;
  }
`
const BarBtn = styled.button`
  font-family: ${FAM.mono};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 11px clamp(12px, 2.4vw, 24px);
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  @media (max-width: 520px) {
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 10px 10px;
  }
`
const BarCart = styled(BarBtn)`
  border: 1.4px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.ink};
`
const BarBuy = styled(BarBtn)`
  border: 1.4px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.white};
`
