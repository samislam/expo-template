import './globals.css'
import 'react-native-reanimated'
import { useMemo } from 'react'
import { Slot } from 'expo-router'
import appConfig from '@/config/app.config'
import { useColorScheme } from 'react-native'
import { TolgeeProvider } from '@tolgee/react'
import { tolgee } from '@/lib/tolgee/tolgee.config'
import { useInitTolgee } from '@/lib/tolgee/init-tolgee'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native'

const Layout = () => {
  const isTolgeeReady = useInitTolgee()
  const system = useColorScheme() ?? 'light'
  const mode = appConfig.defaultTheme === 'system' ? system : appConfig.defaultTheme
  const navTheme = useMemo(() => (mode === 'dark' ? DarkTheme : DefaultTheme), [mode])
  if (!isTolgeeReady) return null

  return (
    <TolgeeProvider tolgee={tolgee}>
      <NavigationThemeProvider value={navTheme}>
        <Slot />
      </NavigationThemeProvider>
    </TolgeeProvider>
  )
}
export default Layout
