import { useDark } from '@vueuse/core'

const useTheme = () => {
  const isDark = useDark({
    initialValue: 'auto',
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}

export default useTheme
