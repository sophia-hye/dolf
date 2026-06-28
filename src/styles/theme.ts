// DoLF design tokens extracted from Figma (node 3019:11)

export const theme = {
  colors: {
    cream: '#fcfbf9', // page background
    surface: '#f3f1ed', // gray section background
    ink: '#1f1f21', // primary text / footer background
    textSecondary: '#6e6e72', // muted/body text
    brandRed: '#a81212', // accent / CTA / eyebrows
    border: '#e2dfd9', // card borders / dividers
    white: '#ffffff',
  },
  fonts: {
    serif: '"Cormorant", Georgia, serif',
    script: '"Reenie Beanie", cursive',
    sans: '"Inter", "Noto Sans KR", system-ui, sans-serif',
    kr: '"Noto Sans KR", "Inter", system-ui, sans-serif',
  },
  fontSizes: {
    h1: '72px',
    h2: '34px',
    h3: '22px',
    krSubhead: '21px',
    bodyLg: '18px',
    body: '16px',
    nav: '14px',
    eyebrow: '13px',
  },
  layout: {
    maxWidth: '1440px',
    pagePadding: '64px',
    sectionPadding: '96px',
  },
} as const

export type AppTheme = typeof theme
