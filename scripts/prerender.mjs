// Post-build prerender: generate a per-route index.html under dist/<route>/
// with route-specific SEO/OG meta injected into the built HTML template.
//
// Why: social/link scrapers (KakaoTalk, Facebook, X, etc.) do NOT run JS, so
// they only read the static HTML. This gives each public URL its own correct
// title / description / canonical / OG so shared links preview correctly.
//
// Keep meta copy in sync with src/i18n/locales/ko.ts -> seo (default locale).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://dolfstory.com'

// Public routes to prerender (home = dist/index.html, already home meta).
const ROUTES = [
  {
    path: '/about',
    title: 'About — DoLF',
    description:
      'DoLF의 이야기 — 신앙을 일상의 루틴으로 연결하는 브랜드의 철학과 미션.',
  },
  {
    path: '/products',
    title: 'Products — DoLF',
    description:
      'Breathe 플래너 & 다이어리, 성경통독 트래커 등 신앙 습관을 위한 DoLF의 제품.',
  },
  {
    path: '/community',
    title: 'Community — DoLF',
    description: 'QT와 성경 읽기를 함께 나누며 신앙을 습관으로 만드는 DoLF 커뮤니티.',
  },
  {
    path: '/contact',
    title: 'Contact — DoLF',
    description: 'DoLF에 문의하기 — 제품·협업·도매 문의를 환영합니다.',
  },
  {
    path: '/shop',
    title: 'Shop — DoLF',
    description:
      'DoLF 공식 스토어에서 Breathe 플래너와 성경통독 트래커를 만나보세요.',
  },
]

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

const esc = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const escReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Replace the content="" of a <meta> tag identified by an attribute string
// (e.g. 'name="description"'), handling single- or multi-line tags.
function setMetaContent(html, matchAttr, value) {
  const re = new RegExp(`<meta\\b[^>]*${escReg(matchAttr)}[^>]*>`, 'g')
  return html.replace(re, (tag) =>
    tag.replace(/content="[\s\S]*?"/, () => `content="${value}"`),
  )
}

function render({ path, title, description }) {
  const url = SITE + path
  const t = esc(title)
  const d = esc(description)
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${t}</title>`)
    .replace(
      /(<link rel="canonical" href=")[\s\S]*?(")/,
      (_m, a, b) => `${a}${url}${b}`,
    )
  html = setMetaContent(html, 'name="description"', d)
  html = setMetaContent(html, 'property="og:title"', t)
  html = setMetaContent(html, 'property="og:description"', d)
  html = setMetaContent(html, 'property="og:url"', url)
  html = setMetaContent(html, 'name="twitter:title"', t)
  html = setMetaContent(html, 'name="twitter:description"', d)
  return html
}

let count = 0
for (const route of ROUTES) {
  const outDir = join(DIST, route.path.replace(/^\//, ''))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), render(route), 'utf8')
  count++
  console.log(`prerendered ${route.path} -> dist${route.path}/index.html`)
}
console.log(`\nPrerendered ${count} routes (home = dist/index.html).`)
