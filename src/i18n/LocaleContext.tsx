import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '@/i18n/types'
import {
  LocaleContext,
  dictionaries,
  type LocaleContextValue,
} from '@/i18n/context'

const SUPPORTED: Locale[] = ['ko', 'en', 'ja']
const STORAGE_KEY = 'dolf.locale'
const DEFAULT_LOCALE: Locale = 'ko'

function isSupported(code: string | undefined): code is Locale {
  return !!code && (SUPPORTED as string[]).includes(code)
}

// Pick the initial locale: a previously chosen language wins, otherwise detect
// it from the visitor's browser languages, otherwise fall back to Korean.
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isSupported(saved ?? undefined)) return saved as Locale
  } catch {
    /* storage unavailable */
  }

  const langs =
    typeof navigator !== 'undefined'
      ? (navigator.languages ?? [navigator.language]).filter(Boolean)
      : []
  for (const lang of langs) {
    const code = lang.toLowerCase().split('-')[0]
    if (isSupported(code)) return code
  }

  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      // Remember an explicit choice so it survives future visits and is not
      // overridden by browser-language detection.
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable */
    }
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
