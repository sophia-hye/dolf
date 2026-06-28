import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from '@/app/App'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { LocaleProvider } from '@/i18n/LocaleContext'
import { CartProvider } from '@/state/CartProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LocaleProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>,
)
