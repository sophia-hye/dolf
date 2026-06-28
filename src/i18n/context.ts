import { createContext, useContext } from 'react'
import type { Dictionary, Locale } from '@/i18n/types'
import { ko } from '@/i18n/locales/ko'
import { en } from '@/i18n/locales/en'
import { ja } from '@/i18n/locales/ja'

export const dictionaries: Record<Locale, Dictionary> = {
  ko,
  en,
  ja,
}

export interface LocaleContextValue {
  readonly locale: Locale
  readonly setLocale: (locale: Locale) => void
  readonly t: Dictionary
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return ctx
}
