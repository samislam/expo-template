import { useTolgee } from '@tolgee/react'
import { AppLanguages } from '@/types/app.types'
import { LOCALE_STORAGE_KEY } from '@/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Hook that manages language switching and persistence across app restarts. Works in both Expo
 * Native and Web (AsyncStorage → LocalStorage backend on web).
 */
export const useLocale = () => {
  const tolgee = useTolgee()

  const setLanguage = async (lang: AppLanguages) => {
    try {
      await tolgee.changeLanguage(lang)
      await AsyncStorage.setItem(LOCALE_STORAGE_KEY, lang)
      console.log(`✅ Language switched to ${lang}`)
    } catch (err) {
      console.error('❌ Failed to change language:', err)
    }
  }

  const dir = (tolgee.getLanguage() as AppLanguages) === 'ar' ? ('rtl' as const) : ('ltr' as const)

  return {
    dir,
    setLanguage,

    get locale() {
      return tolgee.getLanguage()
    },
  }
}
