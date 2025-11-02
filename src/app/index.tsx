import { useTranslate } from '@tolgee/react'
import { useLocale } from '@/hooks/use-locale'
import { Button, Text, View } from 'react-native'

const Screen = () => {
  const { t } = useTranslate()
  const { setLanguage } = useLocale()

  return (
    <View className="flex h-screen w-screen items-center justify-center">
      <View className="w-96 gap-y-5 rounded-lg bg-blue-500 p-10">
        <Text className="text-center text-lg font-extrabold text-white">
          {t('@t<hello-world>')}
        </Text>
        <Button title="العربية" onPress={() => setLanguage('ar')} />
        <Button title="English" onPress={() => setLanguage('en')} />
        <Button title="Turcke" onPress={() => setLanguage('tr')} />
      </View>
    </View>
  )
}
export default Screen
