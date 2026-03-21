'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Language, siteCopy } from '@/content/siteCopy'

const STORAGE_KEY = 'cch-language'

const htmlLang: Record<Language, string> = {
  en: 'en',
  th: 'th',
  jp: 'ja',
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  copy: (typeof siteCopy)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('th')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'th' || saved === 'jp') {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = htmlLang[language]
    document.title = siteCopy[language].meta.title
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: siteCopy[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
