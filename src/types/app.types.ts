import appConfig from '@/config/app.config'

export interface AppConfig<L extends string> {
  appName: string
  appDescription: string
  defaultTheme: AppThemes
  defaultLanguage: NoInfer<L>
  fallbackLanguage: NoInfer<L>
  readonly languages: L[]
}

export type AppLanguages = (typeof appConfig.languages)[number]
export type AppThemes = 'light' | 'dark' | 'system'
