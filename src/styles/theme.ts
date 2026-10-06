// DoLF design tokens extracted from Figma (node 3019:11)

export const theme = {
  colors: {
    cream: '#f3f1ec', // paper / page background
    surface: '#ecebe4', // gray section background
    ink: '#18171b', // primary text / footer background
    textSecondary: '#7c7a73', // muted/body text
    brandRed: '#bb0e0e', // accent / CTA / eyebrows
    border: '#e4e1da', // card borders / dividers
    white: '#ffffff',
    // Added for the refined editorial / dark-band sections:
    soft: '#36343a', // softened ink for labels/subheads
    line: 'rgba(24,23,27,0.12)', // hairline rule
    line2: 'rgba(24,23,27,0.22)', // stronger hairline
    dark: '#0c0c0d', // dark band background (bloom)
    darkFg: '#efece4', // foreground on dark band
    darkMuted: '#928f87', // muted text on dark band
  },
  // "Umeboshi Zatsu Memo" sits first but only renders Japanese glyphs
  // (limited by unicode-range in GlobalStyle); KO/EN fall through to the rest.
  fonts: {
    serif: '"Umeboshi Zatsu Memo", "Fraunces", "Noto Serif KR", Georgia, serif',
    // `script` is retired from the UI; kept for type-compat, aliased to serif.
    script: '"Umeboshi Zatsu Memo", "Fraunces", "Noto Serif KR", Georgia, serif',
    sans: '"Umeboshi Zatsu Memo", "Archivo", "IBM Plex Sans KR", system-ui, sans-serif',
    kr: '"Umeboshi Zatsu Memo", "IBM Plex Sans KR", "Archivo", system-ui, sans-serif',
    // Handwriting accent — used for the hero subhead and the Story passage so
    // the faith narrative reads in a warm, written hand. Nanum Pen Script is a
    // thin pen hand for KO/EN; Yomogi supplies the Japanese kana/kanji so JP
    // locales also render by hand (Nanum Pen has no kana, so it falls through).
    hand: '"Nanum Pen Script", "Yomogi", "Noto Sans KR", cursive',
  },
  // Fluid type: scales down on small screens, capped at the desktop size.
  fontSizes: {
    h1: 'clamp(40px, 8vw, 72px)',
    h2: 'clamp(27px, 5vw, 34px)',
    h3: 'clamp(20px, 3vw, 22px)',
    krSubhead: 'clamp(18px, 3vw, 21px)',
    bodyLg: 'clamp(16px, 2.5vw, 18px)',
    body: '16px',
    nav: '14px',
    eyebrow: '13px',
  },
  layout: {
    maxWidth: '1440px',
    pagePadding: '64px',
    sectionPadding: '96px',
  },
  breakpoints: {
    mobile: '768px',
  },
  media: {
    mobile: '@media (max-width: 768px)',
    // Header nav collapses to a hamburger earlier — the horizontal nav needs
    // more room than the page content does.
    nav: '@media (max-width: 1100px)',
  },
} as const

export type AppTheme = typeof theme
