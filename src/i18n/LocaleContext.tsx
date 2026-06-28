import { useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '@/i18n/types'
import {
  LocaleContext,
  dictionaries,
  type LocaleContextValue,
} from '@/i18n/context'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ko')

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
