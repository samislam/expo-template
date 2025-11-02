import { concat } from 'concat-str'
import { createAppConfig } from '@/utils/create-app-config'

export default createAppConfig({
  defaultTheme: 'light',
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  languages: ['en', 'ar', 'tr'],
  appName: 'Expo starter',
  appDescription: concat('Expo starter template!'),
})
