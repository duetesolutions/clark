import { useDark } from '@vueuse/core'

const useTheme = () => {
  const isDark = useDark()

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}

export default useTheme
