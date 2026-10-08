import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLocale } from '@/i18n/context'
import type { ShopProduct } from '@/data/shop-types'
import { useCart } from '@/state/cart-context'
import { useProductOverrides } from '@/state/products-context'
import { isSoldOut } from '@/lib/product-pricing'
import { makeCartKey } from '@/lib/product-variants'
import { editionsFor } from '@/lib/product-editions'
import { formatMoney, CURRENCY_BY_LOCALE } from '@/lib/orders'
import { pushEvent } from '@/lib/gtm'
import { BreatheCoverStory } from '@/pages/shop/detail/sections/BreatheCoverStory'
import { RelatedProducts } from '@/components/shop/RelatedProducts'
import { StickyPurchaseBar } from '@/components/shop/StickyPurchaseBar'
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

export function BreatheDetailPage({ product }: { product: ShopProduct }) {
  const { locale, t } = useLocale()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { overrides } = useProductOverrides()
  const variants = product.variants ?? []
  const [variantId, setVariantId] = useState(variants[0]?.id ?? '')
  const currency = CURRENCY_BY_LOCALE[locale]
  const selected = useMemo(
    () => variants.find((v) => v.id === variantId) ?? variants[0],
    [variants, variantId],
  )
  const editions = editionsFor('breathe', locale) ?? []
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
        <BreatheCoverStory />
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
          <CardLabel style={{ fontSize: u(46) }}>PLANNER &amp; DIARY</CardLabel>
          <CardName style={{ fontSize: u(150) }}>Breathe</CardName>
          {editions.length > 1 && (
            <EdRow
              role="radiogroup"
              aria-label={locale === 'ko' ? '에디션' : locale === 'ja' ? 'エディション' : 'Edition'}
            >
              {editions.map((ed) => (
                <EdChip
                  key={ed.slug}
                  type="button"
                  role="radio"
                  aria-checked={ed.slug === product.slug}
                  $on={ed.slug === product.slug}
                  onClick={() => {
                    if (ed.slug !== product.slug) navigate(`/shop/${ed.slug}`)
                  }}
                  style={{ fontSize: u(46) }}
                >
                  {ed.label}
                </EdChip>
              ))}
            </EdRow>
          )}
          <CardPrice style={{ fontSize: u(118) }}>{priceText}</CardPrice>
          {variants.length > 1 && (
            <Opts>
              {variants.map((v) => (
                <Opt
                  key={v.id}
                  type="button"
                  $on={v.id === (selected?.id ?? '')}
                  onClick={() => setVariantId(v.id)}
                  style={{ fontSize: u(54) }}
                >
                  <span>{v.label}</span>
                  <em>{formatMoney(v.price, currency)}</em>
                </Opt>
              ))}
            </Opts>
          )}
          <Buttons>
            <BuyBtn type="button" onClick={buyNow} disabled={sold} style={{ fontSize: u(52) }}>
              {sold ? t.shop.soldOut : t.shop.buyNow}
            </BuyBtn>
            <CartBtn type="button" onClick={add} disabled={sold} style={{ fontSize: u(52) }}>
              {t.shop.addToCart}
            </CartBtn>
          </Buttons>
          <Free style={{ fontSize: u(44) }}>7만원 이상 구매 시 국내 무료배송</Free>
        </CardBox>
        </Canvas>
        <RelatedProducts currentSlug={product.slug} />
      </Main>
    </Page>

      <StickyPurchaseBar product={product} />
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
// Purchase card — styled to match the shared product pages (theme serif/sans,
// brand-red Buy Now, outline Add to Cart), kept at the Figma card position.
const CardBox = styled.div`
  position: absolute;
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5cqw;
  box-shadow: 0 2cqw 5cqw rgba(0, 0, 0, 0.1);
  padding: 2.6cqw 2.2cqw;
  display: flex;
  flex-direction: column;
`
const CardLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 0.8cqw;
`
const CardName = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  line-height: 1;
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
`
const CardPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  margin: 0.6cqw 0 1.6cqw;
  color: ${({ theme }) => theme.colors.ink};
`
const EdRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7cqw;
  margin: 1cqw 0 1.6cqw;
`
const EdChip = styled.button<{ $on: boolean }>`
  padding: 0.8cqw 1.4cqw;
  border: 1.5px solid ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.border)};
  border-radius: 999px;
  background: ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.white)};
  color: ${({ theme, $on }) => ($on ? theme.colors.white : theme.colors.ink)};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-weight: 500;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }
`
const Opts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8cqw;
  margin-bottom: 1.6cqw;
`
const Opt = styled.button<{ $on: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1cqw 1.3cqw;
  border: 1.5px solid ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.border)};
  border-radius: 0.5cqw;
  background: ${({ theme, $on }) => ($on ? theme.colors.surface : theme.colors.white)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
  }

  em {
    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.sans};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8cqw;
`
const CardBtn = styled.button`
  width: 100%;
  padding: 1.4cqw;
  border-radius: 0.5cqw;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
`
const BuyBtn = styled(CardBtn)`
  border: none;
  background: ${({ theme }) => theme.colors.brandRed};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.88;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: default;
  }
`
const CartBtn = styled(CardBtn)`
  border: 1px solid ${({ theme }) => theme.colors.ink};
  background: none;
  color: ${({ theme }) => theme.colors.ink};

  &:hover {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: default;
  }
`
const Free = styled.p`
  margin: 1.2cqw 0 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.sans};
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.textSecondary};
`

