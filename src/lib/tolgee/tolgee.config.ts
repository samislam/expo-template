import en from '@/i18n/en.json'
import ar from '@/i18n/ar.json'
import tr from '@/i18n/tr.json'
import appConfig from '@/config/app.config'
import { FormatIcu } from '@tolgee/format-icu'
import { AppLanguages } from '@/types/app.types'
import { Tolgee, DevTools, TreeTranslationsData } from '@tolgee/react'

const apiUrl = process.env.EXPO_PUBLIC_TOLGEE_API_URL
const apiKey = process.env.EXPO_PUBLIC_TOLGEE_API_KEY

export const tolgee = Tolgee()
  .use(FormatIcu())
  .use(DevTools())
  .updateDefaults({
    apiKey,
    apiUrl,
    defaultLanguage: appConfig.defaultLanguage,
    fallbackLanguage: appConfig.fallbackLanguage,
    staticData: { en, tr, ar } satisfies Record<AppLanguages, TreeTranslationsData>,
  })

  .init()
