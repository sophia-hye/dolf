import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { App } from '@/app/App'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { LocaleProvider } from '@/i18n/LocaleContext'
import { CartProvider } from '@/state/CartProvider'
import { AuthProvider } from '@/state/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LocaleProvider>
          <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AuthProvider>
        </LocaleProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
