import { tolgee } from './tolgee.config'
import appConfig from '@/config/app.config'
import { useEffect, useState } from 'react'
import { LOCALE_STORAGE_KEY } from '@/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function initTolgee() {
  const stored = await AsyncStorage.getItem(LOCALE_STORAGE_KEY)
  const lang = stored ?? appConfig.defaultLanguage
  await tolgee.changeLanguage(lang)
  return lang
}

export const useInitTolgee = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initTolgee().finally(() => setReady(true))
  }, [])

  return ready
}
