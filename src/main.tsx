import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { App } from '@/app/App'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { LocaleProvider } from '@/i18n/LocaleContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>,
)
