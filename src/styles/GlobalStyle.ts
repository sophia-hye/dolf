import { createGlobalStyle } from 'styled-components'
import umeboshiWoff2 from '@/assets/fonts/umeboshi-zatsu-memo.woff2'

export const GlobalStyle = createGlobalStyle`
  /* Japanese handwriting font (toga's Umeboshi Zatsu Memo). unicode-range
     limits it to Japanese glyphs, so KO/EN text keeps its own fonts. */
  @font-face {
    font-family: 'Umeboshi Zatsu Memo';
    src: url(${umeboshiWoff2}) format('woff2');
    font-display: swap;
    unicode-range: U+3000-303F, U+3040-309F, U+30A0-30FF, U+4E00-9FFF, U+FF00-FFEF, U+FF65-FF9F;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    width: 100%;
  }
`
